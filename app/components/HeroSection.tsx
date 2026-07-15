'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const heroImages = ['/images/ceremony-4.png', '/images/ceremony-2.png', '/images/ceremony-3.png',];

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

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '700px',
        overflow: 'hidden',
        backgroundColor: '#0A0A0A',
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
            backgroundPosition: 'center',
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
            'radial-gradient(circle at 80% 40%, rgba(187,139,87,.18), transparent 35%)',
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
          background: 'linear-gradient(to top, rgba(10,10,10,0.9), transparent)',
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
        {/* Main Heading */}
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
            animate={{
              opacity: 1, x: 0, textShadow: [
                '0 0 0px rgba(187,139,87,0)',
                '0 0 20px rgba(187,139,87,.35)',
                '0 0 0px rgba(187,139,87,0)',
              ],
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="block text-[#BB8B57]"
          >
            RISE.
          </motion.span>

          <motion.span
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="block text-charcoal"
          >
            IMPACT.
          </motion.span>
        </motion.h1>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/80 text-lg md:text-xl mt-6 max-w-2xl"
        >
          SMJMUN — where India's students learn to think, speak, and lead on the world's stage.
        </motion.p>

        {/* CTA Buttons */}
        <div
          className="hero-cta-tablet-sm"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "40px",
            flexWrap: "wrap",
            opacity: 0,
            animation:
              "fadeInUp 1s cubic-bezier(0.25, 0.1, 0.25, 1) 0.9s forwards",
          }}
        >
          <Link href="/about" className="btn-ds-primary">
            About us
            <ArrowRight size={16} />
          </Link>

          <Link href="/partnerships" className="btn-ds-secondary">
            Partner With Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Progress Segments — bottom right */}
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
                  className="absolute left-0 top-0 h-full bg-[#BB8B57]"
                  style={{
                    width: "100%",
                    animation: `fillBar ${SLIDE_DURATION}ms linear forwards`,
                  }}
                />
              )}

              {index < currentImage && (
                <div className="absolute inset-0 bg-[#BB8B57]" />
              )}
            </div>
          ))}
        </div>

        {/* Counter */}
        <div className="text-xs md:text-sm tracking-[0.25em] text-white/90">
          {String(currentImage + 1).padStart(2, "0")} /{" "}
          {String(heroImages.length).padStart(2, "0")}
        </div>
      </div>

    </section>
  );
}
