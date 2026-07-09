import { ConversationState, QueryType } from "../state/types";
import { Intent } from "../types";

export class QueryTypeResolver {
  static resolve(query: string, intent: Intent, memory: ConversationState): QueryType {
    const normalizedQuery = query.toLowerCase();

    // 1. Check for Comparisons
    if (this.matchesAny(normalizedQuery, ["compare", "difference between", "better", "vs"])) {
      return QueryType.COMPARISON;
    }

    // 2. Check for Lists
    if (this.matchesAny(normalizedQuery, ["all conferences", "list all", "upcoming", "future", "past", "completed", "show conferences"])) {
      // If it doesn't mention a specific entity (like "Delhi"), it's likely a list request
      const entities = ["delhi", "indore", "mumbai", "mun", "academy"];
      if (!entities.some(e => normalizedQuery.includes(e))) {
        return QueryType.LIST;
      }
    }

    // 3. Check for Clarifications
    if (memory.lastRetrieval?.status === "AMBIGUOUS" || (memory.lastRetrieval?.data && memory.lastRetrieval.data.length > 1 && !memory.currentEntity)) {
      // If the last thing we did was return an ambiguous result, and the user answers, it's clarification
      // e.g. "Delhi or Indore?" -> "Indore"
      return QueryType.CLARIFICATION;
    }

    // 4. Check for Follow Up
    // It is a follow-up if:
    // a) It doesn't explicitly name a conference BUT memory has an active entity
    // b) Or it explicitly names the same conference as memory
    // c) Or it's a known generic question (venue, fees) and we have an active entity
    const knownEntities = ["delhi", "indore", "mumbai", "academy", "ips"];
    const containsEntity = knownEntities.some(e => normalizedQuery.includes(e));
    
    if (memory.currentEntity) {
      if (!containsEntity) {
        return QueryType.FOLLOW_UP;
      }
      
      // If it contains an entity, is it the same one?
      // Very basic check:
      const currentTitle = memory.currentEntity.data.title.toLowerCase();
      const matchedEntity = knownEntities.find(e => normalizedQuery.includes(e));
      if (matchedEntity && currentTitle.includes(matchedEntity)) {
        return QueryType.FOLLOW_UP;
      }
    }

    // 5. Default to New Topic
    return QueryType.NEW_TOPIC;
  }

  private static matchesAny(query: string, phrases: string[]): boolean {
    return phrases.some(phrase => query.includes(phrase));
  }
}
