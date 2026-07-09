import { Conference } from "@/lib/sanity/conference/types";
import { RetrievalResult } from "../types";

export class ConferenceContextFormatter {
  static format(result: RetrievalResult<Conference>): string {
    if (result.status === "NOT_FOUND") {
      return result.message || "I couldn't find that conference.";
    }

    if (result.status === "AMBIGUOUS") {
      let msg = result.message || "I couldn't find an exact match. Did you mean:\n";
      if (result.suggestions && result.suggestions.length > 0) {
        msg += result.suggestions.map(s => `- ${s.title}`).join("\n");
      }
      return msg;
    }

    if (!result.data || result.data.length === 0) {
      return "No conference data available.";
    }

    return result.data.map(conf => this.formatSingleConference(conf)).join("\n\n---\n\n");
  }

  private static formatSingleConference(conf: Conference): string {
    const lines = [];
    
    lines.push(`Conference: ${conf.title}`);
    lines.push(`Status: ${conf.status}`);
    
    if (conf.date) lines.push(`Date: ${new Date(conf.date).toLocaleDateString()}`);
    if (conf.venue) lines.push(`Venue: ${conf.venue}`);
    
    if (conf.registrationFee !== undefined) lines.push(`Registration Fee: ₹${conf.registrationFee}`);
    lines.push(`Registration Open: ${conf.registrationOpen ? "Yes" : "No"}`);
    
    if (conf.eligibility) lines.push(`Eligibility: ${conf.eligibility}`);
    if (conf.dressCode) lines.push(`Dress Code: ${conf.dressCode}`);
    if (conf.reportingTime) lines.push(`Reporting Time: ${conf.reportingTime}`);
    
    lines.push(`Accommodation Available: ${conf.accommodationAvailable ? "Yes" : "No"}`);
    lines.push(`Food Provided: ${conf.foodProvided ? "Yes" : "No"}`);
    lines.push(`Certificate Provided: ${conf.certificateProvided ? "Yes" : "No"}`);
    
    if (conf.committees && conf.committees.length > 0) {
      lines.push(`\nCommittees:\n` + conf.committees.map(c => `- ${c.name} (Agenda: ${c.agenda || 'TBA'})`).join("\n"));
    }

    return lines.join("\n");
  }
}
