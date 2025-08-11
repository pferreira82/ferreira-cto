'use client';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  org: string;
  message: string;
}

interface FieldErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    org: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const errors: FieldErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear previous errors
    setFieldErrors({});
    setMessage('');

    // Client-side validation
    if (!validateForm()) {
      setStatus('error');
      setMessage('Please fix the errors below and try again.');
      return;
    }

    setStatus('sending');

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

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 400 && result.details) {
          // Handle validation errors from server
          const serverErrors: FieldErrors = {};
          result.details.forEach((detail: any) => {
            serverErrors[detail.field] = detail.message;
          });
          setFieldErrors(serverErrors);
          setStatus('error');
          setMessage('Please fix the errors below and try again.');
        } else if (response.status === 429) {
          setStatus('error');
          setMessage('Too many requests. Please wait a few minutes before trying again.');
        } else {
          throw new Error(result.error || `Server error (${response.status})`);
        }
        return;
      }

      setStatus('success');
      setMessage('Thanks! I will get back to you within 24 hours.');

      // Reset form
      setFormData({ name: '', email: '', org: '', message: '' });
      form.reset();

    } catch (error: any) {
      console.error('Contact form error:', error);
      setStatus('error');
      setMessage('Something went wrong. Please try again or email me directly.');
    }
  };

  const getFieldClassName = (fieldName: string, baseClass: string) => {
    return `${baseClass} ${fieldErrors[fieldName] ? 'border-red-400 focus:ring-red-500/20 focus:border-red-500' : ''}`;
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
                className={getFieldClassName('name', 'form-input')}
                placeholder="Jane Doe"
                disabled={status === 'sending'}
            />
            {fieldErrors.name && (
                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {fieldErrors.name}
                </p>
            )}
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
                className={getFieldClassName('email', 'form-input')}
                placeholder="you@company.com"
                disabled={status === 'sending'}
            />
            {fieldErrors.email && (
                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {fieldErrors.email}
                </p>
            )}
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
              className={getFieldClassName('message', 'form-input resize-none')}
              placeholder="Briefly describe your project, challenges, or goals. I would love to learn more about what you are building."
              disabled={status === 'sending'}
          />
          <div className="text-xs text-slate-400 mt-1">
            {formData.message.length}/10 characters minimum
          </div>
          {fieldErrors.message && (
              <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} />
                {fieldErrors.message}
              </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
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
              <div className={`flex items-center gap-2 text-sm rounded-lg px-3 py-2 ${
                  status === 'success'
                      ? 'text-green-300 bg-green-900/20 border border-green-700/30'
                      : 'text-red-300 bg-red-900/20 border border-red-700/30'
              }`}>
                {status === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                {message}
              </div>
          )}
        </div>

        {status === 'error' && Object.keys(fieldErrors).length > 0 && (
            <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
              <p className="text-red-300 text-sm font-medium mb-2">Please fix the following errors:</p>
              <ul className="text-red-300 text-sm space-y-1">
                {Object.entries(fieldErrors).map(([field, error]) => (
                    <li key={field} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                      <span className="capitalize">{field}:</span> {error}
                    </li>
                ))}
              </ul>
            </div>
        )}
      </form>
  );
}