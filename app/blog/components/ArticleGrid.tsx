"use client";

import { useMemo } from "react";
import type { Blog } from "@/lib/sanity/types";
import ArticleCard from "./ArticleCard";
import BlogSidebar from "./BlogSidebar";
import CategoryFilters from "./CategoryFilters";

interface ArticleGridProps {
  posts: Blog[];
  featuredId?: string;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function ArticleGrid({
  posts,
  featuredId,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: ArticleGridProps) {

  // Collect all unique tags from posts for filter visibility
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((p) => p.tags?.forEach((t) => tags.add(t)));
    return Array.from(tags);
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    let result = posts.filter((p) => p._id !== featuredId);

    if (activeCategory !== "All") {
      result = result.filter((p) => p.tags?.includes(activeCategory));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt?.toLowerCase().includes(q) ||
          p.author?.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [posts, featuredId, activeCategory, searchQuery]);

  // Sidebar data
  const featuredPosts = useMemo(
    () => posts.filter((p) => p.featured).slice(0, 3),
    [posts]
  );
  const latestPosts = useMemo(() => posts.slice(0, 5), [posts]);

  return (
    <section className="bg-ivory" style={{ paddingTop: "72px", paddingBottom: "100px" }}>
      <div className="content-wide">
        {/* ── Section header + search ─────────────────────────────── */}
        <div className="flex flex-col gap-6 mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-label text-gold mb-2">Browse by Category</p>
            <CategoryFilters
              active={activeCategory}
              onChange={onCategoryChange}
              availableTags={allTags}
            />
          </div>
        </div>

        {/* ── Layout: Articles + Sidebar ───────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
          {/* Main Grid */}
          <div>
            {/* Grid header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-gold" />
                <h2 className="font-sans text-[10px] font-600 tracking-[0.22em] uppercase text-navy/50">
                  Latest Articles
                </h2>
              </div>
              {filteredPosts.length > 0 && (
                <span className="font-sans text-[11px] text-navy/35">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
                </span>
              )}
            </div>

            {filteredPosts.length === 0 ? (
              <div className="py-20 text-center">
                <div className="gold-rule mx-auto mb-6" />
                <p className="font-serif text-[22px] italic text-navy/40">
                  {searchQuery || activeCategory !== "All"
                    ? "No articles match your selection."
                    : "Articles coming soon."}
                </p>
                {(searchQuery || activeCategory !== "All") && (
                  <button
                    onClick={() => {
                      onSearchChange("");
                      onCategoryChange("All");
                    }}
                    className="mt-4 font-sans text-[12px] tracking-[0.1em] uppercase text-charcoal underline underline-offset-4 cursor-pointer"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-7">
                {filteredPosts.map((post) => (
                  <ArticleCard key={post._id} post={post} />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar — sticky on desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-28 self-start">
              <BlogSidebar
                featuredPosts={featuredPosts}
                latestPosts={latestPosts}
                allPosts={posts}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
