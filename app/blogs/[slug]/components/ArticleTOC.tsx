"use client";

import { useEffect, useState, useRef } from "react";

export interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

interface ArticleTOCProps {
  headings: TocHeading[];
}

export default function ArticleTOC({ headings }: ArticleTOCProps) {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Find the topmost visible heading
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible.length > 0) {
        setActiveId(visible[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0,
    });

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 96; // account for sticky navbar
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
  };

  return (
    <nav aria-label="Table of contents">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-5 h-[1px] bg-gold" />
        <p className="font-sans text-[10px] font-600 tracking-[0.22em] uppercase text-navy/45">
          Table of Contents
        </p>
      </div>

      {/* Heading list */}
      <ol className="list-none space-y-1" role="list">
        {headings.map(({ id, text, level }) => {
          const isActive = activeId === id;
          return (
            <li key={id} style={{ paddingLeft: level === 3 ? "12px" : "0px" }}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`
                  block font-sans text-[13px] leading-[1.45] py-1.5 no-underline
                  border-l-2 pl-3 transition-all duration-300
                  ${
                    isActive
                      ? "border-gold text-navy font-500"
                      : "border-transparent text-navy/40 hover:text-navy/70 hover:border-navy/20"
                  }
                `}
                aria-current={isActive ? "location" : undefined}
              >
                {text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
