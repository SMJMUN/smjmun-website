'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Headphones, MessageCircle, Phone, Mail, X } from 'lucide-react';

// ─── Contact details — edit these ────────────────────────────────────────────
const PHONE_NUMBER = '+91 93024 70974';
const PHONE_DISPLAY = '+91 93024 70974';
const EMAIL = 'info@smjmun.com';
const PHONE_DIGITS = PHONE_NUMBER.replace(/\D/g, '');
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello SMJMUN! I would like to know more about your programs and conferences.'
);
const WHATSAPP_URL = `https://wa.me/${PHONE_DIGITS}?text=${WHATSAPP_MESSAGE}`;
const CALL_URL = `tel:${PHONE_NUMBER}`;
const MAIL_URL = `mailto:${EMAIL}`;

const GOLD = '#BB8B57';
const BODY_FONT = { fontFamily: 'var(--font-body), system-ui, sans-serif' };

const CHANNELS = [
  {
    href: WHATSAPP_URL,
    icon: MessageCircle,
    label: 'WhatsApp',
    value: PHONE_DISPLAY,
    accent: '#25D366',
    external: true,
  },
  {
    href: CALL_URL,
    icon: Phone,
    label: 'Call',
    value: PHONE_DISPLAY,
    accent: GOLD,
    external: false,
  },
  {
    href: MAIL_URL,
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    accent: GOLD,
    external: false,
  },
];

/**
 * Sitewide floating contact widget.
 * Mount this once in the root layout (app/layout.tsx) so it appears
 * on every page, pinned to the bottom-right corner of the viewport.
 */
export default function FloatingContactWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-4">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-[300px] rounded-3xl border border-[#BB8B57]/40 bg-[#0d0d0d]/95 backdrop-blur-md p-4 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 pb-3 mb-3 border-b border-[#BB8B57]/25">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white">
                  <Headphones className="w-5 h-5" style={{ color: GOLD }} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-white text-sm font-bold uppercase tracking-wide" style={BODY_FONT}>
                    Connect With Us
                  </p>
                  <p className="text-[#7A7A7A] text-xs uppercase tracking-wide" style={BODY_FONT}>
                    We reply fast
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close contact panel"
                className="w-7 h-7 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors duration-200 shrink-0"
              >
                <X className="w-3.5 h-3.5 text-white" strokeWidth={2} />
              </button>
            </div>

            {/* Channels */}
            <div className="flex flex-col gap-2.5">
              {CHANNELS.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.external ? '_blank' : undefined}
                    rel={c.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 hover:border-[#BB8B57]/50 bg-black/40 hover:bg-black/60 px-4 py-3 transition-colors duration-200"
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: c.accent }}
                    >
                      <Icon className="w-4 h-4 text-white" strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white text-sm font-semibold" style={BODY_FONT}>
                        {c.label}
                      </p>
                      <p className="text-[#9A9A9A] text-xs truncate" style={BODY_FONT}>
                        {c.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-[0_0_30px_rgba(187,139,87,0.55)]"
      >
        {/* Pulse ring, only while closed */}
        {!open && (
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: GOLD }}
            animate={{ scale: [1, 1.5], opacity: [0.35, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <X className="w-6 h-6" style={{ color: GOLD }} strokeWidth={2} />
            </motion.span>
          ) : (
            <motion.span
              key="headset"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Headphones className="w-6 h-6" style={{ color: GOLD }} strokeWidth={1.8} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}