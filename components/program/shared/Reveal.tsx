"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  /** Trigger once or every time it enters viewport */
  once?: boolean;
  /** IntersectionObserver margin */
  margin?: string;
}

const getVariants = (
  direction: Direction,
  distance: number
): Variants => {
  const offset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return {
    hidden: {
      opacity: 0,
      ...offset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
};

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 40,
  once = true,
  margin = "-80px",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // @ts-ignore
  const isInView = useInView(ref, { once, margin });

  return (
    <motion.div
      ref={ref}
      variants={getVariants(direction, distance)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
