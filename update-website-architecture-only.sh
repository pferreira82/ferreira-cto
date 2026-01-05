#!/bin/bash

# Website Update Script - Architecture Reviews ONLY
# Focused positioning: One service, clear value, realistic pricing
# Run from project root: bash update-website-architecture-only.sh

set -e  # Exit on error

echo "🎯 Updating Ferreira CTO website - ARCHITECTURE REVIEWS ONLY..."

# ============================================================================
# UPDATE MAIN PAGE (app/page.tsx) - COMPLETE FILE
# ============================================================================
echo "📄 Updating main page..."

cat > app/page.tsx << 'EOFPAGE'
'use client';
import { ArrowRight, CheckCircle, Zap, Shield, Target, Heart, Activity, FileCheck, Clock, Network } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import CaseStudyCard, { CaseStudy } from "@/components/CaseStudyCard";

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "orbcare-elder",
    title: "OrbCare — Health Monitoring Robot I'm Building",
    excerpt: "HIPAA-compliant health monitoring system using edge AI for infant and elderly care. Demonstrates my hands-on experience with edge computing, real-time systems, privacy-by-design, and PHI handling.",
    image: "/images/case-orbcare.svg",
    tags: ["Edge Computing", "Robotics", "HIPAA/PHI", "Real-Time Systems"],
    metrics: [
      { label: "Processing", value: "100% Local" },
      { label: "Response Time", value: "< 1s" }
    ]
  },
  {
    slug: "lumi",
    title: "Lumi — AI Health Concierge (Personal Project)",
    excerpt: "Conversational AI for health tracking and medication adherence. Experience with AI architecture, health data integration, and building HIPAA-compliant systems from scratch.",
    image: "/images/case-lumi.svg",
    tags: ["Conversational AI", "HIPAA Compliance", "Digital Health"],
    metrics: [
      { label: "Architecture", value: "Privacy-First" },
      { label: "Data Handling", value: "Edge-First" }
    ]
  }
];

const WHO_I_WORK_WITH = [
  {
    icon: Target,
    title: "Hardware-First Startups",
    description: "Robotics, IoT, and edge AI companies that need architecture reviews before they scale. You're building something that processes data at the edge, works when networks fail, and needs to handle sensitive information correctly."
  },
  {
    icon: Shield,
    title: "Technical Founders",
    description: "You know your domain but need an outside technical assessment. Someone who's built edge-first systems to review your architecture and identify risks before they become expensive rewrites."
  },
  {
    icon: Activity,
    title: "Pre-Series A Teams",
    description: "Raising capital soon and need to answer: 'Will this architecture scale to 1,000 units?' or 'How do you handle privacy/compliance?' I help you get those answers before investors ask."
  }
];

const WHAT_I_BRING = [
  {
    icon: Activity,
    title: "Hardware + Software Experience",
    description: "Early exposure to manufacturing and automation, 10 years in software development, now building robotics with OrbCare. I understand both sides of hardware-first architecture."
  },
  {
    icon: Shield,
    title: "HIPAA & Privacy Expertise",
    description: "Hands-on experience building HIPAA-compliant systems with edge-first, privacy-by-design architecture. I know what survives regulatory scrutiny because I've built it."
  },
  {
    icon: Target,
    title: "Edge-First Architecture",
    description: "Deep experience with real-time systems, edge computing, and building devices that work when networks fail. This is what I'm building with OrbCare—systems that function offline."
  },
  {
    icon: Network,
    title: "Scalability Assessment",
    description: "I can identify architectural decisions that will break at 100 units, 1,000 units, or 10,000 units. Better to know now than during Series B when rewrites cost millions."
  }
];

const REVIEW_DELIVERABLES = [
  {
    title: "Current Architecture Assessment",
    items: [
      "Complete architecture diagram (current state)",
      "Edge vs cloud processing analysis",
      "Real-time system and data flow evaluation",
      "Hardware-software integration review"
    ]
  },
  {
    title: "Risk & Scalability Analysis",
    items: [
      "Technical risks prioritized by impact",
      "Scalability assessment (100 → 1,000 → 10,000 units)",
      "Failure modes and reliability gaps",
      "Privacy and data handling review (HIPAA/PHI if applicable)"
    ]
  },
  {
    title: "Recommendations & Roadmap",
    items: [
      "Specific architecture improvements with priority rankings",
      "30/60/90-day implementation roadmap",
      "Build vs buy guidance for critical components",
      "Technical debt management strategy"
    ]
  }
];

