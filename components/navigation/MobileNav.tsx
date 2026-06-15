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
        <SheetTrigger >
          <button 
            className="p-2 -mr-2 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-md transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-8 h-8" strokeWidth={1.5} />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full sm:w-[400px] p-0 border-l border-primary/10">
          {/* Accessibility Requirements */}
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
