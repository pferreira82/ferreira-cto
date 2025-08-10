'use client';
import { ArrowRight, CheckCircle, Zap, Shield, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import CaseStudyCard, { CaseStudy } from "@/components/CaseStudyCard";

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "lumi",
    title: "Lumi — Sober Concierge Chatbot",
    excerpt: "Conversational AI supporting moms with motivation, resources, and recommendations. Built with Node.js and ChatGPT API, featuring Firebase storage and extensive context memory.",
    image: "/images/case-lumi.svg",
    tags: ["AI", "Chatbot", "Firebase", "Node.js"],
    metrics: [
      { label: "Context Window", value: "10K msgs" },
      { label: "Channels", value: "Web, SMS" }
    ]
  },
  {
    slug: "orbcare",
    title: "OrbCare — Infant Health Robotics",
    excerpt: "Orb-shaped companion robot monitoring infant vitals and growth with Jetson Orin Nano, ToF LiDAR, haptic feedback, and voice assistant capabilities.",
    image: "/images/case-orbcare.svg",
    tags: ["Robotics", "Jetson", "Edge AI", "LiDAR"],
    metrics: [
      { label: "Sensors", value: "12+" },
      { label: "Latency", value: "<100ms" }
    ]
  },
  {
    slug: "nanotech-ai",
    title: "Nanotech AI — Material Property Prediction",
    excerpt: "AI platform predicting nanomaterial properties for genetic repair and anti-aging applications. Advanced ML pipeline design with cloud inference infrastructure.",
    image: "/images/case-nanotech.svg",
    tags: ["ML", "MLOps", "Cloud", "Materials"],
    metrics: [
      { label: "Accuracy", value: "94.2%" },
      { label: "Models", value: "15+" }
    ]
  },
  {
    slug: "chatbots-in-a-box",
    title: "Chatbots-in-a-Box — Vertical AI Concierge",
    excerpt: "SaaS platform providing industry-specific chatbot templates for restaurants, spas, and farms with shared models and tailored conversation flows.",
    image: "/images/case-chatbots.svg",
    tags: ["SaaS", "AI", "Templates", "Multi-tenant"],
    metrics: [
      { label: "Industries", value: "8+" },
      { label: "Templates", value: "25+" }
    ]
  }
];

const SERVICES = [
  {
    icon: Target,
    title: "Architecture & Strategy",
    description: "Choose the right stack, map technical milestones, and de-risk with targeted proofs-of-concept."
  },
  {
    icon: Zap,
    title: "MVP & Rapid Prototyping",
    description: "Ship polished MVPs quickly, gather real user feedback, and iterate with data-driven priorities."
  },
  {
    icon: Shield,
    title: "AI & Robotics Expertise",
    description: "From LLM integrations to Jetson-powered robots and sophisticated edge AI processing pipelines."
  }
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Audit",
    description: "Deep dive into your goals, constraints, and current technical landscape to identify opportunities."
  },
  {
    step: "02",
    title: "Strategy & Roadmap",
    description: "Comprehensive architecture planning with clear milestones, risk assessment, and success metrics."
  },
  {
    step: "03",
    title: "Build & Iterate",
    description: "Ship the core product, implement analytics and monitoring, then iterate weekly based on data."
  }
];

// Define scroll function outside component to avoid any scoping issues
const scrollToElement = (id: string) => {
  console.log('Scroll function called with:', id);
  const element = document.getElementById(id);
  console.log('Found element:', element);

  if (element) {
    // Simple approach - just scroll to element
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    console.error('Element not found:', id);
  }
};