export default function Home() {
  return (
    <div className="relative">
      <Header />
      
      {/* HERO SECTION */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
            <Activity className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">2-Week Architecture Reviews for Hardware-First Startups</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight">
            Identify the $500K+ Mistakes Before They Happen
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            I do 2-week technical architecture reviews for hardware-first startups building robotics, IoT, and edge AI systems. 
            <span className="text-blue-300 font-semibold"> Get clarity on what will scale and what won't—before your Series A.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="#how-it-works"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-all"
            >
              See How It Works
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 hover:border-blue-500 rounded-lg font-semibold transition-all"
            >
              Schedule a Call
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span>Edge vs Cloud Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span>Scalability to 1,000+ Units</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span>Privacy & Compliance Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <Section id="clients" title="Who This Is For" subtitle="Hardware-first startups that need architecture clarity before they scale">
        <div className="grid md:grid-cols-3 gap-8">
          {WHO_I_WORK_WITH.map((client, idx) => {
            const Icon = client.icon;
            return (
              <div key={idx} className="group p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 bg-slate-900/50 hover:bg-slate-800/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-all">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{client.title}</h3>
                <p className="text-slate-400 leading-relaxed">{client.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* WHAT I BRING */}
      <Section 
        id="approach" 
        title="Why I Can Help" 
        subtitle="I'm building the same types of systems you are"
      >
        <div className="max-w-3xl mx-auto mb-12">
          <div className="p-8 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-slate-900/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">The Background</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  I learned CAD and CNC machinery at seven, watching someone with three years of formal education build systems for nuclear submarines. That taught me technology is for anyone willing to learn and work hard.
                </p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Then I spent ten years mastering software development. And now I'm back building robotics with OrbCare—a HIPAA-compliant health monitoring system that processes everything at the edge.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  <span className="text-blue-300 font-semibold">The interesting problems are where hardware and software collide.</span> Most startups treat their robots like web apps—and pay for it at Series B with expensive rewrites. I help you avoid that by reviewing your architecture before it becomes too expensive to fix.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_I_BRING.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-blue-500/50 transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how-it-works" title="How It Works" subtitle="A structured 2-3 week process to assess your architecture and identify risks">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Week-by-week timeline */}
          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Week 1: Discovery & Analysis</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Kickoff call (60 mins) to understand your system, challenges, and goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Review architecture docs, codebase, and infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Interview 2-3 key engineers (30 mins each)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Technical deep dive on critical components</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-400">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Week 2: Assessment & Evaluation</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Identify architectural risks and bottlenecks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Evaluate edge vs cloud processing decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Review real-time system design and data flows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Assess scalability (100 → 1,000 → 10,000 units)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Security and privacy review (HIPAA/PHI if applicable)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-400">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Week 3: Deliverable & Presentation</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Written report (15-20 pages) with architecture diagrams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Risk assessment with red/yellow/green prioritization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Specific recommendations with implementation estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>30/60/90-day remediation roadmap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Presentation call (90 mins) with founders and team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>30 days of email support for questions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* What you get */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">What You'll Get</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {REVIEW_DELIVERABLES.map((section, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                  <h4 className="font-bold mb-4 text-blue-300">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing" title="Pricing" subtitle="Clear, straightforward pricing for a 2-3 week engagement">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-slate-900/50 mb-8">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold mb-2">$15,000</div>
              <div className="text-slate-400">Standard Architecture Review</div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Complete 2-3 week architecture assessment</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Comprehensive written report with diagrams</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Risk assessment and prioritized recommendations</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">30/60/90-day implementation roadmap</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Presentation to founders and team</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">30 days of email support</span>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-all"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Optional Add-ons */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-center mb-4">Optional Add-Ons</h3>
            
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold">HIPAA Compliance Deep Dive</h4>
                <span className="text-blue-400 font-semibold">+$5,000</span>
              </div>
              <p className="text-sm text-slate-400">Detailed compliance gap analysis and implementation roadmap for HIPAA certification</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold">Pitch Deck Technical Slides</h4>
                <span className="text-blue-400 font-semibold">+$2,500</span>
              </div>
              <p className="text-sm text-slate-400">Investor-ready architecture diagrams and technical risk mitigation slides</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold">Implementation Support (per week)</h4>
                <span className="text-blue-400 font-semibold">+$3,000</span>
              </div>
              <p className="text-sm text-slate-400">Hands-on help executing recommendations (can lead to ongoing fractional CTO arrangement)</p>
            </div>
          </div>

          {/* Special Offer */}
          <div className="mt-8 p-6 rounded-xl bg-blue-500/10 border border-blue-500/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Early Client Offer</h4>
                <p className="text-slate-300 mb-4">
                  For my first 3 clients: <span className="text-blue-300 font-semibold">$12,500</span> (instead of $15,000) in exchange for a detailed testimonial and permission to use your project as a case study.
                </p>
                <p className="text-sm text-slate-400">
                  This helps me build proof while you get the same thorough architecture review at a discount.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PROOF OF EXPERTISE */}
      <Section 
        id="expertise" 
        title="Technical Proof Points" 
        subtitle="Systems I'm building that demonstrate hands-on experience with edge-first, privacy-by-design architecture"
      >
        <div className="mb-8 p-6 rounded-xl bg-slate-800/50 border border-slate-700">
          <p className="text-slate-300 leading-relaxed">
            These aren't consulting projects—they're systems I'm actively building. They demonstrate my hands-on technical expertise 
            in the exact problems hardware-first startups face: edge computing, real-time processing, privacy-by-design, and HIPAA compliance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.slug} caseStudy={study} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-400">
            Want to see the technical architecture decisions behind these projects?{" "}
            <a href="#contact" className="text-blue-400 hover:text-blue-300 font-semibold">
              Let's talk about your architecture challenges
            </a>
          </p>
        </div>
      </Section>

      {/* QUESTIONS ANSWERED */}
      <Section title="Questions I Can Answer" subtitle="The specific architecture problems I help hardware-first startups solve">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
            <h3 className="font-bold mb-3 text-blue-300">Edge vs Cloud</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>"What processing should happen on-device vs in the cloud?"</li>
              <li>"Will our architecture work when the network goes down?"</li>
              <li>"How do we handle offline-first with cloud sync?"</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
            <h3 className="font-bold mb-3 text-blue-300">Scalability</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>"Will this architecture scale to 1,000 units?"</li>
              <li>"What breaks when we go from 10 devices to 1,000?"</li>
              <li>"Are we making decisions that require a $2M rewrite later?"</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
            <h3 className="font-bold mb-3 text-blue-300">Privacy & Compliance</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>"How do we add HIPAA compliance without rebuilding everything?"</li>
              <li>"Is our data handling privacy-by-design or a retrofit?"</li>
              <li>"What's our exposure if there's a privacy breach?"</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
            <h3 className="font-bold mb-3 text-blue-300">Technical Risk</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>"What are our biggest technical risks before Series A?"</li>
              <li>"Which decisions are reversible and which are permanent?"</li>
              <li>"What will investors ask about our architecture?"</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* WHY THIS APPROACH WORKS */}
      <Section title="Why This Works" subtitle="The advantages of working with someone who's building the same types of systems">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-400" />
              I've Made These Decisions
            </h3>
            <p className="text-slate-300 mb-4">
              Building OrbCare, I've faced the exact same choices: edge vs cloud, offline-first design, HIPAA compliance, 
              real-time processing. I'm not giving you theoretical advice—I'm sharing what actually works.
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Edge-first architecture with cloud analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>HIPAA compliance from day one (not retrofitted)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Real-time processing with sub-1s latency</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
              <Target className="w-6 h-6 text-blue-400" />
              Focused on Your Success
            </h3>
            <p className="text-slate-300 mb-4">
              I'm launching Ferreira CTO with architecture reviews as the core offering. You get someone who's invested in 
              delivering excellent work and building a reputation—not someone phoning it in between other clients.
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Honest about what I know vs when to bring in specialists</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Fast turnaround (2-3 weeks, not months)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Clear, actionable recommendations (not generic advice)</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* WHAT HAPPENS NEXT */}
      <Section title="What Happens Next" subtitle="Simple process to get started">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
              <span className="font-bold text-blue-400">1</span>
            </div>
            <div>
              <h4 className="font-bold mb-1">Schedule a Call</h4>
              <p className="text-slate-400">30-minute discovery call to understand your system and challenges</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
              <span className="font-bold text-blue-400">2</span>
            </div>
            <div>
              <h4 className="font-bold mb-1">Proposal & Timeline</h4>
              <p className="text-slate-400">I'll send a proposal with scope, timeline, and any recommended add-ons</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
              <span className="font-bold text-blue-400">3</span>
            </div>
            <div>
              <h4 className="font-bold mb-1">Kickoff</h4>
              <p className="text-slate-400">We start the review within 1 week of agreement</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
              <span className="font-bold text-blue-400">4</span>
            </div>
            <div>
              <h4 className="font-bold mb-1">Delivery</h4>
              <p className="text-slate-400">Complete report and presentation in 2-3 weeks</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT FORM */}
      <Section id="contact" title="Let's Talk" subtitle="Tell me about your architecture challenges">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
          
          <div className="mt-8 text-center">
            <p className="text-slate-400 mb-4">Prefer email or LinkedIn?</p>
            <div className="flex justify-center gap-6">
              <a 
                href="mailto:peter@ferreiracto.com" 
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                peter@ferreiracto.com
              </a>
              <span className="text-slate-600">|</span>
              <a 
                href="https://linkedin.com/in/pferreira82" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold"
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
EOFPAGE

echo ""
echo "✅ Website updated - ARCHITECTURE REVIEWS ONLY!"
echo ""
echo "🎯 KEY CHANGES:"
echo ""
echo "REMOVED:"
echo "  ❌ FDA & Regulatory Readiness service"
echo "  ❌ Fractional CTO service"
echo "  ❌ Technical Due Diligence positioning"
echo "  ❌ Multiple pricing tiers"
echo "  ❌ Expert network language"
echo ""
echo "KEPT:"
echo "  ✅ Architecture Reviews ONLY"
echo "  ✅ Single clear pricing: $15,000"
echo "  ✅ Early client discount: $12,500"
echo "  ✅ Simple add-ons (HIPAA, pitch deck, implementation)"
echo "  ✅ OrbCare and Lumi as proof points"
echo "  ✅ Honest 'launching' language"
echo ""
echo "💰 PRICING STRUCTURE:"
echo ""
echo "  Standard: $15,000"
echo "  └─ 2-3 week architecture review"
echo "  └─ Complete deliverable package"
echo "  └─ 30 days email support"
echo ""
echo "  Early Client: $12,500 (first 3 clients)"
echo "  └─ Same service"
echo "  └─ Requires testimonial + case study permission"
echo ""
echo "  Optional Add-ons:"
echo "  ├─ HIPAA Deep Dive: +$5,000"
echo "  ├─ Pitch Deck Slides: +$2,500"
echo "  └─ Implementation Support: +$3,000/week"
echo ""
echo "🎤 YOUR ONE-SENTENCE PITCH:"
echo ""
echo "  'I do 2-week architecture reviews for hardware-first startups"
echo "  to identify the $500K+ mistakes before they happen.'"
echo ""
echo "📞 IN DISCOVERY CALLS, YOU SAY:"
echo ""
echo "  'I'm launching Ferreira CTO focused on architecture reviews for"
echo "  hardware-first startups. I'm building OrbCare, a HIPAA-compliant"
echo "  edge AI system, so I understand the exact decisions you're facing."
echo "  Standard review is $15K for 2-3 weeks. For my first few clients,"
echo "  I'm offering $12,500 in exchange for a testimonial.'"
echo ""
echo "✨ WHY THIS IS BETTER:"
echo ""
echo "  1. CRYSTAL CLEAR - One service, one price, easy decision"
echo "  2. FOCUSED - You can deliver this excellently with limited time"
echo "  3. CREDIBLE - OrbCare proves you can build what you're reviewing"
echo "  4. HONEST - Not pretending to offer services you can't deliver yet"
echo "  5. UPSELL PATH - Add-ons can naturally lead to fractional work"
echo "  6. SCALABLE - First 3 clients = 3 case studies = foundation for everything else"
echo ""
echo "🚀 NEXT STEPS:"
echo ""
echo "  1. Review the updated copy"
echo "  2. Test locally: npm run dev"
echo "  3. Make any final adjustments"
echo "  4. Deploy: git add . && git commit -m 'Focus on architecture reviews only' && git push"
echo "  5. Start your Apollo outreach with ONE clear message"
echo ""
echo "💡 REMEMBER:"
echo ""
echo "  This isn't limiting yourself - this is being strategic."
echo "  Once you have 3-5 architecture reviews done, THEN you can add:"
echo "  • Fractional CTO (natural upsell from good reviews)"
echo "  • Due Diligence (VCs will approach you with case studies)"
echo "  • Regulatory consulting (with specialists you've worked with)"
echo ""
echo "  But right now? ONE THING. Do it excellently. Build proof."
echo ""
