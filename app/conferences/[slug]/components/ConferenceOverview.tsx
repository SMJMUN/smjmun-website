import React from "react";
import PortableTextRenderer from "@/app/components/PortableTextRenderer";
import type { Conference } from "@/lib/sanity/types";

export default function ConferenceOverview({ conference }: { conference: Conference }) {
  if (!conference.overview || conference.overview.length === 0) return null;

  return (
    <section id="overview">
      <span className="section-label block mb-8">
        About The Conference
      </span>
      {/* Prose styled to match the dark design system */}
      <div
        className="
          prose prose-lg prose-invert max-w-none
          prose-headings:font-serif prose-headings:font-bold prose-headings:text-white
          prose-p:font-sans prose-p:text-[16px] prose-p:leading-[1.85] prose-p:text-white/80
          prose-a:text-[#BB8B57] prose-a:font-medium prose-a:no-underline hover:prose-a:underline
          prose-li:leading-[1.75] prose-li:text-white/80 prose-strong:text-white
          prose-hr:border-white/10
        "
        style={{
          '--tw-prose-body': 'rgba(255,255,255,0.62)',
          '--tw-prose-headings': '#ffffff',
          '--tw-prose-links': '#BB8B57',
          '--tw-prose-bold': '#ffffff',
          '--tw-prose-counters': 'rgba(255,255,255,0.5)',
          '--tw-prose-bullets': 'rgba(187,139,87,0.6)',
          '--tw-prose-quotes': 'rgba(255,255,255,0.5)',
          color: 'rgba(255,255,255,0.65)',
        } as React.CSSProperties}
      >
        <PortableTextRenderer value={conference.overview} />
      </div>
    </section>
  );
}
