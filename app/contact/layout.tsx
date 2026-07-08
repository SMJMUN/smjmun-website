import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SMJMUN",
  description: "Get in touch with the SMJMUN Secretariat. Reach out via WhatsApp, phone, or email for inquiries about conferences, partnerships, and more.",
  alternates: {
    canonical: "https://smjmun.com/contact",
  },
  openGraph: {
    title: "Contact Us | SMJMUN",
    description: "Get in touch with the SMJMUN Secretariat.",
    url: "https://smjmun.com/contact",
  },
};

import { JsonLd } from "@/components/seo/JsonLd";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Us - SMJMUN",
      description: "Get in touch with the SMJMUN Secretariat. Reach out via WhatsApp, phone, or email.",
      url: "https://smjmun.com/contact",
      mainEntity: {
        "@type": "Organization",
        name: "SMJMUN",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-93024-70974",
          contactType: "customer support",
          email: "info@smjmun.com",
          availableLanguage: ["English", "Hindi"],
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I register for a conference?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Registration opens on our Conferences page for each upcoming session. Select your conference, choose your delegate type, and complete the registration form. You'll receive a confirmation email within 24 hours."
          }
        },
        {
          "@type": "Question",
          name: "What payment methods do you accept?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We accept UPI, net banking, major debit/credit cards, and bank transfers for school or group registrations. Payment links are shared after your registration is confirmed."
          }
        },
        {
          "@type": "Question",
          name: "Do you offer group rates for schools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Schools registering five or more delegates receive discounted group pricing along with a dedicated coordinator. Reach out via email or WhatsApp with your delegate count for a custom quote."
          }
        },
        {
          "@type": "Question",
          name: "How are committees and country allocations decided?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Allocations are based on registration order, prior experience, and preference forms submitted after registration. The Secretariat finalizes and shares allocations two to three weeks before the conference."
          }
        },
        {
          "@type": "Question",
          name: "Is accommodation arranged for outstation delegates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For select conferences, we partner with nearby hotels to offer discounted accommodation packages. Details are shared in your confirmation email if applicable to your conference."
          }
        },
        {
          "@type": "Question",
          name: "When are certificates issued?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Certificates of participation and awards are issued digitally within two to three weeks of the conference closing ceremony, sent to the email used during registration."
          }
        }
      ]
    }
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  );
}
