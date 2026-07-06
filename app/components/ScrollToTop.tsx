"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ChevronUp } from "lucide-react";

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
fixed bottom-2 right-[45%] md:right-[50%]
h-10 w-10
flex items-center justify-center
bg-[#C79A46]
text-[#F8F4EC]
rounded-[0_12px_0_0]
shadow-2xl
transition-all duration-300
hover:-translate-y-1
hover:bg-[#B88B3D]
z-[9999]
 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
 `}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-10 text-grey-400" /> 
    </button>
  );
}


