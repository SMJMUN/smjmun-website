"use client";

import { Section } from "../shared/Section";
import { Container } from "../shared/Container";
import { Reveal } from "../shared/Reveal";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import type { StatItem } from "../types";

/** Individual stat with animated counter */
function StatCounter({ item }: { item: StatItem }) {
  const [ref, display] = useAnimatedCounter({
    end: item.value,
    suffix: item.suffix || "",
    duration: 2200,
  });

  return (
    <div className="text-center">
      <span
        ref={ref as React.Ref<HTMLSpanElement>}
        className="block font-[family-name:var(--font-sora)] text-2xl font-bold text-[#BB8B57] md:text-3xl lg:text-4xl"
      >
        {display}
      </span>
      <span className="mt-2 block font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-[0.2em] text-[#8B8B8B]">
        {item.label}
      </span>
    </div>
  );
}

interface StatsProps {
  data: StatItem[];
}

export function Stats({ data }: StatsProps) {
  return (
    <Section alternate>
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-4">
            {data.map((item, i) => (
              <StatCounter key={i} item={item} />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
