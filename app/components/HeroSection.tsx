'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const heroImages = ['/images/hero-1.png', '/images/founder-2.jpeg', '/images/hero-3.png'];

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
            backgroundPosition: '80% center;',
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
        <div
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
        </div>

        {/* Main Heading */}
        <h1
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
          SMJ MUN
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: 'var(--font-body), system-ui, sans-serif',
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
          India&apos;s Premier Platform  <br />For

          <span className='text-gold! text-3xl'> Diplomacy, Leadership &amp; Global Engagement.</span>
        </p>

        {/* CTAs — one solid, one text link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            flexWrap: 'wrap' as const,
            opacity: 0,
            animation: 'fadeInUp 1s cubic-bezier(0.25, 0.1, 0.25, 1) 0.9s forwards',
          }}
        >

          <a
            href="#contact"
            className="btn-primary  "
            style={{
              padding: '18px 44px',
              fontSize: '13px',

            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = 'black'; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = '#83090e'; }}

          >
            Partner With Us
          </a>
          <a
            href="#leadership"
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#ffffff'; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.7)'; }}
          >
            Explore Programs →
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
