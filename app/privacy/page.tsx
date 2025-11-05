import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="relative">
      <Header />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose prose-invert prose-slate max-w-none">
            <p className="text-xl text-slate-300 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-slate-300 mb-4">
                When you use our website, we may collect:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Contact information (name, email) when you submit forms</li>
                <li>Usage data and analytics through cookies</li>
                <li>Technical information (browser type, IP address)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-slate-300 mb-4">
                We use collected information to:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Respond to inquiries and consultation requests</li>
                <li>Improve our website and services</li>
                <li>Analyze website traffic and user behavior</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Cookies</h2>
              <p className="text-slate-300 mb-4">
                We use cookies to enhance your browsing experience. You can control cookie 
                preferences through your browser settings or our cookie consent banner.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Contact Us</h2>
              <p className="text-slate-300">
                Questions about this Privacy Policy? Email:{" "}
                <a 
                  href="mailto:contact@ferreiracto.com" 
                  className="text-blue-400 hover:text-blue-300"
                >
                  contact@ferreiracto.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
