'use client';

import Link from 'next/link';
import { CONFERENCES_DATA } from '../constants/navigation';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

interface MobileConferencesAccordionProps {
  onLinkClick: () => void;
}

export function MobileConferencesAccordion({ onLinkClick }: MobileConferencesAccordionProps) {
  const { featured } = CONFERENCES_DATA;

  return (
    <Accordion className="w-full">
      <AccordionItem value="conferences" className="border-b border-primary/10">
        <AccordionTrigger 
          className={cn(
            "font-heading text-2xl font-bold text-primary py-5 hover:no-underline hover:text-accent transition-colors",
            "data-[state=open]:text-accent"
          )}
        >
          Conferences
        </AccordionTrigger>
        <AccordionContent className="pt-2 pb-6">
          <div className="flex flex-col gap-6 pl-4 border-l-2 border-highlight/30 ml-2">
            
            {/* Featured Conference */}
            <div className="flex flex-col group">
              <span className="font-body text-[10px] font-semibold tracking-widest uppercase text-highlight mb-2">
                Featured Summit
              </span>
              <Link 
                href={featured.href} 
                onClick={onLinkClick}
                className="font-heading text-lg font-bold text-primary leading-tight mb-2 group-hover:text-accent transition-colors"
              >
                {featured.title}
              </Link>
              <div className="flex flex-col gap-1.5 mb-3 text-primary/70">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 text-highlight/70" />
                  <span className="font-body text-[13px] leading-snug">{featured.venue}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-highlight/70" />
                  <span className="font-body text-[13px]">{featured.date}</span>
                </div>
              </div>
              <Link 
                href={featured.href}
                onClick={onLinkClick}
                className="flex items-center gap-1.5 text-[13px] font-medium text-accent hover:text-accent/80 transition-colors"
              >
                View Conference Details <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Sub Links */}
            <div className="flex flex-col gap-4 pt-4 border-t border-primary/5">
              <Link 
                href="/conferences" 
                onClick={onLinkClick}
                className="font-body text-[15px] font-medium text-primary/80 hover:text-accent transition-colors flex items-center justify-between"
              >
                Conference Archive
                <ArrowRight className="w-4 h-4 text-primary/30" />
              </Link>
            </div>

          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
