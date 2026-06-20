"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8
h-14 w-14
rounded-[0_1rem_1rem_1rem]
 
bg-white
border border-gold/30
text-gold
z-10000
shadow-xl
hover:-translate-y-1
transition-all
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
      aria-label="Back to top"
    >
      <ChevronUp className="h-5 w-5 mx-auto" />
      <ChevronUp className="h-5 w-5 mx-auto" /> 
    </button>
  );
}
