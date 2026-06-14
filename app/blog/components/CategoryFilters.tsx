"use client";

import { useCallback } from "react";

const CATEGORIES = [
  "All",
  "Conference Updates",
  "Student Leadership",
  "International Affairs",
  "MUN Resources",
  "Partnerships",
];

interface CategoryFiltersProps {
  active: string;
  onChange: (category: string) => void;
  availableTags: string[];
}

export default function CategoryFilters({
  active,
  onChange,
  availableTags,
}: CategoryFiltersProps) {
  // Show only categories that exist in the current posts, plus "All"
  const visibleCategories = CATEGORIES.filter(
    (cat) => cat === "All" || availableTags.includes(cat)
  );

  // Fallback: if no standard categories match, show All + unique tags
  const displayCategories =
    visibleCategories.length > 1
      ? visibleCategories
      : ["All", ...Array.from(new Set(availableTags)).slice(0, 5)];

  const handleClick = useCallback(
    (category: string) => {
      onChange(category);
    },
    [onChange]
  );

  return (
    <nav
      aria-label="Browse by category"
      className="w-full"
    >
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
        {displayCategories.map((category) => {
          const isActive = active === category;
          return (
            <button
              key={category}
              onClick={() => handleClick(category)}
              aria-pressed={isActive}
              className={`
                flex-shrink-0 font-sans text-[11px] font-500 tracking-[0.14em] uppercase 
                px-5 py-2.5 border transition-all duration-300 cursor-pointer whitespace-nowrap
                ${
                  isActive
                    ? "bg-navy text-white border-navy"
                    : "bg-transparent text-navy/55 border-navy/15 hover:border-navy/40 hover:text-navy"
                }
              `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
