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
<footer className="bg-[#18171C] text-white">
  {/* Top Border */}
  <div className="h-px bg-[var(--color-gold)]" />

  <div className="max-w-7xl mx-auto px-8 py-20">
    <div className="grid lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr] gap-12">
    

      {/* Conference */}
      <div>
        <h4 className="text-xl mb-6 text-gold font-medium">
          Conference
        </h4>

        <ul className="space-y-4 text-white/70">
          <li><a href="#">Committees</a></li>
          <li><a href="#">Agenda</a></li>
          <li><a href="#">Secretariat</a></li>
          <li><a href="#">Schedule</a></li>
          <li><a href="#">Venue</a></li>
        </ul>
      </div>

      {/* Delegates */}
      <div>
        <h4 className="text-xl  text-gold mb-6 #18171C font-medium">
          Delegates
        </h4>

        <ul className="space-y-4  text-white/70">
          <li><a href="#">Registration</a></li>
          <li><a href="#">Delegate Guide</a></li>
          <li><a href="#">Code of Conduct</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
      </div>

      {/* Organization */}
      <div>
        <h4 className="text-xl text-gold mb-6 font-medium">
          Organization
        </h4>

        <ul className="space-y-4 text-white/70">
          <li><a href="#">About SMJ MUN</a></li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">Sponsors</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="lg:border-l lg:border-white/10 lg:pl-12">
        <div className="flex gap-5 text-xl mb-8">
          <FaFacebookF />
          <FaLinkedinIn />
          <FaInstagram />
          <FaYoutube />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
            Stay Updated
          </p>

          <div className="flex border border-white/20">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-4 py-3 outline-none"
            />

            <button className="px-5 border-l border-white/20">
              →
            </button>
          </div>
        </div>

        <div className="mt-12">
          <img
            src="/images/smg-mun-logo.png"
            alt=""
            className="w-24 opacity-80"
          />
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="mt-16 pt-8  border-white/10 flex flex-col lg:flex-row justify-center gap-4">
      <p className="text-white/50 text-sm">
        © 2026 SMJMUN. All Rights Reserved.
      </p>
    </div>
  </div>
</footer>  );
}
