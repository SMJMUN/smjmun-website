'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  MapPin,
  Plus,
  GraduationCap,
  School,
  Users,
  Briefcase,
  UserCheck,
  Building2,
} from 'lucide-react';

// ─── Contact details — edit these ────────────────────────────────────────────
const PHONE_NUMBER = '+91 93024 70974';
const PHONE_DISPLAY = '+91 93024 70974';
const EMAIL = 'info@smjmun.com';
const PHONE_DIGITS = PHONE_NUMBER.replace(/\D/g, '');
const ADDRESS_LINE_1 = 'SMJMUN Secretariat';
const ADDRESS_LINE_2 = 'Update with your full office address, City, State, PIN';
const MAPS_URL = 'https://maps.google.com';

function waLink(message: string) {
  return `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(message)}`;
}

const WHATSAPP_URL = waLink('Hello SMJMUN! I would like to know more about your programs and conferences.');
const CALL_URL = `tel:${PHONE_NUMBER}`;
const MAIL_URL = `mailto:${EMAIL}`;

const BODY_FONT = { fontFamily: 'var(--font-body), system-ui, sans-serif' };
const GOLD = '#BB8B57';

// ─── "I am a..." quick paths ──────────────────────────────────────────────────
const AUDIENCES = [
  { label: 'Student', icon: GraduationCap, message: "Hi SMJMUN, I'm a student and I'd like to know more about registering for a conference." },
  { label: 'Teacher / Faculty', icon: UserCheck, message: "Hi SMJMUN, I'm a faculty advisor and I'd like to know more about bringing my students to a conference." },
  { label: 'School', icon: School, message: "Hi SMJMUN, I'm reaching out on behalf of a school interested in partnering or attending." },
  { label: 'Delegate', icon: Users, message: "Hi SMJMUN, I'm a delegate and I have a question about an upcoming conference." },
  { label: 'Executive Board', icon: Briefcase, message: "Hi SMJMUN, I'm interested in applying for an Executive Board position." },
  { label: 'Sponsor / Partner', icon: Building2, message: "Hi SMJMUN, I'm interested in exploring a sponsorship or partnership opportunity." },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'How do I register for a conference?',
    a: 'Registration opens on our Conferences page for each upcoming session. Select your conference, choose your delegate type, and complete the registration form. You\u2019ll receive a confirmation email within 24 hours.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept UPI, net banking, major debit/credit cards, and bank transfers for school or group registrations. Payment links are shared after your registration is confirmed.',
  },
  {
    q: 'Do you offer group rates for schools?',
    a: 'Yes. Schools registering five or more delegates receive discounted group pricing along with a dedicated coordinator. Reach out via email or WhatsApp with your delegate count for a custom quote.',
  },
  {
    q: 'How are committees and country allocations decided?',
    a: 'Allocations are based on registration order, prior experience, and preference forms submitted after registration. The Secretariat finalizes and shares allocations two to three weeks before the conference.',
  },
  {
    q: 'Is accommodation arranged for outstation delegates?',
    a: 'For select conferences, we partner with nearby hotels to offer discounted accommodation packages. Details are shared in your confirmation email if applicable to your conference.',
  },
  {
    q: 'When are certificates issued?',
    a: 'Certificates of participation and awards are issued digitally within two to three weeks of the conference closing ceremony, sent to the email used during registration.',
  },
];

// ─── Trust indicators ─────────────────────────────────────────────────────────
const STATS = [
  { value: '20+', label: 'Conferences Hosted' },
  { value: '5,000+', label: 'Delegates Represented' },
  { value: '100+', label: 'Partner Institutions' },
  { value: '15+', label: 'Countries Reached' },
];

// ─── Section label ────────────────────────────────────────────────────────────
function Eyebrow({ children, color = GOLD }: { children: React.ReactNode; color?: string }) {
  return (
    <p
      className="text-xs font-semibold uppercase tracking-[0.28em]"
      style={{ color, ...BODY_FONT }}
    >
      {children}
    </p>
  );
}

