"use client";


import Image from 'next/image';
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
  imageSrc: "/images/hero-image-updated-2.webp",
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
    image: "/images/partnership-updated-3.webp",
    cta: { label: "Learn More", href: "/programs/school-mun-association" },
  },
  {
    title: "College Partnerships",
    description: "We work alongside universities and student societies to strengthen existing MUN communities, establish new initiatives and mentor executive boards. Our focus is not simply on organising conferences but on helping institutions cultivate confident, responsible student leaders.",
    image: "/images/partnership-updated-1.webp",
    cta: { label: "Learn More", href: "/programs/college-mun-association" },
  },
  // {
  //   title: "Educational Organisations",
  //   description: "We collaborate with educational trusts, NGOs, foundations and mission-driven organisations to expand access to diplomacy, leadership education and civic engagement through thoughtfully designed programmes and strategic initiatives.",
  //   image: "/images/hero-3.webp",
  //   cta: { label: "Learn More", href: "/partnerships/educational-organisations" },
  // },
  // {
  //   title: "Strategic Sponsors",
  //   description: "We partner with organisations that believe investing in education creates lasting social impact. Together we design initiatives that strengthen communities while supporting the growth of future leaders through meaningful educational experiences.",
  //   image: "/images/strategic-partner.webp",
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
      <Timeline data={timelineData} />

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
              <Image
                src="/images/smg-mun-logo.webp"
                alt=""
                className="h-[20vh] object-contain  mix-blend-screen"
               width={80} height={80} />
            </div>

            {/* RIGHT SIDE */}
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label htmlFor="institutionName" className="sr-only">Institution Name</label>
                  <input
                    id="institutionName"
                    placeholder="Institution Name *"
                    required
                    value={formData.institutionName}
                    onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 px-5 py-4 font-sans text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#bb8b57] focus:bg-white/[0.05] transition-all duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="contactPerson" className="sr-only">Contact Person</label>
                  <input
                    id="contactPerson"
                    placeholder="Contact Person *"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 px-5 py-4 font-sans text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#bb8b57] focus:bg-white/[0.05] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input
                    id="phone"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 px-5 py-4 font-sans text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#bb8b57] focus:bg-white/[0.05] transition-all duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input
                    id="email"
                    placeholder="Email Address *"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 px-5 py-4 font-sans text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#bb8b57] focus:bg-white/[0.05] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="institutionType" className="sr-only">Institution Type</label>
                <div className="relative">
                  <select
                    id="institutionType"
                    required
                    value={formData.institutionType}
                    onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                    className={`w-full bg-white/[0.03] border border-white/10 px-5 py-4 font-sans text-[14px] focus:outline-none focus:border-[#bb8b57] focus:bg-white/[0.05] transition-all duration-300 appearance-none ${!formData.institutionType ? 'text-white/40' : 'text-white'}`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1.25rem center',
                      backgroundSize: '1em'
                    }}
                  >
                    <option value="" disabled className="bg-[#1A1A1A] text-white/50">Institution Type *</option>
                    <option value="School" className="bg-[#1A1A1A] text-white">School</option>
                    <option value="College" className="bg-[#1A1A1A] text-white">College</option>
                    <option value="University" className="bg-[#1A1A1A] text-white">University</option>
                    <option value="NGO" className="bg-[#1A1A1A] text-white">NGO</option>
                    <option value="Corporate" className="bg-[#1A1A1A] text-white">Corporate</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Message (Optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 px-5 py-4 font-sans text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#bb8b57] focus:bg-white/[0.05] transition-all duration-300 resize-none"
                />
              </div>

              {status === "error" && (
                <div className="font-sans text-[13px] text-red-400 mt-2">{errorMessage}</div>
              )}
              {status === "success" && (
                <div className="font-sans text-[14px] text-[#bb8b57] mt-2 bg-[#bb8b57]/10 border border-[#bb8b57]/20 p-4">Thank you! Your inquiry has been submitted and our team will be in touch shortly.</div>
              )}

              <div className="pt-3 flex flex-col sm:flex-row items-center sm:justify-between gap-6">
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="
                    inline-flex items-center justify-center font-sans text-[12px] font-500 tracking-[0.15em] uppercase
                    bg-[#bb8b57] text-[#0B0B0B] px-10 py-4 border border-[#bb8b57]
                    hover:bg-transparent hover:text-[#bb8b57]
                    transition-all duration-300
                    disabled:opacity-50 disabled:cursor-not-allowed
                    w-full sm:w-auto
                  "
                >
                  {status === "loading" ? "Submitting..." : "Start The Conversation →"}
                </button>

                <p className="font-sans text-[11px] leading-[1.6] text-white/30 sm:max-w-[280px] text-center sm:text-left">
                  Your enquiry will be reviewed personally by our team. We never share your information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
