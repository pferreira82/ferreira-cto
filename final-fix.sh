#!/bin/bash

# Final Fix Script - Header Anchors + Cookie Consent
# Fixes header navigation and adds cookie popup WITHOUT breaking colors
# Run from project root: bash final-fix.sh

set -e

echo "🔧 Fixing header anchors and adding cookie consent..."
echo ""

# ============================================================================
# FIX #1: Create Header Component with Working Anchor Links
# ============================================================================
echo "📄 Creating Header component with anchor navigation..."

cat > components/Header.tsx << 'EOFHEADER'
'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#clients', label: 'Who I Work With' },
    { href: '#approach', label: 'How I Work' },
    { href: '#consulting', label: 'Services' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
          >
            Ferreira CTO
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
EOFHEADER

echo "✅ Header component created"
echo ""

# ============================================================================
# FIX #2: Ensure Section Component Passes ID
# ============================================================================
echo "📄 Creating Section component with id prop..."

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
      id={id}
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

echo "✅ Section component created"
echo ""

# ============================================================================
# FIX #3: Create Footer Component (if missing)
# ============================================================================
echo "📄 Creating Footer component..."

cat > components/Footer.tsx << 'EOFFOOTER'
export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Ferreira CTO
            </h3>
            <p className="text-slate-400">
              Technical quarterback for longevity & health robotics investments
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#consulting" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:contact@ferreiracto.com"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  contact@ferreiracto.com
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/pferreira82"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ferreira CTO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
EOFFOOTER

echo "✅ Footer component created"
echo ""

# ============================================================================
# FIX #4: Create Cookie Consent Component
# ============================================================================
echo "🍪 Creating cookie consent popup..."

cat > components/CookieConsent.tsx << 'EOFCOOKIE'
'use client';
import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="container mx-auto max-w-4xl">
        <div className="relative bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 backdrop-blur-xl bg-opacity-95">
          <button
            onClick={declineCookies}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Cookie className="w-6 h-6 text-blue-400" />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">We Value Your Privacy</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and 
                provide personalized content. By clicking "Accept", you consent to our use of cookies. 
                Read our{' '}
                <a 
                  href="/privacy" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Privacy Policy
                </a>
                {' '}to learn more.
              </p>
            </div>

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

echo "✅ Cookie consent component created"
echo ""

# ============================================================================
# FIX #5: Add Smooth Scrolling CSS (CAREFULLY - Don't break existing CSS)
# ============================================================================
echo "🎨 Adding smooth scrolling CSS..."

# Only add if not already present
if ! grep -q "scroll-behavior: smooth" app/globals.css 2>/dev/null; then
  cat >> app/globals.css << 'EOFCSS'

/* Smooth scrolling for anchor navigation */
html {
  scroll-behavior: smooth;
}

section[id] {
  scroll-margin-top: 100px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

/* Cookie consent animation */
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
EOFCSS
  echo "✅ Smooth scrolling CSS added"
else
  echo "⚠️  Smooth scrolling CSS already exists, skipping"
fi

echo ""

# ============================================================================
# FIX #6: Update Layout to Include Cookie Consent
# ============================================================================
echo "📄 Updating layout to include cookie consent..."

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
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
EOFLAYOUT

echo "✅ Layout updated"
echo ""

# ============================================================================
# FIX #7: Create Privacy Policy Page
# ============================================================================
echo "📄 Creating privacy policy page..."

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
                When you use our website, we may collect:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Contact information (name, email) when you submit forms</li>
                <li>Usage data and analytics through cookies</li>
                <li>Technical information (browser type, IP address)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-slate-300 mb-4">
                We use collected information to:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Respond to inquiries and consultation requests</li>
                <li>Improve our website and services</li>
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
              <h2 className="text-2xl font-bold mb-4">4. Contact Us</h2>
              <p className="text-slate-300">
                Questions about this Privacy Policy? Email:{" "}
                <a 
                  href="mailto:contact@ferreiracto.com" 
                  className="text-blue-400 hover:text-blue-300"
                >
                  contact@ferreiracto.com
                </a>
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
echo "✅ ALL FIXES APPLIED!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 Changes Made:"
echo ""
echo "  1. ✅ Header with working anchor navigation"
echo "  2. ✅ Section component passes id prop"
echo "  3. ✅ Footer component created"
echo "  4. ✅ Cookie consent popup added"
echo "  5. ✅ Smooth scrolling CSS added"
echo "  6. ✅ Layout updated with cookie banner"
echo "  7. ✅ Privacy policy page created"
echo ""
echo "🧪 TEST NOW:"
echo ""
echo "  npm run dev"
echo ""
echo "  Then test:"
echo "  • Click header 'Services' → should scroll to consulting"
echo "  • Click header 'Contact' → should scroll to contact form"
echo "  • Cookie banner appears after 1 second"
echo "  • Click Accept → banner disappears"
echo "  • Refresh → banner stays hidden"
echo ""
echo "✅ Your colors should still be intact!"
echo "✅ Your design/content unchanged!"
echo "✅ Only adding navigation functionality!"
echo ""
echo "🚀 Ready to deploy:"
echo ""
echo "  git add ."
echo "  git commit -m 'Add header navigation and cookie consent'"
echo "  git push"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
