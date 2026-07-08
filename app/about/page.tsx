import type { Metadata } from "next";
import AboutHero from "@/app/components/AboutSection";
import Footer from "@/app/components/Footer";
import WhoWeAreSection from "./about-smj/WhoWeAreSection";
import ManifestoSection from "./about-smj/ManifestoSection";
import WhyWeExistSection from "./about-smj/WhyWeExistSection";
import FourPillarsSection from "./about-smj/FourPillarsSection";
import DareRiseImpactSection from "./about-smj/DareRiseImpactSection";
import ClosingManifestoSection from "./about-smj/ClosingManifestoSection";

export const metadata: Metadata = {
  title: "About Us | SMJMUN",
  description: "Learn about Shri Seth Mangilalji Sahu Model United Nations, our mission, and our pillars for building future global leaders.",
  alternates: {
    canonical: "https://smjmun.com/about",
  },
  openGraph: {
    title: "About Us | SMJMUN",
    description: "Learn about Shri Seth Mangilalji Sahu Model United Nations, our mission, and our pillars.",
    url: "https://smjmun.com/about",
  },
};

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
