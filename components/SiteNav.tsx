import type { Dictionary } from "@/content/types";

export function SiteNav({ content }: { content: Dictionary["nav"] }) {
  return (
    <nav className="site-nav" aria-label={content.label}>
      <ul className="wide">
        {content.items.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
