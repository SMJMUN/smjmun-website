'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { CONFERENCES_DATA } from '../constants/navigation';
import { cn } from '@/lib/utils';

export function ConferencesMenu() {
  const { featured } = CONFERENCES_DATA;

  return (
    <div className="w-[800px] p-8 grid grid-cols-12 gap-8 bg-surface-white rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-primary/5">
      
      {/* Featured Conference Card (Takes up 7 columns) */}
      <div className="col-span-7 flex flex-col group cursor-pointer relative overflow-hidden rounded-lg bg-surface border border-primary/5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
        <Link href={featured.href} className="absolute inset-0 z-10">
          <span className="sr-only">View {featured.title}</span>
        </Link>
        
        <div className="relative h-48 w-full overflow-hidden">
          <Image 
            src={featured.image} 
            alt={featured.title}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
          
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 shadow-sm flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
              {featured.registrationStatus}
            </span>
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow bg-white">
          <span className="font-body text-[11px] font-semibold tracking-widest uppercase text-highlight mb-2">
            Featured Summit
          </span>
          <h3 className="font-heading text-2xl font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors duration-300">
            {featured.title}
          </h3>
          
          <div className="flex flex-col gap-3 mt-auto mb-6">
            <div className="flex items-start gap-2.5 text-primary/70">
              <MapPin className="w-4 h-4 mt-0.5 text-highlight/70" />
              <span className="font-body text-[14px] leading-snug">{featured.venue}</span>
            </div>
            <div className="flex items-center gap-2.5 text-primary/70">
              <Calendar className="w-4 h-4 text-highlight/70" />
              <span className="font-body text-[14px]">{featured.date}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-accent font-medium text-[14px] mt-auto">
            View Conference Details
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>

      {/* Conference Links & Info (Takes up 5 columns) */}
      <div className="col-span-5 flex flex-col py-2">
        <h4 className="font-heading text-xl font-bold text-primary mb-6 pb-4 border-b border-highlight/20 relative">
          Global Conferences
          <span className="absolute bottom-[-1px] left-0 w-12 h-[2px] bg-highlight" />
        </h4>
        
        <p className="font-body text-[14px] text-primary/70 leading-relaxed mb-6">
          Experience world-class diplomacy, debate, and negotiation at our international and national summits.
        </p>

        <div className="flex flex-col gap-2 mt-auto">
          <Link 
            href="/conferences"
            className="flex items-center justify-between p-4 rounded-md bg-surface hover:bg-highlight/5 border border-transparent hover:border-highlight/10 transition-all duration-300 group"
          >
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold text-primary group-hover:text-accent transition-colors">
                Conference Archive
              </span>
              <span className="font-body text-[12px] text-primary/60 mt-1">
                Explore past resolutions and committees
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-primary/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
          </Link>
          
          <Link 
            href="/register"
            className="flex items-center justify-between p-4 rounded-md bg-primary text-white hover:bg-accent transition-all duration-300 group shadow-md hover:shadow-lg"
          >
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold">
                Register Delegation
              </span>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

    </div>
  );
}
