import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import type { Blog } from "@/lib/sanity/blog/types";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface RelatedArticlesProps {
  currentPost: Blog;
  allPosts: Blog[];
}

function getRelatedPosts(current: Blog, all: Blog[]): Blog[] {
  const others = all.filter((p) => p._id !== current._id);

  if (current.tags && current.tags.length > 0) {
    // Score each post by number of shared tags
    const scored = others
      .map((p) => ({
        post: p,
        score: (p.tags ?? []).filter((t) => current.tags!.includes(t)).length,
      }))
      .sort((a, b) => b.score - a.score);

    const withShared = scored.filter((s) => s.score > 0).map((s) => s.post);
    if (withShared.length >= 3) return withShared.slice(0, 3);

    // Pad with latest posts if not enough matches
    const padded = [
      ...withShared,
      ...others
        .filter((p) => !withShared.find((w) => w._id === p._id))
        .slice(0, 3 - withShared.length),
    ];
    return padded.slice(0, 3);
  }

  return others.slice(0, 3);
}

export default function RelatedArticles({
  currentPost,
  allPosts,
}: RelatedArticlesProps) {
  const related = getRelatedPosts(currentPost, allPosts);

  if (related.length === 0) return null;

  return (
    <section
      className="bg-white border-t border-navy/8"
      style={{
        paddingTop: "clamp(56px, 6vw, 88px)",
        paddingBottom: "clamp(72px, 8vw, 112px)",
      }}
    >
      <div className="content-wide">
        {/* Section header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-gold" />
            <h2 className="font-sans text-[10px] font-600 tracking-[0.22em] uppercase text-navy/45">
              Continue Reading
            </h2>
          </div>
          <Link
            href="/blogs"
            className="font-sans text-[11px] font-500 tracking-[0.12em] uppercase text-navy/35 no-underline hover:text-navy transition-colors duration-300 flex items-center gap-1.5"
          >
            View All
            <span className="inline-block transition-transform duration-300">→</span>
          </Link>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {related.map((post) => {
            const coverUrl = post.coverImage
              ? urlFor(post.coverImage).width(600).height(380).quality(80).url()
              : null;
            const category = post.tags?.[0] ?? "Journal";

            return (
              <article
                key={post._id}
                className="group flex flex-col   border-navy/8 hover:border-gold/35 transition-all duration-500 hover:-translate-y-1 bg-white"
              >
                {/* Image */}
                <Link
                  href={`/blogs/${post.slug.current}`}
                  className="block relative overflow-hidden rounded-lg"
                  style={{ aspectRatio: "3 / 2" }}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  {coverUrl ? (
                    <Image
                      src={coverUrl}
                      alt={post.title}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-navy to-navy/70 flex items-center justify-center">
                      <span className="font-serif text-gold/30 text-3xl italic">SMJ</span>
                    </div>
                  )}
                </Link>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <p className="font-sans text-[9px] font-600 tracking-[0.18em] uppercase text-gold mb-2">
                    {category}
                  </p>
                  <h3 className="font-serif text-[16px] font-bold leading-[1.3] text-navy mb-2 line-clamp-2 group-hover:text-charcoal transition-colors duration-300">
                    <Link href={`/blogs/${post.slug.current}`} className="no-underline">
                      {post.title}
                    </Link>
                  </h3>
                  <div className="mt-auto pt-3 flex items-center justify-between">
                    <time
                      dateTime={post.publishedAt}
                      className="font-sans text-[11px] text-navy/35"
                    >
                      {formatDate(post.publishedAt)}
                    </time>
                    <Link
                      href={`/blogs/${post.slug.current}`}
                      className="font-sans text-[10px] font-500 tracking-[0.12em] uppercase text-charcoal no-underline flex items-center gap-1 group/link"
                    >
                      Read
                      <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

