'use client';

import { motion } from "framer-motion";
import { ProgramColumn } from "./ProgramColumn";

export const ABOUT_MENU = {
  links: [
    {
      title: "About The SMJMUN",
      href: "/about"
    },
    {
      title: "About The Founder",
      href: "/founder"
    }
  ]
};

export function AboutMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        w-screen
        bg-[#0a0a0a]
        border-t
        border-white/10
      "
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-24
          py-14
        "
      >
        <div className="flex justify-center">
          <div className="w-full max-w-[280px]">
            <ProgramColumn
              title="About"
              links={ABOUT_MENU.links}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
