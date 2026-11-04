import { SplitLayout } from "@/components/SplitLayout";
import { SectionPhotos } from "@/components/SectionPhotos";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import type { Locale } from "@/content";
import type { Dictionary } from "@/content/types";

export function Voices({ content, locale }: { content: Dictionary["voices"]; locale: Locale }) {
  return (
    <section id="voices">
      <SplitLayout side="right" media={<SectionPhotos section="voices" locale={locale} showBookNote />}>
        <SectionHeading label={content.label} title={content.title} />
        <p>{content.intro}</p>
        {content.quotes.map((quote) => (
          <blockquote key={quote.author}>
            <Icon name="quote" size={26} className="quote-icon" />
            <p>{quote.text}</p>
            <cite>{quote.author}</cite>
          </blockquote>
        ))}
      </SplitLayout>
    </section>
  );
}
