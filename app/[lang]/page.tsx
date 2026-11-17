import { notFound } from "next/navigation";
import { BigQuote } from "@/components/sections/BigQuote";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { SectionCards } from "@/components/sections/SectionCards";
import { SiteNav } from "@/components/SiteNav";
import { TopBar } from "@/components/TopBar";
import { getDictionary, isLocale } from "@/content";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const content = getDictionary(lang);
  return (
    <>
      <TopBar locale={lang} ui={content.ui} />
      <SiteNav content={content.nav} locale={lang} />
      <Hero content={content.hero} locale={lang} />
      <SectionCards content={content} locale={lang} />
      <BigQuote content={content.bigQuote} />
      <Footer content={content} locale={lang} />
    </>
  );
}
