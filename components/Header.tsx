'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Headphones } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Ferreira CTO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#how-it-works" className="text-slate-300 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="/#pricing" className="text-slate-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/#expertise" className="text-slate-300 hover:text-white transition-colors">
              Expertise
            </Link>
            <Link href="/podcast" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
              <Headphones className="w-4 h-4" />
              Podcast
            </Link>
            <Link 
              href="/#contact" 
              className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-800">
            <div className="flex flex-col gap-4">
              <Link 
                href="/#how-it-works" 
                className="text-slate-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="/#pricing" 
                className="text-slate-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/#expertise" 
                className="text-slate-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Expertise
              </Link>
              <Link 
                href="/podcast" 
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Headphones className="w-4 h-4" />
                Podcast
              </Link>
              <Link 
                href="/#contact" 
                className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-all text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
