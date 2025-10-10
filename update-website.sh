#!/bin/bash

# Website Update Script for Longevity Robotics & AI Positioning
# Focus: Consulting Services with Product Proof Points
# Run this from your project root: bash update-website.sh

set -e  # Exit on error

echo "🚀 Updating Ferreira CTO website for Longevity Robotics & AI consulting..."

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
    default: "Ferreira CTO Inc. — Technical Advisory for Longevity & Health Robotics",
    template: "%s | Ferreira CTO Inc."
  },
  description: "Technical due diligence and regulatory readiness for longevity biotech, health robotics, and digital health companies. Fractional CTO services for life extension technology.",
  keywords: ["Longevity", "Health Robotics", "Technical Due Diligence", "Regulatory Readiness", "FDA", "Biotech", "Elder Care", "Fractional CTO"],
  authors: [{ name: "Ferreira CTO Inc." }],
  creator: "Ferreira CTO Inc.",
  metadataBase: new URL("https://ferreiracto.com"),
  openGraph: {
    title: "Ferreira CTO Inc. — Technical Advisory for Longevity & Health Robotics",
    description: "Technical due diligence and regulatory readiness for longevity companies.",
    type: "website",
    locale: "en_US",
    siteName: "Ferreira CTO Inc."
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferreira CTO Inc.",
    description: "Technical advisory for longevity and health robotics companies"
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
echo "📄 Updating main page content..."

cat > app/page.tsx << 'EOF'
'use client';
import { ArrowRight, CheckCircle, Zap, Shield, Target, Heart, Activity, FileCheck, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import CaseStudyCard, { CaseStudy } from "@/components/CaseStudyCard";

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "orbcare-elder",
    title: "OrbCare — Health Monitoring Robot",
    excerpt: "Autonomous health monitoring robot with vital tracking, fall detection, and AI-powered pattern analysis. Demonstrates deep expertise in medical device architecture, embedded systems, and edge AI for healthcare applications.",
    image: "/images/case-orbcare.svg",
    tags: ["Robotics", "Medical Devices", "Edge AI", "Health Tech"],
    metrics: [
      { label: "Vital Sensors", value: "12+" },
      { label: "Response Time", value: "< 2s" }
    ]
  },
  {
    slug: "lumi",
    title: "Lumi — AI Health Concierge",
    excerpt: "Conversational AI for chronic condition management and medication adherence. Showcases expertise in HIPAA-compliant architectures, conversational AI design, and clinical validation strategies for digital health products.",
    image: "/images/case-lumi.svg",
    tags: ["AI", "Digital Health", "HIPAA", "Care Coordination"],
    metrics: [
      { label: "Context Memory", value: "10K msgs" },
      { label: "Adherence Lift", value: "+47%" }
    ]
  },
  {
    slug: "nanotech-ai",
    title: "Nanotech AI — Longevity Materials Research",
    excerpt: "ML platform for discovering biocompatible nanomaterials for life extension applications. Demonstrates experience with research-grade ML infrastructure, materials informatics, and longevity biotech product development.",
    image: "/images/case-nanotech.svg",
    tags: ["ML", "Materials Science", "Longevity", "Research"],
    metrics: [
      { label: "Model Accuracy", value: "94.2%" },
      { label: "Candidates", value: "5K+" }
    ]
  },
  {
    slug: "biomarker-platform",
    title: "Biomarker Analysis Platform",
    excerpt: "Multi-modal health data integration platform combining wearables, labs, and genetic data for longevity insights. Experience with FHIR/HL7 standards, predictive health models, and regulatory-grade data pipelines.",
    image: "/images/case-biomarker.svg",
    tags: ["Data Integration", "Predictive Health", "Standards", "Platforms"],
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
    description: "Comprehensive technical risk assessment for longevity and health robotics investments.",
    deliverables: [
      "Architecture & scalability review",
      "Regulatory compliance assessment (FDA, HIPAA, GxP)",
      "IP and competitive moat analysis",
      "Team capability evaluation",
      "Risk-prioritized remediation roadmap",
      "Investor-ready executive summary"
    ],
    idealFor: "VCs, angels, and family offices investing in longevity biotech, elder care robotics, or digital health."
  },
  {
    icon: Shield,
    title: "Regulatory & AI Readiness",
    price: "$15K–$45K",
    duration: "2–4 weeks",
    description: "Get your AI/ML systems ready for FDA submission and regulatory scrutiny.",
    deliverables: [
      "Gap analysis vs FDA AI/ML guidance",
      "Data lineage & audit trail design",
      "Model governance framework",
      "HIPAA/GxP compliance architecture",
      "SOP templates for validation",
      "90-day implementation roadmap"
    ],
    idealFor: "Early-stage health-tech startups building AI/ML systems preparing for clinical validation or regulatory submission."
  },
  {
    icon: Clock,
    title: "Fractional Engineering Leadership",
    price: "$8K–$15K/mo",
    duration: "1–2 days/week",
    description: "Part-time technical leadership for longevity and health robotics companies.",
    deliverables: [
      "Weekly engineering leadership & architecture decisions",
      "Build vs buy analysis for infrastructure",
      "Regulatory compliance strategy",
      "Code reviews & technical hiring",
      "Monthly investor updates on tech progress",
      "Async support via Slack"
    ],
    idealFor: "Pre-seed to Series A companies building longevity biotech, health robotics, or digital health products."
  }
];

