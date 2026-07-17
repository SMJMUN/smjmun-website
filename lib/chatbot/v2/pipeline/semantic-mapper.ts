import { Intent, SemanticHints } from "../types";

export class SemanticMapper {
  /**
   * Deterministically maps common synonyms and concepts into SemanticHints.
   * This provides the Execution Planner with strong signals (concept, field, possibleIntent)
   * to combine with the LLM's raw intent classification.
   */
  static map(normalizedQuery: string): SemanticHints | undefined {
    const query = normalizedQuery.toLowerCase().trim();
    
    // 1. Define semantic dictionary
    // We can map synonyms to fields, or concepts to possible intents.
    const fieldMap: Record<string, string[]> = {
      "registrationFee": ["price", "cost", "fee", "fees", "delegate fee", "charges", "registration fee", "amount", "payment"],
      "venue": ["venue", "location", "place", "where", "next event"],
      "registrationDeadline": ["deadline", "last date", "closing date", "due date"],
      "schedule": ["schedule", "itinerary", "timetable", "dates", "when"],
      "committees": ["committees", "councils", "agendas"]
    };

    const conceptMap: Array<{ synonyms: string[], concept: string, intent: Intent }> = [
      { synonyms: ["started", "founder", "creator", "who started"], concept: "founder", intent: Intent.ORGANIZATION },
      { synonyms: ["smjmun", "organization"], concept: "organization", intent: Intent.ORGANIZATION },
      { synonyms: ["training cell", "program"], concept: "program", intent: Intent.PROGRAM },
      { synonyms: ["complain", "complaint", "issue"], concept: "support", intent: Intent.CONTACT }
    ];

    // Pass 1: Check for EXACT full query matches (highest confidence)
    for (const [canonicalField, synonyms] of Object.entries(fieldMap)) {
      for (const synonym of synonyms) {
        if (query === synonym) {
          return { field: canonicalField, confidence: 1.0, source: "exact" };
        }
      }
    }
    for (const def of conceptMap) {
      for (const synonym of def.synonyms) {
        if (query === synonym) {
          return { concept: def.concept, possibleIntent: def.intent, confidence: 1.0, source: "exact" };
        }
      }
    }

    // Pass 2: Check for regex word boundary matches (partial matches)
    for (const [canonicalField, synonyms] of Object.entries(fieldMap)) {
      for (const synonym of synonyms) {
        const regex = new RegExp(`\\b${synonym}\\b`, "i");
        if (regex.test(query)) {
          return { field: canonicalField, confidence: 0.82, source: "synonym" };
        }
      }
    }
    for (const def of conceptMap) {
      for (const synonym of def.synonyms) {
        const regex = new RegExp(`\\b${synonym}\\b`, "i");
        if (regex.test(query)) {
          return { concept: def.concept, possibleIntent: def.intent, confidence: 0.85, source: "synonym" };
        }
      }
    }

    return undefined;
  }
}
