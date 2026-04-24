'use client';
import { ArrowRight, CheckCircle, X, Activity, Shield, Heart } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { home } from "@/lib/content";

const SEGMENT_ICONS = [Activity, Shield, Heart];

export default function Home() {
  return (
    <div className="relative">
      <Header />

      {/* HERO */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 mb-6">
            <span className="text-sm" style={{ color: '#c8a96e' }}>{home.hero.eyebrow}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight whitespace-pre-line">
            {home.hero.headline}
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
            {home.hero.subhead}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={home.hero.cta.href}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all text-slate-950"
              style={{ backgroundColor: '#c8a96e' }}
            >
              {home.hero.cta.label}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href={home.hero.secondary.href as `/build-anyway`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 hover:border-[#c8a96e] rounded-lg font-semibold transition-all"
            >
              {home.hero.secondary.label}
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            {home.hero.trust.map((t, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" style={{ color: '#c8a96e' }} />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <Section title={home.whoThisIsFor.headline} subtitle={home.whoThisIsFor.subhead}>
        <div className="grid md:grid-cols-3 gap-8">
          {home.whoThisIsFor.segments.map((seg, idx) => {
            const Icon = SEGMENT_ICONS[idx];
            return (
              <div key={idx} className="group p-6 rounded-2xl border border-slate-800 hover:border-[#c8a96e]/40 bg-slate-900/50 hover:bg-slate-800/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-[#c8a96e]/10 flex items-center justify-center mb-4 group-hover:bg-[#c8a96e]/20 transition-all">
                  <Icon className="w-6 h-6" style={{ color: '#c8a96e' }} />
                </div>
                <h3 className="text-xl font-bold mb-3">{seg.label}</h3>
                <p className="text-slate-400 leading-relaxed">{seg.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* THE ADVISORY OFFER */}
      <Section id={home.offer.id} title={home.offer.headline} subtitle={home.offer.subhead}>
        <div className="max-w-4xl mx-auto">
          {/* Price header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div>
              <div className="text-slate-400 text-sm mb-1">{home.offer.sessions} · {home.offer.commitment}</div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold" style={{ color: '#c8a96e' }}>{home.offer.price}</span>
                <span className="text-slate-400">{home.offer.priceNote}</span>
              </div>
            </div>
            <a
              href={home.offer.cta.href}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all text-slate-950 whitespace-nowrap"
              style={{ backgroundColor: '#c8a96e' }}
            >
              {home.offer.cta.label}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Included / Not Included */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-xs uppercase tracking-widest text-green-400 mb-4">Included</div>
              <ul className="space-y-3">
                {home.offer.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-xs uppercase tracking-widest text-red-400 mb-4">Not Included</div>
              <ul className="space-y-3 mb-6">
                {home.offer.notIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 border-t border-slate-800 pt-4 leading-relaxed">
                {home.offer.boundary}
              </p>
            </div>
          </div>

          {/* Early offer note */}
          <div className="p-5 rounded-xl bg-[#c8a96e]/5 border border-[#c8a96e]/20">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#c8a96e' }}>
              {home.offer.earlyOffer.headline} —
            </span>
            <span className="text-sm text-slate-400 ml-2">{home.offer.earlyOffer.body}</span>
          </div>
        </div>
      </Section>

      {/* BUILD ANYWAY — featured */}
      <section className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div
            className="p-8 md:p-12 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col md:flex-row md:items-center gap-8"
            style={{ borderLeft: '4px solid #c8a96e' }}
          >
            <div className="flex-1">
              <div className="text-xs uppercase tracking-widest mb-3" style={{ color: '#c8a96e' }}>
                Build Anyway Program
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Entrepreneurship education for people in recovery.
              </h2>
              <p className="text-slate-400 leading-relaxed max-w-xl">
                A 3-level certification program delivered inside IOP programs and post-discharge. Participants leave with a business concept, a 30-day action plan, and a peer accountability group. 10% of every cohort funds scholarship seats.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/build-anyway"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all text-slate-950"
                style={{ backgroundColor: '#c8a96e' }}
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PETER */}
      <Section title="Why This Works" subtitle="I've made the expensive mistakes already. You don't have to.">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 mb-8">
            <p className="text-slate-300 leading-relaxed mb-4">
              I grew up in my father's precision machine shop in Bristol, Rhode Island — learning to read technical drawings before I could drive. I've spent 20 years building across healthcare IT, enterprise integrations, edge AI hardware, and IoT systems.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              I've shipped products that worked and ones that didn't. I know the difference before a line of code is written. OrbCare — a HIPAA-compliant health monitoring platform running on Jetson hardware — is my live proof point, not a résumé line.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">The interesting problems are where hardware and software collide.</span> Most startups treat their embedded systems like web apps — and pay for it at Series B. I help you avoid that by acting as a strategic peer, not a contractor.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Hardware + Software", sub: "Built both sides" },
              { label: "HIPAA & Privacy", sub: "From the start" },
              { label: "Edge-First", sub: "Jetson, mmWave, YOLO" },
              { label: "Scalability", sub: "Before it breaks" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
                <div className="text-sm font-bold mb-1">{item.label}</div>
                <div className="text-xs text-slate-500">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Let's Talk" subtitle="Tell me about what you're building and where you feel most uncertain.">
        <div className="max-w-2xl mx-auto">
          <ContactForm />

          <div className="mt-8 text-center">
            <p className="text-slate-400 mb-4">Prefer email or LinkedIn?</p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:peter@ferreiracto.com"
                className="hover:text-blue-300 font-semibold transition-colors"
                style={{ color: '#c8a96e' }}
              >
                peter@ferreiracto.com
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="https://www.linkedin.com/in/peter-ferreira-0177061b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 font-semibold transition-colors"
                style={{ color: '#c8a96e' }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
