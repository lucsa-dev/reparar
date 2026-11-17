import { localeHref, type Locale } from "./index";

/** Sections of the landing page that have a page of their own, in reading order. */
export const sectionPages = [
  { id: "repair", slug: "reparacao" },
  { id: "method", slug: "metodo" },
  { id: "huipala", slug: "huipala" },
  { id: "territory", slug: "territorio" },
  { id: "voices", slug: "vozes" },
  { id: "field-mission", slug: "missao" },
  { id: "fruits", slug: "frutos" },
  { id: "credits", slug: "parcerias" },
  { id: "references", slug: "referencias" },
] as const;

export type SectionId = (typeof sectionPages)[number]["id"];

/** Pages that live outside the section route but appear in the menu and on the landing page. */
const otherPages: Record<string, string> = { archive: "plantas", mandala: "mandala" };

export function pageSlug(id: string): string | undefined {
  return sectionPages.find((page) => page.id === id)?.slug ?? otherPages[id];
}

export function pageHref(locale: Locale, id: string): string {
  const slug = pageSlug(id);
  if (!slug) throw new Error(`Unknown page: ${id}`);
  return localeHref(locale, slug);
}

export function findSection(slug: string) {
  return sectionPages.find((page) => page.slug === slug);
}

export const sectionUi: Record<Locale, { more: string; back: string; previous: string; next: string }> = {
  pt: { more: "Ver mais", back: "← Voltar ao início", previous: "Anterior", next: "Próxima" },
  es: { more: "Ver más", back: "← Volver al inicio", previous: "Anterior", next: "Siguiente" },
  en: { more: "See more", back: "← Back to home", previous: "Previous", next: "Next" },
};
