import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import type { Blog } from "@/lib/sanity/types";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function estimateReadingTime(excerpt?: string): string {
  if (!excerpt) return "3 min read";
  const words = excerpt.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil((words * 5) / 200));
  return `${minutes} min read`;
}

interface ArticleCardProps {
  post: Blog;
  variant?: "default" | "compact";
}

export default function ArticleCard({ post, variant = "default" }: ArticleCardProps) {
  const coverUrl = post.coverImage
    ? urlFor(post.coverImage).width(800).height(500).quality(80).url()
    : null;

  const category = post.tags?.[0] ?? "Journal";
  const readTime = estimateReadingTime(post.excerpt);

  if (variant === "compact") {
    return (
      <Link
        href={`/blog/${post.slug.current}`}
        className="group flex gap-4 items-start no-underline"
        aria-label={`Read: ${post.title}`}
      >
        {/* Thumbnail */}
        <div className="flex-shrink-0 w-16 h-16 bg-navy overflow-hidden relative">
          {coverUrl ? (
            <Image
              src={coverUrl}
              alt={post.title}
              fill
              unoptimized
              sizes="64px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-navy/20" />
          )}
        </div>
        {/* Text */}
        <div className="flex-1 min-w-0">
          <p
            className="font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-1"
          >
            {category}
          </p>
          <h4
            className="font-serif text-[14px] font-bold leading-snug text-navy line-clamp-2 group-hover:text-charcoal transition-colors duration-300"
          >
            {post.title}
          </h4>
          <p className="font-sans text-[11px] text-navy/40 mt-1">
            {formatDate(post.publishedAt)}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <article className="group flex flex-col bg-white border border-navy/8 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1">
      {/* Image */}
      <Link
        href={`/blog/${post.slug.current}`}
        className="block relative overflow-hidden"
        style={{ aspectRatio: "16 / 10" }}
        tabIndex={-1}
        aria-hidden="true"
      >
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={post.title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-navy to-navy/70 flex items-center justify-center">
            <span className="font-serif text-gold/40 text-4xl italic">SMJ</span>
          </div>
        )}

        {/* Gold rule at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold/0 group-hover:bg-gold/60 transition-all duration-500" />
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 lg:p-7">
        {/* Category + reading time */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-sans text-[10px] font-600 tracking-[0.18em] uppercase text-gold">
            {category}
          </span>
          <span className="w-1 h-1 rounded-full bg-gold/40 inline-block" />
          <span className="font-sans text-[10px] text-navy/35 tracking-wide">
            {readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="flex-1 font-serif text-[19px] lg:text-[21px] font-bold leading-[1.25] tracking-[-0.01em] text-navy mb-3 group-hover:text-charcoal transition-colors duration-300">
          <Link href={`/blog/${post.slug.current}`} className="no-underline">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="font-sans text-[14px] leading-[1.7] text-navy/55 mb-5 line-clamp-2">
            {post.excerpt}
          </p>
        )}

        {/* Footer: author + date */}
        <div className="flex items-center justify-between pt-4 border-t border-navy/8">
          <div className="flex items-center gap-2">
            {post.author && (
              <span className="font-sans text-[12px] font-medium text-navy/60">
                {post.author}
              </span>
            )}
          </div>
          <span className="font-sans text-[11px] text-navy/35">
            {formatDate(post.publishedAt)}
          </span>
        </div>

        {/* Read more link */}
        <Link
          href={`/blog/${post.slug.current}`}
          className="mt-4 inline-flex items-center gap-2 font-sans text-[11px] font-500 tracking-[0.12em] uppercase text-charcoal no-underline group/link"
        >
          <span>Read Article</span>
          <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
