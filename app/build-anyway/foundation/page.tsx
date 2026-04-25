'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SESSIONS = [
  {
    number: 1, week: 1, color: '#6a9ebf', weekTheme: 'Identity & Foundation',
    title: 'Your Origin Story',
    tagline: 'Before we can build something new, we have to know where we\'re standing.',
    agenda: ['Grounding practice', 'Room agreement & introductions', 'The Builder\'s Identity', 'Exercise: The Builder\'s Timeline', 'Pair share & group discussion', 'Closing reflection'],
  },
  {
    number: 2, week: 1, color: '#6a9ebf', weekTheme: 'Identity & Foundation',
    title: 'Systems Thinking for Humans',
    tagline: 'One day at a time is also a product roadmap.',
    agenda: ['Homework debrief', 'What is a system?', 'Your recovery program as a business blueprint', 'Exercise: Side-by-side system map', 'Group discussion', 'Closing practice'],
  },
  {
    number: 3, week: 2, color: '#9e6a9e', weekTheme: 'Finding Your Idea',
    title: 'What Broke You Might Be Your Business',
    tagline: 'The most valuable problems are the ones you\'ve already lived.',
    agenda: ['Compassionate witness practice', 'Homework debrief', 'Pain as market signal', 'Exercise: The Anger Inventory', 'Idea mapping discussion', 'Closing reflection'],
  },
  {
    number: 4, week: 2, color: '#9e6a9e', weekTheme: 'Finding Your Idea',
    title: 'Who Else Has This Problem?',
    tagline: 'A business is a problem someone else also has and will pay to solve.',
    agenda: ['Homework debrief', 'Teaching: Customer discovery basics', 'The five questions you ask before you build anything', 'Exercise: Three interviews in five days', 'Group debrief', 'Closing practice'],
  },
  {
    number: 5, week: 3, color: '#5a9e6f', weekTheme: 'Building Without Overwhelm',
    title: 'The Smallest Version That Works',
    tagline: 'You do not need to build the whole thing to know if it works.',
    agenda: ['Homework debrief', 'Teaching: What an MVP actually is', 'The difference between an experiment and a product', 'Exercise: Shrink it down', 'Accountability pairs', 'Closing reflection'],
  },
  {
    number: 6, week: 3, color: '#5a9e6f', weekTheme: 'Building Without Overwhelm',
    title: 'Accountability Structures That Actually Work',
    tagline: 'Motivation is a weather pattern. Structure is infrastructure.',
    agenda: ['Accountability check-in', 'Teaching: Why willpower fails and systems win', 'Designing your work rhythm', 'Exercise: The weekly operating plan', 'Peer accountability pairing', 'Closing practice'],
  },
  {
    number: 7, week: 4, color: '#c8a96e', weekTheme: 'Pitch, Plan & What Comes Next',
    title: 'Your Two-Minute Story',
    tagline: 'If you can\'t explain what you\'re building in two minutes, you\'re not ready to ask for anything.',
    agenda: ['Homework debrief', 'Teaching: What a pitch actually is', 'The structure of a simple, honest business story', 'Exercise: Draft and refine your two-minute pitch', 'Peer feedback rounds', 'Closing reflection'],
  },
  {
    number: 8, week: 4, color: '#c8a96e', weekTheme: 'Pitch, Plan & What Comes Next',
    title: 'Graduation — The Real Work Starts Now',
    tagline: 'Completion is not the end. It\'s the proof of concept.',
    agenda: ['Final pitches to the group', 'What comes after Foundation', 'Certificate presentation', 'Letters to your future self', 'Community commitments', 'Closing ceremony'],
  },
];

const WEEK_THEMES = [
  { week: 1, label: 'Identity & Foundation',           color: '#6a9ebf' },
  { week: 2, label: 'Finding Your Idea',               color: '#9e6a9e' },
  { week: 3, label: 'Building Without Overwhelm',      color: '#5a9e6f' },
  { week: 4, label: 'Pitch, Plan & What Comes Next',   color: '#c8a96e' },
];

