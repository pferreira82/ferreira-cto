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
