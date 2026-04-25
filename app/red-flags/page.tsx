'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ─── TYPES ───────────────────────────────────────────────────────

type AnswerType = 'green' | 'yellow' | 'red' | 'flag';
type MindsetLabel = 'Grounded' | 'Aware' | 'Struggling' | 'Pattern active';

interface GuidanceBlock { what: string; means: string; action: string; why: string; }
interface StrategyAnswer { icon: string; type: AnswerType; text: string; points: number; }
interface StrategyFlag   { number: number; title: string; description: string; quote: string; strengthGuidance: GuidanceBlock; gapGuidance: GuidanceBlock; }
interface MindsetAnswer  { label: MindsetLabel; text: string; points: number; guidance: GuidanceBlock; }
interface MindsetQ       { number: number; teaching: string; author: string; question: string; answers: MindsetAnswer[]; compassionNote: string; }

// ─── STRATEGY DATA ───────────────────────────────────────────────

const FLAGS: StrategyFlag[] = [
  {
    number: 1,
    title: "We're Building First, Validating Later",
    description: "Deep tech founders confuse building with progress. A working prototype is not a validated business — and the longer you build before validating, the more expensive the correction.",
    quote: '"We just need to finish the MVP first."',
    strengthGuidance: {
      what:   "You have a validation process running alongside your build.",
      means:  "Your build decisions are anchored in real buyer feedback — not assumptions about what the market wants.",
      action: "Keep the validation cadence tight. Document what you're learning after every customer conversation and let it feed directly into your roadmap.",
      why:    "Validated companies raise faster and at better terms. This is one of the clearest signals investors look for at Series A.",
    },
    gapGuidance: {
      what:   "Your roadmap is running ahead of your validation.",
      means:  "Every engineering hour spent without a validated buyer is a bet — and the longer you wait, the more expensive the correction becomes.",
      action: "Schedule 5 customer discovery calls this week before writing another line of code. Your target: find one person willing to pay before you ship.",
      why:    "The cost of finding out you built the wrong thing scales with how long you've been building it.",
    },
  },
  {
    number: 2,
    title: 'Pitching the Technology Instead of the Outcome',
    description: 'Investors and customers buy outcomes, not specs. The gap between "what it does" and "what it changes for the buyer" is where most deep tech companies lose deals and rounds.',
    quote: '"Our system achieves 40ms latency at the edge with 94.3% accuracy."',
    strengthGuidance: {
      what:   "Your pitch leads with the customer's world, not the product.",
      means:  "You're selling transformation, not specifications — which is how buyers actually make decisions.",
      action: "Pressure-test this with 3 people outside your company. Ask them to repeat back what problem you solve in their own words.",
      why:    "Pitches that survive the 'so what?' test close deals and rounds. Yours is already framed to win.",
    },
    gapGuidance: {
      what:   "Your pitch is organized around what your technology does, not what it changes for the buyer.",
      means:  "Buyers and investors filter pitches in the first 60 seconds. If the outcome isn't front and center, most won't stay for the specs.",
      action: "Rewrite your opening to lead with the customer's world before you existed — the cost they're carrying, the workaround they're living with, the risk that keeps them up. Put the technology second.",
      why:    "Every deck that leads with specs competes on features. Every deck that leads with outcomes competes on value.",
    },
  },
  {
    number: 3,
    title: 'No Defensible ICP',
    description: '"We can sell to any manufacturer" is not a strategy. It means you haven\'t done the hard work of finding the specific buyer who has the most pain and the authority to act now.',
    quote: '"Our TAM is massive — every company in this space needs what we build."',
    strengthGuidance: {
      what:   "You have a defined, specific ideal customer profile.",
      means:  "Your sales motion, messaging, and roadmap have a target — which means they can be optimized and taught to the next hire.",
      action: "Keep the ICP as a living document. Every new win should sharpen it. Every lost deal should inform it.",
      why:    "A well-defined ICP is the foundation of a scalable GTM. Everything else — messaging, channel, pricing — follows from it.",
    },
    gapGuidance: {
      what:   "You don't yet have a specific, defensible customer you're building everything for.",
      means:  "Without a clear ICP, your sales motion, messaging, and roadmap are all pulling in slightly different directions — and the effort compounds without the results.",
      action: "Pick the one buyer you've actually talked to who had the most pain and the fastest path to a decision. Define them by role, trigger event, and their exact words. Build everything for them first.",
      why:    "You can expand the ICP later. You cannot scale a fuzzy one.",
    },
  },
  {
    number: 4,
    title: 'Unit Economics Are a "Later Problem"',
    description: "Deep tech founders routinely underestimate the true cost to deliver at scale — COGs, integration overhead, support costs, hardware failure rates. These are not software problems and they don't solve themselves with volume.",
    quote: '"We\'ll get margins right once we have scale."',
    strengthGuidance: {
      what:   "You have a working unit economics model stress-tested at scale.",
      means:  "You know what your business looks like at 10x volume — and you've built the product and pricing to support it.",
      action: "Revisit the model every quarter and after any major pricing or COGS changes. Have it ready before investors ask.",
      why:    "Unit economics are the language of a fundable Series A. Knowing them cold builds disproportionate investor confidence.",
    },
    gapGuidance: {
      what:   "Your unit economics are either unknown or deferred to later.",
      means:  "Investors will model them. The question is whether you find the holes first or they do — and finding them for you is not a good look in a diligence call.",
      action: "Build the model this week: COGS, gross margin per unit, CAC, and payback period at 1x, 10x, and 100x volume. If you don't have the numbers yet, getting them is the first work.",
      why:    "Hardware unit economics don't automatically improve with scale. They need to be engineered — and that starts with knowing exactly where you stand today.",
    },
  },
  {
    number: 5,
    title: 'Go-To-Market Is an Afterthought',
    description: 'In deep tech, distribution is as hard as the product. GTM has to be designed and tested before you scale — not hired away after launch.',
    quote: '"We\'ll bring in a sales lead once the product is ready."',
    strengthGuidance: {
      what:   "You have a documented, repeatable sales process built from founder-led wins.",
      means:  "You can hire, train, and hand off your sales motion — which means it can scale beyond you.",
      action: "Audit the playbook quarterly. Make sure every new win updates it. Your first sales hire should be able to read it and run on day one.",
      why:    "A documented GTM is one of the clearest signals of Series A readiness. It shows the business can grow without the founder in every room.",
    },
    gapGuidance: {
      what:   "Your go-to-market motion lives in the founder's head, not on paper.",
      means:  "Founder-led sales that aren't documented can't be handed off. Every new hire has to rediscover the process from scratch, and every departure takes it with them.",
      action: "Write down the sales process you'd hand to a hire starting Monday: the ICP, the outreach sequence, the discovery questions, the objection responses, the close motion. One page is enough to start.",
      why:    "You can only be in so many rooms. The day you try to scale, you'll wish you started the documentation earlier.",
    },
  },
  {
    number: 6,
    title: "The Investor Narrative Doesn't Match the Market Map",
    description: "Deep tech fundraising is hard. Investors need to believe in the market, the timing, and why your team specifically wins. A great product with a weak narrative doesn't raise.",
    quote: '"We don\'t really have direct competitors — we\'re the only ones doing this."',
    strengthGuidance: {
      what:   "You have a crisp, connected investor narrative grounded in real market dynamics.",
      means:  "Investors can see the market, understand the timing, and believe in why your team specifically wins.",
      action: "Practice the three core questions cold: why now, why us, why we're still winning in year 5. Make sure every leader on your team can answer them too.",
      why:    "In deep tech, narrative often determines Series A outcomes — because the product is still early and investors are betting on the team and the thesis.",
    },
    gapGuidance: {
      what:   "Your investor narrative and your market map aren't telling the same story yet.",
      means:  "Investors need to believe three things: the market is real, the timing is right, and your team specifically wins. If any of these is fuzzy, the raise stalls.",
      action: "Answer three questions on one slide: Why now? Why your team? Why are you still the market leader in year 5? Each answer should take under 60 seconds.",
      why:    "A great product with a weak narrative doesn't raise. A strong narrative buys you the time to prove the product.",
    },
  },
  {
    number: 7,
    title: 'The Founder Is the Only One Who Understands the Business',
    description: "In deep tech startups, tribal knowledge kills scale. If the strategy, customer relationships, and investor narrative all live in the founder's head — you have a critical single point of failure.",
    quote: '"I\'m the only one who has the full picture right now."',
    strengthGuidance: {
      what:   "Your strategy is written down and pressure-tested with your team.",
      means:  "The business doesn't live entirely in your head — which means it can survive you being out of any given room.",
      action: "Keep the strategy memo updated quarterly. Use it to onboard advisors, new hires, and investors. Shared strategy scales; tribal knowledge doesn't.",
      why:    "As the company grows, the gap between what the founder knows and what the team knows becomes the biggest source of execution failures. You're ahead of this.",
    },
    gapGuidance: {
      what:   "The strategy, customer relationships, and investor narrative live primarily in your head.",
      means:  "You have a critical single point of failure. When you try to scale, the team can't operate without you in every room — and that ceiling comes faster than most founders expect.",
      action: "Block two hours this week to write a strategy memo: ICP, investor narrative, key customer relationships, 90-day priorities. Write it for yourself, not the team. The act of writing it surfaces what you've been assuming.",
      why:    "Clarity that lives only in the founder's head compounds risk. Clarity on paper compounds leverage.",
    },
  },
];

