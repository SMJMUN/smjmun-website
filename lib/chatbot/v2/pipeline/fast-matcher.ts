import { Intent, Action, ParsedQuery } from "../types";

export class FastMatcher {
  /**
   * Immediately resolves obvious intents without LLM calls.
   * Returns a ParsedQuery if matched, otherwise null.
   */
  static match(rawQuery: string, normalizedQuery: string): ParsedQuery | null {
    const query = normalizedQuery.toLowerCase();
    
    // Greetings
    if (/^(hi|hello|hey|greetings|start)$/.test(query)) {
      return this.buildResult(Intent.GREETING, rawQuery, normalizedQuery);
    }

    // Gratitude
    if (/^(thanks|thank you|appreciate it)$/.test(query)) {
      // For now we map this to GREETING or a specific intent. We'll use GREETING as a fallback for pleasantries.
      return this.buildResult(Intent.GREETING, rawQuery, normalizedQuery);
    }

    // Goodbyes
    if (/^(bye|goodbye|cya|see you)$/.test(query)) {
      return this.buildResult(Intent.GREETING, rawQuery, normalizedQuery);
    }

    // Exact single-word commands that map directly to intents without ambiguity
    if (query === "faq" || query === "help") {
      return this.buildResult(Intent.FAQ, rawQuery, normalizedQuery);
    }
    
    if (query === "contact" || query === "support") {
      return this.buildResult(Intent.CONTACT, rawQuery, normalizedQuery);
    }

    return null;
  }

  private static buildResult(intent: Intent, rawQuery: string, normalizedQuery: string): ParsedQuery {
    return {
      intent,
      action: Action.GET,
      confidence: 1.0, // Absolute certainty for fast matches
      rawQuery,
      normalizedQuery
    };
  }
}
