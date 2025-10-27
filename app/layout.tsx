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
    default: "Ferreira CTO — Technical Due Diligence for Longevity & Health Robotics",
    template: "%s | Ferreira CTO"
  },
  description: "Technical due diligence, regulatory readiness, and fractional CTO services for longevity biotech, elder care robotics, and digital health companies. FDA/HIPAA expertise.",
  keywords: ["Technical Due Diligence", "Longevity", "Health Robotics", "Elder Care", "FDA", "Regulatory Readiness", "Fractional CTO", "Biotech", "Digital Health"],
  authors: [{ name: "Ferreira CTO" }],
  creator: "Ferreira CTO",
  metadataBase: new URL("https://ferreiracto.com"),
  openGraph: {
    title: "Ferreira CTO — Technical Advisory for Longevity & Health Robotics",
    description: "Technical due diligence and regulatory readiness for longevity and health robotics investments.",
    type: "website",
    locale: "en_US",
    siteName: "Ferreira CTO"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferreira CTO — Technical Due Diligence for Longevity",
    description: "Technical advisory for longevity biotech and health robotics companies"
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
