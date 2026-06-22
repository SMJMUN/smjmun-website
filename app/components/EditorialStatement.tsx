export default function EditorialStatement() {
  return (<section
  id="about"
  style={{
    backgroundColor: '#191816',
    padding: '80px 0',
    overflow: 'hidden',
  }}
>
  <div
    className="
      flex!
      flex-col!
      md:flex-row!
      items-center!
      justify-center!
      gap-10!
      md:gap-16!
      max-w-[1200px]!
      mx-auto!
      px-[5vw]!
    "
  >
    {/* Image */}
    <div
      className="
        w-full!
        md:w-[45%]!
        flex!
        justify-center!
      "
    >
      <img
        src="/images/perparestudent.jpeg"
        alt="Students participating in SMJ MUN"
        className="
          w-full!
          max-w-[500px]!
          h-auto!
          object-cover!
          block!
          rounded-xl
        "
      />
    </div>

    {/* Quote */}
    <div
      className="
        w-full!
        md:w-[55%]!
        text-center!
      "
    >
      {/* Gold Line */}
      <div
        className="
          w-20!
          h-[1px]!
          bg-[#bb8b57]!
          mx-auto!
          mb-8!
        "
      />

      <p
        style={{
          fontFamily: 'var(--font-heading), Georgia, serif',
          fontSize: 'clamp(24px, 4vw, 52px)',
          lineHeight: 1.3,
          fontWeight: 400,
          fontStyle: 'italic',
          // color: '#470404ff',
          letterSpacing: '-0.01em',
        }}
        className="text-charcoal"
      >
        &ldquo;We don&apos;t prepare students for conferences.
        <br />
        We prepare them for the world.&rdquo;
      </p>

      {/* Gold Line */}
      <div
        className="
          w-20!
          h-[1px]!
          bg-[#bb8b57]!
          mx-auto!
          mt-8!
        "
      />
    </div>
  </div>
</section>
  );
}
