import { SectionPhotos } from "@/components/SectionPhotos";
import { SectionHeading } from "@/components/SectionHeading";
import type { Locale } from "@/content";
import type { Dictionary } from "@/content/types";

export function Territory({ content, locale }: { content: Dictionary["territory"]; locale: Locale }) {
  return (
    <section id="territory">
      <div className="wrap">
        <SectionHeading label={content.label} title={content.title} />
        <p>{content.intro}</p>
        <SectionPhotos section="territory" locale={locale} showBookNote />
        <ol className="timeline">
          {content.timeline.map((entry) => (
            <li key={entry.year} className={entry.key ? "key" : undefined}>
              <span className="yr">{entry.year}</span>
              <span className="ev">
                {entry.event}
                {entry.source && <small>{entry.source}</small>}
              </span>
            </li>
          ))}
        </ol>
        <p className="small muted subhead">{content.closing}</p>
      </div>
    </section>
  );
}
