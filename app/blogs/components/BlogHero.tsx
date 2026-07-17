import type { Blog } from "@/lib/sanity/blog/types";
import FeaturedArticle from "./FeaturedArticle";

interface BlogHeroProps {
  featuredPost: Blog | undefined;
  searchValue: string;
  onSearch: (query: string) => void;
}

export default function BlogHero({ featuredPost, searchValue, onSearch }: BlogHeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#18171C",
        paddingTop: "clamp(120px, 14vw, 180px)",
        paddingBottom: "clamp(60px, 7vw, 100px)",
      }}
    >
      {/* Subtle background texture — editorial parchment feel */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 1px,
              rgba(187,139,87,0.4) 1px,
              rgba(187,139,87,0.4) 2px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="content-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-start">
          {/* ── Left Column: Journal Identity ─────────────────────── */}
          <div className="flex flex-col justify-center lg:py-4">
            {/* Overline label */}
            <p className="text-label text-gold mb-5">SMJMUN Publication</p>

            {/* Thin gold rule */}
            <div className="gold-rule mb-6" />

            {/* Journal title */}
            <h1
              className="font-serif text-white font-bold leading-[0.97] tracking-[-0.025em] mb-6"
              style={{ fontSize: "clamp(44px, 6.5vw, 82px)" }}
            >
              SMJMUN
              <br />
              <em className="not-italic text-gold/85">Journal</em>
            </h1>

            {/* Subtitle */}
            <p
              className="font-sans text-white/55 leading-[1.65] mb-10"
              style={{ fontSize: "clamp(15px, 1.5vw, 17px)", maxWidth: "400px" }}
            >
              Insights, diplomacy, leadership, and global citizenship from
              India&apos;s premier Model United Nations community.
            </p>

            {/* Search bar */}
            <div
              className="relative"
              style={{ maxWidth: "380px" }}
              role="search"
            >
              <label htmlFor="blog-hero-search" className="sr-only">
                Search articles
              </label>
              <input
                id="blog-hero-search"
                type="search"
                value={searchValue}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search articles…"
                className="
                  w-full font-sans text-[14px] text-white
                  bg-white/8 border border-white/15
                  px-5 py-3.5 pr-12
                  placeholder:text-white/30
                  focus:outline-none focus:border-gold/50
                  transition-colors duration-300
                "
              />
              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/35 pointer-events-none"
                aria-hidden="true"
              >
                ⌕
              </span>
            </div>

            {/* Bottom meta line */}
            <div className="flex items-center gap-4 mt-8">
              <div className="w-5 h-[1px] bg-gold/40" />
              <p className="font-sans text-[11px] tracking-[0.12em] text-white/30 uppercase">
                Est. 2024 · Diplomacy &amp; Leadership
              </p>
            </div>
          </div>

          {/* ── Right Column: Featured Article Card ───────────────── */}
          <div className="w-full">
            {featuredPost ? (
              <FeaturedArticle post={featuredPost} />
            ) : (
              <div
                className="w-full bg-white/5 border border-white/10 flex items-center justify-center"
                style={{ minHeight: "400px" }}
              >
                <p className="font-serif text-[20px] italic text-white/20">
                  Coming soon
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
