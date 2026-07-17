import { DomainService, ServiceCapabilities, ExecutionPlan, ResolvedContext, ServiceResult, Action, Intent } from "../types";
import { ConferenceRetriever } from "../../retrievers/conference"; 
import { RoutedIntent, ConferenceRetrievalStrategy } from "../../types";

export class ConferenceService implements DomainService {
  capabilities: ServiceCapabilities = {
    list: true,
    compare: true,
    search: true,
    overview: true,
    followUp: true,
    fieldLookup: true,
    supportsTemplates: true,
    supportsMemory: true,
  };

  async searchCandidates(query: string): Promise<any[]> {
    // Ideally this does a lightweight search, but for now we fetch all indexed conferences
    // and let the generic EntityResolver do the heavy fuzzy matching.
    const SanityConferenceService = (await import("@/lib/sanity/conference/service")).ConferenceService;
    return SanityConferenceService.getConferencesForSearch();
  }

  async getById(id: string): Promise<any> {
    const SanityConferenceService = (await import("@/lib/sanity/conference/service")).ConferenceService;
    return SanityConferenceService.getConferenceById(id);
  }
}
