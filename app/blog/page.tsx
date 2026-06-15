import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import { sanityFetch } from "@/lib/sanity/client";
import { BLOG_POSTS_QUERY } from "@/lib/sanity/queries";
import type { Blog } from "@/lib/sanity/types";

import BlogPageClient from "./components/BlogPageClient";

export const metadata: Metadata = {
  title: "SMJ MUN Journal — Insights & Perspectives",
  description:
    "Insights, stories, and perspectives from India's premier Model United Nations platform. Explore articles on diplomacy, leadership, and global affairs.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "SMJ MUN Journal — Insights & Perspectives",
    description:
      "Insights, stories, and perspectives on diplomacy, leadership, and global affairs.",
    type: "website",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMJ MUN Journal",
    description: "Insights, stories, and perspectives on diplomacy & leadership.",
  },
};

export default async function BlogPage() {
  const posts = await sanityFetch<Blog[]>({ query: BLOG_POSTS_QUERY });

  const featuredPost = posts.find((p) => p.featured) ?? posts[0];

  return (
    <>
      <main>
        <BlogPageClient posts={posts} featuredPost={featuredPost} />
      </main>
      <Footer />
    </>
  );
}