// ─── MINDSET DATA ─────────────────────────────────────────────────

const QUESTIONS: MindsetQ[] = [
  {
    number: 1,
    teaching: '"The present moment is the only moment available to us, and it is the door to all moments."',
    author: '— Thich Nhat Hanh',
    question: "When you feel behind — on the roadmap, on the raise, on where you thought you'd be — what do you do with that feeling?",
    compassionNote: 'Urgency without presence is just speed. Recovery taught you that. Building is no different.',
    answers: [
      { label: 'Grounded', text: "I name it, sit with it briefly, and return to what's actually in front of me", points: 2,
        guidance: { what: "You return to the present instead of accelerating away from it.", means: "You're making decisions from what's real, not from the story urgency is telling you.", action: "Use this as your anchor when the pressure spikes — name the feeling, breathe, return.", why: "This is one of the most underrated founder skills. Most never build it." } },
      { label: 'Aware', text: "I notice it but usually push through by adding more to my plate", points: 1,
        guidance: { what: "You can see the urgency pattern — you just haven't stopped it yet.", means: "Awareness without a pause still leads to the same outcome. You're one step closer than most.", action: "The next time you notice it, pause before you add the next thing. Just once. See what happens.", why: "The pause is where choice lives. Right now it's happening after the fact." } },
      { label: 'Struggling', text: "I use urgency as fuel — the faster I move, the less I feel it", points: 0,
        guidance: { what: "You're using speed to manage a feeling, not a problem.", means: "The urgency will still be there when you stop — and you'll have less capacity to work with it.", action: "Notice once today when you're reaching for speed to avoid something. You don't have to change it — just see it.", why: "Speed is a very effective way to avoid feeling behind. Until it isn't." } },
      { label: 'Pattern active', text: '"I don\'t have time to slow down. Slowing down is losing."', points: -5,
        guidance: { what: "Slowing down feels existentially dangerous to you right now.", means: "That belief is costing you more than you know — in decision quality, in relationships, in your own capacity.", action: "Ask yourself: what would I need to believe for slowing down to feel safe? That question is worth sitting with.", why: "The founders who last aren't the ones who never slowed down. They're the ones who learned when to." } },
    ],
  },
  {
    number: 2,
    teaching: '"Because things are impermanent, everything is possible."',
    author: '— Thich Nhat Hanh',
    question: 'When the market, a customer, or a trusted advisor tells you something that contradicts your original vision — how do you respond?',
    compassionNote: "Non-attachment isn't letting go of what matters. It's holding it loosely enough to let it grow.",
    answers: [
      { label: 'Grounded', text: "I treat it as data and ask what it's telling me before deciding what to do", points: 2,
        guidance: { what: "You hold feedback as information rather than as a verdict.", means: "You're able to update the map without feeling like the territory has been taken from you.", action: "Keep the habit of asking 'what is this telling me?' before deciding what to do with it.", why: "This is a skill most founders take years to build. You already have it." } },
      { label: 'Aware', text: "I listen, but I find myself defending the vision before I've really absorbed the feedback", points: 1,
        guidance: { what: "You hear feedback — but the defense goes up before the absorption happens.", means: "You're processing feedback through the lens of protecting something, rather than learning from it.", action: "Try a 24-hour rule: when feedback stings, don't respond for a day. Let it land before you decide what it means.", why: "The defend-then-listen pattern is nearly universal. Catching it is the first step to changing it." } },
      { label: 'Struggling', text: "It feels like an attack on something I built. I have a hard time separating myself from the idea.", points: 0,
        guidance: { what: "Your identity and your company are closely fused right now.", means: "When identity and idea are the same thing, every piece of feedback hits twice — once for the business, once for you.", action: "Ask: what would be true if this feedback is right? Don't answer it. Just ask it. Let the question do the work.", why: "Untangling identity from the company is some of the most important work a founder can do — and the hardest to see from the inside." } },
      { label: 'Pattern active', text: '"I\'ve pivoted before and regretted it. I know I\'m right about this."', points: -5,
        guidance: { what: "Past pivots that didn't work are shaping how you hear new information.", means: "The memory of being wrong is making it harder to stay open — even when the signal is real.", action: "Ask: is this conviction, or is it the memory of a past pivot making it hard to hear this one?", why: "Rigidity that looks like certainty is one of the hardest patterns to catch from the inside." } },
    ],
  },
  {
    number: 3,
    teaching: '"Smile, breathe, and go slowly."',
    author: '— Thich Nhat Hanh',
    question: 'How are you actually doing — not the founder answer, the real one?',
    compassionNote: "The startup will demand everything you give it. Recovery taught you that some things, once given away, are hard to get back.",
    answers: [
      { label: 'Grounded', text: "Honest answer: I have hard days, but I have rhythms that restore me. Sleep, movement, connection.", points: 2,
        guidance: { what: "You have rhythms that restore you — and you're protecting them.", means: "The company runs on you. These rhythms are infrastructure, not luxury.", action: "Name the three things that most restore you. Treat them as non-negotiable in your calendar, not as rewards.", why: "Founders who protect their restoration capacity last longer and make better decisions at the moments that matter most." } },
      { label: 'Aware', text: "I know I'm running hot. I tell myself it's temporary.", points: 1,
        guidance: { what: "You know you're running hot — and you've assigned it a timeline.", means: "'Temporary' has a way of becoming permanent without a clear end condition.", action: "Name exactly what would need to be true for you to slow down. Not generally — specifically. Write it down.", why: "The milestones that mark the end of temporary have a way of moving. Decide now before you're too depleted to notice." } },
      { label: 'Struggling', text: "Rest feels irresponsible. I feel guilty when I'm not working.", points: 0,
        guidance: { what: "Rest and productivity feel like they're in opposition for you right now.", means: "Guilt about rest is one of the most common — and most costly — founder patterns.", action: "Name one thing that restores you that you've been avoiding. Schedule it this week. Call it work if that helps.", why: "Rest isn't a reward for finishing. It's part of what makes finishing possible." } },
      { label: 'Pattern active', text: '"I\'ll take care of myself after we close the round / ship the product / hit the milestone."', points: -5,
        guidance: { what: "Your self-care has been deferred to a milestone that keeps moving.", means: "The version of you on the other side of the round still needs what you need now. This is not a future problem.", action: "Pick one thing — sleep, movement, a conversation with someone who knows you — and do it this week regardless of where the raise is.", why: "The startup can survive a lot. It cannot survive a founder who isn't okay." } },
    ],
  },
  {
    number: 4,
    teaching: '"No mud, no lotus."',
    author: '— Thich Nhat Hanh',
    question: "When something doesn't work — a failed experiment, a lost deal, a bad hire — what story do you tell yourself about it?",
    compassionNote: "The lotus doesn't apologize for the mud it grew through. Neither should you.",
    answers: [
      { label: 'Grounded', text: "It's information. I extract the lesson and move. It doesn't define me or the company.", points: 2,
        guidance: { what: "You treat failure as data, not verdict.", means: "You're able to keep taking the risks that matter because the cost of failure stays proportional.", action: "Keep the debrief habit. Write the lesson down — even one sentence — before you move on.", why: "This is what lets founders make the second bet, the third bet. The ones who don't have this relationship with failure stop swinging." } },
      { label: 'Aware', text: "I debrief it intellectually but it lingers emotionally longer than I'd like.", points: 1,
        guidance: { what: "You process failure clearly in your mind — but it stays longer in your body.", means: "The emotional residue can shape decisions you think are rational, in ways that are hard to see.", action: "After the next debrief, ask: what am I still carrying about this that isn't the lesson? Name it. That's often the real thing.", why: "Knowing and feeling aren't the same timeline. That gap is worth watching." } },
      { label: 'Struggling', text: "Failed things feel like evidence of something — about me, about whether this will work.", points: 0,
        guidance: { what: "Failure is landing as evidence — about you, not just about the experiment.", means: "When every miss is a verdict, you start managing for not failing instead of learning from it.", action: "Name one recent failure and ask: if this happened to someone I respect, what would I tell them it means? That's usually closer to the truth.", why: "Failure as evidence is a painful and inaccurate frame. It's worth examining, ideally with someone honest." } },
      { label: 'Pattern active', text: '"I can\'t afford to fail. Every miss is one step closer to proving everyone right who doubted me."', points: -5,
        guidance: { what: "You're building in part to prove something to people who doubted you.", means: "That fuel burns hot and leaves residue. It also means every miss is personal in a way that makes it harder to learn from.", action: "Ask: who specifically am I trying to prove wrong? What would it feel like to build without that weight?", why: "The doubt you're outrunning doesn't go away when you succeed. It's worth looking at directly." } },
    ],
  },
  {
    number: 5,
    teaching: '"Interbeing: you are because everything else is."',
    author: '— Thich Nhat Hanh',
    question: "Who actually knows what you're carrying right now — not the pitch, the real weight of it?",
    compassionNote: "Interbeing is the understanding that nothing arises alone. Not a lotus. Not a company. Not a recovery.",
    answers: [
      { label: 'Grounded', text: "My co-founder, advisor, sponsor, or partner knows the real version. I'm not doing this alone.", points: 2,
        guidance: { what: "You have people who know the real weight of what you're carrying.", means: "You're not processing the hardest parts alone — which means you have perspective, support, and accountability.", action: "Invest in those relationships deliberately. They're as important as the product, and they need tending too.", why: "This is one of the most protective things a founder can have. Most don't build it until a crisis forces them to." } },
      { label: 'Aware', text: "A few people have pieces of it. Nobody has the whole picture.", points: 1,
        guidance: { what: "You share in pieces — but nobody holds the full picture.",  means: "Sharing in parts is safer, but it also means nobody can fully help you with the whole thing.", action: "Consider who one person might be who could hold the complete picture. Not to fix it — just to witness it.", why: "Being fully known by even one person changes how you carry the weight." } },
      { label: 'Struggling', text: "I keep the hard stuff to myself. It feels like weakness to show it in a startup context.", points: 0,
        guidance: { what: "You're carrying it alone because showing it feels like weakness.", means: "The startup context trains you to perform strength. But the people who can actually help you need to see the real version.", action: "Pick one person this week — not to solve anything, just to say what's actually true. Start there.", why: "Isolation compounds everything that's already hard. You don't have to figure this out by yourself." } },
      { label: 'Pattern active', text: '"Nobody can really understand what this is like. I have to figure it out myself."', points: -5,
        guidance: { what: "You've concluded that you're carrying something no one else can understand.", means: "That conclusion keeps you isolated in a way that compounds the weight instead of sharing it.", action: "Ask: is it that nobody can understand, or that you haven't found the right person yet? Those are different problems.", why: "Build Anyway exists specifically for this — the founder who is carrying it alone and doesn't have to." } },
    ],
  },
];

