import { RichText } from "@/components/RichText";
import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/content/types";

export function References({ content }: { content: Dictionary["references"] }) {
  return (
    <section id="references">
      <div className="wrap">
        <SectionHeading label={content.label} title={content.title} />
        <ul className="refs">
          {content.itemsHtml.map((item) => (
            <RichText as="li" key={item} html={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
