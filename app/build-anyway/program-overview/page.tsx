'use client';
import { forDirectors, buildAway, site } from '@/lib/content';

const LEVEL_COLORS: Record<string, string> = {
  blue: '#6a9ebf',
  purple: '#9e6a9e',
  gold: '#c8a96e',
};

export default function ProgramOverviewPage() {
  return (
    <>
      {/* Print styles injected via style tag */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: #111 !important; }
          .doc { box-shadow: none !important; }
        }
        @media screen {
          body { background: #f4f4f0; }
        }
      `}</style>

      {/* Toolbar — screen only */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 bg-slate-950 border-b border-slate-800 px-6 py-3 flex items-center justify-between">
        <a href="/build-anyway/for-directors" className="text-sm text-slate-400 hover:text-white transition-colors">
          ← Back
        </a>
        <button
          onClick={() => window.print()}
          className="px-5 py-2 rounded-lg text-sm font-semibold text-slate-950 transition-all"
          style={{ backgroundColor: '#c8a96e' }}
        >
          Save as PDF
        </button>
      </div>

      {/* Document */}
      <div className="doc min-h-screen pt-16 pb-16 px-4" style={{ background: '#f4f4f0' }}>
        <div
          className="max-w-2xl mx-auto bg-white shadow-lg"
          style={{ fontFamily: 'Georgia, serif', color: '#111' }}
        >

          {/* Header */}
          <div style={{ background: '#0f172a', padding: '40px 48px 32px' }}>
            <div style={{ color: '#c8a96e', fontFamily: 'monospace', fontSize: 11, letterSpacing: 4, marginBottom: 10, textTransform: 'uppercase' }}>
              Ferreira CTO
            </div>
            <h1 style={{ color: '#fff', fontSize: 28, fontWeight: 700, margin: '0 0 8px', lineHeight: 1.3 }}>
              Build Anyway Program
            </h1>
            <p style={{ color: '#94a3b8', fontSize: 14, margin: 0 }}>
              Program Overview for IOP Directors — {new Date().getFullYear()}
            </p>
          </div>

          <div style={{ padding: '40px 48px' }}>

            {/* What it is */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ color: '#c8a96e', fontFamily: 'monospace', fontSize: 10, letterSpacing: 3, marginBottom: 10, textTransform: 'uppercase' }}>
                The Program
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.8, margin: 0, color: '#334155' }}>
                {forDirectors.hero.subhead}
              </p>
            </div>

            {/* Why it works */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ color: '#c8a96e', fontFamily: 'monospace', fontSize: 10, letterSpacing: 3, marginBottom: 16, textTransform: 'uppercase' }}>
                Why It Works
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {forDirectors.case.map((item) => (
                  <div key={item.label} style={{ borderLeft: '3px solid #c8a96e', paddingLeft: 16 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{item.headline}</div>
                    <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6 }}>{item.body}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Program details */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ color: '#c8a96e', fontFamily: 'monospace', fontSize: 10, letterSpacing: 3, marginBottom: 16, textTransform: 'uppercase' }}>
                {forDirectors.programDetails.headline}
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <tbody>
                  {forDirectors.programDetails.items.map((item, i) => (
                    <tr key={item.label} style={{ borderBottom: '1px solid #e2e8f0', background: i % 2 === 0 ? '#f8fafc' : 'white' }}>
                      <td style={{ padding: '10px 12px', fontWeight: 600, color: '#475569', width: '35%' }}>{item.label}</td>
                      <td style={{ padding: '10px 12px', color: '#1e293b' }}>{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Three levels */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ color: '#c8a96e', fontFamily: 'monospace', fontSize: 10, letterSpacing: 3, marginBottom: 16, textTransform: 'uppercase' }}>
                The Three Levels
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {buildAway.levels.map((level) => {
                  const accent = LEVEL_COLORS[level.color];
                  return (
                    <div
                      key={level.number}
                      style={{ border: `1px solid #e2e8f0`, borderTop: `3px solid ${accent}`, borderRadius: 4, padding: '14px 16px' }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                        <div>
                          <span style={{ color: accent, fontWeight: 700, fontSize: 12, fontFamily: 'monospace' }}>Level {level.number} — </span>
                          <span style={{ fontWeight: 700, fontSize: 14 }}>{level.name}</span>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: 12, color: '#64748b' }}>
                          <div>{level.duration}</div>
                          <div style={{ color: accent, fontWeight: 600 }}>${level.seatPrice}/seat</div>
                        </div>
                      </div>
                      <div style={{ fontSize: 13, color: '#475569', marginBottom: 4 }}>{level.setting}</div>
                      <div style={{ fontSize: 13, color: '#1e293b', fontStyle: 'italic' }}>{level.headline}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* What this is not */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ color: '#c8a96e', fontFamily: 'monospace', fontSize: 10, letterSpacing: 3, marginBottom: 12, textTransform: 'uppercase' }}>
                {forDirectors.whatThisIsNot.headline}
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: '#475569', lineHeight: 2 }}>
                {forDirectors.whatThisIsNot.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Scholarship */}
            <div style={{ background: '#fefce8', border: '1px solid #fde68a', borderLeft: '4px solid #c8a96e', borderRadius: 4, padding: '16px 20px', marginBottom: 36 }}>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{forDirectors.scholarship.headline}</div>
              <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7 }}>{forDirectors.scholarship.body}</div>
            </div>

            {/* Contact */}
            <div style={{ borderTop: '2px solid #e2e8f0', paddingTop: 28 }}>
              <div style={{ color: '#c8a96e', fontFamily: 'monospace', fontSize: 10, letterSpacing: 3, marginBottom: 10, textTransform: 'uppercase' }}>
                Get in Touch
              </div>
              <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.7, margin: '0 0 8px' }}>
                {forDirectors.contact.body}
              </p>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#1e293b' }}>
                {site.email} · {site.phone}
              </div>
              <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 24, textAlign: 'center' }}>
                ferreiracto.com · {new Date().getFullYear()} Ferreira CTO. All rights reserved.
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
