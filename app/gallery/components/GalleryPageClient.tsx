"use client";

import { useState, useCallback } from "react";
import type { Gallery } from "@/lib/sanity/gallery/types";
import GalleryGrid from "./GalleryGrid";

interface GalleryPageClientProps {
  galleries: Gallery[];
  featuredGallery: Gallery | null;
}

function getYears(galleries: Gallery[]): string[] {
  const years = galleries
    .filter((g) => g.eventDate)
    .map((g) => new Date(g.eventDate!).getFullYear().toString());
  return Array.from(new Set(years)).sort((a, b) => Number(b) - Number(a));
}

export default function GalleryPageClient({
  galleries,
}: GalleryPageClientProps) {
  const [activeYear, setActiveYear] = useState("All");

  const years = getYears(galleries);

  const filtered =
    activeYear === "All"
      ? galleries
      : galleries.filter(
          (g) =>
            g.eventDate &&
            new Date(g.eventDate).getFullYear().toString() === activeYear
        );

  const handleYear = useCallback((year: string) => {
    setActiveYear(year);
  }, []);

  return (
    <>
      {/* Filters */}
      <div className="pt-10 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="content-wide">
          <nav aria-label="Filter galleries by year" className="w-full">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
              {["All", ...years].map((year) => {
                const isActive = activeYear === year;
                return (
                  <button
                    key={year}
                    id={`gallery-filter-${year.toLowerCase()}`}
                    onClick={() => handleYear(year)}
                    aria-pressed={isActive}
                    className={`
                      flex-shrink-0 font-sans text-[11px] font-medium tracking-[0.16em] uppercase
                      px-5 py-2.5 border transition-all duration-300 cursor-pointer whitespace-nowrap
                      ${
                        isActive
                          ? "bg-white text-navy border-white"
                          : "bg-transparent text-white/50 border-white/15 hover:border-white/40 hover:text-white"
                      }
                    `}
                  >
                    {year}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>

      {/* Grid */}
      <div className="content-wide py-16 lg:py-20">
        <GalleryGrid galleries={filtered} />
      </div>
    </>
  );
}
