import type { Metadata } from 'next';
import type { Route } from 'next';
import Link from 'next/link';

import { ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { buildAway } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Build Anyway',
  description: 'A three-level certification program for people in recovery who want to build a business. Foundation, Builder, and Facilitator levels — each complete in itself.',
  keywords: [
    'Build Anyway program',
    'entrepreneurship for recovery',
    'recovery business program',
    'IOP entrepreneurship',
    'Build Anyway certification',
    'Peter Ferreira',
  ],
  openGraph: {
    title: 'Build Anyway | Ferreira CTO',
    description: 'A three-level certification program for people in recovery who want to build a business. Foundation, Builder, and Facilitator levels.',
    url: 'https://ferreiracto.com/build-anyway',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build Anyway | Ferreira CTO',
    description: 'A three-level certification program for people in recovery who want to build a business.',
  },
  alternates: {
    canonical: 'https://ferreiracto.com/build-anyway',
  },
};

const LEVEL_COLORS: Record<string, string> = {
  blue: '#6a9ebf',
  purple: '#9e6a9e',
  gold: '#c8a96e',
};

export default function BuildAnywayPage() {
  return (
    <div className="relative">
      <Header />

      {/* HERO */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl">
          <div className="mb-8" style={{ width: '840px', maxWidth: '100%' }}>
            <style>{`
              @keyframes ba-fade-in     { from { opacity: 0; } to { opacity: 1; } }
              @keyframes ba-ring-pulse  { 0%,100% { opacity: 0.18; } 50% { opacity: 0.38; } }
              @keyframes ba-glow-pulse  { 0%,100% { opacity: 1; } 50% { opacity: 0.6; } }
              @keyframes ba-text-in     { from { opacity: 0; transform: translateX(-6px); } to { opacity: 1; transform: translateX(0); } }
              .ba-petals-outer { animation: ba-fade-in 1.6s ease-out both 0.2s; }
              .ba-petals-inner { animation: ba-fade-in 1.6s ease-out both 0.5s; }
              .ba-ring-1 { animation: ba-ring-pulse 4s ease-in-out infinite; }
              .ba-ring-2 { animation: ba-ring-pulse 4s ease-in-out infinite 0.6s; }
              .ba-ring-3 { animation: ba-ring-pulse 4s ease-in-out infinite 1.2s; }
              .ba-center  { animation: ba-glow-pulse 3s ease-in-out infinite; }
              .ba-wordmark { animation: ba-text-in 0.8s ease-out both 0.3s; }
              .ba-tagline  { animation: ba-text-in 0.8s ease-out both 0.6s; }
            `}</style>
            <svg width="100%" viewBox="0 0 680 100" role="img" xmlns="http://www.w3.org/2000/svg" aria-label="Build Anyway">

              <g transform="translate(50,50)">
                <circle className="ba-ring-1" r="34" stroke="#C8A96E" strokeWidth="0.5" fill="none" opacity="0.18"/>
                <circle className="ba-ring-2" r="24" stroke="#C8A96E" strokeWidth="0.35" fill="none" opacity="0.14"/>
                <circle className="ba-ring-3" r="9"  stroke="#C8A96E" strokeWidth="0.3"  fill="none" opacity="0.16"/>

                <g className="ba-petals-outer" stroke="#C8A96E" strokeWidth="0.6" fill="#C8A96E" fillOpacity="0.08">
                  <path d="M 0,-34 L 5,-4 L 0,0 L -5,-4 Z"/>
                  <g transform="rotate(60)"> <path d="M 0,-34 L 5,-4 L 0,0 L -5,-4 Z"/></g>
                  <g transform="rotate(120)"><path d="M 0,-34 L 5,-4 L 0,0 L -5,-4 Z"/></g>
                  <g transform="rotate(180)"><path d="M 0,-34 L 5,-4 L 0,0 L -5,-4 Z"/></g>
                  <g transform="rotate(240)"><path d="M 0,-34 L 5,-4 L 0,0 L -5,-4 Z"/></g>
                  <g transform="rotate(300)"><path d="M 0,-34 L 5,-4 L 0,0 L -5,-4 Z"/></g>
                </g>

                <g className="ba-petals-inner" transform="rotate(30)" stroke="#C8A96E" strokeWidth="0.5" fill="#C8A96E" fillOpacity="0.22" >
                  <path d="M 0,-24 L 3,-4 L 0,0 L -3,-4 Z"/>
                  <g transform="rotate(60)"> <path d="M 0,-24 L 3,-4 L 0,0 L -3,-4 Z"/></g>
                  <g transform="rotate(120)"><path d="M 0,-24 L 3,-4 L 0,0 L -3,-4 Z"/></g>
                  <g transform="rotate(180)"><path d="M 0,-24 L 3,-4 L 0,0 L -3,-4 Z"/></g>
                  <g transform="rotate(240)"><path d="M 0,-24 L 3,-4 L 0,0 L -3,-4 Z"/></g>
                  <g transform="rotate(300)"><path d="M 0,-24 L 3,-4 L 0,0 L -3,-4 Z"/></g>
                </g>

                <circle className="ba-center" r="3" fill="#C8A96E"/>
                <circle r="1.2" fill="transparent"/>
              </g>

              <line x1="94" y1="22" x2="94" y2="78" stroke="#1e2a3a" strokeWidth="0.5"/>

              <g className="ba-wordmark">
                <text x="110" y="44" textAnchor="start" fontFamily="Georgia, 'Times New Roman', serif" fontSize="26" fontWeight="700" letterSpacing="5" fill="#E8E0D0">BUILD</text>
                <text x="110" y="72" textAnchor="start" fontFamily="Georgia, 'Times New Roman', serif" fontSize="26" fontWeight="700" letterSpacing="3" fill="#C8A96E">ANYWAY</text>
              </g>

              <line x1="314" y1="22" x2="314" y2="78" stroke="#1e2a3a" strokeWidth="0.5"/>

              <text className="ba-tagline" x="330" y="56" textAnchor="start" fontFamily="'Courier New', Courier, monospace" fontSize="13" letterSpacing="3" fill="#9aaabf">ENTREPRENEURSHIP FOR RECOVERY</text>

            </svg>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 mb-6">
            <span className="text-sm" style={{ color: '#c8a96e' }}>{buildAway.hero.eyebrow}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight whitespace-pre-line">
            {buildAway.hero.headline}
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
            {buildAway.hero.subhead}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={buildAway.hero.cta.href as Route}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all text-slate-950"
              style={{ backgroundColor: '#c8a96e' }}
            >
              {buildAway.hero.cta.label}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={buildAway.hero.secondary.href as Route}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 hover:border-[#c8a96e] rounded-lg font-semibold transition-all"
            >
              {buildAway.hero.secondary.label}
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-slate-800">
            {buildAway.stats.map((stat, idx) => (
              <div key={idx} className="px-6 py-6 md:py-4 text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: '#c8a96e' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE LEVELS */}
      <Section title="Three Levels of Certification" subtitle="Each level is complete in itself — and each one opens the door to the next.">
        <div className="grid md:grid-cols-3 gap-8">
          {buildAway.levels.map((level) => {
            const accent = LEVEL_COLORS[level.color];
            return (
              <div
                key={level.number}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col"
                style={{ borderTop: `3px solid ${accent}` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-slate-950"
                    style={{ backgroundColor: accent }}
                  >
                    {level.number}
                  </div>
                  <span className="font-bold">{level.name}</span>
                  {level.number > 1 && (
                    <span className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-500 border border-slate-700">
                      Coming Soon
                    </span>
                  )}
                </div>

                <div className="space-y-1 mb-4 text-sm text-slate-500">
                  <div>{level.duration}</div>
                  <div>{level.setting}</div>
                  <div className="font-bold text-base mt-2" style={{ color: accent }}>
                    ${level.seatPrice} / seat
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-3">{level.headline}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{level.description}</p>

                <div className="flex items-center gap-2 text-xs text-slate-500 mb-5">
                  <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: accent }} />
                  <span>{level.cert}</span>
                </div>

                {level.number === 1 ? (
                  <Link
                    href={level.href as Route}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium border border-slate-800 text-slate-600 cursor-not-allowed select-none">
                    Coming Soon
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* SCHOLARSHIP FUND */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div
            className="p-8 md:p-12 rounded-2xl bg-slate-900/50 border border-slate-800"
            style={{ borderLeft: '4px solid #c8a96e' }}
          >
            <div className="text-xs uppercase tracking-widest mb-3" style={{ color: '#c8a96e' }}>
              {buildAway.scholarship.eyebrow}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{buildAway.scholarship.headline}</h2>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-2xl">{buildAway.scholarship.body}</p>
            <a
              href={buildAway.scholarship.cta.href}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all text-slate-950"
              style={{ backgroundColor: '#c8a96e' }}
            >
              {buildAway.scholarship.cta.label}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT THE FACILITATOR */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left column */}
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-3">
                {buildAway.facilitator.eyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{buildAway.facilitator.name}</h2>
              <p className="text-slate-400 mb-6">{buildAway.facilitator.title}</p>
              <p className="text-slate-300 leading-relaxed">{buildAway.facilitator.bio}</p>
            </div>

            {/* Right column — podcast card */}
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800" style={{ borderColor: '#c8a96e33' }}>
              <div className="text-xs uppercase tracking-widest mb-3" style={{ color: '#c8a96e' }}>
                Podcast
              </div>
              <h3 className="text-xl font-bold mb-4">Before the Rewrite</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                A podcast about rebuilding from the ground up — in business, in recovery, and in life. New episodes weekly.
              </p>
              <Link
                href="/podcast"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all border border-slate-700 hover:border-[#c8a96e] text-slate-300 hover:text-white"
              >
                {buildAway.facilitator.podcast.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{buildAway.footerCta.headline}</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">{buildAway.footerCta.subhead}</p>
          <a
            href={buildAway.footerCta.cta.href}
            className="group inline-flex items-center gap-2 px-10 py-5 rounded-lg font-semibold transition-all text-slate-950 text-lg"
            style={{ backgroundColor: '#c8a96e' }}
          >
            {buildAway.footerCta.cta.label}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-6 text-slate-500 text-sm">{buildAway.footerCta.phone}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
