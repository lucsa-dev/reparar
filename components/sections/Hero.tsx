import Link from "next/link";
import { RichText } from "@/components/RichText";
import { HeroMandala, HeroMandalaPanel } from "@/components/HeroMandala";
import { localeHref, type Locale } from "@/content";
import type { Dictionary } from "@/content/types";

const mandalaCopy: Record<Locale, { label: string; title: string; hint: string; cta: string; close: string; more: string }> = {
  pt: { label: "Mandala das Lideranças", title: "15 vozes da Clínica Ambiental lidas pelos 12 sentidos da mandala", hint: "Clique para ler as falas", cta: "Explorar a Mandala das Lideranças →", close: "× Fechar", more: "Abrir a Mandala completa →" },
  es: { label: "Mandala de los Liderazgos", title: "15 voces de la Clínica Ambiental leídas por los 12 sentidos de la mandala", hint: "Haz clic para leer las voces", cta: "Explorar la Mandala de los Liderazgos →", close: "× Cerrar", more: "Abrir la Mandala completa →" },
  en: { label: "Leaders' Mandala", title: "15 voices from the Clínica Ambiental read through the mandala's 12 senses", hint: "Click to read the voices", cta: "Explore the Leaders' Mandala →", close: "× Close", more: "Open the full Mandala →" },
};

export function Hero({ content, locale }: { content: Dictionary["hero"]; locale: Locale }) {
  return (
    <header className="hero wide">
      <div className="hero-main">
        <div className="hero-text">
          <span className="kicker">{content.kicker}</span>
          <RichText as="h1" html={content.titleHtml} />
          <p className="lede">{content.lede}</p>
        </div>
        <HeroMandalaPanel />
        <figure className="hero-mandala-fig">
          <HeroMandala href={localeHref(locale, "mandala")} hint={mandalaCopy[locale].hint} label={mandalaCopy[locale].label} close={mandalaCopy[locale].close} more={mandalaCopy[locale].more} />
          <figcaption>
            <span>{mandalaCopy[locale].title}</span>
            <Link href={localeHref(locale, "mandala")}>{mandalaCopy[locale].cta}</Link>
          </figcaption>
        </figure>
      </div>
      <div className="route">
        <span className="route-stop">
          <img className="flag" src="/flags/ceara.png" alt="" width={32} height={22} />
          <RichText html={content.routeFromHtml} />
        </span>
        <span className="route-line" aria-hidden="true" />
        <span className="route-stop">
          <img className="flag" src="/flags/equador.png" alt="" width={32} height={21} />
          <RichText html={content.routeToHtml} />
        </span>
      </div>
      <div className="ctas">
        <a className="btn solid" href="https://doi.org/10.36517/rm2026.e25009" target="_blank" rel="noopener">{content.cta.article}</a>
        <a className="btn" href="https://www.clinicambiental.org/" target="_blank" rel="noopener">{content.cta.clinic}</a>
        <Link className="btn" href={localeHref(locale, "plantas")}>{content.cta.plants}</Link>
      </div>
    </header>
  );
}
