import { NextRequest, NextResponse } from "next/server";
import { ContactSchema } from "@/lib/validators";
import { sendContactEmail } from "@/lib/mailer";
import { contactRateLimiter } from "@/lib/rate-limiter";
import { getClientIP } from "@/lib/utils";

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting and logging
    const clientIp = getClientIP(request) || 'unknown';

    // Rate limiting
    const rateLimitResult = contactRateLimiter.check(clientIp);
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { 
          error: "Too many requests. Please try again later.",
          retryAfter: Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)
        },
        { 
          status: 429,
          headers: {
            'Retry-After': Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000).toString(),
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.resetTime.toString()
          }
        }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validationResult = ContactSchema.safeParse(body);

    if (!validationResult.success) {
      console.log(`[ContactForm] Validation failed from IP ${clientIp}:`, validationResult.error.issues);
      return NextResponse.json(
        { 
          error: "Invalid form data",
          details: validationResult.error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        },
        { status: 400 }
      );
    }

    // Send email
    const emailResult = await sendContactEmail(validationResult.data, clientIp);

    if (emailResult.skipped) {
      // Honeypot triggered - return success to not reveal the honeypot
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ 
      success: true,
      message: "Message sent successfully!"
    });

  } catch (error: any) {
    console.error(`[ContactForm] Server error:`, error);

    return NextResponse.json(
      { 
        error: "Failed to send message. Please try again later.",
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}