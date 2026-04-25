'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ─── TYPES ───────────────────────────────────────────────────────

type AnswerType = 'green' | 'yellow' | 'red' | 'flag';
type MindsetLabel = 'Grounded' | 'Aware' | 'Struggling' | 'Pattern active';

interface StrategyAnswer { icon: string; type: AnswerType; text: string; points: number; }
interface StrategyFlag   { number: number; title: string; description: string; quote: string; answers: StrategyAnswer[]; }
interface MindsetAnswer  { label: MindsetLabel; text: string; points: number; }
interface MindsetQ       { number: number; teaching: string; author: string; question: string; answers: MindsetAnswer[]; compassionNote: string; }

// ─── STRATEGY DATA ───────────────────────────────────────────────

const FLAGS: StrategyFlag[] = [
  {
    number: 1,
    title: "We're Building First, Validating Later",
    description: "Deep tech founders confuse building with progress. A working prototype is not a validated business — and the longer you build before validating, the more expensive the correction.",
    quote: '"We just need to finish the MVP first."',
    answers: [
      { icon: '✅', type: 'green',  text: 'We have paying customers, signed LOIs, or a documented validation process with real buyers', points: 2 },
      { icon: '⚠️', type: 'yellow', text: "We've done customer discovery but haven't formalized what we learned", points: 1 },
      { icon: '❌', type: 'red',    text: "We're heads-down building — customer validation comes after we ship", points: 0 },
      { icon: '🚩', type: 'flag',   text: '"We\'re not ready to talk to customers yet."', points: -5 },
    ],
  },
  {
    number: 2,
    title: 'Pitching the Technology Instead of the Outcome',
    description: 'Investors and customers buy outcomes, not specs. The gap between "what it does" and "what it changes for the buyer" is where most deep tech companies lose deals and rounds.',
    quote: '"Our system achieves 40ms latency at the edge with 94.3% accuracy."',
    answers: [
      { icon: '✅', type: 'green',  text: "Every pitch starts with the customer's world before us — the cost, the workaround, the outcome we change", points: 2 },
      { icon: '⚠️', type: 'yellow', text: "We know our ROI story but haven't made it the centerpiece of our pitch yet", points: 1 },
      { icon: '❌', type: 'red',    text: 'Our demo is a product tour — we lead with capabilities and specs', points: 0 },
      { icon: '🚩', type: 'flag',   text: '"The technology speaks for itself."', points: -5 },
    ],
  },
  {
    number: 3,
    title: 'No Defensible ICP',
    description: '"We can sell to any manufacturer" is not a strategy. It means you haven\'t done the hard work of finding the specific buyer who has the most pain and the authority to act now.',
    quote: '"Our TAM is massive — every company in this space needs what we build."',
    answers: [
      { icon: '✅', type: 'green',  text: "ICP defined by role, company profile, trigger event, and pain in the customer's own language", points: 2 },
      { icon: '⚠️', type: 'yellow', text: "We have a target vertical but haven't gotten more specific than that", points: 1 },
      { icon: '❌', type: 'red',    text: "We're still figuring out who the best early customer is", points: 0 },
      { icon: '🚩', type: 'flag',   text: '"We\'re targeting mid-market to enterprise across multiple verticals."', points: -5 },
    ],
  },
  {
    number: 4,
    title: 'Unit Economics Are a "Later Problem"',
    description: "Deep tech founders routinely underestimate the true cost to deliver at scale — COGs, integration overhead, support costs, hardware failure rates. These are not software problems and they don't solve themselves with volume.",
    quote: '"We\'ll get margins right once we have scale."',
    answers: [
      { icon: '✅', type: 'green',  text: 'Full unit economics model: COGS, CAC, LTV, gross margin per unit, payback period — stress-tested at 10x volume', points: 2 },
      { icon: '⚠️', type: 'yellow', text: "We have rough numbers but haven't modeled what happens at scale", points: 1 },
      { icon: '❌', type: 'red',    text: "We're not focused on profitability yet — we're in growth mode", points: 0 },
      { icon: '🚩', type: 'flag',   text: '"The hardware is a loss leader; the software subscription is the real business."', points: -5 },
    ],
  },
  {
    number: 5,
    title: 'Go-To-Market Is an Afterthought',
    description: 'In deep tech, distribution is as hard as the product. GTM has to be designed and tested before you scale — not hired away after launch.',
    quote: '"We\'ll bring in a sales lead once the product is ready."',
    answers: [
      { icon: '✅', type: 'green',  text: 'Documented, repeatable sales process built from founder-led wins with a clear motion for the next hire', points: 2 },
      { icon: '⚠️', type: 'yellow', text: 'Founder is selling but nothing is written down yet', points: 1 },
      { icon: '❌', type: 'red',    text: "We're relying on a future channel partner, systems integrator, or government contract to drive revenue", points: 0 },
      { icon: '🚩', type: 'flag',   text: '"Once people see what this can do, it will sell itself."', points: -5 },
    ],
  },
  {
    number: 6,
    title: "The Investor Narrative Doesn't Match the Market Map",
    description: "Deep tech fundraising is hard. Investors need to believe in the market, the timing, and why your team specifically wins. A great product with a weak narrative doesn't raise.",
    quote: '"We don\'t really have direct competitors — we\'re the only ones doing this."',
    answers: [
      { icon: '✅', type: 'green',  text: 'Competitive 2x2, bottom-up market size, and a crisp answer to "why now, why us, why we\'re still winning in year 5"', points: 2 },
      { icon: '⚠️', type: 'yellow', text: "We have a deck but haven't fully connected our narrative to market dynamics and timing", points: 1 },
      { icon: '❌', type: 'red',    text: 'Market size is from an analyst report and we have a standard competitive slide', points: 0 },
      { icon: '🚩', type: 'flag',   text: '"Our technology is so differentiated it\'s essentially a category of one."', points: -5 },
    ],
  },
  {
    number: 7,
    title: 'The Founder Is the Only One Who Understands the Business',
    description: "In deep tech startups, tribal knowledge kills scale. If the strategy, customer relationships, and investor narrative all live in the founder's head — you have a critical single point of failure.",
    quote: '"I\'m the only one who has the full picture right now."',
    answers: [
      { icon: '✅', type: 'green',  text: 'Written strategy memo, customer playbook, and investor narrative shared with and pressure-tested by the team', points: 2 },
      { icon: '⚠️', type: 'yellow', text: 'Key things are documented but not consistently updated or shared across the company', points: 1 },
      { icon: '❌', type: 'red',    text: 'The team executes on product; I handle strategy and business direction', points: 0 },
      { icon: '🚩', type: 'flag',   text: '"We haven\'t formalized our strategy yet — it\'s still evolving."', points: -5 },
    ],
  },
];

