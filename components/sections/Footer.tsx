import type { Dictionary } from "@/content/types";

export function Footer({ content }: { content: Dictionary["footer"] }) {
  return (
    <footer>
      <div className="wrap">
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </footer>
  );
}
