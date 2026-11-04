import Link from "next/link";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { ZoomableImage } from "@/components/ZoomableImage";
import { localeHref, type Locale } from "@/content";
import { getArchivePhotos } from "@/content/home-photos";
import type { Dictionary } from "@/content/types";

export function ArchiveTeaser({ content, locale }: { content: Dictionary["archive"]; locale: Locale }) {
  return (
    <section className="archive-teaser" id="archive">
      <div className="wide">
        <div className="wrap start">
          <SectionHeading label={content.label} title={content.title} />
          <p>{content.intro}</p>
        </div>
        <ul className="archive-strip">
          {getArchivePhotos(locale).map(({ src, name }) => (
            <li key={src}>
              <figure>
                <ZoomableImage src={src} alt={name} locale={locale} />
                <figcaption>{name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <Link className="btn solid archive-cta" href={localeHref(locale, "plantas")}>
          {content.cta}
          <Icon name="arrow" size={18} />
        </Link>
      </div>
    </section>
  );
}
