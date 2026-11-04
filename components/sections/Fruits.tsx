import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/content/types";

export function Fruits({ content }: { content: Dictionary["fruits"] }) {
  return (
    <section>
      <div className="wrap">
        <SectionHeading label={content.label} title={content.title} />
        <div className="grid2">
          {content.items.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
