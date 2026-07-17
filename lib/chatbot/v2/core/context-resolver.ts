import { ParsedQuery, ConversationState, ResolvedContext } from "../types";

export class ContextResolver {
  /**
   * Unifies the current parsed query with the ongoing conversation state.
   * This ensures all downstream components (like the Execution Planner)
   * share the exact same contextual reality.
   */
  static resolve(query: ParsedQuery, state: ConversationState): ResolvedContext {
    // If the query is lacking an intent but we have an active topic in memory,
    // we might inherit it. (Though the Understanding Layer is usually smart enough).
    let resolvedQuery = { ...query };

    // Example logic: if query intent is UNKNOWN but state has pendingClarification,
    // we might map the query as an entity selection for the currentTopic.
    if (state.pendingClarification && state.currentTopic) {
      if (resolvedQuery.intent === "UNKNOWN" || !resolvedQuery.entity) {
        resolvedQuery.intent = state.currentTopic;
        // In a real system, we'd check if the rawQuery matches an expected option.
        resolvedQuery.entity = resolvedQuery.rawQuery;
      }
    }

    // Example logic: if user asks a field (e.g., "venue") but doesn't specify an entity,
    // we inherit the currentEntity from state.
    if (!resolvedQuery.entity && state.currentEntity) {
      resolvedQuery.entity = state.currentEntity;
    }

    // Deterministic Defaults: If intent is CONFERENCE but action is UNKNOWN, default to GET.
    if (resolvedQuery.intent === "CONFERENCE" && (!resolvedQuery.action || resolvedQuery.action === "UNKNOWN")) {
      resolvedQuery.action = "GET" as any;
    }

    return {
      query: resolvedQuery,
      state
    };
  }
}
