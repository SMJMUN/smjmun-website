import type { Metadata } from "next";
import HomeClient from "./components/HomeClient";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Model United Nations India | SMJMUN",
  description: "India's premier platform for diplomacy, leadership & global engagement. Join the best Model United Nations conferences.",
  alternates: {
    canonical: "https://smjmun.com",
  },
  openGraph: {
    title: "Model United Nations India | SMJMUN",
    description: "India's premier platform for diplomacy, leadership & global engagement.",
    url: "https://smjmun.com",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "EducationalOrganization"],
        "@id": "https://smjmun.com/#organization",
        name: "SMJMUN",
        url: "https://smjmun.com",
        logo: {
          "@type": "ImageObject",
          url: "https://smjmun.com/images/smg-mun-logo.png",
        },
        sameAs: [
          "https://instagram.com/smjmun",
          "https://linkedin.com/company/smjmun",
          "https://facebook.com/smjmun",
          "https://youtube.com/@smjmun",
        ],
        publisher: {
          "@id": "https://smjmun.com/#organization",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://smjmun.com/#website",
        url: "https://smjmun.com",
        name: "SMJMUN",
        publisher: {
          "@id": "https://smjmun.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://smjmun.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smjmun.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://smjmun.com/",
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <HomeClient />
    </>
  );
}
