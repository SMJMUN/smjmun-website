'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronDown, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationData } from '@/lib/sanity/navigation/types';

interface MobileConferencesAccordionProps {
  onLinkClick: () => void;
  navigationData: NavigationData;
}

export function MobileConferencesAccordion({ onLinkClick, navigationData }: MobileConferencesAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { featuredConference, upcomingConferences } = navigationData;

  return (
    <div className="border-b border-white/[0.06]">

      {/* Trigger */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className={cn(
          'w-full flex items-center justify-between py-5',
          'font-heading text-[22px] font-normal tracking-tight transition-colors duration-200',
          isOpen ? 'text-[#bb8b57]' : 'text-white/80 hover:text-white'
        )}
      >
        <span>Conferences</span>
        <ChevronDown
          className={cn(
            'w-4 h-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
            isOpen ? 'rotate-180 text-[#bb8b57]' : 'text-white/30'
          )}
          strokeWidth={1.5}
        />
      </button>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 flex flex-col gap-5">

              {/* Overline */}
              <p className="font-body text-[10px] uppercase tracking-[0.22em] text-[#bb8b57]">
                Featured Conference
              </p>

              {/* Featured conference */}
              <div className="border-l border-white/10 pl-4 flex flex-col gap-3">
                {featuredConference ? (
                  <>
                    <Link
                      href={`/conferences/${featuredConference.slug}`}
                      onClick={onLinkClick}
                      className="font-heading text-[18px] font-normal text-white leading-snug hover:text-[#bb8b57] transition-colors duration-200"
                    >
                      {featuredConference.title}
                    </Link>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-start gap-2 text-white/40">
                        <MapPin className="w-3 h-3 mt-0.5 shrink-0 text-[#bb8b57]" />
                        <span className="font-body text-[12px] leading-relaxed">{featuredConference.venue}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/40">
                        <Calendar className="w-3 h-3 shrink-0 text-[#bb8b57]" />
                        <span className="font-body text-[12px]">{featuredConference.date}</span>
                      </div>
                    </div>
                    <Link
                      href={`/conferences/${featuredConference.slug}`}
                      onClick={onLinkClick}
                      className="inline-flex items-center gap-1.5 text-[#bb8b57] text-[11px] uppercase tracking-[0.12em] hover:gap-2.5 transition-all duration-200"
                    >
                      View Conference <ArrowRight className="w-3 h-3" />
                    </Link>
                  </>
                ) : (
                  <h4 className="font-heading text-[16px] font-normal text-white/40">
                    No Featured Conference Available
                  </h4>
                )}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.06]" />

              {/* Sub-links */}
              <p className="font-body text-[10px] uppercase tracking-[0.22em] text-[#bb8b57]">
                Upcoming Conferences
              </p>
              <div className="flex flex-col gap-3.5">
                {upcomingConferences.slice(0, 3).map((conf) => (
                  <Link
                    key={conf.slug}
                    href={`/conferences/${conf.slug}`}
                    onClick={onLinkClick}
                    className="flex flex-col gap-1 group"
                  >
                    <span className="font-body text-[15px] text-white/60 group-hover:text-white transition-colors duration-200">
                      {conf.title}
                    </span>
                    <span className="font-body text-[11px] text-white/30">
                      {conf.date}
                    </span>
                  </Link>
                ))}

                {upcomingConferences.length === 0 && (
                  <p className="font-body text-[13px] text-white/40">
                    No upcoming conferences scheduled.
                  </p>
                )}

                <Link
                  href="/conferences"
                  onClick={onLinkClick}
                  className="inline-flex items-center gap-2 text-white/50 hover:text-white text-[11px] uppercase tracking-[0.12em] transition-colors duration-200 mt-2"
                >
                  View All Conferences <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
