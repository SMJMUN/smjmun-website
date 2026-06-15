import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function ProgramFeaturedCard() {
  return (
    <div className="h-full rounded-xl overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/5 flex flex-col group relative">
      <div className="relative h-48 w-full overflow-hidden">
        {/* Placeholder image, falls back to existing styles */}
        <div className="absolute inset-0 bg-primary/5" />
        <Image
          src="/images/hero-1.png"
          alt="Executive Board Program"
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1 bg-white relative z-10">
        <div className="text-[11px] font-body font-bold tracking-widest uppercase text-accent mb-2">
          Featured Program
        </div>
        <h4 className="font-heading text-xl font-bold text-primary mb-3">
          Executive Board Program
        </h4>
        <p className="font-body text-sm text-primary/70 mb-6 flex-1 line-clamp-3">
          Develop elite leadership skills and step into the roles of Chairs, Directors, and Secretary-Generals. Master procedure, diplomacy, and conference management.
        </p>
        <Link
          href="/programs/executive-board"
          className="inline-flex items-center font-body text-sm font-semibold text-primary group/link w-fit"
        >
          <span className="relative">
            Learn More
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover/link:w-full" />
          </span>
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
