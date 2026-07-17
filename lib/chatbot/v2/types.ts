export enum Intent {
  CONFERENCE = "CONFERENCE",
  PROGRAM = "PROGRAM",
  ORGANIZATION = "ORGANIZATION",
  FAQ = "FAQ",
  CONTACT = "CONTACT",
  GREETING = "GREETING",
  UNKNOWN = "UNKNOWN"
}

export enum Action {
  GET = "GET",
  LIST = "LIST",
  COMPARE = "COMPARE",
  SEARCH = "SEARCH",
  UNKNOWN = "UNKNOWN"
}

export interface ParsedQuery {
  intent: Intent;
  action: Action;
  entity?: string;
  field?: string;
  filters?: Record<string, unknown>;
  confidence: number;
  rawQuery: string;
  normalizedQuery: string;
  semanticHints?: SemanticHints;
}

export interface SemanticHints {
  field?: string;
  possibleIntent?: Intent;
  concept?: string;
  confidence: number;
  source: "exact" | "synonym" | "regex";
}

export enum ExecutionStep {
  RESOLVE_MEMORY = "RESOLVE_MEMORY",
  CLARIFICATION = "CLARIFICATION",
  DOMAIN_SERVICE = "DOMAIN_SERVICE",
  TEMPLATE_RESPONSE = "TEMPLATE_RESPONSE",
  OVERVIEW_TEMPLATE = "OVERVIEW_TEMPLATE",
  LLM_GENERATOR = "LLM_GENERATOR",
}

export type ServiceName = "conference" | "organization" | "content" | "faq" | "contact" | "unknown";

export interface ExecutionPlan {
  steps: ExecutionStep[];
  requiresLLM: boolean;
  requiresClarification: boolean;
  targetService?: ServiceName;
}

export interface ConversationState {
  currentTopic?: Intent;
  currentEntity?: string;
  lastTool?: string;
  lastToolOutput?: any;
  history: string[];
  pendingClarification?: boolean;
  comparedEntities?: string[];
  lastSuggestions?: string[];
}

export interface ResolvedContext {
  query: ParsedQuery;
  state: ConversationState;
  plannerTrace?: PlannerTrace;
}

export interface PlannerTrace {
  steps: string[];
  decision: string;
  reason: string;
  confidence: number;
}

export interface PlannerRule {
  evaluate(context: ResolvedContext, hints?: SemanticHints): { score: number, plan?: ExecutionPlan, reason: string };
}

export interface ServiceCapabilities {
  list?: boolean;
  compare?: boolean;
  search?: boolean;
  overview?: boolean;
  followUp?: boolean;
  fieldLookup?: boolean;
  supportsTemplates?: boolean;
  supportsMemory?: boolean;
}

export interface ServiceResult {
  data: any;
  sources: string[];
  cacheHit?: boolean;
}

export interface DomainService {
  capabilities: ServiceCapabilities;
  searchCandidates(query: string): Promise<any[]>;
  getById(id: string): Promise<any>;
  execute?(plan: ExecutionPlan, context: ResolvedContext): Promise<ServiceResult>;
}

export interface Suggestion {
  label: string;
  action: string; // The query it will execute if tapped
}

export interface Card {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

export interface Source {
  name: string;
  url?: string;
}

export interface AssistantResponse {
  type: "answer" | "clarification" | "error";
  text: string;
  chips: Suggestion[];
  cards: Card[];
  sources: Source[];
  confidence: number;
  metadata: {
    service: string;
    latency: number;
    memoryHit: boolean;
    cacheHit: boolean;
    llmUsed: boolean;
  };
}
