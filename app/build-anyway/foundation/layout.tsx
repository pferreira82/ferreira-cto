import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Foundation — Level 1 | Build Anyway Program | Ferreira CTO',
  description: 'An 8-session group program for people in recovery who want to build a business, side income, or practice. Runs inside IOP and outpatient programs. 4 weeks, 75 minutes per session.',
  keywords: [
    'Build Anyway Foundation',
    'entrepreneurship for recovery',
    'IOP entrepreneurship program',
    'business program in recovery',
    'recovery entrepreneur curriculum',
    'Build Anyway program level 1',
  ],
  openGraph: {
    title: 'Foundation — Level 1 | Build Anyway | Ferreira CTO',
    description: 'An 8-session entrepreneurship program for people in recovery. Runs inside IOP programs. 4 weeks, 75 minutes per session.',
    url: 'https://ferreiracto.com/build-anyway/foundation',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundation — Level 1 | Build Anyway | Ferreira CTO',
    description: 'An 8-session entrepreneurship program for people in recovery. Runs inside IOP programs.',
  },
};

export default function FoundationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
