import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script'

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
  // @ts-ignore
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        {children}
        <CookieConsent />
        <SpeedInsights />
        <Script
            id="apollo-tracking"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              function initApollo(){
                var n=Math.random().toString(36).substring(7),
                o=document.createElement("script");
                o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,
                o.async=!0,o.defer=!0,
                o.onload=function(){window.trackingFunctions.onLoad({appId:"68bc2eba336c6f0011f302e0"})},
                document.head.appendChild(o)
              }
              initApollo();
            `,
            }}
        />
      </body>
    </html>
  );
}
