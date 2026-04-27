// ============================================================
// lib/content.ts
// Single source of truth for all copy on ferreiracto.com
// Edit text here — never in component files.
// ============================================================

// ── SITE-WIDE ────────────────────────────────────────────────

export const site = {
  name: "Ferreira CTO",
  tagline: "Build Anyway.",
  url: "https://ferreiracto.com",
  email: "peter@ferreiracto.com",
  phone: "(401) 263-3017",
  podcast: {
    name: "Before the Rewrite",
    url: "/podcast",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/peter-ferreira-0177061b/", // confirm handle
  },
};

// ── NAV ──────────────────────────────────────────────────────

export const nav = {
  links: [
    { label: "The Offer",    href: "/#offer" },
    { label: "Build Anyway", href: "/build-anyway" },
    { label: "Red Flags",    href: "/red-flags" },
    { label: "Podcast",      href: "/podcast" },
  ],
  cta: {
    label: "Work With Me",
    href: "/#contact",
  },
};

// ── HOMEPAGE ─────────────────────────────────────────────────

export const home = {
  hero: {
    eyebrow: "Fractional Strategic Advisory",
    headline: "Strategic counsel for founders\nbuilding at the edge.",
    subhead:
      "Not implementation — strategy. I help hardware, edge AI, and deeptech founders pressure-test their decisions before they become the kind of expensive mistakes that don't survive a Series A. Also home of the Build Anyway Program — entrepreneurship education for people in recovery.",
    cta:       { label: "Work With Me",         href: "/#contact" },
    secondary: { label: "Build Anyway Program", href: "/build-anyway" },
    trust: [
      "Advisory only — I don't write your code",
      "$1,500 / month · 6–8 hours",
      "Hardware, edge AI, and deeptech founders",
    ],
  },

  whoThisIsFor: {
    headline: "Who I Work With",
    subhead: "Early-stage founders building physical products in complex or regulated domains.",
    segments: [
      {
        icon: "◈",
        label: "Edge AI Startups",
        description:
          "Pre-seed to Series A teams building physical or embedded products. You're often technical but need help with go-to-market framing, investor narrative, and the decisions that compound before you even realize it.",
      },
      {
        icon: "◉",
        label: "Hardware / IoT Founders",
        description:
          "Building connected devices, wearables, or industrial sensors. Common pattern: over-engineered product, under-built business. I help you find the balance before the market does it for you.",
      },
      {
        icon: "✦",
        label: "HealthTech & MedDevice Startups",
        description:
          "Navigating HIPAA, integration complexity, and clinical workflows without an experienced operator in the room. I've built on both sides of that wall and know where it breaks.",
      },
    ],
  },

  whyICanHelp: {
    headline: "Why I Can Help",
    subhead: "I've made the expensive mistakes already. You don't have to.",
    background:
      "I grew up in my father's precision machine shop in Bristol, Rhode Island — learning to read technical drawings before I could drive. I've spent 20 years building across healthcare IT, enterprise integrations, edge AI hardware, and IoT systems. I've shipped products that worked and ones that didn't — and I know the difference before a line of code is written.",
    skills: [
      { label: "Software-Hardware Integration",  description: "Where most edge AI teams fall apart — I've built both sides." },
      { label: "HIPAA & Privacy Expertise",      description: "Healthcare data architecture done right from the start." },
      { label: "Edge-First Architecture",        description: "Jetson, Raspberry Pi, YOLO, mmWave — not theoretical." },
      { label: "Scalability Assessment",         description: "What holds at 10 units won't hold at 10,000. I find the cracks." },
    ],
  },

  howItWorks: {
    id: "how-it-works",
    headline: "How It Works",
    subhead: "A focused, structured process that produces clarity — not a report that collects dust.",
    steps: [
      {
        number: "1",
        title: "Week 1 — Discovery & Analysis",
        items: [
          "Kickoff call to review your systems, challenges, and goals",
          "I work alone — no junior engineers, no filler",
          "Review your current architecture end to end",
          "Typical time investment: 15–20 hrs from you",
        ],
      },
      {
        number: "2",
        title: "Week 2 — Assessment & Evaluation",
        items: [
          "Identify the exact points where your system will break",
          "No one-size-fits-all system design fixes",
          "Assess integration risk, scalability ceiling, and compliance gaps",
          "Benchmark against real-world hardware deployment standards",
        ],
      },
      {
        number: "3",
        title: "Week 3 — Deliverables & Presentation",
        items: [
          "Written report: 20–30 pages with prioritized recommendations",
          "Live presentation to your team and any stakeholders",
          "Vendor-neutral — no kickbacks, no preferred partners",
          "30 days of email support following delivery",
        ],
      },
    ],
    deliverables: [
      { label: "Current Architecture Assessment",   items: ["Full system diagram review", "Integration point mapping", "Risk heat map"] },
      { label: "Risk & Scalability Analysis",        items: ["Top 5 critical failure points", "Scalability ceiling analysis", "Compliance gap report"] },
      { label: "Recommendations & Roadmap",          items: ["Prioritized fix list", "30-60-90 day action plan", "Vendor-neutral tool suggestions"] },
    ],
  },

  offer: {
    id: "offer",
    headline: "The Advisory Offer",
    subhead: "Founder-level strategic counsel. Not consulting — a thinking partner who has built in the same terrain.",
    price: "$1,500",
    priceNote: "per month",
    commitment: "6–8 hours / month",
    sessions: "2 × 60-minute strategy sessions",
    includes: [
      "2 × 60-minute strategy sessions per month",
      "Async availability via voice memo or Loom (48-hour turnaround)",
      "Business model and go-to-market review",
      "Investor narrative and pitch feedback",
      "7 Red Flags framework applied to your build decisions",
      "Monthly written strategic memo",
      "Architecture review component when relevant — used as a diagnostic tool, not a deliverable",
    ],
    notIncluded: [
      "Writing or modifying code",
      "Hiring or managing engineers",
      "Day-to-day operational tasks",
    ],
    boundary: "You advise. You do not build. This keeps you positioned as a strategic peer — not a contractor.",
    cta: { label: "Work With Me", href: "/#contact" },
    earlyOffer: {
      headline: "First 3 Clients",
      body: "Rate is $1,500/month while I build the testimonial base. After 60 days, new clients start at $2,000/month. Current clients are grandfathered.",
    },
  },

  // ── NEW: Three-offering section added below existing architecture review ──

  offerings: {
    headline: "Three Ways to Work Together",
    subhead:
      "The architecture review is how most people start. But Ferreira CTO is built around three distinct offerings — each serving a different stage and a different kind of problem.",
    items: [
      {
        number: "01",
        accent: "gold",
        label: "Architecture Review",
        price: "$15,000",
        priceNote: "One-time engagement",
        headline: "Identify the $500K+ mistakes before they happen.",
        description:
          "A 2–3 week deep dive into your hardware startup's technical architecture. Written report, prioritized recommendations, 30/60/90 day roadmap, and 30 days of follow-up support. Built for pre-Series A founders who need to know what will break before investors find out.",
        audience: "Hardware, IoT, and edge AI startups",
        cta: { label: "Learn More", href: "/#how-it-works" },
      },
      {
        number: "02",
        accent: "blue",
        label: "Fractional Strategic Advisory",
        price: "$1,500–$2,000",
        priceNote: "Per month · 6–8 hrs",
        headline: "Strategic counsel for founders who are building in the deep end.",
        description:
          "Not implementation — strategy. Business model pressure-testing, go-to-market framing, investor narrative, and the 7 Red Flags framework applied to your build decisions before you make the expensive ones. Two strategy sessions per month plus async availability. You build — I make sure you're building the right thing.",
        audience: "Edge AI, healthtech, and hardware founders",
        cta: { label: "Inquire", href: "/#contact" },
      },
      {
        number: "03",
        accent: "purple",
        label: "Build Anyway Program",
        price: "$30",
        priceNote: "Per class · IOP cohorts",
        headline: "Entrepreneurship education for people in recovery.",
        description:
          "A 3-level certification program delivered inside IOP programs and post-discharge. Participants leave with a business concept, a 30-day action plan, and a peer accountability group. Level 3 certifies graduates to teach in their own cities. 5% of every cohort funds scholarship seats for programs that can't pay.",
        audience: "IOP program directors and recovery community organizations",
        cta: { label: "For IOP Directors", href: "/build-anyway/for-directors" },
      },
    ],
  },

  proofPoints: {
    headline: "Technical Proof Points",
    subhead: "Systems I've personally built that speak louder than a résumé.",
    note: "These are both built from scratch — not side projects, not demos. Production systems that run today. I use them in reviews to show founders what edge AI architecture looks like when it's done with intent.",
    projects: [
      {
        name: "OrbCare",
        subtitle: "AI Health Monitoring Robot I'm Building",
        description:
          "Edge AI resident monitoring platform for assisted living facilities. Runs on a Jetson Orin Nano Super with YOLO v8, MediaPipe, mmWave radar, ReSpeaker mic array, and a FastAPI dashboard over Tailscale. React web dashboard with real-time vitals and alert logging.",
        tags: ["Edge AI", "YOLO v8", "Jetson", "FastAPI", "React"],
        status: "In Development",
        stage: "Edge Proof",
      },
      {
        name: "Lumi",
        subtitle: "AI Health Concepts (Personal Project)",
        description:
          "Healthcare AI platform exploring patient engagement, intake automation, and clinical workflow integration. Built across mobile and web with deep experience in HIPAA-compliant data architecture, healthcare payer integrations, and EDI systems from enterprise healthcare IT work.",
        tags: ["HealthTech", "HIPAA", "Mobile", "EDI"],
        status: "Concept Stage",
        stage: "Edge Proof",
      },
    ],
    footer:
      "Not to sell you the products — to show you that when I review your architecture, I'm drawing on systems I've actually built, not textbook theory.",
  },

  questionsICanAnswer: {
    headline: "Questions I Can Answer",
    subhead: "The ones that keep founders up at night.",
    items: [
      { label: "Edge AI",        question: "Will your edge inference pipeline hold under real-world load and latency constraints?" },
      { label: "Scalability",    question: "What breaks at 10x current volume — and do you know before your investors do?" },
      { label: "Privacy",        question: "Is your HIPAA compliance actually compliant, or just close enough to get the contract?" },
      { label: "Integration",    question: "Where are the hidden failure points in your hardware-software handoff?" },
      { label: "IoT/Embedded",   question: "Are your firmware update, device management, and connectivity assumptions safe?" },
      { label: "Technical Risk", question: "What in your stack will a technical due diligence reviewer flag on sight?" },
    ],
  },

  whyThisWorks: {
    headline: "Why This Works",
    subhead: "The advantages of working with someone who has made these same kinds of mistakes.",
    points: [
      {
        label: "I've Made These Decisions",
        items: [
          "Built real edge AI systems — not just reviewed them",
          "Shipped healthcare integrations with real compliance stakes",
          "Made the wrong architecture call and lived with the cost",
        ],
      },
      {
        label: "Focused on Your Success",
        items: [
          "No agency incentive to recommend more work than you need",
          "Vendor-neutral — no preferred partners or kickbacks",
          "You get my eyes, not a team of analysts you've never met",
        ],
      },
    ],
  },

  whatHappensNext: {
    headline: "What Happens Next",
    subhead: "Four steps from first contact to complete clarity.",
    steps: [
      { number: "1", label: "Schedule a Call",      description: "30 minutes to understand your system and confirm fit." },
      { number: "2", label: "Proposal & Timeline",  description: "I send a one-page scope and timeline within 24 hours." },
      { number: "3", label: "Kickoff",              description: "We start the following Monday. No waiting list for current clients." },
      { number: "4", label: "Delivery",             description: "Full report and live presentation within 2–3 weeks." },
    ],
  },

  contact: {
    headline: "Let's Talk",
    subhead: "Tell me about your architecture challenges.",
    fields: [
      { name: "name",    label: "Name",           type: "text" },
      { name: "email",   label: "Email",          type: "email" },
      { name: "company", label: "Company",        type: "text" },
      { name: "stage",   label: "Funding Stage",  type: "select",
        options: ["Pre-Seed", "Seed", "Series A", "Bootstrapped", "Other"] },
      { name: "message", label: "What are you building and where do you feel most uncertain?", type: "textarea" },
    ],
    cta: { label: "Get Started", href: "/#contact" },
    fallback: "Or email directly: peter@ferreiracto.com",
  },
};

