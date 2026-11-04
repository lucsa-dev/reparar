import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";
import type { Dictionary } from "./types";

export const locales = ["pt", "es", "en"] as const;
export type Locale = (typeof locales)[number];

export const localeDetails: Record<Locale, { label: string; name: string; htmlLang: string }> = {
  pt: { label: "PT", name: "Português", htmlLang: "pt-BR" },
  es: { label: "ES", name: "Español", htmlLang: "es" },
  en: { label: "EN", name: "English", htmlLang: "en" },
};

/** Portuguese lives at the site root, so its links carry no locale prefix. */
export function localeHref(locale: Locale, path = ""): string {
  const prefix = locale === "pt" ? "" : `/${locale}`;
  return `${prefix}/${path}`.replace(/\/$/, "") || "/";
}

const dictionaries: Record<Locale, Dictionary> = { pt, es, en };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
