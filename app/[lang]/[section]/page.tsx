import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Credits } from "@/components/sections/Credits";
import { FieldMission } from "@/components/sections/FieldMission";
import { Footer } from "@/components/sections/Footer";
import { Fruits } from "@/components/sections/Fruits";
import { Huipala } from "@/components/sections/Huipala";
import { Method } from "@/components/sections/Method";
import { References } from "@/components/sections/References";
import { Repair } from "@/components/sections/Repair";
import { Territory } from "@/components/sections/Territory";
import { Voices } from "@/components/sections/Voices";
import { SiteNav } from "@/components/SiteNav";
import { TopBar } from "@/components/TopBar";
import { getDictionary, isLocale, localeDetails, localeHref, locales, type Locale } from "@/content";
import { findSection, sectionPages, sectionUi, type SectionId } from "@/content/sections";
import type { Dictionary } from "@/content/types";

type SectionPageProps = { params: Promise<{ lang: string; section: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => sectionPages.map(({ slug }) => ({ lang, section: slug })));
}

const render: Record<SectionId, (content: Dictionary, locale: Locale) => ReactNode> = {
  repair: (c, l) => <Repair content={c.repair} locale={l} />,
  method: (c, l) => <Method content={c.method} locale={l} />,
  huipala: (c, l) => <Huipala content={c.huipala} locale={l} />,
  territory: (c, l) => <Territory content={c.territory} locale={l} />,
  voices: (c, l) => <Voices content={c.voices} locale={l} />,
  "field-mission": (c, l) => <FieldMission content={c.fieldMission} locale={l} />,
  fruits: (c, l) => <Fruits content={c.fruits} locale={l} />,
  credits: (c) => <Credits content={c.credits} />,
  references: (c, l) => <References content={c.references} locale={l} />,
};

const dictionaryKey: Record<SectionId, keyof Dictionary> = {
  repair: "repair",
  method: "method",
  huipala: "huipala",
  territory: "territory",
  voices: "voices",
  "field-mission": "fieldMission",
  fruits: "fruits",
  credits: "credits",
  references: "references",
};

function sectionTitle(content: Dictionary, id: SectionId) {
  return (content[dictionaryKey[id]] as { title: string }).title;
}

export async function generateMetadata({ params }: SectionPageProps): Promise<Metadata> {
  const { lang, section } = await params;
  const page = findSection(section);
  if (!isLocale(lang) || !page) return {};
  const content = getDictionary(lang);
  return {
    title: `${sectionTitle(content, page.id)} · ${content.meta.title}`,
    alternates: {
      canonical: localeHref(lang, page.slug),
      languages: Object.fromEntries(locales.map((locale) => [localeDetails[locale].htmlLang, localeHref(locale, page.slug)])),
    },
  };
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { lang, section } = await params;
  const page = findSection(section);
  if (!isLocale(lang) || !page) notFound();
  const content = getDictionary(lang);
  const ui = sectionUi[lang];
  const index = sectionPages.indexOf(page);
  const previous = sectionPages[index - 1];
  const next = sectionPages[index + 1];
  const navLabel = (id: string) => content.nav.items.find((item) => item.id === id)?.label ?? id;
  return (
    <>
      <TopBar locale={lang} ui={content.ui} path={page.slug} />
      <SiteNav content={content.nav} locale={lang} current={page.id} />
      <main className="section-page">
        <div className="section-page-back">
          <Link className="plants-back" href={localeHref(lang)}>{ui.back}</Link>
        </div>
        {render[page.id](content, lang)}
        <nav className="section-pager" aria-label={content.nav.label}>
          {previous && (
            <Link className="previous" href={localeHref(lang, previous.slug)}>
              <small>← {ui.previous}</small>
              <b>{navLabel(previous.id)}</b>
            </Link>
          )}
          {next && (
            <Link className="next" href={localeHref(lang, next.slug)}>
              <small>{ui.next} →</small>
              <b>{navLabel(next.id)}</b>
            </Link>
          )}
        </nav>
      </main>
      <Footer content={content} locale={lang} />
    </>
  );
}
