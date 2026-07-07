"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setFeedback("Please fill in all required fields.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject || undefined,
          message: formData.message.trim(),
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setFeedback(data.message || "Something went wrong.");
        return;
      }

      setStatus("success");
      setFeedback("Your message has been sent! We'll get back to you shortly.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setFeedback("Network error. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 lg:min-h-[78vh] flex items-center"
      style={{
        background: 'linear-gradient(to bottom, #5b0207, #73060b, #83090e)',
      }}
    >
      {/* Top gradient edge */}
      <div
        className="absolute top-0 left-0 right-0 h-20 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 100%)' }}
      />

      {/* Bottom gradient edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 100%)' }}
      />

      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <h2
          className="font-serif select-none"
          style={{
            fontSize: '14vw',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'rgba(255,255,255,0.03)',
          }}
        >
          SMJMUN
        </h2>
      </div>

      {/* Gold glow left */}
      <div className="absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#BB8B57]/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 tablet-cta-container">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-stretch">

          {/* Left Side — full-bleed image with text overlaid on it */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden min-h-[420px] lg:min-h-0 cta-img-tablet-sm"
            style={{ borderRadius: '20px' }}
          >
            {/* Background image fills the entire column */}
 <img
  src="/images/perparestudent.jpeg"
  alt="SMJMUN"
  className="
    absolute inset-0
    h-full w-full
    object-cover
    scale-100
    lg:object-[50%_25%]
  "
/>

            {/* Overlay for legibility — darker toward the bottom where copy sits */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.15) 75%, rgba(10,10,10,0.05) 100%)',
              }}
            />

            {/* Text content, overlaid on the image */}
            <div className="relative z-10 flex h-full flex-col justify-end p-8 lg:p-10">
              <span
                className="section-label mb-6"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                Get In Touch
              </span>

              <h2
                className="font-serif text-white leading-[1.12] mb-8"
                style={{
                  fontSize: 'clamp(13px, 3.2vw, 12px)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                Shaping Tomorrow&apos;s Leaders
                <br />
                Starts With One Conversation.
              </h2>

              <div className="flex items-center gap-3">
                <div className="h-px w-8" style={{ background: '#BB8B57' }} />
                <p className="text-xs uppercase tracking-[0.3em] text-[#BB8B57]">Since 2023</p>
              </div>
              <h3 className="mt-2 font-serif text-lg text-white/85 leading-tight">
                Building India&apos;s Future Leaders
              </h3>
            </div>
          </motion.div>

          {/* Right Side — Form */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="card-ds p-8 flex flex-col justify-center cta-form-tablet"
            style={{
              background: '#0A0A0A',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[#BB8B57]/20 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#BB8B57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p
                  className="text-white text-lg font-serif"
                  style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  {feedback}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-[#BB8B57] underline underline-offset-4 mt-2 cursor-pointer hover:text-[#d4a96a] transition-colors"
                  style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  disabled={status === "loading"}
                  className="
                    h-12 w-full
                    rounded-[16px]
                    border border-[rgba(255,255,255,0.12)]
                    bg-white/[0.06]
                    px-4
                    text-white text-sm
                    placeholder:text-[#7A7A7A]
                    outline-none
                    focus:border-[#BB8B57]
                    focus:bg-white/[0.08]
                    transition-all duration-200
                    disabled:opacity-50
                  "
                  style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                />

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  disabled={status === "loading"}
                  className="
                    h-12 w-full
                    rounded-[16px]
                    border border-[rgba(255,255,255,0.12)]
                    bg-white/[0.06]
                    px-4
                    text-white text-sm
                    placeholder:text-[#7A7A7A]
                    outline-none
                    focus:border-[#BB8B57]
                    focus:bg-white/[0.08]
                    transition-all duration-200
                    disabled:opacity-50
                  "
                  style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                />

                {/* Inquiry type select */}
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="
                      h-12 w-full
                      rounded-[16px]
                      border border-[rgba(255,255,255,0.12)]
                      bg-[#111111]
                      px-4
                      text-white text-sm
                      outline-none
                      focus:border-[#BB8B57]
                      transition-all duration-200
                      appearance-none cursor-pointer
                      disabled:opacity-50
                    "
                    style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                  >
                    <option value="" disabled className="text-[#7A7A7A] bg-[#111111]">Inquiry type</option>
                    <option value="school"   className="bg-[#111111] text-white">School</option>
                    <option value="college"  className="bg-[#111111] text-white">College</option>
                    <option value="uni"      className="bg-[#111111] text-white">University</option>
                    <option value="student"  className="bg-[#111111] text-white">Students</option>
                    <option value="sponsor"  className="bg-[#111111] text-white">Sponsor</option>
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/50">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your inquiry..."
                  required
                  disabled={status === "loading"}
                  className="
                    w-full
                    rounded-[16px]
                    border border-[rgba(255,255,255,0.12)]
                    bg-white/[0.06]
                    p-4
                    text-white text-sm
                    placeholder:text-[#7A7A7A]
                    outline-none
                    focus:border-[#BB8B57]
                    focus:bg-white/[0.08]
                    transition-all duration-200
                    resize-none
                    disabled:opacity-50
                  "
                  style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                />

                {status === "error" && (
                  <p
                    className="text-xs text-red-400"
                    style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
                  >
                    {feedback}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-ds-primary w-full justify-center mt-2 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}