'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
interface LogoProps {
  isScrolled: boolean;
}

export function Logo({ isScrolled }: LogoProps) {
  const scrollToHero = () => {
    document
      .getElementById("hero")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Link
      href="#hero"
      className="flex items-center gap-3 md:gap-4 group relative z-50"
      onClick={scrollToHero}
    >
      {/* Logo */}
      <motion.div
        layoutId="smjmun-logo"
        animate={{
          width: isScrolled ? 64 : 99,
          height: isScrolled ? 64 : 99,
        }}
        transition={{
          duration: 1,
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
      <motion.div
        animate={{
          opacity: isScrolled ? 0 : 1,
          y: isScrolled ? -40 : 0,
          scale: isScrolled ? 0.95 : 1,
          filter: isScrolled
            ? "blur(8px)"
            : "blur(0px)",
        }}
        transition={{
          opacity: {
            duration: 1.6,
            delay: 0.15,
          },
          y: {
            duration: 2.2,
            ease: [0.22, 1, 0.36, 1],
          },
          scale: {
            duration: 1.6,
          },
          filter: {
            duration: 1.4,
            delay: 0.1,
          },
        }}
        className="flex flex-col origin-top-left pointer-events-none"
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

        <motion.div
          animate={{
            scaleX: isScrolled ? 0.7 : 1,
            opacity: isScrolled ? 0 : 1,
          }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-px bg-[#bb8b57] my-1 w-full origin-left"
        />

        <span className="hidden md:block text-[11px] uppercase tracking-[0.22em] text-white/70">
          Shri Seth Mangilalji Sahu <br />International Model United Nations

        </span>
      </motion.div>
    </Link>
  );

}
