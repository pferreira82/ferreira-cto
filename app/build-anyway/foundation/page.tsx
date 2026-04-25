'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ─── TYPES ───────────────────────────────────────────────────────

type SectionType = 'mindfulness' | 'facilitation' | 'teaching' | 'exercise' | 'discussion' | 'closing';
type SessionTab = 'guide' | 'agenda' | 'opening';

interface AgendaItem  { time: string; label: string; type: SectionType; }
interface SessionSection { type: SectionType; title: string; duration: string; content: string; facilitatorNote?: string; }
interface Session {
  number: number; week: number; title: string; theme: string; color: string;
  duration: number; mindfulnessTheme: string; tagline: string;
  agenda: AgendaItem[];
  opening: { practice: string; duration: string; script: string; facilitatorNote: string; };
  sections: SessionSection[];
}

// ─── COLORS ──────────────────────────────────────────────────────

const ACCENT: Record<string, string> = {
  blue:   '#6a9ebf',
  purple: '#9e6a9e',
  green:  '#5a9e6f',
  gold:   '#c8a96e',
};

const TYPE_COLOR: Record<SectionType, string> = {
  mindfulness: '#9e6a9e',
  facilitation:'#6a9ebf',
  teaching:    '#c8a96e',
  exercise:    '#5a9e6f',
  discussion:  '#6a9ebf',
  closing:     '#64748b',
};

// ─── SESSION DATA ────────────────────────────────────────────────

