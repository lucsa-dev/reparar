import type { Metadata, Viewport } from "next";
import { DM_Sans, Lora } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getDictionary, isLocale, localeDetails, localeHref, locales } from "@/content";
import { themeInitScript } from "@/lib/theme";
import "@/styles/index.css";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-lora",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

type LangParams = { params: Promise<{ lang: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = { viewportFit: "cover", themeColor: "#1E1711" };

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return {
    title: meta.title,
    description: meta.description,
    icons: {
      icon: [
        { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/brand/favicon-192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: "/brand/apple-touch-icon.png",
    },
    alternates: {
      canonical: localeHref(lang),
      languages: Object.fromEntries(locales.map((locale) => [localeDetails[locale].htmlLang, localeHref(locale)])),
    },
  };
}

export default async function RootLayout({ children, params }: LangParams & { children: ReactNode }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html
      lang={localeDetails[lang].htmlLang}
      data-theme="dark"
      className={`${lora.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
