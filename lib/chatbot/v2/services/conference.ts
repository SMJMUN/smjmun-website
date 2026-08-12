import { DomainService, ServiceCapabilities, ExecutionPlan, ResolvedContext, ServiceResult, Action, Intent } from "../types";
import { ConferenceRetriever } from "../../retrievers/conference"; 
import { RoutedIntent, ConferenceRetrievalStrategy } from "../../types";
import { ChatLogger } from "../../utils/logger";

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

  async searchCandidates(query: string, logger?: ChatLogger): Promise<any[]> {
    // Ideally this does a lightweight search, but for now we fetch all indexed conferences
    // and let the generic EntityResolver do the heavy fuzzy matching.
    const t0 = performance.now();
    const SanityConferenceService = (await import("@/lib/sanity/conference/service")).ConferenceService;
    const result = await SanityConferenceService.getConferencesForSearch();
    if (logger) {
      logger.logCMSHit('searchCandidates', 'conference', performance.now() - t0, 'miss', result.length);
    }
    return result;
  }

  async getById(id: string, logger?: ChatLogger): Promise<any> {
    const t0 = performance.now();
    const SanityConferenceService = (await import("@/lib/sanity/conference/service")).ConferenceService;
    const result = await SanityConferenceService.getConferenceById(id);
    if (logger) {
      logger.logCMSHit('getById', 'conference', performance.now() - t0, 'miss', result ? 1 : 0);
    }
    return result;
  }
}
