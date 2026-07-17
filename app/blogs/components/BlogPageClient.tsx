"use client";

import { useState } from "react";
import type { Blog } from "@/lib/sanity/blog/types";
import BlogHero from "./BlogHero";
import ArticleGrid from "./ArticleGrid";
import NewsletterCTA from "./NewsletterCTA";

interface BlogPageClientProps {
  posts: Blog[];
  featuredPost: Blog | undefined;
}

export default function BlogPageClient({
  posts,
  featuredPost,
}: BlogPageClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      {/* Section 1: Editorial Hero — owns the search bar */}
      <BlogHero
        featuredPost={featuredPost}
        searchValue={searchQuery}
        onSearch={(q) => {
          setSearchQuery(q);
          // Scroll to article grid when user types in the hero search
          if (q.length === 1) {
            document
              .getElementById("article-listing")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
      />

      {/* Sections 2 + 3 + 4: Filters + Grid + Sidebar */}
      <div id="article-listing">
        <ArticleGrid
          posts={posts}
          featuredId={featuredPost?._id}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Section 5: Newsletter */}
      <NewsletterCTA />
    </>
  );
}
