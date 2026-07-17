import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import { BlogService } from "@/lib/sanity/blog/service";

import BlogPageClient from "./components/BlogPageClient";

export const metadata: Metadata = {
  title: "Journal & Insights | SMJMUN",
  description:
    "Insights, stories, and perspectives from India's premier Model United Nations platform. Explore articles on diplomacy, leadership, and global affairs.",
  alternates: { canonical: "https://smjmun.com/blogs" },
  openGraph: {
    title: "Journal & Insights | SMJMUN",
    description:
      "Insights, stories, and perspectives on diplomacy, leadership, and global affairs.",
    type: "website",
    url: "https://smjmun.com/blogs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal & Insights | SMJMUN",
    description: "Insights, stories, and perspectives on diplomacy, leadership, and global affairs.",
  },
};

import { JsonLd } from "@/components/seo/JsonLd";

export default async function BlogPage() {
  const posts = await BlogService.getBlogPosts();

  const featuredPost = posts.find((p) => p.featured) ?? posts[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://smjmun.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Journal & Insights",
        item: "https://smjmun.com/blogs",
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <main>
        <BlogPageClient posts={posts} featuredPost={featuredPost} />
      </main>
      <Footer />
    </>
  );
}



