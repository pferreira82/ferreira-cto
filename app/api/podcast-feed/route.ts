import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const RSS_URL = 'https://anchor.fm/s/10871358c/podcast/rss';
    
    const response = await fetch(RSS_URL, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch RSS feed');
    }

    const xmlText = await response.text();
    
    // Parse RSS XML
    const episodes = parseRSS(xmlText);

    return NextResponse.json({
      episodes,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching podcast feed:', error);
    return NextResponse.json(
      { error: 'Failed to fetch podcast feed' },
      { status: 500 }
    );
  }
}

function parseRSS(xmlText: string) {
  const episodes: Array<{
    title: string;
    description: string;
    link: string;
    pubDate: string;
    duration: string;
    spotifyUrl: string;
    episodeNumber?: string;
  }> = [];

  // Extract items from RSS feed
  const itemMatches = xmlText.matchAll(/<item>(.*?)<\/item>/gs);

  for (const match of itemMatches) {
    const itemContent = match[1];

    // Extract fields
    const title = extractTag(itemContent, 'title');
    const description = extractTag(itemContent, 'description');
    const link = extractTag(itemContent, 'link');
    const pubDate = extractTag(itemContent, 'pubDate');
    const duration = extractTag(itemContent, 'itunes:duration');
    
    // Try to extract Spotify URL from enclosure or link
    let spotifyUrl = '';
    const enclosureMatch = itemContent.match(/url="([^"]+)"/);
    if (enclosureMatch) {
      spotifyUrl = enclosureMatch[1];
    }

    // Extract episode number if available
    const episodeMatch = itemContent.match(/itunes:episode>(\d+)</);
    const episodeNumber = episodeMatch ? episodeMatch[1] : undefined;

    if (title && description) {
      episodes.push({
        title,
        description,
        link,
        pubDate,
        duration: formatDuration(duration),
        spotifyUrl,
        episodeNumber
      });
    }
  }

  return episodes;
}

function extractTag(content: string, tagName: string): string {
  // Handle both <tag>content</tag> and <tag><![CDATA[content]]></tag>
  const cdataPattern = new RegExp(`<${tagName}[^>]*><!\\[CDATA\\[(.*?)\\]\\]><\/${tagName}>`, 's');
  const cdataMatch = content.match(cdataPattern);
  if (cdataMatch) {
    return cdataMatch[1].trim();
  }

  const pattern = new RegExp(`<${tagName}[^>]*>(.*?)<\/${tagName}>`, 's');
  const match = content.match(pattern);
  return match ? match[1].trim() : '';
}

function formatDuration(duration: string): string {
  if (!duration) return '';
  
  // Duration might be in seconds or HH:MM:SS format
  if (duration.includes(':')) {
    return duration;
  }

  // Convert seconds to MM:SS or HH:MM:SS
  const seconds = parseInt(duration, 10);
  if (isNaN(seconds)) return '';

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}
