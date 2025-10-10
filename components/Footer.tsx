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
