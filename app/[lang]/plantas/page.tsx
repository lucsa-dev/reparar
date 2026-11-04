import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PlantCatalog } from "@/components/plants/PlantCatalog";
import { TopBar } from "@/components/TopBar";
import { getDictionary, isLocale, localeHref } from "@/content";
import { plantCopy } from "@/content/plants";

type PlantsPageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PlantsPageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const copy = plantCopy[lang];
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: { canonical: localeHref(lang, "plantas") },
    // Stays out of search engines until the communities confirm consent for publication.
    robots: { index: false, follow: false },
  };
}

export default async function PlantsPage({ params }: PlantsPageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = plantCopy[lang];
  return (
    <>
      <TopBar locale={lang} ui={getDictionary(lang).ui} path="plantas" />
      <main className="plants wide">
        <Link className="plants-back" href={localeHref(lang)}>{copy.back}</Link>
        <span className="label">{copy.label}</span>
        <h1>{copy.title}</h1>
        <p className="plants-intro">{copy.intro}</p>
        <div className="plants-notices">
          <p>{copy.draftNotice}</p>
          <p>{copy.healthNotice}</p>
        </div>
        <PlantCatalog locale={lang} />
      </main>
    </>
  );
}
