"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "../shared/Section";
import { Container } from "../shared/Container";
import { SectionHeading } from "../shared/SectionHeading";
import { Reveal } from "../shared/Reveal";
import type { RelatedProgramItem } from "../types";

interface RelatedProgramsProps {
  data: RelatedProgramItem[];
  currentSlug: string;
}

// ─── Desktop Card ─────────────────────────────────────────────────────────────

function DesktopCard({
  program,
  index,
}: {
  program: RelatedProgramItem;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={index * 0.06}>
      <Link
        href={`/programs/${program.slug}`}
        className="
          group relative block overflow-hidden
          border border-white/[0.08]
          bg-white/[0.02]
          transition-all duration-500 ease-out
          hover:-translate-y-2
          hover:border-[#BB8B57]/60
          hover:bg-white/[0.04]
          hover:shadow-[0_0_40px_-8px_rgba(187,139,87,0.18)]
        "
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Subtle gold tint on hover */}
          <div className="absolute inset-0 bg-[#BB8B57]/0 transition-all duration-500 group-hover:bg-[#BB8B57]/[0.06]" />
        </div>

        {/* Content */}
        <div className="relative overflow-hidden p-5">
          {/* Background number */}
          <span
            className="
              pointer-events-none absolute
              -bottom-4 -right-1
              select-none
              font-[family-name:var(--font-playfair)]
              text-[120px] font-bold leading-none
              text-white/[0.045]
              transition-all duration-500
              group-hover:text-[150px]
              group-hover:text-white/[0.10]
            "
          >
            {num}
          </span>

          <h4
            className="
              relative mb-2
              font-[family-name:var(--font-playfair)]
              text-base font-bold text-white
              transition-colors duration-500
              group-hover:text-[#BB8B57]
            "
          >
            {program.title}
          </h4>

          <p className="relative mb-4 font-[family-name:var(--font-inter)] text-[13px] leading-relaxed text-[#8B8B8B]">
            {program.description}
          </p>

          <span className="relative inline-flex items-center gap-1 font-[family-name:var(--font-inter)] text-[11px] font-medium uppercase tracking-[0.12em] text-[#BB8B57]">
            Explore
            <ArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

// ─── Mobile Carousel ──────────────────────────────────────────────────────────

function MobileCarousel({ items }: { items: RelatedProgramItem[] }) {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const goTo = useCallback(
    (idx: number) => {
      setActive(Math.max(0, Math.min(items.length - 1, idx)));
    },
    [items.length]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[active] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
  }, [active]);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const delta = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) goTo(active + (delta > 0 ? 1 : -1));
    isDragging.current = false;
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-hidden px-6 pb-2"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {items.map((program, i) => {
          const num = String(i + 1).padStart(2, "0");
          const isActive = i === active;

          return (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              onClick={() => goTo(i)}
              className="relative flex-shrink-0 w-[calc(100vw-48px)] overflow-hidden block"
              style={{
                border: `1px solid ${isActive ? "rgba(187,139,87,0.6)" : "rgba(255,255,255,0.07)"}`,
                background: isActive
                  ? "rgba(187,139,87,0.05)"
                  : "rgba(255,255,255,0.02)",
                transition: "border-color 0.4s, background 0.4s",
              }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div
                  className="absolute inset-0 transition-all duration-400"
                  style={{
                    background: isActive
                      ? "rgba(187,139,87,0.06)"
                      : "transparent",
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative overflow-hidden p-5">
                {/* Background number */}
                <span
                  className="
                    pointer-events-none absolute
                    -bottom-3 -right-1
                    select-none
                    font-[family-name:var(--font-playfair)]
                    text-[100px] font-bold leading-none
                  "
                  style={{
                    color: isActive
                      ? "rgba(255,255,255,0.10)"
                      : "rgba(255,255,255,0.04)",
                    transition: "color 0.4s",
                  }}
                >
                  {num}
                </span>

                <h4
                  className="relative mb-2 font-[family-name:var(--font-playfair)] text-base font-bold transition-colors duration-400"
                  style={{ color: isActive ? "#BB8B57" : "#fff" }}
                >
                  {program.title}
                </h4>

                <p className="relative mb-4 font-[family-name:var(--font-inter)] text-[13px] leading-relaxed text-[#8B8B8B]">
                  {program.description}
                </p>

                <span className="relative inline-flex items-center gap-1 font-[family-name:var(--font-inter)] text-[11px] font-medium uppercase tracking-[0.12em] text-[#BB8B57]">
                  Explore
                  <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="mt-6 flex items-center justify-center gap-2 px-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to program ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: i === active ? "20px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background:
                i === active ? "#BB8B57" : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export function RelatedPrograms({ data, currentSlug }: RelatedProgramsProps) {
  const filtered = data.filter((p) => p.slug !== currentSlug);

  if (filtered.length === 0) return null;

  return (
    <Section alternate>
      <Container>
        <SectionHeading heading="Explore Other Programs" />

        {/* Desktop grid */}
        <div className="hidden gap-x-6 gap-y-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((program, i) => (
            <DesktopCard key={program.slug} program={program} index={i} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="sm:hidden">
          <MobileCarousel items={filtered} />
        </div>
      </Container>
    </Section>
  );
}