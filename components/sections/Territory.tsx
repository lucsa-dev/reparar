import { SectionMore, type More } from "@/components/SectionMore";
import { SplitLayout } from "@/components/SplitLayout";
import { SectionPhotos } from "@/components/SectionPhotos";
import { SectionHeading } from "@/components/SectionHeading";
import type { Locale } from "@/content";
import type { Dictionary } from "@/content/types";

export function Territory({ content, locale, more }: { content: Dictionary["territory"]; locale: Locale; more?: More }) {
  return (
    <section id="territory">
      <SplitLayout side="left" wideMedia={Boolean(more)} media={<SectionPhotos section="territory" locale={locale} showBookNote />}>
        <SectionHeading label={content.label} title={content.title} />
        <p>{content.intro}</p>
        {more ? <SectionMore more={more} /> : <>
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
        </>}
      </SplitLayout>
      {!more && (
        <>
          <div className="wrap">
            <h3 className="subhead">{content.wayOfLife.title}</h3>
            <p className="mt-half">{content.wayOfLife.intro}</p>
            <dl className="ceara-utopias way-of-life">
              {content.wayOfLife.items.map(({ name, description }) => (
                <div key={name}>
                  <dt>{name}</dt>
                  <dd>{description}</dd>
                </div>
              ))}
            </dl>
            <blockquote>
              <p>{content.wayOfLife.quote}</p>
              <cite>{content.wayOfLife.cite}</cite>
            </blockquote>
            <p className="small muted ui">{content.wayOfLife.source}</p>
          </div>
          <div className="wrap">
            <h3 className="subhead">{content.tac.title}</h3>
            <p className="mt-half">{content.tac.intro}</p>
            <table className="tac-table">
              <thead>
                <tr>
                  <th scope="col">{content.tac.promiseLabel}</th>
                  <th scope="col">{content.tac.outcomeLabel}</th>
                </tr>
              </thead>
              <tbody>
                {content.tac.rows.map(({ promise, outcome }) => (
                  <tr key={promise}>
                    <td>{promise}</td>
                    <td>{outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <blockquote>
              <p>{content.tac.quote}</p>
              <cite>{content.tac.cite}</cite>
            </blockquote>
            <p className="small muted ui">{content.tac.source}</p>
          </div>
        </>
      )}
    </section>
  );
}
