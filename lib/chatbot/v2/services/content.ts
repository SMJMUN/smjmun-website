import { DomainService, ServiceCapabilities, ExecutionPlan, ResolvedContext, ServiceResult, Action } from "../types";

import { Intent } from "../types";
import { KnowledgeRegistry } from "../knowledge/registry";

export class ContentService implements DomainService {
  capabilities: ServiceCapabilities = {
    list: true,
    compare: false,
    search: true,
    followUp: false,
    fieldLookup: false,
    supportsTemplates: false,
    supportsMemory: false,
  };

  async searchCandidates(query: string): Promise<any[]> {
    return [];
  }

  async getById(id: string): Promise<any> {
    return null;
  }

  async execute(plan: ExecutionPlan, context: ResolvedContext): Promise<ServiceResult> {
    const { query } = context;

    const fetcher = async () => {
      // In a real system, this fetches Programs or Blogs from Sanity
      return [{
        title: "Training Cell",
        description: "A specialized training program for aspiring diplomats."
      }];
    };

    // If query is about Programs, use the program content source
    const sourceKey = query.intent === Intent.PROGRAM ? "programs" : "general_content";
    const result = await KnowledgeRegistry.fetch("static", sourceKey, fetcher);

    return {
      data: result.data,
      sources: [`content-${sourceKey}`],
      cacheHit: result.cacheHit
    };
  }
}
