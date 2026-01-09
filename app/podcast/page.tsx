'use client';
import { useState, useEffect } from 'react';
import { Headphones, ExternalLink, Loader2, Play, Calendar, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';

interface Episode {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  duration: string;
  spotifyUrl: string;
  episodeNumber?: string;
}

const PODCAST_PLATFORMS = {
  spotify: {
    name: 'Spotify',
    url: 'https://open.spotify.com/show/7gZQ9gBosR0X1FRIAcCMA2',
    icon: '🎵',
    color: 'bg-green-500 hover:bg-green-400'
  },
  apple: {
    name: 'Apple Podcasts',
    url: 'https://podcasts.apple.com/us/podcast/ferreira-cto/id1867519294',
    icon: '🎧',
    color: 'bg-purple-500 hover:bg-purple-400'
  },
  amazon: {
    name: 'Amazon Music',
    url: 'https://music.amazon.com/podcasts/2cfde37d-689f-43f3-853b-ebf36ab93f98/ferreira-cto',
    icon: '🔊',
    color: 'bg-blue-500 hover:bg-blue-400'
  },
  iheart: {
    name: 'iHeart Radio',
    url: 'https://www.iheart.com/podcast/316294716/',
    icon: '❤️',
    color: 'bg-red-500 hover:bg-red-400'
  }
};

export default function PodcastPage() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [preferredPlatform, setPreferredPlatform] = useState<keyof typeof PODCAST_PLATFORMS>('spotify');

  useEffect(() => {
    // Load preferred platform from localStorage
    const saved = localStorage.getItem('preferredPodcastPlatform');
    if (saved && saved in PODCAST_PLATFORMS) {
      setPreferredPlatform(saved as keyof typeof PODCAST_PLATFORMS);
    }

    // Fetch episodes
    fetchEpisodes();
  }, []);

  const fetchEpisodes = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/podcast-feed');
      if (!response.ok) throw new Error('Failed to fetch episodes');
      const data = await response.json();
      setEpisodes(data.episodes.slice(0, 5));
    } catch (err) {
      setError('Unable to load episodes. Please visit the podcast directly.');
      console.error('Error fetching episodes:', err);
    } finally {
      setLoading(false);
    }
  };

  const handlePlatformChange = (platform: keyof typeof PODCAST_PLATFORMS) => {
    setPreferredPlatform(platform);
    localStorage.setItem('preferredPodcastPlatform', platform);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getListenUrl = (episode: Episode) => {
    // If we have a Spotify URL, use it; otherwise fall back to platform URL
    return episode.link || PODCAST_PLATFORMS[preferredPlatform].url;
  };

  return (
      <div className="relative">
        <Header />

        {/* HERO SECTION */}
        <section className="container mx-auto px-6 pt-32 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
              <Headphones className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Podcast</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight">
              Ferreira CTO Podcast
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Real conversations about building hardware-first startups, edge computing, and the architecture decisions
              that matter when you're scaling robotics and IoT systems.
            </p>

            {/* Platform Selector */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {Object.entries(PODCAST_PLATFORMS).map(([key, platform]) => (
                  <button
                      key={key}
                      onClick={() => handlePlatformChange(key as keyof typeof PODCAST_PLATFORMS)}
                      className={`
                  px-4 py-2 rounded-lg font-medium transition-all
                  ${preferredPlatform === key
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}
                `}
                  >
                    <span className="mr-2">{platform.icon}</span>
                    {platform.name}
                  </button>
              ))}
            </div>

            <a
                href={PODCAST_PLATFORMS[preferredPlatform].url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
              inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all text-white
              ${PODCAST_PLATFORMS[preferredPlatform].color}
            `}
            >
              Subscribe on {PODCAST_PLATFORMS[preferredPlatform].name}
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* LATEST EPISODES */}
        <Section
            title="Latest Episodes"
            subtitle="Practical insights from building OrbCare and reviewing hardware startup architectures"
        >
          {loading && (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
                <span className="ml-3 text-slate-400">Loading episodes...</span>
              </div>
          )}

          {error && (
              <div className="max-w-2xl mx-auto p-6 rounded-xl bg-red-500/10 border border-red-500/30 text-center">
                <p className="text-red-300 mb-4">{error}</p>
                <a
                    href={PODCAST_PLATFORMS.spotify.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Listen on Spotify
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
          )}

          {!loading && !error && episodes.length > 0 && (
              <div className="max-w-4xl mx-auto space-y-6">
                {episodes.map((episode, idx) => (
                    <div
                        key={idx}
                        className="group p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 bg-slate-900/50 hover:bg-slate-800/50 transition-all"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Episode Artwork/Number */}
                        <div className="flex-shrink-0">
                          <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                            <Headphones className="w-12 h-12 text-white" />
                          </div>
                        </div>

                        {/* Episode Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                            {episode.title}
                          </h3>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(episode.pubDate)}</span>
                            </div>
                            {episode.duration && (
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  <span>{episode.duration}</span>
                                </div>
                            )}
                          </div>

                          <p className="text-slate-300 mb-4 line-clamp-3">
                            {episode.description.replace(/<[^>]*>/g, '')}
                          </p>

                          <a
                              href={getListenUrl(episode)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-all"
                          >
                            <Play className="w-4 h-4" />
                            Listen Now
                          </a>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
          )}

          {!loading && !error && episodes.length === 0 && (
              <div className="text-center py-16">
                <p className="text-slate-400 mb-4">No episodes available yet.</p>
                <a
                    href={PODCAST_PLATFORMS.spotify.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Check back soon
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
          )}
        </Section>

        {/* SUBSCRIBE SECTION */}
        <Section
            title="Subscribe"
            subtitle="Listen on your favorite platform"
        >
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(PODCAST_PLATFORMS).map(([key, platform]) => (
                <a
                    key={key}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 bg-slate-900/50 hover:bg-slate-800/50 transition-all text-center"
                >
                  <div className="text-4xl mb-3">{platform.icon}</div>
                  <h3 className="font-bold mb-2 group-hover:text-blue-300 transition-colors">
                    {platform.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1 text-sm text-slate-400 group-hover:text-blue-400 transition-colors">
                    <span>Subscribe</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-12 p-6 rounded-xl bg-blue-500/10 border border-blue-500/30">
            <h3 className="text-xl font-bold mb-3 text-center">RSS Feed</h3>
            <p className="text-sm text-slate-400 text-center mb-4">
              Prefer your own podcast app? Add this RSS feed:
            </p>
            <div className="flex items-center gap-2 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
              <code className="flex-1 text-sm text-blue-300 break-all">
                https://anchor.fm/s/10871358c/podcast/rss
              </code>
              <button
                  onClick={() => {
                    navigator.clipboard.writeText('https://anchor.fm/s/10871358c/podcast/rss');
                    alert('RSS feed copied!');
                  }}
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded text-sm font-medium transition-all"
              >
                Copy
              </button>
            </div>
          </div>
        </Section>

        {/* ABOUT THE PODCAST */}
        <Section
            title="About the Podcast"
            subtitle="Why I started this and what you'll learn"
        >
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50">
              <p className="text-slate-300 leading-relaxed mb-4">
                I started the Ferreira CTO podcast to share what I'm learning while building OrbCare and
                doing architecture reviews for hardware-first startups. These aren't theoretical discussions—they're
                real problems I'm solving and decisions I'm making.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                You'll hear about:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Edge vs cloud processing decisions and when each makes sense</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>HIPAA compliance and privacy-by-design architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Real-time systems and handling failure modes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Common architecture mistakes that become expensive rewrites</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Behind-the-scenes of building a health monitoring robot from scratch</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Footer />
      </div>
  );
}