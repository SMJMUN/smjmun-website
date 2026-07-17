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

interface FeaturedArticleProps {
  post: Blog;
}

export default function FeaturedArticle({ post }: FeaturedArticleProps) {
  const coverUrl = post.coverImage
    ? urlFor(post.coverImage).width(1000).height(680).quality(85).url()
    : null;

  const category = post.tags?.[0] ?? "Featured Story";

  return (
    <Link
      href={`/blogs/${post.slug.current}`}
      className="group block border-[0.5px] border-gold rounded-sm p-2 no-underline h-full"
      aria-label={`Featured story: ${post.title}`}
    >
      <article className="relative rounded-sm h-full min-h-[420px] lg:min-h-[480px] overflow-hidden bg-navy">
        {/* Cover Image */}
        {coverUrl && (
          <Image
            src={coverUrl}
            alt={post.title}
            fill
            priority
            unoptimized
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          />
        )}

        {/* Gradient overlay — editorial dark fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(4,33,71,0.97) 0%, rgba(4,33,71,0.6) 45%, rgba(4,33,71,0.1) 100%)",
          }}
        />

        {/* "Featured Story" pill top-left */}
        <div className="absolute top-5 left-5">
          <span className="font-sans text-[10px] font-600 tracking-[0.2em] uppercase text-gold bg-navy/60 backdrop-blur-sm border border-gold/30 px-3 py-1.5">
            Featured Story
          </span>
        </div>

        {/* Content — sits at bottom */}
        <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
          {/* Category */}
          <p className="font-sans text-[10px] font-600 tracking-[0.18em] uppercase text-gold mb-3">
            {category}
          </p>

          {/* Title */}
          <h2
            className="font-serif text-white font-bold leading-[1.15] tracking-[-0.015em] mb-3 transition-colors duration-300 group-hover:text-gold/90"
            style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
          >
            {post.title}
          </h2>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="font-sans text-[13px] leading-[1.65] text-white/65 mb-4 line-clamp-2">
              {post.excerpt}
            </p>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {post.author && (
                <span className="font-sans text-[12px] text-white/55">
                  {post.author}
                </span>
              )}
              {post.author && (
                <span className="w-[3px] h-[3px] rounded-full bg-gold/60 inline-block" />
              )}
              <span className="font-sans text-[12px] text-white/40">
                {formatDate(post.publishedAt)}
              </span>
            </div>

            <span className="font-sans text-[11px] font-medium tracking-[0.1em] uppercase text-gold flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
              Read Article
              <span className="inline-block">→</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}


