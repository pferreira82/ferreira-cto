export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/ferreira-cto-logo.svg"
                alt="Ferreira CTO"
                style={{ width: '160px', height: 'auto' }}
              />
            </div>
            <p className="text-slate-400">
              Fractional strategic advisory for hardware, edge AI, and deeptech founders. Home of the Build Anyway Program.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#offer" className="text-slate-400 hover:text-blue-400 transition-colors">
                  The Offer
                </a>
              </li>
              <li>
                <a href="/build-anyway" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Build Anyway
                </a>
              </li>
              <li>
                <a href="/podcast" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Podcast
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-slate-400 hover:text-blue-400 transition-colors">
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

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:peter@ferreiracto.com"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  peter@ferreiracto.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/peter-ferreira-0177061b/"
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
