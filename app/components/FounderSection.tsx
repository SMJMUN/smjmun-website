'use client';

export default function FounderSection() {
  return (
    <section
      id="founder"
      style={{
        backgroundColor: '#0A0A0A',
        padding: '160px 0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          maxWidth: '1200px',
          margin: '0 auto',
          gap: '0',
          flexWrap: 'wrap' as const,
        }}
      >
        {/* Portrait — bleeds to left edge */}
        <div
          style={{
            flex: '0 0 45%',
            maxWidth: '45%',
            position: 'relative',
            minHeight: '600px',
            overflow: 'hidden',
          }}
          className="founder-portrait"
        >
          <img
            src="/images/founder-2.jpeg"
            alt="Aarush Sahu — Founder of SMJ MUN"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              position: 'absolute',
              inset: 0,
            }}
            className="border border-white/10 border-radius-lg rounded-md"   
          />
        </div>

        {/* Text Block — right side, offset from top */}
        <div
          style={{
            flex: '1',
            paddingLeft: 'clamp(40px, 5vw, 80px)',
            paddingRight: '8vw',
            paddingTop: '80px',
            maxWidth: '520px',
          }}
          className="founder-text"
        >
          {/* Deep Charcoal accent bar + Label */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '24px' }}>
            <div
              style={{
                width: '4px',
                height: '60px',
                backgroundColor: '#83090e',
                flexShrink: 0,
                marginTop: '4px',
              }}
            />
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase' as const,
                  color: '#bb8b57',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                Founder
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading), Georgia, serif',
                  fontSize: 'clamp(36px, 4vw, 48px)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: '#ffffffff',
                  letterSpacing: '-0.02em',
                }}
              >
                Aarush Sahu
              </h2>
            </div>
          </div>

          {/* Bio */}
          <p
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: '16px',
              lineHeight: 1.8,
              color: '#AEADAC',
              opacity: 0.8,
              marginBottom: '40px',
            }}
          >
            A visionary leader who founded SMJ MUN with a singular mission: to democratize
            access to world-class diplomatic education across India. Under his leadership,
            SMJ MUN has grown from a single conference to India&apos;s largest Model United
            Nations platform, training over 11,000 delegates across 70+ national and 10+
            international conferences.
          </p>

          {/* Pull Quote */}
          <div
            style={{
              borderLeft: '3px solid #bb8b57',
              paddingLeft: '24px',
              marginBottom: '40px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-heading), Georgia, serif',
                fontSize: 'clamp(18px, 2vw, 24px)',
                lineHeight: 1.4,
                fontStyle: 'italic',
                color: '#AEADAC',
                fontWeight: 400,
              }}
            >
              &ldquo;Every young person deserves the opportunity to sit at the table
              where decisions are made — and the confidence to speak when they get there.&rdquo;
            </p>
          </div>

          {/* Mission */}
          <p
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: '15px',
              lineHeight: 1.75,
              color: '#AEADAC',
              opacity: 0.7,
              marginBottom: '48px',
            }}
          >
            His mission extends beyond conferences — building institutional partnerships
            that embed diplomatic thinking into the fabric of Indian education.
          </p>

          {/* Social Icons — monochrome, small */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/theaarushsahu"
              aria-label="LinkedIn"
              style={{
                opacity: 0.4,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'center',
              }}
              className='text-white'
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.8'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.4'; }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/theaarushhsahu?igsh=MXR6amRrYndvNnNvOA=="
              aria-label="Instagram"
              style={{
                opacity: 0.4,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'center',
              }}
              className='text-white'

              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.8'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.4'; }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            {/* Email */}
            <a
              href="Info@smjmun.com"
              aria-label="Email"
              style={{
                opacity: 0.4,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'center',
              }}
              className='text-white'

              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.8'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.4'; }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Responsive override */}
      <style jsx>{`
        @media (max-width: 768px) {
          .founder-portrait {
            flex: 0 0 100% !important;
            max-width: 100% !important;
            min-height: 400px !important;
          }
          .founder-text {
            padding: 48px 24px 0 !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
