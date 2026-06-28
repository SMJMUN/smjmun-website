'use client'
import HeroSection from "./components/HeroSection";
import TrustSection from "./components/TrustSection";
import AboutWordmark from "./components/AboutWordmark";
import OurProgramsSection from "./components/OurProgramsSection";
import ImpactSection from "./components/ImpactSection";
import EditorialStatement from "./components/EditorialStatement";
import FounderSection from "./components/FounderSection";
import GlobalMovementSection from "./components/GlobalMovementSection";
import InstitutionServices from "./components/InstitutionServices";
import LeadershipJourney from "./components/LeadershipJourney";
import ConferencesSection from "./components/ConferencesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import MediaSection from "./components/MediaSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import MomentsCollage from "./components/MomentCollage";
import AboutHero from "./components/AboutSection";


import { useEffect, useState } from 'react';
import { IntroLogo } from "@/components/navigation/IntroLogo";
export default function Home() {
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
      <main className="bg-[#0A0A0A]">
        <IntroLogo show={showIntro} />
        <HeroSection />
        <AboutWordmark />
        <AboutHero />
        <TrustSection />
        <ImpactSection />

        <OurProgramsSection />
        {/* <MomentsCollage /> */}
        <EditorialStatement />
        <GlobalMovementSection />

        <FounderSection />
        {/* <InstitutionServices /> */}
        {/* <LeadershipJourney /> */}
        {/* <ConferencesSection /> */}
        {/* <TestimonialsSection /> */}
        {/* <MediaSection /> */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
