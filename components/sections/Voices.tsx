import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/content/types";

export function Voices({ content }: { content: Dictionary["voices"] }) {
  return (
    <section id="voices">
      <div className="wrap">
        <SectionHeading label={content.label} title={content.title} />
        <p>{content.intro}</p>
        {content.quotes.map((quote) => (
          <blockquote key={quote.author}>
            <Icon name="quote" size={26} className="quote-icon" />
            <p>{quote.text}</p>
            <cite>{quote.author}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
