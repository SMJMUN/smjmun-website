"use client";

import { useCallback } from "react";
import type { GalleryImage } from "@/lib/sanity/types";
import { GALLERY_CATEGORY_LABELS, type GalleryImageCategory } from "@/lib/sanity/types";

interface CategoryFiltersProps {
  images: GalleryImage[];
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryFilters({
  images,
  active,
  onChange,
}: CategoryFiltersProps) {
  // Extract unique categories from the actual image data — never hardcoded
  const categories = Array.from(
    new Set(
      images
        .map((img) => img.category)
        .filter((cat): cat is GalleryImageCategory => Boolean(cat))
    )
  );

  const displayCategories = [
    "All",
    ...categories.map((cat) => GALLERY_CATEGORY_LABELS[cat] ?? cat),
  ];

  const handleClick = useCallback(
    (category: string) => {
      onChange(category);
    },
    [onChange]
  );

  if (displayCategories.length <= 1) return null;

  return (
    <nav aria-label="Filter photographs by category" className="w-full">
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
        {displayCategories.map((category) => {
          const isActive = active === category;
          return (
            <button
              key={category}
              id={`collection-filter-${category.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => handleClick(category)}
              aria-pressed={isActive}
              className={`
                flex-shrink-0 font-sans text-[11px] font-medium tracking-[0.16em] uppercase
                px-5 py-2.5 border transition-all duration-300 cursor-pointer whitespace-nowrap
                ${
                  isActive
                    ? "bg-navy text-white border-navy"
                    : "bg-transparent text-navy/50 border-navy/15 hover:border-navy/40 hover:text-navy"
                }
              `}
            >
              {category}
              {isActive && category !== "All" && (
                <span className="ml-2 font-sans text-[9px] tracking-normal normal-case text-white/50">
                  (
                  {
                    images.filter(
                      (img) =>
                        img.category &&
                        (GALLERY_CATEGORY_LABELS[img.category] === category ||
                          img.category === category)
                    ).length
                  }
                  )
                </span>
              )}
            </button>
          );
        })}

        {/* Total count */}
        <span className="ml-auto flex-shrink-0 font-sans text-[11px] tracking-[0.08em] text-navy/35 whitespace-nowrap pl-4">
          {active === "All"
            ? images.length
            : images.filter(
                (img) =>
                  img.category &&
                  (GALLERY_CATEGORY_LABELS[img.category] === active ||
                    img.category === active)
              ).length}{" "}
          photos
        </span>
      </div>
    </nav>
  );
}
