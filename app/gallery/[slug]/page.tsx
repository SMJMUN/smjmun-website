import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/navigation/Header";

import Footer from "@/app/components/Footer";
import { sanityFetch } from "@/lib/sanity/client";
import {
  GALLERY_BY_SLUG_QUERY,
  GALLERIES_QUERY,
  RELATED_GALLERIES_QUERY,
} from "@/lib/sanity/queries/gallery";
import { urlFor } from "@/lib/sanity/image";
import type { Gallery } from "@/lib/sanity/types";

import CollectionHero from "./components/CollectionHero";
import CollectionStats from "./components/CollectionStats";
import CollectionSummary from "./components/CollectionSummary";
import ConferenceHighlights from "./components/ConferenceHighlights";
import PhotoMasonry from "./components/PhotoMasonry";
import RelatedGalleries from "./components/RelatedGalleries";
import CollectionCTA from "./components/CollectionCTA";

// ─── Static Params ───────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const galleries = await sanityFetch<Gallery[]>({
    query: GALLERIES_QUERY,
    revalidate: 3600,
  });
  return galleries.map((g) => ({ slug: g.slug.current }));
}

// ─── Dynamic Metadata ────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const gallery = await sanityFetch<Gallery | null>({
    query: GALLERY_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!gallery) return { title: "Collection Not Found — SMJ MUN Gallery" };

  const title = `${gallery.title} — SMJ MUN Gallery`;
  const description =
    gallery.description ??
    `Photographs from ${gallery.title}. A visual archive from SMJ MUN — India's premier Model United Nations platform.`;

  const imageUrl = gallery.coverImage
    ? urlFor(gallery.coverImage).width(1200).height(630).url()
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: `https://smjmun.com/gallery/${slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://smjmun.com/gallery/${slug}`,
      ...(imageUrl && { images: [{ url: imageUrl, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(imageUrl && { images: [imageUrl] }),
    },
  };
}

import { JsonLd } from "@/components/seo/JsonLd";

// ─── Page ────────────────────────────────────────────────────────────────────
export default async function GalleryCollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [gallery, relatedGalleries] = await Promise.all([
    sanityFetch<Gallery | null>({
      query: GALLERY_BY_SLUG_QUERY,
      params: { slug },
    }),
    sanityFetch<Gallery[]>({
      query: RELATED_GALLERIES_QUERY,
      params: { slug },
    }),
  ]);

  if (!gallery) notFound();

  const hasImages = gallery.images && gallery.images.length > 0;

  const baseUrl = "https://smjmun.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageGallery",
        name: gallery.title,
        description: gallery.description || `Gallery for ${gallery.title}`,
        url: `${baseUrl}/gallery/${gallery.slug.current}`,
        image: gallery.coverImage ? urlFor(gallery.coverImage).url() : undefined,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gallery",
            item: `${baseUrl}/gallery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: gallery.title,
            item: `${baseUrl}/gallery/${gallery.slug.current}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main>
        {/* 1. Hero — large cover image with key stats */}
        <CollectionHero gallery={gallery} />

        {/* 2. Stats strip */}
        <CollectionStats gallery={gallery} />

        {/* 3. Conference summary / description */}
        {gallery.description && (
          <CollectionSummary
            description={gallery.description}
            title={gallery.title}
          />
        )}

        {/* 4. Conference highlights timeline */}
        <ConferenceHighlights
          title={gallery.title}
          eventDate={gallery.eventDate}
        />

        {/* 5. Photo masonry with category filters */}
        {hasImages ? (
          <PhotoMasonry images={gallery.images!} />
        ) : (
          <section
            className="section-padding-sm bg-white"
            aria-label="No photographs available"
          >
            <div className="content-wide text-center py-16">
              <div className="gold-rule mx-auto mb-8" />
              <p className="font-serif text-[22px] italic text-navy/40">
                Photographs coming soon.
              </p>
              <p className="font-sans text-[13px] text-navy/30 mt-3">
                This collection is being prepared. Check back shortly.
              </p>
            </div>
          </section>
        )}

        {/* 6. Related galleries */}
        <RelatedGalleries
          galleries={relatedGalleries}
          currentTitle={gallery.title}
        />

        {/* 7. CTA */}
        <CollectionCTA
          conferenceSlug={gallery.conferenceSlug}
          conferenceTitle={gallery.conferenceTitle}
        />
      </main>
      <Footer />
    </>
  );
}
