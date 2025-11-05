#!/bin/bash

# Website Fixes Script - Anchor Navigation + Cookie Consent
# Fixes: Broken anchors, adds smooth scrolling, implements cookie consent
# Run from project root: bash fix-website.sh

set -e  # Exit on error

echo "🔧 Applying website fixes..."
echo ""

# ============================================================================
# FIX #1: Section Component - Add id prop
# ============================================================================
echo "📄 Fixing Section component (anchor navigation)..."

cat > components/Section.tsx << 'EOFSECTION'
interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section 
      id={id}  // FIXED: Now passes id to enable anchor navigation
      className="container mx-auto px-6 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
EOFSECTION

echo "✅ Section component fixed"
echo ""

# ============================================================================
# FIX #2: Add Smooth Scrolling to globals.css
# ============================================================================
echo "🎨 Adding smooth scrolling CSS..."

# Check if the CSS already has smooth scrolling
if ! grep -q "scroll-behavior: smooth" app/globals.css 2>/dev/null; then
  cat >> app/globals.css << 'EOFCSS'

/* ============================================
   ANCHOR NAVIGATION FIXES
   ============================================ */

/* Enable smooth scrolling for all anchor links */
html {
  scroll-behavior: smooth;
}

/* Add scroll offset to prevent fixed header from covering content */
section[id] {
  scroll-margin-top: 80px;
}

/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

/* Enhance focus visibility for accessibility */
a:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
  border-radius: 4px;
}
EOFCSS
  echo "✅ Smooth scrolling CSS added"
else
  echo "⚠️  Smooth scrolling CSS already exists, skipping"
fi

echo ""

# ============================================================================
# FIX #3: Create Cookie Consent Component
# ============================================================================
echo "🍪 Creating cookie consent popup..."

cat > components/CookieConsent.tsx << 'EOFCOOKIE'
'use client';
import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/declined cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    
    // Initialize analytics or other tracking here
    console.log('Cookies accepted - Initialize tracking');
    
    // Example: Google Analytics
    // if (typeof window !== 'undefined' && window.gtag) {
    //   window.gtag('consent', 'update', {
    //     analytics_storage: 'granted'
    //   });
    // }
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    console.log('Cookies declined - No tracking initialized');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="container mx-auto max-w-4xl">
        <div className="relative bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 backdrop-blur-xl bg-opacity-95">
          {/* Close button */}
          <button
            onClick={declineCookies}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Cookie className="w-6 h-6 text-blue-400" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">We Value Your Privacy</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and 
                provide personalized content. By clicking "Accept", you consent to our use of cookies. 
                Read our{' '}
                <a 
                  href="/privacy" 
                  className="text-blue-400 hover:text-blue-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                {' '}to learn more.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={declineCookies}
                className="px-6 py-2.5 border border-slate-600 hover:border-slate-500 rounded-lg font-medium transition-all text-sm whitespace-nowrap"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-all text-sm whitespace-nowrap"
              >
                Accept Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
EOFCOOKIE

echo "✅ CookieConsent component created"
echo ""

# ============================================================================
# FIX #4: Add Cookie Consent Animation to globals.css
# ============================================================================
echo "🎨 Adding cookie consent animation..."

if ! grep -q "@keyframes slide-up" app/globals.css 2>/dev/null; then
  cat >> app/globals.css << 'EOFANIM'

/* ============================================
   COOKIE CONSENT ANIMATION
   ============================================ */

@keyframes slide-up {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}
EOFANIM
  echo "✅ Cookie consent animation added"
else
  echo "⚠️  Animation already exists, skipping"
fi

echo ""

# ============================================================================
# FIX #5: Update Layout to Include Cookie Consent
# ============================================================================
echo "📄 Updating root layout..."

