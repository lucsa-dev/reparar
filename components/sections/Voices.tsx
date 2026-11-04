import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/content/types";

export function Voices({ content }: { content: Dictionary["voices"] }) {
  return (
    <section>
      <div className="wrap">
        <SectionHeading label={content.label} title={content.title} />
        <p>{content.intro}</p>
        {content.quotes.map((quote) => (
          <blockquote key={quote.author}>
            <p>{quote.text}</p>
            <cite>{quote.author}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
