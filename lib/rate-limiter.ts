interface RateLimitEntry {
  count: number;
  resetTime: number;
}

class RateLimiter {
  private requests = new Map<string, RateLimitEntry>();
  private limit: number;
  private windowMs: number;

  constructor(limit: number = 5, windowMs: number = 60 * 1000) {
    this.limit = limit;
    this.windowMs = windowMs;
  }

  check(identifier: string): { allowed: boolean; remaining: number; resetTime: number } {
    const now = Date.now();
    const entry = this.requests.get(identifier);

    if (!entry || now > entry.resetTime) {
      // First request or window expired
      const newEntry: RateLimitEntry = {
        count: 1,
        resetTime: now + this.windowMs
      };
      this.requests.set(identifier, newEntry);
      return {
        allowed: true,
        remaining: this.limit - 1,
        resetTime: newEntry.resetTime
      };
    }

    if (entry.count >= this.limit) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: entry.resetTime
      };
    }

    entry.count++;
    this.requests.set(identifier, entry);

    return {
      allowed: true,
      remaining: this.limit - entry.count,
      resetTime: entry.resetTime
    };
  }

  cleanup() {
    const now = Date.now();
    for (const [key, entry] of this.requests.entries()) {
      if (now > entry.resetTime) {
        this.requests.delete(key);
      }
    }
  }
}

export const contactRateLimiter = new RateLimiter(
  Number(process.env.CONTACT_RATE_LIMIT) || 5,
  15 * 60 * 1000 // 15 minutes
);

// Cleanup expired entries every hour
if (typeof setInterval !== 'undefined') {
  setInterval(() => contactRateLimiter.cleanup(), 60 * 60 * 1000);
}