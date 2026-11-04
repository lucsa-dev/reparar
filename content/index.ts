import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";
import type { Dictionary } from "./types";

export const locales = ["pt", "es", "en"] as const;
export type Locale = (typeof locales)[number];

export const localeDetails: Record<Locale, { label: string; name: string; htmlLang: string; href: string }> = {
  pt: { label: "PT", name: "Português", htmlLang: "pt-BR", href: "/" },
  es: { label: "ES", name: "Español", htmlLang: "es", href: "/es" },
  en: { label: "EN", name: "English", htmlLang: "en", href: "/en" },
};

const dictionaries: Record<Locale, Dictionary> = { pt, es, en };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
