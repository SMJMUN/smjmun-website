import { PortableText, type PortableTextComponents } from "next-sanity";
import type { PortableTextBlock } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";

/** Produces a URL-safe id from a heading's text content */
function slugify(children: React.ReactNode): string {
  const text = String(children ?? "")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
  return text || "heading";
}

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1
        id={slugify(children)}
        style={{
          fontFamily: "var(--font-heading), Georgia, serif",
          fontSize: "clamp(32px, 4vw, 48px)",
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          color: "var(--color-navy)",
          marginBottom: "24px",
          marginTop: "48px",
          scrollMarginTop: "100px",
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        id={slugify(children)}
        style={{
          fontFamily: "var(--font-heading), Georgia, serif",
          fontSize: "clamp(26px, 3vw, 36px)",
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
          color: "var(--color-navy)",
          marginBottom: "20px",
          marginTop: "40px",
          scrollMarginTop: "100px",
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={slugify(children)}
        style={{
          fontFamily: "var(--font-heading), Georgia, serif",
          fontSize: "clamp(22px, 2.5vw, 28px)",
          fontWeight: 700,
          lineHeight: 1.25,
          color: "var(--color-navy)",
          marginBottom: "16px",
          marginTop: "32px",
          scrollMarginTop: "100px",
        }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        id={slugify(children)}
        style={{
          fontFamily: "var(--font-heading), Georgia, serif",
          fontSize: "20px",
          fontWeight: 700,
          lineHeight: 1.3,
          color: "var(--color-navy)",
          marginBottom: "12px",
          marginTop: "24px",
          scrollMarginTop: "100px",
        }}
      >
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p
        style={{
          fontFamily: "var(--font-body), system-ui, sans-serif",
          fontSize: "17px",
          lineHeight: 1.8,
          color: "var(--color-navy)",
          marginBottom: "20px",
        }}
      >
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          fontFamily: "var(--font-heading), Georgia, serif",
          fontSize: "clamp(20px, 2.5vw, 26px)",
          lineHeight: 1.5,
          fontStyle: "italic",
          color: "var(--color-navy)",
          borderLeft: "3px solid var(--color-gold)",
          paddingLeft: "24px",
          margin: "32px 0",
          opacity: 0.85,
        }}
      >
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong style={{ fontWeight: 600 }}>{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          style={{
            color: "var(--color-charcoal)",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul
        style={{
          paddingLeft: "24px",
          marginBottom: "20px",
          listStyleType: "disc",
        }}
      >
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol
        style={{
          paddingLeft: "24px",
          marginBottom: "20px",
          listStyleType: "decimal",
        }}
      >
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li
        style={{
          fontFamily: "var(--font-body), system-ui, sans-serif",
          fontSize: "17px",
          lineHeight: 1.8,
          color: "var(--color-navy)",
          marginBottom: "8px",
        }}
      >
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li
        style={{
          fontFamily: "var(--font-body), system-ui, sans-serif",
          fontSize: "17px",
          lineHeight: 1.8,
          color: "var(--color-navy)",
          marginBottom: "8px",
        }}
      >
        {children}
      </li>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      const imageUrl = urlFor(value).width(1200).quality(85).url();
      return (
        <figure style={{ margin: "40px 0" }}>
          <Image
            src={imageUrl}
            alt={value.alt || ""}
            width={1200}
            height={675}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
          {value.caption && (
            <figcaption
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "13px",
                color: "var(--color-navy)",
                opacity: 0.5,
                marginTop: "12px",
                textAlign: "center",
              }}
            >
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default function PortableTextRenderer({
  value,
}: {
  value: PortableTextBlock[];
}) {
  return <PortableText value={value} components={components} />;
}
