export interface ResolveKey {
  path: string;
  weight: number;
}

export interface ResolveParams {
  query: string;
  candidates: any[];
  keys: (string | ResolveKey)[];
}

export interface ResolveResult {
  entity: any | null;
  confidence: number;
  matchedOn: string;
  matchedValue: string;
  scoreBreakdown: Record<string, number>;
}

export class EntityResolver {
  static resolve({ query, candidates, keys }: ResolveParams): ResolveResult {
    if (!query || !candidates || candidates.length === 0) {
      return this.emptyResult();
    }

    const stopWords = new Set(["conference", "mun", "one", "the", "a", "an", "event", "and", "of", "in", "at", "for", "to"]);
    const tokens = query.toLowerCase().split(/[\s,]+/).filter(t => t.length > 2 && !stopWords.has(t));
    const fullQuery = query.toLowerCase();

    let bestMatch: ResolveResult = this.emptyResult();

    for (const candidate of candidates) {
      let totalScore = 0;
      let matchedOn = "";
      let matchedValue = "";
      const scoreBreakdown: Record<string, number> = {};

      for (const keyDef of keys) {
        const path = typeof keyDef === "string" ? keyDef : keyDef.path;
        const weight = typeof keyDef === "string" ? 10 : keyDef.weight;
        
        const value = this.extractValue(candidate, path);
        if (!value) continue;

        const valueLower = value.toLowerCase();
        let keyScore = 0;

        // Exact full query match gets massive boost
        if (valueLower === fullQuery) {
          keyScore += weight * 1.5;
        } else if (valueLower.includes(fullQuery)) {
          keyScore += weight * 1.2;
        }

        // Token matches
        for (const token of tokens) {
          const regex = new RegExp(`\\b${token}\\b`, 'i');
          if (regex.test(valueLower)) {
            keyScore += weight; // Exact word match gets full weight
          } else if (valueLower.includes(token)) {
            keyScore += weight * 0.5; // Partial word match
          }
        }

        if (keyScore > 0) {
          scoreBreakdown[path] = keyScore;
          totalScore += keyScore;

          // Track the highest scoring key as the primary matchedOn
          if (!matchedOn || keyScore > (scoreBreakdown[matchedOn] || 0)) {
            matchedOn = path;
            matchedValue = value;
          }
        }
      }

      // We normalize confidence based on a max expected score of 10 for a solid single-field match
      const confidence = Math.min(1.0, totalScore / 10);

      if (confidence > bestMatch.confidence) {
        bestMatch = {
          entity: candidate,
          confidence,
          matchedOn,
          matchedValue,
          scoreBreakdown
        };
      }
    }

    return bestMatch;
  }

  private static extractValue(obj: any, path: string): string {
    const parts = path.split('.');
    let current = obj;
    for (const part of parts) {
      if (current === undefined || current === null) return "";
      current = current[part];
    }
    
    if (typeof current === "string") return current;
    
    // Support searching within arrays (e.g. committees.name)
    if (Array.isArray(current)) {
      return current.map(item => typeof item === "string" ? item : JSON.stringify(item)).join(" ");
    }
    
    return String(current || "");
  }

  private static emptyResult(): ResolveResult {
    return {
      entity: null,
      confidence: 0,
      matchedOn: "",
      matchedValue: "",
      scoreBreakdown: {}
    };
  }
}
