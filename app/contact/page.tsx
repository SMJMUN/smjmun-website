'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';

// ─── Contact details — edit these ────────────────────────────────────────────
const PHONE_NUMBER = '+91 93024 70974'; // display / tel: format
const PHONE_DISPLAY = '+91 93024 70974';
const EMAIL = 'info@smjmun.com';
const PHONE_DIGITS = PHONE_NUMBER.replace(/\D/g, ''); // strip everything except digits → "919302470974"
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello SMJMUN! I would like to know more about your programs and conferences.'
);
const WHATSAPP_URL = `https://wa.me/${PHONE_DIGITS}?text=${WHATSAPP_MESSAGE}`;
const CALL_URL = `tel:${PHONE_NUMBER}`;
const MAIL_URL = `mailto:${EMAIL}`;


// ─── Animation variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Contact Card ─────────────────────────────────────────────────────────────
function ContactCard({
  href,
  icon,
  label,
  value,
  description,
  accent,
  delay = 0,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
  accent: string;
  delay?: number;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col gap-5 p-8 rounded-2xl border border-white/[0.07] bg-[#111111] hover:border-[#BB8B57]/40 transition-all duration-500 cursor-pointer overflow-hidden"
    >
      {/* Subtle corner glow on hover */}
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none"
        style={{ backgroundColor: accent + '18' }}
      />

      {/* Top row: icon + arrow */}
      <div className="flex items-start justify-between">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 transition-colors duration-300 group-hover:border-[#BB8B57]/40"
          style={{ backgroundColor: accent + '15' }}
        >
          <span style={{ color: accent }}>{icon}</span>
        </div>
        <ArrowRight
          className="w-4 h-4 text-white/20 group-hover:text-[#BB8B57] group-hover:translate-x-1 transition-all duration-300"
          strokeWidth={1.5}
        />
      </div>

      {/* Label */}
      <span className="section-label" style={{ color: accent }}>
        {label}
      </span>

      {/* Value */}
      <p className="font-serif text-white text-xl font-semibold leading-tight tracking-tight">
        {value}
      </p>

      {/* Description */}
      <p className="text-[#7A7A7A] text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
        {description}
      </p>
    </motion.a>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">

        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-30"
          style={{ background: 'radial-gradient(circle, #BB8B57 0%, transparent 70%)' }}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "url('/images/noise.png')" }}
        />

        <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label mb-6"
          >
            Get In Touch
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="font-serif text-white leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(40px, 7vw, 88px)', fontWeight: 700 }}
          >
            We&apos;re here to{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #BB8B57 0%, #e8b97a 50%, #BB8B57 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              help.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="text-[#7A7A7A] max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body), system-ui, sans-serif', fontSize: '16px' }}
          >
            Have questions about our conferences, programs, or registrations?
            Reach out through any channel below — our team typically responds within a few hours.
          </motion.p>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-10 origin-center"
            style={{ width: '60px', height: '1px', backgroundColor: '#BB8B57' }}
          />
        </div>
      </section>

      {/* ── Contact Cards ─────────────────────────────────────────────────── */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* WhatsApp */}
          <ContactCard
            href={WHATSAPP_URL}
            icon={<MessageCircle className="w-5 h-5" strokeWidth={1.6} />}
            label="WhatsApp"
            value={PHONE_DISPLAY}
            description="Tap to open WhatsApp. A pre-filled message will be ready — just hit send and we'll get back to you shortly."
            accent="#25D366"
            delay={0}
          />

          {/* Phone Call */}
          <ContactCard
            href={CALL_URL}
            icon={<Phone className="w-5 h-5" strokeWidth={1.6} />}
            label="Call Us"
            value={PHONE_DISPLAY}
            description="Prefer to talk? Give us a direct call. Available Monday – Saturday, 10 AM – 6 PM IST."
            accent="#BB8B57"
            delay={0.1}
          />

          {/* Email */}
          <ContactCard
            href={MAIL_URL}
            icon={<Mail className="w-5 h-5" strokeWidth={1.6} />}
            label="Email"
            value={EMAIL}
            description="Send us a detailed enquiry and we'll respond with a comprehensive reply within 24 hours."
            accent="#6e8ef7"
            delay={0.2}
          />
        </div>
      </section>

      {/* ── WhatsApp Highlight Banner ──────────────────────────────────────── */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.01 }}
            className="group relative flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl overflow-hidden border border-[#25D366]/20 bg-[#111111] p-8 md:p-10 cursor-pointer transition-all duration-500 hover:border-[#25D366]/50"
          >
            {/* Green glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(37,211,102,0.07), transparent 70%)' }}
            />

            <div className="flex items-center gap-5 relative">
              {/* WhatsApp bubble icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#25D366' }}>
                <MessageCircle className="w-7 h-7 text-white" strokeWidth={1.8} />
              </div>

              <div>
                <p className="section-label mb-1" style={{ color: '#25D366' }}>
                  Fastest Response
                </p>
                <h2
                  className="font-serif text-white font-bold leading-tight"
                  style={{ fontSize: 'clamp(18px, 2.5vw, 26px)' }}
                >
                  Message us on WhatsApp
                </h2>
                <p
                  className="text-[#7A7A7A] text-sm mt-1"
                  style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  A message is pre-written for you — just open and send.
                </p>
              </div>
            </div>

            {/* CTA pill */}
            <div
              className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold tracking-wide uppercase transition-all duration-300 group-hover:-translate-y-0.5"
              style={{ backgroundColor: '#25D366', fontFamily: 'var(--font-body), system-ui, sans-serif' }}
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2} />
              Open WhatsApp
            </div>
          </motion.a>
        </div>
      </section>

      {/* ── Footer divider ─────────────────────────────────────────────────── */}
      <div className="w-full h-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />
    </main>
  );
}
