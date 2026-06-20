'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { MobileDrawer } from './mobile/MobileDrawer';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex md:hidden items-center z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger  >
          <button
            className="p-2 -mr-2 text-white/70 hover:text-white focus:outline-none transition-colors duration-200"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-full sm:w-[360px] p-0 border-none bg-[#0a0a0a] [&>button]:hidden"
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
