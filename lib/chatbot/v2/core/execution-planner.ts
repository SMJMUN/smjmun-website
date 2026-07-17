import { ResolvedContext, ExecutionPlan, ExecutionStep, ServiceName, Intent, PlannerRule } from "../types";

// Base plan templates
const fallbackPlan = (): ExecutionPlan => ({
  steps: [ExecutionStep.LLM_GENERATOR],
  requiresLLM: true,
  requiresClarification: false,
  targetService: "unknown"
});

export class ExecutionPlanner {
  private static rules: PlannerRule[] = [
    {
      // Clarification Rule
      evaluate: (ctx, hints) => {
        const { query } = ctx;
        if (query.intent === Intent.CONFERENCE && query.field && !query.entity) {
          return {
            score: 1.0, // High priority if this condition is exactly met
            reason: "Missing entity for specific field request",
            plan: { steps: [ExecutionStep.CLARIFICATION], requiresLLM: false, requiresClarification: true, targetService: "conference" }
          };
        }
        return { score: 0, reason: "No clarification needed" };
      }
    },
    {
      // Conference Rule
      evaluate: (ctx, hints) => {
        const { query } = ctx;
        let score = 0;
        
        if (query.intent === Intent.CONFERENCE) score += query.confidence * 0.5;
        if (hints?.possibleIntent === Intent.CONFERENCE) score += hints.confidence * 0.6;
        if (hints?.field) score += 0.4;
        
        if (score === 0) return { score: 0, reason: "No conference signals" };

        let plan: ExecutionPlan = {
          steps: [ExecutionStep.RESOLVE_MEMORY, ExecutionStep.DOMAIN_SERVICE, ExecutionStep.LLM_GENERATOR],
          requiresLLM: true,
          requiresClarification: false,
          targetService: "conference"
        };

        if (query.entity && hints?.field) {
          plan = { ...plan, steps: [ExecutionStep.RESOLVE_MEMORY, ExecutionStep.DOMAIN_SERVICE, ExecutionStep.TEMPLATE_RESPONSE], requiresLLM: false };
        } else if (query.entity && !hints?.field && !query.field) {
          plan = { ...plan, steps: [ExecutionStep.RESOLVE_MEMORY, ExecutionStep.DOMAIN_SERVICE, ExecutionStep.OVERVIEW_TEMPLATE], requiresLLM: false };
        } else if (query.entity && query.field) {
           plan = { ...plan, steps: [ExecutionStep.RESOLVE_MEMORY, ExecutionStep.DOMAIN_SERVICE, ExecutionStep.TEMPLATE_RESPONSE], requiresLLM: false };
        }

        return { score, reason: `Conference signals matched (score: ${score.toFixed(2)})`, plan };
      }
    },
    {
      // Organization Rule
      evaluate: (ctx, hints) => {
        const { query } = ctx;
        let score = 0;
        if (query.intent === Intent.ORGANIZATION) score += query.confidence * 0.5;
        if (hints?.possibleIntent === Intent.ORGANIZATION) score += hints.confidence * 0.8;
        
        if (score === 0) return { score: 0, reason: "No organization signals" };
        
        return {
          score,
          reason: `Organization signals matched (score: ${score.toFixed(2)})`,
          plan: {
             steps: [ExecutionStep.RESOLVE_MEMORY, ExecutionStep.DOMAIN_SERVICE, ExecutionStep.LLM_GENERATOR],
             requiresLLM: true,
             requiresClarification: false,
             targetService: "organization"
          }
        };
      }
    },
    {
       // Program Rule
       evaluate: (ctx, hints) => {
         let score = 0;
         if (ctx.query.intent === Intent.PROGRAM) score += ctx.query.confidence * 0.5;
         if (hints?.possibleIntent === Intent.PROGRAM) score += hints.confidence * 0.8;
         if (score === 0) return { score: 0, reason: "No program signals" };
         return {
           score,
           reason: `Program signals matched (score: ${score.toFixed(2)})`,
           plan: { steps: [ExecutionStep.RESOLVE_MEMORY, ExecutionStep.DOMAIN_SERVICE, ExecutionStep.LLM_GENERATOR], requiresLLM: true, requiresClarification: false, targetService: "content" }
         }
       }
    },
    {
       // FAQ Rule
       evaluate: (ctx, hints) => {
         let score = 0;
         if (ctx.query.intent === Intent.FAQ) score += ctx.query.confidence * 0.8;
         if (hints?.possibleIntent === Intent.FAQ) score += hints.confidence * 0.8;
         if (score === 0) return { score: 0, reason: "No FAQ signals" };
         return {
           score,
           reason: `FAQ signals matched (score: ${score.toFixed(2)})`,
           plan: { steps: [ExecutionStep.RESOLVE_MEMORY, ExecutionStep.DOMAIN_SERVICE, ExecutionStep.LLM_GENERATOR], requiresLLM: true, requiresClarification: false, targetService: "faq" }
         }
       }
    },
    {
       // Contact Rule
       evaluate: (ctx, hints) => {
         let score = 0;
         if (ctx.query.intent === Intent.CONTACT) score += ctx.query.confidence * 0.8;
         if (hints?.possibleIntent === Intent.CONTACT) score += hints.confidence * 0.8;
         if (score === 0) return { score: 0, reason: "No contact signals" };
         return {
           score,
           reason: `Contact signals matched (score: ${score.toFixed(2)})`,
           plan: { steps: [ExecutionStep.RESOLVE_MEMORY, ExecutionStep.DOMAIN_SERVICE, ExecutionStep.LLM_GENERATOR], requiresLLM: true, requiresClarification: false, targetService: "contact" }
         }
       }
    }
  ];

  static plan(context: ResolvedContext): ExecutionPlan {
    let bestPlan = fallbackPlan();
    let bestScore = 0;
    let winningReason = "Default fallback";

    const hints = context.query.semanticHints;

    for (const rule of this.rules) {
      const result = rule.evaluate(context, hints);
      if (result.score > bestScore && result.plan) {
        bestScore = result.score;
        bestPlan = result.plan;
        winningReason = result.reason;
      }
    }

    // Attach planner trace to context
    context.plannerTrace = {
      steps: ["Normalizer", "SemanticMapper", "Understanding", "Memory", "Planner"],
      decision: bestPlan.targetService || "unknown",
      reason: winningReason,
      confidence: bestScore
    };

    return bestPlan;
  }
}
