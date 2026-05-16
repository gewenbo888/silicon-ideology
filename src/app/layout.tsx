import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://silicon-ideology.psyverse.fun"),
  title: "Silicon Valley Ideological Universe | 硅谷思想宇宙",
  description:
    "A civilization-scale knowledge graph of every ideology, lineage, conflict, and belief system that shaped Silicon Valley from cybernetics to the AGI era. Bilingual EN · 中文.",
  keywords: [
    "Silicon Valley ideology",
    "硅谷思想",
    "hacker culture",
    "cypherpunk",
    "e/acc",
    "effective accelerationism",
    "effective altruism",
    "AI religion",
    "network states",
    "transhumanism",
    "techno-optimism",
    "techno-libertarianism",
    "AGI belief systems",
    "venture capital philosophy",
    "founder mythology",
    "Peter Thiel",
    "Elon Musk",
    "Sam Altman",
    "Marc Andreessen",
    "Balaji Srinivasan",
    "Vitalik Buterin",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "zh-CN": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Silicon Valley Ideological Universe · 硅谷思想宇宙",
    description:
      "A bilingual knowledge graph of every ideology, lineage, conflict, and belief system that shaped Silicon Valley.",
    url: "https://silicon-ideology.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Silicon Valley Ideological Universe",
    description:
      "A civilization-scale knowledge graph of Silicon Valley's ideologies.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#08090c" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@300;400;500;600;700&family=Noto+Serif+SC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative min-h-screen overflow-x-hidden">
        <LangProvider>
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LangProvider>
        <Script
          src="https://analytics-dashboard-two-blue.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
