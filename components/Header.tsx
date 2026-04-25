'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Headphones } from 'lucide-react';
import { nav } from '@/lib/content';
import type { Route } from 'next';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ferreira-cto-logo-header.svg"
              alt="Ferreira CTO"
              height={36}
              style={{ width: 'auto', height: '119px' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href as Route}
                className={link.label === 'Podcast'
                  ? 'flex items-center gap-2 text-slate-300 hover:text-white transition-colors'
                  : 'text-slate-300 hover:text-white transition-colors'
                }
              >
                {link.label === 'Podcast' && <Headphones className="w-4 h-4" />}
                {link.label}
              </Link>
            ))}
            <Link
              href={nav.cta.href as Route}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-all"
            >
              {nav.cta.label}
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
              {nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href as Route}
                  className={link.label === 'Podcast'
                    ? 'flex items-center gap-2 text-slate-300 hover:text-white transition-colors'
                    : 'text-slate-300 hover:text-white transition-colors'
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label === 'Podcast' && <Headphones className="w-4 h-4" />}
                  {link.label}
                </Link>
              ))}
              <Link
                href={nav.cta.href as Route}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-all text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.cta.label}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
