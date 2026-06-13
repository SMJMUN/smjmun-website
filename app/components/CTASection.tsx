'use client';

import { useState } from 'react';

export default function CTASection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#83090e',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 8vw',
          display: 'flex',
          alignItems: 'center',
          minHeight: '500px',
          flexWrap: 'wrap' as const,
        }}
      >
        {/* Text — left 60% */}
        <div
          style={{
            flex: '1 1 55%',
            padding: '160px 0',
            minWidth: '300px',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading), Georgia, serif',
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              marginBottom: '48px',
              maxWidth: '600px',
            }}
          >
            Ready To Build
            <br />
            The Future
            <br />
            Together?
          </h2>

          {/* Contact Form */}
          <div
            style={{
              width: '100%',
              maxWidth: '480px',
            }}
          >
            {status === "success" ? (
              <div style={{ color: "#fff", padding: "20px", border: "1px solid rgba(255,255,255,0.3)", backgroundColor: "rgba(255,255,255,0.1)" }}>
                Thank you for your message! We will get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%', padding: '16px 20px', backgroundColor: 'transparent',
                    border: '1px solid rgba(255,255,255,0.3)', color: '#fff', outline: 'none'
                  }}
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%', padding: '16px 20px', backgroundColor: 'transparent',
                    border: '1px solid rgba(255,255,255,0.3)', color: '#fff', outline: 'none'
                  }}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%', padding: '16px 20px', backgroundColor: 'transparent',
                    border: '1px solid rgba(255,255,255,0.3)', color: '#fff', outline: 'none'
                  }}
                />
                <textarea
                  placeholder="Your Message *"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%', padding: '16px 20px', backgroundColor: 'transparent',
                    border: '1px solid rgba(255,255,255,0.3)', color: '#fff', outline: 'none', resize: 'none'
                  }}
                />
                {status === "error" && <div style={{ color: "#ffb3b3", fontSize: "14px" }}>{errorMessage}</div>}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    alignSelf: 'flex-start',
                    padding: '16px 48px',
                    backgroundColor: '#ffffff',
                    color: '#83090e',
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    border: 'none',
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    opacity: status === "loading" ? 0.7 : 1,
                  }}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Cinematic image — right 40%, partially visible */}
        <div
          style={{
            flex: '0 0 40%',
            maxWidth: '40%',
            height: '100%',
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            overflow: 'hidden',
            opacity: 0.3,
          }}
          className="cta-image"
        >
          <img
            src="/images/institution.png"
            alt=""
            aria-hidden="true"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          {/* Fade overlay from charcoal */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, #83090e 0%, transparent 100%)',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .cta-image {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
