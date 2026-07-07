"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useTimeline } from "./useTimeline";
import { TimelineStep } from "./TimelineStep";
import { TimelineDots } from "./TimelineDots";
import { Reveal } from "../shared/Reveal";
import type { TimelineData } from "../types";

/**
 * Background: cinematic wide shots — atmosphere / environment.
 * Card:       close-up detail shots — action / people.
 * Two different images so they don't repeat the same frame.
 */
const BG_IMAGES = [
  "/images/ceremony-1.png",
  "/images/ceremony-2.png",
  "/images/ceremony-3.png",
  "/images/ceremony-4.png",
  "/images/community.jpeg",
];

const CARD_IMAGES = [
  "/images/student-training.jpeg",
  "/images/student-training-2.jpeg",
  "/images/moment-1.jpeg",
  "/images/perparestudent.jpeg",
  "/images/moment-2.jpeg",
];

interface TimelineProps {
  data: TimelineData;
}

export function Timeline({ data }: TimelineProps) {
  const { containerRef, activeStep } = useTimeline({
    totalSteps: data.steps.length,
  });

  const totalSteps = data.steps.length;
  const totalHeight = totalSteps * 100;

  return (
    <>
      {/* ── DESKTOP: pinned scroll ── */}
      <section
        ref={containerRef as React.RefObject<HTMLElement>}
        style={{ height: `${totalHeight}vh` }}
        className="relative hidden bg-[#0B0B0B] md:block"
        aria-label="Journey timeline"
      >
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Crossfading full-screen background (cinematic wide shot) */}
          <div className="absolute inset-0">
            <AnimatePresence>
              <motion.div
                key={`bg-${activeStep}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={BG_IMAGES[activeStep % BG_IMAGES.length]}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={activeStep === 0}
                />
                <div className="absolute inset-0 bg-black/82" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Main content — 3-column grid, top-aligned */}
          <div className="relative z-10 grid h-full grid-cols-[1.3fr_380px_36px] items-start gap-16 px-16 lg:gap-24 lg:px-24">

            {/* ─── COL 1: Heading + Step Content ─── */}
            <div className="flex h-full flex-col">
              {/* Section heading occupies top ~25% of viewport */}
              <div className="flex flex-col justify-end" style={{ height: "28vh" }}>
                <Reveal once>
                  <p className="mb-2 font-[family-name:var(--font-inter)] text-[20px] font-medium uppercase tracking-[0.25em] text-[#BB8B57]">
                    
                    {data.label}
                  </p>
                  <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold leading-[1.15] text-white md:text-2xl lg:text-[28px]">
                    {data.title}
                  </h2>
                  {data.subtitle && (
                    <p className="mt-3 max-w-sm font-[family-name:var(--font-inter)] text-[15px] leading-relaxed text-[#C8C8C8]">
                      {data.subtitle}
                    </p>
                  )}
                </Reveal>
              </div>

              {/* Thin separator */}
              <div className="my-8 h-[1px] w-full bg-white/8" />

              {/* Step content — fills remaining height */}
              <div className="relative flex-1">
                {data.steps.map((step, i) => (
                  <div key={i} className="absolute inset-0">
                    <TimelineStep
                      number={step.number}
                      title={step.title}
                      description={step.description}
                      isActive={activeStep === i}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ─── COL 2: Detail card image (different from bg) ─── */}
            <div className="flex h-full flex-col" style={{ paddingTop: "calc(28vh + 57px)" }}>
              <div className="relative h-[360px] w-full overflow-hidden lg:h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`card-${activeStep}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={CARD_IMAGES[activeStep % CARD_IMAGES.length]}
                      alt={data.steps[activeStep]?.title || ""}
                      fill
                      className="object-cover"
                      sizes="380px"
                    />
                    {/* Step label overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-12">
                      <p className="font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-[0.12em] text-white/60">
                        Step {data.steps[activeStep]?.number}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* ─── COL 3: Vertical dots ─── */}
            <div className="flex h-full flex-col" style={{ paddingTop: "calc(28vh + 57px + 60px)" }}>
              <TimelineDots
                currentIndex={activeStep}
                totalSteps={totalSteps}
              />
            </div>
          </div>

          {/* Gold progress bar — bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px] bg-white/8">
            <motion.div
              className="h-full origin-left bg-[#BB8B57]"
              animate={{ scaleX: (activeStep + 1) / totalSteps }}
              initial={{ scaleX: 1 / totalSteps }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </section>

      {/* ── MOBILE: simple vertical cards ── */}
      <section className="block bg-[#0B0B0B] py-16 md:hidden">
        <div className="mx-auto max-w-[540px] px-6">
          <Reveal className="mb-10">
            <p className="mb-2 font-[family-name:var(--font-inter)] text-[11px] font-medium uppercase tracking-[0.25em] text-[#BB8B57]">
              {data.label}
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
              {data.title}
            </h2>
            {data.subtitle && (
              <p className="mt-3 font-[family-name:var(--font-inter)] text-[13px] leading-relaxed text-[#C8C8C8]">
                {data.subtitle}
              </p>
            )}
          </Reveal>

          <div className="relative space-y-0">
            <div
              aria-hidden="true"
              className="absolute left-[9px] top-0 h-full w-[1px] bg-gradient-to-b from-[#BB8B57]/40 via-[#BB8B57]/15 to-transparent"
            />
            {data.steps.map((step, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="relative flex gap-6 py-8">
                  <div className="relative z-10 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[#BB8B57]" />
                  </div>
                  <div>
                    <p className="mb-1 font-[family-name:var(--font-inter)] text-[10px] font-medium uppercase tracking-[0.2em] text-[#BB8B57]">
                      {step.number}
                    </p>
                    <h4 className="mb-2 font-[family-name:var(--font-playfair)] text-base font-bold text-white">
                      {step.title}
                    </h4>
                    <p className="font-[family-name:var(--font-inter)] text-[13px] leading-relaxed text-[#C8C8C8]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
