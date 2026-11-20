import { notFound } from "next/navigation";
import { Contours, PartHeader, Scene, SeaEnd } from "@/components/Estuary";
import { River } from "@/components/River";
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
import { estuary } from "@/content/estuary";
import { pageHref, sectionUi, type SectionId } from "@/content/sections";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const content = getDictionary(lang);
  const copy = estuary[lang];
  /** Each section shows a summary here and links to its own page. */
  const more = (id: SectionId) => ({ href: pageHref(lang, id), label: sectionUi[lang].more });
  const tag = (i: number) => `${String(i + 1).padStart(2, "0")} · ${copy.scenes[i]}`;
  return (
    <>
      <div className="estuary-head ink-dark" id="top">
        <TopBar locale={lang} ui={content.ui} />
      </div>
      <SiteNav content={content.nav} locale={lang} tone="dark" />
      <div className="estuary-hero ink-dark">
        <Contours />
        <Hero content={content.hero} locale={lang} />
        <div className="scrollhint mono wide"><i />{copy.hint}</div>
      </div>

      <div className="estuary-bridge" aria-hidden="true" />

      <div className="rv">
        <River copy={copy} />
        <Scene kind="sertao" side="l" tag={tag(0)}>
          <PartHeader label={copy.bridge.label} titleHtml={copy.bridge.titleHtml} />
        </Scene>
        <Scene kind="sertao" side="l"><Repair content={content.repair} locale={lang} more={more("repair")} /></Scene>
        <Scene kind="sertao" side="l"><Method content={content.method} locale={lang} more={more("method")} /></Scene>
        <Scene kind="rio" side="r" tag={tag(1)}><Huipala content={content.huipala} locale={lang} more={more("huipala")} /></Scene>
        <Scene kind="rio" side="r"><Territory content={content.territory} locale={lang} more={more("territory")} /></Scene>
        <Scene kind="mangue" side="l" tag={tag(2)}><Voices content={content.voices} locale={lang} more={more("voices")} /></Scene>
        <Scene kind="mangue" side="l"><BigQuote content={content.bigQuote} /></Scene>
        <Scene kind="lama" side="r" tag={tag(3)}><FieldMission content={content.fieldMission} locale={lang} more={more("field-mission")} /></Scene>
        <Scene kind="lama" side="r"><Fruits content={content.fruits} locale={lang} more={more("fruits")} /></Scene>
        <Scene kind="encontro" side="l" tag={tag(4)}><ArchiveTeaser content={content.archive} locale={lang} /></Scene>
        <Scene kind="encontro" side="l"><Credits content={content.credits} more={more("credits")} /></Scene>
        <Scene kind="mar" side="r" tag={tag(5)}><References content={content.references} locale={lang} more={more("references")} /></Scene>
        <SeaEnd copy={copy.sea} />
      </div>
      <Footer content={content} locale={lang} />
    </>
  );
}
