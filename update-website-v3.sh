#!/bin/bash

# Website Update Script v3 - Team Orchestration Focus
# Positioning: Technical quarterback who assembles expert teams
# Key differentiation: Curated specialist network vs. solo consultant
# Run this from your project root: bash update-website-v3-team-approach.sh

set -e  # Exit on error

echo "🚀 Updating Ferreira CTO website with team orchestration positioning..."

# ============================================================================
# 1. UPDATE METADATA (app/layout.tsx)
# ============================================================================
echo "📝 Updating metadata..."

cat > app/layout.tsx << 'EOF'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: {
    default: "Ferreira CTO — Technical Due Diligence for Longevity & Health Robotics",
    template: "%s | Ferreira CTO"
  },
  description: "Technical due diligence, regulatory readiness, and fractional CTO services for longevity biotech, elder care robotics, and digital health companies. FDA/HIPAA expertise with curated specialist network.",
  keywords: ["Technical Due Diligence", "Longevity", "Health Robotics", "Elder Care", "FDA", "Regulatory Readiness", "Fractional CTO", "Biotech", "Digital Health"],
  authors: [{ name: "Ferreira CTO" }],
  creator: "Ferreira CTO",
  metadataBase: new URL("https://ferreiracto.com"),
  openGraph: {
    title: "Ferreira CTO — Technical Advisory for Longevity & Health Robotics",
    description: "Technical due diligence and regulatory readiness for longevity and health robotics investments.",
    type: "website",
    locale: "en_US",
    siteName: "Ferreira CTO"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferreira CTO — Technical Due Diligence for Longevity",
    description: "Technical advisory for longevity biotech and health robotics companies"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white antialiased ${inter.className}`}>
        <div className="gradient-mesh min-h-screen">
          {children}
          <SpeedInsights />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
EOF

# ============================================================================
# 2. UPDATE MAIN PAGE (app/page.tsx)
# ============================================================================
echo "📄 Updating main page with team orchestration messaging..."

cat > app/page.tsx << 'EOF'
'use client';
import { ArrowRight, CheckCircle, Zap, Shield, Target, Heart, Activity, FileCheck, Clock, Users, TrendingUp, Network } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import CaseStudyCard, { CaseStudy } from "@/components/CaseStudyCard";

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "orbcare-elder",
    title: "OrbCare — Autonomous Health Monitoring Robot",
    excerpt: "Medical device architecture for autonomous elder care robot with 12+ vital sensors, fall detection, and edge AI. Demonstrates deep expertise in embedded medical systems, FDA design controls, and edge computing for healthcare.",
    image: "/images/case-orbcare.svg",
    tags: ["Medical Devices", "Robotics", "FDA Design Controls", "Edge AI"],
    metrics: [
      { label: "Vital Sensors", value: "12+" },
      { label: "Response Time", value: "< 2s" }
    ]
  },
  {
    slug: "lumi",
    title: "Lumi — AI Health Concierge for Chronic Care",
    excerpt: "HIPAA-compliant conversational AI platform for chronic condition management and medication adherence. Experience with clinical validation strategies, multi-modal health data integration, and care coordination systems.",
    image: "/images/case-lumi.svg",
    tags: ["Conversational AI", "HIPAA Compliance", "Digital Health", "Clinical Validation"],
    metrics: [
      { label: "Context Memory", value: "10K msgs" },
      { label: "Adherence Lift", value: "+47%" }
    ]
  },
  {
    slug: "nanotech-ai",
    title: "Nanotech AI — Longevity Materials Discovery",
    excerpt: "ML platform for discovering biocompatible nanomaterials for life extension applications. Research-grade ML infrastructure, materials informatics, and longevity biotech product development experience.",
    image: "/images/case-nanotech.svg",
    tags: ["ML Infrastructure", "Materials Science", "Longevity Biotech", "Research Platforms"],
    metrics: [
      { label: "Model Accuracy", value: "94.2%" },
      { label: "Candidates", value: "5K+" }
    ]
  },
  {
    slug: "biomarker-platform",
    title: "Multimodal Biomarker Analysis Platform",
    excerpt: "Health data integration platform combining wearables, labs, and genetic data for predictive longevity insights. FHIR/HL7 standards expertise, regulatory-grade data pipelines, and real-time health analytics.",
    image: "/images/case-biomarker.svg",
    tags: ["Data Integration", "FHIR/HL7", "Predictive Analytics", "Health Platforms"],
    metrics: [
      { label: "Data Sources", value: "25+" },
      { label: "Processing", value: "Real-time" }
    ]
  }
];

const CONSULTING_PACKAGES = [
  {
    icon: FileCheck,
    title: "Technical Due Diligence",
    price: "$25K–$75K",
    duration: "1–3 weeks",
    description: "Comprehensive technical risk assessment with the right specialists. I orchestrate experts in regulatory, security, and clinical domains to give you the full picture.",
    deliverables: [
      "Architecture & scalability deep-dive",
      "Regulatory compliance assessment (FDA, HIPAA, GxP)",
      "IP evaluation and competitive moat analysis",
      "Team capability & technical debt review",
      "Expert specialist reports (regulatory, security, clinical as needed)",
      "Risk-prioritized remediation roadmap",
      "Investor-ready executive summary with go/no-go recommendation"
    ],
    idealFor: "VCs, angels, and family offices evaluating longevity biotech, elder care robotics, or digital health investments.",
    cta: "De-risk your next investment"
  },
  {
    icon: Shield,
    title: "Regulatory & AI Readiness",
    price: "$15K–$45K",
    duration: "2–4 weeks",
    description: "Get FDA-ready faster by working with my network of regulatory consultants, QA specialists, and validation experts. I coordinate the right team for your specific pathway.",
    deliverables: [
      "Gap analysis vs FDA AI/ML guidance (with regulatory consultant)",
      "Data lineage, provenance & audit trail architecture",
      "Model governance framework and change control",
      "HIPAA/GxP compliance architecture review",
      "Validation SOP templates and test protocols",
      "Specialist introductions (FDA strategy, clinical validation, security)",
      "90-day implementation roadmap with resource estimates"
    ],
    idealFor: "Health-tech startups building AI/ML systems preparing for clinical validation, 510(k), or De Novo submissions.",
    cta: "Fast-track your FDA readiness"
  },
  {
    icon: Clock,
    title: "Fractional Engineering Leadership",
    price: "$8K–$15K/mo",
    duration: "1–2 days/week",
    description: "Ongoing technical leadership with access to my specialist network. Get CTO-level guidance plus connections to experts when you need deeper domain knowledge.",
    deliverables: [
      "Weekly engineering leadership & architecture decisions",
      "Build vs buy analysis for critical infrastructure",
      "Regulatory compliance strategy (with specialist support)",
      "Technical hiring and team scaling guidance",
      "Investor relations support (tech due diligence prep)",
      "Quarterly strategic technology roadmap updates",
      "On-demand specialist introductions (security, regulatory, clinical)"
    ],
    idealFor: "Seed to Series A longevity/health-tech startups needing strategic technical guidance without a full-time CTO.",
    cta: "Get CTO-level guidance"
  }
];

const WHO_I_WORK_WITH = [
  {
    icon: TrendingUp,
    title: "VCs & Angels",
    description: "I assemble technical assessment teams for longevity biotech and health robotics investments. You get comprehensive due diligence without managing multiple vendors—I coordinate the right specialists and synthesize their findings."
  },
  {
    icon: Target,
    title: "Founders & CTOs",
    description: "I connect you with the right experts for FDA submissions, security audits, and clinical validation. Think of me as your technical quarterback who knows exactly who to bring in and when."
  },
  {
    icon: Shield,
    title: "Technical Leaders",
    description: "Get strategic guidance plus access to my curated network of regulatory consultants, security experts, and clinical specialists. Fractional CTO services with a full bench of domain experts behind me."
  }
];

const EXPERT_NETWORK_AREAS = [
  {
    icon: Shield,
    title: "FDA & Regulatory Strategy",
    description: "Consultants who've guided 50+ medical device submissions through 510(k), De Novo, and PMA pathways."
  },
  {
    icon: Activity,
    title: "Clinical Validation & QA",
    description: "Clinical specialists and QA professionals experienced in digital health studies and medical device testing."
  },
  {
    icon: Network,
    title: "Cybersecurity & Compliance",
    description: "Security auditors specializing in HIPAA, medical device security (FDA premarket), and health data protection."
  },
  {
    icon: Users,
    title: "Domain Experts",
    description: "PhDs and MDs in longevity research, geriatrics, materials science, and health robotics for specialized technical questions."
  }
];

export default function Home() {
  return (
    <div className="relative">
      <Header />
      
      {/* HERO SECTION - TEAM ORCHESTRATION FOCUS */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
            <Activity className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Your Technical Quarterback for Longevity & Health Robotics</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight">
            Technical Due Diligence for Longevity & Health Robotics Investments
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            I assemble the right technical and regulatory experts to de-risk your investments. 
            <span className="text-blue-300 font-semibold"> Your technical quarterback for FDA pathways, HIPAA compliance, and health-tech architecture—bringing in specialists when you need them most.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="#consulting"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-all"
            >
              View Consulting Services
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
              <span>FDA/510(k) Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span>HIPAA-Compliant Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span>Curated Expert Network</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <Section id="clients" title="Who I Work With" subtitle="Specialized technical advisory for the longevity and health robotics ecosystem">
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

      {/* HOW I WORK - NEW SECTION */}
      <Section 
        id="approach" 
        title="How I Work" 
        subtitle="Your technical quarterback who orchestrates expert teams"
      >
        <div className="max-w-3xl mx-auto mb-12">
          <div className="p-8 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-slate-900/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Network className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">I Don't Pretend to Know Everything—And That's the Point</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  The longevity and health robotics space is too complex for any one person to be the expert in everything. 
                  FDA regulatory strategy, cybersecurity compliance, clinical validation, materials science—each requires deep domain expertise.
                </p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <span className="text-blue-300 font-semibold">My value is knowing exactly which specialists to bring in and when.</span> I've built relationships with top-tier regulatory consultants, security auditors, clinical researchers, and domain experts. When you work with me, you get:
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>One point of contact</strong> instead of managing multiple vendors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Pre-vetted specialists</strong> who I've worked with on similar projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Coordinated deliverables</strong> that actually answer your questions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Honest guidance</strong>—if I don't know something, I'll tell you and find someone who does</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERT_NETWORK_AREAS.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div key={idx} className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-blue-500/50 transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="font-bold mb-2">{area.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CONSULTING PACKAGES */}
      <Section id="consulting" title="Consulting Services" subtitle="Fixed-scope engagements with expert team coordination included">
        <div className="grid md:grid-cols-3 gap-8">
          {CONSULTING_PACKAGES.map((pkg, idx) => {
            const Icon = pkg.icon;
            return (
              <div key={idx} className="group relative p-8 rounded-2xl border border-slate-800 hover:border-blue-500 bg-gradient-to-br from-slate-900 to-slate-950 hover:shadow-2xl hover:shadow-blue-500/10 transition-all">
                <div className="absolute -top-3 -right-3 px-4 py-1 bg-blue-600 rounded-full text-sm font-semibold">
                  {pkg.duration}
                </div>
                
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
                  <Icon className="w-7 h-7 text-blue-400" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">{pkg.price}</div>
                <p className="text-slate-300 mb-6 leading-relaxed">{pkg.description}</p>
                
                <div className="space-y-3 mb-6">
                  {pkg.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-400">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 mb-6">
                  <p className="text-sm text-slate-300"><span className="font-semibold text-blue-400">Ideal for:</span> {pkg.idealFor}</p>
                </div>
                
                <a 
                  href="#contact"
                  className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-all w-full justify-center"
                >
                  {pkg.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Need Something Custom?</h4>
              <p className="text-slate-300 mb-4">
                I also offer custom engagements for technical architecture reviews, team capability assessments, and regulatory strategy development. I'll bring in the right specialists for your specific situation.
              </p>
              <a href="#contact" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-2">
                Schedule a consultation <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* CASE STUDIES */}
      <Section 
        id="expertise" 
        title="Technical Expertise" 
        subtitle="Hands-on experience building longevity and health robotics systems"
      >
        <div className="mb-8 p-6 rounded-xl bg-slate-800/50 border border-slate-700">
          <p className="text-slate-300 leading-relaxed">
            These case studies demonstrate my hands-on technical expertise in medical device architecture, FDA regulatory pathways, 
            HIPAA-compliant systems, and edge AI for healthcare. This depth of knowledge—combined with my expert network—ensures 
            comprehensive assessments and actionable recommendations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.slug} caseStudy={study} />
          ))}
        </div>
      </Section>

      {/* WHY WORK WITH ME */}
      <Section title="Why This Approach Works" subtitle="The advantages of working with a technical orchestrator">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-400" />
              For Investors
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>One comprehensive assessment instead of managing multiple consultants</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Pre-vetted specialists who know the longevity/health robotics space</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Synthesized findings with clear go/no-go recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Deep technical expertise plus domain specialist insights</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
              <Target className="w-6 h-6 text-blue-400" />
              For Founders
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Access to top regulatory and clinical experts without the search</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Coordinated guidance from technical + regulatory + clinical perspectives</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Build relationships with specialists you might hire later</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Transparent about what I know vs. when to bring in experts</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <div className="flex items-center gap-4">
            <Heart className="w-8 h-8 text-blue-400 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-bold mb-1">Mission-Aligned</h4>
              <p className="text-slate-300">
                I'm deeply committed to extending healthspan and improving elder care through technology. 
                This isn't just consulting—it's advancing a mission I'm personally invested in through my own longevity health-tech products. 
                When I bring in specialists, they share this commitment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT FORM */}
      <Section id="contact" title="Start a Conversation" subtitle="Let's discuss your technical due diligence needs and which specialists might be helpful">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
          
          <div className="mt-8 text-center">
            <p className="text-slate-400 mb-4">Prefer email or LinkedIn?</p>
            <div className="flex justify-center gap-6">
              <a 
                href="mailto:contact@ferreiracto.com" 
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                contact@ferreiracto.com
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
EOF

echo ""
echo "✅ Website updated with TEAM ORCHESTRATION positioning!"
echo ""
echo "📋 Key Changes - Positioning You as Technical Quarterback:"
echo ""
echo "🎯 HERO SECTION:"
echo "  • New tagline: 'Your Technical Quarterback for Longevity & Health Robotics'"
echo "  • Emphasis on 'assembling the right experts' vs. solo consultant"
echo "  • Added 'Curated Expert Network' to trust badges"
echo ""
echo "🤝 NEW 'HOW I WORK' SECTION:"
echo "  • Transparent: 'I Don't Pretend to Know Everything—And That's the Point'"
echo "  • Explains value of orchestrating specialists vs. doing everything"
echo "  • Lists expert network areas: FDA/Regulatory, Clinical/QA, Security, Domain Experts"
echo "  • Emphasizes 'one point of contact' advantage"
echo ""
echo "💼 UPDATED CONSULTING PACKAGES:"
echo "  • Each package now mentions bringing in specialists"
echo "  • Technical DD: 'Expert specialist reports included'"
echo "  • Regulatory Readiness: 'Working with my network of regulatory consultants'"
echo "  • Fractional CTO: 'Access to my specialist network + on-demand introductions'"
echo ""
echo "✨ MESSAGING IMPROVEMENTS:"
echo "  • 'Who I Work With' emphasizes coordination vs. vendor management"
echo "  • 'Why This Approach Works' reframed around orchestration benefits"
echo "  • Consistent 'quarterback' metaphor throughout"
echo "  • Transparent about when to bring in experts (builds trust)"
echo ""
echo "🎓 Strategic Positioning:"
echo "  ✓ Shows humility and integrity (doesn't pretend to know everything)"
echo "  ✓ Positions you as MORE valuable (curating expertise, not just selling yours)"
echo "  ✓ Differentiates from solo consultants (you have a bench)"
echo "  ✓ Opens door to larger engagements (can scale with team)"
echo "  ✓ Builds trust (transparent about collaboration)"
echo ""
echo "🚀 Next Steps:"
echo "  1. Review the changes: cat /home/claude/update-website-v3-team-approach.sh"
echo "  2. Make it executable: chmod +x update-website-v3-team-approach.sh"
echo "  3. Run it: bash update-website-v3-team-approach.sh"
echo "  4. Test locally: npm run dev"
echo "  5. Deploy when ready: git add . && git commit -m 'Team orchestration positioning' && git push"
echo ""
echo "💡 This positioning helps you handle 'I don't know' situations confidently:"
echo "  → Instead of: 'I'm not sure about that'"
echo "  → You say: 'That's exactly when I bring in my FDA regulatory consultant who specializes in [X]'"
echo ""
echo "🎯 You're now positioned as the CLIENT'S ADVOCATE who assembles the best team,"
echo "   not as a solo consultant trying to be an expert in everything."
