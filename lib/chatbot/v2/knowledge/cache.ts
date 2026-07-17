export class CacheLayer {
  // In-memory cache for CMS/Static data
  private static cache = new Map<string, { value: any, expiresAt: number }>();
  private static TTL_MS = 60 * 1000; // 60 seconds TTL

  static get(key: string): any | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return null;
    }
    return entry.value;
  }

  static set(key: string, value: any): void {
    this.cache.set(key, {
      value,
      expiresAt: Date.now() + this.TTL_MS
    });
  }
}
