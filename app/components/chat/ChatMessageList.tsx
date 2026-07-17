"use client";

import React, { useEffect, useRef } from "react";
import { useChat } from "./ChatContext";

export function ChatMessageList() {
  const { messages, isLoading, error } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-4 custom-scrollbar" data-lenis-prevent>
      {messages.map((msg) => {
        const isUser = msg.role === "user";
        return (
          <div key={msg.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                isUser
                  ? "bg-zinc-800 text-white rounded-tr-none border border-zinc-700"
                  : "bg-black/60 text-zinc-100 rounded-tl-none border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.05)]"
              }`}
            >
              {/* If it's the assistant, we could render markdown here, but for now just text */}
              <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
            </div>
          </div>
        );
      })}

      {isLoading && (
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl px-4 py-3 bg-black/60 rounded-tl-none border border-yellow-500/20 flex items-center space-x-1.5">
            <div className="w-2 h-2 bg-yellow-500/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 bg-yellow-500/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-2 h-2 bg-yellow-500/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      )}

      {error && (
        <div className="flex justify-center mt-2">
          <div className="bg-red-950/50 border border-red-500/30 text-red-200 text-xs px-3 py-2 rounded-lg text-center max-w-[90%]">
            {error}
          </div>
        </div>
      )}
      
      <div ref={bottomRef} />
    </div>
  );
}
