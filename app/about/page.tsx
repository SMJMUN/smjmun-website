import AboutHero from "@/app/components/AboutSection";
import Footer from "@/app/components/Footer";
import WhoWeAreSection from "./about-smj/WhoWeAreSection";
import ManifestoSection from "./about-smj/ManifestoSection";
import WhyWeExistSection from "./about-smj/WhyWeExistSection";
import FourPillarsSection from "./about-smj/FourPillarsSection";
import DareRiseImpactSection from "./about-smj/DareRiseImpactSection";
import ClosingManifestoSection from "./about-smj/ClosingManifestoSection";

export default function AboutPage() {
  return (
    <main className="bg-[#0A0A0A] text-white">
      <AboutHero />
      <WhoWeAreSection />
      <ManifestoSection />
      <WhyWeExistSection />
      <FourPillarsSection />
      <DareRiseImpactSection />
      <ClosingManifestoSection />
      <Footer />
    </main>
  );
}
