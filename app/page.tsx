'use client';
import { ArrowRight, CheckCircle, Zap, Shield, Target, Heart, Activity, FileCheck, Clock, Users, TrendingUp } from "lucide-react";
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
    description: "Comprehensive technical risk assessment for longevity and health robotics investments. De-risk your portfolio with expert evaluation.",
    deliverables: [
      "Architecture & scalability deep-dive",
      "Regulatory compliance assessment (FDA, HIPAA, GxP)",
      "IP evaluation and competitive moat analysis",
      "Team capability & technical debt review",
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
    description: "Get your AI/ML health systems ready for FDA submission and regulatory scrutiny. Avoid costly delays and rejections.",
    deliverables: [
      "Gap analysis vs FDA AI/ML guidance (2021 Action Plan)",
      "Data lineage, provenance & audit trail architecture",
      "Model governance framework and change control",
      "HIPAA/GxP compliance architecture review",
      "Validation SOP templates and test protocols",
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
    description: "Part-time technical leadership for longevity and health robotics companies. Get CTO-level expertise without the full-time cost.",
    deliverables: [
      "Weekly engineering leadership & architecture decisions",
      "Build vs buy analysis for critical infrastructure",
      "Regulatory compliance strategy and planning",
      "Technical hiring and team scaling guidance",
      "Investor relations support (tech due diligence prep)",
      "Quarterly strategic technology roadmap updates"
    ],
    idealFor: "Seed to Series A longevity/health-tech startups needing strategic technical guidance without a full-time CTO.",
    cta: "Get CTO-level guidance"
  }
];

const WHO_I_WORK_WITH = [
  {
    icon: TrendingUp,
    title: "VCs & Angels",
    description: "Technical due diligence for longevity biotech, elder care robotics, and digital health investments. I help you understand technical risks, evaluate founding teams, and assess regulatory readiness before you write the check."
  },
  {
    icon: Target,
    title: "Founders & CTOs",
    description: "Early-stage longevity and health robotics companies preparing for clinical validation, FDA submissions, or technical fundraising. Get regulatory ready, build investor-grade technical narratives, and scale your engineering org strategically."
  },
  {
    icon: Shield,
    title: "Technical Leaders",
    description: "Engineering teams at health-tech companies navigating FDA regulations, HIPAA compliance, or scaling ML systems for healthcare. Fractional CTO services for strategic guidance without the full-time commitment."
  }
];

export default function Home() {
  return (
    <div className="relative">
      <Header />
      
      {/* HERO SECTION - CONSULTING FIRST */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
            <Activity className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Technical Advisory for Longevity & HealthSpan Technology</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight">
            Technical Due Diligence for Longevity & Health Robotics Investments
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            De-risk your portfolio with expert technical assessment, regulatory readiness evaluation, and fractional CTO services. 
            <span className="text-blue-300 font-semibold"> Specializing in FDA pathways, HIPAA compliance, and edge AI for healthcare.</span>
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
              <span>Longevity Biotech Focus</span>
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

      {/* CONSULTING PACKAGES - FRONT AND CENTER */}
      <Section id="consulting" title="Consulting Services" subtitle="Fixed-scope engagements with clear deliverables and pricing">
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
                I also offer custom engagements for technical architecture reviews, team capability assessments, and regulatory strategy development. Let's discuss your specific needs.
              </p>
              <a href="#contact" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-2">
                Schedule a consultation <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* CASE STUDIES - AS PROOF OF EXPERTISE */}
      <Section 
        id="expertise" 
        title="Technical Expertise" 
        subtitle="Real-world experience building and evaluating longevity and health robotics systems"
      >
        <div className="mb-8 p-6 rounded-xl bg-slate-800/50 border border-slate-700">
          <p className="text-slate-300 leading-relaxed">
            These case studies demonstrate hands-on expertise in medical device architecture, FDA regulatory pathways, 
            HIPAA-compliant systems, and edge AI for healthcare. This same depth of knowledge informs every due diligence 
            engagement and consulting project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.slug} caseStudy={study} />
          ))}
        </div>
      </Section>

      {/* WHY WORK WITH ME */}
      <Section title="Why Technical Due Diligence Matters" subtitle="What investors and founders gain from expert technical assessment">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-400" />
              For Investors
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Identify technical risks before writing the check</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Evaluate regulatory readiness and time-to-market</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Assess team capability and technical debt</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Get clear go/no-go recommendations</span>
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
                <span>Get FDA-ready faster with expert guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Build investor-grade technical narratives</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Avoid costly architectural mistakes early</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Scale engineering org strategically</span>
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
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT FORM */}
      <Section id="contact" title="Start a Conversation" subtitle="Let's discuss how I can help de-risk your investment or accelerate your FDA readiness">
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
                href="https://www.linkedin.com/in/peter-ferreira-0177061b/"
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
