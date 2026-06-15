import React, { useState } from 'react';
import Link from 'next/link';
import { PROGRAMS_MENU } from '../constants/navigation';
import { cn } from '@/lib/utils';
import { ArrowRight, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface MobileProgramsAccordionProps {
  onLinkClick: () => void;
}

export function MobileProgramsAccordion({ onLinkClick }: MobileProgramsAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Accordion 
      type="single" 
      collapsible 
      className="w-full border-b border-primary/10"
      onValueChange={(val) => setIsOpen(val === 'programs')}
    >
      <AccordionItem value="programs" className="border-none">
        <AccordionTrigger 
          className={cn(
            "py-5 hover:no-underline font-heading text-2xl font-bold transition-colors group",
            isOpen ? "text-accent" : "text-primary hover:text-accent",
            "[&>svg]:w-6 [&>svg]:h-6 [&>svg]:transition-transform [&>svg]:duration-300"
          )}
        >
          Programs
        </AccordionTrigger>
        <AccordionContent className="pb-6">
          <div className="flex flex-col gap-6 pl-4 border-l-2 border-primary/10 ml-2 mt-2">
            
            {/* Associations Group */}
            <div className="flex flex-col gap-3">
              <h4 className="font-body text-xs font-bold uppercase tracking-wider text-primary/50">
                Associations
              </h4>
              {PROGRAMS_MENU.associations.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={onLinkClick}
                  className="font-body text-base text-primary/80 hover:text-accent transition-colors py-1 flex items-center justify-between"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Development Group */}
            <div className="flex flex-col gap-3">
              <h4 className="font-body text-xs font-bold uppercase tracking-wider text-primary/50">
                Development
              </h4>
              {PROGRAMS_MENU.development.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={onLinkClick}
                  className="font-body text-base text-primary/80 hover:text-accent transition-colors py-1 flex items-center justify-between"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Partnerships Group */}
            <div className="flex flex-col gap-3">
              <h4 className="font-body text-xs font-bold uppercase tracking-wider text-primary/50">
                Partnerships
              </h4>
              {PROGRAMS_MENU.partnerships.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={onLinkClick}
                  className="font-body text-base text-primary/80 hover:text-accent transition-colors py-1 flex items-center justify-between"
                >
                  {link.title}
                </Link>
              ))}
            </div>

          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