// ── BUILD ANYWAY LANDING PAGE ─────────────────────────────────

export const buildAway = {
  hero: {
    eyebrow: "Build Anyway",
    headline: "A 3-level entrepreneurship program\nfor people in recovery.",
    subhead:
      "Not inspiration. Not a seminar. A real curriculum that gives you something to build toward — taught by someone who's been there.",
    cta: {
      label: "For IOP Directors",
      href: "/build-anyway/for-directors",
    },
    secondary: {
      label: "See the Three Levels",
      href: "/build-anyway/levels",
    },
  },

  stats: [
    { value: "20",   label: "participants per cohort" },
    { value: "3",    label: "levels of certification" },
    { value: "5%",  label: "of every cohort funds scholarships" },
    { value: "1",    label: "facilitator who has been there" },
  ],

  levels: [
    {
      number: 1,
      name: "Foundation",
      color: "blue",
      duration: "4 weeks",
      setting: "Inside IOP programs",
      seatPrice: 30,
      priceLabel: "/class",
      headline: "You already built something. Now let's prove it.",
      description:
        "A structured 4-week curriculum delivered inside your IOP program. Participants reframe their past as raw material, identify a business idea rooted in lived experience, and leave with a one-page concept and 30-day action plan.",
      cert: "Build Anyway Foundation Certificate",
      href: "/build-anyway/foundation",
    },
    {
      number: 2,
      name: "Builder",
      color: "purple",
      duration: "6 weeks",
      setting: "Post-discharge enrollment",
      seatPrice: 50,
      priceLabel: "/class",
      headline: "You have the concept. Now build the real thing.",
      description:
        "For Level 1 graduates who are post-discharge and ready to go deeper. Customer validation, pricing, legal basics, and a hard graduation requirement: generate $1 in real revenue, or secure a committed pilot partner.",
      cert: "Build Anywhere Builder Certificate",
      href: "/build-anyway/levels#builder",
    },
    {
      number: 3,
      name: "Facilitator",
      color: "gold",
      duration: "8 weeks",
      setting: "Train to teach in your city",
      seatPrice: 1500,
      priceLabel: "/cohort",
      headline: "You've been through it. Now help others through it.",
      description:
        "For Level 2 graduates ready to teach. Trauma-informed facilitation, curriculum mastery, and a live practicum observed by Peter. Graduates are licensed to run Build Anyway cohorts independently — with ongoing support and a revenue share model.",
      cert: "Certified Build Anyway Facilitator",
      href: "/build-anyway/levels#facilitator",
    },
  ],

  scholarship: {
    eyebrow: "The Build Anyway Scholarship Fund",
    headline: "Every paid seat funds a free one.",
    body:
      "5% of every cohort fee goes directly into the Build Anyway Scholarship Fund — used to sponsor seats at community programs, nonprofit recovery houses, and underserved IOP facilities that can't afford full pricing. Donors can contribute directly. The fund grows with every cohort, in every city, at every level.",
    cta: {
      label: "Support the Fund",
      href: `mailto:peter@ferreiracto.com?subject=Build%20Anyway%20Scholarship%20Fund`,
    },
  },

  facilitator: {
    eyebrow: "About the Facilitator",
    name: "Peter Ferreira",
    title: "Principal, Ferreira CTO · Person in Long-Term Recovery",
    bio: "Peter Ferreira is a technologist, entrepreneur, and person in long-term recovery. He grew up in his father's precision machine shop in Bristol, Rhode Island — where competence was the only currency — and has spent 20 years building across healthcare IT, enterprise software, edge AI hardware, and startup advisory. He hosts Before the Rewrite, a podcast about rebuilding from the ground up. He brings no clinical credentials to this room — only lived experience, a systems mind, and genuine belief that recovery and entrepreneurship run on the same fuel.",
    podcast: {
      label: "Listen to Before the Rewrite",
      href: "#",
    },
  },

  footerCta: {
    headline: "Running an IOP program? Let's talk.",
    subhead:
      "I offer one free introductory session — 75 minutes with a small group from your program. No pitch. No pressure. You see how your clients respond.",
    cta: {
      label: "Book a 20-Minute Call",
      href: "/#contact",
    },
    phone: "(401) 263-3017",
  },
};

