import { ConversationState } from "./types";

const SESSION_TTL = 30 * 60 * 1000; // 30 minutes

export class ConversationMemory {
  private static store = new Map<string, ConversationState>();

  static getState(sessionId: string): ConversationState {
    const state = this.store.get(sessionId);

    // TTL check
    if (state && Date.now() - state.timestamp > SESSION_TTL) {
      this.clearState(sessionId);
      return this.createEmptyState();
    }

    if (!state) {
      return this.createEmptyState();
    }

    return state;
  }

  static updateState(sessionId: string, updates: Partial<ConversationState>) {
    const currentState = this.getState(sessionId);
    this.store.set(sessionId, {
      ...currentState,
      ...updates,
      timestamp: Date.now(),
    });
  }

  static clearState(sessionId: string) {
    this.store.delete(sessionId);
  }

  private static createEmptyState(): ConversationState {
    return {
      activeTopic: null,
      currentEntity: null,
      lastRetrieval: null,
      queryType: null,
      lastQuestion: null,
      timestamp: Date.now(),
    };
  }
}
