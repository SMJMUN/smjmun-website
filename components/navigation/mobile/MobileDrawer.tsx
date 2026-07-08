'use client';

import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { MAIN_NAVIGATION, CALL_TO_ACTION } from '../constants/navigation';
import { MobileConferencesAccordion } from './MobileConferencesAccordion';
import { MobileProgramsAccordion } from './MobileProgramsAccordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { InstallButton } from '@/components/pwa/InstallButton';

interface MobileDrawerProps {
  onClose: () => void;
}

export function MobileDrawer({ onClose }: MobileDrawerProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-[#0a0a0a]">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <span className="font-heading text-white text-[15px] tracking-[0.18em] uppercase opacity-60">
          Menu
        </span>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors duration-200"
        >
          <X className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </div>

      {/* Navigation Links */}
      <ScrollArea className="flex-1 h-full">
        <nav className="flex flex-col px-6 py-4">
          {MAIN_NAVIGATION.map((item) => {
            if (item.label === 'Conferences') {
              return <MobileConferencesAccordion key={item.label} onLinkClick={onClose} />;
            }
            if (item.label === 'Programs') {
              return <MobileProgramsAccordion key={item.label} onLinkClick={onClose} />;
            }

            const isActive =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));

            return (
              <div key={item.label} className="border-b border-white/[0.06]">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'flex items-center justify-between py-5',
                    'font-heading text-[22px] font-normal tracking-tight transition-colors duration-200',
                    isActive ? 'text-[#bb8b57]' : 'text-white/80 hover:text-white'
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="w-1 h-1 rounded-full bg-[#bb8b57]" />
                  )}
                </Link>
              </div>
            );
          })}
        </nav>
      </ScrollArea>

      {/* Footer CTA */}
      <div className="px-6 pb-8 pt-6 border-t border-white/10 flex flex-col gap-3">
        <Link
          href={CALL_TO_ACTION.href}
          onClick={onClose}
          className="
            flex items-center justify-center
            w-full py-4
            bg-[#bb8b57] text-black
            font-body text-[12px] font-semibold
            tracking-[0.2em] uppercase
            transition-all duration-300
            hover:bg-white
          "
        >
          {CALL_TO_ACTION.label}
        </Link>
        <InstallButton variant="mobile-drawer" />
      </div>

    </div>
  );
}
