import React from "react";
import PortableTextRenderer from "@/app/components/PortableTextRenderer";
import type { Conference } from "@/lib/sanity/types";

export default function ConferenceOverview({ conference }: { conference: Conference }) {
  if (!conference.overview || conference.overview.length === 0) return null;

  return (
    <section id="overview" className="bg-white">
      <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-gold block mb-8">
        About The Conference
      </span>
      {/* Use the exact same prose styles as the blog article content for consistency */}
      <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-navy prose-p:font-sans prose-p:text-[16px] prose-p:leading-[1.8] prose-p:text-navy/70 prose-a:text-charcoal prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-li:text-navy/70 prose-strong:text-navy">
        <PortableTextRenderer value={conference.overview} />
      </div>
    </section>
  );
}
