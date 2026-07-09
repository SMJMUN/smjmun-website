import { RoutedIntent, RetrievalResult } from "../types";
import { QueryType } from "../state/types";

export class RetrievalLogger {
  static logPipeline(
    sessionId: string,
    query: string, 
    intent: string, 
    queryType: QueryType,
    didRetrieve: boolean,
    isFastPath: boolean,
    isLlmCalled: boolean,
    latencyMs: number
  ) {
    console.log(`\n--- [AI Pipeline Log] ---`);
    console.log(`Session:     ${sessionId}`);
    console.log(`Question:    "${query}"`);
    console.log(`Intent:      ${intent}`);
    console.log(`QueryType:   ${queryType}`);
    console.log(`Retriever:   ${didRetrieve ? "YES" : "NO"}`);
    console.log(`FastPath:    ${isFastPath ? "YES" : "NO"}`);
    console.log(`LLM Called:  ${isLlmCalled ? "YES" : "NO"}`);
    console.log(`Latency:     ${latencyMs}ms`);
    console.log(`--------------------------\n`);
  }
}
