import { Intent, RetrievalResult } from "../types";
import { Conference } from "@/lib/sanity/conference/types";

export enum QueryType {
  NEW_TOPIC = "NEW_TOPIC",
  FOLLOW_UP = "FOLLOW_UP",
  COMPARISON = "COMPARISON",
  LIST = "LIST",
  CLARIFICATION = "CLARIFICATION",
}

export enum AnswerMode {
  DIRECT = "DIRECT",
  LLM = "LLM",
}

export type CurrentEntity =
  | { type: "conference"; data: Conference }
  | { type: "program"; data: any } // Placeholder for Program
  | { type: "faq"; data: any } // Placeholder for FAQ
  | { type: "organization"; data: any }; // Placeholder for SiteSettings

export interface ConversationState {
  activeTopic: Intent | null;
  currentEntity: CurrentEntity | null;
  lastRetrieval: RetrievalResult<any> | null;
  queryType: QueryType | null;
  lastQuestion: string | null;
  timestamp: number;
}
