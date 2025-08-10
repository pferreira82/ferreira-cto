import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ 
  id, 
  eyebrow, 
  title, 
  subtitle, 
  children,
  className = ""
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={`mx-auto max-w-7xl px-6 py-24 ${className}`}
    >
      <div className="max-w-3xl mb-16 animate-slide-up">
        {eyebrow && (
          <div className="inline-flex items-center rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300 tracking-wide uppercase">
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-4 text-balance">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-slate-300 mt-6 leading-relaxed text-balance">
            {subtitle}
          </p>
        )}
      </div>
      <div className="animate-fade-in">
        {children}
      </div>
    </section>
  );
}