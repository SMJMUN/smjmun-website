import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import { sanityFetch } from "@/lib/sanity/client";
import {
  BLOG_POST_BY_SLUG_QUERY,
  BLOG_POSTS_QUERY,
} from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import type { Blog } from "@/lib/sanity/types";

import ArticleHero from "./components/ArticleHero";
import ArticleCover from "./components/ArticleCover";
import ArticleContent from "./components/ArticleContent";
import AuthorCard from "./components/AuthorCard";
import RelatedArticles from "./components/RelatedArticles";

// ─── Static Params ──────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const posts = await sanityFetch<Blog[]>({
    query: BLOG_POSTS_QUERY,
    revalidate: 3600,
  });
  return posts.map((p) => ({ slug: p.slug.current }));
}

// ─── Dynamic Metadata ────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<Blog | null>({
    query: BLOG_POST_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!post) {
    return { title: "Post Not Found — SMJ MUN Journal" };
  }

  const title = post.seoTitle || `${post.title} — SMJ MUN Journal`;
  const description =
    post.seoDescription ||
    post.excerpt ||
    `Read "${post.title}" on the SMJ MUN Journal.`;
  const imageUrl = post.coverImage
    ? urlFor(post.coverImage).width(1200).height(630).url()
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `/blog/${slug}`,
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author] : undefined,
      tags: post.tags,
      ...(imageUrl && { images: [{ url: imageUrl, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(imageUrl && { images: [imageUrl] }),
    },
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Fetch current post and all posts in parallel
  const [post, allPosts] = await Promise.all([
    sanityFetch<Blog | null>({
      query: BLOG_POST_BY_SLUG_QUERY,
      params: { slug },
    }),
    sanityFetch<Blog[]>({ query: BLOG_POSTS_QUERY }),
  ]);

  if (!post) notFound();

  const coverUrl = post.coverImage
    ? urlFor(post.coverImage).width(1400).height(600).quality(85).url()
    : null;

  return (
    <>
      <main>
        {/* Section 1: Article Hero */}
        <ArticleHero post={post} />

        {/* Section 2: Cover Image */}
        {coverUrl && <ArticleCover src={coverUrl} alt={post.title} />}

        {/* Section 3: Content + Sticky TOC Sidebar */}
        <ArticleContent post={post} />

        {/* Section 4: Author Card */}
        {post.author && <AuthorCard author={post.author} />}

        {/* Section 5: Related Articles */}
        <RelatedArticles currentPost={post} allPosts={allPosts} />
      </main>
      <Footer />
    </>
  );
}
