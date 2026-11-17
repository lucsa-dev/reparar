import { SectionMore, type More } from "@/components/SectionMore";
import { SplitLayout } from "@/components/SplitLayout";
import { SectionPhotos } from "@/components/SectionPhotos";
import { RichText } from "@/components/RichText";
import { SectionHeading } from "@/components/SectionHeading";
import type { Locale } from "@/content";
import type { Dictionary } from "@/content/types";

export function References({ content, locale, more }: { content: Dictionary["references"]; locale: Locale; more?: More }) {
  return (
    <section id="references">
      <SplitLayout side="right" media={<SectionPhotos section="references" locale={locale} />}>
        <SectionHeading label={content.label} title={content.title} />
        <ul className="refs">
          {(more ? content.itemsHtml.slice(0, 3) : content.itemsHtml).map((item) => (
            <RichText as="li" key={item} html={item} />
          ))}
        </ul>
        {more && <SectionMore more={more} />}
      </SplitLayout>
    </section>
  );
}
