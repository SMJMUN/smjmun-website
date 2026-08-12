import { RoutedIntent, RetrievalResult } from "../types";
import { QueryType } from "../state/types";
import pino from 'pino';

const isDev = process.env.NODE_ENV !== 'production';

// Configure standard Pino logger
export const rootLogger = pino({
  level: isDev ? 'debug' : 'info',
  transport: isDev
    ? {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname',
          singleLine: false,
        },
      }
    : undefined,
});

export class ChatLogger {
  private logger: pino.Logger;
  private startTime: number;

  constructor(sessionId: string, requestId: string) {
    this.logger = rootLogger.child({
      sessionId,
      requestId,
    });
    this.startTime = performance.now();
  }

  public logIncoming(query: string) {
    this.logger.info({ query }, 'Incoming Chat Request');
  }

  public logPipelineStage(stage: string, output: any, durationMs?: number) {
    this.logger.debug(
      { stage, output, durationMs: durationMs ? Number(durationMs.toFixed(2)) : undefined },
      `Pipeline Stage: ${stage}`
    );
  }

  public logCMSHit(operation: string, target: string, latencyMs: number, cacheStatus: 'hit' | 'miss', resultCount: number = 0) {
    this.logger.info(
      {
        operation,
        target,
        latencyMs: Number(latencyMs.toFixed(2)),
        cacheStatus,
        resultCount,
      },
      `CMS Operation: ${operation} on ${target}`
    );
  }

  public logLLMCall(latencyMs: number, promptLength: number, outputLength: number) {
    this.logger.info(
      {
        latencyMs: Number(latencyMs.toFixed(2)),
        promptLength,
        outputLength,
      },
      'LLM Generation Completed'
    );
  }

  public logResponse(responseType: string, finalLength: number) {
    const totalLatency = performance.now() - this.startTime;
    this.logger.info(
      {
        responseType,
        finalLength,
        totalLatencyMs: Number(totalLatency.toFixed(2)),
      },
      'Request Completed'
    );
  }

  public error(error: any, context?: string) {
    this.logger.error({ err: error, context }, 'Chatbot Error');
  }
}


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
