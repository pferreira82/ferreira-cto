# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev         # Start development server
npm run build       # Production build
npm run lint        # Run ESLint with auto-fix
npm run type-check  # TypeScript type checking (tsc --noEmit)
```

## Tech Stack

- **Next.js 14** with App Router and experimental typed routes
- **TypeScript** (strict mode, path alias `@/*`)
- **Tailwind CSS** with custom brand colors (blue gradient palette), animations (`fade-in`, `slide-up`, `pulse-soft`), and custom shadow utilities
- **Zod** for schema validation
- **Resend** (primary) + **Nodemailer/SMTP** (fallback) for transactional email
- **Vercel Analytics** + **Speed Insights** for monitoring
- **Supabase** and **HubSpot** integrations (env vars in `.env.local`)

## Architecture

This is a marketing + tools site for a fractional CTO consultancy focused on hardware startups (robotics, IoT, edge AI).

**Pages/Routes:**
- `/` — Landing page: hero, services, pricing, case studies, contact form
- `/podcast` — Podcast listings with multi-platform subscription switcher
- `/assessment` — Interactive architecture assessment tool (17 questions, multi-section, risk scoring with email capture gate)
- `/privacy` — Privacy policy

**API Routes:**
- `POST /api/contact` — Contact form: Zod validation → IP rate limiting (5 req/15 min) → honeypot check → Resend or SMTP email send
- `GET /api/podcast-feed` — Proxies Anchor FM RSS, parses with custom regex (handles CDATA), caches for 1 hour via ISR

**Content centralization:** `lib/content.ts` is the single source of truth for site copy — nav links, pricing tiers, case studies, and Build Anyway program details. Edit copy here, not in component files. Note: some URLs are marked `PLACEHOLDER_URL` awaiting real destinations.

**Key utilities:**
- `lib/rate-limiter.ts` — In-memory Map-based rate limiter, auto-cleans expired entries
- `lib/mailer.ts` — `sendContactEmail()` tries Resend first, falls back to SMTP, logs to console if neither is configured
- `lib/validators.ts` — Zod `ContactSchema` used both client-side and in the API route
- `lib/utils.ts` — `cn()` (clsx wrapper), `getClientIP()`, `validateEmail()`, `truncate()`

**Security headers** are set in `next.config.js`: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and a CSP that includes Vercel Live, HubSpot, Apollo, and Plausible origins.

## Environment Variables

Copy `.env.example` and fill in values. Email requires either Resend or SMTP:

```env
RESEND_API_KEY=
# OR
SMTP_HOST=  SMTP_PORT=  SMTP_USER=  SMTP_PASS=

CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
FROM_EMAIL=

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

HUBSPOT_API_KEY=
JWT_SECRET=
```
