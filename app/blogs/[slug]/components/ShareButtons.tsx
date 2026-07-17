"use client";

import { useState } from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineLink,
} from "react-icons/ai";


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
const shareActions = [
  {
    id: "facebook",
    label: "Share on Facebook",
    icon: <AiFillFacebook />,
    action: () => {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          window.location.href
        )}`,
        "_blank",
        "width=600,height=500"
      );
    },
  },
  {
    id: "twitter",
    label: "Share on Twitter",
    icon: <AiOutlineTwitter />,
    action: () => {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          window.location.href
        )}&text=${encodeURIComponent(document.title)}`,
        "_blank",
        "width=600,height=500"
      );
    },
  },
  {
    id: "linkedin",
    label: "Share on LinkedIn",
    icon: <AiFillLinkedin />,
    action: () => {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          window.location.href
        )}`,
        "_blank",
        "width=600,height=500"
      );
    },
  },
  {
    id: "copy",
    label: copied ? "Copied!" : "Copy Link",
    icon: <AiOutlineLink />,
    action: async () => {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    },
  },
];

return (
  <div className="flex flex-col gap-4">
    <span
      className="
        font-sans
        text-[12px]
        font-medium
        text-navy/50
      "
    >
      Share this article
    </span>

    <div className="flex items-center gap-3">
  {shareActions.map((item) => (
    <button
      key={item.id}
      onClick={item.action}
      aria-label={item.label}
      title={item.label}
      className={`
        group
        w-11
        h-11
        rounded-full
        border
        flex
        items-center
        justify-center
        transition-all
        duration-300

        ${
          item.id === "copy" && copied
            ? "border-gold text-gold bg-gold/5"
            : `
              border-[#d9d2c7]
              bg-white
              text-[#3d4451]
              hover:text-[#042147]
              hover:border-[#042147]
              hover:-translate-y-[1px]
            `
        }
      `}
    >
      <span
        className="
          text-[18px]
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {item.icon}
      </span>
    </button>
  ))}
</div>
  </div>
);
}
