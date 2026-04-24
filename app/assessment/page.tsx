'use client';
import React, {useState} from 'react';
import {AlertTriangle, ArrowRight, CheckCircle, ChevronDown, ChevronUp, Flag, Mail, XCircle} from 'lucide-react';

// Assessment Questions Data Structure
const assessmentSections = [
  {
    id: 'edge-cloud',
    title: 'Edge vs. Cloud Architecture Decisions',
    subtitle: 'The #1 mistake that costs hardware startups $500K+',
    questions: [
      {
        id: 'q1',
        text: 'Have you explicitly decided what processing happens on-device vs. cloud based on latency, reliability, and cost requirements?',
        options: [
          { value: 2, label: 'Documented decision matrix exists', icon: CheckCircle },
          { value: 1, label: 'Rough decisions made, not formalized', icon: AlertTriangle },
          { value: 0, label: 'Processing wherever was easiest to build', icon: XCircle },
          { value: -5, label: 'RED FLAG: "We\'ll move it to the cloud later" or "We\'ll optimize edge later"', icon: Flag, isRedFlag: true }
        ]
      },
      {
        id: 'q2',
        text: 'Can your core product function work when network connectivity is lost?',
        options: [
          { value: 2, label: 'Yes, all critical functions work offline', icon: CheckCircle },
          { value: 1, label: 'Degraded functionality, some features offline', icon: AlertTriangle },
          { value: 0, label: 'Requires constant connectivity', icon: XCircle },
          { value: -5, label: 'RED FLAG: "Users always have WiFi" or "5G will solve this"', icon: Flag, isRedFlag: true }
        ]
      },
      {
        id: 'q3',
        text: 'Do you have a clear strategy for state synchronization between edge devices and cloud?',
        options: [
          { value: 2, label: 'Documented sync strategy with conflict resolution', icon: CheckCircle },
          { value: 1, label: 'Basic syncing works, edge cases unclear', icon: AlertTriangle },
          { value: 0, label: 'No formal sync strategy', icon: XCircle },
          { value: -5, label: 'RED FLAG: "We POST data and hope it works"', icon: Flag, isRedFlag: true }
        ]
      },
      {
        id: 'q4',
        text: 'Have you documented the latency requirements for every critical operation?',
        options: [
          { value: 2, label: 'SLA documented (e.g., "motor control: <10ms, alerts: <500ms")', icon: CheckCircle },
          { value: 1, label: 'General understanding, not formalized', icon: AlertTriangle },
          { value: 0, label: 'No latency requirements documented', icon: XCircle },
          { value: -5, label: 'RED FLAG: "As fast as possible" is your requirement', icon: Flag, isRedFlag: true }
        ]
      },
      {
        id: 'q5',
        text: 'Can you guarantee real-time performance under worst-case load?',
        options: [
          { value: 2, label: 'Load tested at 3-5x expected capacity', icon: CheckCircle },
          { value: 1, label: 'Works fine under normal load', icon: AlertTriangle },
          { value: 0, label: 'Haven\'t load tested real-time components', icon: XCircle },
          { value: -5, label: 'RED FLAG: "It\'s fast enough in the lab"', icon: Flag, isRedFlag: true }
        ]
      }
    ]
  },
  {
    id: 'hardware-integration',
    title: 'Hardware-Software Integration',
    subtitle: 'Where 70% of scaling problems originate',
    questions: [
      {
        id: 'q6',
        text: 'Is your software architecture independent of specific hardware vendors?',
        options: [
          { value: 2, label: 'Hardware abstraction layer (HAL) implemented', icon: CheckCircle },
          { value: 1, label: 'Some abstraction, but tightly coupled in places', icon: AlertTriangle },
          { value: 0, label: 'Hardcoded to specific chips/sensors', icon: XCircle },
          { value: -5, label: 'RED FLAG: "We\'ll always use this chip"', icon: Flag, isRedFlag: true }
        ]
      },
      {
        id: 'q7',
        text: 'Can you swap hardware components without rewriting application logic?',
        options: [
          { value: 2, label: 'Yes, via driver interfaces', icon: CheckCircle },
          { value: 1, label: 'Requires minor code changes', icon: AlertTriangle },
          { value: 0, label: 'Requires major rewrites', icon: XCircle },
          { value: -5, label: 'RED FLAG: "We never change hardware"', icon: Flag, isRedFlag: true }
        ]
      },
      {
        id: 'q8',
        text: 'Do you have a plan for supporting multiple hardware versions simultaneously?',
        options: [
          { value: 2, label: 'Version detection and compatibility matrix', icon: CheckCircle },
          { value: 1, label: 'Basic version handling', icon: AlertTriangle },
          { value: 0, label: 'All devices must be same version', icon: XCircle },
          { value: -5, label: 'RED FLAG: "We\'ll force upgrades"', icon: Flag, isRedFlag: true }
        ]
      }
    ]
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    subtitle: 'Critical for medical devices and HIPAA compliance',
    questions: [
      {
        id: 'q9',
        text: 'How is sensitive data encrypted on the device?',
        options: [
          { value: 2, label: 'Hardware-backed encryption (TPM/Secure Enclave)', icon: CheckCircle },
          { value: 1, label: 'Software encryption implemented', icon: AlertTriangle },
          { value: 0, label: 'No encryption at rest', icon: XCircle },
          { value: -5, label: 'RED FLAG: "Nobody would hack our devices"', icon: Flag, isRedFlag: true }
        ]
      },
      {
        id: 'q10',
        text: 'Do you have a formal process for security patches and updates?',
        options: [
          { value: 2, label: 'OTA updates with rollback capability', icon: CheckCircle },
          { value: 1, label: 'Manual update process exists', icon: AlertTriangle },
          { value: 0, label: 'No update mechanism', icon: XCircle },
          { value: -5, label: 'RED FLAG: "We\'ll recall devices if needed"', icon: Flag, isRedFlag: true }
        ]
      },
      {
        id: 'q11',
        text: 'Are you compliant with relevant regulations (HIPAA, GDPR, FDA)?',
        options: [
          { value: 2, label: 'Full compliance documentation ready', icon: CheckCircle },
          { value: 1, label: 'Working towards compliance', icon: AlertTriangle },
          { value: 0, label: 'Haven\'t started compliance work', icon: XCircle },
          { value: -5, label: 'RED FLAG: "We\'ll worry about that later"', icon: Flag, isRedFlag: true }
        ]
      }
    ]
  },
  {
    id: 'scalability',
    title: 'Scalability & Deployment',
    subtitle: 'Can you scale from 10 to 10,000 devices?',
    questions: [
      {
        id: 'q12',
        text: 'How quickly can you deploy updates to all devices?',
        options: [
          { value: 2, label: '<24 hours with automated staged rollout', icon: CheckCircle },
          { value: 1, label: '1-7 days', icon: AlertTriangle },
          { value: 0, label: 'Weeks or unknown', icon: XCircle },
          { value: -5, label: 'RED FLAG: "We\'ve never done it"', icon: Flag, isRedFlag: true }
        ]
      },
      {
        id: 'q13',
        text: 'Do you have automated testing for hardware-software integration?',
        options: [
          { value: 2, label: 'CI/CD with hardware-in-the-loop testing', icon: CheckCircle },
          { value: 1, label: 'Manual testing process', icon: AlertTriangle },
          { value: 0, label: 'Ad-hoc testing only', icon: XCircle },
          { value: -5, label: 'RED FLAG: "It works on my desk"', icon: Flag, isRedFlag: true }
        ]
      },
      {
        id: 'q14',
        text: 'Can your architecture handle 10x current device count?',
        options: [
          { value: 2, label: 'Load tested and proven', icon: CheckCircle },
          { value: 1, label: 'Theoretically yes, not tested', icon: AlertTriangle },
          { value: 0, label: 'Would require major changes', icon: XCircle },
          { value: -5, label: 'RED FLAG: "We\'ll scale when we need to"', icon: Flag, isRedFlag: true }
        ]
      }
    ]
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Observability',
    subtitle: 'Can you debug issues in production?',
    questions: [
      {
        id: 'q15',
        text: 'Do you have centralized logging from all deployed devices?',
        options: [
          { value: 2, label: 'Real-time log aggregation and alerting', icon: CheckCircle },
          { value: 1, label: 'Logs collected but hard to search', icon: AlertTriangle },
          { value: 0, label: 'No centralized logging', icon: XCircle },
          { value: -5, label: 'RED FLAG: "Users tell us when things break"', icon: Flag, isRedFlag: true }
        ]
      },
      {
        id: 'q16',
        text: 'If a device fails in the field, can you reproduce the issue?',
        options: [
          { value: 2, label: 'Comprehensive diagnostics and state dumps', icon: CheckCircle },
          { value: 1, label: 'Basic error reporting', icon: AlertTriangle },
          { value: 0, label: 'No diagnostic capability', icon: XCircle },
          { value: -5, label: 'RED FLAG: "We ask users to describe what happened"', icon: Flag, isRedFlag: true }
        ]
      },
      {
        id: 'q17',
        text: 'Do you have disaster recovery procedures documented and tested?',
        options: [
          { value: 2, label: 'DR plan tested quarterly', icon: CheckCircle },
          { value: 1, label: 'DR plan exists but untested', icon: AlertTriangle },
          { value: 0, label: 'No DR plan', icon: XCircle },
          { value: -5, label: 'RED FLAG: "We back up to S3"', icon: Flag, isRedFlag: true }
        ]
      }
    ]
  }
];

