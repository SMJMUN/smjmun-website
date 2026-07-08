'use client'
import HeroSection from "./HeroSection";
import TrustSection from "./TrustSection";
import AboutWordmark from "./AboutWordmark";
import OurProgramsSection from "./OurProgramsSection";
import ImpactSection from "./ImpactSection";
import EditorialStatement from "./EditorialStatement";
import JournalCinematicSection from "./JournalCinematicSection";
import FounderSection from "./FounderSection";
import GlobalMovementSection from "./GlobalMovementSection";
import InstitutionServices from "./InstitutionServices";
import LeadershipJourney from "./LeadershipJourney";
import ConferencesSection from "./ConferencesSection";
import TestimonialsSection from "./TestimonialsSection";
import MediaSection from "./MediaSection";
import CTASection from "./CTASection";
import Footer from "./Footer";
import MomentsCollage from "./MomentCollage";
import AboutHero from "./AboutSection";
import { useEffect, useState } from 'react';
import { IntroLogo } from "@/components/navigation/IntroLogo";

export default function HomeClient() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const introShown = sessionStorage.getItem('smjmun-intro');

    if (!introShown) {
      setShowIntro(true);

      const timer = setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem('smjmun-intro', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);
  
  return (
    <>
      <main className="bg-[#0A0A0A] relative">
        <div 
          className="fixed inset-0 pointer-events-none z-0" 
          style={{
            backgroundImage: 'radial-gradient(rgba(187,139,87, 0.15) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }} 
        />
        <div className="relative z-10 flex flex-col">
          <IntroLogo show={showIntro} />
          <HeroSection />
          <AboutWordmark />
          <AboutHero />
          <TrustSection />
          <ImpactSection />
          <OurProgramsSection />
          <GlobalMovementSection />
          <JournalCinematicSection />
          <FounderSection />
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  );
}
