import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Technical Due Diligence for Longevity & Health Robotics | Ferreira CTO",
  description: "Expert technical and regulatory advisory for longevity biotech and health robotics investments. FDA pathways, HIPAA compliance, and health-tech architecture.",
  keywords: ["technical due diligence", "longevity biotech", "health robotics", "FDA consulting", "HIPAA compliance"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        {children}
        <CookieConsent />
        <SpeedInsights />
      </body>
    </html>
  );
}
