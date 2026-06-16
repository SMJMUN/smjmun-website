'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
interface LogoProps {
  isScrolled: boolean;
}

export function Logo({ isScrolled }: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 md:gap-4 group relative z-50"
    >
      {/* Logo */}
      <motion.div
        animate={{
          width: isScrolled ? 64 : 99,
          height: isScrolled ? 64 : 99,
        }}
        transition={{
          duration: 0.99,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative overflow-hidden shrink-0"
      >
        <Image
          src="/images/smg-mun-logo.png"
          alt="SMG MUN Logo"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Institution Text */}
      <AnimatePresence mode="wait">
        {!isScrolled && (
        <motion.div
  animate={{
    opacity: isScrolled ? 0 : 1,
    y: isScrolled ? 55 : 0,
    scale: isScrolled ? 0.96 : 1,
    filter: isScrolled
      ? "blur(8px)"
      : "blur(0px)",
  }}
  transition={{
    duration: 1.8,
    delay: isScrolled ? 0.15 : 0,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="flex flex-col origin-top-left"
>
            <span
              style={{
                fontFamily:
                  "var(--font-heading), Georgia, serif",
              }}
              className="font-bold text-xl md:text-2xl text-white tracking-tight"
            >
              SMJMUN
            </span>

            <div className="h-px bg-[#bb8b57] my-1 w-full" />

            <span className="hidden md:block text-[11px] uppercase tracking-[0.22em] text-white/70">
              Shri Seth Mangilalji Sahu
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}
