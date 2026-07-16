'use client';


import Image from 'next/image';
import { useRef } from 'react';

interface Conference {
  title: string;
  location: string;
  date: string;
  description: string;
  image: string;
}

const conferences: Conference[] = [
  {
    title: 'SMJ MUN Delhi',
    location: 'New Delhi, India',
    date: 'March 2025',
    description: 'India\'s flagship conference bringing 500+ delegates from across the nation.',
    image: '/images/hero-1.webp',
  },
  {
    title: 'SMJ MUN International',
    location: 'Dubai, UAE',
    date: 'November 2024',
    description: 'Our premier international conference with delegates from 15+ countries.',
    image: '/images/hero-3.webp',
  },
  {
    title: 'SMJ MUN Leadership Summit',
    location: 'Singapore',
    date: 'August 2024',
    description: 'An intensive diplomatic leadership summit for Asia-Pacific delegates.',
    image: '/images/institution.webp',
  },
  {
    title: 'SMJ MUN National',
    location: 'Mumbai, India',
    date: 'January 2025',
    description: 'Western India\'s largest Model United Nations conference.',
    image: '/images/hero-2.webp',
  },
];

export default function ConferencesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="conferences"
      style={{
        backgroundColor: '#f8f8f8',
        padding: '160px 0 120px',
        overflow: 'hidden',
      }}
    >
      {/* Section Header */}
      <div style={{ padding: '0 8vw', marginBottom: '60px' }}>
        <h2
          style={{
            fontFamily: 'var(--font-heading), Georgia, serif',
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#042147',
            marginBottom: '16px',
          }}
        >
          Featured Conferences
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body), system-ui, sans-serif',
            fontSize: '18px',
            lineHeight: 1.6,
            color: '#042147',
            opacity: 0.55,
            maxWidth: '680px',
          }}
        >
          Where the world&apos;s next generation of leaders convene.
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="horizontal-scroll"
        style={{
          display: 'flex',
          gap: '40px',
          paddingLeft: '8vw',
          paddingRight: '8vw',
          paddingBottom: '20px',
        }}
      >
        {conferences.map((conf) => (
          <div
            key={conf.title}
            className="horizontal-scroll-item"
            style={{
              width: '80vw',
              maxWidth: '800px',
              flexShrink: 0,
              scrollSnapAlign: 'start',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement)
                .style.backgroundColor = 'black';
            }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#83090e'; }}
          >
            {/* Cinematic image */}
            <div
              style={{
                width: '100%',
                aspectRatio: '16 / 9',
                overflow: 'hidden',
                position: 'relative',
              }}


            >
              <Image
                src={conf.image}
                alt={conf.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'filter 0.4s ease',
                }}
               fill sizes="(max-width: 768px) 100vw, 50vw" />
            </div>

            {/* Gold rule separator */}
            <div
              style={{
                width: '100%',
                height: '1px',
                backgroundColor: '#bb8b57',
                opacity: 0.4,
              }}
            />

            {/* Deep Charcoal editorial band */}
            <div
              style={{
                backgroundColor: '#83090e',
                padding: 'clamp(24px, 3vw, 40px) clamp(24px, 3vw, 40px)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading), Georgia, serif',
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: '#ffffff',
                  marginBottom: '8px',
                  letterSpacing: '-0.01em',
                }}
              >
                {conf.title}
              </h3>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '12px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase' as const,
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  {conf.location}
                </span>
                <span
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: '#bb8b57',
                    display: 'inline-block',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase' as const,
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  {conf.date}
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                {conf.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
