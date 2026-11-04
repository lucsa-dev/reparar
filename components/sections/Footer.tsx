import Link from "next/link";
import { BotanicalRoots } from "@/components/BotanicalRoots";
import { Logo } from "@/components/Logo";
import { localeHref, type Locale } from "@/content";
import { contacts } from "@/content/contacts";
import type { Dictionary } from "@/content/types";

export function Footer({ content, locale }: { content: Dictionary; locale: Locale }) {
  const home = localeHref(locale);
  return (
    <footer className="site-footer">
      <BotanicalRoots />
      <div className="footer-grid wide">
        <Logo variant="full" locale={locale} />
        <div>
          {content.footer.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <nav aria-label={content.nav.label}>
          <p className="footer-title">{content.nav.label}</p>
          <ul className="footer-links">
            {content.nav.items.map(({ id, label }) => (
              <li key={id}><Link href={`${home === "/" ? "" : home}/#${id}`}>{label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="footer-title">{content.credits.contactsTitle}</p>
          <ul className="footer-links">
            <li><a href={`mailto:${contacts.authorEmail}`}>{contacts.authorEmail}</a></li>
            <li><a href={`mailto:${contacts.clinicEmail}`}>{contacts.clinicEmail}</a></li>
            <li><a href={contacts.collectiveInstagram} target="_blank" rel="noopener">Coletivo Bem Viver · Instagram</a></li>
            <li><a href={contacts.clinicSite} target="_blank" rel="noopener">Clínica Ambiental</a></li>
            <li><a href={contacts.laraPage} target="_blank" rel="noopener">{content.credits.laraPage}</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
