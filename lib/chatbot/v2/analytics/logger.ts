import { ParsedQuery, AssistantResponse, ExecutionPlan } from "../types";

export class AnalyticsLogger {
  /**
   * Tracks robust telemetry metrics for V2 architecture to measure platform success.
   * This ensures we base optimizations on real data (latency, memory hits, fallback %).
   */
  static trackInteraction(
    sessionId: string,
    query: ParsedQuery,
    plan: ExecutionPlan,
    response: AssistantResponse
  ) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      sessionId,
      intent: query.intent,
      action: query.action,
      entity: query.entity || "none",
      confidence: query.confidence,
      zeroLlm: !response.metadata.llmUsed,
      clarificationRequired: response.type === "clarification",
      latency: response.metadata.latency,
      service: response.metadata.service,
      memoryHit: response.metadata.memoryHit,
      cacheHit: response.metadata.cacheHit
    };

    // Output to console for now; in production this sends to Datadog/PostHog
    console.log("[Analytics] Interaction Logged:\n", JSON.stringify(logEntry, null, 2));
  }
}
