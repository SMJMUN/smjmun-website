'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const heroImages = ['/images/smj-hero-6.jpeg', '/images/smj-hero-5.jpeg', '/images/smg-hero-2.jpeg', '/images/smj-hero-4.jpeg', '/images/smj-hero-7.jpeg'];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '90vh',
        minHeight: '700px',
        overflow: 'hidden',
        backgroundColor: '#042147',
      }}
    >
      {/* Background Images with Crossfade */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center;',
            opacity: index === currentImage ? 1 : 0,
            transition: 'opacity 1.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
            transform: index === currentImage ? 'scale(1.02)' : 'scale(1)',
          }}
        />
      ))}

      {/* Dark Gradient Overlay — left-to-right for editorial feel */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,.92) 0%, rgba(0,0,0,.78) 45%, rgba(0,0,0,.45) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background:
            'radial-gradient(circle at 80% 40%, rgba(184,134,11,.18), transparent 35%)',
        }}
      />

      {/* Bottom fade for depth */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to top, rgba(4, 33, 71, 0.6), transparent)',
          zIndex: 2,
        }}
      />

      {/* Content — left-aligned editorial, bottom-left quadrant */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '0 8vw',
          paddingBottom: '20vh',
          maxWidth: '900px',
        }}
      >
        {/* Label */}
        {/* <div
          style={{
            fontFamily: 'var(--font-body), system-ui, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.3em',
            textTransform: 'uppercase' as const,
            color: '#bb8b57',
            marginBottom: '24px',
            opacity: 0,
            animation: 'fadeInUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) 0.3s forwards',
          }}
        >
          TAS Presents
        </div> */}

        {/* Main Heading */}
        {/* <h1
          style={{
            fontFamily: 'var(--font-heading), Georgia, serif',
            fontSize: 'clamp(56px, 9vw, 120px)',
            fontWeight: 700,
            lineHeight: 0.92,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            marginBottom: '32px',
            opacity: 0,
            animation: 'fadeInUp 1s cubic-bezier(0.25, 0.1, 0.25, 1) 0.5s forwards',
          }}
        >
          SMJMUN
        </h1> */}

        {/* Tagline */}
        <p
          style={{
                        fontFamily: 'var(--font-heading), Georgia, serif',

            fontSize: 'clamp(16px, 1.5vw, 20px)',
            lineHeight: 1.6,
            color: 'rgba(255, 255, 255, 0.75)',
            maxWidth: '480px',
            marginBottom: '48px',
            opacity: 0,
            animation: 'fadeInUp 1s cubic-bezier(0.25, 0.1, 0.25, 1) 0.7s forwards',
          }}
          className='text-3xl!'
        >
          MUN Teaches You How To Speak.
      <br />SMJMUN 

          <span className='text-gold! text-3xl'>  Exists To Give   You Something Worth Saying</span>
        </p>
<div
  style={{
    width: "340px",
    height: "2px",
    background: "#bb8b57",
    marginBottom: "28px",
  }}
/>
     <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "24px",
    flexWrap: "wrap",
    opacity: 0,
    animation:
      "fadeInUp 1s cubic-bezier(0.25, 0.1, 0.25, 1) 0.9s forwards",
  }}
>
  <a
    href="#contact"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",

      padding: "14px 34px",

      border: "1px solid rgba(255,255,255,0.75)",
      borderRadius: "999px",

      color: "#ffffff",
      textDecoration: "none",

      fontFamily: "var(--font-body)",
      fontSize: "15px",
      fontWeight: 500,

      backdropFilter: "blur(6px)",

      transition: "all 0.4s ease",
    }}
    onMouseEnter={(e) => {
      const target = e.currentTarget;

      target.style.background =
        "rgba(255,255,255,0.12)";
      target.style.transform =
        "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      const target = e.currentTarget;

      target.style.background =
        "transparent";
      target.style.transform =
        "translateY(0px)";
    }}
  >
    about us
    <span> <ArrowRight />
  </span>
  </a>

  <a
    href="#leadership"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",

      padding: "14px 34px",

      border: "1px solid rgba(255,255,255,0.75)",
      borderRadius: "999px",

      color: "#ffffff",
      textDecoration: "none",

      fontFamily: "var(--font-body)",
      fontSize: "15px",
      fontWeight: 500,

      backdropFilter: "blur(6px)",

      transition: "all 0.4s ease",
    }}
    onMouseEnter={(e) => {
      const target = e.currentTarget;

      target.style.background =
        "rgba(255,255,255,0.12)";
      target.style.transform =
        "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      const target = e.currentTarget;

      target.style.background =
        "transparent";
      target.style.transform =
        "translateY(0px)";
    }}
  >
    Explore Programs
    <span> <ArrowRight /></span>
  </a>
</div>
</div>

      {/* Subtle gold thin line at the very bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '8vw',
          width: '80px',
          height: '1px',
          backgroundColor: '#bb8b57',
          zIndex: 3,
          opacity: 0.5,
        }}
      />
    </section>
  );
}
