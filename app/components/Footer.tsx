import { ArrowRight } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Institutions', href: '#institutions' },
    { label: 'Programs', href: '#leadership' },
    { label: 'Conferences', href: '#conferences' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
<footer className="bg-[#0A0A0A]  ! text-white overflow-hidden">
  {/* Top Border */}
 <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 lg:pt-20">

  {/* MOBILE */}
  <div className="lg:hidden">

    <div className="grid grid-cols-2 gap-10">

      {/* Conference */}
      <div>
        <h4 className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)] mb-5">
          Conference
        </h4>

        <ul className="space-y-3">
          {["Committees", "Agenda", "Secretariat", "Schedule", "Venue"].map(
            (item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Delegates */}
      <div>
        <h4 className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)] mb-5">
          Delegates
        </h4>

        <ul className="space-y-3">
          {[
            "Registration",
            "Delegate Guide",
            "Code of Conduct",
            "Resources",
          ].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Organization */}
    <div className="mt-12">
      <h4 className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)] mb-5">
        Organization
      </h4>

      <ul className="grid grid-cols-2 gap-y-3">
        {["About SMJ MUN", "Partners", "Sponsors", "Contact"].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Social */}
    <div className="flex justify-center gap-6 text-lg mt-12">
      {[FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube].map(
        (Icon, index) => (
          <a
            key={index}
            href="#"
            className="text-white/60 hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            <Icon />
          </a>
        )
      )}
    </div>

    {/* Newsletter */}
    <div className="mt-12">
      <p className="text-center text-xs uppercase tracking-[0.25em] text-[var(--color-gold)] mb-4">
        Stay Updated
      </p>

      <div className="flex w-full border border-white/15">
        <input
          type="email"
          placeholder="Enter your email"
          className="
            flex-1
            min-w-0
            bg-transparent
            px-4
            py-3
            outline-none
            text-sm
            placeholder:text-white/40
          "
        />

        <button className="px-5 border-l border-white/15 hover:bg-white hover:text-black transition-all duration-300">
          →
        </button>
      </div>
    </div>

    {/* Logo */}
    <div className="flex justify-center mt-10">
      <img
        src="/images/smg-mun-logo.png"
        alt="SMJMUN"
        className="w-20 opacity-80"
      />
    </div>
  </div>

  {/* DESKTOP */}
  <div className="hidden lg:grid lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-12">

    {/* Conference */}
    <div>
      <h4 className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)] mb-6">
        Conference
      </h4>

      <ul className="space-y-4">
        {["Committees", "Agenda", "Secretariat", "Schedule", "Venue"].map(
          (item) => (
            <li key={item}>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>
    </div>

    {/* Delegates */}
    <div>
      <h4 className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)] mb-6">
        Delegates
      </h4>

      <ul className="space-y-4">
        {[
          "Registration",
          "Delegate Guide",
          "Code of Conduct",
          "Resources",
        ].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Organization */}
    <div>
      <h4 className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)] mb-6">
        Organization
      </h4>

      <ul className="space-y-4">
        {["About SMJ MUN", "Partners", "Sponsors", "Contact"].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Right Side */}
    <div className="border-l border-white/10 pl-12">

      <div className="flex gap-5 text-xl mb-8">
        {[FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube].map(
          (Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-white/60 hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              <Icon />
            </a>
          )
        )}
      </div>

      <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-gold)] mb-4">
        Stay Updated
      </p>

      <div className="flex border border-white/15">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 min-w-0 bg-transparent px-4 py-3 outline-none placeholder:text-white/40"
        />

        <button className="px-5 border-l border-white/15 hover:bg-white hover:text-black transition-all duration-300">
          <ArrowRight />
        </button>
      </div>

      <img
        src="/images/smg-mun-logo.png"
        alt="SMJMUN"
        className="w-24 mt-12 opacity-80"
      />
    </div>
  </div>

  {/* Bottom */}
  <div className="mt-16 pt-8 border-t border-white/10">
    <p className="text-center text-sm text-white/50">
      © 2026 SMJMUN. All Rights Reserved.
    </p>
  </div>

  {/* Watermark */}
  <div className="relative h-20 sm:h-24 md:h-32 lg:h-40 overflow-hidden">
    <h2
      className="absolute left-1/2 -translate-x-1/2 top-0 text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] xl:text-[15rem] font-display font-bold tracking-tighter leading-[0.85] select-none whitespace-nowrap"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.015) 70%, transparent 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      SMJMUN
    </h2>
  </div>

</div>
</footer>  );
}
