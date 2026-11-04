import type { Metadata, Viewport } from "next";
import { Alegreya, Alegreya_Sans, Alegreya_Sans_SC } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getDictionary, isLocale, localeDetails, locales } from "@/content";
import { themeInitScript } from "@/lib/theme";
import "@/styles/index.css";

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-alegreya",
});
const alegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-alegreya-sans",
});
const alegreyaSansSc = Alegreya_Sans_SC({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-alegreya-sc",
});

type LangParams = { params: Promise<{ lang: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = { viewportFit: "cover" };

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localeDetails[lang].href,
      languages: Object.fromEntries(locales.map((locale) => [localeDetails[locale].htmlLang, localeDetails[locale].href])),
    },
  };
}

export default async function RootLayout({ children, params }: LangParams & { children: ReactNode }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html
      lang={localeDetails[lang].htmlLang}
      className={`${alegreya.variable} ${alegreyaSans.variable} ${alegreyaSansSc.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
