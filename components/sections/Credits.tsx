import { Icon, type IconName } from "@/components/Icon";
import { PartnerLogos } from "@/components/PartnerLogos";
import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/content/types";

const groupIcons: IconName[] = ["pin", "pin", "graduation", "handshake"];
const groupFlags = ["/flags/ceara.png", "/flags/equador.png"];

export function Credits({ content }: { content: Dictionary["credits"] }) {
  return (
    <section id="credits">
      <div className="wrap">
        <SectionHeading label={content.label} title={content.title} />
        <PartnerLogos />
        <div className="grid2">
          {content.groups.map((group, index) => (
            <div key={group.title}>
              {groupFlags[index] ? (
                <img className="flag card-flag" src={groupFlags[index]} alt="" />
              ) : (
                <Icon name={groupIcons[index]} size={26} className="card-icon" />
              )}
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>
          ))}
        </div>
        <h3 className="subhead">{content.contactsTitle}</h3>
        <div className="contact mt-half">
          <span><Icon name="mail" size={16} /> {content.correspondingAuthor} <code>laraqueirozvb@gmail.com</code></span>
          <span><Icon name="arrow" size={16} /> <a href="https://linktr.ee/lara.vbraga" target="_blank" rel="noopener">{content.laraPage}</a></span>
          <span><Icon name="mail" size={16} /> Clínica Ambiental: <code>clinicambiental@gmail.com</code> · {content.clinicLocation}</span>
        </div>
      </div>
    </section>
  );
}
