import React from 'react';
import { PROGRAMS_MENU } from '../constants/navigation';
import { ProgramColumn } from './ProgramColumn';
import { ProgramFeaturedCard } from './ProgramFeaturedCard';

export function ProgramsMenu() {
  return (
    <div className="w-[1100px] bg-surface rounded-xl shadow-2xl border border-primary/5 p-8 flex animate-in fade-in slide-in-from-top-4 duration-200">
      <div className="grid grid-cols-12 gap-8 w-full">
        {/* Navigation Links Columns */}
        <div className="col-span-8 grid grid-cols-3 gap-8 pr-8 border-r border-primary/10">
          <ProgramColumn 
            title="Associations" 
            links={PROGRAMS_MENU.associations} 
          />
          <ProgramColumn 
            title="Development" 
            links={PROGRAMS_MENU.development} 
          />
          <ProgramColumn 
            title="Partnerships" 
            links={PROGRAMS_MENU.partnerships} 
          />
        </div>

        {/* Featured Card Column */}
        <div className="col-span-4">
          <ProgramFeaturedCard />
        </div>
      </div>
    </div>
  );
}
