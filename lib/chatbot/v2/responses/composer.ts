import { AssistantResponse, Suggestion, Card, Source } from "../types";

export class ResponseComposer {
  /**
   * Finalizes the AssistantResponse object, ensuring a strict contract is met.
   * This decoupled layer allows us to inject chips, cards, and metadata
   * without cluttering the template engine or LLM generators.
   */
  static compose(
    text: string, 
    type: "answer" | "clarification" | "error" = "answer",
    options?: {
      chips?: Suggestion[];
      cards?: Card[];
      sources?: Source[];
      confidence?: number;
      service?: string;
      latency?: number;
      memoryHit?: boolean;
      cacheHit?: boolean;
      llmUsed?: boolean;
    }
  ): AssistantResponse {
    
    // In Phase 5 we will hook up the Suggestion Engine automatically if chips aren't provided
    const defaultChips: Suggestion[] = [];
    
    return {
      type,
      text,
      chips: options?.chips || defaultChips,
      cards: options?.cards || [],
      sources: options?.sources || [],
      confidence: options?.confidence ?? 1.0,
      metadata: {
        service: options?.service || "unknown",
        latency: options?.latency || 0,
        memoryHit: options?.memoryHit || false,
        cacheHit: options?.cacheHit || false,
        llmUsed: options?.llmUsed || false,
      }
    };
  }
}
