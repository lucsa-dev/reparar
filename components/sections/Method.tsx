import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/content/types";

export function Method({ content }: { content: Dictionary["method"] }) {
  return (
    <section>
      <div className="wide">
        <div className="wrap start">
          <SectionHeading label={content.label} title={content.title} />
          <p>{content.intro}</p>
        </div>
        <div className="stages">
          {content.stages.map((stage) => (
            <article className="stage" key={stage.step}>
              <span className="step">{stage.step}</span>
              <h3>{stage.name}</h3>
              {stage.originalName && <span className="es" lang="es">{stage.originalName}</span>}
              <p className="side"><b>{content.ecuadorLabel}</b>{stage.ecuador}</p>
              <p className="side"><b>{content.cearaLabel}</b>{stage.ceara}</p>
            </article>
          ))}
        </div>
        <div className="cross">
          <span className="muted">{content.crossLabel}</span>
          {content.crossItems.map((item) => (
            <span className="chip" key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
