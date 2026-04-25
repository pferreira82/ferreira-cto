import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Before the Rewrite — Podcast',
  description: 'A podcast about rebuilding from the ground up — in business, in recovery, and in life. Hosted by Peter Ferreira, fractional CTO and founder of the Build Anyway Program. New episodes weekly.',
  keywords: [
    'Before the Rewrite podcast',
    'hardware startup podcast',
    'founder recovery podcast',
    'entrepreneurship podcast',
    'Peter Ferreira podcast',
    'Build Anyway podcast',
  ],
  openGraph: {
    title: 'Before the Rewrite — Podcast | Ferreira CTO',
    description: 'A podcast about rebuilding from the ground up — in business, in recovery, and in life. New episodes weekly.',
    url: 'https://ferreiracto.com/podcast',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Before the Rewrite — Podcast | Ferreira CTO',
    description: 'A podcast about rebuilding from the ground up — in business, in recovery, and in life. New episodes weekly.',
  },
  alternates: {
    canonical: 'https://ferreiracto.com/podcast',
  },
};

export default function PodcastLayout({ children }: { children: React.ReactNode }) {
  return children;
}
