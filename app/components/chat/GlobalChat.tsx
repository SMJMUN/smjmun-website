import React from "react";
import { SiteSettingsService } from "@/lib/sanity/siteSettings/service";
import { ChatProvider } from "./ChatContext";
import { ChatWidget } from "./ChatWidget";

export async function GlobalChat() {
  const settings = await SiteSettingsService.getSiteSettings();
  const aiSettings = settings?.aiAssistant;

  return (
    <ChatProvider
      initialSuggestedQuestions={aiSettings?.suggestedQuestions || []}
      greetingMessage={aiSettings?.greeting || "Hello! I am Tejas AI . How can I help you today?"}
    >
      <ChatWidget />
    </ChatProvider>
  );
}
