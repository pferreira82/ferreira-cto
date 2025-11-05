export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Ferreira CTO
            </h3>
            <p className="text-slate-400">
              Technical quarterback for longevity & health robotics investments
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#consulting" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:contact@ferreiracto.com"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  contact@ferreiracto.com
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/pferreira82"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ferreira CTO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
