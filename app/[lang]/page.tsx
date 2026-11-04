import { notFound } from "next/navigation";
import { ArchiveTeaser } from "@/components/sections/ArchiveTeaser";
import { BigQuote } from "@/components/sections/BigQuote";
import { Credits } from "@/components/sections/Credits";
import { FieldMission } from "@/components/sections/FieldMission";
import { Footer } from "@/components/sections/Footer";
import { Fruits } from "@/components/sections/Fruits";
import { Hero } from "@/components/sections/Hero";
import { Huipala } from "@/components/sections/Huipala";
import { Method } from "@/components/sections/Method";
import { References } from "@/components/sections/References";
import { Repair } from "@/components/sections/Repair";
import { Territory } from "@/components/sections/Territory";
import { Voices } from "@/components/sections/Voices";
import { TopBar } from "@/components/TopBar";
import { getDictionary, isLocale } from "@/content";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const content = getDictionary(lang);
  return (
    <>
      <TopBar locale={lang} ui={content.ui} />
      <Hero content={content.hero} locale={lang} />
      <Repair content={content.repair} />
      <Method content={content.method} />
      <Huipala content={content.huipala} />
      <Territory content={content.territory} />
      <Voices content={content.voices} />
      <BigQuote content={content.bigQuote} />
      <FieldMission content={content.fieldMission} />
      <Fruits content={content.fruits} />
      <ArchiveTeaser content={content.archive} locale={lang} />
      <Credits content={content.credits} />
      <References content={content.references} />
      <Footer content={content.footer} />
    </>
  );
}