cat > app/layout.tsx << 'EOFLAYOUT'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Technical Due Diligence for Longevity & Health Robotics | Ferreira CTO",
  description: "Expert technical and regulatory advisory for longevity biotech and health robotics investments. FDA pathways, HIPAA compliance, and health-tech architecture.",
  keywords: ["technical due diligence", "longevity biotech", "health robotics", "FDA consulting", "HIPAA compliance", "medical device consulting"],
  authors: [{ name: "Paulo Ferreira" }],
  openGraph: {
    title: "Ferreira CTO - Technical Due Diligence for Longevity & Health Robotics",
    description: "Your technical quarterback for longevity biotech and health robotics investments",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferreira CTO - Technical Due Diligence",
    description: "Expert technical advisory for longevity and health robotics",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
EOFLAYOUT

echo "✅ Root layout updated with cookie consent"
echo ""

# ============================================================================
# FIX #6: Create Privacy Policy Page (Stub)
# ============================================================================
echo "📄 Creating privacy policy stub..."

mkdir -p app/privacy

cat > app/privacy/page.tsx << 'EOFPRIVACY'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="relative">
      <Header />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose prose-invert prose-slate max-w-none">
            <p className="text-xl text-slate-300 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-slate-300 mb-4">
                When you use our website, we may collect the following information:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Contact information (name, email address) when you submit forms</li>
                <li>Usage data and analytics through cookies</li>
                <li>Technical information (browser type, IP address, device information)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-slate-300 mb-4">
                We use collected information to:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Respond to your inquiries and consultation requests</li>
                <li>Improve our website and services</li>
                <li>Send relevant updates about our services (with your consent)</li>
                <li>Analyze website traffic and user behavior</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Cookies</h2>
              <p className="text-slate-300 mb-4">
                We use cookies to enhance your browsing experience. You can control cookie 
                preferences through your browser settings or our cookie consent banner.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Data Protection</h2>
              <p className="text-slate-300 mb-4">
                We implement appropriate security measures to protect your personal information 
                from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
              <p className="text-slate-300 mb-4">
                We may use third-party services for analytics and communication. These services 
                have their own privacy policies governing their use of information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-slate-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
              <p className="text-slate-300 mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-slate-300">
                Email:{" "}
                <a 
                  href="mailto:contact@ferreiracto.com" 
                  className="text-blue-400 hover:text-blue-300"
                >
                  contact@ferreiracto.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
              <p className="text-slate-300">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the 
                "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
EOFPRIVACY

echo "✅ Privacy policy page created"
echo ""

# ============================================================================
# SUMMARY
# ============================================================================
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ ALL FIXES APPLIED SUCCESSFULLY!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 Changes Made:"
echo ""
echo "  1. ✅ Fixed Section component - anchors now work"
echo "  2. ✅ Added smooth scrolling CSS"
echo "  3. ✅ Added scroll offset for fixed headers"
echo "  4. ✅ Created CookieConsent component"
echo "  5. ✅ Added cookie consent animation"
echo "  6. ✅ Updated root layout with cookie banner"
echo "  7. ✅ Created privacy policy page"
echo "  8. ✅ Enhanced SEO metadata in layout"
echo ""
echo "🍪 Cookie Consent Features:"
echo "  • Modern slide-up animation"
echo "  • Accept/Decline buttons"
echo "  • Stores preference in localStorage"
echo "  • Links to privacy policy"
echo "  • Accessible with keyboard navigation"
echo "  • Mobile-responsive design"
echo ""
echo "🎯 Test Your Changes:"
echo ""
echo "  1. Start dev server:"
echo "     npm run dev"
echo ""
echo "  2. Test anchor navigation:"
echo "     • Click 'View Consulting Services' → should scroll to #consulting"
echo "     • Click 'Schedule a Call' → should scroll to #contact"
echo "     • Scrolling should be smooth"
echo ""
echo "  3. Test cookie consent:"
echo "     • Banner appears after 1 second"
echo "     • Click 'Accept' → banner disappears, preference saved"
echo "     • Refresh page → banner doesn't reappear"
echo "     • Clear localStorage → banner reappears"
echo ""
echo "  4. Test privacy policy:"
echo "     • Click privacy link in cookie banner"
echo "     • Page should load at /privacy"
echo ""
echo "🧪 Browser Console Tests:"
echo ""
echo "  # Test if anchors exist"
echo "  document.getElementById('consulting')"
echo "  document.getElementById('contact')"
echo ""
echo "  # Test cookie preference"
echo "  localStorage.getItem('cookieConsent')"
echo ""
echo "  # Clear cookie preference (to see banner again)"
echo "  localStorage.removeItem('cookieConsent')"
echo ""
echo "📱 Mobile Testing:"
echo "  • Open dev tools (F12)"
echo "  • Toggle device toolbar (Ctrl+Shift+M)"
echo "  • Test on iPhone/Android sizes"
echo "  • Cookie banner should be responsive"
echo ""
echo "🚀 Ready to Deploy!"
echo ""
echo "  git add ."
echo "  git commit -m 'Fix anchor navigation and add cookie consent'"
echo "  git push"
echo ""
echo "💡 Optional Enhancements:"
echo ""
echo "  • Add Google Analytics tracking (when cookies accepted)"
echo "  • Customize cookie preferences (analytics vs marketing)"
echo "  • Add cookie settings page"
echo "  • Integrate with real analytics platform"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
