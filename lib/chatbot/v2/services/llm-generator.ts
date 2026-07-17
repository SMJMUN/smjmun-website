import { GeminiProvider } from "../../providers/gemini";
import { GroqProvider } from "../../providers/groq";
import { NvidiaProvider } from "../../providers/nvidia-provider";
import { AIProvider } from "../../providers/types";

export class LLMGenerator {
  private static getProvider(): AIProvider {
    if (process.env.NVIDIA_API_KEY) {
      return new NvidiaProvider();
    } else if (process.env.GROQ_API_KEY) {
      return new GroqProvider();
    }
    return new GeminiProvider();
  }

  static async generate(prompt: string): Promise<string> {
    const provider = this.getProvider();
    return await provider.generateResponse(prompt);
  }
}
