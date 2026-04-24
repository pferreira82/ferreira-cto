import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="relative">
      <Header />

      <section className="container mx-auto px-6 pt-40 pb-24 text-center">
        <div className="max-w-xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
            style={{ borderColor: '#c8a96e55', backgroundColor: '#c8a96e11' }}
          >
            <span className="text-sm font-mono" style={{ color: '#c8a96e' }}>Coming Soon</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight">
            This page is on its way.
          </h1>

          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            We're still building this one out. In the meantime, you can explore the rest of the site or get in touch directly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all text-slate-950"
              style={{ backgroundColor: '#c8a96e' }}
            >
              Back to Home
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:peter@ferreiracto.com"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 hover:border-[#c8a96e] rounded-lg font-semibold transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
