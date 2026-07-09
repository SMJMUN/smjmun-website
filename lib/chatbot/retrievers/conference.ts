import { ConferenceService } from "@/lib/sanity/conference/service";
import { Conference } from "@/lib/sanity/conference/types";
import { RoutedIntent, ConferenceRetrievalStrategy, RetrievalResult } from "../types";

const SEARCH_WEIGHTS = {
  TITLE: 10,
  CITY: 7,
  VENUE: 3,
  OVERVIEW: 2,
  COMMITTEE: 2,
  KEYWORDS: 1
};

export class ConferenceRetriever {
  static async retrieve(routed: RoutedIntent): Promise<RetrievalResult<Conference>> {
    const strategy = routed.retrievalStrategy || ConferenceRetrievalStrategy.SEARCH;
    const entityQuery = routed.entityQuery?.toLowerCase() || "";
    
    const startTime = performance.now();
    let result: RetrievalResult<Conference>;

    try {
      switch (strategy) {
        case ConferenceRetrievalStrategy.ALL: {
          const conferences = await ConferenceService.getConferencesForSearch();
          result = this.buildSuccess(conferences, strategy, 1.0);
          break;
        }

        case ConferenceRetrievalStrategy.UPCOMING: {
          const conferences = await ConferenceService.getUpcomingConferences();
          if (conferences.length === 0) {
            result = this.buildNotFound(strategy, "I couldn't find any upcoming conferences.");
          } else {
            result = this.buildSuccess(conferences, strategy, 1.0);
          }
          break;
        }

        case ConferenceRetrievalStrategy.FEATURED: {
          const conferences = await ConferenceService.getFeaturedConferences();
          if (conferences.length === 0) {
             result = this.buildNotFound(strategy, "I couldn't find any featured conferences.");
          } else {
            // usually one featured, but could be multiple
            result = this.buildSuccess(conferences, strategy, 1.0);
          }
          break;
        }

        case ConferenceRetrievalStrategy.BY_STATUS: {
          const all = await ConferenceService.getConferencesForSearch();
          const filtered = all.filter(c => c.status === entityQuery);
          if (filtered.length === 0) {
            result = this.buildNotFound(strategy, `I couldn't find any ${entityQuery} conferences.`);
          } else {
            result = this.buildSuccess(filtered, strategy, 1.0);
          }
          break;
        }

        case ConferenceRetrievalStrategy.COMPARE: {
           // Compare might mention multiple entities. For now we use the scoring 
           // and take top 2 or any that have a decent score.
           const conferences = await ConferenceService.getConferencesForSearch();
           const scored = this.scoreConferences(conferences, entityQuery);
           const topMatches = scored.filter(s => s.score > 5).slice(0, 3).map(s => s.conference);
           
           if (topMatches.length >= 2) {
             result = this.buildSuccess(topMatches, strategy, 1.0);
           } else if (topMatches.length === 1) {
             result = {
               status: "AMBIGUOUS",
               confidence: 0.4,
               strategy,
               data: [],
               suggestions: topMatches.map(c => ({ slug: c.slug.current, title: c.title })),
               message: `I only found ${topMatches[0].title}. Please specify another conference to compare it with.`
             };
           } else {
             result = this.buildNotFound(strategy, "I couldn't find those conferences to compare.");
           }
           break;
        }

        case ConferenceRetrievalStrategy.SEARCH:
        case ConferenceRetrievalStrategy.SINGLE:
        case ConferenceRetrievalStrategy.BY_CITY:
        case ConferenceRetrievalStrategy.BY_VENUE:
        case ConferenceRetrievalStrategy.BY_COMMITTEE:
        default: {
          // Perform scored search
          if (!entityQuery) {
            result = {
               status: "AMBIGUOUS",
               confidence: 0,
               strategy,
               data: [],
               message: "Could you please specify which conference you are asking about?"
            };
            break;
          }

          const conferences = await ConferenceService.getConferencesForSearch();
          const scored = this.scoreConferences(conferences, entityQuery);

          if (scored.length === 0 || scored[0].score === 0) {
             result = this.buildNotFound(strategy, "I couldn't find that conference.");
             break;
          }

          const topHit = scored[0];
          // Max reasonable score is TITLE + CITY (e.g. 17). 
          // We define confidence as score / 10, capped at 1.0
          const confidence = Math.min(1.0, topHit.score / 10);

          if (confidence < 0.5) {
             // Too low confidence, suggest top 2
             const suggestions = scored.slice(0, 2).map(s => ({
                slug: s.conference.slug.current,
                title: s.conference.title
             }));
             result = {
                status: "AMBIGUOUS",
                confidence,
                strategy,
                data: [],
                suggestions,
                message: "I couldn't find an exact match."
             };
          } else {
             result = this.buildSuccess([topHit.conference], strategy, confidence);
          }
          break;
        }
      }
    } catch (e) {
       result = this.buildNotFound(strategy, "An error occurred while retrieving conference data.");
    }

    const endTime = performance.now();
    // We will log this in a higher layer or we could log here.
    // For now we attach it to the result so the logger can pick it up.
    (result as any).timeTaken = Math.round(endTime - startTime);

    return result;
  }

  private static scoreConferences(conferences: Conference[], query: string): { conference: Conference, score: number }[] {
    const tokens = query.split(/[\s,]+/).filter(t => t.length > 2); // basic tokenization
    
    return conferences.map(conference => {
      let score = 0;
      
      const titleLower = conference.title?.toLowerCase() || "";
      const cityLower = conference.venue?.toLowerCase() || ""; // Assuming venue contains city for now
      
      // Generate searchable text for vastly improved fuzzy matching
      const parts = [titleLower, cityLower];
      if (conference.committees) {
          parts.push(...conference.committees.map(c => c.name?.toLowerCase() || ""));
      }
      const searchableText = parts.join(" ");

      // If the full query is in the title, massive boost
      if (titleLower.includes(query)) {
        score += SEARCH_WEIGHTS.TITLE;
      }
      
      for (const token of tokens) {
        if (titleLower.includes(token)) score += SEARCH_WEIGHTS.TITLE / tokens.length;
        if (cityLower.includes(token)) score += SEARCH_WEIGHTS.CITY;
        
        // Committee check
        if (conference.committees) {
          for (const committee of conference.committees) {
            if (committee.name?.toLowerCase().includes(token)) {
               score += SEARCH_WEIGHTS.COMMITTEE;
               break; // score once per token
            }
          }
        }

        // Fuzzy match boost
        if (searchableText.includes(token)) {
           score += SEARCH_WEIGHTS.KEYWORDS;
        }
      }

      return { conference, score };
    }).sort((a, b) => b.score - a.score);
  }

  private static buildSuccess(data: Conference[], strategy: ConferenceRetrievalStrategy, confidence: number): RetrievalResult<Conference> {
    return { status: "SUCCESS", confidence, strategy, data };
  }

  private static buildNotFound(strategy: ConferenceRetrievalStrategy, message: string): RetrievalResult<Conference> {
    return { status: "NOT_FOUND", confidence: 0, strategy, data: [], message };
  }
}
