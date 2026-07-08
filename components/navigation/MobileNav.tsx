'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Headphones } from 'lucide-react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { MobileDrawer } from './mobile/MobileDrawer';
import MenuTwoLineIcon from './constants/MenuIcon';
import { InstallButton } from '@/components/pwa/InstallButton';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex lg:hidden items-center gap-1 z-100">
      {/* Contact Us icon — mobile */}
      <InstallButton variant="mobile-header" />
      <Link
        href="/contact"
        aria-label="Contact Us"
        className="p-2 text-white/70 hover:text-white transition-colors duration-200"
      >
        <Headphones className="w-5 h-5" strokeWidth={1.5} />
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger aria-label="Open navigation menu"  className="p-2 -mr-2 text-white/70 hover:text-white focus:outline-none transition-colors duration-200" >
            
            
          <MenuTwoLineIcon color="white" size={36} />
          </SheetTrigger>
        <SheetContent
          side="right"
          className="w-full z-500 sm:w-[360px] p-0 border-none bg-[#0a0a0a] [&>button]:hidden"
        >
          {/* Accessibility */}
          <div className="sr-only">
            <SheetTitle>Navigation Menu</SheetTitle>
            <SheetDescription>Main navigation for the SMJ MUN website</SheetDescription>
          </div>

          <MobileDrawer onClose={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
