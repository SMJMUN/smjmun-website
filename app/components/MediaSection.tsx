'use client';


import Image from 'next/image';
export default function MediaSection() {
  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: '160px 0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 8vw',
        }}
      >
        {/* Section Header */}
        <div style={{ marginBottom: '60px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading), Georgia, serif',
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#042147',
            }}
          >
            In The Press
          </h2>
        </div>

        {/* Magazine Editorial Grid */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
            flexWrap: 'wrap' as const,
          }}
        >
          {/* Dominant Story — 60% */}
          <div
            style={{
              flex: '1 1 55%',
              minWidth: '320px',
              cursor: 'pointer',
            }}
            className="media-item"
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '3 / 2',
                overflow: 'hidden',
                position: 'relative',
                marginBottom: '24px',
              }}
            >
              <Image
                src="/images/hero-1.webp"
                alt="SMJ MUN featured in national media"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
               fill sizes="(max-width: 768px) 100vw, 50vw" />
              {/* Overlapping headline bar */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-1px',
                  left: '0',
                  right: '30%',
                  backgroundColor: '#042147',
                  padding: '20px 28px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase' as const,
                    color: '#bb8b57',
                  }}
                >
                  Featured · December 2024
                </span>
              </div>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-heading), Georgia, serif',
                fontSize: 'clamp(22px, 2.5vw, 30px)',
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#042147',
                marginBottom: '12px',
                letterSpacing: '-0.01em',
              }}
            >
              How SMJ MUN Is Redefining Diplomatic Education Across India
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '15px',
                lineHeight: 1.65,
                color: '#042147',
                opacity: 0.6,
                maxWidth: '520px',
              }}
            >
              An in-depth look at how one institution is building the infrastructure
              for the next generation of global leaders.
            </p>
          </div>

          {/* Secondary Stories — 40%, stacked */}
          <div
            style={{
              flex: '1 1 35%',
              minWidth: '280px',
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '40px',
            }}
          >
            {/* Story 2 */}
            <div style={{ cursor: 'pointer' }} className="media-item">
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  overflow: 'hidden',
                  marginBottom: '16px',
                }}
              >
                <Image
                  src="/images/training.webp"
                  alt="Delegate training workshop"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
                  }}
                 fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase' as const,
                  color: '#bb8b57',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                Education · October 2024
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-heading), Georgia, serif',
                  fontSize: 'clamp(18px, 2vw, 22px)',
                  fontWeight: 700,
                  lineHeight: 1.25,
                  color: '#042147',
                  letterSpacing: '-0.01em',
                }}
              >
                11,000 Delegates and Counting: The Rise of India&apos;s Largest MUN Platform
              </h3>
            </div>

            {/* Gold divider */}
            <div style={{ width: '60px', height: '1px', backgroundColor: '#bb8b57', opacity: 0.3 }} />

            {/* Story 3 */}
            <div style={{ cursor: 'pointer' }} className="media-item">
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  overflow: 'hidden',
                  marginBottom: '16px',
                }}
              >
                <Image
                  src="/images/hero-3.webp"
                  alt="International conference coverage"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
                  }}
                 fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase' as const,
                  color: '#bb8b57',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                International · August 2024
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-heading), Georgia, serif',
                  fontSize: 'clamp(18px, 2vw, 22px)',
                  fontWeight: 700,
                  lineHeight: 1.25,
                  color: '#042147',
                  letterSpacing: '-0.01em',
                }}
              >
                From Delhi to Dubai: SMJ MUN&apos;s International Expansion
              </h3>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .media-item:hover img {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
}