// ── FOR DIRECTORS PAGE ────────────────────────────────────────

export const forDirectors = {
  hero: {
    eyebrow: "For IOP Program Directors",
    headline: "A program your clients will actually remember.",
    subhead:
      "Build Anyway gives IOP participants a practical entrepreneurship curriculum — and a forward-facing identity — during the most critical window.",
    cta: {
      label: "Book a Free Intro Session",
      href: "/#contact",
    },
  },

  case: [
    {
      label: "Purpose",
      icon: "◈",
      headline: "Employment and purpose are the strongest protective factors against relapse.",
      body: "Most IOP programs address stabilization and coping skills well. Fewer address what clients are building toward. Build Anyway fills that gap — not with platitudes, but with a structured plan.",
    },
    {
      label: "Practical",
      icon: "◉",
      headline: "Skills-based, not motivational.",
      body: "Clients leave with a one-page business concept, a 30-day action plan, and a peer accountability group. These are measurable outcomes you can document — a deliverable your program can point to.",
    },
    {
      label: "Peer-Led",
      icon: "✦",
      headline: "Facilitated by an entrepreneur in long-term recovery.",
      body: "Not a therapist. Not a consultant. Someone who has rebuilt from the ground up and teaches from that experience. That credibility lands differently in the room.",
    },
  ],

  programDetails: {
    headline: "Program Details",
    items: [
      { label: "Format",      value: "4 weeks · 8 sessions · 75 minutes each" },
      { label: "Group Size",  value: "Up to 20 participants" },
      { label: "Pricing",     value: "$30 per class · $240 per seat · up to $4,800 per cohort" },
      { label: "Scheduling",  value: "Modular — fits around your existing programming" },
      { label: "Delivery",    value: "On-site at your facility" },
      { label: "Materials",   value: "Provided — workbooks, session guides, certificate" },
    ],
  },

  whatThisIsNot: {
    headline: "What this is not.",
    items: [
      "Not a get-rich-quick program — participants aren't promised income",
      "Not clinically therapeutic — peer-facilitated, not a substitute for counseling",
      "Not disruptive to existing programming — sessions are modular and schedule-flexible",
      "Not contingent on prior business or technology experience",
    ],
  },

  scholarship: {
    headline: "Your investment goes further than your walls.",
    body: "A percentage of your cohort fee funds scholarship seats at community programs and nonprofit recovery houses that can't afford full pricing. When you run Build Anyway, you're helping people outside your facility too.",
  },

  contact: {
    headline: "Ready to explore a fit?",
    body: "I offer one free introductory session — 75 minutes with a small group from your program. No pitch. No pressure. You see how your clients respond, and we go from there.",
    cta: {
      label: "Book a Free Intro Session",
      href: "/#contact",
    },
    phone: "(401) 263-3017",
    secondary: {
      label: "Download the Program Overview",
      href: "/build-anyway/program-overview",
    },
  },
};

