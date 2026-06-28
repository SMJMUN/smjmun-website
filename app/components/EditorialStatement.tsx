export default function EditorialStatement() {
  return (
    <section
      id="about"
      className="bg-[#0A0A0A] py-24 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-[1200px] mx-auto px-[5vw]">

        {/* Image */}
        <div className="w-full md:w-[45%] flex justify-center">
          <div className="img-zoom-wrap w-full max-w-[500px]">
            <img
              src="/images/perparestudent.jpeg"
              alt="Students participating in SMJ MUN"
              className="img-zoom w-full h-auto object-cover block"
            />
          </div>
        </div>

        {/* Quote */}
        <div className="w-full md:w-[55%] text-center">
          {/* Gold Line */}
          <div className="w-16 h-px bg-[#BB8B57] mx-auto mb-8" />

          <p
            className="font-serif italic text-white"
            style={{
              fontSize: 'clamp(22px, 3.5vw, 48px)',
              lineHeight: 1.35,
              fontWeight: 400,
              letterSpacing: '-0.01em',
            }}
          >
            &ldquo;We don&apos;t prepare students for conferences.
            <br />
            We prepare them for the world.&rdquo;
          </p>

          {/* Attribution */}
          <p
            className="mt-6 text-[#7A7A7A] text-sm tracking-[0.15em] uppercase"
            style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
          >
            — Aarush Sahu, Founder
          </p>

          {/* Gold Line */}
          <div className="w-16 h-px bg-[#BB8B57] mx-auto mt-8" />
        </div>
      </div>
    </section>
  );
}
