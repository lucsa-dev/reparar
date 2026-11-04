import { SplitLayout } from "@/components/SplitLayout";
import { SectionPhotos } from "@/components/SectionPhotos";
import { Icon, type IconName } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import type { Locale } from "@/content";
import type { Dictionary } from "@/content/types";

const stageIcons: IconName[] = ["eye", "sprout", "sun"];

export function Method({ content, locale }: { content: Dictionary["method"]; locale: Locale }) {
  return (
    <section id="method" className="band">
      <div className="wide">
        <SplitLayout side="left" wideMedia media={<SectionPhotos section="method" locale={locale} />}>
          <SectionHeading label={content.label} title={content.title} />
          <p>{content.intro}</p>
        </SplitLayout>
        <div className="stages">
          {content.stages.map((stage, index) => (
            <article className="stage" key={stage.step}>
              <span className="stage-icon"><Icon name={stageIcons[index]} size={28} /></span>
              <span className="step">{stage.step}</span>
              <h3>{stage.name}</h3>
              {stage.originalName && <span className="es" lang="es">{stage.originalName}</span>}
              <p className="side"><b><Icon name="pin" size={14} />{content.ecuadorLabel}</b>{stage.ecuador}</p>
              <p className="side"><b><Icon name="pin" size={14} />{content.cearaLabel}</b>{stage.ceara}</p>
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
