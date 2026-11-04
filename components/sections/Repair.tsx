import { RichText } from "@/components/RichText";
import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/content/types";

export function Repair({ content }: { content: Dictionary["repair"] }) {
  return (
    <section>
      <div className="wrap">
        <SectionHeading label={content.label} title={content.title} />
        <RichText as="p" html={content.introHtml} />
        <ul className="five">
          {content.elements.map((element) => (
            <li key={element.name}>
              <b>{element.name}</b>
              <span>{element.description}</span>
            </li>
          ))}
        </ul>
        <RichText as="p" html={content.closingHtml} />
      </div>
    </section>
  );
}