const EXPERTISE_AREAS = [
  {
    icon: Heart,
    title: "Health Robotics Architecture",
    description: "Medical device design, embedded systems (Jetson, ROS), sensor fusion, real-time processing, and FDA pathway planning."
  },
  {
    icon: Activity,
    title: "AI for Health Monitoring",
    description: "Predictive health models, privacy-preserving AI, HIPAA-compliant architectures, clinical validation, and regulatory submissions."
  },
  {
    icon: Target,
    title: "Longevity Biotech Infrastructure",
    description: "Materials informatics, biomarker analysis platforms, lab data pipelines (LIMS), GxP compliance, and research software architecture."
  }
];

const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
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
                <Heart size={16} />
                Technical Advisory for Longevity Companies
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                Technical due diligence and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
                  regulatory readiness
                </span>{" "}
                for health robotics and longevity biotech
              </h1>

              <p className="text-xl text-slate-300 mt-8 leading-relaxed max-w-2xl text-balance">
                I help investors evaluate longevity companies and help health-tech startups 
                navigate FDA pathways, build regulatory-ready AI systems, and architect products 
                that extend healthy human life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <button 
                  type="button"
                  onClick={() => scrollToElement('contact')}
                  className="btn-primary flex items-center gap-2 justify-center"
                >
                  Book a Consultation
                  <ArrowRight size={16} />
                </button>
                <button 
                  type="button"
                  onClick={() => scrollToElement('services')}
                  className="btn-secondary flex items-center gap-2 justify-center"
                >
                  View Services
                </button>
              </div>

              <dl className="grid grid-cols-2 gap-8 mt-16 text-sm">
                <div className="space-y-2">
                  <dt className="text-slate-400 font-medium">Core Services</dt>
                  <dd className="font-semibold text-lg">Due Diligence, Regulatory Strategy</dd>
                </div>
                <div className="space-y-2">
                  <dt className="text-slate-400 font-medium">Industries</dt>
                  <dd className="font-semibold text-lg">Longevity, Health Robotics, Biotech</dd>
                </div>
              </dl>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative h-[500px] w-full flex items-center justify-center">
                <img 
                  src="/images/hero-longevity.svg" 
                  alt="Technical advisory for longevity and health robotics"
                  className="w-full h-full object-contain drop-shadow-2xl" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTING SERVICES SECTION */}
      <Section
        id="services"
        eyebrow="Consulting Services"
        title="Packaged engagements for longevity companies"
        subtitle="Clear scope, fixed deliverables, and predictable timelines. I take on a limited number of clients per quarter to ensure focused, high-quality work."
      >
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {CONSULTING_PACKAGES.map((pkg) => {
            const IconComponent = pkg.icon;
            return (
              <div key={pkg.title} className="card p-8 flex flex-col h-full hover:border-brand-500/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/20">
                    <IconComponent size={24} className="text-brand-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{pkg.title}</h3>
                    <p className="text-brand-300 text-sm font-medium mt-1">{pkg.price}</p>
                  </div>
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-4">{pkg.description}</p>
                
                <div className="mb-4 pb-4 border-b border-white/10">
                  <p className="text-sm text-slate-400">
                    <span className="font-medium">Timeline:</span> {pkg.duration}
                  </p>
                </div>

                <div className="flex-grow">
                  <p className="text-sm font-medium text-slate-400 mb-3">Deliverables:</p>
                  <ul className="space-y-2">
                    {pkg.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle size={14} className="text-brand-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-xs text-slate-400">
                    <span className="font-medium">Ideal for:</span> {pkg.idealFor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="card p-8 text-center">
          <p className="text-slate-300 text-lg mb-4">
            Not sure which package fits your needs?
          </p>
          <button 
            onClick={() => scrollToElement('contact')}
            className="btn-primary inline-flex items-center gap-2"
          >
            Schedule a Free 20-Min Consultation
            <ArrowRight size={16} />
          </button>
        </div>
      </Section>

      {/* EXPERTISE SECTION */}
      <Section
        id="expertise"
        eyebrow="Technical Expertise"
        title="Deep experience in longevity technology"
        subtitle="I don't just advise—I've built health robotics, AI systems, and biotech infrastructure firsthand."
      >
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {EXPERTISE_AREAS.map((area) => {
            const IconComponent = area.icon;
            return (
              <div key={area.title} className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-brand-500/10 border border-brand-500/20">
                    <IconComponent size={20} className="text-brand-400" />
                  </div>
                  <h3 className="text-lg font-semibold">{area.title}</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "FDA Pathways (510k, De Novo)",
            "HIPAA & GxP Compliance",
            "Clinical Validation Strategy",
            "Medical Device Architecture",
            "AI/ML Model Governance",
            "Data Lineage & Audit Trails",
            "Longevity Biomarker Analysis",
            "Materials Informatics"
          ].map((skill) => (
            <div key={skill} className="card p-4 text-center text-sm">
              <CheckCircle size={16} className="text-brand-400 mx-auto mb-2" />
              <span className="text-slate-300">{skill}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CASE STUDIES / PROOF SECTION */}
      <Section
        id="case-studies"
        eyebrow="Technical Proof Points"
        title="I've built what I help you evaluate"
        subtitle="Selected projects demonstrating hands-on expertise in health robotics, AI systems, and longevity biotech."
      >
        <div className="grid md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>

        <div className="mt-12 card p-8 text-center">
          <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
            These projects aren't just portfolio pieces—they represent hundreds of hours 
            solving the same technical and regulatory challenges your company faces. 
            This hands-on experience informs every due diligence review and advisory engagement.
          </p>
        </div>
      </Section>

      {/* CONTACT SECTION */}
      <Section
        id="contact"
        eyebrow="Get Started"
        title="Let's discuss your project"
        subtitle="I work with longevity biotech companies, health robotics startups, and investors who need technical clarity before making decisions."
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ContactForm />

          <div className="space-y-8">
            <div className="card p-8">
              <h3 className="text-xl font-semibold mb-6">Who I Work With</h3>
              <ul className="space-y-4 text-slate-300">
                {[
                  "Longevity VCs evaluating biotech and health robotics deals",
                  "Health-tech startups preparing for FDA submissions", 
                  "Elder care robotics companies building regulatory-ready systems",
                  "Digital health companies needing HIPAA-compliant AI architecture",
                  "Biotech investors seeking technical risk assessment"
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
              <p className="text-slate-300 leading-relaxed text-sm">
                <span className="font-medium">Robotics:</span> Jetson (Orin, Xavier), ROS, sensor fusion, embedded Linux<br/>
                <span className="font-medium">AI/ML:</span> PyTorch, TensorFlow, LangChain, MLOps, model governance<br/>
                <span className="font-medium">Health Data:</span> FHIR, HL7, DICOM, medical device interfaces<br/>
                <span className="font-medium">Compliance:</span> HIPAA, FDA 21 CFR Part 11, GxP, ISO 13485<br/>
                <span className="font-medium">Cloud & Infrastructure:</span> AWS, GCP, Docker, Kubernetes, CI/CD
              </p>
            </div>

            <div className="card p-8 bg-brand-500/5 border-brand-500/20">
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-white">Current availability:</span> Accepting 2-3 new consulting 
                engagements per quarter. Book a consultation to discuss timing and scope.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
EOF

# ============================================================================
# 3. UPDATE FOOTER (components/Footer.tsx)
# ============================================================================
echo "🔽 Updating footer..."

cat > components/Footer.tsx << 'EOF'
import { Logo } from "./Logo";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="space-y-4">
            <Logo />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Technical advisory for longevity biotech and health robotics companies. 
              Due diligence, regulatory strategy, and fractional engineering leadership.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-brand-400" />
                <a 
                  href="mailto:contact@ferreiracto.com" 
                  className="hover:text-white transition-colors"
                >
                  contact@ferreiracto.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-400" />
                <span>Massachusetts, USA</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Technical Due Diligence</li>
              <li>Regulatory & AI Readiness</li>
              <li>Fractional CTO</li>
              <li>Health Robotics Advisory</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © {currentYear} Ferreira CTO Inc. Technical advisory for longevity technology.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
EOF

# ============================================================================
# 4. CREATE NEW SVG IMAGES
# ============================================================================
echo "🎨 Creating SVG visualizations..."

# Hero Visualization - Longevity Theme
cat > public/images/hero-longevity.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="heroLongevityGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0A4699" stop-opacity="0.3"/>
      <stop offset="1" stop-color="#4D99FF" stop-opacity="0.2"/>
    </linearGradient>
    <filter id="healthGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <rect width="800" height="600" rx="32" fill="url(#heroLongevityGrad)"/>
  
  <g stroke="#93c5fd" stroke-opacity="0.3" stroke-width="1">
    <defs>
      <pattern id="healthGrid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none"/>
      </pattern>
    </defs>
    <rect width="800" height="600" fill="url(#healthGrid)"/>
  </g>
  
  <g transform="translate(300,200)">
    <circle cx="100" cy="100" r="80" stroke="#1a7cff" stroke-width="3" fill="none" opacity="0.8" filter="url(#healthGlow)"/>
    <circle cx="100" cy="100" r="60" fill="#1a7cff" opacity="0.2"/>
    
    <g stroke="#60a5fa" stroke-width="2" fill="#1a7cff" opacity="0.8">
      <circle cx="100" cy="40" r="8"/>
      <circle cx="160" cy="100" r="8"/>
      <circle cx="100" cy="160" r="8"/>
      <circle cx="40" cy="100" r="8"/>
    </g>
    
    <path d="M 80,90 L 90,90 L 95,80 L 100,110 L 105,80 L 110,90 L 120,90" 
          stroke="#60a5fa" stroke-width="3" fill="none" opacity="0.9"/>
  </g>
  
  <g stroke="#60a5fa" stroke-width="2" fill="none">
    <rect x="100" y="80" width="120" height="80" rx="12" opacity="0.7"/>
    <text x="160" y="125" text-anchor="middle" fill="#60a5fa" font-size="14" font-weight="bold">TECHNICAL DD</text>
    <path d="M220,120 L280,200" stroke-dasharray="5,5" opacity="0.6"/>
    
    <rect x="580" y="80" width="120" height="80" rx="12" opacity="0.7"/>
    <text x="640" y="125" text-anchor="middle" fill="#60a5fa" font-size="14" font-weight="bold">REGULATORY</text>
    <path d="M580,120 L520,200" stroke-dasharray="5,5" opacity="0.6"/>
    
    <rect x="100" y="440" width="140" height="80" rx="12" opacity="0.7"/>
    <text x="170" y="485" text-anchor="middle" fill="#60a5fa" font-size="14" font-weight="bold">ARCHITECTURE</text>
    <path d="M240,440 L330,320" stroke-dasharray="5,5" opacity="0.6"/>
    
    <rect x="560" y="440" width="140" height="80" rx="12" opacity="0.7"/>
    <text x="630" y="485" text-anchor="middle" fill="#60a5fa" font-size="14" font-weight="bold">ADVISORY</text>
    <path d="M560,480 L470,320" stroke-dasharray="5,5" opacity="0.6"/>
  </g>
  
  <g stroke="#60a5fa" stroke-width="1" fill="none" opacity="0.4">
    <path d="M100,120 Q200,150 280,200" stroke-dasharray="3,3"/>
    <path d="M700,120 Q600,150 520,200" stroke-dasharray="3,3"/>
    <path d="M170,520 Q250,450 330,320" stroke-dasharray="3,3"/>
    <path d="M630,520 Q550,450 470,320" stroke-dasharray="3,3"/>
  </g>
  
  <g fill="#1a7cff" filter="url(#healthGlow)">
    <circle cx="150" cy="200" r="4"/>
    <circle cx="650" cy="220" r="4"/>
    <circle cx="200" cy="400" r="4"/>
    <circle cx="600" cy="380" r="4"/>
    <circle cx="400" cy="100" r="4"/>
    <circle cx="400" cy="500" r="4"/>
  </g>
</svg>
EOF

# OrbCare (proof of expertise)
cat > public/images/case-orbcare.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240">
  <defs>
    <linearGradient id="orbElderGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0A4699"/>
      <stop offset="1" stop-color="#4D99FF"/>
    </linearGradient>
    <filter id="orbGlow">
      <feGaussianBlur stdDeviation="2"/>
    </filter>
  </defs>
  <rect width="400" height="240" rx="20" fill="url(#orbElderGrad)" opacity="0.1"/>
  
  <g transform="translate(80,60)">
    <circle cx="60" cy="60" r="50" stroke="#60a5fa" stroke-width="3" fill="none" opacity="0.8" filter="url(#orbGlow)"/>
    <circle cx="60" cy="60" r="35" fill="#1a7cff" opacity="0.3"/>
    
    <circle cx="45" cy="45" r="5" fill="#60a5fa"/>
    <circle cx="75" cy="45" r="5" fill="#60a5fa"/>
    
    <g stroke="#60a5fa" stroke-width="2" fill="none">
      <path d="M 45,70 L 50,70 L 53,65 L 56,78 L 59,65 L 62,70 L 75,70"/>
    </g>
    
    <rect x="30" y="110" width="60" height="12" rx="6" fill="#60a5fa" opacity="0.6"/>
    
    <g transform="translate(150,10)">
      <rect x="0" y="0" width="100" height="60" rx="8" stroke="#60a5fa" stroke-width="2" fill="none" opacity="0.6"/>
      <text x="50" y="20" text-anchor="middle" fill="#60a5fa" font-size="10" font-weight="bold">VITALS</text>
      
      <g transform="translate(10,28)">
        <circle cx="0" cy="0" r="3" fill="#1a7cff"/>
        <text x="10" y="4" fill="#60a5fa" font-size="8">HR: 72</text>
      </g>
      
      <g transform="translate(10,43)">
        <circle cx="0" cy="0" r="3" fill="#1a7cff"/>
        <text x="10" y="4" fill="#60a5fa" font-size="8">Temp: 98.6°F</text>
      </g>
    </g>
    
    <g transform="translate(150,80)">
      <rect x="0" y="0" width="100" height="50" rx="8" stroke="#60a5fa" stroke-width="2" fill="none" opacity="0.6"/>
      <text x="50" y="18" text-anchor="middle" fill="#60a5fa" font-size="10" font-weight="bold">ACTIVITY</text>
      
      <rect x="15" y="25" width="8" height="15" rx="2" fill="#60a5fa" opacity="0.8"/>
      <rect x="30" y="20" width="8" height="20" rx="2" fill="#60a5fa" opacity="0.6"/>
      <rect x="45" y="28" width="8" height="12" rx="2" fill="#60a5fa" opacity="0.8"/>
      <rect x="60" y="22" width="8" height="18" rx="2" fill="#60a5fa" opacity="0.7"/>
      <rect x="75" y="25" width="8" height="15" rx="2" fill="#60a5fa" opacity="0.8"/>
    </g>
  </g>
  
  <g stroke="#60a5fa" stroke-width="1" fill="none" opacity="0.4" stroke-dasharray="3,3">
    <path d="M140,90 L230,35"/>
    <path d="M140,95 L230,105"/>
  </g>
</svg>
EOF

# Lumi Health
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

# Nanotech AI
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

# Biomarker Platform
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

echo ""
echo "✅ Website updated successfully for CONSULTING FOCUS!"
echo ""
echo "📋 Key Changes:"
echo "  ✓ Hero emphasizes 'Technical Due Diligence & Regulatory Readiness'"
echo "  ✓ Three consulting packages with pricing front and center"
echo "  ✓ Case studies repositioned as 'proof of expertise'"
echo "  ✓ Clear 'Who I Work With' section"
echo "  ✓ All SVGs updated with health/longevity themes"
echo ""
echo "💼 Consulting Services Now Featured:"
echo "  1. Technical Due Diligence ($25K–$75K)"
echo "  2. Regulatory & AI Readiness ($15K–$45K)"
echo "  3. Fractional Engineering Leadership ($8K–$15K/mo)"
echo ""
echo "🚀 Next Steps:"
echo "  1. Review: git diff"
echo "  2. Test: npm run dev"
echo "  3. Commit: git add . && git commit -m 'Focus website on consulting services'"
echo "  4. Deploy: git push"
echo ""
echo "🎯 Your website now clearly sells consulting first, with products as proof!"
