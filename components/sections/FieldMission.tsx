import { Fragment } from "react";
import { FieldGallery } from "@/components/FieldGallery";
import { SectionHeading } from "@/components/SectionHeading";
import type { Locale } from "@/content";
import type { Dictionary } from "@/content/types";

export function FieldMission({ content, locale }: { content: Dictionary["fieldMission"]; locale: Locale }) {
  return (
    <section id="field-mission">
      <div className="wide">
        <div className="wrap start">
          <SectionHeading label={content.label} title={content.title} />
          <p>{content.intro}</p>
        </div>
        <ol className="timeline timeline-dates wrap start">
          {content.rows.map((row, index) => (
            <Fragment key={`${row.date}-${row.place}`}>
              {row.year !== content.rows[index - 1]?.year && (
                <li className="timeline-year"><span className="yr">{row.year}</span></li>
              )}
              <li className={row.key ? "key" : undefined}>
                <span className="yr">{row.date}</span>
                <span className="ev">
                  <b className="ev-place">{row.place}</b>
                  {row.record}
                </span>
              </li>
            </Fragment>
          ))}
        </ol>
        <p className="small muted ui mt-1">{content.source}</p>
        <h3 className="subhead">{content.galleryTitle}</h3>
        <p className="small mt-half">{content.galleryIntro}</p>
        <FieldGallery locale={locale} />
      </div>
    </section>
  );
}
