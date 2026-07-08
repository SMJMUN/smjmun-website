import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships | SMJMUN",
  description: "Collaborate with SMJMUN. We partner with schools, colleges, educational organizations, and strategic sponsors to build long-term leadership experiences.",
  alternates: {
    canonical: "https://smjmun.com/partnerships",
  },
  openGraph: {
    title: "Partnerships | SMJMUN",
    description: "Collaborate with SMJMUN. We partner with institutions to create meaningful leadership experiences.",
    url: "https://smjmun.com/partnerships",
  },
};

export default function PartnershipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
