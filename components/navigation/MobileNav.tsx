'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { MobileDrawer } from './mobile/MobileDrawer';
import MenuTwoLineIcon from './constants/MenuIcon';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex md:hidden items-center z-100">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger  >
          <button
            className="p-2 -mr-2 text-white/70 hover:text-white focus:outline-none transition-colors duration-200"
            aria-label="Open navigation menu"
          >
          <MenuTwoLineIcon color="white" size={24} />
          </button>
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
