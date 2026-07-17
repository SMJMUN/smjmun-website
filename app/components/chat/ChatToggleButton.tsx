"use client";

import React, { useState, useEffect } from "react";
import { MessageSquareMore, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "./ChatContext";

export function ChatToggleButton() {
  const { isOpen: chatOpen, toggleChat } = useChat();
  const [tooltipDismissed, setTooltipDismissed] = useState(true); // default true to avoid hydration mismatch, set in useEffect

  // Show tooltip on every page load
  useEffect(() => {
    setTooltipDismissed(false);
  }, []);

  const handleDismissTooltip = () => {
    if (!tooltipDismissed) {
      setTooltipDismissed(true);
    }
  };

  const handleMainFabClick = () => {
    handleDismissTooltip();
    toggleChat();
  };

  // If chat opens (e.g. from somewhere else), close the tooltip
  useEffect(() => {
    if (chatOpen) {
      handleDismissTooltip();
    }
  }, [chatOpen]);

  return (
    <div
      className="fixed z-[2000]"
      style={{
        bottom: "max(24px, env(safe-area-inset-bottom))",
        right: "20px",
      }}
    >
      <AnimatePresence>
        {!tooltipDismissed && !chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
            transition={{ delay: 1.2, duration: 0.3 }}
            className="absolute bottom-20 right-0 mb-2 w-[240px] sm:w-[260px]"
          >
            <div className="relative bg-white text-black p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-black/5">
              <p className="text-sm font-medium leading-relaxed text-black">
                Questions about committees, registration, or schedules? Ask the AI.
              </p>
              {/* Triangle pointer */}
              <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white rotate-45 border-r border-b border-black/5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleMainFabClick}
        aria-label="Ask SMJMUN AI"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center h-14 rounded-full bg-[rgba(10,10,10,0.85)] backdrop-blur-xl border border-[#BB8B57]/30 shadow-[0_12px_40px_rgba(0,0,0,.45)] transition-all duration-300 hover:border-[#BB8B57]/60"
      >
        <AnimatePresence>
          {!tooltipDismissed && !chatOpen && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0, padding: 0 }}
              className="overflow-hidden whitespace-nowrap pl-5 pr-2 font-body text-[13px] tracking-[0.1em] uppercase text-white"
            >
              Ask AI
            </motion.span>
          )}
        </AnimatePresence>

        <div className="relative flex items-center justify-center w-14 h-14">
          <motion.div
            animate={{ rotate: chatOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#BB8B57]/10 border border-[#BB8B57]/20"
          >
            {chatOpen ? (
              <X size={20} className="text-[#BB8B57]" />
            ) : (
              <MessageSquareMore size={20} className="text-[#BB8B57]" />
            )}
          </motion.div>
        </div>
      </motion.button>
    </div>
  );
}