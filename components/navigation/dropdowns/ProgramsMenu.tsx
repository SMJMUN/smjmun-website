"use client";

import { motion } from "framer-motion";
import { PROGRAMS_MENU } from "../constants/navigation";
import { ProgramColumn } from "./ProgramColumn";
import { ProgramFeaturedCard } from "./ProgramFeaturedCard";

export function ProgramsMenu() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -24,
      }}
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
        <div className="grid grid-cols-12 gap-12">
          
          <div className="col-span-3">
            <ProgramColumn
              title="Leadership"
              links={PROGRAMS_MENU.associations}
            />
          </div>

          <div className="col-span-3">
            <ProgramColumn
              title="Institutional"
              links={PROGRAMS_MENU.development}
            />
          </div>

          <div className="col-span-3">
            <ProgramColumn
              title="Global"
              links={PROGRAMS_MENU.partnerships}
            />
          </div>

          <div className="col-span-3">
            <ProgramFeaturedCard />
          </div>
        </div>
      </div>
    </motion.div>
  );
}