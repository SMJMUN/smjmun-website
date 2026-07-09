import { NextResponse } from "next/server";
import { ChatbotService } from "@/lib/chatbot/service";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { question, sessionId = "default-session" } = body;

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { success: false, error: "Missing or invalid 'question' in request body." },
        { status: 400 }
      );
    }

    // Call the deterministic pipeline we built in Phases 1-5
    const result = await ChatbotService.generateAnswer(question, sessionId);

    // Identify which provider is active for analytics
    const provider = process.env.GEMINI_API_KEY ? "gemini" : (process.env.GROQ_API_KEY ? "groq" : "unknown");

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