const SESSIONS: Session[] = [
  {
    number: 1, week: 1, color: 'blue', duration: 75,
    title: "Your Origin Story",
    theme: "Identity & Foundation",
    mindfulnessTheme: "Grounding",
    tagline: "Before we can build something new, we have to know where we're standing.",
    agenda: [
      { time: "0:00–0:05", label: "Opening Practice", type: "mindfulness" },
      { time: "0:05–0:15", label: "Introductions & Room Agreement", type: "facilitation" },
      { time: "0:15–0:35", label: "Teaching: The Builder's Identity", type: "teaching" },
      { time: "0:35–0:50", label: "Exercise: The Builder's Timeline", type: "exercise" },
      { time: "0:50–1:00", label: "Pair Share & Group Discussion", type: "discussion" },
      { time: "1:00–1:08", label: "Mindfulness Reflection", type: "mindfulness" },
      { time: "1:08–1:15", label: "Closing Practice & Logistics", type: "closing" },
    ],
    opening: {
      practice: "The Body Scan Arrival",
      duration: "5 minutes",
      script: `"Find a comfortable position — feet flat on the floor if you can. Close your eyes or soften your gaze downward. We're going to spend five minutes checking in with ourselves before we do anything else.

Start at the soles of your feet. Just notice — is there warmth? Tension? Nothing at all? No right answer. Just data.

Move to your ankles. Your shins. The backs of your knees. Your thighs. Don't try to change anything. Just notice.

Your hips and lower back — where most of us carry the weight of the day before we even realize it.

Your belly. Your chest. Is your breath shallow or deep? Again — no judgment. Just noticing.

Your shoulders. The backs of your arms. Your hands. What are your hands holding right now?

Your jaw. Your face. Your forehead.

Now take one breath — in through the nose, out through the mouth — and just notice where you are. Not where you think you should be. Where you actually are.

Open your eyes when you're ready."`,
      facilitatorNote: "Don't call this meditation if the group is resistant. Call it 'checking your instruments.' Every pilot does this before they fly. You're just doing the same thing. If someone won't close their eyes, that's fine — invite them to soften their gaze. Don't make it a thing.",
    },
    sections: [
      {
        type: "facilitation",
        title: "Introductions & Room Agreement",
        duration: "10 minutes",
        content: `This is not a standard icebreaker. The room agreement is the most important thing you do in Session 1 — it creates the psychological safety that makes everything else possible.

START WITH YOUR OWN NAME AND ONE SENTENCE:
"My name is Peter Ferreira. I'm an entrepreneur, and I'm a person in long-term recovery. I built this program because nobody handed me a roadmap when I got out — and I think you deserve one."

That's it. No credentials list. No résumé. One sentence that tells them who you are and why you're here.

ROOM AGREEMENT — write these on a whiteboard or flip chart:
1. What's said here stays here. What's learned here leaves here.
2. You don't have to share anything you're not ready to share.
3. No advice-giving during shares. Witness, don't fix.
4. Your experience is valid data — not something to apologize for.
5. Phones face down.

ASK: "Does anyone need to add anything to feel safe in this room?"
Wait. Let the silence work. Someone will usually add something, and whatever they add matters more than anything you'd have added.

QUICK ROUND: One word — how are you walking in today?
Go around the room. You go first. Pick a real word, not "fine." Model the honesty you want from them.`,
        facilitatorNote: "The room agreement is not bureaucratic throat-clearing. It's the container. A group that doesn't feel safe won't share anything real, and this curriculum only works when people share real things. Spend the full ten minutes here if the group needs it.",
      },
      {
        type: "teaching",
        title: "Teaching: The Builder's Identity",
        duration: "20 minutes",
        content: `This teaching has three parts. Move through them in order. Don't rush Part 1.

─────────────────────────────────────
PART 1: THE STORY (8 minutes)
─────────────────────────────────────

Tell your origin story. The real one. Use this structure:

WHERE IT STARTED:
"I grew up in my father's precision machine shop in Bristol, Rhode Island. I was reading technical drawings before I could drive. The shop was the one place in my life where nobody asked how you were feeling — they asked what you were making. Competence was the only currency. And I understood that world completely."

Name the competence you developed early. Be specific — not "I learned to work hard" but "I learned to look at a broken system and find the exact point where it failed."

WHERE IT BROKE:
"And then I lost the thread. I'm not going to tell you the whole story today — that's what the podcast is for. What I'll tell you is that I hit a point where everything I'd built was gone."

Be honest about loss without performing it. The group doesn't need the dramatic details. They need to know you understand what it costs.

WHERE IT CAME BACK:
"Recovery didn't give me a map back to who I was. It gave me the tools to build something I'd never been before."

─────────────────────────────────────
PART 2: THE REFRAME (7 minutes)
─────────────────────────────────────

"Everything you've survived has given you a skill set. Not in a motivational poster way. In a literal, specific, technical way.

You've managed chaos under pressure — that's operations.
You've negotiated with people who had power over you — that's sales.
You've found resources when you had none — that's fundraising.
You've rebuilt your life from scratch — that's a startup."

DISCUSSION — open the room:
"What's one thing you know how to do — really know how to do — that most people don't?"

Let them answer. Write answers on the whiteboard. Don't edit. Every answer goes up.

─────────────────────────────────────
PART 3: WHAT THIS PROGRAM IS (5 minutes)
─────────────────────────────────────

IS: A practical curriculum for people who want to build something — a business, a side income, a consulting practice, a product — and need structure, accountability, and someone who has actually done it.

IS: A place where your experience is a credential, not something to overcome.

IS: Eight sessions across four weeks. Real exercises. Real feedback. A real certificate if you complete the requirements.

IS NOT: A guarantee of income. IS NOT: Therapy. IS NOT: Easy.`,
        facilitatorNote: "The whiteboard exercise in Part 2 is important — it externalizes competence that people carry internally as shame. Seeing their skills written on a public board in their own words does something that nothing you say can do. Don't shortcut it.",
      },
      {
        type: "exercise",
        title: "The Builder's Timeline",
        duration: "15 minutes",
        content: `SETUP (2 minutes):
Hand out a sheet of paper. Ask participants to draw a horizontal line across the middle. This is their timeline.

THE PROMPT (read aloud, slowly):
"I want you to mark three moments on this timeline.

First — a moment when you were genuinely good at something. Before everything got complicated. Maybe it was a job. A skill. Taking care of someone. Whatever it is — mark it. Write what you were good at.

Second — a moment of loss. You don't have to name what caused it. Just mark the point when the thing you were building came apart. Write one word that describes what that felt like.

Third — something you still have. A skill, a piece of knowledge, a way of seeing the world that survived everything. It might be small. Mark it. Write what it is.

Take ten minutes. This is private — you won't have to share anything you don't want to share."

SHARE (3 minutes):
Go around the room. Ask only: "Would anyone like to share their third mark — the thing that survived?"

Don't push. Just open the space.`,
        facilitatorNote: "The third mark is the important one. It's where competence lives after loss. Most people in early recovery have never been explicitly asked to name what they kept. That question alone can shift something significant. Give it space.",
      },
      {
        type: "discussion",
        title: "Pair Share & Group Discussion",
        duration: "10 minutes",
        content: `PAIR SHARE (5 minutes):
Turn to the person next to you. Each person has 2 minutes to answer:
"What's one thing on your timeline that surprised you — something you'd forgotten you had?"

GROUP DEBRIEF (5 minutes):
Bring the room back together. Ask:
"What did you hear — from your partner or from yourself — that you want to remember?"

Typical responses:

"I forgot I was good at that."
→ "That's the whole point of this exercise. We don't forget things because they weren't real. We forget them because shame is louder than memory. Today we turned the volume down a little."

"I don't think what I survived counts as a skill."
→ "Tell me what you did to survive it." Then listen. Then name the skills you hear — resourcefulness, endurance, reading people, managing crisis.

"I don't know what survived."
→ "You're here. That's something. And we have seven more sessions to find the rest."`,
        facilitatorNote: "Don't rush this discussion to get to the reflection. The discussion IS the learning. If the group is talking, let them talk. You can always compress the closing practice.",
      },
      {
        type: "mindfulness",
        title: "Mindfulness Reflection",
        duration: "8 minutes",
        content: `WRITTEN PROMPT (5 minutes):
"Take out a pen and paper. I'm going to ask you three questions. Write the first thing that comes. Don't edit. Don't make it good. Just write.

Question 1: Where in your body did something shift during this session? Not what you thought — where you felt it.

Question 2: What's one thing you heard today — from me, from someone else in the room, or from yourself — that you don't want to forget?

Question 3: What's one thing you're still carrying that you didn't put on the timeline?"

SHARE (optional, 3 minutes):
"Would anyone like to share one line — just one — from anything they wrote?"

No commentary from the facilitator on shares. Just: "Thank you." Every time.`,
        facilitatorNote: "The third question — what you're still carrying — is a bridge to Session 2. Don't try to resolve it. Let it sit. The curriculum answers it over four weeks.",
      },
      {
        type: "closing",
        title: "Closing Practice & Logistics",
        duration: "7 minutes",
        content: `CLOSING PRACTICE — "One Word" (3 minutes):
"We opened this session with a word for how you walked in. Let's close with a word for how you're walking out. No explanations. Just the word."

Go around the room. Write every word on the whiteboard next to the check-in words from the opening. Let the contrast be visible.

LOGISTICS (4 minutes):
Before next session:
- Keep your timeline somewhere you'll see it
- Notice one moment in the next three days when you use a skill from your third mark — something that survived. Just notice it.
- Session 2 is [date/time]. We'll be talking about the systems that already run your life — and why they're the blueprint for a business.

"One last thing: what happened in this room today was real. Whatever you felt — that was real. You don't have to do anything with it right now. Just let it be real."`,
        facilitatorNote: "The between-session homework should be light enough that people actually do it. 'Notice one moment' is achievable. 'Write a business plan' is not. Calibrate every homework assignment to what someone in early recovery with a full life can actually do.",
      },
    ],
  },

  {
    number: 2, week: 1, color: 'blue', duration: 75,
    title: "Systems Thinking for Humans",
    theme: "Identity & Foundation",
    mindfulnessTheme: "Grounding",
    tagline: "One day at a time is also a product roadmap.",
    agenda: [
      { time: "0:00–0:05", label: "Opening Practice & Check-In", type: "mindfulness" },
      { time: "0:05–0:15", label: "Homework Debrief", type: "facilitation" },
      { time: "0:15–0:40", label: "Teaching: Systems Thinking", type: "teaching" },
      { time: "0:40–0:55", label: "Exercise: Your Recovery System as Blueprint", type: "exercise" },
      { time: "0:55–1:05", label: "Group Discussion", type: "discussion" },
      { time: "1:05–1:10", label: "Mindfulness Reflection", type: "mindfulness" },
      { time: "1:10–1:15", label: "Closing Practice", type: "closing" },
    ],
    opening: {
      practice: "The Three Breaths Reset",
      duration: "5 minutes",
      script: `"Let's open the same way we'll open every session — by arriving before we begin.

Three breaths. Each one has a purpose.

First breath — in through the nose, long and slow — hold for a moment — and out through the mouth. That breath is for releasing what you carried in. Whatever happened before you walked through that door — you don't need to carry it for the next 75 minutes.

Second breath — same pace — in through the nose — hold — out through the mouth. That breath is for arriving here. Not where you were. Not where you're going. Here.

Third breath — in — hold — out. That breath is for opening to what's possible today. Not committing to anything. Just opening.

Take a moment to notice how you feel different than you did 30 seconds ago. That's your nervous system responding to intention. That's real. That's data.

Check in with one word — how are you arriving today?"`,
      facilitatorNote: "Connect the breathing directly to the teaching: 'We're going to look at systems today — how things work together to produce a result. Your nervous system is the first system we're working with in this room. We just ran it through a calibration sequence.'",
    },
    sections: [
      {
        type: "facilitation",
        title: "Homework Debrief",
        duration: "10 minutes",
        content: `OPEN THE ROOM:
"Last session I asked you to notice one moment in the past few days where you used a skill from your third mark — something that survived. Who noticed something?"

WHAT YOU'RE LISTENING FOR:
- Concrete examples (good — that's someone paying attention)
- Surprise at their own competence (good — that's the reframe working)
- "I didn't notice anything" (that's okay — don't shame it)

IF SOMEBODY HAS A POWERFUL SHARE:
Let it breathe. Resist the urge to summarize or add to it. Just say "Thank you" and ask if anyone else wants to share before moving on.

BRIDGE TO THE SESSION:
"What you're describing — these moments of competence that surprised you — that's a system running. You've built a set of skills and responses that activate when you need them. Today we're going to look at how systems work, and why the one you've already built might be the best business blueprint you've ever seen."`,
        facilitatorNote: "The homework debrief is not administrative — it's the opening act of the teaching. The examples people share from their own lives become the raw material for the systems discussion. Listen for specifics you can reference later.",
      },
      {
        type: "teaching",
        title: "Teaching: Systems Thinking",
        duration: "25 minutes",
        content: `─────────────────────────────────────
PART 1: WHAT IS A SYSTEM? (5 minutes)
─────────────────────────────────────

"A system is a set of parts that work together to produce a result. That's it. No jargon. No MBA required.

Your body is a system. Your recovery program is a system. A business is a system. A family is a system."

Write on the whiteboard: INPUTS → PROCESS → OUTPUTS

─────────────────────────────────────
PART 2: YOUR RECOVERY PROGRAM IS A SYSTEM (10 minutes)
─────────────────────────────────────

"Your recovery program is one of the most sophisticated personal change systems ever designed. Let's map it:

INPUTS: Your time, your honesty, your willingness, the community.
PROCESS: The steps or curriculum, the sponsor or accountability partner, the meeting or group session, the service work.
OUTPUTS: Sobriety — but also emotional regulation, community, identity, competence.

Now look at that output list again. Every single one of those things is what a successful business needs from its founder."

─────────────────────────────────────
PART 3: ONE DAY AT A TIME IS A PRODUCT ROADMAP (10 minutes)
─────────────────────────────────────

"Entrepreneurs fail at one of two things — they try to build everything at once, or they get so focused on the distant vision that they stop doing the daily work.

'One day at a time' solves both problems. In product development, we call this iteration.

The same applies to accountability structures:
— Sponsor = accountability partner
— Home group = peer advisory group
— Working the steps = structured framework for honest self-assessment
— Service work = teaching others what you know

Every single one has a direct business equivalent. And you already know how to use them."`,
        facilitatorNote: "The 'one day at a time as product roadmap' section is the intellectual core of this session. Don't rush it. This is often the moment when people who were skeptical start to see themselves in the material. Watch for body language shifts — leaning in, people writing things down.",
      },
      {
        type: "exercise",
        title: "Your Recovery System as Business Blueprint",
        duration: "15 minutes",
        content: `MATERIALS: Large paper or two sheets of regular paper side by side.

Draw a line down the middle. Left side: "My Recovery System." Right side: "My Future Business System."

LEFT SIDE (5 minutes) — write your answers:
1. What keeps me accountable?
2. What's my daily practice?
3. How do I handle a setback?
4. What does progress look like?
5. Who is in my community?

RIGHT SIDE (8 minutes) — translate each row together as a group:
1. Accountability → Your accountability partner or board
2. Daily Practice → Your daily work rhythm
3. Handling Setbacks → Your crisis protocol
4. Progress → Your metrics
5. Community → Your network (not LinkedIn connections — people who know what you're building)

Close: "What you just drew on the right side — that's your business operating system. You built the template in recovery. We just translated it."`,
        facilitatorNote: "This exercise sometimes produces powerful realizations quickly. People see that they already have more infrastructure than they thought. Resist the urge to celebrate it too loudly — let people sit in their own discovery.",
      },
      {
        type: "discussion",
        title: "Group Discussion",
        duration: "10 minutes",
        content: `TWO QUESTIONS — take 5 minutes each:

QUESTION 1: "What's the most useful translation you made — the thing from your recovery system that you most want to carry into building something?"

QUESTION 2: "Where do the two systems feel different? What doesn't translate? What will you need to build fresh?"

COMMON TENSION TO ADDRESS:
"Some people in recovery are uncomfortable with self-promotion — it can feel like ego. There's a difference between ego and visibility. Ego is about making yourself bigger than you are. Visibility is about letting people find you who need what you have. We'll spend time on that distinction in Week 4."`,
        facilitatorNote: "The tension between recovery culture and entrepreneurship culture is real and worth naming explicitly. Ignoring it doesn't make it go away.",
      },
      {
        type: "mindfulness",
        title: "Mindfulness Reflection",
        duration: "5 minutes",
        content: `WRITTEN PROMPT (5 minutes — no sharing required):
"Write for five minutes on this question — don't stop writing, don't edit, just let it come:

'The system I've already built that I'm most proud of is _______ because _______. The part of that system I want to bring into building a business is _______. The part I'm afraid won't work in a business context is _______. And what I want to remember about today is _______.'

You don't have to share this. It's for you."`,
        facilitatorNote: "Five minutes of uninterrupted writing produces insights that structured prompts don't. The instruction 'don't stop writing' is important. When people stop, they start editing. When they keep going, they find the thing underneath the thing.",
      },
      {
        type: "closing",
        title: "Closing Practice",
        duration: "5 minutes",
        content: `CLOSING PRACTICE — "Gratitude Forward" (3 minutes):
"One person at a time — name one thing from your recovery system you're genuinely grateful for. Something specific. A person, a practice, a meeting, a moment. And then name one thing you want to carry from that system into building something new.

I'll start." Model it with something real.

HOMEWORK FOR SESSION 3 (2 minutes):
"Notice a moment where your recovery system kicks in without you consciously activating it — a moment where the work you've done just... runs. When you notice it, write one sentence about what happened. That's your homework. One sentence."`,
        facilitatorNote: "Closing with gratitude isn't soft — it's neurologically grounding. Research on gratitude practice shows measurable effects on stress response and executive function.",
      },
    ],
  },

  {
    number: 3, week: 2, color: 'purple', duration: 75,
    title: "What Broke You Might Be Your Business",
    theme: "Finding Your Idea",
    mindfulnessTheme: "Witnessing Without Judgment",
    tagline: "The most valuable problems are the ones you've already lived.",
    agenda: [
      { time: "0:00–0:05", label: "Opening Practice", type: "mindfulness" },
      { time: "0:05–0:12", label: "Homework Debrief", type: "facilitation" },
      { time: "0:12–0:35", label: "Teaching: Pain as Market Signal", type: "teaching" },
      { time: "0:35–0:52", label: "Exercise: The Anger Inventory", type: "exercise" },
      { time: "0:52–1:05", label: "Group Discussion & Idea Mapping", type: "discussion" },
      { time: "1:05–1:10", label: "Mindfulness Reflection", type: "mindfulness" },
      { time: "1:10–1:15", label: "Closing Practice", type: "closing" },
    ],
    opening: {
      practice: "The Compassionate Witness",
      duration: "5 minutes",
      script: `"Settle in. Close your eyes or soften your gaze.

I want you to imagine you're sitting in the back of a theater. The stage is dark. And then a spotlight comes up on someone you know well — someone you've known your whole life.

That person is you.

You're watching yourself — not judging, not critiquing. Just watching, the way you'd watch someone you love. Someone whose story you know. Someone you're rooting for.

Watch them for a moment. What do you notice? What do they carry? What are they reaching for?

Now here's the question I want you to hold: what do they know — from everything they've been through — that most people in this world will never know?

Stay with that question for a moment.

Take a breath. Come back to the room."`,
      facilitatorNote: "This practice is emotionally preparatory for the session's core exercise, which asks people to turn painful experience into business ideas. If they come in defended and self-critical, the exercise produces shame. If they come in as compassionate witnesses to their own story, it produces insight.",
    },
    sections: [
      {
        type: "facilitation",
        title: "Homework Debrief",
        duration: "7 minutes",
        content: `"Last session I asked you to notice a moment where your recovery system just ran — automatically, without you having to think about it. Who noticed something?"

NAME THE BUSINESS SKILL INSIDE EACH ONE:
"You noticed you called your sponsor before you made a decision you might regret — that's board governance."
"You noticed you journaled before you responded to something that made you angry — that's crisis communication management."
"You noticed you went to a meeting when you didn't feel like it — that's discipline. Not motivation — discipline."

BRIDGE:
"Today we're going to look at what broke you, what failed you, what made you angriest — and we're going to treat it as market research."`,
        facilitatorNote: "The reframes you offer here — 'that's board governance,' 'that's crisis communication' — are translating the language of recovery into the language of business in a way that respects both.",
      },
      {
        type: "teaching",
        title: "Teaching: Pain as Market Signal",
        duration: "23 minutes",
        content: `─────────────────────────────────────
PART 1: WHERE BUSINESSES COME FROM (8 minutes)
─────────────────────────────────────

"Most successful businesses come from someone who experienced a problem, couldn't find a solution, and decided to build one.

Sara Blakely cut the feet off her pantyhose. Airbnb started with three air mattresses.

The pattern: feel a problem deeply enough that you can't ignore it — and have enough resourcefulness to try to solve it. You have both."

─────────────────────────────────────
PART 2: THE SYSTEMS THAT FAILED YOU (10 minutes)
─────────────────────────────────────

Systems worth inventorying:
- Healthcare: Did you encounter systems that didn't treat you as a full person?
- Housing: Did you struggle to find stable housing, or lose housing?
- Employment: Have you been passed over because of résumé gaps or a background check?
- Family systems: Did the systems that were supposed to support family work for or against it?
- Financial systems: Have you tried to access banking or credit and found a wall?

"I'm not asking you to relive these things. I'm asking you to look at them as a researcher. Those breaks are where businesses live."

─────────────────────────────────────
PART 3: THE DIFFERENCE BETWEEN PAIN AND ANGER (5 minutes)
─────────────────────────────────────

"Pain says: this hurt me. Anger says: this shouldn't exist.

Pain is personal. Anger is directional.

The best businesses usually start with anger — not the kind that destroys things, but the kind that builds things. The kind that says: this is broken, nobody is fixing it, so I'm going to fix it.

Your job in the next exercise is to find your anger. Not your deepest wound. Your clearest signal."`,
        facilitatorNote: "The distinction between pain and anger is critical. Pain points inward — it can produce paralysis. Anger points outward — it's directional and actionable. You're asking them to find where pain became an opinion about how the world should work.",
      },
      {
        type: "exercise",
        title: "The Anger Inventory",
        duration: "17 minutes",
        content: `INDIVIDUAL WRITING (10 minutes):
"Make a list. Write quickly — don't think too much. These are the things that are broken.

Prompts to keep you moving:
— A moment when you needed help and the help wasn't there
— Something you had to figure out yourself that you shouldn't have had to figure out alone
— A process so complicated it felt designed to make you fail
— Something you watched happen to someone else that never should have happened
— Something you know how to do better than the people who are supposed to do it

Write for ten minutes. Keep going even when you want to stop."

IDENTIFY THE SIGNAL (3 minutes):
"Read back through what you wrote. Which one makes you feel the most — not the most pain, but the most energy? Circle it."

PAIR SHARE (4 minutes):
"Read the one you circled to the person next to you — just the problem, not your life story. Then listen while they read theirs. Just witness. No advice, no solutions."`,
        facilitatorNote: "The first five minutes of this exercise produces the expected answers. Minutes 6–10 often produce the real ones — the things people haven't said out loud yet because they didn't think they counted. Give the full ten minutes.",
      },
      {
        type: "discussion",
        title: "Group Discussion & Idea Mapping",
        duration: "13 minutes",
        content: `GROUP SHARE (8 minutes):
"Who's willing to share the problem they circled? Not the solution — just the problem."

As people share, write each problem on the whiteboard. No evaluation. Every problem goes up.

ANALYSIS (5 minutes):
"What do you notice about this list? What patterns do you see?"

Name what you see:
"Three people circled problems in the same space. That means you're not alone in seeing it — and the people who have this problem are not just in this room. That's a market."

"You noticed this gap because you were inside the system that failed. That's not a disadvantage. That's the most valuable kind of market research in the world."`,
        facilitatorNote: "The whiteboard often looks like a roadmap of exactly what the recovery ecosystem is failing to provide. Let the group see that. It can shift the energy in the room from 'I'm broken' to 'I can see what's broken and I know how to fix it.'",
      },
      {
        type: "mindfulness",
        title: "Mindfulness Reflection",
        duration: "5 minutes",
        content: `WRITTEN (5 minutes — private):
"Write for five minutes. Start with this sentence:

'The thing I circled today matters because _______.

The person I most want to solve this problem for is _______ — and the reason I care about that person is _______.

The part of my experience that makes me more qualified than anyone else to work on this is _______.

And the thing I'm afraid of — if I'm honest — is _______.'

Write until the five minutes are up. Keep your pen moving."`,
        facilitatorNote: "The last prompt — what I'm afraid of — surfaces the resistance that will otherwise show up quietly and derail people before they start.",
      },
      {
        type: "closing",
        title: "Closing Practice",
        duration: "5 minutes",
        content: `CLOSING PRACTICE — "The Reframe" (3 minutes):
Each person reads their circled problem aloud — one sentence maximum. After each one, the group responds together:

"That's a real problem. You're not alone in it."

HOMEWORK (2 minutes):
"Before Session 4, I want you to have one conversation — with one real person who has the problem you circled. Not pitching. Not selling. Just asking: 'Do you experience this? What's it like for you?'

You don't have to do anything with the answer. Just have the conversation and bring back one thing they said that surprised you."`,
        facilitatorNote: "This homework is their first act of customer discovery — but don't call it that yet. Call it a conversation. The label 'customer discovery' can feel intimidating to people who have never thought of themselves as entrepreneurs.",
      },
    ],
  },

  {
    number: 4, week: 2, color: 'purple', duration: 75,
    title: "Who Else Has This Problem?",
    theme: "Finding Your Idea",
    mindfulnessTheme: "Beginner's Mind",
    tagline: "You can't hear what customers are actually telling you if you've already decided you know the answer.",
    agenda: [
      { time: "0:00–0:05", label: "Opening Practice — Beginner's Mind", type: "mindfulness" },
      { time: "0:05–0:15", label: "Homework Debrief — The Conversation", type: "facilitation" },
      { time: "0:15–0:38", label: "Teaching: Markets, Customers & Lived Credibility", type: "teaching" },
      { time: "0:38–0:55", label: "Exercise: The Empathy Map", type: "exercise" },
      { time: "0:55–1:05", label: "Group Discussion: Patterns & Signals", type: "discussion" },
      { time: "1:05–1:10", label: "Mindfulness Reflection", type: "mindfulness" },
      { time: "1:10–1:15", label: "Closing Practice", type: "closing" },
    ],
    opening: {
      practice: "Beginner's Mind",
      duration: "5 minutes",
      script: `"Find your seat. Feet flat. Take a breath.

I want to introduce you to a concept from Zen Buddhism called shoshin — beginner's mind. It means approaching something as if for the first time. No assumptions. No conclusions already written. Just open, curious attention.

In the next few minutes, I want you to deliberately empty the cup.

Breathe in slowly. As you breathe out, imagine letting go of one thing you think you already know about the problem you circled last session.

Breathe in again. Let go of one assumption about who has this problem.

One more breath. Let go of one assumption about what the solution looks like.

Now — open your eyes. You're a beginner. You don't know anything yet. And that is an enormous advantage."`,
      facilitatorNote: "Beginner's mind is the antidote to confirmation bias — which kills more early businesses than anything else. If the group is skeptical of anything that sounds spiritual, frame it: 'The most expensive thing a founder can do is decide they already know the answer. This is a tool for staying curious.'",
    },
    sections: [
      {
        type: "facilitation",
        title: "Homework Debrief — The Conversation",
        duration: "10 minutes",
        content: `OPEN WITH: "What did they say that surprised you?"

COMMON RESPONSES:
"I didn't have the conversation."
→ Don't shame it. Ask: "What got in the way?" The answer usually tells you something about what's going to get in the way of building the business.

"They said it wasn't a problem."
→ "What exactly did they say?" Sometimes 'they said it wasn't a problem' means the problem is framed wrong.

"They said exactly what I expected."
→ "Did anything surprise you at all — even a small thing?" If genuinely no: "Were you listening for confirmation or for information?"

"They said something that changed how I see the problem."
→ Let this breathe. This is the most important outcome — someone who has already done their first act of market research and updated their thinking because of it.`,
        facilitatorNote: "The people who didn't have the conversation are telling you something important about their relationship with vulnerability and risk. Don't let it slide, but don't make it a failure. Make it data.",
      },
      {
        type: "teaching",
        title: "Teaching: Markets, Customers & Lived Credibility",
        duration: "23 minutes",
        content: `─────────────────────────────────────
PART 1: WHAT IS A MARKET? (7 minutes)
─────────────────────────────────────

"A market is a group of people who share a specific problem, have the money or willingness to pay to solve it, and can be reached through some channel. Three parts: shared problem, ability to pay, reachable.

Can you picture ten specific people who have this problem? Not demographics — actual people? If yes, you have the beginning of a market.

'People in recovery who need employment support' is a category. 'People within 90 days of discharge from an IOP in Massachusetts who have a felony and are trying to re-enter the workforce' is a market."

─────────────────────────────────────
PART 2: THE CUSTOMER WHO IS YOU (8 minutes)
─────────────────────────────────────

"You are almost certainly a customer-founder — someone building a solution to a problem you personally experienced.

Why it matters:
- You understand the problem at a level no market researcher will ever understand. You've lived it.
- You have instant credibility with your market.
- You have a filter for what solutions actually work. You've tried the things that exist.

The one risk: you can over-index on your own experience and miss the ways your customer's situation differs from yours. That's why we do customer discovery."

─────────────────────────────────────
PART 3: WHAT CUSTOMERS ACTUALLY BUY (8 minutes)
─────────────────────────────────────

"People don't buy products. They buy better versions of themselves.

People don't hire a gym membership to lift weights. They hire it to feel like the kind of person who takes care of themselves.

So the question is not: what does my product do? It's: who does my customer become after using my product?

For Build Anyway: participants don't come here to learn business concepts. They come here to become someone who is building something. That identity shift is the product."`,
        facilitatorNote: "The 'jobs to be done' framework is one of the most practically useful business concepts for people starting from nothing, because it reframes the question from 'what can I build?' to 'what does my customer need to become?' The second question is much easier to answer from lived experience.",
      },
      {
        type: "exercise",
        title: "The Empathy Map",
        duration: "17 minutes",
        content: `SETUP: Draw a cross dividing the page into four quadrants. Label them:
— Top left: THINK & FEEL
— Top right: SAY & DO
— Bottom left: HEAR
— Bottom right: SEE

In the center, write one sentence describing your customer. Give them a name.

FILL IN THE MAP (10 minutes):

THINK & FEEL: What is your customer most worried about that they don't say out loud?

SAY & DO: What does your customer say about this problem? What do they do to cope — even if it doesn't really work?

HEAR: What are they hearing about this problem from the people around them? Family, doctor, caseworker, employer?

SEE: What does your customer see when they look for solutions? Does it speak to them — or does it look like it was built for someone else?

INSIGHTS (3 minutes):
"One: What does your customer need most that doesn't exist yet?
Two: What do you know about this that most people building solutions don't know — because you've been there?"`,
        facilitatorNote: "The bottom two questions surface the product opportunity and the founder's competitive advantage. Both are usually more powerful than anything the person came in believing.",
      },
      {
        type: "discussion",
        title: "Group Discussion: Patterns & Signals",
        duration: "10 minutes",
        content: `"Who's willing to share the two insights from the bottom of their empathy map — the gap they found and what they know that others don't?"

LISTEN FOR:
SPECIFICITY — the more specific the gap, the more real it is.
LIVED KNOWLEDGE — when someone says 'I know this because I've been there,' point it out: 'Notice what just happened. They didn't cite a study. They cited their own life. That's a form of evidence that most researchers can't replicate.'
OVERLAP — when two people identify the same gap, name it: 'Two people in this room see the same hole in the market. That tells you something.'

WRAP UP:
"Your customer is not an abstraction. They're someone specific, carrying something real, looking for something that mostly doesn't exist yet. You can see them more clearly than most people because you've stood where they're standing."`,
        facilitatorNote: "This discussion often produces the most energized part of the entire four-week curriculum — because this is usually the first time people have been invited to treat their lived experience as a professional asset.",
      },
      {
        type: "mindfulness",
        title: "Mindfulness Reflection",
        duration: "5 minutes",
        content: `WRITTEN (5 minutes — private):
"Write for five minutes. Begin with:

'The person I'm building for is _______.
They carry _______ that most people don't see.
I see it because _______.
What I want to build for them is _______ — not because it's a good idea, but because _______.
And the part of this that scares me a little is _______, which probably means _______.'

Write until the time is up."`,
        facilitatorNote: "'Which probably means _______' does metacognitive work — it asks participants to interpret their own fear, not just name it.",
      },
      {
        type: "closing",
        title: "Closing Practice & Homework",
        duration: "5 minutes",
        content: `CLOSING — Loving-Kindness for Your Future Customer (3 minutes):
"Close your eyes. Picture the person from the center of your empathy map.

Send them this thought — you don't have to believe it fully yet, just try it on:
'May you find what you're looking for. May the thing that's been missing for you exist soon. May I have something to do with that.'"

HOMEWORK (2 minutes):
"Before Session 5, do one more conversation. This time: 'If something existed that solved this problem for you — what would you want it to look like?'

Write down what they say, word for word if you can. Bring it to Session 5.

Next session: we start building."`,
        facilitatorNote: "The loving-kindness practice reorients the founder's relationship to their customer from transactional to relational. The best businesses are built by people who genuinely care about the people they serve.",
      },
    ],
  },

  {
    number: 5, week: 3, color: 'green', duration: 75,
    title: "The Smallest Version That Works",
    theme: "Building Without Overwhelm",
    mindfulnessTheme: "Present-Moment Action",
    tagline: "You don't need to build the whole thing. You need to build the next thing.",
    agenda: [
      { time: "0:00–0:05", label: "Opening Practice — The 90-Second Emotion", type: "mindfulness" },
      { time: "0:05–0:13", label: "Homework Debrief — The Second Conversation", type: "facilitation" },
      { time: "0:13–0:38", label: "Teaching: MVPs, Iteration & Starting Small", type: "teaching" },
      { time: "0:38–0:55", label: "Exercise: The Minimum Viable Offer", type: "exercise" },
      { time: "0:55–1:05", label: "Group Discussion & Pressure Testing", type: "discussion" },
      { time: "1:05–1:10", label: "Mindfulness Reflection", type: "mindfulness" },
      { time: "1:10–1:15", label: "Closing Practice", type: "closing" },
    ],
    opening: {
      practice: "The 90-Second Emotion",
      duration: "5 minutes",
      script: `"Dr. Jill Bolte Taylor — a Harvard brain scientist — discovered something important about how emotions work in the body.

A physiological emotion — the actual chemical surge — lasts 90 seconds. That's it. After 90 seconds, the chemistry clears. What keeps the emotion alive after that is thought — we replay the story, re-trigger the response, keep the loop running.

Bring to mind something that makes you anxious about building something. Whatever it is — just feel it for a moment.

Now I'm going to count to 90. Don't think about anything. Just feel what's there and watch it.

[Count silently or aloud, slowly, to 90]

Notice what happened. The feeling may still be there — but is it different? Or are you choosing to keep it going with your thoughts?

That's the practice for today. When the overwhelm hits — and it will — give it 90 seconds. Then choose what to do next."`,
      facilitatorNote: "This practice directly addresses the overwhelm that kills most early-stage projects before they start. Connect it to today's content: 'The fear of starting is a 90-second experience. What comes after it is a choice.'",
    },
    sections: [
      {
        type: "facilitation",
        title: "Homework Debrief — The Second Conversation",
        duration: "8 minutes",
        content: `LISTEN FOR:
SPECIFIC LANGUAGE — the words customers use to describe what they want are the words you should use to sell it. "I just want someone to walk me through it" = high-touch, human, guided product design.

SURPRISING ANSWERS — solutions people imagined that you wouldn't have thought of. These reveal unmet need.

SIMPLE ASKS — often what people describe is much simpler than what the founder was planning to build. When this happens: "Notice that what they described is much simpler than what you were planning. What does that tell you?"

BRIDGE:
"What you did in those two conversations is real market research. Today we're going to take everything we've learned and make it small enough to actually start."`,
        facilitatorNote: "The second conversation often produces a significant shift — people discover that their customers' needs are simpler or completely different from what they assumed. This is not discouraging — it's the whole point.",
      },
      {
        type: "teaching",
        title: "Teaching: MVPs, Iteration & Starting Small",
        duration: "25 minutes",
        content: `─────────────────────────────────────
PART 1: WHAT IS A MINIMUM VIABLE PRODUCT? (8 minutes)
─────────────────────────────────────

"An MVP is the smallest thing you can build, offer, or do that lets a real person experience real value and gives you real feedback.

Real examples:
- Dropbox's MVP was a three-minute video. 75,000 people signed up. They built the software after.
- Airbnb's MVP was three air mattresses and a weekend website.
- OrbCare's MVP was a Raspberry Pi camera pointing at a chair, running a script that sent me an alert if nobody moved in 30 minutes.

The function of an MVP is not to impress anyone. It's to find out if you're solving a real problem."

─────────────────────────────────────
PART 2: THE STARTING SMALL SPECTRUM (10 minutes)
─────────────────────────────────────

POINT 1 — DO IT YOURSELF, MANUALLY: You do the service by hand for one person.
POINT 2 — USE TOOLS THAT ALREADY EXIST: Google Docs, Calendly, Zoom, WhatsApp.
POINT 3 — BUILD THE SIMPLEST POSSIBLE THING: A one-page website. A PDF. A simple form.
POINT 4 — BUILD THE SYSTEM: The repeatable, scalable version. This is Month 6, not Month 1.

"Which point can you be at by next week?"

─────────────────────────────────────
PART 3: THE PERFECTIONISM TRAP (7 minutes)
─────────────────────────────────────

"Perfectionism is not the same as having high standards. High standards are about quality. Perfectionism is about fear.

Specifically: the fear that if what you put out isn't perfect, people will see that you're not enough.

Reid Hoffman: 'If you're not embarrassed by the first version of your product, you've launched too late.'

The goal is not to produce something you're proud of. The goal is to produce something that exists — something real enough that another human being can react to it."`,
        facilitatorNote: "For many people in this room, perfectionism is a survival strategy — if I'm perfect, nobody can criticize me, and if nobody can criticize me, I'm safe. The reframe: in business, being seen imperfectly and improving is the mechanism of growth.",
      },
      {
        type: "exercise",
        title: "The Minimum Viable Offer",
        duration: "17 minutes",
        content: `PART 1 — SHRINK IT (7 minutes):
"Take out a piece of paper. Write your idea at the top.

First shrink: what's the core of this idea — the single most valuable thing — stripped of everything else?

Second shrink: who is the one most specific person who needs this most urgently? Name them.

Third shrink: what is the smallest possible thing you could offer this person that would deliver real value — something you could do or create in the next seven days?

Write that thing. Circle it."

PART 2 — MAKE IT AN OFFER (5 minutes):
Turn that thing into one sentence:
For people who... [describe your specific customer]
I help them... [describe the outcome, not the process]
By... [the simplest version of how you deliver it]

PART 3 — THE PRICE AND THE ASK (5 minutes):
"What would you charge for this? Write a number. Any number.

Now: 'If I could talk to one person in the next three days who might want this, it would be _______.'

Name them. That is your next action."`,
        facilitatorNote: "The price exercise is critical and almost always uncomfortable. The relationship with money is part of the curriculum. Ask the room: 'What came up when you wrote a number?' Let them talk about it.",
      },
      {
        type: "discussion",
        title: "Group Discussion & Pressure Testing",
        duration: "10 minutes",
        content: `ROUND 1 — Share the Offer (5 minutes):
Each person reads their one-sentence offer. After everyone has shared: "Which offer made you think: I would actually want that? Tell us which one and why."

ROUND 2 — Pressure Test (5 minutes):
'What would make this more specific?'
'Who needs this most urgently — right now, not eventually?'
'What's the smallest version that could happen in seven days?'

COMMON PATTERNS:
Too broad: "I want to help people in recovery find jobs." → Which people? In what geography? At what stage?
Too complex: "I want to build an app that..." → What's the manual version first?
Priced too low: "I would charge $10." → "What does that price say about how you value what you're offering?"`,
        facilitatorNote: "Pressure testing can feel risky — people are protective of new ideas. Set the tone by being curious, not critical. The question is always 'how do we make this sharper?' not 'why won't this work?'",
      },
      {
        type: "mindfulness",
        title: "Mindfulness Reflection",
        duration: "5 minutes",
        content: `WRITTEN (5 minutes — private):
"Write for five minutes:

'The thing I'm building is _______.
The smallest version I could test this week is _______.
The reason I keep making it bigger than it needs to be is _______.
The one person I'm going to talk to in the next three days is _______.
And the 90-second emotion I feel when I think about actually doing it is _______ — which tells me _______.'

Keep writing until the time is up."`,
        facilitatorNote: "Fear of reaching out usually reveals something about the relationship with rejection. Fear of charging a real price usually reveals something about self-worth. Let the writing surface these rather than the facilitator naming them directly.",
      },
      {
        type: "closing",
        title: "Closing Practice & Homework",
        duration: "5 minutes",
        content: `CLOSING — "The One Thing" (3 minutes):
Each person states out loud — to the room — the one action they will take before Session 6. Not a plan. One thing.

After each person says their one thing, the room responds together: "We'll ask you about it."

HOMEWORK:
"Your homework before Session 6 is what you just said out loud. That's it. One thing."`,
        facilitatorNote: "'We'll ask you about it' is not a casual phrase — it's a commitment. People do the things they say out loud to other people. That's not a theory — it's what recovery programs have demonstrated for decades.",
      },
    ],
  },

  {
    number: 6, week: 3, color: 'green', duration: 75,
    title: "Accountability Structures That Actually Work",
    theme: "Building Without Overwhelm",
    mindfulnessTheme: "Intentional Commitment",
    tagline: "A business without accountability is a hobby. A hobby without accountability is a wish.",
    agenda: [
      { time: "0:00–0:10", label: "Opening Practice & Homework Accountability", type: "mindfulness" },
      { time: "0:10–0:33", label: "Teaching: Business Accountability Systems", type: "teaching" },
      { time: "0:33–0:53", label: "Exercise: The 30-Day Plan", type: "exercise" },
      { time: "0:53–1:03", label: "Partner Exchange & Commitment Ritual", type: "exercise" },
      { time: "1:03–1:10", label: "Mindfulness Reflection", type: "mindfulness" },
      { time: "1:10–1:15", label: "Closing Practice", type: "closing" },
    ],
    opening: {
      practice: "Check-In with Your Body Before You Check In with the Group",
      duration: "10 minutes (includes homework accountability)",
      script: `"Before we check in with each other, let's check in with ourselves.

Two minutes of silence. Ask yourself three questions:

Question one: Where am I physically right now? Specifically — is there tension? Fatigue? Energy?

Question two: Where am I emotionally? Name the primary emotion you're carrying into this room.

Question three: Where am I mentally? Is your mind clear or cluttered?

[Two minutes of silence]

Now check in with the group. One word for each: physical, emotional, mental. Three words. No explanations.

I'll start.

[After check-in]

Now: did you do the one thing you said out loud last session? We said we'd ask. We're asking."`,
      facilitatorNote: "The three-part check-in becomes a ritual participants can take directly into their business lives as a daily opening practice with their accountability partner. Name it as a tool: 'This is the format I use with my own accountability partner every Monday morning.'",
    },
    sections: [
      {
        type: "teaching",
        title: "Teaching: Business Accountability Systems",
        duration: "23 minutes",
        content: `─────────────────────────────────────
PART 1: WHY ACCOUNTABILITY WORKS (8 minutes)
─────────────────────────────────────

"Research by Gail Matthews at Dominican University: people who write down their goals are 42% more likely to achieve them. But the group with the highest success rate? The ones who wrote their goals, created an action plan, and shared both with an accountability partner. 76% more likely.

The mechanism is identity. When you say something out loud to another person — someone whose opinion matters to you — you become the kind of person who does that thing.

You've been using this in recovery. 'I'm going to call my sponsor before I make that decision' — that's identity-based accountability."

─────────────────────────────────────
PART 2: THE BUSINESS ACCOUNTABILITY STACK (10 minutes)
─────────────────────────────────────

LAYER 1 — THE DAILY ANCHOR (5 minutes per day):
Every morning, write: What's the one thing I need to do today? What's most likely to get in my way? What will I do if that happens?

LAYER 2 — THE WEEKLY CHECK-IN (30 minutes per week):
Format: What did I commit to? What did I do? What got in the way? What am I committing to this week?

LAYER 3 — THE MONTHLY REVIEW (1 hour per month):
Revenue, conversations, lessons. What worked. What didn't. What changes.

LAYER 4 — THE QUARTERLY RESET (2 hours per quarter):
Am I still building the right thing? Is the customer still right? Is the problem still right?

─────────────────────────────────────
PART 3: CHOOSING YOUR ACCOUNTABILITY PARTNER (5 minutes)
─────────────────────────────────────

Your partner needs three things:
1. Reliability — they will actually show up for the weekly call.
2. Honesty — they will ask you hard questions without letting you off the hook.
3. Belief — they default to: of course you can do this.`,
        facilitatorNote: "The accountability partner exchange later in this session is one of the most practically lasting outcomes of the entire program. Participants who continue checking in with their session partner after the program ends have dramatically better outcomes. Treat it with ceremony.",
      },
      {
        type: "exercise",
        title: "The 30-Day Plan",
        duration: "20 minutes",
        content: `PART 1 — WRITE THE PLAN (12 minutes):
Use a clean page. This one stays.

"At the top, write today's date and: 'My commitment for the next 30 days.'

WEEK 1 — Foundation:
What is the one thing I will do this week to move my idea forward?
What does 'done' look like?
What might get in my way and what will I do about it?

WEEK 2 — Action:
What is the next thing after Week 1?
Who will I talk to about what I'm building?
What do I want to learn from that conversation?

WEEK 3 — Test:
What small version of my offer can I put in front of a real person?
What am I hoping to learn from their reaction?
What will I do if the reaction is not what I hoped for?

WEEK 4 — Reflect and recommit:
What will I look back on and consider a success — even if everything doesn't go perfectly?

At the bottom, sign it. This is a contract with yourself."

PART 2 — THE EXCHANGE (8 minutes):
Find an accountability partner. Exchange plans. Read silently. Each person asks one question. Exchange contact information. First check-in in one week.`,
        facilitatorNote: "Research on commitment devices consistently shows that the physical act of signing a document increases follow-through. Sign in pen. The partner exchange should feel like the beginning of a real relationship, not a classroom exercise.",
      },
      {
        type: "mindfulness",
        title: "Mindfulness Reflection",
        duration: "7 minutes",
        content: `THE COMMITMENT BREATH — Paired Practice (4 minutes):
Face your accountability partner. Each person states their Week 1 commitment out loud — one sentence. Make eye contact while you say it.

After each person speaks, both people take one breath together — in through the nose, out through the mouth — in silence.

That breath is the seal.

WRITTEN REFLECTION (3 minutes):
"Write one paragraph beginning with:

'I am committing to _______ because _______, and the person I am becoming in the next 30 days is someone who _______.'

Keep that paragraph. Put it somewhere you'll see it."`,
        facilitatorNote: "The combination of verbal commitment, eye contact, shared breath, and written reflection activates multiple channels of memory and intention. The more channels involved in making a commitment, the more likely it is to be kept.",
      },
      {
        type: "closing",
        title: "Closing Practice",
        duration: "5 minutes",
        content: `CLOSING — Week 3 Acknowledgment (3 minutes):
"You are now halfway through this program. I want to take 60 seconds to acknowledge that — not celebrate, just acknowledge.

You came in. You showed up when you didn't have to. You told the truth in this room. You wrote things down. You had conversations you were nervous to have.

That is not nothing. That is, in fact, everything.

One word for how you're leaving today — not how you think you should feel. How you actually feel."

HOMEWORK (2 minutes):
"One — your Week 1 commitment. You said it out loud. Do it.
Two — read your 30-day plan once before bed tonight and once when you wake up tomorrow. Just read it. Let your brain start working on it."`,
        facilitatorNote: "The midpoint acknowledgment is easy to skip in the interest of time. Don't skip it. People in early recovery are often in environments where showing up and trying hard goes unremarked.",
      },
    ],
  },

  {
    number: 7, week: 4, color: 'gold', duration: 75,
    title: "Your Two-Minute Story",
    theme: "Pitch, Plan & What Comes Next",
    mindfulnessTheme: "Presence Under Pressure",
    tagline: "The most powerful pitch you'll ever give starts with the truth.",
    agenda: [
      { time: "0:00–0:05", label: "Opening Practice — The Performer's Breath", type: "mindfulness" },
      { time: "0:05–0:15", label: "Accountability Partner Check-In", type: "facilitation" },
      { time: "0:15–0:38", label: "Teaching: Narrative, Story & the Pitch", type: "teaching" },
      { time: "0:38–0:55", label: "Exercise: Draft & Practice Your Two-Minute Story", type: "exercise" },
      { time: "0:55–1:05", label: "Group Shares", type: "discussion" },
      { time: "1:05–1:10", label: "Mindfulness Reflection", type: "mindfulness" },
      { time: "1:10–1:15", label: "Closing Practice & Session 8 Preview", type: "closing" },
    ],
    opening: {
      practice: "The Performer's Breath",
      duration: "5 minutes",
      script: `"Today is the session most people are nervous about before it starts. You're going to say what you're building out loud — to real people — in a way that's meant to be heard.

So let's do what performers do before they go on stage.

Box breathing. Four counts in, four counts hold, four counts out, four counts hold. Three times.

In — two — three — four. Hold — two — three — four. Out — two — three — four. Hold — two — three — four.

[Repeat three times]

Notice what happened to your nervous system. That is not relaxation — it's regulation. Your heart rate slowed. Your prefrontal cortex — the part that handles language, reasoning, and social connection — came back online.

This is what you'll do in the 30 seconds before any high-stakes conversation. Before a pitch. Before a hard negotiation. Before you call someone you're nervous to call."`,
      facilitatorNote: "Box breathing is used by Navy SEALs, Olympic athletes, and ER surgeons. Naming this reframes 'breathing exercise' from self-care language to performance language — which lands better with some populations.",
    },
    sections: [
      {
        type: "facilitation",
        title: "Accountability Partner Check-In",
        duration: "10 minutes",
        content: `"Five minutes with your accountability partner. Use the check-in format from Session 6:
What did you commit to? What did you actually do? What got in the way? What are you committing to this week?

[5 minutes]

Who wants to share something that came up — not what they did or didn't do, but something they noticed?"

LISTEN FOR:
- People who hit their commitment — celebrate specifically
- People who didn't and have insight into why — often the most useful material
- The person who realized their Week 1 commitment was wrong — they tried and learned it wasn't the right direction. Name that as a success.

BRIDGE:
"Everything you've been working on — today we figure out how to talk about it. Not perfectly. Truthfully."`,
        facilitatorNote: "By Session 7, the accountability partner relationship should be real enough that people have actually checked in during the week. If they haven't, surface it: 'For those who didn't connect — what got in the way?' The answer matters for their business accountability system going forward.",
      },
      {
        type: "teaching",
        title: "Teaching: Narrative, Story & the Pitch",
        duration: "23 minutes",
        content: `─────────────────────────────────────
PART 1: WHY STORY WORKS (7 minutes)
─────────────────────────────────────

"When you hear a list of facts, two areas of your brain activate. When you hear a story, almost your entire brain activates. Your listener's brain synchronizes with yours — neural coupling.

Stories that include personal hardship and transformation are the most neurologically activating. Not because it generates sympathy. Because it generates connection. And connection is what moves people to say yes."

─────────────────────────────────────
PART 2: THE ARCHITECTURE OF A COMPELLING STORY (10 minutes)
─────────────────────────────────────

Four parts:

PART ONE — WHO YOU ARE:
Not your résumé. The one sentence that makes everything else make sense.

PART TWO — WHAT YOU EXPERIENCED:
The problem you lived. The gap you saw from the inside.

PART THREE — WHAT YOU'RE BUILDING:
One sentence. Not what it does technically. What it does for the person you're building it for.

PART FOUR — WHY IT MATTERS:
The stakes. What changes if this exists. What stays broken if it doesn't.

Two minutes total.

─────────────────────────────────────
PART 3: WHEN TO USE YOUR RECOVERY STORY (6 minutes)
─────────────────────────────────────

SHARE when: Your recovery is directly relevant to the credibility of your offer.
SHARE when: You're in a room where vulnerability builds trust and differentiates you.
DON'T SHARE when: Disclosure would be premature and shift the conversation to your history.
DON'T SHARE when: You're not ready.

"The test: does sharing this serve the relationship, or does it serve my need to be fully known before I've earned that? Whatever you decide — make it a decision, not a default."`,
        facilitatorNote: "The disclosure question is the most sensitive teaching in the curriculum. Your job is to give them a framework for making the decision, not to make it for them.",
      },
      {
        type: "exercise",
        title: "Draft & Practice Your Two-Minute Story",
        duration: "17 minutes",
        content: `PART 1 — DRAFT (7 minutes):
Using the four-part architecture, write your two-minute story. Write fast — don't edit.

Who you are — one sentence.
What you experienced — two or three sentences.
What you're building — one sentence.
Why it matters — one or two sentences.

PART 2 — PAIR PRACTICE (6 minutes):
Partner with someone you haven't worked with today. Each person has 2 minutes to deliver their story. Your partner's only job is to listen — not give feedback, just receive.

After both have gone, each person answers: "What's the one sentence I'll remember from what you said?"

That sentence is usually your hook.

PART 3 — REFINE (4 minutes):
Based on what your partner remembered — adjust. Rewrite or revise the sentence that landed. Make your hook the center.

Read your story one more time silently. Is it two minutes? Is it true? Is it yours?`,
        facilitatorNote: "'What's the one sentence I'll remember' does market research on your pitch. The sentence a listener spontaneously retains is the sentence your marketing should be built around. Brand strategists charge significant money to extract this. You're doing it in a peer exercise. Name it as such.",
      },
      {
        type: "discussion",
        title: "Group Shares",
        duration: "10 minutes",
        content: `"Who is willing to share their two-minute story with the full group?

We are witnessing, not evaluating. After each person shares, the room is silent for five seconds. Then we ask: 'What's the one sentence we'll remember?'

That's all. No 'great job.' No suggestions. Just the sentence.

I'll go first." Share your own story. Time yourself.

AFTER SHARES:
Look at the sentences on the board. Ask the group:
"What do you notice about the sentences that landed?"

Usually: they're specific. They're personal. They don't sound like marketing copy.

"The things that land are the things that are true. The most effective pitch is not the most polished one. It's the most honest one."`,
        facilitatorNote: "The group share is powerful — but only if the facilitator models real vulnerability first. If you share a polished, safe version, the room will do the same. You can't ask people to go somewhere you won't go first.",
      },
      {
        type: "mindfulness",
        title: "Mindfulness Reflection",
        duration: "5 minutes",
        content: `WRITTEN (5 minutes):
"Write for five minutes:

'The part of my story I'm most reluctant to tell is _______ — and the reason I'm reluctant is _______.
The part of my story that I think people most need to hear is _______.
The difference between those two things is _______.
And what I want to remember about what I heard in this room today is _______.'

Write until the time is up."`,
        facilitatorNote: "The gap between what we're reluctant to tell and what others most need to hear is often where the most compelling story lives.",
      },
      {
        type: "closing",
        title: "Closing Practice & Session 8 Preview",
        duration: "5 minutes",
        content: `CLOSING — The Group Witness (2 minutes):
Sit for 60 seconds in silence. No phones. Just sit in the presence of what happened in this room.

One person says: "We heard you."
The room repeats: "We heard you."

SESSION 8 PREVIEW (3 minutes):
"Next session is our last. You're going to present your one-page business concept — not a pitch deck, not a business plan. One page. Four sections: the problem, the customer, your solution, and your next three actions.

The presentation is three minutes. Not a performance — a share.

Come ready to be seen."`,
        facilitatorNote: "The language 'not a performance — a share' lowers the stakes enough that people don't dread the session. But 'come ready to be seen' is a gentle raising of stakes — an invitation to bring their full self.",
      },
    ],
  },

  {
    number: 8, week: 4, color: 'gold', duration: 90,
    title: "Graduation — The Real Work Starts Now",
    theme: "Pitch, Plan & What Comes Next",
    mindfulnessTheme: "Full Circle",
    tagline: "You came in as someone who survived. You're leaving as someone who builds. Those are not different things.",
    agenda: [
      { time: "0:00–0:10", label: "Opening Practice — The Full Circle Body Scan", type: "mindfulness" },
      { time: "0:10–0:20", label: "Final Accountability Partner Check-In", type: "facilitation" },
      { time: "0:20–1:05", label: "One-Page Concept Presentations", type: "exercise" },
      { time: "1:05–1:15", label: "Peter's Closing Teaching", type: "teaching" },
      { time: "1:15–1:22", label: "Mindfulness Reflection — The Letter", type: "mindfulness" },
      { time: "1:22–1:30", label: "Graduation Ceremony & Next Steps", type: "closing" },
    ],
    opening: {
      practice: "The Full Circle Body Scan",
      duration: "10 minutes",
      script: `"In Session 1, we opened this program with a body scan. The same practice. The same instruction. Find your seat. Feet flat. Close your eyes or soften your gaze.

We're going to do it again today — exactly the same way. And I want you to notice what's different.

Start at the soles of your feet. Notice what's there.

Move to your ankles. Your shins. The backs of your knees. Your thighs.

Your hips. Your lower back.

Your belly. Your chest. Notice your breath.

Your shoulders. Your arms. Your hands.

Your jaw. Your face. Your forehead.

Now — take one breath in through the nose and out through the mouth. And ask yourself this question, silently: who is the person sitting in this chair right now, compared to the person who sat down four weeks ago?

Not better. Not fixed. Just — different. What's different?

Stay with that for a moment. When you're ready, open your eyes.

What you just felt — that delta — that's four weeks of showing up."`,
      facilitatorNote: "The full circle body scan makes the change visible to the person who changed. People in early recovery often have difficulty perceiving their own progress. The body scan, repeated identically, creates a before-and-after comparison that bypasses cognitive minimizing and goes straight to felt sense. Let the silence after the question breathe as long as possible.",
    },
    sections: [
      {
        type: "facilitation",
        title: "Final Accountability Partner Check-In",
        duration: "10 minutes",
        content: `"Last time with your accountability partner — in this room, at least.

Five minutes. Same format: What did you commit to? What did you do? What got in the way? What are you committing to next?

Add this at the end: one thing you want your partner to know that you haven't said yet.

[5 minutes]

Before we go into presentations, I want to hear from one person — just one — about something your accountability partner said or did in the last three weeks that you want to acknowledge out loud."

Let one or two people speak. Don't rush it. The peer relationship formed in this program is as important as the business layer.`,
        facilitatorNote: "The acknowledgment of the accountability partner relationship is easy to cut when time is short. Don't cut it. Participants who continue checking in with their session partner after the program ends have dramatically better outcomes.",
      },
      {
        type: "exercise",
        title: "One-Page Concept Presentations",
        duration: "45 minutes",
        content: `SETUP (2 minutes):
"Each person has three minutes. Your one-page concept is your guide — not a script. You're sharing what you built, not performing it.

Four things to cover:
— The problem you're solving and who has it
— The customer you defined — specifically
— Your solution — the simplest version
— Your next three actions — concrete, dated

After each presentation, the room has 60 seconds. During that time, each person writes one sentence on a sticky note — something they want the presenter to remember. Not feedback. A sentence of recognition.

After the 60 seconds, we hand the notes to the presenter.

I'll go first."

TIME MANAGEMENT: 3 min presentation + 2 min notes = 5 min per person. Group of 8: 40 min.

IF SOMEONE STRUGGLES:
"Start anywhere. Tell us the problem you circled in Session 3. Go from there."

AFTER ALL PRESENTATIONS:
"Every person in here came in four weeks ago with an idea they might have been embarrassed to say out loud. Every one of them just said it. Out loud. To real people. That is not a small thing."`,
        facilitatorNote: "The sticky note recognition practice is adapted from appreciative inquiry methodology. It bypasses the threat-detection system and activates the social reward system. People keep these notes for years. Take the practice seriously.",
      },
      {
        type: "teaching",
        title: "Peter's Closing Teaching",
        duration: "10 minutes",
        content: `Write your own version. Use this as a structure:

WHAT THEY JUST DID:
Name specifically what happened in this room over four weeks. Reference things from the sessions — the timeline exercise, the anger inventory, specific moments.

WHAT COMES NEXT — HONESTLY:
"I'm not going to tell you that everything is going to work out. I'm going to tell you what I know is true:

The businesses that make it are not the ones with the best ideas. They're the ones whose founders kept showing up when it got hard. You've spent years learning how to keep showing up when it gets hard. That is your most important business skill.

You're going to hit a moment — probably within the next 30 days — when you think: this isn't working. When that happens: call your accountability partner. Do the daily anchor. Give the fear its 90 seconds. Then do the next thing.

That's the whole strategy."

RESOURCES:
— SCORE: Free mentorship from retired executives. score.org
— SBA Microloan Program: $500 to $50,000 for early businesses. sba.gov
— Level 2 of Build Anyway: For graduates ready to go deeper after 30 days post-discharge
— Your cohort: Exchange contact information today. Keep them.

ONE LAST THING:
"Recovery taught you that you can rebuild. Build Anyway is proof that you know what to build next. Those two things together — that's a complete person."`,
        facilitatorNote: "Write your own version of this closing. The teaching that lands is specific to this group, not the one that could have been delivered to any group. Reference real moments. Name real people if they've given permission.",
      },
      {
        type: "mindfulness",
        title: "Mindfulness Reflection — The Letter",
        duration: "7 minutes",
        content: `"Take out a piece of paper. We're going to write a letter.

Address it to yourself — your name, at the top. Date it 90 days from today.

Write to the person who will open this letter in 90 days. Tell them:
— What you built in these four weeks
— What you're committing to do in the next 90 days
— What you most want them to remember about who they were in this room today
— One thing you're afraid of — and what you want them to do about it

You have seven minutes. Write as much as you can.

[Seven minutes]

Fold it. Seal it with tape if you have it. Write 'Open in 90 days' on the front.

Take it home. Set a reminder on your phone for 90 days from today.

When you open it — whatever has happened — you'll know exactly where you started."`,
        facilitatorNote: "Some facilitators offer to mail the letters for participants — collected at graduation and mailed 90 days later. This removes the burden from the participant and increases the likelihood that the letter is actually read. Worth considering.",
      },
      {
        type: "closing",
        title: "Graduation Ceremony",
        duration: "8 minutes",
        content: `CERTIFICATE PRESENTATION (4 minutes):
Present each certificate individually. Say the person's name. Make eye contact. Hand it with both hands.

After each certificate: the room applauds once — a single acknowledgment — then silence. Each person gets their moment.

CONTACT EXCHANGE (2 minutes):
"Exchange contact information with at least two people who are building something. Write down what they're building next to their name.

In 30 days, reach out to them. Ask what happened. That's all."

THE GRADUATION BREATH (2 minutes):
"Stand up. Everyone.

Form a circle if the room allows.

One breath together — in through the nose, slow and full — hold for a moment — and out through the mouth.

[Beat]

'You came in as someone who survived. You're leaving as someone who builds. Those are not different things.'

You're done. Go build something."`,
        facilitatorNote: "Don't rush the graduation breath. Don't add words after it. Say the line, take the breath, and let the room hold the silence for a moment before people start moving. The silence after the breath is the last gift you give the group.",
      },
    ],
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────

function AgendaRow({ item }: { item: AgendaItem }) {
  const color = TYPE_COLOR[item.type];
  return (
    <div className="flex items-center gap-3 py-2 border-b border-slate-800/60">
      <span className="text-slate-600 font-mono text-xs w-20 flex-shrink-0">{item.time}</span>
      <span className="flex-1 text-slate-400 text-sm">{item.label}</span>
      <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ background: `${color}18`, color }}>
        {item.type}
      </span>
    </div>
  );
}

