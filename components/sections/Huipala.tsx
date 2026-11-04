import { RichText } from "@/components/RichText";
import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/content/types";

export function Huipala({ content }: { content: Dictionary["huipala"] }) {
  return (
    <section>
      <div className="wrap">
        <SectionHeading label={content.label} title={content.title} />
        <RichText as="p" html={content.introHtml} />
        <p>{content.levelsIntro}</p>
      </div>
      <div className="wide">
        <div className="wiphala" role="list" aria-label={content.levelsAria}>
          {content.levels.map((level) => (
            <div role="listitem" key={level}>{level}</div>
          ))}
        </div>
        <p className="small muted ui levels-note">{content.levelsNote}</p>
      </div>
      <div className="wrap">
        <h3 className="subhead">{content.matrixTitle}</h3>
        <p className="small mt-half">{content.matrixIntro}</p>
        <div className="dims">
          {content.dimensions.map((dimension) => (
            <span key={dimension}>{dimension}</span>
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
