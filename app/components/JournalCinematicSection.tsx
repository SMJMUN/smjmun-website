'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function JournalCinematicSection() {
  return (
    <section id="journal-cinematic" aria-label="SMJ MUN Journal" className="py-16 md:py-24 px-4 md:px-6 journal-section-tablet">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          minHeight: '460px',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Background image */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('/images/ceremony-1.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1.06)',
          }}
        />
        {/* Dark overlay for legibility */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(8, 8, 8, 0.65)' }} />
        {/* Noise grain */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            // backgroundImage: "url('/images/noise.png')",
            opacity: 0.04,
            pointerEvents: 'none',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            maxWidth: 640,
            padding: '48px 32px',
          }}
          className="md:!pl-16 lg:!pl-20"
        >
          {/* Quote mark */}
          <div
            aria-hidden="true"
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(64px, 8vw, 90px)',
              lineHeight: 0.75,
              color: '#BB8B57',
              fontWeight: 700,
              opacity: 0.55,
              userSelect: 'none',
              marginBottom: 20,
            }}
          >
            &ldquo;
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(30px, 4.5vw, 44px)',
              fontWeight: 700,
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              marginBottom: 24,
            }}
          >
            The conversation
            <br />
            continues after
            <br />
            the closing gavel.
          </h2>

          {/* Gold rule */}
          <div style={{ width: 44, height: 1, background: '#BB8B57', marginBottom: 24 }} />

          {/* Sub-copy */}
          <p
            style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: 'clamp(13px, 1.3vw, 15px)',
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.75,
              maxWidth: 360,
              marginBottom: 32,
            }}
          >
            Ideas, arguments, and perspectives
            <br className="hidden md:block" />
            from the SMJMUN community.
          </p>

          {/* CTA */}
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#ffffff',
              textDecoration: 'none',
              padding: '11px 26px',
              border: '1px solid rgba(187,139,87,0.55)',
              borderRadius: 6,
              background: 'rgba(187,139,87,0.08)',
              transition: 'background 0.25s ease, border-color 0.25s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = 'rgba(187,139,87,0.16)';
              el.style.borderColor = '#BB8B57';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = 'rgba(187,139,87,0.08)';
              el.style.borderColor = 'rgba(187,139,87,0.55)';
            }}
          >
            <span>Read the Journal</span>
            <span style={{ fontSize: 14, lineHeight: 1 }}>→</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}