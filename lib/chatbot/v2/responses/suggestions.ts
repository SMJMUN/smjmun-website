import { Suggestion, ResolvedContext, Intent } from "../types";

export class SuggestionEngine {
  /**
   * Generates contextual follow-up questions to display as UI chips.
   * Isolates suggestion logic from domain tools/services.
   */
  static generate(context: ResolvedContext): Suggestion[] {
    const { query, state } = context;
    const chips: Suggestion[] = [];

    if (query.intent === Intent.CONFERENCE || state.currentTopic === Intent.CONFERENCE) {
      // If we don't have a conference selected yet
      if (!query.entity && !state.currentEntity) {
        chips.push({ label: "Upcoming Conferences", action: "upcoming conferences" });
        chips.push({ label: "All Conferences", action: "all conferences" });
      } else {
        // If we have a conference selected, suggest follow-ups
        chips.push({ label: "Registration Fee", action: "registration fee" });
        chips.push({ label: "Venue", action: "venue" });
        chips.push({ label: "Schedule", action: "schedule" });
        chips.push({ label: "Committees", action: "committees" });
        chips.push({ label: "Accommodation", action: "accommodation" });
      }
    } else if (query.intent === Intent.FAQ) {
      chips.push({ label: "Refund Policy", action: "refund policy" });
      chips.push({ label: "Dress Code", action: "dress code" });
      chips.push({ label: "Contact Support", action: "contact support" });
    } else {
      // Generic
      chips.push({ label: "SMJMUN Conferences", action: "conferences" });
      chips.push({ label: "About SMJMUN", action: "about smjmun" });
    }

    // Limit to top 5 suggestions
    return chips.slice(0, 5);
  }
}
