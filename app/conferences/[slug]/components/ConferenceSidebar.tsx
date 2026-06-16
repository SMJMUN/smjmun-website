import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Conference } from "@/lib/sanity/types";

export default function ConferenceSidebar({ conference }: { conference: Conference }) {
  return (
    <div className="sticky top-[120px] flex flex-col gap-8">
      {/* Authority Card */}
      <div className="bg-white border border-navy/10 p-8">
        <div className="flex items-center gap-4 mb-6">
          <Image src="/images/smg-mun-logo.png" alt="SMJ MUN Logo" width={48} height={48} className="object-contain" unoptimized />
          <div>
            <h3 className="font-serif text-[18px] font-bold text-navy">SMJ MUN Secretariat</h3>
            <p className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-navy/50">Organizing Body</p>
          </div>
        </div>
        
        <p className="font-sans text-[14px] leading-[1.7] text-navy/70 mb-8">
          India's premier platform for diplomacy and leadership, dedicated to empowering youth through rigorous debate and collaborative solutions.
        </p>
        
        <div className="grid grid-cols-2 gap-4 border-t border-navy/10 pt-6">
          <div>
            <span className="block font-serif text-[24px] font-bold text-gold">10+</span>
            <span className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-navy/50">Years Exp</span>
          </div>
          <div>
            <span className="block font-serif text-[24px] font-bold text-gold">5K+</span>
            <span className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-navy/50">Alumni</span>
          </div>
        </div>
      </div>

      {/* Action Card */}
      {conference.registrationOpen && (
        <div className="bg-ivory border border-gold/30 p-8">
          <h3 className="font-serif text-[20px] font-bold text-navy mb-4">
            Ready to Participate?
          </h3>
          <ul className="flex flex-col gap-3 font-sans text-[13px] text-navy/70 mb-8">
            <li className="flex gap-2"><span className="text-gold font-bold">✓</span> Individual & Delegation Registration</li>
            <li className="flex gap-2"><span className="text-gold font-bold">✓</span> Comprehensive Study Guides</li>
            <li className="flex gap-2"><span className="text-gold font-bold">✓</span> Official Certificate of Participation</li>
          </ul>
          <Link href={`/register/${conference.slug.current}`} className="btn-primary w-full text-center">
            Register Now
          </Link>
        </div>
      )}
    </div>
  );
}
