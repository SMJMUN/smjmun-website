"use client";

import React, { useState, KeyboardEvent } from "react";
import { useChat } from "./ChatContext";
import { ArrowUp } from "lucide-react";



export function ChatInput() {
  const [input, setInput] = useState("");
  const { sendMessage, isLoading } = useChat();

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      sendMessage(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 bg-black/80 backdrop-blur-md border-t border-zinc-800">
      <div className="relative flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          aria-label="Type your message"
          disabled={isLoading}
          className="w-full bg-zinc-900 border border-zinc-700 text-zinc-100 text-sm rounded-full pl-4 pr-12 py-3 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 disabled:opacity-50 transition-all placeholder:text-zinc-500"
        />

<button
  onClick={handleSend}
  disabled={!input.trim() || isLoading}
  className="
    absolute
    right-2
    top-1/2
    -translate-y-1/2

    flex
    items-center
    justify-center

    w-10
    h-10

    rounded-full

    bg-[#BB8B57]
    text-black

    shadow-[0_0_20px_rgba(187,139,87,.25)]

    transition-all
    duration-300

    hover:scale-105
    hover:bg-[#c89b69]
    hover:shadow-[0_0_30px_rgba(187,139,87,.45)]

    disabled:opacity-40
    disabled:cursor-not-allowed
    disabled:hover:scale-100
  "
  aria-label="Send message"
>
  <ArrowUp size={18} strokeWidth={2.5} />
</button>
      </div>
      <div className="text-center mt-2">
        <p className="text-[10px] text-zinc-600">SMJMUN AI Assistant can make mistakes.</p>
      </div>
    </div>
  );
}
