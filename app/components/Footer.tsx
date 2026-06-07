export default function Footer() {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Institutions', href: '#institutions' },
    { label: 'Programs', href: '#leadership' },
    { label: 'Conferences', href: '#conferences' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative overflow-hidden! bg-[var(--color-navy)]! text-white!">
  {/* Top Gold Line */}
  <div className="h-[2px] w-full bg-[var(--color-gold)]!" />

  {/* Decorative Background */}
  <div className="absolute! inset-0! opacity-[0.04]!">
    <img
      src="/images/floral-left.svg"
      alt=""
      className="absolute left-0! bottom-0! w-[250px]!"
    />

    <img
      src="/images/floral-right.svg"
      alt=""
      className="absolute right-0! top-0! w-[250px]!"
    />
  </div>

  <div className="relative z-10! mx-auto max-w-[1500px]! px-8! py-24! lg:px-20!">
    {/* Main Grid */}
    <div className="grid gap-16! lg:grid-cols-[1.5fr_1fr_1fr_1fr]!">
      {/* Brand */}
      <div>
        <img
          src="/images/smg-mun-logo.png"
          alt="SMJ MUN"
          className="mb-8 w-[140px]"
        />

        <h3
          className="mb-4! text-2xl! font-medium! text-white!"
          style={{
            fontFamily:
              'var(--font-heading), Georgia, Times New Roman, serif',
          }}
        >
          SMJ MUN
        </h3>

        <p className="max-w-md! leading-relaxed! text-white/70!">
          Shri Seth Mangilal Ji Sahu International Model United Nations
        </p>

        <p className="mt-5 text-[13px]! uppercase! tracking-[0.25em]! text-[var(--color-gold)]! ">
          Diplomacy • Leadership • Global Citizenship
        </p>
      </div>

      {/* Navigation */}
      <div>
        <h4 className="mb-6! text-sm! uppercase! tracking-[0.2em]! text-[var(--color-gold)]!">
          Navigation
        </h4>

        <ul className="space-y-4! text-white/75!">
          <li>
            <a href="#about" className="transition hover:text-white!">
              About
            </a>
          </li>

          <li>
            <a href="#committees" className="transition hover:text-white!">
              Committees
            </a>
          </li>

          <li>
            <a href="#secretariat" className="transition hover:text-white!">
              Secretariat
            </a>
          </li>

          <li>
            <a href="#conference" className="transition hover:text-white!">
              Conference
            </a>
          </li>
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h4 className="mb-6! text-sm! uppercase! tracking-[0.2em]! text-[var(--color-gold)]!">
          Resources
        </h4>

        <ul className="space-y-4! text-white/75!">
          <li>
            <a href="#" className="transition hover:text-white!">
              Registration
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-white! ">
              Delegate Guide
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-white!">
              Partners
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-white!">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="mb-6! text-sm! uppercase! tracking-[0.2em]! text-[var(--color-gold)]!">
          Contact
        </h4>

        <div className="space-y-4! text-white!">
          <p className="   text-white!">contact@smjmun.org</p>

          <p className="   text-white!">+91 XXXXX XXXXX</p>

          <p className="   text-white!">
            Dewas,
            <br />
            Madhya Pradesh,
            <br />
            India
          </p>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="my-14! h-px! bg-white/10!" />

    {/* Bottom */}
    <div className="flex flex-col! gap-8! lg:flex-row! lg:items-center!  lg:justify-between!">
      <p className="text-sm! text-white/55!">
        © 2026 SMJ MUN. All Rights Reserved.
      </p>

      <div className="flex items-center! gap-6!">
        <a
          href="#"
          className="text-white/60! transition! hover:text-[var(--color-gold)]!"
        >
          Instagram
        </a>

        <a
          href="#"
          className="text-white/60! transition! hover:text-[var(--color-gold)]!"
        >
          LinkedIn
        </a>

        <a
          href="#"
          className="text-white/60! transition! hover:text-[var(--color-gold)]!"
        >
          YouTube
        </a>

        <a
          href="#"
          className="text-white/60! transition! hover:text-[var(--color-gold)]! "
        >
          Facebook
        </a>
      </div>
    </div>
  </div>
</footer>
  );
}
