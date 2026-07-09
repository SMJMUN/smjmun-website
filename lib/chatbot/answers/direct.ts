import { CurrentEntity, AnswerMode } from "../state/types";
import { Conference } from "@/lib/sanity/conference/types";

const FIELD_MAP: Record<string, string[]> = {
  venue: ["venue", "location", "where", "place"],
  registrationFee: ["fee", "fees", "cost", "price", "how much"],
  dressCode: ["dress", "wear", "attire", "clothes"],
  foodProvided: ["food", "meal", "lunch", "dinner", "catering"],
  accommodationAvailable: ["accommodation", "stay", "hotel", "room", "sleep"],
  certificateProvided: ["certificate", "certificates", "certification"],
  registrationOpen: ["open", "is registration open"],
  registrationCloseDate: ["deadline", "close", "last date"],
  reportingTime: ["reporting", "time to report", "what time"],
  capacity: ["capacity", "how many delegates", "size"],
};

export class DirectAnswerEngine {
  /**
   * Attempts to resolve a follow-up question directly from memory without LLM.
   */
  static resolve(query: string, currentEntity: CurrentEntity): { mode: AnswerMode, answer?: string } {
    const normalizedQuery = query.toLowerCase();

    // Direct answering only supported for conferences for now
    if (currentEntity.type !== "conference") {
      return { mode: AnswerMode.LLM };
    }

    const conf = currentEntity.data as Conference;

    // We check if it's asking for a large text block. If so, fallback to LLM.
    const requiresSummarization = ["agenda", "overview", "history", "mission", "committees", "refund", "cancellation"];
    if (requiresSummarization.some(keyword => normalizedQuery.includes(keyword))) {
      return { mode: AnswerMode.LLM };
    }

    // Attempt field matching
    for (const [field, keywords] of Object.entries(FIELD_MAP)) {
      if (keywords.some(kw => normalizedQuery.includes(kw))) {
        // We found a direct field mapping
        return this.formatDirectAnswer(field, conf);
      }
    }

    // Fallback if no exact field match
    return { mode: AnswerMode.LLM };
  }

  private static formatDirectAnswer(field: string, conf: Conference): { mode: AnswerMode, answer: string } {
    const title = conf.title;
    
    // Explicitly handle boolean and string fields
    let value = (conf as any)[field];
    
    if (value === undefined || value === null) {
       return { mode: AnswerMode.DIRECT, answer: `Information about ${this.formatFieldName(field)} for ${title} is not currently available.` };
    }

    if (typeof value === "boolean") {
       value = value ? "Yes" : "No";
    } else if (field === "registrationFee") {
       value = `₹${value}`;
    } else if (field.toLowerCase().includes("date")) {
       value = new Date(value).toLocaleDateString();
    }

    return { 
       mode: AnswerMode.DIRECT, 
       answer: `**${this.formatFieldName(field)}** for ${title}:\n${value}` 
    };
  }

  private static formatFieldName(field: string): string {
    return field
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
  }
}
