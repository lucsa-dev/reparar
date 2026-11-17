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
import { SiteNav } from "@/components/SiteNav";
import { TopBar } from "@/components/TopBar";
import { getDictionary, isLocale } from "@/content";
import { pageHref, sectionUi, type SectionId } from "@/content/sections";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const content = getDictionary(lang);
  /** Each section shows a summary here and links to its own page. */
  const more = (id: SectionId) => ({ href: pageHref(lang, id), label: sectionUi[lang].more });
  return (
    <>
      <TopBar locale={lang} ui={content.ui} />
      <SiteNav content={content.nav} locale={lang} />
      <Hero content={content.hero} locale={lang} />
      <Repair content={content.repair} locale={lang} more={more("repair")} />
      <Method content={content.method} locale={lang} more={more("method")} />
      <Huipala content={content.huipala} locale={lang} more={more("huipala")} />
      <Territory content={content.territory} locale={lang} more={more("territory")} />
      <Voices content={content.voices} locale={lang} more={more("voices")} />
      <BigQuote content={content.bigQuote} />
      <FieldMission content={content.fieldMission} locale={lang} more={more("field-mission")} />
      <Fruits content={content.fruits} locale={lang} more={more("fruits")} />
      <ArchiveTeaser content={content.archive} locale={lang} />
      <Credits content={content.credits} more={more("credits")} />
      <References content={content.references} locale={lang} more={more("references")} />
      <Footer content={content} locale={lang} />
    </>
  );
}
