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
          <Link href="/" className="flex items-center" aria-label="Ferreira CTO">
            <style>{`
              @keyframes f-swivel {
                0%, 70%, 100% { transform: rotateY(0deg); }
                80%            { transform: rotateY(180deg); }
                90%            { transform: rotateY(360deg); }
              }
              .f-mark {
                transform-box: fill-box;
                transform-origin: center center;
                animation: f-swivel 12s ease-in-out infinite;
              }
            `}</style>
            <svg style={{ width: 'auto', height: '119px' }} viewBox="0 0 680 100" role="img" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(50,50)">
                <circle r="34" stroke="#C8A96E" strokeWidth="0.5" fill="none" opacity="0.17"/>
                <circle r="24" stroke="#C8A96E" strokeWidth="0.35" fill="none" opacity="0.10"/>
                <circle r="9"  stroke="#C8A96E" strokeWidth="0.3"  fill="none" opacity="0.16"/>
                <text
                  className="f-mark"
                  x="0" y="11"
                  textAnchor="middle"
                  fontFamily="Georgia, 'Times New Roman', serif"
                  fontSize="31"
                  fontWeight="700"
                  fill="#C8A96E">F</text>
              </g>

              <line x1="94" y1="22" x2="94" y2="78" stroke="#1e2a3a" strokeWidth="0.5"/>

              <text x="110" y="44" textAnchor="start" fontFamily="Georgia, 'Times New Roman', serif" fontSize="26" fontWeight="700" letterSpacing="5" fill="#E8E0D0">FERREIRA</text>
              <text x="110" y="72" textAnchor="start" fontFamily="'Courier New', Courier, monospace" fontSize="13" fontWeight="700" letterSpacing="10" fill="#C8A96E">CTO</text>

              <line x1="314" y1="22" x2="314" y2="78" stroke="#1e2a3a" strokeWidth="0.5"/>

              <text x="330" y="56" textAnchor="start" fontFamily="'Courier New', Courier, monospace" fontSize="13" letterSpacing="3" fill="#9aaabf">FRACTIONAL STRATEGIC ADVISORY</text>
            </svg>
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
