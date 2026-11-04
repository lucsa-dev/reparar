import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/content/types";

export function Credits({ content }: { content: Dictionary["credits"] }) {
  return (
    <section>
      <div className="wrap">
        <SectionHeading label={content.label} title={content.title} />
        <div className="grid2">
          {content.groups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>
          ))}
        </div>
        <h3 className="subhead">{content.contactsTitle}</h3>
        <div className="contact mt-half">
          <span>{content.correspondingAuthor} <code>laraqueirozvb@gmail.com</code></span>
          <span>Clínica Ambiental: <code>clinicambiental@gmail.com</code> · {content.clinicLocation}</span>
        </div>
      </div>
    </section>
  );
}
