import { CacheLayer } from "./cache";

export type DataSource = "sanity" | "static" | "markdown" | "vector";

export class KnowledgeRegistry {
  /**
   * Abstracts data fetching away from the Domain Services.
   * Transparently handles caching. In the future, this can map
   * semantic queries to vector databases or static PDFs.
   */
  static async fetch(source: DataSource, queryKey: string, fetcher: () => Promise<any>): Promise<{ data: any, cacheHit: boolean }> {
    const cacheKey = `${source}:${queryKey}`;
    
    const cachedData = CacheLayer.get(cacheKey);
    if (cachedData) {
      return { data: cachedData, cacheHit: true };
    }

    // Cache miss
    const data = await fetcher();
    CacheLayer.set(cacheKey, data);
    
    return { data, cacheHit: false };
  }
}
