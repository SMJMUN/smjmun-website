"use client";

import { useState } from "react";
import { HeroVideo } from "@/components/program/hero/HeroVideo";
import { EditorialIntro } from "@/components/program/intro/EditorialIntro";
import { EditorialSection } from "@/components/program/editorial/EditorialSection";
import { Timeline } from "@/components/program/timeline/Timeline";
import type { HeroData, EditorialIntroData, EditorialSectionData, TimelineData } from "@/components/program/types";

const heroData: HeroData = {
  badge: "Partnerships & Collaborations",
  heading: "Building Institutions That Build Leaders.",
  description:
    "We partner with schools, universities and educational organisations that believe leadership is cultivated through character, dialogue and responsibility—not merely taught in classrooms. Together, we create experiences that prepare young people to engage thoughtfully with an unfinished world.",
  imageSrc: "/images/smj-hero-5.jpeg",
  primaryCTA: {
    label: "Begin A Partnership",
    href: "#contact-form",
  },
};

const introData: EditorialIntroData = {
  label: "A Shared Vision",

  heading:
    "Partnerships Are Not Sponsorships. They Are Shared Commitments To Developing The Next Generation Of Responsible Leaders.",

  body:
    "Every institution shapes the lives of the students it serves. At SMJMUN, we collaborate with organisations that believe education should extend beyond academic excellence. Together we cultivate curiosity, diplomacy, ethical leadership and the confidence to contribute meaningfully to society. Every partnership is built on trust, shared purpose and a long-term commitment to student growth.",
};

const sectionsData: EditorialSectionData[] = [
  {
    title: "School Partnerships",
    description: "We help schools build enduring Model United Nations ecosystems through delegate development, faculty mentoring, institutional training and annual conference support. Rather than organising isolated events, we create sustainable cultures of leadership, critical thinking and global citizenship.",
    image: "/images/smj-hero-4.jpeg",
    cta: { label: "Learn More", href: "/programs/school-mun-association" },
  },
  {
    title: "College Partnerships",
    description: "We work alongside universities and student societies to strengthen existing MUN communities, establish new initiatives and mentor executive boards. Our focus is not simply on organising conferences but on helping institutions cultivate confident, responsible student leaders.",
    image: "/images/program-image-2.png",
    cta: { label: "Learn More", href: "/programs/collage-mun-association" },
  },
  // {
  //   title: "Educational Organisations",
  //   description: "We collaborate with educational trusts, NGOs, foundations and mission-driven organisations to expand access to diplomacy, leadership education and civic engagement through thoughtfully designed programmes and strategic initiatives.",
  //   image: "/images/hero-3.png",
  //   cta: { label: "Learn More", href: "/partnerships/educational-organisations" },
  // },
  // {
  //   title: "Strategic Sponsors",
  //   description: "We partner with organisations that believe investing in education creates lasting social impact. Together we design initiatives that strengthen communities while supporting the growth of future leaders through meaningful educational experiences.",
  //   image: "/images/strategic-partner.png",
  //   cta: { label: "Learn More", href: "/partnerships/strategic-sponsors" },
  // },
];

const timelineData: TimelineData = {
  label: "Our Partnership Process",
  title: "From A Conversation To A Lasting Partnership.",
  subtitle: "Every institution has its own vision, culture and aspirations. Our partnership process begins by listening carefully, understanding your goals and designing a collaboration that creates meaningful, long-term value for your students and your community.",
  steps: [
    {
      number: "01",
      title: "Listen",
      description: "We begin by understanding your institution, your students and the vision you have for their future.",
    },
    {
      number: "02",
      title: "Design",
      description: "Together we design a partnership that reflects your educational philosophy, objectives and long-term aspirations.",
    },
    {
      number: "03",
      title: "Collaborate",
      description: "We work closely with your team to prepare programmes, resources and experiences that are thoughtfully tailored to your institution.",
    },
    {
      number: "04",
      title: "Create Impact",
      description: "Our partnership extends beyond the event itself, supporting a culture of leadership, responsibility and meaningful student development.",
    },
  ],
};

export default function PartnershipsPage() {
  const [formData, setFormData] = useState({
    institutionName: "",
    contactPerson: "",
    email: "",
    phone: "",
    institutionType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/partnerships", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      setStatus("success");
      setFormData({
        institutionName: "",
        contactPerson: "",
        email: "",
        phone: "",
        institutionType: "",
        message: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  const bgImage = heroData.imageSrc;

  return (
    <main className="bg-[#0B0B0B] text-white">
      {/* Hero */}
      <HeroVideo data={heroData} />

      {/* Editorial intro */}
      <EditorialIntro data={introData} />

      {/* Editorial sections with fixed parallax background */}
      <div
        className="relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-black/70"
        />

        <div className="relative z-10">
          {sectionsData.map((section, i) => (
            <EditorialSection key={i} data={section} index={i} />
          ))}
        </div>
      </div>

      {/* Timeline */}
      {/* <Timeline data={timelineData} /> */}

      {/* CTA / Contact Form Section */}
      <section id="contact-form" className="bg-black text-white py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-[420px_1fr] gap-20">
            {/* LEFT SIDE */}
            <div>
              <h2 className="font-serif text-[#bb8b57]  text-3xl md:text-5xl leading-[0.95] mb-8">
                Begin
                <br />
                A Meaningful
                <br />
                Partnership.
              </h2>
              <div className="w-20 h-[2px] bg-[#bb8b57] mb-8" />
              <div className="text-[#bb8b57]  max-w-sm  leading-relaxed mb-10 space-y-4">
                <p>Every institution has a unique vision for its students.</p>
                <p>
                  Tell us about your goals, your community and the impact you hope to create. We'll work with you to design a partnership that reflects your values and helps your students grow into thoughtful, globally minded leaders.
                </p>
              </div>
              <img
                src="/images/smg-mun-logo.png"
                alt=""
                className="h-[20vh] object-contain  mix-blend-screen"
              />
            </div>

            {/* RIGHT SIDE */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="Institution Name *"
                  required
                  value={formData.institutionName}
                  onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                  className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-[#bb8b57]"
                />
                <input
                  placeholder="Contact Person *"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-[#bb8b57]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-[#bb8b57]"
                />
                <input
                  placeholder="Email Address *"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-[#bb8b57]"
                />
              </div>

              <div className="grid md:grid-cols-1 gap-4">
                <select
                  value={formData.institutionType}
                  onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                  className="w-full bg-[#83090e] border border-white/20 px-5 py-4 text-white focus:outline-none focus:border-[#bb8b57] appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1em'
                  }}
                >
                  <option value="" disabled>Institution Type</option>
                  <option value="School">School</option>
                  <option value="College">College</option>
                  <option value="University">University</option>
                  <option value="NGO">NGO</option>
                  <option value="Corporate">Corporate</option>
                </select>
              </div>

              <textarea
                rows={5}
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-[#bb8b57]"
              />

              {status === "error" && (
                <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
              )}
              {status === "success" && (
                <div className="text-green-500 text-sm mt-2">Thank you! Your inquiry has been submitted.</div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#bb8b57] text-white uppercase tracking-[0.2em] py-5 hover:opacity-90 transition-all hover:bg-black disabled:opacity-50 mt-2"
              >
                {status === "loading" ? "Submitting..." : "Start The Conversation →"}
              </button>

              <p className="text-center text-sm text-white/50 mt-4">
                Your enquiry will be reviewed personally by our partnerships team. We use your information solely to respond to your request and never share it with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
