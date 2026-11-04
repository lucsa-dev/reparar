import { SplitLayout } from "@/components/SplitLayout";
import { FruitVideos } from "@/components/FruitVideos";
import { Icon, type IconName } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import type { Locale } from "@/content";
import type { Dictionary } from "@/content/types";

const fruitIcons: IconName[] = ["book", "sprout", "film", "graduation", "document", "archive"];

export function Fruits({ content, locale }: { content: Dictionary["fruits"]; locale: Locale }) {
  return (
    <section id="fruits">
      <SplitLayout side="left" media={<FruitVideos />}>
        <SectionHeading label={content.label} title={content.title} />
        <div className="grid2">
          {content.items.map((item, index) => (
            <div key={item.title}>
              <Icon name={fruitIcons[index]} size={26} className="card-icon" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.links?.map(({ href, label }) => (
                <a className="fruit-link" key={href} href={href} target="_blank" rel="noopener">
                  {label}
                  <Icon name="arrow" size={16} />
                </a>
              ))}
            </div>
          ))}
        </div>
      </SplitLayout>
    </section>
  );
}
