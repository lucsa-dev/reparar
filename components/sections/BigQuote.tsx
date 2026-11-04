import type { Dictionary } from "@/content/types";

export function BigQuote({ content }: { content: Dictionary["bigQuote"] }) {
  return (
    <section className="big-quote">
      <div className="wrap">
        <blockquote>
          <p>{content.text}</p>
          <cite>{content.author}</cite>
        </blockquote>
      </div>
    </section>
  );
}
