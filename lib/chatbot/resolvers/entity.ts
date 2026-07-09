import { RoutedIntent, ConferenceRetrievalStrategy, Intent } from "../types";
import { QueryType } from "../state/types";

export class EntityResolver {
  /**
   * Resolves entities from the user's query and assigns a retrieval strategy.
   * Modifies and returns the RoutedIntent.
   */
  static resolve(routed: RoutedIntent, query: string, queryType: QueryType): RoutedIntent {
    const normalizedQuery = query.toLowerCase();
    
    // Default to search if it's a conference intent
    let strategy = ConferenceRetrievalStrategy.SEARCH;
    let entityQuery = "";

    if (routed.intent !== Intent.CONFERENCE) {
      return routed; // Only process conferences for now
    }

    if (queryType === QueryType.COMPARISON) {
       strategy = ConferenceRetrievalStrategy.COMPARE;
    } else if (queryType === QueryType.FOLLOW_UP) {
       // On follow up, we usually don't need a retrieval strategy if we bypass Sanity.
       // But if we do need it, it's typically SINGLE or SEARCH.
       strategy = ConferenceRetrievalStrategy.SINGLE;
    } else if (this.matchesAny(normalizedQuery, ["all conferences", "list all"])) {
      strategy = ConferenceRetrievalStrategy.ALL;
    } else if (this.matchesAny(normalizedQuery, ["upcoming", "next", "future"])) {
      strategy = ConferenceRetrievalStrategy.UPCOMING;
    } else if (this.matchesAny(normalizedQuery, ["featured", "highlight", "main"])) {
      strategy = ConferenceRetrievalStrategy.FEATURED;
    } else if (this.matchesAny(normalizedQuery, ["completed", "past", "previous"])) {
      strategy = ConferenceRetrievalStrategy.BY_STATUS;
      entityQuery = "completed";
    }
    // Extract potential entities (Cities, Years, Names)
    else {
      // Basic entity extraction (can be expanded)
      const entities = [];
      
      // Match years
      const yearMatch = normalizedQuery.match(/\b(20\d{2})\b/);
      if (yearMatch) entities.push(yearMatch[1]);
      
      // Match known cities (ideally from a list, hardcoded for now)
      const cities = ["delhi", "new delhi", "indore", "mumbai", "bangalore"];
      const matchedCity = cities.find(c => normalizedQuery.includes(c));
      if (matchedCity) entities.push(matchedCity);
      
      // Match "mun" keyword context
      if (normalizedQuery.includes("mun") && !entities.length) {
         // extract the word before "mun" as a potential name
         const nameMatch = normalizedQuery.match(/(\w+)\s+mun/);
         if (nameMatch) entities.push(nameMatch[1]);
      }

      if (entities.length > 0) {
        entityQuery = entities.join(" ");
      } else {
        // If we can't find specific entities, check if it's a generic question 
        const isGenericQuestion = this.matchesAny(normalizedQuery, [
          "fee", "venue", "registration", "committees", "accommodation", 
          "dress code", "food", "certificate"
        ]);
        
        if (isGenericQuestion) {
           strategy = ConferenceRetrievalStrategy.SEARCH;
           entityQuery = query;
        } else {
           strategy = ConferenceRetrievalStrategy.UPCOMING;
        }
      }
    }

    // Set properties
    routed.retrievalStrategy = strategy;
    routed.entityQuery = entityQuery || query; // fallback to full query if no entity extracted

    return routed;
  }

  private static matchesAny(query: string, phrases: string[]): boolean {
    return phrases.some(phrase => query.includes(phrase));
  }
}
