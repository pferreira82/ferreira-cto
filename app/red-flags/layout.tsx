import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The 7 Red Flags Assessment | Ferreira CTO',
  description: 'Two free assessments for hardware and deeptech founders — a 7-question strategy check and a 5-question mindset check. Find the gaps in your startup before an investor does.',
  keywords: [
    'startup strategy assessment',
    'hardware startup red flags',
    'founder mindset check',
    'startup diligence checklist',
    'fractional CTO assessment',
    'edge AI startup risk',
  ],
  openGraph: {
    title: 'The 7 Red Flags Assessment | Ferreira CTO',
    description: 'Would your strategy survive a Series A diligence call? Find the gaps before an investor does. Free, 5 minutes.',
    url: 'https://ferreiracto.com/red-flags',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The 7 Red Flags Assessment | Ferreira CTO',
    description: 'Would your strategy survive a Series A diligence call? Find the gaps before an investor does. Free, 5 minutes.',
  },
  alternates: {
    canonical: 'https://ferreiracto.com/red-flags',
  },
};

export default function RedFlagsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
