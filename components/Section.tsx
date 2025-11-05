interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section 
      id={id}
      className="container mx-auto px-6 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