export default function HomePage() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/20 via-transparent to-brand-800/20" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-300 mb-8">
                <Zap size={16} />
                Fractional CTO for AI, Robotics & SaaS
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                Strategy, architecture, and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
                  momentum
                </span>{" "}
                for ambitious products.
              </h1>

              <p className="text-xl text-slate-300 mt-8 leading-relaxed max-w-2xl text-balance">
                I help founders ship faster and smarter: picking the right stack, 
                building the core architecture, and establishing processes that scale with your vision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <button 
                  type="button"
                  onClick={() => {
                    console.log('BUTTON 1 CLICKED!!!');
                    scrollToElement('contact');
                  }}
                  style={{ cursor: 'pointer' }}
                  className="btn-primary flex items-center gap-2 justify-center"
                >
                  Start a Project
                  <ArrowRight size={16} />
                </button>
                <button 
                  type="button"
                  onClick={() => {
                    console.log('BUTTON 2 CLICKED!!!');
                    scrollToElement('case-studies');
                  }}
                  style={{ cursor: 'pointer' }}
                  className="btn-secondary flex items-center gap-2 justify-center"
                >
                  View Case Studies
                </button>
              </div>

              <dl className="grid grid-cols-2 gap-8 mt-16 text-sm">
                <div className="space-y-2">
                  <dt className="text-slate-400 font-medium">Specialties</dt>
                  <dd className="font-semibold text-lg">AI/ML, Robotics, SaaS</dd>
                </div>
                <div className="space-y-2">
                  <dt className="text-slate-400 font-medium">Based in</dt>
                  <dd className="font-semibold text-lg">Massachusetts, USA</dd>
                </div>
              </dl>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative h-[500px] w-full flex items-center justify-center">
                <img 
                  src="/images/hero-visualization.svg" 
                  alt="Technical architecture visualization"
                  className="w-full h-full object-contain drop-shadow-2xl" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <Section
        id="services"
        eyebrow="What I Do"
        title="Fractional CTO that moves the needle"
        subtitle="Hands-on technical leadership with a builder's mindset and startup experience."
      >
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.title} className="group card p-8 hover:border-brand-500/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/20 group-hover:bg-brand-500/20 transition-colors">
                    <IconComponent size={24} className="text-brand-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "SaaS Foundations & Architecture",
            "Team Building & Process Design", 
            "Advisory & Strategic Consulting"
          ].map((service) => (
            <div key={service} className="card p-6 text-center">
              <CheckCircle size={20} className="text-brand-400 mx-auto mb-3" />
              <h4 className="font-medium">{service}</h4>
            </div>
          ))}
        </div>
      </Section>

      {/* CASE STUDIES SECTION */}
      <Section
        id="case-studies"
        eyebrow="Recent Work"
        title="Selected case studies"
        subtitle="A showcase of recent projects that demonstrate technical depth and business impact."
      >
        <div className="grid md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </Section>

      {/* PROCESS SECTION */}
      <Section
        id="process"
        eyebrow="How We Work"
        title="Clear process, fast feedback loops"
        subtitle="Lightweight methodologies designed to maintain high momentum while ensuring quality."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.step} className="relative">
              <div className="card p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-500/20 border border-brand-500/30">
                    <span className="text-brand-300 font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">{step.description}</p>
              </div>

              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-brand-500 to-transparent transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT SECTION */}
      <Section
        id="contact"
        eyebrow="Get Started"
        title="Tell me about your project"
        subtitle="I take on a limited number of new clients each quarter to ensure focused, high-quality engagement."
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ContactForm />

          <div className="space-y-8">
            <div className="card p-8">
              <h3 className="text-xl font-semibold mb-6">Typical Engagement</h3>
              <ul className="space-y-4 text-slate-300">
                {[
                  "Part-time CTO (1–2 days/week) or project-based work",
                  "Weekly strategic check-ins with async Slack updates", 
                  "Transparent roadmap with measurable milestones",
                  "Time-to-first-demo under 3 weeks for most MVPs"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-brand-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-8">
              <h4 className="font-semibold mb-4">Technology Stack</h4>
              <p className="text-slate-300 leading-relaxed">
                Next.js, React, Node.js, Python, TypeScript, CUDA/Jetson, 
                Firebase, PostgreSQL, MongoDB, AWS, GCP, Vercel, Docker, 
                and modern AI/ML frameworks.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}