import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: {
    default: "Ferreira CTO Inc. — Fractional CTO for AI, Robotics & SaaS",
    template: "%s | Ferreira CTO Inc."
  },
  description: "Fractional CTO services specializing in AI, robotics, and SaaS. Strategy, architecture, and execution for startups and SMBs.",
  keywords: ["Fractional CTO", "AI", "Robotics", "SaaS", "Technology Strategy", "Startup CTO"],
  authors: [{ name: "Ferreira CTO Inc." }],
  creator: "Ferreira CTO Inc.",
  metadataBase: new URL("https://ferreiracto.com"),
  openGraph: {
    title: "Ferreira CTO Inc. — Fractional CTO for AI, Robotics & SaaS",
    description: "Strategy, architecture, and execution for ambitious products.",
    type: "website",
    locale: "en_US",
    siteName: "Ferreira CTO Inc."
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferreira CTO Inc.",
    description: "Fractional CTO for AI, Robotics & SaaS"
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
        </div>
      </body>
    </html>
  );
}