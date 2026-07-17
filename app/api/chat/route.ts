import { NextResponse } from "next/server";
import { ChatbotService } from "@/lib/chatbot/service";
import { QueryNormalizer } from "@/lib/chatbot/v2/pipeline/normalizer";
import { SemanticMapper } from "@/lib/chatbot/v2/pipeline/semantic-mapper";
import { FastMatcher } from "@/lib/chatbot/v2/pipeline/fast-matcher";
import { UnderstandingLayer } from "@/lib/chatbot/v2/pipeline/understanding";
import { V2Engine } from "@/lib/chatbot/v2/engine";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { question, sessionId = "default-session", versionOverride } = body;

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { success: false, error: "Missing or invalid 'question' in request body." },
        { status: 400 }
      );
    }

    const version = versionOverride || process.env.CHATBOT_VERSION || "v2";
    const provider = process.env.GEMINI_API_KEY ? "gemini" : (process.env.GROQ_API_KEY ? "groq" : "unknown");

    if (version === "v2") {
      const response = await V2Engine.process(question, sessionId);
      return NextResponse.json({
        success: true,
        answer: response.text, // Map V2 text to V1 answer so UI doesn't break
        v2Response: response,  // Pass the full V2 object for future UI iterations
        provider,
        v2: true,
        timestamp: new Date().toISOString()
      }, { status: 200 });
    }

    // Call the deterministic pipeline we built in Phases 1-5 (V1)
    const result = await ChatbotService.generateAnswer(question, sessionId);

    // Structured response requested by the user
    return NextResponse.json(
      {
        success: true,
        answer: result.answer,
        intent: result.intent,
        provider: provider,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "An unexpected error occurred processing your request.",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
