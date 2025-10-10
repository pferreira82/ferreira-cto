import type { ContactInput } from "./validators";

        export async function sendContactEmail(data: ContactInput, clientIp?: string) {
          // Honeypot check
          if (data.company && data.company.trim().length > 0) {
            console.log(`[ContactForm] Honeypot triggered from IP: ${clientIp}`);
            return { success: true, skipped: true };
          }

          const to = process.env.CONTACT_TO_EMAIL || "contact@ferreiracto.com";
          const from = process.env.CONTACT_FROM_EMAIL || "Ferreira CTO <no-reply@ferreiracto.com>";

          // Try Resend first
          const resendKey = process.env.RESEND_API_KEY;
          if (resendKey) {
            try {
                const { Resend } = await import("resend");
              const resend = new Resend(resendKey);

              const subject = `New Inquiry from ${data.name}`;
              const html = `
                <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
                  <h2 style="color: #1a7cff;">New Contact Form Submission</h2>

                  <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                    <p><strong>Company:</strong> ${data.org || 'Not provided'}</p>
                    ${clientIp ? `<p><strong>IP:</strong> ${clientIp}</p>` : ''}
                  </div>

                  <div style="margin: 20px 0;">
                    <strong>Message:</strong>
                    <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin-top: 10px; white-space: pre-wrap;">${data.message}</div>
                  </div>

                  <p style="color: #64748b; font-size: 14px; margin-top: 30px;">
                    Sent via Ferreira CTO contact form
                  </p>
                </div>
              `;

              const result = await resend.emails.send({
                from,
                to,
                subject,
                html,
                text: `Name: ${data.name}
Email: ${data.email}
Company: ${data.org || 'Not provided'}

Message:
${data.message}`
              });

              console.log(`[ContactForm] Email sent successfully via Resend:`, result);
              return { success: true, provider: 'resend', result };

            } catch (error) {
              console.error(`[ContactForm] Resend error:`, error);
              // Fall through to SMTP
            }
          }

          // Fallback to SMTP
          if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
            try {
              const nodemailer = await import("nodemailer");
              const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT || 587),
                secure: process.env.SMTP_SECURE === "true",
                auth: {
                  user: process.env.SMTP_USER,
                  pass: process.env.SMTP_PASS,
                },
              });

              const info = await transporter.sendMail({
                from,
                to,
                subject: `New Inquiry from ${data.name}`,
                text: `Name: ${data.name}
Email: ${data.email}
Company: ${data.org || 'Not provided'}

Message:
${data.message}

IP: ${clientIp || 'Unknown'}`,
              });

              console.log(`[ContactForm] Email sent successfully via SMTP:`, info.messageId);
              return { success: true, provider: 'smtp', info };

            } catch (error) {
              console.error(`[ContactForm] SMTP error:`, error);
              throw error;
            }
          }

          // No email service configured - log only
          console.log(`[ContactForm] No email service configured. Message from ${data.name} (${data.email}):`, data.message);
          return { 
            success: true, 
            provider: 'console',
            message: "Email service not configured. Message logged to server console." 
          };
        }