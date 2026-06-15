'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { MAIN_NAVIGATION, CALL_TO_ACTION } from '../constants/navigation';
import { MobileConferencesAccordion } from './MobileConferencesAccordion';
import { MobileProgramsAccordion } from './MobileProgramsAccordion';
import { ArrowRight } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface MobileDrawerProps {
  onClose: () => void;
}

export function MobileDrawer({ onClose }: MobileDrawerProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header section of the drawer (Logo) */}
      <div className="px-6 py-6 border-b border-primary/5 flex items-center justify-between">
        <span className="font-heading font-bold text-primary text-xl tracking-tight">
          SMJ MUN
        </span>
      </div>

      {/* Scrollable Navigation Area */}
      <ScrollArea className="flex-1 px-6">
        <div className="py-8 flex flex-col gap-2">
          {MAIN_NAVIGATION.map((item) => {
            if (item.label === 'Conferences') {
              return <MobileConferencesAccordion key={item.label} onLinkClick={onClose} />;
            }
            if (item.label === 'Programs') {
              return <MobileProgramsAccordion key={item.label} onLinkClick={onClose} />;
            }

            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

            return (
              <div key={item.label} className="border-b border-primary/10">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center justify-between py-5",
                    "font-heading text-2xl font-bold transition-colors",
                    isActive ? "text-accent" : "text-primary hover:text-accent"
                  )}
                >
                  {item.label}
                  {isActive && <ArrowRight className="w-5 h-5 text-accent" />}
                </Link>
              </div>
            );
          })}
        </div>
      </ScrollArea>

      {/* Footer CTA Section */}
      <div className="p-6 border-t border-primary/10 bg-surface">
        <Link
          href={CALL_TO_ACTION.href}
          onClick={onClose}
          className="flex items-center justify-center w-full py-4 bg-primary text-white font-body text-[15px] font-medium tracking-widest uppercase transition-all duration-300 hover:bg-accent"
        >
          {CALL_TO_ACTION.label}
        </Link>
      </div>
    </div>
  );
}