function SectionAccordion({ section }: { section: SessionSection }) {
  const [open, setOpen] = useState(false);
  const color = TYPE_COLOR[section.type];
  return (
    <div className="rounded-xl overflow-hidden mb-2 border" style={{ borderColor: open ? `${color}55` : '#1e293b' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors"
        style={{ background: open ? `${color}08` : 'transparent' }}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs px-2 py-0.5 rounded flex-shrink-0" style={{ background: `${color}18`, color }}>
            {section.type}
          </span>
          <span className="text-sm font-semibold text-white">{section.title}</span>
          <span className="text-slate-600 text-xs hidden sm:inline">{section.duration}</span>
        </div>
        <span className="text-slate-500 text-lg leading-none flex-shrink-0 ml-2">{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div className="px-4 pb-4 border-t border-slate-800">
          <pre className="text-slate-400 text-sm leading-relaxed whitespace-pre-wrap font-serif mt-4 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            {section.content}
          </pre>
          {section.facilitatorNote && (
            <div className="rounded-lg p-4 mt-2" style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid #1e293b' }}>
              <div className="text-xs font-mono uppercase tracking-widest text-slate-600 mb-2">Facilitator Note</div>
              <p className="text-slate-500 text-xs leading-relaxed italic">{section.facilitatorNote}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SessionView({ session }: { session: Session }) {
  const [tab, setTab] = useState<SessionTab>('guide');
  const color = ACCENT[session.color];

  return (
    <div>
      {/* Session header */}
      <div className="rounded-2xl p-5 mb-5" style={{ background: '#0f172a', border: `1px solid ${color}33`, borderLeft: `3px solid ${color}` }}>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ background: `${color}18`, color }}>
            SESSION {session.number}
          </span>
          <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(158,106,158,0.15)', color: '#9e6a9e' }}>
            MINDFULNESS: {session.mindfulnessTheme.toUpperCase()}
          </span>
          <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(90,158,111,0.15)', color: '#5a9e6f' }}>
            {session.duration} MIN
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{session.title}</h3>
        <p className="text-slate-400 text-sm italic">{session.tagline}</p>
      </div>

      {/* Sub-tabs */}
      <div className="flex border-b border-slate-800 mb-5">
        {(['guide', 'agenda', 'opening'] as SessionTab[]).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="font-mono text-xs uppercase tracking-widest px-5 py-2.5 transition-colors"
            style={{
              borderBottom: tab === t ? `2px solid ${color}` : '2px solid transparent',
              color: tab === t ? color : '#475569',
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Agenda */}
      {tab === 'agenda' && (
        <div className="rounded-xl border border-slate-800 p-5" style={{ background: '#0f172a' }}>
          <div className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: '#c8a96e' }}>
            {session.duration}-Minute Session Agenda
          </div>
          {session.agenda.map((item, i) => <AgendaRow key={i} item={item} />)}
        </div>
      )}

      {/* Opening */}
      {tab === 'opening' && (
        <div>
          <div className="rounded-xl p-5 mb-3" style={{ background: '#0f172a', border: '1px solid rgba(158,106,158,0.3)', borderLeft: '3px solid #9e6a9e' }}>
            <div className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: '#9e6a9e' }}>
              Opening Practice · {session.opening.duration}
            </div>
            <h4 className="text-base font-bold text-white mb-4">{session.opening.practice}</h4>
            <pre className="text-slate-400 text-sm leading-relaxed whitespace-pre-wrap italic" style={{ fontFamily: 'Georgia, serif' }}>
              {session.opening.script}
            </pre>
          </div>
          <div className="rounded-xl p-4" style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid #1e293b' }}>
            <div className="font-mono text-xs uppercase tracking-widest text-slate-600 mb-2">Facilitator Note</div>
            <p className="text-slate-500 text-xs leading-relaxed italic">{session.opening.facilitatorNote}</p>
          </div>
        </div>
      )}

      {/* Guide */}
      {tab === 'guide' && (
        <div>
          {session.sections.map((s, i) => <SectionAccordion key={i} section={s} />)}
        </div>
      )}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────

const WEEK_THEMES = [
  { week: 1, label: 'Identity & Foundation', color: 'blue' },
  { week: 2, label: 'Finding Your Idea',    color: 'purple' },
  { week: 3, label: 'Building Without Overwhelm', color: 'green' },
  { week: 4, label: 'Pitch, Plan & What Comes Next', color: 'gold' },
];

export default function FoundationPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const session = SESSIONS[activeIdx];

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Header />

      {/* HERO */}
      <section className="container mx-auto px-6 pt-32 pb-12 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-xs font-bold uppercase tracking-widest" style={{ background: 'rgba(106,158,191,0.1)', borderColor: 'rgba(106,158,191,0.3)', color: '#6a9ebf' }}>
          Build Anyway · Level 1
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
          Foundation — Facilitator Guide
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-8">
          Full session guides, timed agendas, facilitator scripts, and mindfulness practices for all 8 sessions of the Level 1 curriculum delivered inside IOP programs.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { value: '8', label: 'Sessions' },
            { value: '4 wks', label: 'Duration' },
            { value: '75 min', label: 'Per session' },
            { value: 'IOP', label: 'Setting' },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-center">
              <div className="text-xl font-bold mb-0.5" style={{ color: '#6a9ebf' }}>{s.value}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WEEK THEMES STRIP */}
      <div className="border-y border-slate-800 bg-slate-900/30">
        <div className="container mx-auto px-6 py-4 max-w-4xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {WEEK_THEMES.map(wt => (
              <div key={wt.week} className="flex items-center gap-2 px-3 py-2 rounded-lg">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: ACCENT[wt.color] }} />
                <div>
                  <div className="text-xs text-slate-500 font-mono">Week {wt.week}</div>
                  <div className="text-xs text-slate-300 font-medium leading-tight">{wt.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SESSION SELECTOR + CONTENT */}
      <section className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Session picker */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {SESSIONS.map((s, i) => {
            const color = ACCENT[s.color];
            const isActive = activeIdx === i;
            return (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className="rounded-xl p-3 text-left transition-all border"
                style={{
                  borderColor: isActive ? color : '#1e293b',
                  borderTop: `2px solid ${color}`,
                  background: isActive ? `${color}08` : 'transparent',
                }}
              >
                <div className="font-mono text-xs mb-1" style={{ color }}>Wk {s.week} · S{s.number}</div>
                <div className="text-xs font-semibold leading-tight" style={{ color: isActive ? '#e2e8f0' : '#64748b' }}>
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active session */}
        <SessionView session={session} />
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-20 max-w-4xl">
        <div className="rounded-2xl border border-slate-800 p-8" style={{ borderLeft: '3px solid #6a9ebf' }}>
          <div className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: '#6a9ebf' }}>Ready to run a cohort?</div>
          <h3 className="text-xl font-bold mb-2">Bring Build Anyway to your IOP program.</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xl">
            Seats are $100. Scholarship funding is available. Peter works directly with IOP directors to license and deliver Level 1 cohorts.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold no-underline"
            style={{ background: '#6a9ebf', color: '#0f172a' }}
          >
            Get in Touch →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
