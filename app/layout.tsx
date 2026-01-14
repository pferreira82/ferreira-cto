import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Architecture Reviews for Hardware Startups | Before the Rewrite",
    description: "Prevent $500K+ architecture mistakes before you scale. Expert reviews for robotics, AI, and medical device startups at Seed to Series A. HIPAA compliance & edge computing. Boston-based.",
    keywords: [
        "hardware architecture review",
        "prevent architecture rewrite",
        "robotics consulting",
        "edge computing architecture",
        "HIPAA compliance",
        "health robotics",
        "medical device architecture",
        "hardware startup CTO",
        "technical debt prevention",
        "Boston hardware startups"
    ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // @ts-ignore
  return (
    <html lang="en">
        <head>
            {/* Site-wide Schema Markup */}
            <Script
                id="site-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        "name": "Ferreira CTO",
                        "description": "Architecture reviews for hardware startups",
                        "url": "https://ferreiracto.com",
                        "areaServed": {
                            "@type": "City",
                            "name": "Boston",
                            "containedIn": {
                                "@type": "State",
                                "name": "Massachusetts"
                            }
                        },
                        "serviceType": [
                            "Architecture Review",
                            "Hardware Startup Consulting",
                            "HIPAA Compliance",
                            "Edge Computing Architecture",
                            "Robotics Systems Design"
                        ],
                        "founder": {
                            "@type": "Person",
                            "name": "Peter Ferreira"
                        }
                    })
                }}
            />
        </head>
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