// ─── MINDSET DATA ─────────────────────────────────────────────────

const QUESTIONS: MindsetQ[] = [
  {
    number: 1,
    teaching: '"The present moment is the only moment available to us, and it is the door to all moments."',
    author: '— Thich Nhat Hanh',
    question: "When you feel behind — on the roadmap, on the raise, on where you thought you'd be — what do you do with that feeling?",
    answers: [
      { label: 'Grounded',       text: 'I name it, sit with it briefly, and return to what\'s actually in front of me', points: 2 },
      { label: 'Aware',          text: 'I notice it but usually push through by adding more to my plate', points: 1 },
      { label: 'Struggling',     text: 'I use urgency as fuel — the faster I move, the less I feel it', points: 0 },
      { label: 'Pattern active', text: '"I don\'t have time to slow down. Slowing down is losing."', points: -5 },
    ],
    compassionNote: 'Urgency without presence is just speed. Recovery taught you that. Building is no different.',
  },
  {
    number: 2,
    teaching: '"Because things are impermanent, everything is possible."',
    author: '— Thich Nhat Hanh',
    question: 'When the market, a customer, or a trusted advisor tells you something that contradicts your original vision — how do you respond?',
    answers: [
      { label: 'Grounded',       text: "I treat it as data and ask what it's telling me before deciding what to do", points: 2 },
      { label: 'Aware',          text: "I listen, but I find myself defending the vision before I've really absorbed the feedback", points: 1 },
      { label: 'Struggling',     text: 'It feels like an attack on something I built. I have a hard time separating myself from the idea.', points: 0 },
      { label: 'Pattern active', text: '"I\'ve pivoted before and regretted it. I know I\'m right about this."', points: -5 },
    ],
    compassionNote: "Non-attachment isn't letting go of what matters. It's holding it loosely enough to let it grow.",
  },
  {
    number: 3,
    teaching: '"Smile, breathe, and go slowly."',
    author: '— Thich Nhat Hanh',
    question: 'How are you actually doing — not the founder answer, the real one?',
    answers: [
      { label: 'Grounded',       text: 'Honest answer: I have hard days, but I have rhythms that restore me. Sleep, movement, connection.', points: 2 },
      { label: 'Aware',          text: "I know I'm running hot. I tell myself it's temporary.", points: 1 },
      { label: 'Struggling',     text: "Rest feels irresponsible. I feel guilty when I'm not working.", points: 0 },
      { label: 'Pattern active', text: '"I\'ll take care of myself after we close the round / ship the product / hit the milestone."', points: -5 },
    ],
    compassionNote: "The startup will demand everything you give it. Recovery taught you that some things, once given away, are hard to get back.",
  },
  {
    number: 4,
    teaching: '"No mud, no lotus."',
    author: '— Thich Nhat Hanh',
    question: "When something doesn't work — a failed experiment, a lost deal, a bad hire — what story do you tell yourself about it?",
    answers: [
      { label: 'Grounded',       text: "It's information. I extract the lesson and move. It doesn't define me or the company.", points: 2 },
      { label: 'Aware',          text: "I debrief it intellectually but it lingers emotionally longer than I'd like.", points: 1 },
      { label: 'Struggling',     text: 'Failed things feel like evidence of something — about me, about whether this will work.', points: 0 },
      { label: 'Pattern active', text: '"I can\'t afford to fail. Every miss is one step closer to proving everyone right who doubted me."', points: -5 },
    ],
    compassionNote: "The lotus doesn't apologize for the mud it grew through. Neither should you.",
  },
  {
    number: 5,
    teaching: '"Interbeing: you are because everything else is."',
    author: '— Thich Nhat Hanh',
    question: "Who actually knows what you're carrying right now — not the pitch, the real weight of it?",
    answers: [
      { label: 'Grounded',       text: "My co-founder, advisor, sponsor, or partner knows the real version. I'm not doing this alone.", points: 2 },
      { label: 'Aware',          text: "A few people have pieces of it. Nobody has the whole picture.", points: 1 },
      { label: 'Struggling',     text: "I keep the hard stuff to myself. It feels like weakness to show it in a startup context.", points: 0 },
      { label: 'Pattern active', text: '"Nobody can really understand what this is like. I have to figure it out myself."', points: -5 },
    ],
    compassionNote: "Interbeing is the understanding that nothing arises alone. Not a lotus. Not a company. Not a recovery.",
  },
];

