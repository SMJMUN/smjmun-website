"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import type { GalleryImage } from "@/lib/sanity/types";
import CategoryFilters from "./CategoryFilters";

const GalleryMasonry = dynamic(
  () => import("@/components/gallery/GalleryMasonry"),
  { ssr: false }
);

interface PhotoMasonryProps {
  images: GalleryImage[];
}

export default function PhotoMasonry({ images }: PhotoMasonryProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategory = useCallback((cat: string) => {
    setActiveCategory(cat);
  }, []);

  return (
    <section
      id="gallery-photographs"
      className="section-padding-sm"
      style={{ backgroundColor: "#ffffff" }}
      aria-labelledby="photo-masonry-heading"
    >
      <div className="content-wide">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-label text-gold mb-5">Photographs</p>
          <h2
            id="photo-masonry-heading"
            className="text-heading text-navy"
          >
            The Collection
          </h2>
          <div className="gold-rule mx-auto mt-6" aria-hidden="true" />
        </div>

        {/* Filters */}
        <div className="mb-8 pb-6" style={{ borderBottom: "1px solid rgba(4,33,71,0.06)" }}>
          <CategoryFilters
            images={images}
            active={activeCategory}
            onChange={handleCategory}
          />
        </div>

        {/* Masonry */}
        <GalleryMasonry images={images} activeCategory={activeCategory} />
      </div>
    </section>
  );
}
