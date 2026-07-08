'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  MapPin,
  Calendar,
} from 'lucide-react';
import { NavigationData } from '@/lib/sanity/navigation/types';

interface ConferencesMenuProps {
  navigationData: NavigationData;
}

export function ConferencesMenu({ navigationData }: ConferencesMenuProps) {
  const { featuredConference, upcomingConferences } = navigationData;

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
              {featuredConference ? (
                <>
                  <h4 className="font-heading text-[28px] font-normal leading-snug text-white">
                    {featuredConference.title}
                  </h4>

                  <div className="space-y-3 pt-1">
                    <div className="flex items-start gap-3 text-white/50">
                      <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#bb8b57]" />
                      <span className="font-body text-[13px] leading-relaxed tracking-wide">
                        {featuredConference.venue}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-white/50">
                      <Calendar className="w-3.5 h-3.5 shrink-0 text-[#bb8b57]" />
                      <span className="font-body text-[13px] tracking-wide">
                        {featuredConference.date}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/conferences/${featuredConference.slug}`}
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
                </>
              ) : (
                <div className="py-4">
                  <h4 className="font-heading text-[20px] font-normal leading-snug text-white/40">
                    No Featured Conference Available
                  </h4>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* COLUMN 02 — Upcoming Conferences */}
        <div className="col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-[10px] uppercase tracking-[0.22em] text-[#bb8b57] mb-4">
              Upcoming Conferences
            </p>

            <div className="h-px bg-white/10 mb-7" />

            <div className="space-y-0">
              {upcomingConferences.slice(0, 3).map((conf, idx) => (
                <div key={conf.slug}>
                  <Link
                    href={`/conferences/${conf.slug}`}
                    className="
                      block
                      group
                      py-3
                    "
                  >
                    <div className="flex flex-col gap-1">
                      <span className="font-body text-[15px] font-normal text-white/80 group-hover:text-white transition-colors duration-300">
                        {conf.title}
                      </span>
                      <span className="font-body text-[12px] text-white/40">
                        {conf.date}
                      </span>
                    </div>
                  </Link>
                  {idx < 2 && idx < upcomingConferences.length - 1 && (
                    <div className="h-px bg-white/5 my-1" />
                  )}
                </div>
              ))}
              
              {upcomingConferences.length === 0 && (
                <p className="font-body text-[13px] text-white/40 py-2">
                  No upcoming conferences scheduled.
                </p>
              )}

              <div className="pt-5">
                <Link
                  href="/conferences"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-white/60
                    hover:text-white
                    text-[12px]
                    tracking-[0.06em]
                    uppercase
                    transition-colors
                    duration-300
                    group
                  "
                >
                  View All Conferences
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              </div>
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