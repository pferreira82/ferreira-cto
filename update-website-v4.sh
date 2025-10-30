#!/bin/bash

# Website Update Script v4 - Tiered Pricing with Team Orchestration
# Key update: Clear pricing tiers showing specialist coordination value
# Run this from your project root: bash update-website-v4-tiered-pricing.sh

set -e  # Exit on error

echo "🚀 Updating Ferreira CTO website with TIERED PRICING..."

# ============================================================================
# UPDATE MAIN PAGE (app/page.tsx) - COMPLETE FILE
# ============================================================================
echo "📄 Updating main page with tiered pricing structure..."

cat > app/page.tsx << 'EOFPAGE'
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

interface TierInfo {
  name: string;
  price: string;
  duration: string;
  description: string;
  includes: string[];
  badge?: string;
}

interface ConsultingPackage {
  icon: any;
  title: string;
  tiers: TierInfo[];
  additionalNote?: string;
  idealFor: string;
  cta: string;
}

const CONSULTING_PACKAGES: ConsultingPackage[] = [
  {
    icon: FileCheck,
    title: "Technical Due Diligence",
    tiers: [
      {
        name: "Foundation",
        price: "$40K–$55K",
        duration: "1–2 weeks",
        description: "Core technical assessment for straightforward investments",
        includes: [
          "Architecture & scalability deep-dive",
          "Technical debt and code quality review",
          "Team capability assessment",
          "IP evaluation and competitive analysis",
          "Risk-prioritized remediation roadmap",
          "Executive summary with go/no-go recommendation"
        ]
      },
      {
        name: "Standard",
        price: "$70K–$100K",
        duration: "2–3 weeks",
        description: "Foundation + one specialist for regulated products",
        includes: [
          "Everything in Foundation",
          "Regulatory compliance assessment (FDA, HIPAA, or GxP)",
          "OR Security audit and penetration testing",
          "Specialist expert report with findings",
          "Integrated risk assessment across technical + regulatory/security"
        ],
        badge: "Most Popular"
      },
      {
        name: "Comprehensive",
        price: "$120K–$175K",
        duration: "3–4 weeks",
        description: "Full specialist team for high-stakes investments",
        includes: [
          "Everything in Standard",
          "Multi-specialist coordination (regulatory + security + clinical)",
          "Deep regulatory pathway analysis (510(k)/De Novo strategy)",
          "Clinical validation requirements assessment",
          "Security & compliance architecture review",
          "Comprehensive go-to-market technical risk report"
        ]
      }
    ],
    idealFor: "VCs and angels evaluating longevity biotech, elder care robotics, or digital health investments at any stage.",
    cta: "De-risk your next investment"
  },
  {
    icon: Shield,
    title: "Regulatory & AI Readiness",
    tiers: [
      {
        name: "Gap Analysis",
        price: "$25K–$35K",
        duration: "1–2 weeks",
        description: "Identify what's needed for FDA submission",
        includes: [
          "Gap analysis vs. FDA AI/ML guidance",
          "Data architecture review (lineage, provenance)",
          "Model governance framework assessment",
          "90-day implementation roadmap",
          "Resource and cost estimates"
        ]
      },
      {
        name: "Implementation Ready",
        price: "$50K–$75K",
        duration: "2–3 weeks",
        description: "Gap Analysis + regulatory consultant for execution plan",
        includes: [
          "Everything in Gap Analysis",
          "FDA regulatory consultant assessment",
          "Validation protocol templates (IQ/OQ/PQ)",
          "HIPAA/GxP compliance architecture design",
          "Risk management file (ISO 14971) framework",
          "Detailed submission preparation checklist"
        ],
        badge: "Most Popular"
      },
      {
        name: "Submission Ready",
        price: "$90K–$130K",
        duration: "3–4 weeks",
        description: "Full team to get submission-ready documentation",
        includes: [
          "Everything in Implementation Ready",
          "Security architecture review and testing",
          "Clinical validation strategy with MD/clinical consultant",
          "Complete data lifecycle documentation",
          "Audit trail and change control implementation",
          "Submission-ready technical documentation package"
        ]
      }
    ],
    idealFor: "Health-tech startups preparing for 510(k), De Novo, or clinical validation who need a clear path to regulatory approval.",
    cta: "Fast-track your FDA readiness"
  },
  {
    icon: Clock,
    title: "Fractional Engineering Leadership",
    tiers: [
      {
        name: "Advisory",
        price: "$10K/mo",
        duration: "1 day/week",
        description: "Strategic technical guidance for key decisions",
        includes: [
          "Weekly strategic architecture decisions",
          "Build vs. buy analysis",
          "Technical roadmap planning",
          "Investor relations support (technical narratives)",
          "Monthly written updates and recommendations"
        ]
      },
      {
        name: "Engaged",
        price: "$16K/mo",
        duration: "2 days/week",
        description: "Hands-on technical leadership and team building",
        includes: [
          "Everything in Advisory",
          "Hands-on architecture and code review",
          "Technical hiring and team scaling",
          "Regulatory compliance planning (with specialist support)",
          "Direct Slack/email access for urgent decisions",
          "Quarterly board presentation support"
        ],
        badge: "Most Popular"
      }
    ],
    additionalNote: "Specialist consultations (regulatory, security, clinical) available at $3K–$5K per engagement as needed.",
    idealFor: "Seed to Series A longevity/health-tech startups needing strategic technical leadership without a full-time CTO commitment.",
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
      
      {/* HERO SECTION */}
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

      {/* HOW I WORK */}
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

      {/* CONSULTING PACKAGES - TIERED PRICING */}
      <Section id="consulting" title="Consulting Services" subtitle="Flexible tiers to match your needs and budget—scale up specialist support as complexity demands">
        <div className="space-y-16">
          {CONSULTING_PACKAGES.map((pkg, pkgIdx) => {
            const Icon = pkg.icon;
            return (
              <div key={pkgIdx} className="space-y-6">
                {/* Service Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{pkg.title}</h3>
                    <p className="text-slate-400 mt-1">{pkg.idealFor}</p>
                  </div>
                </div>

                {/* Tier Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                  {pkg.tiers.map((tier, tierIdx) => (
                    <div 
                      key={tierIdx} 
                      className={`group relative p-6 rounded-2xl border transition-all ${
                        tier.badge 
                          ? 'border-blue-500 bg-gradient-to-br from-blue-500/10 to-slate-900/50 shadow-lg shadow-blue-500/20' 
                          : 'border-slate-800 bg-slate-900/50 hover:border-blue-500/50'
                      }`}
                    >
                      {tier.badge && (
                        <div className="absolute -top-3 -right-3 px-4 py-1 bg-blue-600 rounded-full text-sm font-semibold">
                          {tier.badge}
                        </div>
                      )}
                      
                      <div className="mb-4">
                        <div className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-2">
                          {tier.name}
                        </div>
                        <div className="text-3xl font-bold mb-1">{tier.price}</div>
                        <div className="text-sm text-slate-400">{tier.duration}</div>
                      </div>
                      
                      <p className="text-slate-300 mb-6 leading-relaxed">{tier.description}</p>
                      
                      <div className="space-y-3">
                        {tier.includes.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-400">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Note (for Fractional CTO) */}
                {pkg.additionalNote && (
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <p className="text-sm text-slate-300">
                      <span className="font-semibold text-blue-400">Note:</span> {pkg.additionalNote}
                    </p>
                  </div>
                )}

                {/* CTA */}
                <div className="text-center">
                  <a 
                    href="#contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-all"
                  >
                    {pkg.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Divider (except for last package) */}
                {pkgIdx < CONSULTING_PACKAGES.length - 1 && (
                  <div className="border-t border-slate-800 pt-8"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Custom Work Section */}
        <div className="mt-16 p-6 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Need Something Custom?</h4>
              <p className="text-slate-300 mb-4">
                Every situation is unique. I'll assemble the right specialist team for your specific technical, 
                regulatory, or clinical needs. Large acquisitions, complex regulatory pathways, or novel 
                technologies often require custom engagements.
              </p>
              <a href="#contact" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-2">
                Discuss your specific needs <ArrowRight className="w-4 h-4" />
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
                <span>Flexible pricing—pay for the tier of expertise you actually need</span>
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
                <span>Start with Foundation tier, scale up as complexity grows</span>
              </li>
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
      <Section id="contact" title="Start a Conversation" subtitle="Let's discuss which tier fits your needs and which specialists might be helpful">
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
EOFPAGE

echo ""
echo "✅ Website updated with TIERED PRICING structure!"
echo ""
echo "📋 New Pricing Tiers:"
echo ""
echo "💼 TECHNICAL DUE DILIGENCE:"
echo "  Foundation:     $40K–$55K  (1-2 weeks) - Core technical assessment only"
echo "  Standard:       $70K–$100K (2-3 weeks) - Core + 1 specialist [Most Popular]"
echo "  Comprehensive:  $120K–$175K (3-4 weeks) - Full specialist team"
echo ""
echo "🛡️  REGULATORY & AI READINESS:"
echo "  Gap Analysis:        $25K–$35K  (1-2 weeks) - Identify what's needed"
echo "  Implementation Ready: $50K–$75K  (2-3 weeks) - Gap + regulatory consultant [Most Popular]"
echo "  Submission Ready:     $90K–$130K (3-4 weeks) - Full team + documentation"
echo ""
echo "⏰ FRACTIONAL CTO:"
echo "  Advisory: $10K/mo (1 day/week) - Strategic guidance"
echo "  Engaged:  $16K/mo (2 days/week) - Hands-on leadership [Most Popular]"
echo "  + Specialist access: $3K-$5K per engagement"
echo ""
echo "✨ Key Benefits of This Pricing Structure:"
echo ""
echo "  1. TRANSPARENCY - Clients see exactly what they're paying for"
echo "  2. FLEXIBILITY - Start low, scale up as needed"
echo "  3. VALUE JUSTIFICATION - Higher tiers clearly show specialist coordination"
echo "  4. ANCHORING - $120K Comprehensive makes $70K Standard look reasonable"
echo "  5. UPSELLING PATH - Easy to move clients from Foundation → Standard"
echo ""
echo "💡 Sales Strategy:"
echo ""
echo "  → Early-stage startups → Start with Foundation tier"
echo "  → Series A preparing for FDA → Pitch Standard tier"
echo "  → VCs on high-stakes deals → Lead with Comprehensive tier"
echo "  → Complex situations → Custom pricing above top tier"
echo ""
echo "🎯 In Discovery Calls:"
echo ""
echo "  'Based on what you've shared, I'd recommend the Standard tier—that gives"
echo "  you my full technical assessment plus bringing in my FDA regulatory consultant"
echo "  to map out your 510(k) pathway. That's $70K-$100K depending on complexity."
echo "  If you just need the technical piece first, we can start with Foundation"
echo "  at $40K-$55K and layer in regulatory later.'"
echo ""
echo "🚀 Next Steps:"
echo "  1. Test locally: npm run dev"
echo "  2. Review the tiered layout carefully"
echo "  3. Deploy: git add . && git commit -m 'Tiered pricing structure' && git push"
echo "  4. Practice pitching each tier in mock sales calls"
echo "  5. Track which tiers prospects choose (adjust pricing if needed)"
echo ""
echo "📊 Track These Metrics After Launch:"
echo "  • Which tier do most prospects choose? (adjust if everyone picks lowest)"
echo "  • Do prospects push back on price? (if no, you're too low)"
echo "  • Are you closing 20-40% of qualified leads? (sweet spot)"
echo "  • Can you confidently explain why each tier is priced where it is?"
echo ""
echo "💰 Remember: These prices now JUSTIFY bringing in specialists."
echo "   You're not a $40K/week solo consultant anymore—you're a"
echo "   $120K+ technical advisory firm with a curated expert network."
