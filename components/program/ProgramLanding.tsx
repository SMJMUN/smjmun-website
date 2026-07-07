"use client";

import { HeroVideo } from "./hero/HeroVideo";
import { EditorialIntro } from "./intro/EditorialIntro";
import { EditorialSection } from "./editorial/EditorialSection";
import { Timeline } from "./timeline/Timeline";
import { Benefits } from "./benefits/Benefits";
import { Stats } from "./stats/Stats";
import { Gallery } from "./gallery/Gallery";
import { Testimonials } from "./testimonials/Testimonials";
import { FAQ } from "./faq/FAQ";
import { RelatedPrograms } from "./related/RelatedPrograms";
import { CTA } from "./cta/CTA";
import type { ProgramData } from "./types";

interface ProgramLandingProps {
  data: ProgramData;
}

/**
 * ProgramLanding — the single entry point for all program pages.
 *
 * Receives a data object and conditionally renders each section.
 * Adding a new program requires only creating a new data file,
 * never duplicating JSX.
 */
export function ProgramLanding({ data }: ProgramLandingProps) {
  // Use hero image as the fixed parallax background for editorial sections
  const bgImage = data.hero.imageSrc;

  return (
    <main className="bg-[#0B0B0B] text-white">
      {/* Hero is always required */}
      <HeroVideo data={data.hero} />

      {/* Editorial intro */}
      {data.intro && <EditorialIntro data={data.intro} />}

      {/* ─── Editorial sections with fixed parallax background ─── */}
      {data.sections && data.sections.length > 0 && (
        
        <div
          className="relative"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          {/* Dark tint over the fixed image */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-black/70"
          />

          {/* Sections sit on top — their bg is semi-transparent */}
          <div className="relative z-10">
            {data.sections.map((section, i) => (
              <EditorialSection key={i} data={section} index={i} />
            ))}
          </div>
        </div>
      )}
      {/* ──────────────────────────────────────────────────────── */}

      {data.timeline && <Timeline data={data.timeline} />}

      {/* {data.benefits && <Benefits data={data.benefits} />} */}

      {data.stats && data.stats.length > 0 && <Stats data={data.stats} />}

      {data.gallery && <Gallery data={data.gallery} />}

      {/* {data.testimonials && <Testimonials data={data.testimonials} />} */}

      {data.faq && <FAQ data={data.faq} />}

      {data.related && data.related.length > 0 && (
        <RelatedPrograms data={data.related} currentSlug={data.slug} />
      )}

      {data.cta && <CTA data={data.cta} />}
    </main>
  );
}
