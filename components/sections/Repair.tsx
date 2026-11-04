import { SplitLayout } from "@/components/SplitLayout";
import { SectionPhotos } from "@/components/SectionPhotos";
import { Icon, type IconName } from "@/components/Icon";
import { RichText } from "@/components/RichText";
import { SectionHeading } from "@/components/SectionHeading";
import type { Locale } from "@/content";
import type { Dictionary } from "@/content/types";

const elementIcons: IconName[] = ["home", "coins", "heartPulse", "medal", "shield"];

export function Repair({ content, locale }: { content: Dictionary["repair"]; locale: Locale }) {
  return (
    <section id="repair">
      <SplitLayout side="right" media={<SectionPhotos section="repair" locale={locale} />}>
        <SectionHeading label={content.label} title={content.title} />
        <RichText as="p" html={content.introHtml} />
        <ul className="five">
          {content.elements.map((element, index) => (
            <li key={element.name}>
              <b><Icon name={elementIcons[index]} className="element-icon" />{element.name}</b>
              <span>{element.description}</span>
            </li>
          ))}
        </ul>
        <RichText as="p" html={content.closingHtml} />
      </SplitLayout>
    </section>
  );
}
