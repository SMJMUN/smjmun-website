"use client";

import { Sparkles, MessageSquareMore, X } from "lucide-react";
import { motion } from "framer-motion";
import { useChat } from "./ChatContext";

export function ChatToggleButton() {
  const { isOpen, toggleChat } = useChat();

  return (
    <motion.button
      onClick={toggleChat}
      aria-label="Ask SMJ AI"
      whileHover={{
        y: -2,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        bottom-6
        right-6
        z-[100]
        group
      "
    >
      <div
        className="
          relative
          overflow-hidden

          flex
          items-center
          gap-3

          h-14
          px-5

          rounded-full

          bg-[rgba(10,10,10,0.72)]
          backdrop-blur-xl

          border
          border-[#BB8B57]/25

          shadow-[0_12px_40px_rgba(0,0,0,.45)]

          transition-all
          duration-500

          group-hover:border-[#BB8B57]/50
          group-hover:shadow-[0_0_40px_rgba(187,139,87,.18)]
        "
      >
        {/* Gold glow */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
            bg-[radial-gradient(circle_at_top_left,rgba(187,139,87,.12),transparent_60%)]
          "
        />

        {/* Icon */}
        <div
          className="
            relative
            flex
            items-center
            justify-center

            w-9
            h-9

            rounded-full

            bg-[#BB8B57]/10
            border
            border-[#BB8B57]/20
          "
        >
          {isOpen ? (
            <X
              size={18}
              className="text-[#BB8B57]"
            />
          ) : (
            <MessageSquareMore
              size={18}
              className="text-[#BB8B57]"
            />
          )}
        </div>

        {/* Label */}
        <span
          className="
            relative
            flex
            items-center
            gap-2

            font-body
            text-[13px]
            tracking-[0.14em]
            uppercase

            text-white
          "
        >
          <Sparkles
            size={13}
            className="text-[#BB8B57]"
          />

          Ask SMJ AI
        </span>

        {/* Premium shine */}
        <div
          className="
            absolute
            -left-20
            top-0
            h-full
            w-20

            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent

            rotate-12

            group-hover:left-[120%]

            transition-all
            duration-[1200ms]
          "
        />
      </div>
    </motion.button>
  );
}