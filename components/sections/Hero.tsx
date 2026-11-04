import Link from "next/link";
import { RichText } from "@/components/RichText";
import { localeHref, type Locale } from "@/content";
import type { Dictionary } from "@/content/types";

export function Hero({ content, locale }: { content: Dictionary["hero"]; locale: Locale }) {
  return (
    <header className="hero wrap">
      <span className="kicker">{content.kicker}</span>
      <RichText as="h1" html={content.titleHtml} />
      <p className="lede">{content.lede}</p>
      <div className="route">
        <RichText html={content.routeFromHtml} />
        <span className="arrow" aria-hidden="true">⇄</span>
        <RichText html={content.routeToHtml} />
      </div>
      <div className="ctas">
        <a className="btn solid" href="https://doi.org/10.36517/rm2026.e25009" target="_blank" rel="noopener">{content.cta.article}</a>
        <a className="btn" href="https://www.clinicambiental.org/" target="_blank" rel="noopener">{content.cta.clinic}</a>
        <Link className="btn" href={localeHref(locale, "plantas")}>{content.cta.plants}</Link>
      </div>
      <div className="facts">
        {content.facts.map((fact) => (
          <div key={fact.value}>
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </div>
        ))}
      </div>
    </header>
  );
}
