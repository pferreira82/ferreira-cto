import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL('https://ferreiracto.com'),
    title: {
        default: "Ferreira CTO | Fractional Strategic Advisory for Hardware & Edge AI Founders",
        template: "%s | Ferreira CTO",
    },
    description: "Fractional strategic advisory for hardware, edge AI, and deeptech founders. Not implementation — strategy. Pressure-test your decisions before they become expensive mistakes. Also home of the Build Anyway Program.",
    keywords: [
        "fractional CTO",
        "fractional strategic advisor",
        "hardware startup advisor",
        "edge AI startup consulting",
        "deeptech founder advisory",
        "startup strategy",
        "hardware founder mentor",
        "IoT startup advisor",
        "healthtech startup advisory",
        "Build Anyway program",
    ],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://ferreiracto.com',
        siteName: 'Ferreira CTO',
        title: 'Ferreira CTO | Fractional Strategic Advisory for Hardware & Edge AI Founders',
        description: 'Fractional strategic advisory for hardware, edge AI, and deeptech founders. Pressure-test your decisions before they become expensive mistakes.',
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Ferreira CTO' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ferreira CTO | Fractional Strategic Advisory for Hardware & Edge AI Founders',
        description: 'Fractional strategic advisory for hardware, edge AI, and deeptech founders. Pressure-test your decisions before they become expensive mistakes.',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://ferreiracto.com',
    },
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
                        "description": "Fractional strategic advisory for hardware, edge AI, and deeptech founders",
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