// ─── Contact Card ─────────────────────────────────────────────────────────────
function ContactCard({
  href,
  icon,
  label,
  value,
  cta,
  note,
  accent,
  delay = 0,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  cta: string;
  note: string;
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
      whileHover={{ y: -8, rotate: -0.3 }}
      className="group relative flex flex-col gap-6 p-10 rounded-[28px] bg-[#101010] border border-transparent hover:border-[#BB8B57]/30 transition-all duration-500 cursor-pointer overflow-hidden"
      style={{ boxShadow: '0 1px 0 rgba(255,255,255,0.04) inset' }}
    >
      <div
        className="absolute -top-20 -right-20 w-56 h-56 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[70px] pointer-events-none"
        style={{ backgroundColor: accent + '20' }}
      />

      <div className="flex items-start justify-between relative">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:-rotate-6"
          style={{ backgroundColor: accent + '14' }}
        >
          <span style={{ color: accent }}>{icon}</span>
        </div>
      </div>

      <div className="relative">
        <Eyebrow color={accent}>{label}</Eyebrow>
        <p className="font-serif text-white font-semibold leading-tight tracking-tight mt-3" style={{ fontSize: '22px' }}>
          {value}
        </p>
      </div>

      <div className="h-px w-full bg-white/[0.06]" />

      <div className="flex items-center justify-between relative">
        <p className="text-[#7A7A7A]" style={{ fontSize: '13px', ...BODY_FONT }}>
          {note}
        </p>
        <span
          className="flex items-center gap-1.5 text-sm font-medium shrink-0 ml-4 group-hover:gap-2.5 transition-all duration-300"
          style={{ color: accent, ...BODY_FONT }}
        >
          {cta}
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
        </span>
      </div>
    </motion.a>
  );
}

