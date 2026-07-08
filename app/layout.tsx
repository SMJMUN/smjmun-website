
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
import { ServiceWorkerRegister } from "@/components/pwa/ServiceWorkerRegister";
import { Header } from "@/components/navigation/Header";


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

export const viewport: import("next").Viewport = {
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://smjmun.com"),
  title: {
    default: "SMJ MUN — Shri Seth Mangilalji Sahu International Model United Nations",
    template: "%s | SMJMUN",
  },
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
  applicationName: "SMJMUN",
  creator: "SMJMUN",
  publisher: "SMJMUN",
  authors: [{ name: "SMJMUN" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "SMJMUN — India's Premier Platform for Diplomacy & Leadership",
    description:
      "Partnering with leading educational institutions to build future diplomats, negotiators & global leaders.",
    url: "/",
    siteName: "SMJMUN",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "SMJMUN - Model United Nations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMJMUN — India's Premier Platform for Diplomacy & Leadership",
    description:
      "Partnering with leading educational institutions to build future diplomats, negotiators & global leaders.",
    creator: "@smjmun",
    site: "@smjmun",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "placeholder-google-site-verification-id",
    yandex: "placeholder-yandex-verification-id",
    yahoo: "placeholder-yahoo-verification-id",
    other: {
      me: ["info@smjmun.com"],
      "msvalidate.01": ["placeholder-bing-verification-id"],
      "p:domain_verify": ["placeholder-pinterest-verification-id"],
    },
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
          <LayoutWrapper header={<Header />}>{children}</LayoutWrapper>
        </div>
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
