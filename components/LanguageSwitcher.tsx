import Link from "next/link";
import { localeDetails, locales, type Locale } from "@/content";

type LanguageSwitcherProps = {
  current: Locale;
  label: string;
};

export function LanguageSwitcher({ current, label }: LanguageSwitcherProps) {
  return (
    <nav className="lang-switcher" aria-label={label}>
      {locales.map((locale) => {
        const { label: shortLabel, name, htmlLang, href } = localeDetails[locale];
        return (
          <Link key={locale} href={href} hrefLang={htmlLang} lang={htmlLang} title={name} aria-label={name} aria-current={locale === current ? "true" : undefined}>
            {shortLabel}
          </Link>
        );
      })}
    </nav>
  );
}
