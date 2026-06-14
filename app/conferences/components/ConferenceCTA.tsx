import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ConferenceCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-navy">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/logo-dark.png"
          alt=""
          fill
          unoptimized
          className="object-contain scale-150 translate-x-1/4 translate-y-1/4 brightness-0 invert"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-transparent z-10" />

      <div className="content-editorial relative z-20 text-center text-white">
        <h2 className="font-serif text-[clamp(40px,5vw,72px)] font-bold leading-[1.05] tracking-[-0.02em] mb-8">
          Begin Your Diplomatic Journey Today
        </h2>
        <p className="font-sans text-[18px] leading-[1.7] text-white/70 mb-12 max-w-[600px] mx-auto">
          Join a global community of future leaders and make your voice heard on the international stage.
        </p>
        <Link href="#upcoming-conferences" className="btn-primary" style={{ backgroundColor: "var(--color-gold)", color: "var(--color-navy)" }}>
          Find a Conference
        </Link>
      </div>
    </section>
  );
}
