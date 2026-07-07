"use client";

import { useState } from "react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "already" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source: "BLOG" }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.message || "Something went wrong.");
        return;
      }

      if (data.alreadySubscribed) {
        setStatus("already");
        setMessage(data.message);
      } else {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-navy)" }}
    >
      {/* Decorative grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(187,139,87,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(187,139,87,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Large watermark text */}
      <div
        className="absolute bottom-0 right-0 translate-x-[10%] translate-y-[15%] pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-serif font-bold text-white/[0.03]"
          style={{ fontSize: "clamp(100px, 16vw, 220px)", lineHeight: 1 }}
        >
          Journal
        </span>
      </div>

      <div
        className="content-wide relative z-10"
        style={{
          paddingTop: "clamp(72px, 8vw, 112px)",
          paddingBottom: "clamp(72px, 8vw, 112px)",
        }}
      >
        <div className="max-w-[640px] mx-auto text-center">
          {/* Overline */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-gold/60" />
            <p className="text-label text-gold/80">Stay Informed</p>
            <div className="w-8 h-[1px] bg-gold/60" />
          </div>

          {/* Heading */}
          <h2
            className="font-serif text-white font-bold leading-[1.1] tracking-[-0.02em] mb-5"
            style={{ fontSize: "clamp(32px, 4.5vw, 54px)" }}
          >
            Subscribe to Our Newsletter
          </h2>

          {/* Description */}
          <p
            className="font-sans text-white/55 leading-[1.7] mb-10"
            style={{ fontSize: "clamp(15px, 1.4vw, 17px)" }}
          >
            Get the latest updates on conferences, leadership opportunities,
            and new publications delivered to your inbox.
          </p>

          {/* Form */}
          {status === "success" || status === "already" ? (
            <div className="flex flex-col items-center gap-4">
              <div className="gold-rule mx-auto" />
              <p className="font-serif text-[20px] italic text-gold/90">
                {status === "success"
                  ? "Thank you for subscribing."
                  : "You\u2019re already subscribed."}
              </p>
              <p className="font-sans text-[13px] text-white/40">
                {message}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-0 max-w-[480px] mx-auto"
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={status === "loading"}
                aria-required="true"
                className="
                  flex-1 font-sans text-[14px] text-white
                  bg-white/8 border border-white/15
                  px-5 py-4
                  placeholder:text-white/30
                  focus:outline-none focus:border-gold/50
                  transition-colors duration-300
                  disabled:opacity-50
                "
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="
                  flex-shrink-0 font-sans text-[12px] font-500 tracking-[0.15em] uppercase
                  bg-gold text-navy px-8 py-4 border border-gold
                  cursor-pointer
                  hover:bg-gold/90 active:bg-gold/80
                  transition-colors duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}

          {/* Error message */}
          {status === "error" && (
            <p className="font-sans text-[13px] text-red-400 mt-4">
              {message}
            </p>
          )}

          {/* Privacy note */}
          {status !== "success" && status !== "already" && (
            <p className="font-sans text-[11px] text-white/25 mt-4 tracking-wide">
              No spam. Unsubscribe anytime.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
