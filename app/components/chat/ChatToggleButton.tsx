"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquareMore, X, Sparkles, Headphones } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "./ChatContext";
import Link from "next/link";

export function ChatToggleButton() {
  const { isOpen: chatOpen, toggleChat } = useChat();
  const [menuOpen, setMenuOpen] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(true); // default true to avoid hydration mismatch, set in useEffect
  const containerRef = useRef<HTMLDivElement>(null);

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
    
    if (chatOpen) {
      toggleChat();
      return;
    }
    
    setMenuOpen((prev) => !prev);
  };

  const handleAskAIClick = () => {
    handleDismissTooltip();
    setMenuOpen(false);
    if (!chatOpen) {
      toggleChat();
    }
  };

  const handleContactClick = () => {
    handleDismissTooltip();
    setMenuOpen(false);
  };

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuOpen &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (menuOpen && event.key === "Escape") {
        setMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  // If chat opens (e.g. from somewhere else), close the menu
  useEffect(() => {
    if (chatOpen) {
      setMenuOpen(false);
      handleDismissTooltip();
    }
  }, [chatOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed z-[2000]"
      style={{
        bottom: "max(24px, env(safe-area-inset-bottom))",
        right: "20px",
      }}
    >
      <AnimatePresence>
        {!tooltipDismissed && !menuOpen && !chatOpen && (
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

      <AnimatePresence>
        {menuOpen && !chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
            className="absolute bottom-20 right-0 mb-2 flex flex-col items-end gap-3"
          >
            <Link
              href="/contact"
              onClick={handleContactClick}
              className="flex items-center gap-3 group"
            >
              <span className="bg-black/80 text-white backdrop-blur-md px-3 py-1.5 rounded-lg text-sm font-medium border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                Contact
              </span>
              <button
                aria-label="Contact Support"
                className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white shadow-lg hover:bg-zinc-800 transition-colors"
              >
                <Headphones size={20} />
              </button>
            </Link>

            <button
              onClick={handleAskAIClick}
              className="flex items-center gap-3 group"
              aria-label="Ask SMJMUN AI"
            >
              <span className="bg-black/80 text-white backdrop-blur-md px-3 py-1.5 rounded-lg text-sm font-medium border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                Ask AI
              </span>
              <div className="w-12 h-12 rounded-full bg-[#BB8B57]/20 border border-[#BB8B57]/40 flex items-center justify-center text-[#BB8B57] shadow-lg hover:bg-[#BB8B57]/30 transition-colors">
                <Sparkles size={20} />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleMainFabClick}
        aria-label="Support Menu"
        aria-expanded={menuOpen}
        aria-controls="support-menu"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center h-14 rounded-full bg-[rgba(10,10,10,0.85)] backdrop-blur-xl border border-[#BB8B57]/30 shadow-[0_12px_40px_rgba(0,0,0,.45)] transition-all duration-300 hover:border-[#BB8B57]/60"
      >
        <AnimatePresence>
          {!tooltipDismissed && !menuOpen && !chatOpen && (
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
            animate={{ rotate: menuOpen || chatOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#BB8B57]/10 border border-[#BB8B57]/20"
          >
            {menuOpen || chatOpen ? (
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