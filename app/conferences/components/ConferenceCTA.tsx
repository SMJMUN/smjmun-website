import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ConferenceCTA() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #5b0207, #73060b, #83090e)' }}
    >
      {/* Background logo watermark */}
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <Image
          src="/logo-dark.png"
          alt=""
          fill
          unoptimized
          className="object-contain scale-150 translate-x-1/4 translate-y-1/4 brightness-0 invert"
        />
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 100%)' }}
      />
      <div
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none z-10"
        style={{
          background: 'radial-gradient(circle, rgba(187,139,87,0.10), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(187,139,87,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Content */}
      <div className="content-editorial relative z-20 text-center text-white">
        <span className="section-label block mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Join the Movement
        </span>

        <h2
          className="font-serif text-white mb-8"
          style={{
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          Begin Your Diplomatic<br className="hidden md:block" /> Journey Today
        </h2>

        <p
          className="mb-12 mx-auto leading-[1.75]"
          style={{
            fontFamily: 'var(--font-body), system-ui, sans-serif',
            fontSize: 'clamp(15px, 1.3vw, 18px)',
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '560px',
          }}
        >
          Join a global community of future leaders and make your voice heard on the international stage.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#upcoming-conferences"
            className="btn-ds-primary"
            style={{
              backgroundColor: 'var(--ds-gold)',
              color: '#0A0A0A',
              borderColor: 'var(--ds-gold)',
            }}
          >
            Find a Conference
          </Link>
          <Link href="/about" className="btn-ds-secondary">
            Learn About SMJ MUN
          </Link>
        </div>
      </div>
    </section>
  );
}
