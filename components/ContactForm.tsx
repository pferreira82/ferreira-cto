'use client';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  org: string;
  message: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    org: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setMessage('');

    // Get form data including honeypot
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || `HTTP ${response.status}`);
      }

      setStatus('success');
      setMessage('Thanks! I will get back to you within 24 hours.');

      // Reset form
      setFormData({ name: '', email: '', org: '', message: '' });
      form.reset();

    } catch (error: any) {
      setStatus('error');
      setMessage(error?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-8 space-y-6">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="company"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Jane Doe"
            disabled={status === 'sending'}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
            placeholder="you@company.com"
            disabled={status === 'sending'}
          />
        </div>
      </div>

      <div>
        <label htmlFor="org" className="block text-sm font-medium text-slate-300 mb-2">
          Company
        </label>
        <input
          id="org"
          name="org"
          type="text"
          value={formData.org}
          onChange={handleInputChange}
          className="form-input"
          placeholder="Company Inc."
          disabled={status === 'sending'}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
          What do you need help with? *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleInputChange}
          className="form-input resize-none"
          placeholder="Briefly describe your project, challenges, or goals. I would love to learn more about what you are building."
          disabled={status === 'sending'}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-primary flex items-center gap-2"
        >
          {status === 'sending' ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
              Sending...
            </>
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </button>

        {message && (
          <div className={`flex items-center gap-2 text-sm ${
            status === 'success' ? 'text-green-400' : 'text-red-400'
          }`}>
            {status === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
            {message}
          </div>
        )}
      </div>
    </form>
  );
}