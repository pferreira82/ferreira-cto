'use client';
import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="container mx-auto max-w-4xl">
        <div className="relative bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 backdrop-blur-xl bg-opacity-95">
          <button
            onClick={declineCookies}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Cookie className="w-6 h-6 text-blue-400" />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">We Value Your Privacy</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and 
                provide personalized content. By clicking "Accept", you consent to our use of cookies. 
                Read our{' '}
                <a 
                  href="/privacy" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Privacy Policy
                </a>
                {' '}to learn more.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={declineCookies}
                className="px-6 py-2.5 border border-slate-600 hover:border-slate-500 rounded-lg font-medium transition-all text-sm whitespace-nowrap"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-all text-sm whitespace-nowrap"
              >
                Accept Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
