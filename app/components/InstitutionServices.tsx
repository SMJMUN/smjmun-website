'use client';


import Image from 'next/image';
export default function InstitutionServices() {
  return (
    <section id="institutions" style={{ overflow: 'hidden' }}>
      {/* Opening Band — Deep Charcoal with cinematic image + overlapping panel */}
      <div
        style={{
          backgroundColor: '#83090e',
          position: 'relative',
          padding: '120px 0 0',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 8vw',
            position: 'relative',
          }}
        >
          {/* Large cinematic image */}
          <div
            style={{
              width: '80%',
              margin: '0 auto',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '16 / 9',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/institution.webp"
                alt="Leading educational institution partnering with SMJ MUN"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
               fill sizes="(max-width: 768px) 100vw, 50vw" />
            </div>

            {/* Overlapping content panel */}
            <div
              style={{
                position: 'relative',
                backgroundColor: '#ffffff',
                padding: 'clamp(32px, 4vw, 60px)',
                marginTop: '-60px',
                marginLeft: 'auto',
                maxWidth: '520px',
                zIndex: 2,
              }}
              className="inst-panel"
            >
              <span
                style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase' as const,
                  color: '#bb8b57',
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                For Institutions
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading), Georgia, serif',
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: '#042147',
                  marginBottom: '20px',
                }}
              >
                Building Future Diplomats, Negotiators &amp;&nbsp;Global&nbsp;Leaders.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  fontSize: '16px',
                  lineHeight: 1.75,
                  color: '#042147',
                  opacity: 0.7,
                  marginBottom: '28px',
                  maxWidth: '440px',
                }}
              >
                We partner with schools and universities to embed diplomatic thinking,
                leadership development, and global awareness into their academic ecosystem.
              </p>
              <a
                href="#contact"
                style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  color: '#83090e',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease',
                }}
              >
                Explore Services →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom padding for the charcoal band */}
        <div style={{ height: '80px' }} />
      </div>

      {/* Story Block 1 — School MUN Associations (Image Left, Text Right) */}
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '140px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0',
            flexWrap: 'wrap' as const,
          }}
        >
          {/* Image — 60% left, bleeds */}
          <div
            style={{
              flex: '0 0 58%',
              maxWidth: '58%',
              overflow: 'hidden',
            }}
            className="service-img"
          >
            <div style={{ aspectRatio: '4 / 3', overflow: 'hidden' }}>
              <Image
                src="/images/hero-1.webp"
                alt="School MUN Association session in progress"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
               fill sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>

          {/* Text panel overlapping image right edge */}
          <div
            style={{
              flex: '1',
              backgroundColor: '#ffffff',
              padding: 'clamp(32px, 4vw, 60px)',
              marginLeft: '-40px',
              marginTop: '60px',
              maxWidth: '480px',
              position: 'relative',
              zIndex: 2,
              boxShadow: '-8px 0 40px rgba(0,0,0,0.04)',
            }}
            className="service-text"
          >
            <span
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.25em',
                textTransform: 'uppercase' as const,
                color: '#bb8b57',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              01
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-heading), Georgia, serif',
                fontSize: 'clamp(28px, 3vw, 40px)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#042147',
                marginBottom: '20px',
                letterSpacing: '-0.01em',
              }}
            >
              School MUN
              <br />
              Associations
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#042147',
                opacity: 0.7,
                marginBottom: '32px',
                maxWidth: '400px',
              }}
            >
              We establish and manage dedicated MUN associations within schools —
              creating structured programs for debate, diplomacy, and critical thinking
              that integrate seamlessly into the academic calendar.
            </p>
            <a
              href="#contact"
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.05em',
                color: '#83090e',
                textDecoration: 'none',
              }}
            >
              → Explore
            </a>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 8vw' }}>
        <div style={{ width: '100%', height: '1px', backgroundColor: '#bb8b57', opacity: 0.2 }} />
      </div>

      {/* Story Block 2 — College MUN Associations (Image Right, Text Left) */}
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '140px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'row-reverse' as const,
            gap: '0',
            flexWrap: 'wrap' as const,
          }}
        >
          {/* Image — 60% right */}
          <div
            style={{
              flex: '0 0 58%',
              maxWidth: '58%',
              overflow: 'hidden',
            }}
            className="service-img"
          >
            <div style={{ aspectRatio: '4 / 3', overflow: 'hidden' }}>
              <Image
                src="/images/founder-2.jpeg"
                alt="College MUN Association delegates in committee session"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  
                  transition: 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
               fill sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>

          {/* Text panel overlapping image left edge — positioned higher for asymmetry */}
          <div
            style={{
              flex: '1',
              backgroundColor: '#ffffff',
              padding: 'clamp(32px, 4vw, 60px)',
              marginRight: '-40px',
              marginTop: '40px',
              maxWidth: '480px',
              position: 'relative',
              zIndex: 2,
              boxShadow: '8px 0 40px rgba(0,0,0,0.04)',
            }}
            className="service-text-reverse"
          >
            <span
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.25em',
                textTransform: 'uppercase' as const,
                color: '#bb8b57',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              02
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-heading), Georgia, serif',
                fontSize: 'clamp(28px, 3vw, 40px)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#042147',
                marginBottom: '20px',
                letterSpacing: '-0.01em',
              }}
            >
              College MUN
              <br />
              Associations
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#042147',
                opacity: 0.7,
                marginBottom: '32px',
                maxWidth: '400px',
              }}
            >
              We help universities build thriving MUN societies that attract top talent,
              foster interdisciplinary collaboration, and produce graduates prepared for
              careers in diplomacy, policy, and international relations.
            </p>
            <a
              href="#contact"
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.05em',
                color: '#83090e',
                textDecoration: 'none',
              }}
            >
              → Explore
            </a>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 8vw' }}>
        <div style={{ width: '100%', height: '1px', backgroundColor: '#bb8b57', opacity: 0.2 }} />
      </div>

      {/* Story Block 3 — Conference Execution (Image Left, Deep Charcoal text panel) */}
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '140px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0',
            flexWrap: 'wrap' as const,
          }}
        >
          {/* Image — 60% left */}
          <div
            style={{
              flex: '0 0 58%',
              maxWidth: '58%',
              overflow: 'hidden',
            }}
            className="service-img"
          >
            <div style={{ aspectRatio: '4 / 3', overflow: 'hidden' }}>
              <Image
                src="/images/hero-3.webp"
                alt="Full-scale conference execution by SMJ MUN"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
               fill sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>

          {/* Deep Charcoal text panel — variety from white panels */}
          <div
            style={{
              flex: '1',
              backgroundColor: '#83090e',
              padding: 'clamp(32px, 4vw, 60px)',
              marginLeft: '-40px',
              marginTop: '80px',
              maxWidth: '480px',
              position: 'relative',
              zIndex: 2,
            }}
            className="service-text"
          >
            <span
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.25em',
                textTransform: 'uppercase' as const,
                color: '#bb8b57',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              03
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-heading), Georgia, serif',
                fontSize: 'clamp(28px, 3vw, 40px)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#ffffff',
                marginBottom: '20px',
                letterSpacing: '-0.01em',
              }}
            >
              Conference
              <br />
              Execution
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '16px',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.75)',
                marginBottom: '32px',
                maxWidth: '400px',
              }}
            >
              End-to-end conference management — from agenda design and committee
              structuring to logistics, judging protocols, and post-conference
              analytics. Every detail executed to international standards.
            </p>
            <a
              href="#contact"
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.05em',
                color: '#ffffff',
                textDecoration: 'none',
              }}
            >
              → Explore
            </a>
          </div>
        </div>
      </div>

      {/* Responsive overrides */}
      <style jsx>{`
        @media (max-width: 768px) {
          .service-img,
          .inst-panel {
            flex: 0 0 100% !important;
            max-width: 100% !important;
          }
          .service-text,
          .service-text-reverse {
            margin-left: 0 !important;
            margin-right: 0 !important;
            margin-top: -24px !important;
            max-width: 100% !important;
            margin-inline: 20px !important;
          }
          .inst-panel {
            margin-left: 0 !important;
            margin-inline: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
