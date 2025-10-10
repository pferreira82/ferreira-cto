import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: {
    default: "Ferreira CTO Inc. — Technical Advisory for Longevity & Health Robotics",
    template: "%s | Ferreira CTO Inc."
  },
  description: "Technical due diligence and regulatory readiness for longevity biotech, health robotics, and digital health companies. Fractional CTO services for life extension technology.",
  keywords: ["Longevity", "Health Robotics", "Technical Due Diligence", "Regulatory Readiness", "FDA", "Biotech", "Elder Care", "Fractional CTO"],
  authors: [{ name: "Ferreira CTO Inc." }],
  creator: "Ferreira CTO Inc.",
  metadataBase: new URL("https://ferreiracto.com"),
  openGraph: {
    title: "Ferreira CTO Inc. — Technical Advisory for Longevity & Health Robotics",
    description: "Technical due diligence and regulatory readiness for longevity companies.",
    type: "website",
    locale: "en_US",
    siteName: "Ferreira CTO Inc."
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferreira CTO Inc.",
    description: "Technical advisory for longevity and health robotics companies"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white antialiased ${inter.className}`}>
        <div className="gradient-mesh min-h-screen">
          {children}
          <SpeedInsights />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
