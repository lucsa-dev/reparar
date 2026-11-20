import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { Footer } from "@/components/sections/Footer";
import { SiteNav } from "@/components/SiteNav";
import { TopBar } from "@/components/TopBar";
import { getDictionary, isLocale, localeDetails, localeHref, locales } from "@/content";
import { contacts } from "@/content/contacts";
import { laraPage } from "@/content/lara";

type LaraPageProps = { params: Promise<{ lang: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LaraPageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const text = laraPage[lang];
  return {
    title: text.metaTitle,
    description: text.metaDescription,
    alternates: {
      canonical: localeHref(lang, "lara"),
      languages: Object.fromEntries(locales.map((locale) => [localeDetails[locale].htmlLang, localeHref(locale, "lara")])),
    },
  };
}

export default async function LaraPage({ params }: LaraPageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const text = laraPage[lang];
  const content = getDictionary(lang);
  return (
    <>
      <TopBar locale={lang} ui={content.ui} path="lara" />
      <SiteNav content={content.nav} locale={lang} current="about" />
      <main className="ab">
        <div className="ab-wrap">
          <Link className="plants-back" href={localeHref(lang)}>{text.back}</Link>

          <header className="ab-hero">
            <div className="ab-monogram" aria-hidden="true">LB</div>
            <div>
              <span className="label">{text.label}</span>
              <h1 dangerouslySetInnerHTML={{ __html: text.titleHtml }} />
              <p className="ab-lede">{text.lede}</p>
              <ul className="ab-roles">
                {text.roles.map((role) => <li key={role}>{role}</li>)}
              </ul>
            </div>
          </header>

          <section className="ab-about" aria-labelledby="ab-about-title">
            <div>
              <h2 id="ab-about-title">{text.about.title}</h2>
              {text.about.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 32)}>{paragraph}</p>)}
            </div>
            <blockquote className="ab-quote">
              <p>{text.quote.text}</p>
              <cite>{text.quote.cite}</cite>
            </blockquote>
          </section>

          <section className="ab-route" aria-labelledby="ab-route-title">
            <span className="label">{text.route.label}</span>
            <h2 id="ab-route-title">{text.route.title}</h2>
            <p className="ab-intro">{text.route.intro}</p>
            <ol className="ab-stations">
              {text.route.stations.map((station, index) => (
                <li key={station.when + station.title} className={station.key ? "key" : undefined}>
                  <div className="ab-when">
                    <span className="ab-num">{String(index + 1).padStart(2, "0")}</span>
                    <b>{station.when}</b>
                  </div>
                  <article>
                    <span className="ab-place"><Icon name="pin" size={14} /> {station.place}</span>
                    <h3>{station.title}</h3>
                    <p>{station.body}</p>
                    <ul className="ab-marks">
                      {station.marks.map((mark) => <li key={mark}>{mark}</li>)}
                    </ul>
                    {station.source && <small className="ab-source">{station.source}</small>}
                  </article>
                </li>
              ))}
            </ol>
          </section>

          <section className="ab-method" aria-labelledby="ab-method-title">
            <span className="label">{text.method.label}</span>
            <h2 id="ab-method-title">{text.method.title}</h2>
            <p className="ab-intro">{text.method.intro}</p>
            <dl>
              {text.method.items.map(({ name, text: body }) => (
                <div key={name}>
                  <dt>{name}</dt>
                  <dd>{body}</dd>
                </div>
              ))}
            </dl>
            <blockquote className="ab-quote wide">
              <p>{text.voice.text}</p>
              <cite>{text.voice.cite}</cite>
            </blockquote>
          </section>

          <section className="ab-works" aria-labelledby="ab-works-title">
            <span className="label">{text.works.label}</span>
            <h2 id="ab-works-title">{text.works.title}</h2>
            <ul>
              {text.works.items.map((work) => (
                <li key={work.title}>
                  <span className="ab-year">{work.year}</span>
                  <div>
                    {work.href ? (
                      <a href={work.href} target="_blank" rel="noopener"><b>{work.title}</b> <Icon name="arrow" size={14} /></a>
                    ) : (
                      <b>{work.title}</b>
                    )}
                    <small>{work.note}</small>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="ab-contact" aria-labelledby="ab-contact-title">
            <h2 id="ab-contact-title">{text.contact.title}</h2>
            <div className="contact">
              <span><Icon name="mail" size={16} /> {text.contact.email} <code>{contacts.authorEmail}</code></span>
              <span><Icon name="arrow" size={16} /> <a href={contacts.laraPage} target="_blank" rel="noopener">{text.contact.page}</a></span>
            </div>
            <p className="small muted">{text.contact.note}</p>
          </section>
        </div>
      </main>
      <Footer content={content} locale={lang} />
    </>
  );
}