// ── THREE LEVELS PAGE ─────────────────────────────────────────

export const levels = {
  hero: {
    eyebrow: "The Certification System",
    headline: "Three levels. One mission. Infinite reach.",
    subhead:
      "Each level builds on the last. Each one harder to earn, more valuable to hold, and more powerful to carry.",
  },

  journey: {
    headline: "The Participant Journey",
    note: "Not everyone graduates to Level 2, and most Level 2 graduates won't pursue Level 3 — and that's fine. Each level is complete in itself. The people who reach Level 3 are self-selected: motivated, proven, and deeply invested in the mission. Those are exactly the people you want representing your brand.",
  },

  details: [
    {
      id: "foundation",
      number: 1,
      name: "Foundation",
      color: "blue",
      certName: "Build Anyway Foundation Certificate",
      duration: "4 weeks · 8 sessions · 75 min each",
      cohortSize: "Up to 20 participants",
      setting: "Delivered on-site inside IOP programs",
      seatPrice: 30,
      priceLabel: "/class",
      tagline: "You already built something. Now let's prove it.",
      prerequisite: null,
      weeks: [
        {
          number: 1,
          title: "You Already Built Something",
          theme: "Identity & Foundation",
          sessions: [
            { number: 1, title: "Your Origin Story", description: "Participants map their own timeline — what they built, broke, survived, and learned. No business talk yet. Just evidence that they are already builders." },
            { number: 2, title: "Systems Thinking for Humans", description: "Recovery programs run on systems. Entrepreneurship runs on the same logic. This session draws the direct parallel between how a program works and how a business works." },
          ],
        },
        {
          number: 2,
          title: "The Problem Is the Product",
          theme: "Finding Your Idea",
          sessions: [
            { number: 3, title: "What Broke You Might Be Your Business", description: "A structured exercise in identifying pain points from lived experience. The gaps participants noticed in treatment, housing, employment, or daily life — those are market opportunities." },
            { number: 4, title: "Who Else Has This Problem?", description: "Basic market validation without jargon. If you had this problem, who else does? How many of them are there? Would they pay someone to solve it?" },
          ],
        },
        {
          number: 3,
          title: "One Brick at a Time",
          theme: "Building Without Overwhelm",
          sessions: [
            { number: 5, title: "The Smallest Version That Works", description: "A business can start as a conversation, a piece of paper, or one service offered to one person. The first version of anything is allowed to be small." },
            { number: 6, title: "Accountability Structures That Actually Work", description: "Sponsors, check-ins, and step work exist because accountability is the infrastructure of change. This session builds the business equivalent." },
          ],
        },
        {
          number: 4,
          title: "Tell Your Story, Own Your Future",
          theme: "Pitch, Plan & What Comes Next",
          sessions: [
            { number: 7, title: "Your Two-Minute Story", description: "Not a formal pitch — a human story. Who you are, what you've been through, what you're building, and why." },
            { number: 8, title: "Graduation & Next Steps", description: "Each participant presents their one-page business concept. Celebration, not critique. Curated next steps and resources for post-discharge." },
          ],
        },
      ],
      requirements: [
        "Attend minimum 7 of 8 sessions",
        "Complete all 4 written exercises",
        "Submit a one-page business concept",
        "Deliver a 2-minute story to the group in Session 8",
      ],
    },
    {
      id: "builder",
      number: 2,
      name: "Builder",
      color: "purple",
      certName: "Build Anywhere Builder Certificate",
      duration: "6 weeks · 12 sessions · 90 min each",
      cohortSize: "8–12 participants",
      setting: "Direct enrollment or facility-sponsored alumni program",
      seatPrice: 50,
      priceLabel: "/class",
      tagline: "You have the concept. Now build the real thing.",
      prerequisite: "Level 1 Foundation Certificate + minimum 30 days post-discharge",
      weeks: [
        { number: 1, title: "From Concept to Customer", theme: "Validation",
          sessions: [
            { number: 1, title: "Talking to Real People Without Pitching", description: "Customer discovery without a sales agenda. How to have conversations that tell you the truth." },
            { number: 2, title: "What They Said vs. What You Heard", description: "Interpreting customer feedback without wishful thinking." },
          ]},
        { number: 2, title: "Money Basics for Builders", theme: "Financial Literacy",
          sessions: [
            { number: 3, title: "How a Business Actually Makes Money", description: "Revenue models, margins, and the difference between revenue and profit — without the MBA." },
            { number: 4, title: "Pricing Without Apologizing", description: "Why underpricing is a trust signal, not a competitive advantage." },
          ]},
        { number: 3, title: "Build in the Open", theme: "Execution",
          sessions: [
            { number: 5, title: "Your First Offer", description: "Packaging what you know into something someone can buy." },
            { number: 6, title: "Getting Your First Yes", description: "The ask, the follow-up, and why no is data." },
          ]},
        { number: 4, title: "Structure & Protection", theme: "Legal & Operational Basics",
          sessions: [
            { number: 7, title: "LLC, EIN, Bank Account — Done in a Day", description: "The three things every business needs before it earns money." },
            { number: 8, title: "Protecting Yourself and Your Customers", description: "Contracts, liability, and why a handshake is not enough." },
          ]},
        { number: 5, title: "Telling the Story That Opens Doors", theme: "Narrative & Fundraising",
          sessions: [
            { number: 9, title: "Pitching to People Who Don't Know You", description: "Cold outreach, warm introductions, and what makes someone actually read your email." },
            { number: 10, title: "Your Recovery Story as a Business Asset", description: "How lived experience becomes credibility — and when to lead with it." },
          ]},
        { number: 6, title: "The Next 90 Days", theme: "Roadmap & Accountability",
          sessions: [
            { number: 11, title: "Building Your Accountability System", description: "The business equivalent of a sponsor, a home group, and step work." },
            { number: 12, title: "Graduation — The Real Work Starts Now", description: "90-day plans, peer accountability exchanges, and what happens after the certificate." },
          ]},
      ],
      requirements: [
        "Hold Level 1 Foundation Certificate",
        "Minimum 30 days post-discharge at time of enrollment",
        "Attend 10 of 12 sessions",
        "Complete validated customer discovery — 3+ documented conversations",
        "Generate at least $1 in revenue OR secure one committed pilot partner",
        "Submit a 3-page business plan with financial projections",
      ],
    },
    {
      id: "facilitator",
      number: 3,
      name: "Facilitator",
      color: "gold",
      certName: "Certified Build Anyway Facilitator",
      duration: "8 weeks · 16 sessions · 90 min each",
      cohortSize: "Maximum 6 participants",
      setting: "Online or in-person — taught directly by Peter Ferreira",
      seatPrice: 1500,
      priceLabel: "/cohort",
      tagline: "You've been through it. Now help others through it.",
      prerequisite: "Level 2 Builder Certificate + 90 days of active business operation",
      weeks: [
        { number: 1, title: "What This Work Actually Costs", theme: "Facilitator Mindset",
          sessions: [
            { number: 1, title: "The Difference Between Sharing and Teaching", description: "Why lived experience is the credential — and when it becomes a liability." },
            { number: 2, title: "Holding Space Without Losing Yourself", description: "Boundaries, self-care, and sustainability in peer facilitation work." },
          ]},
        { number: 2, title: "The Curriculum Deep Dive", theme: "Content Mastery",
          sessions: [
            { number: 3, title: "Level 1 Session-by-Session Breakdown", description: "Every session deconstructed — what's happening under the surface and why." },
            { number: 4, title: "Handling the Exercises and Resistors", description: "When someone shuts down, acts out, or dominates. What you do." },
          ]},
        { number: 3, title: "Trauma-Informed Facilitation", theme: "Safety & Inclusion",
          sessions: [
            { number: 5, title: "What Trauma-Informed Means in a Classroom", description: "Practical, non-clinical principles for creating psychological safety." },
            { number: 6, title: "When Someone Shares More Than You Expected", description: "De-escalation, referrals, and knowing the edge of your role." },
          ]},
        { number: 4, title: "The Business of Running Cohorts", theme: "Operations",
          sessions: [
            { number: 7, title: "Pitching IOP Directors — Your First Facility", description: "The exact outreach framework, objection handling, and the free intro session offer." },
            { number: 8, title: "Contracts, Pricing, and Scholarship Contributions", description: "How to structure your facility agreements and fulfil your licensing obligations." },
          ]},
        { number: 5, title: "Marketing Yourself as a Facilitator", theme: "Growth",
          sessions: [
            { number: 9, title: "Building Credibility Without a Track Record", description: "What to say before you have testimonials, case studies, or published data." },
            { number: 10, title: "LinkedIn and LinkedIn Only", description: "Your one distribution channel as a facilitator. How to use it without becoming noise." },
          ]},
        { number: 6, title: "Managing Multiple Cohorts", theme: "Scale",
          sessions: [
            { number: 11, title: "Systems for Running 2–4 Cohorts Simultaneously", description: "Scheduling, materials management, and keeping quality consistent across facilities." },
            { number: 12, title: "When to Raise Your Rates", description: "The signals that tell you your market has room, and how to raise without losing clients." },
          ]},
        { number: 7, title: "Practicum — Level 1 Delivery", theme: "Live Practice",
          sessions: [
            { number: 13, title: "Deliver Sessions 1 & 2 Observed", description: "Live facilitation practicum with the training cohort as your group. Peter observes and gives structured feedback." },
            { number: 14, title: "Feedback, Debrief, and Iteration", description: "Real-time coaching on what worked, what didn't, and what to do differently." },
          ]},
        { number: 8, title: "Certification and Launch", theme: "Graduation",
          sessions: [
            { number: 15, title: "License Agreement Review and Signing", description: "Terms, obligations, and the revenue share model explained clearly." },
            { number: 16, title: "Your First Facility Outreach Plan", description: "Leave with 10 identified targets, 5 drafted emails, and a 30-day launch plan." },
          ]},
      ],
      requirements: [
        "Hold Level 2 Builder Certificate",
        "Minimum 90 days of active business operation",
        "Demonstrate financial literacy — submit 3-month P&L for your own business",
        "Pass live facilitation practicum — deliver 2 full sessions observed by Peter",
        "Complete trauma-informed facilitation training module",
        "Sign the Facilitator License Agreement",
        "Pass background check",
      ],
    },
  ],
};

