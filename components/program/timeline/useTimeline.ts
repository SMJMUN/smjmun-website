"use client";

import { useRef } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

interface UseTimelineOptions {
  totalSteps: number;
}

interface UseTimelineReturn {
  containerRef: React.RefObject<HTMLElement>;
  activeStep: number;
  progress: number;
}

/**
 * useTimeline
 *
 * Drives the pinned scroll timeline entirely through scrollYProgress.
 * No wheel listeners. No setTimeout. Pure scroll.
 */
export function useTimeline({ totalSteps }: UseTimelineOptions): UseTimelineReturn {
  const containerRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map 0–1 scroll progress to 0–(totalSteps-1) step index
    const stepSize = 1 / totalSteps;
    const index = Math.min(
      Math.floor(latest / stepSize),
      totalSteps - 1
    );
    // React automatically bails out if the state is the same
    setActiveStep(index);
  });
  // @ts-ignore
  return { containerRef, activeStep };
}
