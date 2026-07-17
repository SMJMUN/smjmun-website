import { DomainService, ServiceCapabilities, ExecutionPlan, ResolvedContext, ServiceResult } from "../types";
import { KnowledgeRegistry } from "../knowledge/registry";

export class FaqService implements DomainService {
  capabilities: ServiceCapabilities = {
    list: false,
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
    const fetcher = async () => {
      // Static FAQ data fetcher
      return [
        { question: "What is the refund policy?", answer: "We do not offer refunds." },
        { question: "What is the dress code?", answer: "Western formals or traditional attire." },
        { question: "How do I contact support?", answer: "You can email us at support@smjmun.com." }
      ];
    };

    const result = await KnowledgeRegistry.fetch("static", "faq", fetcher);

    return {
      data: result.data,
      sources: ["faq-static"],
      cacheHit: result.cacheHit
    };
  }
}
