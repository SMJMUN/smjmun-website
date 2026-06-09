export default function EditorialStatement() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: '#f8f8f8',
        padding: '40px 0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          // maxWidth: '760px',
          alignItems: 'center',
          margin: '0 auto',
          gap: '60px',
          textAlign: 'center' as const,
          padding: '0 5vw',
        }}
      >
        {/* Gold rule above */}
        <div
          style={{
            width: '80px',
            height: '1px',
            backgroundColor: '#bb8b57',
            margin: '0 auto 60px',
          }}
        />

           <div
          style={{
            flex: '0 0 45%',
            maxWidth: '45%',
            position: 'relative',
            minHeight: '600px',
            overflow: 'hidden',
            
          }}
          className="founder-portrait flex! items-center! overflow-hidden! justify-center! md:flex-row! flex-col"
        >
          <img
            src="/images/perparestudent.jpeg"
            alt="Aarush Sahu — Founder of SMJ MUN"
            style={{
              width: '100%',
              // height: '100%',
              objectFit: 'cover',
              display: 'block',
              position: 'absolute',
              inset: 0,
              height: '80%',
            }}
          />
        </div>

        {/* Editorial quote */}
        <p
          style={{
            fontFamily: 'var(--font-heading), Georgia, serif',
            fontSize: 'clamp(28px, 4vw, 52px)',
            lineHeight: 1.3,
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#042147',
            letterSpacing: '-0.01em',
          }}
        >
          &ldquo;We don&apos;t prepare students for conferences.
          <br />
          We prepare them for the world.&rdquo;
        </p>

        {/* Gold rule below */}
        <div
          style={{
            width: '80px',
            height: '1px',
            backgroundColor: '#bb8b57',
            margin: '30px auto 0',
          }}
        />
      </div>
    </section>
  );
}
