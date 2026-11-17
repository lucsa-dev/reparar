import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MandalaDashboard } from "@/components/MandalaDashboard";
import { Footer } from "@/components/sections/Footer";
import { SiteNav } from "@/components/SiteNav";
import { TopBar } from "@/components/TopBar";
import { getDictionary, isLocale, localeDetails, localeHref, locales, type Locale } from "@/content";

type MandalaPageProps = { params: Promise<{ lang: string }> };

const copy: Record<Locale, { metaTitle: string; back: string; label: string; titleHtml: string; lede: string; note?: string }> = {
  pt: {
    metaTitle: "Mandala das Lideranças · Reparação Integral Comunitária",
    back: "← Voltar ao início",
    label: "escuta das lideranças · 2024–2025",
    titleHtml: "Mandala das <em>Lideranças</em>",
    lede: "As 15 entrevistas com quem faz a Clínica Ambiental, lidas pelos 12 sentidos da mandala de Aquarela, semiose e design (Vieira e Silva & Pfützenreuter). Cada ponto é um trecho de fala: a cor diz qual sentido ele toca, o anel diz a que pergunta ele responde.",
  },
  es: {
    metaTitle: "Mandala de los Liderazgos · Reparación Integral Comunitaria",
    back: "← Volver al inicio",
    label: "escucha de los liderazgos · 2024–2025",
    titleHtml: "Mandala de los <em>Liderazgos</em>",
    lede: "Las 15 entrevistas con quienes hacen la Clínica Ambiental, leídas a través de los 12 sentidos de la mandala de Aquarela, semiose e design (Vieira e Silva & Pfützenreuter).",
    note: "El panel está en portugués; las citas están en el español original.",
  },
  en: {
    metaTitle: "Leaders' Mandala · Comprehensive Community Reparation",
    back: "← Back to home",
    label: "listening to the leaders · 2024–2025",
    titleHtml: "Leaders' <em>Mandala</em>",
    lede: "The 15 interviews with the people who make the Clínica Ambiental, read through the 12 senses of the mandala in Aquarela, semiose e design (Vieira e Silva & Pfützenreuter).",
    note: "The panel is in Portuguese; quotes are in the original Spanish.",
  },
};

export async function generateMetadata({ params }: MandalaPageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    title: copy[lang].metaTitle,
    description: copy[lang].lede,
    alternates: {
      canonical: localeHref(lang, "mandala"),
      languages: Object.fromEntries(locales.map((locale) => [localeDetails[locale].htmlLang, localeHref(locale, "mandala")])),
    },
  };
}

export default async function MandalaPage({ params }: MandalaPageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const text = copy[lang];
  const content = getDictionary(lang);
  return (
    <>
      <TopBar locale={lang} ui={content.ui} path="mandala" />
      <SiteNav content={content.nav} home={localeHref(lang) === "/" ? "/" : `${localeHref(lang)}/`} mandalaHref={localeHref(lang, "mandala")} current="mandala" />
      <main className="md-main wide">
        <Link className="plants-back" href={localeHref(lang)}>{text.back}</Link>
        <header className="md-hero">
          <span className="label">{text.label}</span>
          <h1 dangerouslySetInnerHTML={{ __html: text.titleHtml }} />
          <p className="md-lede">{text.lede}</p>
          {text.note && <p className="md-lede small">{text.note}</p>}
        </header>
        <MandalaDashboard />
      </main>
      <Footer content={content} locale={lang} />
    </>
  );
}
