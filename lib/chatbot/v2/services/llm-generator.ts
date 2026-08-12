import { GeminiProvider } from "../../providers/gemini";
import { GroqProvider } from "../../providers/groq";
import { NvidiaProvider } from "../../providers/nvidia-provider";
import { AIProvider } from "../../providers/types";
import { ChatLogger } from "../../utils/logger";

export class LLMGenerator {
  private static getProvider(): AIProvider {
    if (process.env.NVIDIA_API_KEY) {
      return new NvidiaProvider();
    } else if (process.env.GROQ_API_KEY) {
      return new GroqProvider();
    }
    return new GeminiProvider();
  }

  static async generate(prompt: string, logger?: ChatLogger): Promise<string> {
    const provider = this.getProvider();
    const t0 = performance.now();
    const result = await provider.generateResponse(prompt);
    if (logger) {
      logger.logLLMCall(performance.now() - t0, prompt.length, result.length);
    }
    return result;
  }
}