// ── LICENSING ─────────────────────────────────────────────────

export const licensing = {
  headline: "The Facilitator License",
  subhead: "Run Build Anyway cohorts in your own city. Keep most of the revenue. Grow the mission.",
  tiers: [
    { name: "Monthly Flat Fee",  amount: "$250/mo",     note: "Best when running 1–2 cohorts per month", recommended: true },
    { name: "Revenue Share",     amount: "15% of gross", note: "No upfront cost — best when starting out", recommended: false },
    { name: "Annual License",    amount: "$2,400/yr",    note: "Two months free — best for committed facilitators", recommended: false },
  ],
  included: [
    "Full Level 1 curriculum with session guides and participant workbooks",
    "Build Anyway brand use and Certified Facilitator designation",
    "Listing in the national facilitator directory on ferreiracto.com",
    "Quarterly group calls with Peter and the facilitator network",
    "Access to updated curriculum materials as they evolve",
    "Co-marketing support for first facility outreach",
    "Access to scholarship fund for subsidizing seats in your market",
  ],
  notIncluded: [
    "Level 2 or Level 3 curriculum — separate license, available Year 2",
    "Legal or clinical support — facilitators are not therapists",
    "Guaranteed facility placements — you run your own outreach",
  ],
};

// ── FOOTER ────────────────────────────────────────────────────

export const footer = {
  tagline: "Build Anyway.",
  subtext: "Ferreira CTO · Stow, MA",
  links: [
    { label: "Build Anyway",     href: "/build-anyway" },
    { label: "For Directors",    href: "/build-anyway/for-directors" },
    { label: "Three Levels",     href: "/build-anyway/levels" },
    { label: "Before the Rewrite", href: "/podcast" },
  ],
  legal: `© ${new Date().getFullYear()} Ferreira CTO. All rights reserved.`,
};
