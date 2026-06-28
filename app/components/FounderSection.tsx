'use client';

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="bg-[#0A0A0A] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-0">

        {/* Portrait */}
        <div className="w-full md:w-[45%] md:flex-shrink-0 relative min-h-[400px] md:min-h-[600px] overflow-hidden img-zoom-wrap md:rounded-none">
          <img
            src="/images/founder-2.jpeg"
            alt="Aarush Sahu — Founder of SMJ MUN"
            className="img-zoom absolute inset-0 w-full h-full object-cover"
            style={{ borderRadius: '0 20px 20px 0' }}
          />
        </div>

        {/* Text block */}
        <div
          className="flex-1 pt-12 md:pt-0 px-0 md:pl-16 lg:pl-20 max-w-full md:max-w-[600px]"
        >
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
                Aarush Sahu
              </h2>
            </div>
          </div>

          {/* Bio */}
          <p
            className="text-[#B8B8B8] mb-10 leading-[1.8]"
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: '16px',
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
            className="mb-10 pl-6"
            style={{ borderLeft: '3px solid #BB8B57' }}
          >
            <p
              className="font-serif italic text-[#BB8B57]"
              style={{
                fontSize: 'clamp(17px, 1.8vw, 22px)',
                lineHeight: 1.4,
                fontWeight: 400,
              }}
            >
              &ldquo;A Journey Of Thousand Miles.&rdquo;
            </p>
          </div>

          {/* Mission */}
          <p
            className="text-[#7A7A7A] mb-12 leading-[1.75]"
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: '15px',
            }}
          >
            His mission extends beyond conferences — building institutional partnerships
            that embed diplomatic thinking into the fabric of Indian education.
          </p>

          {/* Social Icons */}
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
    </section>
  );
}
