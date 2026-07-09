import { IntentRouter } from "./router";
import { ContextBuilder } from "./context-builder";
import { PromptBuilder } from "./prompt-builder";
import { ChatContext, Intent } from "./types";
import { AIProvider } from "./providers/types";
import { GeminiProvider } from "./providers/gemini";
import { GroqProvider } from "./providers/groq";
import { NvidiaProvider } from "./providers/nvidia-provider";
import { ConversationMemory } from "./state/memory";
import { QueryTypeResolver } from "./resolvers/query-type";
import { EntityResolver } from "./resolvers/entity";
import { DirectAnswerEngine } from "./answers/direct";
import { QueryType, AnswerMode } from "./state/types";
import { RetrievalLogger } from "./utils/logger";

export class ChatbotService {
  /**
   * Helper to get the active AI provider based on environment variables.
   * Defaulting to Gemini if both are present, or throwing if none.
   */
  private static getProvider(): AIProvider {
    // You can switch this logic based on your preference
    if (process.env.NVIDIA_API_KEY) {
      return new NvidiaProvider();
    } else if (process.env.GROQ_API_KEY) {
      return new GroqProvider();
    }
    throw new Error("No AI Provider configured. Please set GEMINI_API_KEY or GROQ_API_KEY.");
  }

  /**
   * For Phase 3 (testing): Only gathers context and constructs the prompt.
   */
  static async buildContext(question: string, sessionId: string = "default-session"): Promise<{
    intent: string;
    context: ChatContext & { _retrievalStatus?: string };
    finalPrompt: string;
  }> {
    const memory = ConversationMemory.getState(sessionId);
    let routedIntent = IntentRouter.route(question);
    
    if (routedIntent.intent === Intent.UNKNOWN && memory.activeTopic) {
      routedIntent.intent = memory.activeTopic;
    }

    const queryType = QueryTypeResolver.resolve(question, routedIntent.intent, memory);
    EntityResolver.resolve(routedIntent, question, queryType);

    const context = await ContextBuilder.build(routedIntent, question, sessionId, memory, queryType);
    const finalPrompt = PromptBuilder.build(context, question);

    return {
      intent: routedIntent.intent,
      context: context,
      finalPrompt: finalPrompt,
    };
  }

  /**
   * For Phase 4: Full flow. Gathers context, builds prompt, and generates AI response.
   */
  static async generateAnswer(question: string, sessionId: string = "default-session"): Promise<{
    intent: string;
    answer: string;
    sources?: string[];
  }> {
    const startTime = performance.now();
    const memory = ConversationMemory.getState(sessionId);
    
    let routedIntent = IntentRouter.route(question);
    
    // Inherit active topic if current intent is unknown
    if (routedIntent.intent === Intent.UNKNOWN && memory.activeTopic) {
      routedIntent.intent = memory.activeTopic;
    }

    const queryType = QueryTypeResolver.resolve(question, routedIntent.intent, memory);
    EntityResolver.resolve(routedIntent, question, queryType);

    // Fast Path Check (Zero LLM)
    if (queryType === QueryType.FOLLOW_UP && memory.currentEntity) {
      const direct = DirectAnswerEngine.resolve(question, memory.currentEntity);
      if (direct.mode === AnswerMode.DIRECT && direct.answer) {
        const latency = Math.round(performance.now() - startTime);
        RetrievalLogger.logPipeline(sessionId, question, routedIntent.intent, queryType, false, true, false, latency);
        return {
          intent: routedIntent.intent,
          answer: direct.answer,
          sources: [],
        };
      }
    }

    // If not fast path, we need to build context (which may trigger retrieval)
    const context = await ContextBuilder.build(routedIntent, question, sessionId, memory, queryType);
    
    // Early Return for ambiguous/not found (No LLM)
    if (context.intent === "CONFERENCE" && (context._retrievalStatus === "NOT_FOUND" || context._retrievalStatus === "AMBIGUOUS")) {
       const latency = Math.round(performance.now() - startTime);
       RetrievalLogger.logPipeline(sessionId, question, routedIntent.intent, queryType, true, false, false, latency);
       return {
         intent: context.intent,
         answer: context.content,
         sources: [],
       };
    }

    const finalPrompt = PromptBuilder.build(context, question);
    const provider = this.getProvider();
    const answer = await provider.generateResponse(finalPrompt);

    const latency = Math.round(performance.now() - startTime);
    RetrievalLogger.logPipeline(sessionId, question, routedIntent.intent, queryType, context._didRetrieve || false, false, true, latency);

    return {
      intent: context.intent,
      answer: answer,
      sources: context.sources,
    };
  }
}
