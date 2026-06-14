"use client";

import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  url: string;
}

interface ShareAction {
  id: string;
  label: string;
  icon: string;
  action: () => void;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const absoluteUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${url}`
      : url;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(absoluteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback silently
    }
  };

  const shareActions: ShareAction[] = [
    {
      id: "twitter",
      label: "Share on X (Twitter)",
      icon: "𝕏",
      action: () =>
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(absoluteUrl)}`,
          "_blank",
          "noopener,noreferrer"
        ),
    },
    {
      id: "linkedin",
      label: "Share on LinkedIn",
      icon: "in",
      action: () =>
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(absoluteUrl)}`,
          "_blank",
          "noopener,noreferrer"
        ),
    },
    {
      id: "facebook",
      label: "Share on Facebook",
      icon: "f",
      action: () =>
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(absoluteUrl)}`,
          "_blank",
          "noopener,noreferrer"
        ),
    },
    {
      id: "copy",
      label: copied ? "Copied!" : "Copy link",
      icon: copied ? "✓" : "⌗",
      action: handleCopy,
    },
  ];

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="font-sans text-[11px] font-500 tracking-[0.15em] uppercase text-navy/40 mr-1">
        Share this article
      </span>
      {shareActions.map((item) => (
        <button
          key={item.id}
          onClick={item.action}
          aria-label={item.label}
          title={item.label}
          className={`
            w-9 h-9 flex items-center justify-center
            border font-sans text-[12px] font-600
            cursor-pointer transition-all duration-300
            ${item.id === "copy" && copied
              ? "border-gold text-gold bg-gold/5"
              : "border-navy/15 text-navy/50 hover:border-navy/40 hover:text-navy"
            }
          `}
        >
          <span aria-hidden="true">{item.icon}</span>
        </button>
      ))}
    </div>
  );
}
