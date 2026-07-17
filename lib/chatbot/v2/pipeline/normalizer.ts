export class QueryNormalizer {
  private static readonly ALIASES: Record<string, string> = {
    "confrecw": "conference",
    "confrence": "conference",
    "mun": "conference",
    "smj": "smjmun",
    "smj mun": "smjmun",
    "reg": "registration",
    "reg fee": "registration fee",
    "fees": "fee",
    "pricw": "price",
    "cost": "price"
  };

  /**
   * Pluggable pipeline for query normalization
   */
  static normalize(query: string): string {
    let normalized = query;

    // 1. Lowercase
    normalized = normalized.toLowerCase();

    // 2. Trim whitespace
    normalized = normalized.trim();
    normalized = normalized.replace(/\s+/g, ' ');

    // 3. Punctuation cleanup (keep basic punctuation, remove excessive)
    normalized = normalized.replace(/[^\w\s\.\?]/g, '');

    // 4. Abbreviations, Fuzzy matching, and Domain replacements (using a dictionary)
    normalized = this.applyAliases(normalized);

    return normalized;
  }

  private static applyAliases(query: string): string {
    const words = query.split(' ');
    const expanded = words.map(word => {
      // Direct dictionary hit
      if (this.ALIASES[word]) {
        return this.ALIASES[word];
      }
      return word;
    });

    let result = expanded.join(' ');

    // Handle multi-word aliases
    for (const [alias, replacement] of Object.entries(this.ALIASES)) {
      if (alias.includes(' ')) {
        const regex = new RegExp(`\\b${alias}\\b`, 'g');
        result = result.replace(regex, replacement);
      }
    }

    return result;
  }
}
