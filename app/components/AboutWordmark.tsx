'use client';

import { useEffect, useState } from 'react';

// ─── SMJ: people, delegates, community ──────────────────────────────────────
const SMJ_IMAGES = [
  
  '/images/community.jpeg',
  '/images/smj-hero-6.jpeg',
  '/images/community-2.jpeg',
  '/images/smj-hero-9.jpeg',
];

// ─── MUN: institutional, formal, legacy ─────────────────────────────────────
const MUN_IMAGE = '/images/treecolour-4.png';

const INTERVAL_MS = 1000;
const FADE_MS = 800;

// ─── SMJLetters: stacks all images, crossfades between them ─────────────────
function SMJLetters({ activeIndex }: { activeIndex: number }) {
  return (
    <span
      className="relative inline-block"
      style={{
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        letterSpacing: 'inherit',
        lineHeight: 'inherit',
        color: 'transparent',
        // We need a fallback bg so the span has dimensions
        WebkitTextFillColor: 'transparent',
      }}
      aria-label="SMJ"
    >
      {/* Stack all images; only active one is visible */}
      {SMJ_IMAGES.map((src, i) => (
        <span
          key={src}
          aria-hidden
          className="absolute inset-0"
          style={{
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: i === activeIndex ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
            userSelect: 'none',
            filter: 'saturate(1.4) brightness(1.05)',
          }}
        >
          SMJ
        </span>
      ))}
      {/* Render text for layout/sizing (invisible) */}
      <span style={{ visibility: 'hidden' }} aria-hidden>SMJ</span>
    </span>
  );
}

export default function AboutWordmark() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % SMJ_IMAGES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{ backgroundColor: '#191816' }}
      className="relative w-full overflow-hidden"
    >
      {/* ── Top rule ────────────────────────────────────────────────────── */}
      <div className="w-full h-px" style={{ backgroundColor: '#1a1a1815' }} />

      {/* ── Wordmark ────────────────────────────────────────────────────── */}
      <div className="flex flex-col items-center px-4 pt-20 pb-15 md:pt-28 md:pb-10">

        {/* Overline */}
     

        {/* ── SMJMUN wordmark ──────────────────────────────────────────── */}
        <div
          className="flex flex-col md:flex-row items-center md:items-baseline "
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: 900,
            fontSize: 'clamp(96px, 21vw, 200px)',
            lineHeight: 0.88,
            letterSpacing: '0.1em',
            userSelect: 'none',
          }}
        >
          {/* SMJ — animated people imagery */}
          <SMJLetters activeIndex={activeIndex} />

          {/* Desktop divider */}
         

          {/* MUN — static institutional imagery */}
          <span
            style={{
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              backgroundImage: `url(${MUN_IMAGE})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 30%',
              backgroundRepeat: 'no-repeat',
              filter: 'saturate(0.65) brightness(0.88) contrast(1.15)',
              display: 'inline-block',
            }}
          >
            MUN
          </span>
        </div>

        {/* ── Progress dots (SMJ) ──────────────────────────────────────── */}
        {/* <div className="flex items-center gap-2.5 mt-7">
          {SMJ_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Show image ${i + 1}`}
              style={{
                width: i === activeIndex ? '22px' : '6px',
                height: '6px',
                borderRadius: '99px',
                backgroundColor: i === activeIndex ? '#b08a5a' : '#b08a5a33',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 400ms ease',
                padding: 0,
              }}
            />
          ))}
        </div> */}

        {/* Contrast labels */}
        {/* <div className="flex items-center gap-8 mt-5">
          <span
            style={{
              fontSize: '10px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#b08a5a',
            }}
          >
            People change
          </span>
          <span style={{ width: '1px', height: '12px', backgroundColor: '#1a1a1820' }} />
          <span
            style={{
              fontSize: '10px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#4a5568',
            }}
          >
            Purpose remains
          </span>
        </div> */}

      </div>

      {/* ── Bottom rule ──────────────────────────────────────────────────── */}
      {/* <div className="w-full h-px" style={{ backgroundColor: '#1a1a1815' }} /> */}

      {/* ── Editorial statement ──────────────────────────────────────────── */}
{/*       
       <div className="flex flex-col items-center text-center px-6 pt-20 pb-28">

        <h2
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: 700,
            fontSize: 'clamp(34px, 5vw, 66px)',
            lineHeight: 1.06,
            letterSpacing: '-0.025em',
            color: '#1a1a18',
            marginBottom: '20px',
          }}
        >
          People Change.{' '}
          <br />
          <span style={{ color: '#b08a5a' }}>Purpose Remains.</span>
        </h2>

        <div style={{ width: '40px', height: '1px', backgroundColor: '#b08a5a', marginBottom: '28px' }} />

        <p
          style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 'clamp(14px, 1.5vw, 17px)',
            lineHeight: 1.9,
            color: '#1a1a18',
            opacity: 0.55,
            maxWidth: '520px',
          }}
        >
          MUN teaches you how to speak.
          <br />
          SMJMUN exists to give you something worth saying.
        </p>

        <div
          className="mt-16 grid grid-cols-2 w-full max-w-[440px]"
          style={{ borderTop: '1px solid #1a1a1812' }}
        >

          <div
            className="flex flex-col items-center pt-10 pb-4 px-6"
            style={{ borderRight: '1px solid #1a1a1812' }}
          >
            <span
              style={{
                fontFamily: 'Georgia, serif',
                fontWeight: 900,
                fontSize: '32px',
                letterSpacing: '-0.04em',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundImage: `url(${SMJ_IMAGES[activeIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: `background-image 0s`,
                display: 'inline-block',
                filter: 'saturate(1.3)',
              }}
            >
              SMJ
            </span>
            <p
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#b08a5a',
                marginTop: '12px',
              }}
            >
              The people
            </p>
            <p
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: '12px',
                color: '#1a1a18',
                opacity: 0.4,
                lineHeight: 1.7,
                marginTop: '6px',
                textAlign: 'center',
              }}
            >
              Delegates · Volunteers
              <br />
              Community · Growth
            </p>
          </div>

          <div className="flex flex-col items-center pt-10 pb-4 px-6">
            <span
              style={{
                fontFamily: 'Georgia, serif',
                fontWeight: 900,
                fontSize: '32px',
                letterSpacing: '-0.04em',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundImage: `url(${MUN_IMAGE})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center 30%',
                filter: 'saturate(0.65)',
                display: 'inline-block',
              }}
            >
              MUN
            </span>
            <p
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#4a5568',
                marginTop: '12px',
              }}
            >
              The institution
            </p>
            <p
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: '12px',
                color: '#1a1a18',
                opacity: 0.4,
                lineHeight: 1.7,
                marginTop: '6px',
                textAlign: 'center',
              }}
            >
              Stewardship · Purpose
              <br />
              Responsibility · Legacy
            </p>
          </div>

        </div> 
      </div>
 */}
    </section>
  );
}