// ─── FAQ accordion item ───────────────────────────────────────────────────────
function FaqItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-white/[0.07]">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-6 py-7 text-left group"
      >
        <span
          className="font-serif text-white group-hover:text-[#e8b97a] transition-colors duration-300"
          style={{ fontSize: 'clamp(17px, 2vw, 20px)' }}
        >
          {q}
        </span>
        <span
          className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 shrink-0 transition-all duration-400"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <Plus className="w-4 h-4 text-[#BB8B57]" strokeWidth={1.8} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-[#8A8A8A] leading-relaxed pb-7 pr-12" style={{ fontSize: '15.5px', ...BODY_FONT }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      {/* Ambient background system */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-[0.22]"
        style={{ background: 'radial-gradient(circle, #BB8B57 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-[0.10]"
        style={{ background: 'radial-gradient(circle, #6e8ef7 0%, transparent 70%)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        // style={{ backgroundImage: "url('/images/noise.png')" }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 md:pt-52 md:pb-36">
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>Contact</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="font-serif text-white leading-[0.98] tracking-tight mt-8 mb-10"
            style={{ fontSize: 'clamp(44px, 8vw, 96px)', fontWeight: 700 }}
          >
            Let&apos;s start
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #BB8B57 0%, #e8b97a 50%, #BB8B57 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              a conversation.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="text-[#8A8A8A] max-w-lg mx-auto leading-relaxed"
            style={{ ...BODY_FONT, fontSize: '17px' }}
          >
            Whether you&apos;re a student, school, university, delegate, or partner &mdash;
            our Secretariat is ready to help.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-14 origin-center"
            style={{ width: '60px', height: '1px', backgroundColor: GOLD }}
          />
        </div>
      </section>

      {/* ── General Enquiries — editorial info block ─────────────────────── */}
      <section className="pb-28 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="h-px w-full bg-white/[0.08] mb-12" />
          <Eyebrow>General Enquiries</Eyebrow>
          <a
            href={MAIL_URL}
            className="block font-serif text-white font-semibold mt-5 mb-12 hover:text-[#e8b97a] transition-colors duration-300"
            style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
          >
            {EMAIL}
          </a>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-6 max-w-xl mx-auto">
            <div>
              <Eyebrow color="#7A7A7A">Available</Eyebrow>
              <p className="text-white mt-3" style={{ fontSize: '17px', ...BODY_FONT }}>
                Monday &mdash; Saturday
                <br />
                10:00 AM &mdash; 6:00 PM IST
              </p>
            </div>
            <div>
              <Eyebrow color="#7A7A7A">Average Response</Eyebrow>
              <p className="text-white mt-3" style={{ fontSize: '17px', ...BODY_FONT }}>
                Within 24 hours
              </p>
            </div>
          </div>
          <div className="h-px w-full bg-white/[0.08] mt-12" />
        </motion.div>
      </section>

      {/* ── Contact Cards ─────────────────────────────────────────────────── */}
      <section className="pb-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard
            href={WHATSAPP_URL}
            icon={<MessageCircle className="w-6 h-6" strokeWidth={1.6} />}
            label="WhatsApp"
            value={PHONE_DISPLAY}
            cta="Open chat"
            note="Typically replies within 15 minutes"
            accent="#25D366"
            delay={0}
          />
          <ContactCard
            href={CALL_URL}
            icon={<Phone className="w-6 h-6" strokeWidth={1.6} />}
            label="Call Us"
            value={PHONE_DISPLAY}
            cta="Call now"
            note="Mon &mdash; Sat, 10 AM to 6 PM IST"
            accent={GOLD}
            delay={0.1}
          />
          <ContactCard
            href={MAIL_URL}
            icon={<Mail className="w-6 h-6" strokeWidth={1.6} />}
            label="Email"
            value={EMAIL}
            cta="Send email"
            note="Comprehensive reply within 24 hours"
            accent="#6e8ef7"
            delay={0.2}
          />
        </div>
      </section>

      {/* ── "I am a..." quick paths ──────────────────────────────────────── */}
      <section className="pb-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <Eyebrow>I Am A...</Eyebrow>
            <h2 className="font-serif text-white font-bold mt-4" style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}>
              Tell us who you are
            </h2>
            <p className="text-[#7A7A7A] mt-3 max-w-md mx-auto" style={{ ...BODY_FONT, fontSize: '15px' }}>
              We&apos;ll open WhatsApp with a message already tailored to you.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {AUDIENCES.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.a
                  key={a.label}
                  href={waLink(a.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col items-center text-center gap-3 py-8 px-4 rounded-2xl bg-[#101010] hover:bg-[#141414] transition-colors duration-400"
                >
                  <div className="w-11 h-11 rounded-full flex items-center justify-center border border-white/10 group-hover:border-[#BB8B57]/50 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#BB8B57]" strokeWidth={1.6} />
                  </div>
                  <span className="text-white text-sm font-medium" style={BODY_FONT}>
                    {a.label}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>


      {/* ── WhatsApp Hero CTA ─────────────────────────────────────────────── */}
      <section className="pb-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.008 }}
            className="group relative flex flex-col items-center text-center gap-8 rounded-[32px] overflow-hidden p-14 md:p-20 cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #0f1a13 0%, #0a0a0a 60%)' }}
          >
            <motion.div
              className="absolute -inset-x-20 -top-32 h-72 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(37,211,102,0.16), transparent 70%)' }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative flex items-center justify-center">
              <motion.span
                className="absolute w-20 h-20 rounded-full"
                style={{ backgroundColor: '#25D366' }}
                animate={{ scale: [1, 1.6], opacity: [0.35, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
              />
              <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#25D366' }}>
                <MessageCircle className="w-8 h-8 text-white" strokeWidth={1.8} />
              </div>
            </div>

            <div className="relative">
              <Eyebrow color="#25D366">Need A Quick Response?</Eyebrow>
              <h2
                className="font-serif text-white font-bold leading-tight mt-4"
                style={{ fontSize: 'clamp(28px, 4.5vw, 48px)' }}
              >
                Most delegates reach us on WhatsApp.
              </h2>
              <p className="text-[#8A8A8A] mt-4 max-w-md mx-auto" style={{ fontSize: '16px', ...BODY_FONT }}>
                Average response time of 15 minutes during working hours.
              </p>
            </div>

            <div
              className="relative flex items-center gap-2 px-8 py-4 rounded-full text-white text-sm font-semibold tracking-wide uppercase transition-transform duration-300 group-hover:-translate-y-0.5"
              style={{ backgroundColor: '#25D366', ...BODY_FONT }}
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2} />
              Open WhatsApp
            </div>
          </motion.a>
        </div>
      </section>

      {/* ── Trust Indicators ──────────────────────────────────────────────── */}
      <section className="pb-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="h-px w-full bg-white/[0.08] mb-14" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="text-center"
              >
                <p
                  className="font-serif font-bold"
                  style={{
                    fontSize: 'clamp(30px, 4vw, 44px)',
                    background: 'linear-gradient(135deg, #BB8B57 0%, #e8b97a 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {s.value}
                </p>
                <p className="text-[#7A7A7A] mt-2" style={{ fontSize: '13px', ...BODY_FONT }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="h-px w-full bg-white/[0.08] mt-14" />
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="pb-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <Eyebrow>Frequently Asked</Eyebrow>
            <h2 className="font-serif text-white font-bold mt-4" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
              Questions, answered.
            </h2>
          </motion.div>

          <div>
            {FAQS.map((f, i) => (
              <FaqItem
                key={f.q}
                q={f.q}
                a={f.a}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer divider ─────────────────────────────────────────────────── */}
      <div className="w-full h-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />
    </main>
  );
}