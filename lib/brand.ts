import type { Locale } from "@/content";

/** Project name. "Clínica Ambiental Ceará" stays the same in every language; the tagline is translated. */
export const brand: Record<Locale, { name: string; tagline: string; full: string }> = {
  pt: { name: "Clínica Ambiental Ceará", tagline: "O Encontro das Águas", full: "Clínica Ambiental Ceará | O Encontro das Águas" },
  es: { name: "Clínica Ambiental Ceará", tagline: "El Encuentro de las Aguas", full: "Clínica Ambiental Ceará | El Encuentro de las Aguas" },
  en: { name: "Clínica Ambiental Ceará", tagline: "The Meeting of the Waters", full: "Clínica Ambiental Ceará | The Meeting of the Waters" },
};
