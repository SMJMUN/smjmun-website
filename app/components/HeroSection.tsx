'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const heroImages = ['/images/smj-hero-6.jpeg',   '/images/smj-hero-4.jpeg', '/images/smj-hero-7.jpeg'];

export default function HeroSection() {
const [currentImage, setCurrentImage] = useState(0);
 

const SLIDE_DURATION = 4000;
 useEffect(() => {
  const timer = setInterval(() => {
    setCurrentImage(
      (prev) => (prev + 1) % heroImages.length
    );
  }, SLIDE_DURATION);

  return () => clearInterval(timer);

  
}, []);
console.log("currentImage:", currentImage);
console.log("length:", heroImages.length);
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
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
          className=" bg-cover  bg-center  "
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
   <motion.h1
  className="
    text-5xl
    md:text-6xl
    lg:text-7xl
    font-bold
    leading-[0.85]
    tracking-[-0.05em]
    max-w-3xl
  "
>
  <motion.span
    initial={{ opacity: 0, x: -80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="block text-white"
  >
    DARE.
  </motion.span>

  <motion.span
    initial={{ opacity: 0, x: -80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.8,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="block text-charcoal"
  >
    RISE.
  </motion.span>

<motion.span
  className="block text-gold"
  animate={{
    textShadow: [
      '0 0 0px rgba(212,164,90,0)',
      '0 0 20px rgba(212,164,90,.35)',
      '0 0 0px rgba(212,164,90,0)',
    ],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
>
  IMPACT.
</motion.span>
</motion.h1>
{/* <div
  style={{
    width: "340px",
    height: "2px",
    background: "#bb8b57",
    marginBottom: "28px",
  }}
  className="md:w-[400px]! lg:w-[480px]!"
/> */}
     <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "24px",
    marginTop: "28px",
    flexWrap: "wrap",
    opacity: 0,
    animation:
      "fadeInUp 1s cubic-bezier(0.25, 0.1, 0.25, 1) 0.9s forwards",
  }}
>
  <Link
    href="/about"
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
    About us
    <span> <ArrowRight />
  </span>
  </Link>

  <a
    href="#programs"
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
  className="
    absolute
    md:bottom-30
    bottom-12
    right-6
    md:right-12
    lg:right-20
    z-20
    flex
    flex-col
    items-end
    gap-4
  "
>
  {/* Progress Segments */}
  <div className="flex items-center gap-4">
    {heroImages.map((_, index) => (
      <div
        key={index}
        className="
          relative
          h-[2px]
         w-16 md:w-24 lg:w-32
          overflow-hidden
          bg-white/30
        "
      >
       {index === currentImage && (
  <div
    key={currentImage}
    className="absolute left-0 top-0 h-full bg-[#bb8b57]"
    style={{
      width: "100%",
      animation: `fillBar ${SLIDE_DURATION}ms linear forwards`,
    }}
  />
)}

        {index < currentImage && (
          <div className="absolute inset-0 bg-[#bb8b57]" />
        )}
      </div>
    ))}
  </div>

  {/* Counter */}
  <div className="text-xs md:text-sm tracking-[0.25em] text-white/90">
    {String(currentImage + 1).padStart(2, "0")} /{" "}
    {String(heroImages.length).padStart(2, "0")}
    <div className="text-white">
  {/* {Math.round(progress)}% */}
</div>
  </div>
</div>

    </section>
  );
}
