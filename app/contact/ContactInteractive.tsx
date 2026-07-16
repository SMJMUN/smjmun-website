'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, MessageCircle } from 'lucide-react';

const BODY_FONT = { fontFamily: 'var(--font-body), system-ui, sans-serif' };
const GOLD = '#BB8B57';

export function ContactCard({
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
        <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: accent, ...BODY_FONT }}>
          {label}
        </p>
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

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <div>
      {faqs.map((f, i) => (
        <FaqItem
          key={f.q}
          q={f.q}
          a={f.a}
          isOpen={openFaq === i}
          onClick={() => setOpenFaq(openFaq === i ? null : i)}
        />
      ))}
    </div>
  );
}

export function AudienceLink({
  href,
  label,
  icon,
  delay = 0,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="group flex flex-col items-center text-center gap-3 py-8 px-4 rounded-2xl bg-[#101010] hover:bg-[#141414] transition-colors duration-400"
    >
      <div className="w-11 h-11 rounded-full flex items-center justify-center border border-white/10 group-hover:border-[#BB8B57]/50 transition-colors duration-300">
        {icon}
      </div>
      <span className="text-white text-sm font-medium" style={BODY_FONT}>
        {label}
      </span>
    </motion.a>
  );
}

export function HeroWhatsAppCTA({ href }: { href: string }) {
  return (
    <motion.a
      href={href}
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
        <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: '#25D366', ...BODY_FONT }}>
          Need A Quick Response?
        </p>
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
  );
}

export function StatItem({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
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
        {value}
      </p>
      <p className="text-[#7A7A7A] mt-2" style={{ fontSize: '13px', ...BODY_FONT }}>
        {label}
      </p>
    </motion.div>
  );
}
