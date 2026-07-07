'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  MapPin,
  Calendar,
} from 'lucide-react';
import { CONFERENCES_DATA } from '../constants/navigation';

export function ConferencesMenu() {
  const { featured } = CONFERENCES_DATA;

  return (
    <motion.div
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        w-screen
        bg-[#0a0a0a]
        text-white
        border-t
        border-white/10
        px-24
        py-14
      "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-16">

        {/* COLUMN 01 — Featured Conference */}
        <div className="col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-[10px] uppercase tracking-[0.22em] text-[#bb8b57] mb-4">
              Featured Conference
            </p>

            <div className="h-px bg-white/10 mb-7" />

            <div className="space-y-5">
              <h4 className="font-heading text-[28px] font-normal leading-snug text-white">
                {featured.title}
              </h4>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 text-white/50">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#bb8b57]" />
                  <span className="font-body text-[13px] leading-relaxed tracking-wide">
                    {featured.venue}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-white/50">
                  <Calendar className="w-3.5 h-3.5 shrink-0 text-[#bb8b57]" />
                  <span className="font-body text-[13px] tracking-wide">
                    {featured.date}
                  </span>
                </div>
              </div>

              <Link
                href={featured.href}
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-[#bb8b57]
                  text-[13px]
                  tracking-[0.06em]
                  uppercase
                  hover:gap-3.5
                  transition-all
                  duration-300
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  pt-2
                "
              >
                View Conference
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* COLUMN 02 — Conference Opportunities */}
        <div className="col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-[10px] uppercase tracking-[0.22em] text-[#bb8b57] mb-4">
              Conference Opportunities
            </p>

            <div className="h-px bg-white/10 mb-7" />

            <div className="space-y-4">
              {[
                'International Conferences',
                'National Conferences',
                'School Conferences',
                'College Conferences',
                'Delegate Training',
                ].map((item) => (
                <Link
                  key={item}
                  href="/conferences"
                  className="
                    block
                    group
                    font-body
                    text-[15px]
                    font-normal
                    text-white/60
                    hover:text-white
                    transition-colors
                    duration-300
                  "
                >
                  <span className="relative inline-block">
                    {item}
                    <span
                      className="
                        absolute
                        left-0
                        -bottom-0.5
                        h-px
                        w-0
                        bg-[#bb8b57]
                        transition-all
                        duration-300
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:w-full
                      "
                    />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* COLUMN 03 — Quick Access */}
        <div className="col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-[10px] uppercase tracking-[0.22em] text-[#bb8b57] mb-4">
              Quick Access
            </p>

            <div className="h-px bg-white/10 mb-7" />

            <div className="space-y-4">
              {[
                // { label: 'Register Delegation', href: '/register' },
                // { label: 'Conference Archive', href: '/conferences' },
                // { label: 'Download Brochure', href: '/conferences' },
                { label: 'Partner With Us', href: '/partnerships' },
                { label: 'Contact Secretariat', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    flex
                    items-center
                    justify-between
                    font-body
                    text-[15px]
                    text-white/60
                    hover:text-white
                    transition-colors
                    duration-300
                    group
                  "
                >
                  <span>{item.label}</span>
                  <ArrowRight
                    className="
                      w-3.5
                      h-3.5
                      opacity-0
                      -translate-x-2
                      transition-all
                      duration-300
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:opacity-100
                      group-hover:translate-x-0
                    "
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}