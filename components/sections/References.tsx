import { SectionPhotos } from "@/components/SectionPhotos";
import { RichText } from "@/components/RichText";
import { SectionHeading } from "@/components/SectionHeading";
import type { Locale } from "@/content";
import type { Dictionary } from "@/content/types";

export function References({ content, locale }: { content: Dictionary["references"]; locale: Locale }) {
  return (
    <section id="references">
      <div className="wrap">
        <SectionHeading label={content.label} title={content.title} />
        <SectionPhotos section="references" locale={locale} />
        <ul className="refs">
          {content.itemsHtml.map((item) => (
            <RichText as="li" key={item} html={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
