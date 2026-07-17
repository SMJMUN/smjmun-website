import type { PortableTextBlock } from "next-sanity";
import type { Blog } from "@/lib/sanity/blog/types";
import PortableTextRenderer from "@/app/components/PortableTextRenderer";
import ArticleTOC, { type TocHeading } from "./ArticleTOC";
import ShareButtons from "./ShareButtons";

/** Extract h2/h3 headings from Portable Text blocks to build the TOC */
function extractHeadings(body: PortableTextBlock[]): TocHeading[] {
  return body
    .filter(
      (block) =>
        block._type === "block" &&
        (block.style === "h2" || block.style === "h3")
    )
    .map((block) => {
      const text = (block.children as { text?: string }[])
        ?.map((child) => child.text ?? "")
        .join("") ?? "";
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
      return {
        id,
        text,
        level: block.style === "h2" ? 2 : 3,
      } as TocHeading;
    })
    .filter((h) => h.text.length > 0);
}

interface ArticleContentProps {
  post: Blog;
}

export default function ArticleContent({ post }: ArticleContentProps) {
  const headings =
    post.body && post.body.length > 0 ? extractHeadings(post.body) : [];

  const hasContent = post.body && post.body.length > 0;

  return (
    <section
      className="bg-white"
      style={{
        paddingTop: "clamp(56px, 6vw, 88px)",
        paddingBottom: "clamp(72px, 8vw, 120px)",
      }}
    >
      <div className="content-wide">
        <div
          className={`
            grid gap-12 lg:gap-16 items-start
            ${headings.length > 0 ? "grid-cols-1 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_300px]" : "grid-cols-1"}
          `}
        >
          {/* ── Article body ────────────────────────────────────── */}
          <article
            id="article-content"
            className="min-w-0"
            aria-label="Article content"
          >
            <div className="max-w-[720px]">
              {hasContent ? (
                <div className="article-body" style={{ color: "black" }}>
                  <PortableTextRenderer value={post.body!} />
                </div>
              ) : (
                <p className="font-serif text-[18px] italic text-navy/40 leading-[1.7]">
                  This article is being prepared. Check back soon.
                </p>
              )}

              {/* Share buttons below content */}
              {hasContent && (  
                <div className="mt-12 pt-8 border-t border-navy/8">
                  <ShareButtons
                    title={post.title}
                    url={`/blogs/${post.slug.current}`}
                  />
                </div>
              )}
            </div>
          </article>

          {/* ── Sticky TOC sidebar ──────────────────────────────── */}
          {headings.length > 0 && (
            <aside
              className="hidden lg:block"
              aria-label="Article table of contents"
            >
              <div className="sticky top-28 self-start">
                <ArticleTOC headings={headings} />
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}

