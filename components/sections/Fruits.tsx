import { Icon, type IconName } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/content/types";

const fruitIcons: IconName[] = ["book", "sprout", "film", "graduation", "document", "archive"];

export function Fruits({ content }: { content: Dictionary["fruits"] }) {
  return (
    <section id="fruits">
      <div className="wrap">
        <SectionHeading label={content.label} title={content.title} />
        <div className="grid2">
          {content.items.map((item, index) => (
            <div key={item.title}>
              <Icon name={fruitIcons[index]} size={26} className="card-icon" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
