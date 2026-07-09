import { ChatContext, Intent, RoutedIntent } from "./types";
import { buildConferenceContext } from "./contexts/conference";
import { buildOrganizationContext } from "./contexts/organization";
import { buildFAQContext } from "./contexts/faq";
import { buildContactContext } from "./contexts/contact";
import { buildProgramContext } from "./contexts/program";
import { ConferenceRetriever } from "./retrievers/conference";
import { ConferenceContextFormatter } from "./formatters/conference";
import { RetrievalLogger } from "./utils/logger";
import { ConversationState, QueryType } from "./state/types";
import { ConversationMemory } from "./state/memory";

export class ContextBuilder {
  /**
   * Orchestrates the context gathering based on the resolved intent.
   * Modifies memory based on retrieval results.
   */
  static async build(routed: RoutedIntent, query: string, sessionId: string, memory: ConversationState, queryType: QueryType): Promise<ChatContext & { _retrievalStatus?: string, _didRetrieve?: boolean }> {
    
    switch (routed.intent) {
      case Intent.CONFERENCE: {
        let result;
        let didRetrieve = false;

        // Skip retrieval if it's a follow-up and we have valid last retrieval
        if (queryType === QueryType.FOLLOW_UP && memory.lastRetrieval) {
           result = memory.lastRetrieval;
        } else {
           result = await ConferenceRetriever.retrieve(routed);
           didRetrieve = true;
           
           // Memory Update Policy
           let newCurrentEntity = null;
           if (result.status === "SUCCESS" && result.data.length === 1) {
              newCurrentEntity = { type: "conference" as const, data: result.data[0] };
           }
           // If COMPARE or ambiguous, currentEntity is null.

           ConversationMemory.updateState(sessionId, {
              activeTopic: Intent.CONFERENCE,
              currentEntity: newCurrentEntity,
              lastRetrieval: result,
              queryType: queryType,
              lastQuestion: query
           });
        }

        // Format for LLM OR early return string
        const formattedContext = ConferenceContextFormatter.format(result);

        return {
          intent: Intent.CONFERENCE,
          title: "Conference Information",
          content: formattedContext,
          sources: result.data?.map(c => c.slug.current) || [],
          _retrievalStatus: result.status,
          _didRetrieve: didRetrieve
        };
      }
      
      case Intent.ORGANIZATION:
        return await buildOrganizationContext();
      
      case Intent.FAQ:
        return await buildFAQContext();
      
      case Intent.CONTACT:
        return await buildContactContext();
        
      case Intent.PROGRAM:
        return await buildProgramContext();
      
      case Intent.GREETING:
        return {
          intent: Intent.GREETING,
          title: "Greeting",
          content: "User is greeting. Be polite and ask how you can help them with SMJMUN.",
        };
        
      case Intent.UNKNOWN:
      default:
        return {
          intent: Intent.UNKNOWN,
          title: "Unknown",
          content: "User query did not strongly match any specific topic. Ask for clarification or provide general assistance.",
        };
    }
  }
}
