import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { sanityFetch } from "@/lib/sanity/client";
import { BLOG_POSTS_QUERY } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import type { Blog } from "@/lib/sanity/types";

export const metadata: Metadata = {
  title: "Blog — SMJ MUN",
  description:
    "Insights, stories, and perspectives from India's premier Model United Nations platform. Explore articles on diplomacy, leadership, and global affairs.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — SMJ MUN",
    description:
      "Insights, stories, and perspectives on diplomacy, leadership, and global affairs.",
    type: "website",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — SMJ MUN",
    description:
      "Insights, stories, and perspectives on diplomacy & leadership.",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await sanityFetch<Blog[]>({ query: BLOG_POSTS_QUERY });

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => p._id !== featured?._id);

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section
          style={{
            backgroundColor: "#042147",
            padding: "180px 0 100px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 8vw" }}>
            <span
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#bb8b57",
                display: "block",
                marginBottom: "20px",
              }}
            >
              Our Blog
            </span>
            <h1
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                marginBottom: "20px",
              }}
            >
              Insights &amp; Perspectives
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "18px",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.6)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Stories, analysis, and reflections from the world of diplomacy and
              leadership.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section
          style={{
            backgroundColor: "#f8f8f8",
            padding: "100px 0 120px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 8vw",
            }}
          >
            {posts.length === 0 ? (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <div
                  style={{
                    width: "60px",
                    height: "1px",
                    backgroundColor: "#bb8b57",
                    margin: "0 auto 32px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-heading), Georgia, serif",
                    fontSize: "24px",
                    fontStyle: "italic",
                    color: "#042147",
                    opacity: 0.5,
                  }}
                >
                  Articles coming soon.
                </p>
              </div>
            ) : (
              <>
                {/* Featured Post */}
                {featured && (
                  <Link
                    href={`/blog/${featured.slug.current}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <article
                      className="blog-featured-card"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "0",
                        backgroundColor: "#ffffff",
                        marginBottom: "60px",
                        overflow: "hidden",
                        transition: "box-shadow 0.4s ease",
                      }}
                    >
                      <div
                        style={{
                          aspectRatio: "4 / 3",
                          overflow: "hidden",
                          position: "relative",
                          backgroundColor: "#042147",
                        }}
                      >
                        {featured.coverImage && (
                          <Image
                            src={urlFor(featured.coverImage)
                              .width(800)
                              .height(600)
                              .quality(80)
                              .url()}
                            alt={featured.title}
                            fill
                            unoptimized
                            sizes="50vw"
                            style={{
                              objectFit: "cover",
                              transition: "transform 0.6s ease",
                            }}
                          />
                        )}
                      </div>
                      <div
                        style={{
                          padding: "clamp(32px, 4vw, 56px)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-body), system-ui, sans-serif",
                            fontSize: "11px",
                            fontWeight: 600,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            color: "#bb8b57",
                            marginBottom: "16px",
                          }}
                        >
                          Featured
                        </span>
                        <h2
                          style={{
                            fontFamily: "var(--font-heading), Georgia, serif",
                            fontSize: "clamp(24px, 3vw, 34px)",
                            fontWeight: 700,
                            lineHeight: 1.2,
                            color: "#042147",
                            marginBottom: "16px",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {featured.title}
                        </h2>
                        {featured.excerpt && (
                          <p
                            style={{
                              fontFamily: "var(--font-body), system-ui, sans-serif",
                              fontSize: "15px",
                              lineHeight: 1.7,
                              color: "#042147",
                              opacity: 0.6,
                              marginBottom: "20px",
                            }}
                          >
                            {featured.excerpt}
                          </p>
                        )}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          {featured.author && (
                            <span
                              style={{
                                fontFamily: "var(--font-body), system-ui, sans-serif",
                                fontSize: "13px",
                                fontWeight: 500,
                                color: "#042147",
                                opacity: 0.5,
                              }}
                            >
                              {featured.author}
                            </span>
                          )}
                          {featured.author && (
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
                              fontSize: "13px",
                              color: "#042147",
                              opacity: 0.4,
                            }}
                          >
                            {formatDate(featured.publishedAt)}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                )}

                {/* Posts Grid */}
                {rest.length > 0 && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                      gap: "36px",
                    }}
                  >
                    {rest.map((post) => {
                      const coverUrl = post.coverImage
                        ? urlFor(post.coverImage).width(700).height(400).quality(80).url()
                        : null;
                      return (
                        <Link
                          key={post._id}
                          href={`/blog/${post.slug.current}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <article
                            className="blog-card"
                            style={{
                              backgroundColor: "#ffffff",
                              overflow: "hidden",
                              transition: "transform 0.4s ease, box-shadow 0.4s ease",
                            }}
                          >
                            <div
                              style={{
                                width: "100%",
                                aspectRatio: "16 / 9",
                                overflow: "hidden",
                                position: "relative",
                                backgroundColor: "#042147",
                              }}
                            >
                              {coverUrl && (
                                <Image
                                  src={coverUrl}
                                  alt={post.title}
                                  fill
                                  unoptimized
                                  sizes="(max-width: 768px) 100vw, 400px"
                                  style={{
                                    objectFit: "cover",
                                    transition: "transform 0.6s ease",
                                  }}
                                />
                              )}
                            </div>
                            <div
                              style={{
                                height: "1px",
                                backgroundColor: "#bb8b57",
                                opacity: 0.2,
                              }}
                            />
                            <div style={{ padding: "24px 24px 28px" }}>
                              {post.tags && post.tags.length > 0 && (
                                <span
                                  style={{
                                    fontFamily: "var(--font-body), system-ui, sans-serif",
                                    fontSize: "11px",
                                    fontWeight: 500,
                                    letterSpacing: "0.15em",
                                    textTransform: "uppercase",
                                    color: "#bb8b57",
                                    display: "block",
                                    marginBottom: "10px",
                                  }}
                                >
                                  {post.tags[0]}
                                </span>
                              )}
                              <h3
                                style={{
                                  fontFamily: "var(--font-heading), Georgia, serif",
                                  fontSize: "clamp(18px, 2vw, 22px)",
                                  fontWeight: 700,
                                  lineHeight: 1.25,
                                  color: "#042147",
                                  marginBottom: "12px",
                                  letterSpacing: "-0.01em",
                                }}
                              >
                                {post.title}
                              </h3>
                              {post.excerpt && (
                                <p
                                  style={{
                                    fontFamily: "var(--font-body), system-ui, sans-serif",
                                    fontSize: "14px",
                                    lineHeight: 1.6,
                                    color: "#042147",
                                    opacity: 0.55,
                                    marginBottom: "16px",
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                  }}
                                >
                                  {post.excerpt}
                                </p>
                              )}
                              <span
                                style={{
                                  fontFamily: "var(--font-body), system-ui, sans-serif",
                                  fontSize: "12px",
                                  color: "#042147",
                                  opacity: 0.35,
                                }}
                              >
                                {formatDate(post.publishedAt)}
                              </span>
                            </div>
                          </article>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.1);
        }
        .blog-card:hover img {
          transform: scale(1.04);
        }
        .blog-featured-card:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
        }
        .blog-featured-card:hover img {
          transform: scale(1.03);
        }
        @media (max-width: 768px) {
          .blog-featured-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
