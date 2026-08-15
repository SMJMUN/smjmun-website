"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Section } from "../shared/Section";
import { Container } from "../shared/Container";
import { SectionHeading } from "../shared/SectionHeading";
import { Reveal } from "../shared/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryData } from "../types";

interface GalleryProps {
  data: GalleryData;
}

export function Gallery({ data }: GalleryProps) {
  const images = data.images;
  // The first image is static (left side), remaining images rotate in the 4 grid slots
  const staticImage = images[0];
  const rotatingImages = images.slice(1);

  // Track which image index is shown in each of the 4 slots
  const [slotIndices, setSlotIndices] = useState([0, 1, 2, 3]);

  // Pool of remaining images beyond the initial 4 slots
  const poolSize = rotatingImages.length;

  // Auto-rotate one slot at a time
  const [activeSlot, setActiveSlot] = useState(0);
  const nextImageIndex = useRef(4);

  const rotateSlot = useCallback(() => {
    setSlotIndices((prev) => {
      const next = [...prev];
      // Assign next unique image to the active slot
      next[activeSlot] = nextImageIndex.current % poolSize;
      return next;
    });
    nextImageIndex.current = (nextImageIndex.current + 1) % poolSize;
    setActiveSlot((prev) => (prev + 1) % 4);
  }, [activeSlot, poolSize]);

  useEffect(() => {
    if (poolSize <= 4) return; // Not enough images to rotate
    const timer = setInterval(rotateSlot, 3000);
    return () => clearInterval(timer);
  }, [rotateSlot, poolSize]);

  return (
    <Section>
      <Container>
        <SectionHeading
          label={data.label}
          heading={data.title}
          subtitle={data.subtitle}
        />

        <Reveal>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-[1fr_1fr] lg:grid-rows-2">
            {/* Left: static full-height image spanning both rows */}
            <div className="relative row-span-2 min-h-[360px] overflow-hidden lg:min-h-[500px]">
              <Image
                src={staticImage.src}
                alt={staticImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {staticImage.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8">
                  <p className="font-[family-name:var(--font-inter)] text-xs text-white/80">
                    {staticImage.caption}
                  </p>
                </div>
              )}
            </div>

            {/* Right top: 2 images side by side */}
            <div className="grid grid-cols-2 gap-2">
              {[0, 1].map((slot) => {
                const imgIndex =
                  slotIndices[slot] !== undefined
                    ? slotIndices[slot] % poolSize
                    : slot % poolSize;
                const img = rotatingImages[imgIndex] || rotatingImages[0];

                return (
                  <div
                    key={slot}
                    className="relative min-h-[180px] overflow-hidden lg:min-h-[246px]"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={imgIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 50vw, 25vw"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right bottom: 2 images side by side */}
            <div className="grid grid-cols-2 gap-2">
              {[2, 3].map((slot) => {
                const imgIndex =
                  slotIndices[slot] !== undefined
                    ? slotIndices[slot] % poolSize
                    : slot % poolSize;
                const img = rotatingImages[imgIndex] || rotatingImages[0];

                return (
                  <div
                    key={slot}
                    className="relative min-h-[180px] overflow-hidden lg:min-h-[246px]"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={imgIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 50vw, 25vw"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
