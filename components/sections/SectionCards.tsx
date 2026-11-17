import Link from "next/link";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import type { Locale } from "@/content";
import { pageHref, sectionCards, sectionUi } from "@/content/sections";
import type { Dictionary } from "@/content/types";

function cardText(id: string, content: Dictionary, locale: Locale) {
  if (id === "mandala") return { label: sectionUi[locale].mandalaLabel, title: sectionUi[locale].mandalaTitle };
  const key = ({ "field-mission": "fieldMission", archive: "archive" } as Record<string, keyof Dictionary>)[id] ?? (id as keyof Dictionary);
  const { label, title } = content[key] as { label: string; title: string };
  return { label, title };
}

export function SectionCards({ content, locale }: { content: Dictionary; locale: Locale }) {
  const ui = sectionUi[locale];
  return (
    <section id="explore" className="band">
      <div className="wide">
        <SectionHeading label={ui.cardsLabel} title={ui.cardsTitle} />
        <ul className="section-cards">
          {sectionCards.map(({ id, image, teaser }) => {
            const { label, title } = cardText(id, content, locale);
            return (
              <li key={id}>
                <Link className="section-card" href={pageHref(locale, id)}>
                  <img src={image} alt="" loading="lazy" />
                  <span className="section-card-body">
                    <span className="label">{label}</span>
                    <h3>{title}</h3>
                    <span className="section-card-teaser">{teaser[locale]}</span>
                    <span className="section-card-more">
                      {ui.more}
                      <Icon name="arrow" size={16} />
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
