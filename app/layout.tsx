
import type { Metadata } from "next";
import { Playfair_Display, Inter, Geist } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import { cn } from "@/lib/utils";
import LayoutWrapper from "@/app/components/LayoutWrapper";
import SmoothScroll from "./components/SmoothScroll";
import { montserrat } from "./fonts";
import SplashCursor from "./components/SplashCursor";
import FloatingContactWidget from "./components/FloatingWidget";



const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SMJ MUN — Shri Seth Mangilalji Sahu International Model United Nations",
  description:
    "India's premier platform for diplomacy, leadership & global engagement. Partnering with leading educational institutions to build future diplomats, negotiators & global leaders.",
  keywords: [
    "Model United Nations",
    "MUN India",
    "SMJ MUN",
    "diplomacy",
    "leadership",
    "student conferences",
    "international relations",
  ],
  openGraph: {
    title: "SMJMUN — India's Premier Platform for Diplomacy & Leadership",
    description:
      "Partnering with leading educational institutions to build future diplomats, negotiators & global leaders.",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html
      lang="en"
      className={cn(playfair.variable, inter.variable, "font-sans", geist.variable, montserrat.variable)}
    >
      <body className="antialiased min-h-screen flex flex-col">
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
          COLOR="#A97C50" />
        <div className="flex-1">
          {/* {children} */}
          <SmoothScroll />
          <ScrollToTop />
          <FloatingContactWidget/>
          <LayoutWrapper>{children}</LayoutWrapper>
        </div>
      </body>
    </html>
  );
}
