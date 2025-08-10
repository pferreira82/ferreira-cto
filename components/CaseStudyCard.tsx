export interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  metrics?: Array<{ label: string; value: string; }>;
  image: string;
  tags: string[];
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const { title, excerpt, metrics, image, tags } = caseStudy;

  return (
    <article className="group card overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
      <div className="relative h-64 w-full bg-gradient-to-br from-brand-800/50 to-brand-900/50 overflow-hidden flex items-center justify-center">
        <img 
          src={image} 
          alt={`${title} case study illustration`}
          className="w-full h-full object-contain p-8 transition-transform group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-brand-300 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-3 text-balance">
          {title}
        </h3>

        <p className="text-slate-300 leading-relaxed mb-6">
          {excerpt}
        </p>

        {metrics && metrics.length > 0 && (
          <dl className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <dt className="text-xs text-slate-400 uppercase tracking-wide font-medium">
                  {metric.label}
                </dt>
                <dd className="font-semibold text-lg mt-1 text-brand-300">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </article>
  );
}