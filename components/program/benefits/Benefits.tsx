"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Section } from "../shared/Section";
import { Container } from "../shared/Container";
import { SectionHeading } from "../shared/SectionHeading";
import { Reveal } from "../shared/Reveal";
import type { BenefitsData } from "../types";
import {
  Award, BookOpen, Globe, GraduationCap, Handshake,
  Lightbulb, Mic2, Shield, Star, Target, TrendingUp, Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Award, BookOpen, Globe, GraduationCap, Handshake,
  Lightbulb, Mic2, Shield, Star, Target, TrendingUp, Users,
};

interface BenefitsProps {
  data: BenefitsData;
}

// ─── Desktop Card ────────────────────────────────────────────────────────────

function DesktopCard({
  item,
  index,
}: {
  item: BenefitsData["items"][number];
  index: number;
}) {
  const Icon = iconMap[item.icon] || Star;
  const num = String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={index * 0.06}>
      <div
        className="
          group relative overflow-hidden
          border border-white/[0.07]
          bg-white/[0.02]
          p-8
          transition-all duration-500 ease-out
          hover:-translate-y-2
          hover:border-[#BB8B57]/60
          hover:bg-white/[0.04]
          hover:shadow-[0_0_40px_-8px_rgba(187,139,87,0.18)]
        "
      >
        {/* Background number — the signature element */}
        <span
          className="
            pointer-events-none absolute
            -bottom-4 -right-2
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

        {/* Icon */}
        <div className="relative mb-6">
          <div
            className="
              inline-flex h-10 w-10 items-center justify-center
              border border-white/10
              bg-white/[0.04]
              transition-all duration-500
              group-hover:border-[#BB8B57]/40
              group-hover:shadow-[0_0_20px_-4px_rgba(187,139,87,0.35)]
            "
          >
            <Icon
              className="h-4 w-4 text-[#BB8B57] transition-transform duration-500 group-hover:scale-110"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Content */}
        <h4
          className="
            relative mb-3
            font-[family-name:var(--font-playfair)]
            text-base font-bold text-white
            transition-colors duration-500
            group-hover:text-[#BB8B57]
          "
        >
          {item.title}
        </h4>

        <p className="relative font-[family-name:var(--font-inter)] text-[13px] leading-relaxed text-[#C8C8C8]">
          {item.description}
        </p>
      </div>
    </Reveal>
  );
}

// ─── Mobile Carousel ─────────────────────────────────────────────────────────

function MobileCarousel({ items }: { items: BenefitsData["items"] }) {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const goTo = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(items.length - 1, idx));
      setActive(clamped);
    },
    [items.length]
  );

  // Sync scroll position when active changes
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[active] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
  }, [active]);

  // Touch handlers
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
      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-hidden px-6 pb-2"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {items.map((item, i) => {
          const Icon = iconMap[item.icon] || Star;
          const num = String(i + 1).padStart(2, "0");
          const isActive = i === active;

          return (
            <div
              key={i}
              onClick={() => goTo(i)}
              className="
                relative flex-shrink-0 w-[calc(100vw-48px)]
                overflow-hidden
                border p-7
                transition-all duration-400
              "
              style={{
                borderColor: isActive
                  ? "rgba(187,139,87,0.6)"
                  : "rgba(255,255,255,0.07)",
                background: isActive
                  ? "rgba(187,139,87,0.05)"
                  : "rgba(255,255,255,0.02)",
              }}
            >
              {/* Background number */}
              <span
                className="
                  pointer-events-none absolute -bottom-3 -right-1
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

              {/* Icon */}
              <div
                className="
                  mb-5 inline-flex h-10 w-10 items-center justify-center
                  border border-white/10 bg-white/[0.04]
                "
                style={{
                  borderColor: isActive
                    ? "rgba(187,139,87,0.4)"
                    : "rgba(255,255,255,0.10)",
                  boxShadow: isActive
                    ? "0 0 20px -4px rgba(187,139,87,0.35)"
                    : "none",
                  transition: "border-color 0.4s, box-shadow 0.4s",
                }}
              >
                <Icon
                  className="h-4 w-4 text-[#BB8B57]"
                  strokeWidth={1.5}
                />
              </div>

              <h4
                className="mb-3 font-[family-name:var(--font-playfair)] text-base font-bold transition-colors duration-400"
                style={{ color: isActive ? "#BB8B57" : "#fff" }}
              >
                {item.title}
              </h4>

              <p className="relative font-[family-name:var(--font-inter)] text-[13px] leading-relaxed text-[#C8C8C8]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="mt-6 flex items-center justify-center gap-2 px-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to card ${i + 1}`}
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

// ─── Main Export ─────────────────────────────────────────────────────────────

export function Benefits({ data }: BenefitsProps) {
  return (
    <Section>
      <Container>
        <SectionHeading
          label={data.label}
          heading={data.title}
          subtitle={data.subtitle}
        />

        {/* Desktop grid — hidden on mobile */}
        <div className="hidden overflow-hidden gap-x-6 gap-y-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, i) => (
            <DesktopCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Mobile carousel — hidden on sm+ */}
        <div className="sm:hidden">
          <MobileCarousel items={data.items} />
        </div>
      </Container>
    </Section>
  );
}