// ─── SCORING ─────────────────────────────────────────────────────

function strategyTier(score: number) {
  if (score >= 11) return { label: 'Strategically Sound',  desc: 'Ready to scale your go-to-market.',                       color: '#16a34a' };
  if (score >= 8)  return { label: 'Exposed in Places',    desc: '2–3 gaps that will surface in diligence.',                color: '#ca8a04' };
  if (score >= 4)  return { label: 'High Risk',            desc: 'Your raise will be harder than it needs to be.',           color: '#dc2626' };
  return             { label: 'Critical',                  desc: 'Series A is not fundable in your current state.',          color: '#dc2626' };
}

function mindsetTier(score: number) {
  if (score >= 9) return { label: 'Grounded',                   desc: "You're building from a stable place. This is rare and worth protecting.",           color: '#16a34a' };
  if (score >= 6) return { label: 'Aware',                      desc: 'You can see the patterns. Seeing them is the first step to choosing differently.',   color: '#6366f1' };
  if (score >= 3) return { label: 'Tender',                     desc: "Some old patterns are running the show. This is not a verdict — it's an invitation.", color: '#ca8a04' };
  return            { label: 'The foundation needs attention',  desc: "Not the startup's, yours. Everything else is built on this.",                        color: '#94a3b8' };
}

// ─── COUNT-UP HOOK ────────────────────────────────────────────────

function useCountUp(target: number, active: boolean) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!active) { setCurrent(0); return; }
    const duration = 1400;
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCurrent(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, active]);
  return current;
}

// ─── ANSWER STYLES ────────────────────────────────────────────────

const TYPE_STYLE: Record<AnswerType, { border: string; bg: string }> = {
  green:  { border: '#16a34a', bg: 'rgba(22,163,74,0.10)'  },
  yellow: { border: '#ca8a04', bg: 'rgba(202,138,4,0.10)'  },
  red:    { border: '#dc2626', bg: 'rgba(220,38,38,0.10)'  },
  flag:   { border: '#dc2626', bg: 'rgba(220,38,38,0.12)'  },
};

