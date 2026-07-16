"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "../shared/FadeIn";
import type { HeroData } from "../types";

interface HeroVideoProps {
  data: HeroData;
}

export function HeroVideo({ data }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
      {/* Background media */}
      {data.videoSrc ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.85]"
          poster={data.imageSrc}
        >
          <source src={data.videoSrc} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={data.imageSrc}
          alt={data.imageAlt || data.heading}
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
      )}

      {/* Overlay — flat center + left-side gradient, NOT full dark */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/45" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"
      />

      {/* Content — vertical center left */}
      <div className="absolute left-0 top-1/2 z-10 w-full -translate-y-1/2">
        <div className="mx-auto max-w-[1250px] px-8 lg:px-16">

          {/* Badge */}
          <FadeIn delay={0.2} distance={15}>
            <div className="mb-6 inline-flex items-center     ">
              <p className="font-[family-name:var(--font-inter)] bg-gold p-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/90">
                {data.badge}
              </p>
            </div>
          </FadeIn>

          {/* Heading
          <FadeIn delay={0.4} distance={20}>
            <h1 className="max-w-[760px] font-[family-name:var(--font-playfair)] text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-white lg:text-7xl">
              {data.heading}
            </h1>
          </FadeIn> */}

          {/* Description */}
          <FadeIn delay={0.6} distance={15}>
            <div className="mt-8 border-l border-[#BB8B57] pl-5">
              <p className="max-w-xl font-[family-name:var(--font-inter)] text-lg leading-8 text-white/85">
                {data.description}
              </p>
            </div>
          </FadeIn>

          {/* Divider */}
          <div className="mt-10 h-px w-20 bg-white/20" />

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-5">
            {data.primaryCTA && (
              <Link
                href={data.primaryCTA.href}
                className="inline-flex bg-charcoal items-center   px-8 py-3 font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-white hover:text-black"
              >
                {data.primaryCTA.label}
              </Link>
            )}
            {data.secondaryCTA && (
              <Link
                href={data.secondaryCTA.href}
                className="font-[family-name:var(--font-inter)] text-sm text-white/70 underline-offset-4 transition hover:underline"
              >
                {data.secondaryCTA.label}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator — stacked chevrons, bottom-right like Tata */}
      <motion.div
        className="absolute bottom-10 right-12 z-10 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6 text-white/70" />
        <ChevronDown className="-mt-4 h-6 w-6 text-white/45" />
        <ChevronDown className="-mt-4 h-6 w-6 text-white/25" />
      </motion.div>
    </section>
  );
}