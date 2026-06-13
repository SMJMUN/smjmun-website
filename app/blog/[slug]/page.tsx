import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PortableTextRenderer from "@/app/components/PortableTextRenderer";
import { sanityFetch } from "@/lib/sanity/client";
import {
  BLOG_POST_BY_SLUG_QUERY,
  BLOG_POSTS_QUERY,
} from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import type { Blog } from "@/lib/sanity/types";

// ─── Static Params ─────────────────────────────────────────────────
export async function generateStaticParams() {
  const posts = await sanityFetch<Blog[]>({
    query: BLOG_POSTS_QUERY,
    revalidate: 3600,
  });
  return posts.map((p) => ({ slug: p.slug.current }));
}

// ─── Dynamic Metadata ──────────────────────────────────────────────
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
    return { title: "Post Not Found — SMJ MUN" };
  }

  const title = post.seoTitle || `${post.title} — SMJ MUN Blog`;
  const description =
    post.seoDescription ||
    post.excerpt ||
    `Read "${post.title}" on the SMJ MUN blog.`;
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

// ─── Helpers ───────────────────────────────────────────────────────
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ─── Page ──────────────────────────────────────────────────────────
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await sanityFetch<Blog | null>({
    query: BLOG_POST_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!post) notFound();

  const coverUrl = post.coverImage
    ? urlFor(post.coverImage).width(1400).height(700).quality(85).url()
    : null;

  return (
    <>
      <Navbar />
      <main>
        {/* ── Header ──────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: "#042147",
            padding: "180px 0 80px",
          }}
        >
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              padding: "0 8vw",
            }}
          >
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginBottom: "24px",
                }}
              >
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-body), system-ui, sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#bb8b57",
                      border: "1px solid rgba(187,139,87,0.3)",
                      padding: "4px 12px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                marginBottom: "24px",
              }}
            >
              {post.title}
            </h1>

            {/* Meta */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              {post.author && (
                <span
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {post.author}
                </span>
              )}
              {post.author && (
                <span
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    backgroundColor: "#bb8b57",
                    display: "inline-block",
                  }}
                />
              )}
              <span
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {formatDate(post.publishedAt)}
              </span>
            </div>
          </div>
        </section>

        {/* ── Cover Image ─────────────────────────────────────── */}
        {coverUrl && (
          <section
            style={{
              backgroundColor: "#ffffff",
              padding: "0",
            }}
          >
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                marginTop: "-40px",
                position: "relative",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  aspectRatio: "2 / 1",
                  overflow: "hidden",
                  position: "relative",
                  margin: "0 8vw",
                }}
              >
                <Image
                  src={coverUrl}
                  alt={post.title}
                  fill
                  priority
                    unoptimized
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </section>
        )}

        {/* ── Body ────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: "#ffffff",
            padding: "80px 0 120px",
          }}
        >
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              padding: "0 8vw",
            }}
          >
            {post.body && post.body.length > 0 ? (
              <PortableTextRenderer value={post.body} />
            ) : (
              <p
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "#042147",
                  opacity: 0.6,
                  fontStyle: "italic",
                }}
              >
                This article is being prepared. Check back soon.
              </p>
            )}
          </div>
        </section>

        {/* ── Back Link ───────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: "#f8f8f8",
            padding: "60px 0",
          }}
        >
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              padding: "0 8vw",
            }}
          >
            <Link
              href="/blog"
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#042147",
                opacity: 0.5,
                textDecoration: "none",
                transition: "opacity 0.3s ease",
              }}
            >
              ← Back to Blog
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
