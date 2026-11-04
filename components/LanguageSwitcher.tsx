import Link from "next/link";
import { localeDetails, localeHref, locales, type Locale } from "@/content";

type LanguageSwitcherProps = {
  current: Locale;
  label: string;
  path?: string;
};

export function LanguageSwitcher({ current, label, path }: LanguageSwitcherProps) {
  return (
    <nav className="lang-switcher" aria-label={label}>
      {locales.map((locale) => {
        const { label: shortLabel, name, htmlLang } = localeDetails[locale];
        return (
          <Link key={locale} href={localeHref(locale, path)} hrefLang={htmlLang} lang={htmlLang} title={name} aria-label={name} aria-current={locale === current ? "true" : undefined}>
            {shortLabel}
          </Link>
        );
      })}
    </nav>
  );
}
