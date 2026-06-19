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
import MosaicHero from "./components/smjmun-mosaic/MosaicHero";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutWordmark />
        <TrustSection />
        <OurProgramsSection />
        {/* <MosaicHero /> */}
        <ImpactSection />
        <EditorialStatement />
        <FounderSection />
        <GlobalMovementSection />
        <InstitutionServices />
        <LeadershipJourney />
        <ConferencesSection />
        <TestimonialsSection />
        {/* <MediaSection /> */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
