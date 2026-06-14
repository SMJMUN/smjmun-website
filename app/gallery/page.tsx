import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { sanityFetch } from "@/lib/sanity/client";
import { GALLERIES_QUERY } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import type { Gallery } from "@/lib/sanity/types";

export const metadata: Metadata = {
  title: "Gallery — SMJ MUN",
  description:
    "Browse photo galleries from SMJ MUN conferences — capturing the moments that define India's premier Model United Nations platform.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery — SMJ MUN",
    description:
      "Photo galleries from SMJ MUN conferences across India and beyond.",
    type: "website",
    url: "/gallery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery — SMJ MUN",
    description: "Photo galleries from SMJ MUN conferences.",
  },
};

export default async function GalleryPage() {
  const albums = await sanityFetch<Gallery[]>({ query: GALLERIES_QUERY });

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section
          style={{
            backgroundColor: "#042147",
            padding: "180px 0 100px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 8vw" }}>
            <span
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#bb8b57",
                display: "block",
                marginBottom: "20px",
              }}
            >
              Gallery
            </span>
            <h1
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                marginBottom: "20px",
              }}
            >
              Captured Moments
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "18px",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.6)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              A visual journey through our conferences, workshops, and
              diplomatic summits.
            </p>
          </div>
        </section>

        {/* Albums */}
        <section
          style={{
            backgroundColor: "#f8f8f8",
            padding: "100px 0 120px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 8vw",
            }}
          >
            {albums.length === 0 ? (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <div
                  style={{
                    width: "60px",
                    height: "1px",
                    backgroundColor: "#bb8b57",
                    margin: "0 auto 32px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-heading), Georgia, serif",
                    fontSize: "24px",
                    fontStyle: "italic",
                    color: "#042147",
                    opacity: 0.5,
                  }}
                >
                  Photo albums coming soon.
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
                {albums.map((album) => {
                  const coverUrl =
                    album.images && album.images.length > 0
                      ? urlFor(album.images[0]).width(600).height(400).quality(80).url()
                      : null;

                  return (
                    <div key={album._id}>
                      {/* Album Header */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                          justifyContent: "space-between",
                          marginBottom: "32px",
                          flexWrap: "wrap",
                          gap: "12px",
                        }}
                      >
                        <div>
                          <h2
                            style={{
                              fontFamily: "var(--font-heading), Georgia, serif",
                              fontSize: "clamp(24px, 3vw, 36px)",
                              fontWeight: 700,
                              lineHeight: 1.15,
                              color: "#042147",
                              marginBottom: "8px",
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {album.title}
                          </h2>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            {album.conferenceName && (
                              <span
                                style={{
                                  fontFamily: "var(--font-body), system-ui, sans-serif",
                                  fontSize: "13px",
                                  fontWeight: 500,
                                  letterSpacing: "0.08em",
                                  textTransform: "uppercase",
                                  color: "#bb8b57",
                                }}
                              >
                                {album.conferenceName}
                              </span>
                            )}
                            {album.conferenceName && (
                              <span
                                style={{
                                  width: "4px",
                                  height: "4px",
                                  borderRadius: "50%",
                                  backgroundColor: "#bb8b57",
                                  display: "inline-block",
                                  opacity: 0.5,
                                }}
                              />
                            )}
                            <span
                              style={{
                                fontFamily: "var(--font-body), system-ui, sans-serif",
                                fontSize: "13px",
                                color: "#042147",
                                opacity: 0.4,
                              }}
                            >
                              {album.images?.length || 0} photos
                            </span>
                          </div>
                          {album.description && (
                            <p
                              style={{
                                fontFamily: "var(--font-body), system-ui, sans-serif",
                                fontSize: "15px",
                                lineHeight: 1.6,
                                color: "#042147",
                                opacity: 0.55,
                                marginTop: "8px",
                                maxWidth: "600px",
                              }}
                            >
                              {album.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Image Grid */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                          gap: "12px",
                        }}
                      >
                        {album.images?.map((img, i) => {
                          const imgUrl = urlFor(img)
                            .width(600)
                            .height(400)
                            .quality(80)
                            .url();
                          return (
                            <div
                              key={i}
                              className="gallery-image"
                              style={{
                                aspectRatio: "3 / 2",
                                overflow: "hidden",
                                position: "relative",
                                backgroundColor: "#042147",
                              }}
                            >
                              <Image
                                src={imgUrl}
                                alt={
                                  img.alt ||
                                  `${album.title} — photo ${i + 1}`
                                }
                                fill
                                unoptimized
                                sizes="(max-width: 768px) 100vw, 300px"
                                style={{
                                  objectFit: "cover",
                                  transition: "transform 0.5s ease",
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>

                      {/* Divider */}
                      <div
                        style={{
                          width: "80px",
                          height: "1px",
                          backgroundColor: "#bb8b57",
                          opacity: 0.3,
                          marginTop: "80px",
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .gallery-image:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
}