export default function FoundationPage() {
  const [activeWeek, setActiveWeek] = useState<number | null>(null);

  const visibleSessions = activeWeek
    ? SESSIONS.filter(s => s.week === activeWeek)
    : SESSIONS;

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Header />

      {/* HERO */}
      <section className="container mx-auto px-6 pt-32 pb-16 max-w-4xl">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-xs font-semibold uppercase tracking-widest"
          style={{ background: 'rgba(106,158,191,0.1)', borderColor: 'rgba(106,158,191,0.3)', color: '#6a9ebf' }}
        >
          Build Anyway · Level 1
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
          Foundation
        </h1>
        <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mb-10">
          An 8-session group program for people in recovery who want to build something — a business, a side income, a practice — and need structure, accountability, and someone who has actually done it.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { value: '8',      label: 'Sessions' },
            { value: '4 wks', label: 'Duration' },
            { value: '75 min', label: 'Per session' },
            { value: 'IOP',    label: 'Setting' },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-center">
              <div className="text-2xl font-bold mb-0.5" style={{ color: '#6a9ebf' }}>{s.value}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-semibold transition-all text-slate-950"
            style={{ backgroundColor: '#c8a96e' }}
          >
            Bring this to your program
          </a>
          <Link
            href="/build-anyway"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-slate-700 hover:border-slate-500 rounded-lg font-semibold transition-all text-slate-300"
          >
            ← All levels
          </Link>
        </div>
      </section>

      {/* WEEK FILTER */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="container mx-auto px-6 py-6 max-w-4xl">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveWeek(null)}
              className="px-4 py-2 rounded-full text-sm font-medium border transition-all"
              style={{
                borderColor: activeWeek === null ? '#c8a96e' : '#334155',
                color:       activeWeek === null ? '#c8a96e' : '#94a3b8',
                background:  activeWeek === null ? 'rgba(200,169,110,0.08)' : 'transparent',
              }}
            >
              All sessions
            </button>
            {WEEK_THEMES.map(t => (
              <button
                key={t.week}
                onClick={() => setActiveWeek(activeWeek === t.week ? null : t.week)}
                className="px-4 py-2 rounded-full text-sm font-medium border transition-all"
                style={{
                  borderColor: activeWeek === t.week ? t.color : '#334155',
                  color:       activeWeek === t.week ? t.color : '#94a3b8',
                  background:  activeWeek === t.week ? `${t.color}14` : 'transparent',
                }}
              >
                Week {t.week} · {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SESSIONS */}
      <section className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="space-y-5">
          {visibleSessions.map(session => (
            <div
              key={session.number}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
              style={{ borderLeft: `3px solid ${session.color}` }}
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  style={{ background: `${session.color}18`, color: session.color }}
                >
                  Session {session.number}
                </span>
                <span className="text-xs text-slate-600">Week {session.week} · {session.weekTheme}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{session.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-4">{session.tagline}</p>

              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                {session.agenda.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: session.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="border-t border-slate-800">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Who Foundation is for</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-8">
            Foundation runs inside IOP and outpatient programs. It's designed for people in early-to-mid recovery who have something to build — and need the structure to actually start.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { label: 'IOP Programs',          body: 'Integrates directly into existing group schedules. Two sessions per week, four weeks.' },
              { label: 'Outpatient Facilities', body: 'Flexible format. Can run as a standalone cohort or alongside existing programming.' },
              { label: 'Recovery Housing',       body: 'Designed for where people live and work in early recovery — practical, grounded, real.' },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
                <h4 className="font-semibold text-white mb-2">{item.label}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="container mx-auto px-6 py-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Bring Foundation to your program</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            I work directly with program directors to implement Foundation. Reach out and tell me about your setting and population.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all text-slate-950"
            style={{ backgroundColor: '#c8a96e' }}
          >
            Get in touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
