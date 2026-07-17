import type { Blog } from "@/lib/sanity/blog/types";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function estimateReadingTime(body?: unknown[]): string {
  if (!body || body.length === 0) return "3 min read";
  // Approximate word count from block count
  const words = body.length * 60;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

interface ArticleHeroProps {
  post: Blog;
}

export default function ArticleHero({ post }: ArticleHeroProps) {
  const category = post.tags?.[0] ?? "Journal";
  const readTime = estimateReadingTime(post.body);

  return (
    <header
      className="relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-navy)",
        paddingTop: "clamp(130px, 14vw, 190px)",
        paddingBottom: "clamp(56px, 6vw, 88px)",
      }}
    >
      {/* Subtle vertical rule grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 79px,
            rgba(187,139,87,0.8) 79px,
            rgba(187,139,87,0.8) 80px
          )`,
        }}
      />

      <div className="relative z-10" style={{ maxWidth: "860px", margin: "0 auto", padding: "0 clamp(24px, 8vw, 80px)" }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 font-sans text-[11px] tracking-[0.1em] uppercase text-white/30 list-none">
            <li>
              <a href="/blogs" className="hover:text-gold/70 transition-colors duration-200 no-underline">
                Blog
              </a>
            </li>
            <li aria-hidden="true" className="text-white/20">›</li>
            <li className="text-white/40 truncate max-w-[200px]" aria-current="page">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Category tag */}
        <div className="mb-5">
          <span
            className="inline-block font-sans text-[10px] font-600 tracking-[0.22em] uppercase text-gold border border-gold/30 px-3 py-1.5"
          >
            {category}
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-serif text-white font-bold leading-[1.1] tracking-[-0.025em] mb-7"
          style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}
        >
          {post.title}
        </h1>

        {/* Excerpt / deck */}
        {post.excerpt && (
          <p
            className="font-sans text-white/55 leading-[1.7] mb-8"
            style={{ fontSize: "clamp(15px, 1.5vw, 18px)", maxWidth: "680px" }}
          >
            {post.excerpt}
          </p>
        )}

        {/* Thin gold rule */}
        <div className="gold-rule mb-7" />

        {/* Meta row — author · date · reading time */}
        <div className="flex items-center flex-wrap gap-x-5 gap-y-2">
          {post.author && (
            <>
              {/* Author avatar placeholder + name */}
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="font-serif text-[12px] font-bold text-gold">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <span className="font-sans text-[13px] font-medium text-white/70">
                  {post.author}
                </span>
              </div>

              {/* Dot separator */}
              <span className="w-[3px] h-[3px] rounded-full bg-gold/40 inline-block" aria-hidden="true" />
            </>
          )}

          {/* Date */}
          <time
            dateTime={post.publishedAt}
            className="font-sans text-[12px] text-white/40"
          >
            {formatDate(post.publishedAt)}
          </time>

          <span className="w-[3px] h-[3px] rounded-full bg-gold/40 inline-block" aria-hidden="true" />

          {/* Reading time */}
          <span className="font-sans text-[12px] text-white/40">
            {readTime}
          </span>
        </div>
      </div>
    </header>
  );
}

