import type { Metadata } from 'next';
import type { Route } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { forDirectors } from '@/lib/content';

export const metadata: Metadata = {
  title: 'For IOP Directors | Build Anyway | Ferreira CTO',
  description: forDirectors.hero.subhead,
  openGraph: {
    title: 'For IOP Directors | Build Anyway | Ferreira CTO',
    description: 'Bring the Build Anyway entrepreneurship program to your IOP or outpatient facility. Curriculum, facilitation, and certification for people in recovery.',
    url: 'https://ferreiracto.com/build-anyway/for-directors',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For IOP Directors | Build Anyway | Ferreira CTO',
    description: 'Bring the Build Anyway entrepreneurship program to your IOP or outpatient facility.',
  },
  alternates: {
    canonical: 'https://ferreiracto.com/build-anyway/for-directors',
  },
};

export default function ForDirectorsPage() {
  return (
    <div className="relative">
      <Header />

      {/* HERO */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 mb-6">
            <span className="text-sm" style={{ color: '#c8a96e' }}>{forDirectors.hero.eyebrow}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight">
            {forDirectors.hero.headline}
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
            {forDirectors.hero.subhead}
          </p>

          <a
            href={forDirectors.hero.cta.href}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all text-slate-950"
            style={{ backgroundColor: '#c8a96e' }}
          >
            {forDirectors.hero.cta.label}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* THE CASE */}
      <Section title="Why This Works in IOP" subtitle="">
        <div className="grid md:grid-cols-3 gap-8">
          {forDirectors.case.map((item) => (
            <div
              key={item.label}
              className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50"
            >
              <div className="text-2xl mb-4">{item.icon}</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">{item.label}</div>
              <h3 className="text-lg font-bold mb-3">{item.headline}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROGRAM DETAILS */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{forDirectors.programDetails.headline}</h2>
              <div className="space-y-4">
                {forDirectors.programDetails.items.map((item) => (
                  <div key={item.label} className="flex gap-4 py-4 border-b border-slate-800">
                    <div className="text-sm font-semibold text-slate-400 w-32 flex-shrink-0">{item.label}</div>
                    <div className="text-sm text-slate-300">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* WHAT THIS IS NOT */}
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-xl font-bold mb-6">{forDirectors.whatThisIsNot.headline}</h3>
              <ul className="space-y-4">
                {forDirectors.whatThisIsNot.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-400">
                    <X className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOLARSHIP */}
      <section className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div
            className="p-8 md:p-12 rounded-2xl bg-slate-900/50 border border-slate-800"
            style={{ borderLeft: '4px solid #c8a96e' }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{forDirectors.scholarship.headline}</h2>
            <p className="text-slate-400 leading-relaxed max-w-2xl">{forDirectors.scholarship.body}</p>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{forDirectors.contact.headline}</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">{forDirectors.contact.body}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={forDirectors.contact.cta.href}
              className="group inline-flex items-center gap-2 px-10 py-5 rounded-lg font-semibold transition-all text-slate-950 text-lg"
              style={{ backgroundColor: '#c8a96e' }}
            >
              {forDirectors.contact.cta.label}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={forDirectors.contact.secondary.href}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-slate-600 hover:border-[#c8a96e] rounded-lg font-semibold transition-all text-lg"
            >
              {forDirectors.contact.secondary.label}
            </a>
          </div>

          <p className="mt-6 text-slate-500 text-sm">{forDirectors.contact.phone}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
