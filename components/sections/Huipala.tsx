import { SplitLayout } from "@/components/SplitLayout";
import { SectionPhotos } from "@/components/SectionPhotos";
import { Icon, type IconName } from "@/components/Icon";
import { RichText } from "@/components/RichText";
import { SectionHeading } from "@/components/SectionHeading";
import type { Locale } from "@/content";
import type { Dictionary } from "@/content/types";

const dimensionIcons: IconName[] = ["book", "hand", "heart", "sprout", "store", "zap", "smile", "users"];

/** Ladder colors from the Alerta Naranja nº 7 matrix: red (present reality) up to white (utopia). */
const ladder = [
  { color: "var(--w1)", light: true },
  { color: "var(--w2)", light: false },
  { color: "var(--w3)", light: false },
  { color: "var(--w5)", light: true },
  { color: "var(--w8)", light: false },
  { color: "var(--w6)", light: true },
  { color: "var(--w7)", light: true },
  { color: "var(--w4)", light: false },
];

export function Huipala({ content, locale }: { content: Dictionary["huipala"]; locale: Locale }) {
  return (
    <section id="huipala">
      <SplitLayout side="right" wideMedia media={<SectionPhotos section="huipala" locale={locale} />}>
        <SectionHeading label={content.label} title={content.title} />
        <RichText as="p" html={content.introHtml} />
        <p>{content.levelsIntro}</p>
      </SplitLayout>
      <div className="wide">
        <ol className="wiphala" aria-label={content.levelsAria}>
          {content.levels.map((level, index) => (
            <li
              key={level.name}
              className={ladder[index]?.light ? "on-dark" : undefined}
              style={{ background: ladder[index]?.color }}
            >
              <span className="step">{index === 0 ? "0" : index}</span>
              <b>{level.name}</b>
              <span className="element">{level.element}</span>
              <span className="hint">{level.hint}</span>
            </li>
          ))}
        </ol>
        <p className="small muted ui levels-note">{content.levelsNote}</p>
      </div>
      <div className="wrap">
        <h3 className="subhead">{content.spheresTitle}</h3>
        <p className="small mt-half">{content.spheresIntro}</p>
      </div>
      <div className="wide">
        <div className="spheres">
          {content.spheres.map((sphere) => (
            <div key={sphere.title}>
              <b>{sphere.title}</b>
              <span className="items">{sphere.items}</span>
              <span className="value">→ {sphere.value}</span>
              <ul>
                {sphere.shifts.map((shift) => (
                  <li key={shift}>{shift}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="wrap">
        <h3 className="subhead">{content.processTitle}</h3>
        <RichText as="p" className="mt-half" html={content.processHtml} />
        <RichText as="p" html={content.adaptHtml} />
        <RichText as="p" className="small muted ui" html={content.sourceHtml} />
        <h3 className="subhead">{content.matrixTitle}</h3>
        <p className="small mt-half">{content.matrixIntro}</p>
        <div className="dims">
          {content.dimensions.map((dimension, index) => (
            <span key={dimension}><Icon name={dimensionIcons[index]} size={16} />{dimension}</span>
          ))}
        </div>
        <RichText as="p" className="small" html={content.horizonsHtml} />
        <div className="horiz">
          {content.transformations.map((transformation) => (
            <div key={transformation.title}>
              <b>{transformation.title}</b>
              {transformation.description}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
