import { AssistantResponse, Suggestion, ResolvedContext, Intent } from "../types";

export class ClarificationEngine {
  /**
   * Generates context-aware clarification prompts to prevent the LLM
   * from hallucinating when a query lacks necessary entities or confidence is low.
   */
  static ask(context: ResolvedContext): AssistantResponse {
    const { query } = context;
    let text = "I'm not quite sure what you mean. Could you clarify?";
    const chips: Suggestion[] = [];

    // If user asks about a specific field but hasn't specified which conference
    if (query.intent === Intent.CONFERENCE && query.field && !query.entity) {
      text = `Which conference's ${this.formatFieldName(query.field)} would you like to know about?`;
      // We would ideally fetch these from the Cache/Registry, hardcoding for Phase 5 demo.
      chips.push({ label: "SMJMUN 2026", action: "SMJMUN 2026" });
      chips.push({ label: "Youth Summit", action: "Youth Summit" });
      chips.push({ label: "IPS MUN", action: "IPS MUN" });
    } 
    // Low confidence / Unknown Intent fallback
    else if (query.intent === Intent.UNKNOWN || query.confidence < 0.55) {
      text = "I didn't quite catch that. Would you like to know about:";
      chips.push({ label: "Conferences", action: "conferences" });
      chips.push({ label: "Programs", action: "programs" });
      chips.push({ label: "FAQs", action: "faq" });
    }

    return {
      type: "clarification",
      text,
      chips,
      cards: [],
      sources: [],
      confidence: 1.0,
      metadata: {
        service: "clarification",
        latency: 0,
        memoryHit: false,
        cacheHit: false,
        llmUsed: false
      }
    };
  }

  private static formatFieldName(field: string): string {
    return field.replace(/([A-Z])/g, ' $1').toLowerCase();
  }
}
