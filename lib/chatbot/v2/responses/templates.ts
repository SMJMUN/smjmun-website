import { ServiceResult } from "../types";

export class TemplateEngine {
  /**
   * Attempts to generate a direct text response using a template.
   * Returns null if no template exists for the requested field.
   */
  static apply(entity: string, field: string, result: ServiceResult): string | null {
    if (!result.data || result.data.length === 0) return null;
    
    const dataObj = result.data[0]; // Assuming SINGLE retrieval mode for direct field access
    
    // Fallback if data is missing
    if (dataObj[field] === undefined || dataObj[field] === null) {
       return `Information about ${this.formatFieldName(field)} for ${entity} is not currently available.`;
    }

    const value = dataObj[field];

    switch(field) {
      case "registrationFee":
      case "fee":
      case "fees":
        return `The registration fee for this conference is ₹${value}.`;
      
      case "venue":
      case "location":
        return `It will be held at ${value}.`;
        
      case "accommodation":
        if (value === true || String(value).toLowerCase() === "yes") return `Accommodation is available for delegates.`;
        if (value === false || String(value).toLowerCase() === "no") return `Accommodation is not provided for this conference.`;
        return `Regarding accommodation: ${value}`;
        
      case "food":
      case "meals":
        if (value === true || String(value).toLowerCase() === "yes") return `Meals are included during the conference.`;
        if (value === false || String(value).toLowerCase() === "no") return `Meals are not included for this conference.`;
        return `Regarding meals: ${value}`;
        
      case "capacity":
        return `The capacity is ${value} delegates.`;
        
      case "date":
      case "startDate":
      case "endDate":
        const dateStr = new Date(value).toLocaleDateString();
        return `The scheduled date is ${dateStr}.`;
        
      default:
        // Generic fallback for simple primitive fields
        if (typeof value === "string" || typeof value === "number") {
           return `**${this.formatFieldName(field)}**:\n${value}`;
        }
        return null;
    }
  }

  private static formatFieldName(field: string): string {
    return field
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .trim();
  }

  static overview(entity: string, result: ServiceResult): string | null {
    if (!result.data || result.data.length === 0) return null;
    const conf = result.data[0];

    let out = `# ${conf.title || entity}\n\n`;

    if (conf.venue) out += `📍 **Venue**\n${conf.venue}\n\n`;
    
    if (conf.date) {
      const dateStr = new Date(conf.date).toLocaleDateString();
      out += `📅 **Date**\n${dateStr}\n\n`;
    }

    if (conf.registrationFee) out += `💰 **Registration Fee**\n₹${conf.registrationFee}\n\n`;
    
    if (conf.committees && conf.committees.length > 0) {
      const cList = conf.committees.map((c: any) => c.name || "Committee").join(", ");
      out += `🏛 **Committees**\n${cList}\n\n`;
    }

    if (conf.dressCode) out += `👔 **Dress Code**\n${conf.dressCode}\n\n`;
    
    if (conf.accommodationAvailable !== undefined) {
      out += `🛏 **Accommodation**\n${conf.accommodationAvailable ? "Available" : "Not Provided"}\n\n`;
    }

    if (conf.foodProvided !== undefined) {
      out += `🍽 **Meals**\n${conf.foodProvided ? "Included" : "Not Included"}\n\n`;
    }

    if (conf.certificateProvided !== undefined) {
      out += `🎓 **Certificate**\n${conf.certificateProvided ? "Provided" : "Not Provided"}\n\n`;
    }

    return out.trim();
  }
}
