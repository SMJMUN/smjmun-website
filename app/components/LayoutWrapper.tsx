"use client";

import { usePathname } from "next/navigation";
// Header is passed as a prop from layout.tsx because it is a Server Component
import Footer from "@/app/components/Footer";

export default function LayoutWrapper({
  children,
  header,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
}) {
  const pathname = usePathname();

  const isStudio = pathname.startsWith("/studio");

  return (
    <>
      {!isStudio && header}
      {children}
    </>
  );
}