// ─── SCORING + TIER GUIDANCE ──────────────────────────────────────

function strategyTier(score: number) {
  if (score >= 11) return {
    label: 'Strategically Sound', desc: 'Ready to scale your go-to-market.', color: '#16a34a',
    guidance: "Your fundamentals are solid. The work now is acceleration — tightening your GTM motion, sharpening your investor narrative, and making sure the team can carry the strategy without you in every room. Let's talk about what's next.",
  };
  if (score >= 8) return {
    label: 'Exposed in Places', desc: '2–3 gaps that will surface in diligence.', color: '#ca8a04',
    guidance: "You have real strengths here. The gaps will surface in diligence — but targeted work on the right 2–3 areas before your next raise could meaningfully change how that conversation goes.",
  };
  if (score >= 4) return {
    label: 'High Risk', desc: 'Your raise will be harder than it needs to be.', color: '#dc2626',
    guidance: "The gaps are significant and they compound each other. I'd start with validation and ICP — once you know exactly who you're selling to and what they'll pay, the narrative and unit economics become much easier to get right.",
  };
  return {
    label: 'Critical', desc: 'Series A is not fundable in your current state.', color: '#dc2626',
    guidance: "This isn't a verdict — it's an honest picture. The foundation needs work before the raise, and that's a solvable problem. It's exactly the kind of work a strategy engagement is designed to address. Let's talk before you go back to investors.",
  };
}

