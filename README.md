# Ferreira CTO Inc. — Landing Page

A production-ready Next.js landing page for **Ferreira CTO Inc.**, a fractional CTO service specializing in AI, robotics, and SaaS development.

## ✨ Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Working Contact Form**: Integrated with Resend or SMTP with rate limiting and spam protection
- **Responsive Design**: Mobile-first approach with smooth animations
- **SEO Optimized**: Proper meta tags, Open Graph, and structured data
- **Performance**: Optimized images, fonts, and Core Web Vitals
- **Security**: CSRF protection, rate limiting, and input validation
- **TypeScript**: Full type safety throughout the application
- **Production Ready**: Docker support, proper error handling, and logging

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (recommend 20 LTS)
- npm, yarn, or pnpm

### Installation

```bash
# Clone or extract the project
cd ferreira-cto

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Email Configuration

The contact form supports two email providers:

#### Option 1: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`:

```env
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_TO_EMAIL=your-email@domain.com
CONTACT_FROM_EMAIL=Your Name <noreply@yourdomain.com>
```

#### Option 2: SMTP

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO_EMAIL=your-email@domain.com
CONTACT_FROM_EMAIL=Your Name <noreply@yourdomain.com>
```

## 📁 Project Structure

```
ferreira-cto/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ContactForm.tsx
│   └── ...
├── lib/                   # Utility functions
│   ├── validators.ts      # Zod schemas
│   ├── mailer.ts         # Email service
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   ├── images/
│   ├── favicon.svg
│   └── logo.svg
└── ...config files
```

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.ts` to update the brand color palette:

```typescript
colors: {
  brand: {
    50: "#EEF6FF",
    500: "#1A7CFF",  // Primary brand color
    900: "#031633",
    // ... rest of palette
  }
}
```

### Content

- **Hero Section**: Edit `app/page.tsx`
- **Services**: Update the `SERVICES` array
- **Case Studies**: Modify the `CASE_STUDIES` array
- **Contact Info**: Update footer and contact section

### Images

Replace SVG files in `public/images/` and `public/logo.svg` with your own assets.

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Code Quality

The project includes:

- **ESLint**: Code linting with Next.js recommended config
- **TypeScript**: Strict type checking
- **Prettier**: Code formatting (add your own config)

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The app can be deployed to any platform supporting Node.js:

- Netlify
- Railway
- Render
- DigitalOcean App Platform

## 🔒 Security Features

- **Rate Limiting**: Contact form has built-in rate limiting
- **Honeypot**: Spam protection via hidden form field
- **Input Validation**: Zod schemas for all form inputs
- **CSRF Protection**: Next.js built-in CSRF protection
- **Security Headers**: X-Frame-Options, CSP, etc.

## 📊 Performance

The site is optimized for performance:

- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with proper sizing
- **Font Optimization**: Inter font with `font-display: swap`
- **Code Splitting**: Automatic with Next.js App Router
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## 🧪 Testing

Add your preferred testing framework:

```bash
# Example with Jest and Testing Library
npm install -D jest @testing-library/react @testing-library/jest-dom
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or support, please contact [contact@ferreiracto.com](mailto:contact@ferreiracto.com).

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.