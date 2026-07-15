'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
} from 'framer-motion';

function AnimatedWord({
  children,
  progress,
  range,
  isGold = false,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  isGold?: boolean;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  // For gold text, it transitions from a dull gold/brown to bright gold
  const color = useTransform(
    progress,
    range,
    isGold ? ['rgba(187,139,87,0.3)', '#BB8B57'] : ['rgba(255,255,255,0.14)', '#ffffff']
  );

  return (
    <motion.span
      style={{
        opacity,
        color: isGold ? color : undefined,
        display: 'inline-block',
      }}
      className={isGold ? '' : 'text-white'}
    >
      {children}
    </motion.span>
  );
}

function AnimatedParagraph({
  text,
  progress,
  range,
  className = '',
  style = {},
  isGold = false,
}: {
  text: string;
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
  style?: React.CSSProperties;
  isGold?: boolean;
}) {
  const words = text.split(' ');
  const [start, end] = range;
  const step = (end - start) / words.length;

  return (
    <p className={className} style={style}>
      {words.map((word, i) => {
        const wordStart = start + i * step;
        const wordEnd = start + (i + 1) * step;
        return (
          <span key={i} className="inline-block mr-[0.25em] mb-[0.1em]">
            <AnimatedWord progress={progress} range={[wordStart, wordEnd]} isGold={isGold}>
              {word}
            </AnimatedWord>
          </span>
        );
      })}
    </p>
  );
}

export default function FounderSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll over the tall 250vh section (desktop). On mobile the
  // section is auto-height, so this just tracks normal scroll-through.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Track the highest scroll progress achieved so it never reverses
  const maxProgress = useMotionValue(0);

  // Once the animation reaches the end, lock it so it never replays
  // (e.g. if the user scrolls back up and down again) until refresh.
  const animationCompleted = useRef(false);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (animationCompleted.current) return;

    if (latest > maxProgress.get()) {
      maxProgress.set(latest);
    }

    if (latest >= 1) {
      animationCompleted.current = true;
    }
  });

  return (
    <section
      id="founder"
      ref={sectionRef}
      className="bg-transparent relative h-auto md:h-[250vh]"
    >
      {/* Sticky Panel — pins on desktop only; normal flow on mobile */}
      <div className="relative md:sticky md:top-0 h-auto md:h-[100dvh] w-full flex flex-col justify-center py-12 md:py-0">
        <div
          className="max-w-[1200px] w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-0 max-h-full overflow-y-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Portrait */}
          <div className="w-full md:w-[45%] md:flex-shrink-0 relative h-[45vh] md:h-auto md:min-h-[600px] overflow-hidden img-zoom-wrap md:rounded-none founder-portrait-tablet tablet-founder-img">
            <img
              src="/images/founder-2.jpeg"
              alt="Aarushh Sahu — Founder of SMJMUN"
              className="img-zoom w-full h-full object-cover md:absolute md:inset-0"
              style={{ borderRadius: '0 20px 20px 0' }}
            />
          </div>

          {/* Text block */}
          <div className="flex-1 pt-12 md:pt-0 px-0 md:pl-16 lg:pl-20 max-w-full md:max-w-[600px] founder-text-tablet">
            {/* Accent bar + Label */}
            <div className="flex items-start gap-5 mb-8">
              <div
                className="flex-shrink-0 mt-1"
                style={{ width: '4px', height: '60px', backgroundColor: '#83090E' }}
              />
              <div>
                <span className="section-label block mb-2">Founder &amp; President</span>
                <h2
                  className="font-serif text-white"
                  style={{
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Aarushh Sahu
                </h2>
              </div>
            </div>

            {/* Bio (Progress range: 0.0 to 0.6) */}
            <AnimatedParagraph
              text="Aarushh Sahu founded SMJMUN with a single conviction: that world-class diplomatic education should not be the privilege of a few schools in a few cities. What began as one conference has grown into a national platform — 11,000+ delegates trained, 70+ national conferences delivered, 100+ institutional partners. As a delegate, he won 55+ Best Delegate awards and chaired 50+ committees across national and international circuits; as a founder, he builds the rooms he once competed in."
              progress={maxProgress}
              range={[0.0, 0.55]}
              className="mb-10 leading-[1.8]"
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '16px',
              }}
            />

            {/* Pull Quote (Progress range: 0.55 to 0.7) */}
            <div className="mb-10 pl-6" style={{ borderLeft: '3px solid #BB8B57' }}>
              <AnimatedParagraph
                text="“A journey of a thousand miles begins with a single step.”"
                progress={maxProgress}
                range={[0.55, 0.7]}
                isGold={true}
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(17px, 1.8vw, 22px)',
                  lineHeight: 1.4,
                  fontWeight: 400,
                }}
              />
            </div>

            {/* Mission (Progress range: 0.7 to 1.0) */}
            <AnimatedParagraph
              text="His mission extends beyond conferences — building institutional partnerships that embed diplomatic thinking into the fabric of Indian education."
              progress={maxProgress}
              range={[0.7, 1.0]}
              className="mb-12 leading-[1.75]"
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '15px',
              }}
            />

            {/* Social Icons (Static) */}
            <div className="flex gap-5 items-center">
              <a
                href="https://www.linkedin.com/in/theaarushsahu"
                aria-label="LinkedIn"
                className="text-white/40 hover:text-white/80 transition-opacity duration-300 flex items-center"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/theaarushhsahu?igsh=MXR6amRrYndvNnNvOA=="
                aria-label="Instagram"
                className="text-white/40 hover:text-white/80 transition-opacity duration-300 flex items-center"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              <a
                href="mailto:Info@smjmun.com"
                aria-label="Email"
                className="text-white/40 hover:text-white/80 transition-opacity duration-300 flex items-center"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}