function mindsetTier(score: number) {
  if (score >= 9) return {
    label: 'Grounded', desc: "You're building from a stable place. This is rare and worth protecting.", color: '#16a34a',
    guidance: "What you have here is genuinely uncommon. Most founders are running on urgency and hoping the foundation holds. Yours is solid. Protect it through the high-pressure inflection points ahead — and share how you got here.",
  };
  if (score >= 6) return {
    label: 'Aware', desc: 'You can see the patterns. Seeing them is the first step to choosing differently.', color: '#6366f1',
    guidance: "Awareness without the next move is just productive discomfort. You can see the patterns — now the work is building the pause between trigger and response. That's exactly the territory Build Anyway is designed for.",
  };
  if (score >= 3) return {
    label: 'Tender', desc: "Some old patterns are running the show. This is not a verdict — it's an invitation.", color: '#ca8a04',
    guidance: "Something real came up in here. The patterns that run quietly in the background of a founder's decisions are often the most consequential ones. Build Anyway exists for exactly this moment — not after you've figured it out, but right now.",
  };
  return {
    label: 'The foundation needs attention', desc: "Not the startup's, yours. Everything else is built on this.", color: '#94a3b8',
    guidance: "The startup will take everything you give it. But it can't run without you — the real you, not the version holding it together through sheer will. This is the most important thing I can tell you. Please reach out.",
  };
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

// ─── GUIDANCE CARD ────────────────────────────────────────────────

function GuidanceCard({ title, icon, accentColor, bg, border, block }: {
  title: string; icon: string; accentColor: string; bg: string; border: string; block: GuidanceBlock;
}) {
  return (
    <div className="rounded-2xl p-5" style={{ background: bg, border: `1px solid ${border}` }}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm">{icon}</span>
        <span className="text-sm font-semibold" style={{ color: accentColor }}>{title}</span>
      </div>
      <div className="flex flex-col gap-3">
        {([
          ['What', block.what],
          ['What it means', block.means],
          ['What to do', block.action],
          ['Why', block.why],
        ] as [string, string][]).map(([label, text]) => (
          <div key={label} className="flex gap-3">
            <span className="text-xs font-bold uppercase tracking-widest flex-shrink-0 w-24 pt-0.5" style={{ color: accentColor }}>{label}</span>
            <p className="text-slate-400 text-sm leading-relaxed m-0">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── PROGRESS BAR ────────────────────────────────────────────────

function ProgressBar({ current, total, color }: { current: number; total: number; color: string }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color }}>{current + 1} of {total}</span>
        <span className="text-slate-500 text-sm">{Math.round((current / total) * 100)}% complete</span>
      </div>
      <div className="h-0.5 bg-slate-800 rounded-full">
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${(current / total) * 100}%`, background: color }} />
      </div>
    </div>
  );
}

// ─── STRATEGY ASSESSMENT ─────────────────────────────────────────

const STRATEGY_ANSWERS: StrategyAnswer[][] = FLAGS.map(() => [
  { icon: '✅', type: 'green',  text: '', points: 2 },
  { icon: '⚠️', type: 'yellow', text: '', points: 1 },
  { icon: '❌', type: 'red',    text: '', points: 0 },
  { icon: '🚩', type: 'flag',   text: '', points: -5 },
]);

const ALL_ANSWERS: StrategyAnswer[][] = [
  [
    { icon: '✅', type: 'green',  text: 'We have paying customers, signed LOIs, or a documented validation process with real buyers', points: 2 },
    { icon: '⚠️', type: 'yellow', text: "We've done customer discovery but haven't formalized what we learned", points: 1 },
    { icon: '❌', type: 'red',    text: "We're heads-down building — customer validation comes after we ship", points: 0 },
    { icon: '🚩', type: 'flag',   text: '"We\'re not ready to talk to customers yet."', points: -5 },
  ],
  [
    { icon: '✅', type: 'green',  text: "Every pitch starts with the customer's world before us — the cost, the workaround, the outcome we change", points: 2 },
    { icon: '⚠️', type: 'yellow', text: "We know our ROI story but haven't made it the centerpiece of our pitch yet", points: 1 },
    { icon: '❌', type: 'red',    text: 'Our demo is a product tour — we lead with capabilities and specs', points: 0 },
    { icon: '🚩', type: 'flag',   text: '"The technology speaks for itself."', points: -5 },
  ],
  [
    { icon: '✅', type: 'green',  text: "ICP defined by role, company profile, trigger event, and pain in the customer's own language", points: 2 },
    { icon: '⚠️', type: 'yellow', text: "We have a target vertical but haven't gotten more specific than that", points: 1 },
    { icon: '❌', type: 'red',    text: "We're still figuring out who the best early customer is", points: 0 },
    { icon: '🚩', type: 'flag',   text: '"We\'re targeting mid-market to enterprise across multiple verticals."', points: -5 },
  ],
  [
    { icon: '✅', type: 'green',  text: 'Full unit economics model: COGS, CAC, LTV, gross margin per unit, payback period — stress-tested at 10x volume', points: 2 },
    { icon: '⚠️', type: 'yellow', text: "We have rough numbers but haven't modeled what happens at scale", points: 1 },
    { icon: '❌', type: 'red',    text: "We're not focused on profitability yet — we're in growth mode", points: 0 },
    { icon: '🚩', type: 'flag',   text: '"The hardware is a loss leader; the software subscription is the real business."', points: -5 },
  ],
  [
    { icon: '✅', type: 'green',  text: 'Documented, repeatable sales process built from founder-led wins with a clear motion for the next hire', points: 2 },
    { icon: '⚠️', type: 'yellow', text: 'Founder is selling but nothing is written down yet', points: 1 },
    { icon: '❌', type: 'red',    text: "We're relying on a future channel partner, systems integrator, or government contract to drive revenue", points: 0 },
    { icon: '🚩', type: 'flag',   text: '"Once people see what this can do, it will sell itself."', points: -5 },
  ],
  [
    { icon: '✅', type: 'green',  text: 'Competitive 2x2, bottom-up market size, and a crisp answer to "why now, why us, why we\'re still winning in year 5"', points: 2 },
    { icon: '⚠️', type: 'yellow', text: "We have a deck but haven't fully connected our narrative to market dynamics and timing", points: 1 },
    { icon: '❌', type: 'red',    text: 'Market size is from an analyst report and we have a standard competitive slide', points: 0 },
    { icon: '🚩', type: 'flag',   text: '"Our technology is so differentiated it\'s essentially a category of one."', points: -5 },
  ],
  [
    { icon: '✅', type: 'green',  text: 'Written strategy memo, customer playbook, and investor narrative shared with and pressure-tested by the team', points: 2 },
    { icon: '⚠️', type: 'yellow', text: 'Key things are documented but not consistently updated or shared across the company', points: 1 },
    { icon: '❌', type: 'red',    text: 'The team executes on product; I handle strategy and business direction', points: 0 },
    { icon: '🚩', type: 'flag',   text: '"We haven\'t formalized our strategy yet — it\'s still evolving."', points: -5 },
  ],
];

function StrategyAssessment() {
  type Phase = 'intro' | 'quiz' | 'results';
  const [phase, setPhase] = useState<Phase>('intro');
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [flashing, setFlashing] = useState<number | null>(null);
  const [log, setLog] = useState<{ points: number; title: string; answerType: AnswerType }[]>([]);

  const totalScore = log.reduce((s, a) => s + a.points, 0);
  const displayScore = useCountUp(totalScore, phase === 'results');
  const tier = strategyTier(totalScore);
  const strengths = log.filter((a, i) => a.answerType === 'green' || a.answerType === 'yellow').map((a, _) => {
    const idx = log.indexOf(a);
    return { flag: FLAGS[idx], answerType: a.answerType };
  });
  const gaps = log.filter(a => a.answerType === 'red' || a.answerType === 'flag').map((a) => {
    const idx = log.indexOf(a);
    return { flag: FLAGS[idx] };
  });

  const answers = ALL_ANSWERS[current];
  const flag = FLAGS[current];

  const select = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (answers[idx].type === 'flag') {
      setFlashing(idx);
      setTimeout(() => setFlashing(null), 900);
    }
  };

  const next = () => {
    if (selected === null) return;
    const ans = answers[selected];
    setLog(prev => [...prev, { points: ans.points, title: flag.title, answerType: ans.type }]);
    setSelected(null);
    if (current + 1 < FLAGS.length) setCurrent(current + 1);
    else setPhase('results');
  };

  const reset = () => { setPhase('intro'); setCurrent(0); setSelected(null); setLog([]); };

  // Compute strengths/gaps from log with correct flag mapping
  const logWithFlags = log.map((entry, i) => ({ ...entry, flag: FLAGS[i] }));
  const strengthEntries = logWithFlags.filter(e => e.answerType === 'green' || e.answerType === 'yellow');
  const gapEntries = logWithFlags.filter(e => e.answerType === 'red' || e.answerType === 'flag');

  return (
    <section id="strategy" className="py-20" style={{ scrollMarginTop: 80 }}>
      <div className="container mx-auto px-6 max-w-2xl">

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 mb-4 text-xs font-bold uppercase tracking-widest border" style={{ background: 'rgba(200,169,110,0.1)', borderColor: 'rgba(200,169,110,0.25)', color: '#c8a96e' }}>
            <span>🚩</span> Assessment 1
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight leading-tight">
            The 7 Red Flags Killing Your Deep Tech Startup
          </h2>
          <p className="text-slate-400 text-lg">Take 5 minutes to find out where your strategy stands.</p>
        </div>

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
            <button onClick={() => setPhase('quiz')} className="inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-sm font-bold cursor-pointer border-0" style={{ background: '#c8a96e', color: '#0f172a' }}>
              Start the Assessment →
            </button>
          </div>
        )}

        {phase === 'quiz' && (
          <>
            <ProgressBar current={current} total={FLAGS.length} color="#c8a96e" />
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7 mb-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">🚩</span>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#c8a96e' }}>Flag {flag.number} of 7</span>
              </div>
              <h3 className="text-xl font-bold mb-2.5 leading-snug">{flag.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">{flag.description}</p>
              <p className="text-slate-600 text-sm italic">{flag.quote}</p>
            </div>
            <div className="flex flex-col gap-2 mb-5">
              {answers.map((ans, idx) => {
                const s = TYPE_STYLE[ans.type];
                const isSelected = selected === idx;
                const isFlash = flashing === idx;
                return (
                  <div key={idx} onClick={() => select(idx)} className="rounded-xl p-3.5 flex gap-3 items-start transition-all duration-200" style={{ background: isSelected ? s.bg : 'rgba(255,255,255,0.02)', border: `1px solid ${isSelected ? s.border : 'rgb(30,41,59)'}`, cursor: selected !== null && !isSelected ? 'default' : 'pointer', opacity: selected !== null && !isSelected ? 0.38 : 1, animation: isFlash ? 'redPulse 0.9s ease-out' : 'none' }}>
                    <span className="text-base flex-shrink-0 mt-0.5">{ans.icon}</span>
                    <span className="text-sm leading-relaxed" style={{ color: isSelected ? '#e2e8f0' : '#8492a6' }}>{ans.text}</span>
                  </div>
                );
              })}
            </div>
            {selected !== null && (
              <div className="flex justify-end">
                <button onClick={next} className="rounded-xl px-6 py-3 text-sm font-bold cursor-pointer border-0" style={{ background: '#c8a96e', color: '#0f172a' }}>
                  {current + 1 < FLAGS.length ? 'Next Flag →' : 'See My Results →'}
                </button>
              </div>
            )}
          </>
        )}

        {phase === 'results' && (
          <>
            {/* Score */}
            <div className="card p-10 text-center mb-5" style={{ border: `1px solid ${tier.color}44` }}>
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Strategy Score</div>
              <div className="font-black leading-none mb-1" style={{ fontSize: 80, color: tier.color }}>{displayScore}</div>
              <div className="text-slate-600 text-sm mb-5">out of 14</div>
              <div className="inline-block rounded-full px-5 py-1.5 mb-2" style={{ background: `${tier.color}18`, border: `1px solid ${tier.color}40` }}>
                <span className="font-bold text-base" style={{ color: tier.color }}>{tier.label}</span>
              </div>
              <p className="text-slate-400 text-sm mt-2">{tier.desc}</p>
            </div>

            {/* Tier guidance */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 mb-8">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">What This Means for You</div>
              <p className="text-slate-300 text-sm leading-relaxed">{tier.guidance}</p>
            </div>

            {/* Strengths */}
            {strengthEntries.length > 0 && (
              <div className="mb-8">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">What You're Doing Right</div>
                <div className="flex flex-col gap-3">
                  {strengthEntries.map((entry, i) => (
                    <GuidanceCard
                      key={i}
                      title={entry.flag.title}
                      icon={entry.answerType === 'green' ? '✅' : '⚠️'}
                      accentColor={entry.answerType === 'green' ? '#16a34a' : '#ca8a04'}
                      bg={entry.answerType === 'green' ? 'rgba(22,163,74,0.05)' : 'rgba(202,138,4,0.05)'}
                      border={entry.answerType === 'green' ? 'rgba(22,163,74,0.2)' : 'rgba(202,138,4,0.2)'}
                      block={entry.flag.strengthGuidance}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Gaps */}
            {gapEntries.length > 0 && (
              <div className="mb-8">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Where to Focus</div>
                <div className="flex flex-col gap-3">
                  {gapEntries.map((entry, i) => (
                    <GuidanceCard
                      key={i}
                      title={entry.flag.title}
                      icon="🚩"
                      accentColor="#f87171"
                      bg="rgba(220,38,38,0.05)"
                      border="rgba(220,38,38,0.18)"
                      block={entry.flag.gapGuidance}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col gap-3">
              <a href="/#contact" className="block rounded-xl py-4 text-center font-bold text-sm no-underline" style={{ background: '#c8a96e', color: '#0f172a' }}>
                Book a Free 30-Minute Strategy Call
              </a>
              <button onClick={reset} className="rounded-xl py-3 text-sm text-slate-500 bg-transparent border border-slate-800 cursor-pointer">
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
  const [log, setLog] = useState<{ points: number; label: MindsetLabel; guidance: GuidanceBlock; questionShort: string }[]>([]);

  const totalScore = log.reduce((s, a) => s + a.points, 0);
  const displayScore = useCountUp(totalScore, phase === 'results');
  const tier = mindsetTier(totalScore);
  const q = QUESTIONS[current];

  const wellEntries = log.filter(e => e.label === 'Grounded' || e.label === 'Aware');
  const noticeEntries = log.filter(e => e.label === 'Struggling' || e.label === 'Pattern active');

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
    setLog(prev => [...prev, { points: ans.points, label: ans.label, guidance: ans.guidance, questionShort: q.question.slice(0, 55) + '…' }]);
    setSelected(null);
    setNote(null);
    if (current + 1 < QUESTIONS.length) setCurrent(current + 1);
    else setPhase('results');
  };

  const reset = () => { setPhase('intro'); setCurrent(0); setSelected(null); setLog([]); setNote(null); };

  return (
    <section id="mindset" className="py-20" style={{ scrollMarginTop: 80 }}>
      <div className="container mx-auto px-6 max-w-2xl">

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

        {phase === 'intro' && (
          <div className="card p-10 text-center">
            <div className="text-5xl mb-5">🌸</div>
            <p className="text-slate-400 text-base leading-relaxed max-w-md mx-auto mb-3">No judgment. No shame. Just honesty.</p>
            <p className="text-slate-600 text-sm italic mb-8">"No mud, no lotus." — Thich Nhat Hanh</p>
            <button onClick={() => setPhase('quiz')} className="inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-sm font-bold text-white cursor-pointer border-0" style={{ background: '#6366f1' }}>
              Begin →
            </button>
          </div>
        )}

        {phase === 'quiz' && (
          <>
            <ProgressBar current={current} total={QUESTIONS.length} color="#6366f1" />
            <div className="card p-7 mb-4">
              <p className="text-sm italic leading-relaxed mb-1" style={{ color: '#818cf8' }}>{q.teaching}</p>
              <p className="text-slate-600 text-xs mb-5">{q.author}</p>
              <p className="text-white text-base font-semibold leading-snug">{q.question}</p>
            </div>
            <div className="flex flex-col gap-2 mb-4">
              {q.answers.map((ans, idx) => {
                const s = MINDSET_STYLE[ans.label];
                const isSelected = selected === idx;
                const isPulsing = pulsing === idx;
                return (
                  <div key={idx} onClick={() => select(idx)} className="rounded-xl p-3.5 flex gap-3 items-start transition-all duration-200" style={{ background: isSelected ? s.bg : 'rgba(255,255,255,0.02)', border: `1px solid ${isSelected ? s.border : 'rgb(30,41,59)'}`, cursor: selected !== null && !isSelected ? 'default' : 'pointer', opacity: selected !== null && !isSelected ? 0.38 : 1, animation: isPulsing ? 'indigoPulse 1.1s ease-out' : 'none' }}>
                    <div className="rounded px-2 py-0.5 text-xs font-semibold flex-shrink-0 mt-0.5 whitespace-nowrap" style={{ background: `${s.tag}22`, border: `1px solid ${s.tag}44`, color: s.tag }}>{ans.label}</div>
                    <span className="text-sm leading-relaxed" style={{ color: isSelected ? '#e2e8f0' : '#8492a6' }}>{ans.text}</span>
                  </div>
                );
              })}
            </div>
            {note && (
              <div className="rounded-xl p-4 mb-4" style={{ background: 'rgba(99,102,241,0.07)', border: '1px solid rgba(99,102,241,0.2)' }}>
                <p className="text-sm italic leading-relaxed m-0" style={{ color: '#a5b4fc' }}>"{note}"</p>
              </div>
            )}
            {selected !== null && (
              <div className="flex justify-end">
                <button onClick={next} className="rounded-xl px-6 py-3 text-sm font-bold text-white cursor-pointer border-0" style={{ background: '#6366f1' }}>
                  {current + 1 < QUESTIONS.length ? 'Next →' : 'See My Results →'}
                </button>
              </div>
            )}
          </>
        )}

        {phase === 'results' && (
          <>
            {/* Score */}
            <div className="card p-10 text-center mb-5" style={{ border: `1px solid ${tier.color}44` }}>
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Mindset Score</div>
              <div className="font-black leading-none mb-1" style={{ fontSize: 80, color: tier.color }}>{displayScore}</div>
              <div className="text-slate-600 text-sm mb-5">out of 10</div>
              <div className="inline-block rounded-full px-5 py-1.5 mb-2" style={{ background: `${tier.color}18`, border: `1px solid ${tier.color}33` }}>
                <span className="font-bold text-base" style={{ color: tier.color }}>{tier.label}</span>
              </div>
              <p className="text-slate-400 text-sm mt-2">{tier.desc}</p>
            </div>

            {/* Tier guidance */}
            <div className="rounded-2xl border p-6 mb-8" style={{ borderColor: `${tier.color}33`, background: `${tier.color}08` }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: tier.color }}>What This Means for You</div>
              <p className="text-slate-300 text-sm leading-relaxed">{tier.guidance}</p>
            </div>

            {/* What you're doing well */}
            {wellEntries.length > 0 && (
              <div className="mb-8">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">What You're Doing Well</div>
                <div className="flex flex-col gap-3">
                  {wellEntries.map((entry, i) => {
                    const s = MINDSET_STYLE[entry.label];
                    return (
                      <div key={i} className="rounded-2xl p-5" style={{ background: `${s.border}08`, border: `1px solid ${s.border}25` }}>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="rounded px-2 py-0.5 text-xs font-semibold" style={{ background: `${s.tag}22`, border: `1px solid ${s.tag}44`, color: s.tag }}>{entry.label}</div>
                          <span className="text-slate-500 text-xs">{entry.questionShort}</span>
                        </div>
                        <div className="flex flex-col gap-3">
                          {([['What', entry.guidance.what], ['What it means', entry.guidance.means], ['What to keep doing', entry.guidance.action], ['Why', entry.guidance.why]] as [string, string][]).map(([label, text]) => (
                            <div key={label} className="flex gap-3">
                              <span className="text-xs font-bold uppercase tracking-widest flex-shrink-0 w-28 pt-0.5" style={{ color: s.tag }}>{label}</span>
                              <p className="text-slate-400 text-sm leading-relaxed m-0">{text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Things worth sitting with */}
            {noticeEntries.length > 0 && (
              <div className="mb-8">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Things Worth Sitting With</div>
                <div className="flex flex-col gap-3">
                  {noticeEntries.map((entry, i) => {
                    const s = MINDSET_STYLE[entry.label];
                    return (
                      <div key={i} className="rounded-2xl p-5" style={{ background: `${s.border}08`, border: `1px solid ${s.border}25` }}>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="rounded px-2 py-0.5 text-xs font-semibold" style={{ background: `${s.tag}22`, border: `1px solid ${s.tag}44`, color: s.tag }}>{entry.label}</div>
                          <span className="text-slate-500 text-xs">{entry.questionShort}</span>
                        </div>
                        <div className="flex flex-col gap-3">
                          {([['What', entry.guidance.what], ['What it means', entry.guidance.means], ['What to do', entry.guidance.action], ['Why', entry.guidance.why]] as [string, string][]).map(([label, text]) => (
                            <div key={label} className="flex gap-3">
                              <span className="text-xs font-bold uppercase tracking-widest flex-shrink-0 w-28 pt-0.5" style={{ color: s.tag }}>{label}</span>
                              <p className="text-slate-400 text-sm leading-relaxed m-0">{text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Closing */}
            <div className="card p-6 mb-5">
              <p className="text-slate-500 text-sm italic leading-relaxed m-0">
                "Thich Nhat Hanh said that the most precious gift we can offer anyone is our attention. Build Anyway exists for founders who are learning to give that gift to themselves — and then to everything they build. If this landed somewhere real, Peter would like to hear from you."
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a href="/#contact" className="block rounded-xl py-4 text-center font-bold text-sm text-white no-underline" style={{ background: '#6366f1' }}>
                Talk to Peter
              </a>
              <a href="/build-anyway" className="block rounded-xl py-3.5 text-center text-sm no-underline" style={{ background: 'transparent', border: '1px solid rgba(99,102,241,0.3)', color: '#818cf8' }}>
                Learn About Build Anyway →
              </a>
              <button onClick={reset} className="py-2 text-xs text-slate-600 bg-transparent border-0 cursor-pointer">
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
              <button onClick={() => scrollTo('strategy')} className="rounded-xl px-6 py-3.5 text-sm font-bold cursor-pointer border-0 whitespace-nowrap" style={{ background: '#c8a96e', color: '#0f172a' }}>
                🚩 Start Strategy Assessment
              </button>
              <button onClick={() => scrollTo('mindset')} className="rounded-xl px-6 py-3.5 text-sm font-semibold cursor-pointer whitespace-nowrap" style={{ background: 'transparent', color: '#818cf8', border: '1px solid rgba(99,102,241,0.4)' }}>
                🌱 Start Mindset Assessment
              </button>
            </div>
          </div>
        </section>

        <StrategyAssessment />

        <div className="container mx-auto px-6 max-w-lg">
          <div className="border-t border-slate-800 py-14 text-center">
            <p className="text-slate-700 text-lg italic">That was your strategy. Now let's look at something harder.</p>
          </div>
        </div>

        <MindsetAssessment />

        <Footer />
      </div>
    </>
  );
}
