#!/bin/bash

# Hotfix - Restore Background Color
# Fixes the layout.tsx to include proper background styling
# Run from project root: bash fix-background.sh

set -e

echo "🎨 Fixing background color..."
echo ""

# ============================================================================
# FIX: Update Layout with Proper Background Styling
# ============================================================================
echo "📄 Updating layout.tsx with background color..."

cat > app/layout.tsx << 'EOFLAYOUT'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

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
      </body>
    </html>
  );
}
EOFLAYOUT

echo "✅ Layout updated with background color"
echo ""
echo "🎨 Background should now be:"
echo "   • Dark slate (bg-slate-950)"
echo "   • White text (text-white)"
echo "   • Smooth fonts (antialiased)"
echo ""
echo "🧪 Test now: npm run dev"
echo ""
echo "If still wrong, hard refresh: Ctrl+Shift+R"
echo ""
