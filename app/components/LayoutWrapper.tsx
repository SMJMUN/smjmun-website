"use client";

import { usePathname } from "next/navigation";
import {Header} from "@/components/navigation/Header";
import Footer from "@/app/components/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isStudio = pathname.startsWith("/studio");

  return (
    <>
      {!isStudio && <Header />}
      {children}
    </>
  );
}