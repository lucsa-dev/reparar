import Link from "next/link";
import { Icon, type IconName } from "@/components/Icon";
import { RichText } from "@/components/RichText";
import { ZoomableImage } from "@/components/ZoomableImage";
import { localeHref, type Locale } from "@/content";
import { getHeroPhotos } from "@/content/home-photos";
import type { Dictionary } from "@/content/types";

const factIcons: IconName[] = ["layers", "users", "calendar", "document"];

export function Hero({ content, locale }: { content: Dictionary["hero"]; locale: Locale }) {
  return (
    <header className="hero wide">
      <div className="hero-main">
        <div className="hero-text">
          <span className="kicker">{content.kicker}</span>
          <RichText as="h1" html={content.titleHtml} />
          <p className="lede">{content.lede}</p>
        </div>
        <div className="hero-mosaic">
          {getHeroPhotos(locale).map(({ src, name }) => (
            <figure key={src}>
              <ZoomableImage src={src} alt={name} locale={locale} lazy={false} />
              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="route">
        <span className="route-stop">
          <Icon name="pin" />
          <RichText html={content.routeFromHtml} />
        </span>
        <span className="route-line" aria-hidden="true" />
        <span className="route-stop">
          <Icon name="pin" />
          <RichText html={content.routeToHtml} />
        </span>
      </div>
      <div className="ctas">
        <a className="btn solid" href="https://doi.org/10.36517/rm2026.e25009" target="_blank" rel="noopener">{content.cta.article}</a>
        <a className="btn" href="https://www.clinicambiental.org/" target="_blank" rel="noopener">{content.cta.clinic}</a>
        <Link className="btn" href={localeHref(locale, "plantas")}>{content.cta.plants}</Link>
      </div>
      <div className="facts">
        {content.facts.map((fact, index) => (
          <div key={fact.value}>
            <Icon name={factIcons[index]} className="fact-icon" />
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </div>
        ))}
      </div>
    </header>
  );
}
