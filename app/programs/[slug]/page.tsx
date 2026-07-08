import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProgramBySlug, getAllProgramSlugs } from "@/data/programs";
import { ProgramLanding } from "@/components/program/ProgramLanding";

interface ProgramPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    return { title: "Program Not Found — SMJ MUN" };
  }

  return {
    title: program.meta.title,
    description: program.meta.description,
    alternates: { canonical: `https://smjmun.com/programs/${slug}` },
    openGraph: {
      title: program.meta.title,
      description: program.meta.description,
      type: "website",
      url: `https://smjmun.com/programs/${slug}`,
    },
  };
}

import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return getAllProgramSlugs().map((slug) => ({ slug }));
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  const baseUrl = "https://smjmun.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: program.meta.title,
        description: program.meta.description,
        provider: {
          "@type": "EducationalOrganization",
          name: "SMJMUN",
          url: baseUrl,
        },
      },
      {
        "@type": "EducationalOccupationalProgram",
        name: program.meta.title,
        description: program.meta.description,
        provider: {
          "@type": "EducationalOrganization",
          name: "SMJMUN",
          url: baseUrl,
        },
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
            name: "Programs",
            item: `${baseUrl}/programs`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: program.meta.title,
            item: `${baseUrl}/programs/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ProgramLanding data={program} />
    </>
  );
}
