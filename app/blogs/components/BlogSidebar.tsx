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

interface BlogSidebarProps {
  featuredPosts: Blog[];
  latestPosts: Blog[];
  allPosts: Blog[];
}

function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Gold rule + section title */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-6 h-[1px] bg-gold flex-shrink-0" />
        <h3 className="font-sans text-[10px] font-600 tracking-[0.22em] uppercase text-navy/50">
          {title}
        </h3>
      </div>
      {children}
    </section>
  );
}

function SidebarPostItem({ post, index }: { post: Blog; index?: number }) {
  const coverUrl = post.coverImage
    ? urlFor(post.coverImage).width(120).height(80).quality(75).url()
    : null;
  const category = post.tags?.[0] ?? "Journal";

  return (
    <Link
      href={`/blogs/${post.slug.current}`}
      className="group flex gap-3 items-start no-underline py-3.5 border-b border-navy/8 last:border-0"
    >
      {/* Thumbnail or number */}
      {typeof index === "number" ? (
        <span
          className="flex-shrink-0 font-serif text-[22px] font-bold text-gold/30 w-7 leading-none mt-0.5"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      ) : coverUrl ? (
        <div className="flex-shrink-0 w-[56px] h-[40px] bg-navy/5 overflow-hidden relative">
          <Image
            src={coverUrl}
            alt={post.title}
            fill
            unoptimized
            sizes="56px"
            className="object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex-shrink-0 w-[56px] h-[40px] bg-navy/10" />
      )}

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="font-sans text-[9px] font-600 tracking-[0.15em] uppercase text-gold mb-1">
          {category}
        </p>
        <h4 className="font-serif text-[13px] font-bold leading-[1.3] text-navy line-clamp-2 group-hover:text-charcoal transition-colors duration-300">
          {post.title}
        </h4>
        <p className="font-sans text-[10px] text-navy/35 mt-1">
          {formatDate(post.publishedAt)}
        </p>
      </div>
    </Link>
  );
}

export default function BlogSidebar({
  featuredPosts,
  latestPosts,
  allPosts,
}: BlogSidebarProps) {
  // Popular reads: take first 3 from all posts (could be sorted by any signal)
  const popularPosts = allPosts.slice(0, 3);

  return (
    <aside aria-label="Blog sidebar" className="flex flex-col gap-10">
      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <SidebarSection title="Featured Articles">
          <div>
            {featuredPosts.slice(0, 3).map((post) => (
              <SidebarPostItem key={post._id} post={post} />
            ))}
          </div>
        </SidebarSection>
      )}

      {/* Divider */}
      {featuredPosts.length > 0 && latestPosts.length > 0 && (
        <hr className="border-navy/8" />
      )}

      {/* Latest Posts */}
      {latestPosts.length > 0 && (
        <SidebarSection title="Latest Posts">
          <div>
            {latestPosts.slice(0, 5).map((post) => (
              <SidebarPostItem key={post._id} post={post} />
            ))}
          </div>
        </SidebarSection>
      )}

      {/* Divider */}
      {latestPosts.length > 0 && popularPosts.length > 0 && (
        <hr className="border-navy/8" />
      )}

      {/* Popular Reads */}
      {popularPosts.length > 0 && (
        <SidebarSection title="Popular Reads">
          <div>
            {popularPosts.map((post, i) => (
              <SidebarPostItem key={post._id} post={post} index={i} />
            ))}
          </div>
        </SidebarSection>
      )}
    </aside>
  );
}


