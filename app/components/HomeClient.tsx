import dynamic from 'next/dynamic';
import HeroSection from "./HeroSection";
import TrustSection from "./TrustSection";
import AboutWordmark from "./AboutWordmark";
import ImpactSection from "./ImpactSection";
import Footer from "./Footer";
import IntroWrapper from "./IntroWrapper";

const OurProgramsSection = dynamic(() => import("./OurProgramsSection"));
const AboutHero = dynamic(() => import("./AboutSection"));
const GlobalMovementSection = dynamic(() => import("./GlobalMovementSection"));
const JournalCinematicSection = dynamic(() => import("./JournalCinematicSection"));
const FounderSection = dynamic(() => import("./FounderSection"));
const CTASection = dynamic(() => import("./CTASection"));

export default function HomeClient() {
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
          <IntroWrapper />
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
