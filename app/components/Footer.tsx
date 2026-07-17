"use client";

import Image from 'next/image';
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import Link from "next/link";

const conferenceLinks = [
  { label: "Committees", href: "/conferences" },
  { label: "Agenda", href: "/conferences" },
  { label: "Secretariat", href: "/conferences" },
  { label: "Schedule", href: "/conferences" },
  { label: "Venue", href: "/conferences" },
];

const delegateLinks = [
  // { label: "Registration", href: "/conferences" },
  { label: "Delegate Training", href: "/programs/training-cell" },
  { label: "School MUN Association", href: "/programs/school-mun-association" },
  { label: "College MUN Association", href: "/programs/college-mun-association" },
  // { label: "Resources",      href: "/resources"   },
];

const organizationLinks = [
  { label: "About SMJMUN", href: "/about" },
  { label: "Partners", href: "/partnerships" },
  { label: "Sponsors", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  // { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/theaarushsahu", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/smjmun", label: "Instagram" },
  // { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
];

function FooterNewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "already" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source: "FOOTER" }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.message || "Something went wrong.");
        return;
      }

      if (data.alreadySubscribed) {
        setStatus("already");
        setMessage(data.message);
      } else {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (status === "success" || status === "already") {
    return (
      <p
        className="text-sm text-[#BB8B57] mt-1"
        style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
      >
        {message}
      </p>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex border border-[rgba(255,255,255,0.08)] rounded-[16px] overflow-hidden"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          aria-label="Email address"
          disabled={status === "loading"}
          className="
            flex-1 min-w-0
            bg-transparent px-4 py-3
            outline-none text-sm text-white
            placeholder:text-[#7A7A7A]
            disabled:opacity-50
          "
          style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
        />
        <button
          type="submit"
          aria-label="Subscribe to newsletter"
          disabled={status === "loading"}
          className="px-5 border-l border-[rgba(255,255,255,0.08)] text-white hover:bg-[#BB8B57] hover:border-[#BB8B57] transition-all duration-300 disabled:opacity-50"
        >
          {status === "loading" ? (
            <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <ArrowRight size={16} />
          )}
        </button>
      </form>
      {status === "error" && (
        <p
          className="text-xs text-red-400 mt-2"
          style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
        >
          {message}
        </p>
      )}
    </>
  );
}

export default function Footer() {
  const scrollToHero = () => {
    document
      .getElementById("hero")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-[#0A0A0A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 lg:pt-20 footer-tablet-pt">

        {/* MOBILE */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4
                className="text-xs uppercase tracking-[0.22em] text-[#BB8B57] mb-5"
                style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                Conference
              </h4>
              <ul className="space-y-3">
                {conferenceLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[#B8B8B8] hover:text-[#BB8B57] transition-colors duration-300 text-sm"
                      style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="text-xs uppercase tracking-[0.22em] text-[#BB8B57] mb-5"
                style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
              >
                Programs
              </h4>
              <ul className="space-y-3">
                {delegateLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[#B8B8B8] hover:text-[#BB8B57] transition-colors duration-300 text-sm"
                      style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h4
              className="text-xs uppercase tracking-[0.22em] text-[#BB8B57] mb-5"
              style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              Organization
            </h4>
            <ul className="grid grid-cols-2 gap-y-3">
              {organizationLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#B8B8B8] hover:text-[#BB8B57] transition-colors duration-300 text-sm"
                    style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex justify-center gap-6 text-base mt-12">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-[#7A7A7A] hover:text-[#BB8B57] hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          {/* Newsletter */}
          <div className="mt-12">
            <p
              className="text-center text-[10px] uppercase tracking-[0.28em] text-[#BB8B57] mb-4"
              style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              Stay Updated
            </p>
            <FooterNewsletterForm />
          </div>

          {/* Logo */}
          <div className="flex justify-center mt-10">
            <Image src="/images/SMJMUNLOGOFILE.png" alt="SMJMUN" className="w-20 " width={80} height={80} />
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:grid lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-12 tablet-footer-desktop">
          <div>
            <h4
              className="text-xs uppercase tracking-[0.22em] text-[#BB8B57] mb-6"
              style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              Conference
            </h4>
            <ul className="space-y-4">
              {conferenceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#B8B8B8] hover:text-[#BB8B57] transition-colors duration-300 text-sm"
                    style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-xs uppercase tracking-[0.22em] text-[#BB8B57] mb-6"
              style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              Programs
            </h4>
            <ul className="space-y-4">
              {delegateLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#B8B8B8] hover:text-[#BB8B57] transition-colors duration-300 text-sm"
                    style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-xs uppercase tracking-[0.22em] text-[#BB8B57] mb-6"
              style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              Organization
            </h4>
            <ul className="space-y-4">
              {organizationLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#B8B8B8] hover:text-[#BB8B57] transition-colors duration-300 text-sm"
                    style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className="border-l border-[rgba(255,255,255,0.08)] pl-12">
            <div className="flex gap-5 text-lg mb-8">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="text-[#7A7A7A] hover:text-[#BB8B57] hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

            <p
              className="text-[10px] uppercase tracking-[0.28em] text-[#BB8B57] mb-4"
              style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              Stay Updated
            </p>

            <FooterNewsletterForm />
            <Link href="/" onClick={scrollToHero} >
              <Image
                src="/images/SMJMUNLOGOFILE.png"
                alt="SMJMUN"
                className="w-24 mt-12 opacity-60"
                width={80} height={80} />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.08)]">
          <p
            className="text-center text-sm text-[#7A7A7A]"
            style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
          >
            © {new Date().getFullYear()} SMJMUN. All Rights Reserved.
          </p>
        </div>

        {/* Watermark */}
        <div className="relative h-20 sm:h-24 md:h-32 lg:h-40 overflow-hidden">
          <h2
            className="absolute left-1/2 -translate-x-1/2 top-0 font-serif font-bold tracking-tighter leading-[0.85] select-none whitespace-nowrap"
            style={{
              fontSize: 'clamp(5rem, 14vw, 15rem)',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0.01) 70%, transparent 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            SMJMUN
          </h2>
        </div>

      </div>
    </footer>
  );
}
