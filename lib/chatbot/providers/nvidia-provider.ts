import OpenAI from "openai";
import { AIProvider } from "./types";

export class NvidiaProvider implements AIProvider {
  private client: OpenAI;
  private model: string;

  constructor() {
    if (!process.env.NVIDIA_API_KEY) {
      throw new Error("NVIDIA_API_KEY is not defined");
    }

    this.client = new OpenAI({
      apiKey: process.env.NVIDIA_API_KEY,
      baseURL: "https://integrate.api.nvidia.com/v1",
    });

    // Choose any NVIDIA NIM hosted model
    this.model = "meta/llama-3.1-8b-instruct";
    // Other examples:
    // "meta/llama-3.1-8b-instruct"
    // "deepseek-ai/deepseek-v3"
    // "nvidia/llama-3.1-nemotron-70b-instruct"
  }

  async generateResponse(prompt: string): Promise<string> {
    try {
      const completion = await this.client.chat.completions.create({
        model: this.model,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 1024,
      });

      return completion.choices[0]?.message?.content ?? "No response generated.";
    } catch (error) {
      console.error("NVIDIA NIM Generation Error:", error);
      throw new Error("Failed to generate response from NVIDIA NIM.");
    }
  }
}