#!/bin/bash

# Website Update Script - Ferreira CTO Consulting Focus
# Strategic positioning: Technical advisory for longevity & health robotics
# Target: VCs, founders, and CTOs in longevity/eldercare/digital health
# Run this from your project root: bash update-website-v2.sh

set -e  # Exit on error

echo "🚀 Updating Ferreira CTO website with strategic consulting focus..."

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
  description: "Technical due diligence, regulatory readiness, and fractional CTO services for longevity biotech, elder care robotics, and digital health companies. FDA/HIPAA expertise.",
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
echo "📄 Updating main page with consulting-first messaging..."

cat > app/page.tsx << 'EOF'
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
                href="https://linkedin.com/in/yourusername" 
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

# ============================================================================
# 3. CREATE SVG IMAGES (if they don't exist)
# ============================================================================
echo "🎨 Ensuring case study images exist..."

mkdir -p public/images

# OrbCare Robot
if [ ! -f "public/images/case-orbcare.svg" ]; then
  echo "  Creating OrbCare SVG..."
  cat > public/images/case-orbcare.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240">
  <defs>
    <linearGradient id="orbcareGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0A4699"/>
      <stop offset="1" stop-color="#4D99FF"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" rx="20" fill="url(#orbcareGrad)" opacity="0.1"/>
  
  <g transform="translate(120,60)">
    <circle cx="80" cy="60" r="50" fill="#1a7cff" opacity="0.3"/>
    <circle cx="80" cy="60" r="45" stroke="#60a5fa" stroke-width="3" fill="none"/>
    
    <circle cx="65" cy="50" r="8" fill="#60a5fa"/>
    <circle cx="95" cy="50" r="8" fill="#60a5fa"/>
    
    <path d="M 60,75 Q 80,85 100,75" stroke="#60a5fa" stroke-width="3" fill="none" stroke-linecap="round"/>
    
    <rect x="30" y="110" width="100" height="20" rx="10" fill="#60a5fa" opacity="0.6"/>
    
    <g transform="translate(200,30)">
      <rect x="0" y="0" width="70" height="100" rx="8" stroke="#60a5fa" stroke-width="2" fill="none" opacity="0.6"/>
      <text x="35" y="20" text-anchor="middle" fill="#60a5fa" font-size="10" font-weight="bold">VITALS</text>
      <text x="5" y="40" fill="#60a5fa" font-size="8">HR: 72 bpm</text>
      <text x="5" y="55" fill="#60a5fa" font-size="8">BP: 120/80</text>
      <text x="5" y="70" fill="#60a5fa" font-size="8">SpO2: 98%</text>
      <text x="5" y="85" fill="#60a5fa" font-size="8">Temp: 98.6°F</text>
    </g>
  </g>
  
  <g stroke="#60a5fa" stroke-width="1" fill="none" opacity="0.4" stroke-dasharray="3,3">
    <path d="M140,90 L230,35"/>
    <path d="M140,95 L230,105"/>
  </g>
</svg>
EOF
fi

# Lumi Health
if [ ! -f "public/images/case-lumi.svg" ]; then
  echo "  Creating Lumi SVG..."
  cat > public/images/case-lumi.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240">
  <defs>
    <linearGradient id="lumiHealthGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0A4699"/>
      <stop offset="1" stop-color="#4D99FF"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" rx="20" fill="url(#lumiHealthGrad)" opacity="0.1"/>
  
  <g transform="translate(50,30)">
    <rect x="0" y="0" width="300" height="180" rx="20" stroke="#60a5fa" stroke-width="2" fill="none" opacity="0.7"/>
    
    <g transform="translate(30,40)">
      <circle cx="30" cy="30" r="25" fill="#1a7cff" opacity="0.8"/>
      <path d="M 20,30 L 25,30 L 27,25 L 30,38 L 33,25 L 35,30 L 40,30" 
            stroke="#fff" stroke-width="2" fill="none"/>
      
      <circle cx="30" cy="30" r="30" stroke="#60a5fa" stroke-width="1" fill="none" opacity="0.3"/>
      <circle cx="30" cy="30" r="35" stroke="#60a5fa" stroke-width="1" fill="none" opacity="0.2"/>
    </g>
    
    <g fill="#60a5fa" opacity="0.6">
      <rect x="100" y="30" width="180" height="16" rx="8"/>
      <text x="110" y="42" fill="#fff" font-size="10" opacity="0.9">Medication Reminder: 8am</text>
      
      <rect x="100" y="55" width="160" height="16" rx="8"/>
      <text x="110" y="67" fill="#fff" font-size="10" opacity="0.9">Health Tip: Stay hydrated</text>
      
      <rect x="100" y="100" width="170" height="16" rx="8"/>
      <text x="110" y="112" fill="#fff" font-size="10" opacity="0.9">Activity Goal: 65% complete</text>
      
      <rect x="100" y="125" width="150" height="16" rx="8"/>
      <text x="110" y="137" fill="#fff" font-size="10" opacity="0.9">Dr. Visit: Tomorrow 2pm</text>
    </g>
    
    <g transform="translate(20,120)">
      <rect x="0" y="0" width="60" height="50" rx="8" stroke="#60a5fa" stroke-width="1" fill="none" opacity="0.5"/>
      <text x="30" y="15" text-anchor="middle" fill="#60a5fa" font-size="8" font-weight="bold">METRICS</text>
      <text x="30" y="28" text-anchor="middle" fill="#60a5fa" font-size="7">Steps: 8.2K</text>
      <text x="30" y="38" text-anchor="middle" fill="#60a5fa" font-size="7">Sleep: 7.5h</text>
      <text x="30" y="48" text-anchor="middle" fill="#60a5fa" font-size="7">HR: 68 bpm</text>
    </g>
  </g>
</svg>
EOF
fi

# Nanotech AI
if [ ! -f "public/images/case-nanotech.svg" ]; then
  echo "  Creating Nanotech AI SVG..."
  cat > public/images/case-nanotech.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240">
  <defs>
    <linearGradient id="nanoLongevityGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0A4699"/>
      <stop offset="1" stop-color="#4D99FF"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" rx="20" fill="url(#nanoLongevityGrad)" opacity="0.1"/>
  
  <g transform="translate(40,60)" stroke="#60a5fa" stroke-width="2" fill="none">
    <circle cx="50" cy="50" r="10" fill="#1a7cff" opacity="0.8"/>
    <circle cx="90" cy="30" r="10" fill="#1a7cff" opacity="0.8"/>
    <circle cx="90" cy="70" r="10" fill="#1a7cff" opacity="0.8"/>
    <circle cx="130" cy="50" r="10" fill="#1a7cff" opacity="0.8"/>
    
    <line x1="60" y1="50" x2="80" y2="30"/>
    <line x1="60" y1="50" x2="80" y2="70"/>
    <line x1="100" y1="30" x2="120" y2="50"/>
    <line x1="100" y1="70" x2="120" y2="50"/>
    
    <circle cx="170" cy="30" r="8" fill="#1a7cff" opacity="0.6"/>
    <circle cx="170" cy="70" r="8" fill="#1a7cff" opacity="0.6"/>
    <line x1="140" y1="50" x2="162" y2="30"/>
    <line x1="140" y1="50" x2="162" y2="70"/>
  </g>
  
  <g transform="translate(220,40)">
    <rect x="0" y="0" width="150" height="160" rx="12" stroke="#60a5fa" stroke-width="2" fill="none" opacity="0.6"/>
    <text x="75" y="20" text-anchor="middle" fill="#60a5fa" font-size="12" font-weight="bold">AI PREDICTIONS</text>
    
    <g transform="translate(15,35)" fill="#60a5fa" opacity="0.7">
      <text x="0" y="0" font-size="9" font-weight="bold">Biocompatibility</text>
      <rect x="0" y="5" width="120" height="8" rx="4" opacity="0.3"/>
      <rect x="0" y="5" width="110" height="8" rx="4"/>
      <text x="125" y="12" font-size="8">94.2%</text>
      
      <text x="0" y="28" font-size="9" font-weight="bold">Conductivity</text>
      <rect x="0" y="33" width="120" height="8" rx="4" opacity="0.3"/>
      <rect x="0" y="33" width="95" height="8" rx="4"/>
      <text x="125" y="40" font-size="8">89.1%</text>
      
      <text x="0" y="56" font-size="9" font-weight="bold">Longevity</text>
      <rect x="0" y="61" width="120" height="8" rx="4" opacity="0.3"/>
      <rect x="0" y="61" width="105" height="8" rx="4"/>
      <text x="125" y="68" font-size="8">91.5%</text>
      
      <text x="0" y="84" font-size="9" font-weight="bold">Anti-Fibrotic</text>
      <rect x="0" y="89" width="120" height="8" rx="4" opacity="0.3"/>
      <rect x="0" y="89" width="100" height="8" rx="4"/>
      <text x="125" y="96" font-size="8">87.8%</text>
    </g>
    
    <g transform="translate(0,140)">
      <text x="75" y="0" text-anchor="middle" fill="#60a5fa" font-size="10">Candidates: 5,247</text>
    </g>
  </g>
  
  <g stroke="#60a5fa" stroke-width="1" fill="none" opacity="0.3" stroke-dasharray="3,3">
    <path d="M210,110 L220,110"/>
  </g>
</svg>
EOF
fi

# Biomarker Platform
if [ ! -f "public/images/case-biomarker.svg" ]; then
  echo "  Creating Biomarker Platform SVG..."
  cat > public/images/case-biomarker.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240">
  <defs>
    <linearGradient id="biomarkerGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0A4699"/>
      <stop offset="1" stop-color="#4D99FF"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" rx="20" fill="url(#biomarkerGrad)" opacity="0.1"/>
  
  <g transform="translate(150,80)">
    <circle cx="50" cy="50" r="40" stroke="#60a5fa" stroke-width="3" fill="none" opacity="0.8"/>
    <circle cx="50" cy="50" r="25" fill="#1a7cff" opacity="0.3"/>
    <text x="50" y="55" text-anchor="middle" fill="#60a5fa" font-size="10" font-weight="bold">DATA</text>
    <text x="50" y="65" text-anchor="middle" fill="#60a5fa" font-size="10" font-weight="bold">HUB</text>
  </g>
  
  <g stroke="#60a5fa" stroke-width="2" fill="none">
    <rect x="30" y="30" width="70" height="40" rx="8" opacity="0.6"/>
    <text x="65" y="55" text-anchor="middle" fill="#60a5fa" font-size="9">Wearables</text>
    <path d="M100,50 L150,100" stroke-dasharray="3,3" opacity="0.5"/>
    
    <rect x="30" y="150" width="70" height="40" rx="8" opacity="0.6"/>
    <text x="65" y="175" text-anchor="middle" fill="#60a5fa" font-size="9">Lab Tests</text>
    <path d="M100,170 L150,150" stroke-dasharray="3,3" opacity="0.5"/>
    
    <rect x="300" y="30" width="70" height="40" rx="8" opacity="0.6"/>
    <text x="335" y="55" text-anchor="middle" fill="#60a5fa" font-size="9">Genetics</text>
    <path d="M300,50 L250,100" stroke-dasharray="3,3" opacity="0.5"/>
    
    <rect x="300" y="150" width="70" height="40" rx="8" opacity="0.6"/>
    <text x="335" y="175" text-anchor="middle" fill="#60a5fa" font-size="9">Environment</text>
    <path d="M300,170 L250,150" stroke-dasharray="3,3" opacity="0.5"/>
  </g>
  
  <g transform="translate(130,180)">
    <rect x="0" y="0" width="140" height="45" rx="8" stroke="#60a5fa" stroke-width="2" fill="none" opacity="0.6"/>
    <text x="70" y="18" text-anchor="middle" fill="#60a5fa" font-size="10" font-weight="bold">INSIGHTS</text>
    <g transform="translate(10,25)">
      <rect x="0" y="0" width="35" height="4" rx="2" fill="#60a5fa" opacity="0.7"/>
      <rect x="40" y="0" width="25" height="4" rx="2" fill="#60a5fa" opacity="0.7"/>
      <rect x="70" y="0" width="45" height="4" rx="2" fill="#60a5fa" opacity="0.7"/>
    </g>
  </g>
</svg>
EOF
fi

echo ""
echo "✅ Website updated successfully with STRATEGIC CONSULTING FOCUS!"
echo ""
echo "📋 Key Improvements from Previous Version:"
echo "  ✓ Hero now emphasizes 'Technical Due Diligence' as primary value prop"
echo "  ✓ Added 'Who I Work With' section clearly targeting VCs, Founders, and Technical Leaders"
echo "  ✓ Consulting packages now include specific CTAs and 'Ideal for' descriptions"
echo "  ✓ Case studies repositioned with explicit 'proof of expertise' framing"
echo "  ✓ Added 'Why Technical Due Diligence Matters' section with investor/founder benefits"
echo "  ✓ Stronger action-oriented language throughout (de-risk, fast-track, etc.)"
echo "  ✓ Mission-aligned messaging emphasizing longevity/healthspan commitment"
echo ""
echo "💼 Consulting Services Front and Center:"
echo "  1. Technical Due Diligence ($25K–$75K) - 'De-risk your next investment'"
echo "  2. Regulatory & AI Readiness ($15K–$45K) - 'Fast-track your FDA readiness'"
echo "  3. Fractional Engineering Leadership ($8K–$15K/mo) - 'Get CTO-level guidance'"
echo ""
echo "🎯 Target Audience Messaging:"
echo "  → VCs & Angels: Technical risk assessment, founding team evaluation, regulatory readiness"
echo "  → Founders & CTOs: FDA preparation, investor narratives, architectural guidance"
echo "  → Technical Leaders: Fractional CTO services, compliance navigation, scaling support"
echo ""
echo "🚀 Next Steps:"
echo "  1. Review changes: git diff"
echo "  2. Test locally: npm run dev"
echo "  3. Update LinkedIn headline to match (see previous chat for options)"
echo "  4. Commit: git add . && git commit -m 'Strategic pivot: consulting-first positioning'"
echo "  5. Deploy: git push"
echo ""
echo "🎓 Remember from your strategic plan:"
echo "  • This website supports your immediate revenue goal ($10K/mo by week 12)"
echo "  • Clear services + pricing = easier sales conversations"
echo "  • Case studies prove expertise without undermining consulting focus"
echo "  • Ready to start outreach on Monday with this professional foundation"
echo ""
echo "💪 Your site now clearly positions you as THE technical advisor for longevity & health robotics!"