const MINDSET_STYLE: Record<MindsetLabel, { border: string; bg: string; tag: string }> = {
  'Grounded':       { border: '#16a34a', bg: 'rgba(22,163,74,0.08)',   tag: '#16a34a' },
  'Aware':          { border: '#6366f1', bg: 'rgba(99,102,241,0.08)',  tag: '#6366f1' },
  'Struggling':     { border: '#ca8a04', bg: 'rgba(202,138,4,0.08)',   tag: '#ca8a04' },
  'Pattern active': { border: '#6366f1', bg: 'rgba(99,102,241,0.10)', tag: '#6366f1' },
};

// ─── PROGRESS BAR ────────────────────────────────────────────────

function ProgressBar({ current, total, color }: { current: number; total: number; color: string }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color }}>{current + 1} of {total}</span>
        <span className="text-slate-500 text-sm">{Math.round((current / total) * 100)}% complete</span>
      </div>
      <div className="h-0.5 bg-slate-800 rounded-full">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${(current / total) * 100}%`, background: color }}
        />
      </div>
    </div>
  );
}

// ─── STRATEGY ASSESSMENT ─────────────────────────────────────────

function StrategyAssessment() {
  type Phase = 'intro' | 'quiz' | 'results';
  const [phase, setPhase] = useState<Phase>('intro');
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [flashing, setFlashing] = useState<number | null>(null);
  const [log, setLog] = useState<{ points: number; isFlag: boolean; title: string }[]>([]);

  const totalScore = log.reduce((s, a) => s + a.points, 0);
  const displayScore = useCountUp(totalScore, phase === 'results');
  const tier = strategyTier(totalScore);
  const flagged = log.filter(a => a.isFlag);
  const flag = FLAGS[current];

  const select = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (flag.answers[idx].type === 'flag') {
      setFlashing(idx);
      setTimeout(() => setFlashing(null), 900);
    }
  };

  const next = () => {
    if (selected === null) return;
    const ans = flag.answers[selected];
    const newLog = [...log, { points: ans.points, isFlag: ans.type === 'flag', title: flag.title }];
    setLog(newLog);
    setSelected(null);
    if (current + 1 < FLAGS.length) setCurrent(current + 1);
    else setPhase('results');
  };

  const reset = () => { setPhase('intro'); setCurrent(0); setSelected(null); setLog([]); };

  return (
    <section id="strategy" className="py-20" style={{ scrollMarginTop: 80 }}>
      <div className="container mx-auto px-6 max-w-2xl">

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 mb-4 text-xs font-bold uppercase tracking-widest border" style={{ background: 'rgba(200,169,110,0.1)', borderColor: 'rgba(200,169,110,0.25)', color: '#c8a96e' }}>
            <span>🚩</span> Assessment 1
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight leading-tight">
            The 7 Red Flags Killing Your Deep Tech Startup
          </h2>
          <p className="text-slate-400 text-lg">Take 5 minutes to find out where your strategy stands.</p>
        </div>

        {/* INTRO */}
        {phase === 'intro' && (
          <div className="card p-10 text-center">
            <div className="text-5xl mb-5">🚩</div>
            <p className="text-slate-400 text-base leading-relaxed max-w-md mx-auto mb-7">
              7 flags. One honest question each. Find out where your strategy is solid — and where it's one diligence call away from a problem.
            </p>
            <div className="flex gap-2 justify-center flex-wrap mb-7">
              {[['✅', 'Strong'], ['⚠️', 'Watch this'], ['❌', 'Real gap'], ['🚩', 'Red flag']].map(([icon, label]) => (
                <div key={label} className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs text-slate-500 border border-slate-800 bg-white/[0.02]">
                  <span>{icon}</span><span>{label}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setPhase('quiz')}
              className="inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-sm font-bold cursor-pointer border-0"
              style={{ background: '#c8a96e', color: '#0f172a' }}
            >
              Start the Assessment →
            </button>
          </div>
        )}

        {/* QUIZ */}
        {phase === 'quiz' && (
          <>
            <ProgressBar current={current} total={FLAGS.length} color="#c8a96e" />

            {/* Flag card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7 mb-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">🚩</span>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#c8a96e' }}>Flag {flag.number} of 7</span>
              </div>
              <h3 className="text-xl font-bold mb-2.5 leading-snug">{flag.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">{flag.description}</p>
              <p className="text-slate-600 text-sm italic">{flag.quote}</p>
            </div>

            {/* Answers */}
            <div className="flex flex-col gap-2 mb-5">
              {flag.answers.map((ans, idx) => {
                const s = TYPE_STYLE[ans.type];
                const isSelected = selected === idx;
                const isFlash = flashing === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => select(idx)}
                    className="rounded-xl p-3.5 flex gap-3 items-start transition-all duration-200"
                    style={{
                      background: isSelected ? s.bg : 'rgba(255,255,255,0.02)',
                      border: `1px solid ${isSelected ? s.border : 'rgb(30,41,59)'}`,
                      cursor: selected !== null && !isSelected ? 'default' : 'pointer',
                      opacity: selected !== null && !isSelected ? 0.38 : 1,
                      animation: isFlash ? 'redPulse 0.9s ease-out' : 'none',
                    }}
                  >
                    <span className="text-base flex-shrink-0 mt-0.5">{ans.icon}</span>
                    <span className="text-sm leading-relaxed" style={{ color: isSelected ? '#e2e8f0' : '#8492a6' }}>{ans.text}</span>
                  </div>
                );
              })}
            </div>

            {selected !== null && (
              <div className="flex justify-end">
                <button
                  onClick={next}
                  className="rounded-xl px-6 py-3 text-sm font-bold cursor-pointer border-0"
                  style={{ background: '#c8a96e', color: '#0f172a' }}
                >
                  {current + 1 < FLAGS.length ? 'Next Flag →' : 'See My Results →'}
                </button>
              </div>
            )}
          </>
        )}

        {/* RESULTS */}
        {phase === 'results' && (
          <>
            <div className="card p-10 text-center mb-5" style={{ border: `1px solid ${tier.color}44` }}>
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Strategy Score</div>
              <div className="font-black leading-none mb-1" style={{ fontSize: 80, color: tier.color }}>{displayScore}</div>
              <div className="text-slate-600 text-sm mb-5">out of 14</div>
              <div className="inline-block rounded-full px-5 py-1.5 mb-2" style={{ background: `${tier.color}18`, border: `1px solid ${tier.color}40` }}>
                <span className="font-bold text-base" style={{ color: tier.color }}>{tier.label}</span>
              </div>
              <p className="text-slate-400 text-sm mt-2">{tier.desc}</p>
            </div>

            {flagged.length > 0 && (
              <div className="rounded-2xl p-5 mb-4" style={{ background: 'rgba(220,38,38,0.06)', border: '1px solid rgba(220,38,38,0.18)' }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#dc2626' }}>Red Flags Triggered</div>
                {flagged.map((f, i) => (
                  <div key={i} className="flex gap-2 items-start mb-2">
                    <span className="text-sm">🚩</span>
                    <span className="text-sm leading-relaxed" style={{ color: '#fca5a5' }}>{f.title}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col gap-3">
              <a
                href="/#contact"
                className="block rounded-xl py-4 text-center font-bold text-sm no-underline"
                style={{ background: '#c8a96e', color: '#0f172a' }}
              >
                Book a Free 30-Minute Strategy Call
              </a>
              <button
                onClick={reset}
                className="rounded-xl py-3 text-sm text-slate-500 bg-transparent border border-slate-800 cursor-pointer"
              >
                Retake Assessment
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// ─── MINDSET ASSESSMENT ───────────────────────────────────────────

function MindsetAssessment() {
  type Phase = 'intro' | 'quiz' | 'results';
  const [phase, setPhase] = useState<Phase>('intro');
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [pulsing, setPulsing] = useState<number | null>(null);
  const [note, setNote] = useState<string | null>(null);
  const [log, setLog] = useState<{ points: number; isPattern: boolean; question: string }[]>([]);

  const totalScore = log.reduce((s, a) => s + a.points, 0);
  const displayScore = useCountUp(totalScore, phase === 'results');
  const tier = mindsetTier(totalScore);
  const patterns = log.filter(a => a.isPattern);
  const q = QUESTIONS[current];

  const select = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (q.answers[idx].label === 'Pattern active') {
      setPulsing(idx);
      setNote(q.compassionNote);
      setTimeout(() => setPulsing(null), 1100);
    }
  };

  const next = () => {
    if (selected === null) return;
    const ans = q.answers[selected];
    const newLog = [...log, { points: ans.points, isPattern: ans.label === 'Pattern active', question: q.question }];
    setLog(newLog);
    setSelected(null);
    setNote(null);
    if (current + 1 < QUESTIONS.length) setCurrent(current + 1);
    else setPhase('results');
  };

  const reset = () => { setPhase('intro'); setCurrent(0); setSelected(null); setLog([]); setNote(null); };

  return (
    <section id="mindset" className="py-20" style={{ scrollMarginTop: 80 }}>
      <div className="container mx-auto px-6 max-w-2xl">

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 mb-4 text-xs font-bold uppercase tracking-widest border" style={{ background: 'rgba(99,102,241,0.1)', borderColor: 'rgba(99,102,241,0.25)', color: '#818cf8' }}>
            <span>🌱</span> Assessment 2
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight leading-tight">
            The Build Anyway Mindset Check
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-lg">
            Thich Nhat Hanh wrote that the present moment is the only moment available to us. Most founders spend it somewhere else. These five questions are for the founder underneath the startup.
          </p>
        </div>

        {/* INTRO */}
        {phase === 'intro' && (
          <div className="card p-10 text-center">
            <div className="text-5xl mb-5">🌸</div>
            <p className="text-slate-400 text-base leading-relaxed max-w-md mx-auto mb-3">
              No judgment. No shame. Just honesty.
            </p>
            <p className="text-slate-600 text-sm italic mb-8">"No mud, no lotus." — Thich Nhat Hanh</p>
            <button
              onClick={() => setPhase('quiz')}
              className="inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-sm font-bold text-white cursor-pointer border-0"
              style={{ background: '#6366f1' }}
            >
              Begin →
            </button>
          </div>
        )}

        {/* QUIZ */}
        {phase === 'quiz' && (
          <>
            <ProgressBar current={current} total={QUESTIONS.length} color="#6366f1" />

            {/* Question card */}
            <div className="card p-7 mb-4">
              <p className="text-sm italic leading-relaxed mb-1" style={{ color: '#818cf8' }}>{q.teaching}</p>
              <p className="text-slate-600 text-xs mb-5">{q.author}</p>
              <p className="text-white text-base font-semibold leading-snug">{q.question}</p>
            </div>

            {/* Answers */}
            <div className="flex flex-col gap-2 mb-4">
              {q.answers.map((ans, idx) => {
                const s = MINDSET_STYLE[ans.label];
                const isSelected = selected === idx;
                const isPulsing = pulsing === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => select(idx)}
                    className="rounded-xl p-3.5 flex gap-3 items-start transition-all duration-200"
                    style={{
                      background: isSelected ? s.bg : 'rgba(255,255,255,0.02)',
                      border: `1px solid ${isSelected ? s.border : 'rgb(30,41,59)'}`,
                      cursor: selected !== null && !isSelected ? 'default' : 'pointer',
                      opacity: selected !== null && !isSelected ? 0.38 : 1,
                      animation: isPulsing ? 'indigoPulse 1.1s ease-out' : 'none',
                    }}
                  >
                    <div
                      className="rounded px-2 py-0.5 text-xs font-semibold flex-shrink-0 mt-0.5 whitespace-nowrap"
                      style={{ background: `${s.tag}22`, border: `1px solid ${s.tag}44`, color: s.tag }}
                    >
                      {ans.label}
                    </div>
                    <span className="text-sm leading-relaxed" style={{ color: isSelected ? '#e2e8f0' : '#8492a6' }}>{ans.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Compassion note */}
            {note && (
              <div className="rounded-xl p-4 mb-4" style={{ background: 'rgba(99,102,241,0.07)', border: '1px solid rgba(99,102,241,0.2)' }}>
                <p className="text-sm italic leading-relaxed m-0" style={{ color: '#a5b4fc' }}>"{note}"</p>
              </div>
            )}

            {selected !== null && (
              <div className="flex justify-end">
                <button
                  onClick={next}
                  className="rounded-xl px-6 py-3 text-sm font-bold text-white cursor-pointer border-0"
                  style={{ background: '#6366f1' }}
                >
                  {current + 1 < QUESTIONS.length ? 'Next →' : 'See My Results →'}
                </button>
              </div>
            )}
          </>
        )}

        {/* RESULTS */}
        {phase === 'results' && (
          <>
            <div className="card p-10 text-center mb-5" style={{ border: `1px solid ${tier.color}44` }}>
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Mindset Score</div>
              <div className="font-black leading-none mb-1" style={{ fontSize: 80, color: tier.color }}>{displayScore}</div>
              <div className="text-slate-600 text-sm mb-5">out of 10</div>
              <div className="inline-block rounded-full px-5 py-1.5 mb-2" style={{ background: `${tier.color}18`, border: `1px solid ${tier.color}33` }}>
                <span className="font-bold text-base" style={{ color: tier.color }}>{tier.label}</span>
              </div>
              <p className="text-slate-400 text-sm mt-2">{tier.desc}</p>
            </div>

            {patterns.length > 0 && (
              <div className="rounded-2xl p-5 mb-4" style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.2)' }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#6366f1' }}>Patterns Worth Noticing</div>
                {patterns.map((a, i) => (
                  <div key={i} className="flex gap-2.5 items-start mb-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: '#6366f1' }} />
                    <span className="text-sm leading-relaxed" style={{ color: '#a5b4fc' }}>{a.question}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Closing note */}
            <div className="card p-6 mb-5">
              <p className="text-slate-500 text-sm italic leading-relaxed m-0">
                "Thich Nhat Hanh said that the most precious gift we can offer anyone is our attention. Build Anyway exists for founders who are learning to give that gift to themselves — and then to everything they build. If this landed somewhere real, Peter would like to hear from you."
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="/#contact"
                className="block rounded-xl py-4 text-center font-bold text-sm text-white no-underline"
                style={{ background: '#6366f1' }}
              >
                Talk to Peter
              </a>
              <a
                href="/build-anyway"
                className="block rounded-xl py-3.5 text-center text-sm no-underline"
                style={{ background: 'transparent', border: '1px solid rgba(99,102,241,0.3)', color: '#818cf8' }}
              >
                Learn About Build Anyway →
              </a>
              <button
                onClick={reset}
                className="py-2 text-xs text-slate-600 bg-transparent border-0 cursor-pointer"
              >
                Start over
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────

export default function RedFlagsPage() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <style>{`
        @keyframes redPulse {
          0%   { box-shadow: 0 0 0 0 rgba(220,38,38,0); }
          35%  { box-shadow: 0 0 0 8px rgba(220,38,38,0.35); background: rgba(220,38,38,0.14); }
          100% { box-shadow: 0 0 0 0 rgba(220,38,38,0); }
        }
        @keyframes indigoPulse {
          0%   { box-shadow: 0 0 0 0 rgba(99,102,241,0); }
          40%  { box-shadow: 0 0 0 10px rgba(99,102,241,0.28); }
          100% { box-shadow: 0 0 0 0 rgba(99,102,241,0); }
        }
      `}</style>

      <div className="bg-slate-950 min-h-screen text-white">
        <Header />

        {/* PAGE HERO */}
        <section className="pt-32 pb-20 text-center">
          <div className="container mx-auto px-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 mb-6 text-xs font-bold uppercase tracking-widest border" style={{ background: 'rgba(200,169,110,0.1)', borderColor: 'rgba(200,169,110,0.25)', color: '#c8a96e' }}>
              Ferreira CTO
            </div>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-none mb-5">
              Two Assessments.<br />One Honest Picture.
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Most deep tech founders have a strategy problem, a mindset problem, or both.<br className="hidden sm:block" /> Find out which.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={() => scrollTo('strategy')}
                className="rounded-xl px-6 py-3.5 text-sm font-bold cursor-pointer border-0 whitespace-nowrap"
                style={{ background: '#c8a96e', color: '#0f172a' }}
              >
                🚩 Start Strategy Assessment
              </button>
              <button
                onClick={() => scrollTo('mindset')}
                className="rounded-xl px-6 py-3.5 text-sm font-semibold cursor-pointer whitespace-nowrap"
                style={{ background: 'transparent', color: '#818cf8', border: '1px solid rgba(99,102,241,0.4)' }}
              >
                🌱 Start Mindset Assessment
              </button>
            </div>
          </div>
        </section>

        <StrategyAssessment />

        {/* DIVIDER */}
        <div className="container mx-auto px-6 max-w-lg">
          <div className="border-t border-slate-800 py-14 text-center">
            <p className="text-slate-700 text-lg italic">
              That was your strategy. Now let's look at something harder.
            </p>
          </div>
        </div>

        <MindsetAssessment />

        <Footer />
      </div>
    </>
  );
}
