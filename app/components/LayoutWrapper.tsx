"use client";

import { usePathname } from "next/navigation";
import Footer from "@/app/components/Footer";
import ScrollToTop from "./ScrollToTop";
import SmoothScroll from "./SmoothScroll";
import SplashCursor from "./SplashCursorWrapper";

export default function LayoutWrapper({
  children,
  header,
  globalChat,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  globalChat?: React.ReactNode;
}) {
  const pathname = usePathname();

  const isStudio = pathname.startsWith("/studio");

  return (
    <>
      {!isStudio && (
        <>
          <SplashCursor
            DENSITY_DISSIPATION={3.2}
            VELOCITY_DISSIPATION={2.4}
            PRESSURE={0.12}
            CURL={2.8}
            SPLAT_RADIUS={0.18}
            SPLAT_FORCE={2200}
            COLOR_UPDATE_SPEED={8}
            SHADING
            RAINBOW_MODE={false}
            COLOR="#A97C50"
          />
          <SmoothScroll />
          <ScrollToTop />
          {globalChat}
          {header}
        </>
      )}
      {children}
    </>
  );
}