interface FormData {
  email: string;
  company: string;
  role: string;
  deviceCount: string;
  fundingStage: string;
  answers: Record<string, number>;
}

export default function AssessmentPage() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    company: '',
    role: '',
    deviceCount: '',
    fundingStage: '',
    answers: {}
  });
  
  const [showEmailCapture, setShowEmailCapture] = useState(true);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Calculate score
  const calculateScore = () => {
    const totalPossible = 90;
    const rawScore = Object.values(formData.answers).reduce((sum, val) => sum + val, 0);
    const percentage = Math.max(0, Math.min(100, ((rawScore / totalPossible) * 100)));
    const redFlagCount = Object.values(formData.answers).filter(val => val === -5).length;
    
    return {
      raw: rawScore,
      percentage: Math.round(percentage),
      redFlags: redFlagCount,
      totalQuestions: 17,
      answeredQuestions: Object.keys(formData.answers).length
    };
  };

  const score = calculateScore();

  // Get score interpretation
  const getScoreInterpretation = () => {
    const pct = score.percentage;
    
    if (pct >= 83) {
      return {
        level: 'STRONG ARCHITECTURE',
        color: 'from-emerald-500 to-green-600',
        bgColor: 'bg-emerald-500/10',
        borderColor: 'border-emerald-500/30',
        description: 'You\'re in the top 10% of hardware startups. Minor optimization opportunities exist, and you\'re ready to scale to Series B.',
        recommendation: 'Annual architecture review to stay ahead of scaling challenges.',
        urgency: 'low'
      };
    } else if (pct >= 67) {
      return {
        level: 'MODERATE RISK',
        color: 'from-yellow-500 to-orange-500',
        bgColor: 'bg-yellow-500/10',
        borderColor: 'border-yellow-500/30',
        description: 'You have 3-5 significant architectural risks. Not an immediate crisis, but problems will compound over the next 6-12 months.',
        recommendation: 'Comprehensive 2-week architecture review within 3 months. Priority areas: sections scoring <60% and all red flags.',
        urgency: 'medium'
      };
    } else if (pct >= 50) {
      return {
        level: 'HIGH RISK',
        color: 'from-orange-500 to-red-500',
        bgColor: 'bg-orange-500/10',
        borderColor: 'border-orange-500/30',
        description: 'You\'re 6-18 months from a forced architecture rewrite. Technical debt is already slowing development, and scaling to 1,000+ devices will surface major issues.',
        recommendation: 'Immediate architecture assessment required. Begin remediation on highest-risk items within 30 days.',
        urgency: 'high'
      };
    } else {
      return {
        level: 'CRITICAL RISK',
        color: 'from-red-600 to-red-700',
        bgColor: 'bg-red-500/10',
        borderColor: 'border-red-500/30',
        description: 'Architecture will not support Series B scaling. High probability of $500K-$2M rewrite in next 12 months. May be blocking current fundraising/partnerships.',
        recommendation: 'IMMEDIATE EXPERT INTERVENTION REQUIRED. If you\'re pre-Series A, architecture is your #1 risk.',
        urgency: 'critical'
      };
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.company) {
      alert('Please fill in all required fields');
      return;
    }

    console.log('Email captured:', formData);
    
    setEmailSubmitted(true);
    setShowEmailCapture(false);
    setExpandedSections({ [assessmentSections[0].id]: true });
  };

  const handleAnswerSelect = (questionId: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: value
      }
    }));
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleSubmitAssessment = () => {
    if (score.answeredQuestions < score.totalQuestions) {
      alert(`Please answer all ${score.totalQuestions} questions (${score.answeredQuestions} answered so far)`);
      return;
    }
    
    console.log('Assessment completed:', { ...formData, score });
    
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const interpretation = getScoreInterpretation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      
      <div className="relative">
        <div className="border-b border-slate-800/50 backdrop-blur-sm bg-slate-950/50 sticky top-0 z-40">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold">
              <a href="/" className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Ferreira CTO
              </a>
            </h1>
            <div className="text-sm text-slate-400">
              {!showEmailCapture && score.answeredQuestions} / {score.totalQuestions} answered
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {!showResults && (
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent leading-tight">
                Hardware Startup Architecture Assessment
              </h1>
              <p className="text-xl text-slate-400 mb-2">
                Identify $500K+ architecture mistakes before they happen
              </p>
              <p className="text-slate-500">
                Free assessment • Takes 5-7 minutes • Get instant results
              </p>
            </div>
          )}

          {showEmailCapture && (
            <div className="mb-12">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Get Your Free Architecture Assessment
                    </h2>
                    <p className="text-slate-400">
                      17 questions that reveal the architectural decisions determining whether you'll scale smoothly or face a $2M+ rewrite at Series B.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        placeholder="Your Startup"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Your Role
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      >
                        <option value="">Select role...</option>
                        <option value="founder">Founder/Co-founder</option>
                        <option value="cto">CTO/VP Engineering</option>
                        <option value="engineer">Lead Engineer</option>
                        <option value="pm">Product Manager</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Funding Stage
                      </label>
                      <select
                        value={formData.fundingStage}
                        onChange={(e) => setFormData(prev => ({ ...prev, fundingStage: e.target.value }))}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      >
                        <option value="">Select stage...</option>
                        <option value="pre-seed">Pre-seed</option>
                        <option value="seed">Seed</option>
                        <option value="series-a">Series A</option>
                        <option value="series-b">Series B+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Deployed Devices
                    </label>
                    <select
                      value={formData.deviceCount}
                      onChange={(e) => setFormData(prev => ({ ...prev, deviceCount: e.target.value }))}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    >
                      <option value="">Select range...</option>
                      <option value="0-10">0-10 (Prototype)</option>
                      <option value="10-50">10-50 (Beta)</option>
                      <option value="50-100">50-100 (Early Production)</option>
                      <option value="100-500">100-500 (Scaling)</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 group"
                  >
                    Start Assessment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    Your information is secure. We'll only use it to send you your results and occasional architecture insights.
                  </p>
                </form>
              </div>
            </div>
          )}

          {showResults && (
            <div className="mb-12 space-y-6">
              <div className={`rounded-2xl p-8 border ${interpretation.borderColor} ${interpretation.bgColor}`}>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${interpretation.color} bg-clip-text text-transparent`}>
                      {interpretation.level}
                    </h2>
                    <div className="text-4xl font-bold text-white mb-2">
                      {score.percentage}% Score
                    </div>
                    {score.redFlags > 0 && (
                      <div className="flex items-center gap-2 text-red-400">
                        <Flag className="w-5 h-5" />
                        <span className="font-semibold">{score.redFlags} Red Flags Detected</span>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-slate-300 mb-4 text-lg">
                  {interpretation.description}
                </p>

                <div className="bg-slate-900/50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-white mb-2">Recommended Action:</h3>
                  <p className="text-slate-300">{interpretation.recommendation}</p>
                </div>

                <div className="space-y-3">
                  <a
                    href="/#contact"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all text-center"
                  >
                    {interpretation.urgency === 'critical' || interpretation.urgency === 'high' 
                      ? 'Schedule Urgent Architecture Review → $15,000'
                      : interpretation.urgency === 'medium'
                      ? 'Book Free 30-Minute Assessment Call'
                      : 'Schedule Annual Architecture Review'
                    }
                  </a>
                  
                  <button
                    onClick={() => setShowResults(false)}
                    className="w-full px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all"
                  >
                    Review My Answers
                  </button>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                <h3 className="text-xl font-bold text-white mb-4">Score Breakdown</h3>
                <div className="space-y-3">
                  {assessmentSections.map(section => {
                    const sectionScore = section.questions.reduce((sum, q) => 
                      sum + (formData.answers[q.id] || 0), 0
                    );
                    const sectionMax = section.questions.length * 2;
                    const sectionPct = Math.max(0, ((sectionScore / sectionMax) * 100));
                    
                    return (
                      <div key={section.id} className="flex items-center justify-between py-2 border-b border-slate-800 last:border-0">
                        <span className="text-slate-300">{section.title}</span>
                        <span className={`font-semibold ${
                          sectionPct >= 80 ? 'text-emerald-400' :
                          sectionPct >= 60 ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>
                          {Math.round(sectionPct)}%
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {!showEmailCapture && !showResults && (
            <div className="space-y-4">
              {assessmentSections.map((section, sectionIndex) => (
                <div key={section.id} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700/50 overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-800/50 transition-all"
                  >
                    <div className="text-left">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded">
                          Section {sectionIndex + 1}
                        </span>
                        <h3 className="text-lg font-bold text-white">
                          {section.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-400">{section.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-slate-500">
                        {section.questions.filter(q => formData.answers[q.id] !== undefined).length}/{section.questions.length}
                      </span>
                      {expandedSections[section.id] ? (
                        <ChevronUp className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {expandedSections[section.id] && (
                    <div className="px-6 pb-6 space-y-6">
                      {section.questions.map((question, qIndex) => (
                        <div key={question.id} className="border-t border-slate-700/50 pt-6">
                          <div className="flex gap-3 mb-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-sm font-semibold text-slate-400">
                              {qIndex + 1}
                            </span>
                            <p className="text-white font-medium leading-relaxed">{question.text}</p>
                          </div>

                          <div className="space-y-2 ml-11">
                            {question.options.map((option) => {
                              const isSelected = formData.answers[question.id] === option.value;
                              const Icon = option.icon;
                              
                              return (
                                <button
                                  key={option.value}
                                  onClick={() => handleAnswerSelect(question.id, option.value)}
                                  className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                                    isSelected
                                      ? option.isRedFlag
                                        ? 'border-red-500 bg-red-500/10'
                                        : option.value === 2
                                        ? 'border-emerald-500 bg-emerald-500/10'
                                        : option.value === 1
                                        ? 'border-yellow-500 bg-yellow-500/10'
                                        : 'border-slate-500 bg-slate-500/10'
                                      : 'border-slate-700 hover:border-slate-600 bg-slate-800/30 hover:bg-slate-800/50'
                                  }`}
                                >
                                  <div className="flex items-start gap-3">
                                    <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                      isSelected
                                        ? option.isRedFlag
                                          ? 'text-red-400'
                                          : option.value === 2
                                          ? 'text-emerald-400'
                                          : option.value === 1
                                          ? 'text-yellow-400'
                                          : 'text-slate-400'
                                        : 'text-slate-600'
                                    }`} />
                                    <span className={`${
                                      isSelected ? 'text-white' : 'text-slate-300'
                                    }`}>
                                      {option.label}
                                    </span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="sticky bottom-6 pt-6">
                <button
                  onClick={handleSubmitAssessment}
                  disabled={score.answeredQuestions < score.totalQuestions}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-bold rounded-lg shadow-lg hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 group"
                >
                  {score.answeredQuestions < score.totalQuestions ? (
                    <>Answer All Questions to See Results ({score.answeredQuestions}/{score.totalQuestions})</>
                  ) : (
                    <>
                      Get My Architecture Assessment Results
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {!showEmailCapture && !showResults && (
            <div className="mt-12 text-center">
              <p className="text-slate-400 mb-4">
                Questions about the assessment?
              </p>
              <a href="/#contact" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                Contact Peter Ferreira →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
