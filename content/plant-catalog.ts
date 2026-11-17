import { bookSpecies } from "./book-species";
import type { Locale } from "./index";
import { bookPagesByPlant, plants } from "./plant-data";
import { cearaPlants } from "./plant-data-ceara";
import type { BookSpecies, CearaPlant, Plant, PlantCategory, PlantRegion } from "./plants";

export type CatalogEntry = {
  id: string;
  /** Present only when the consultations in Ecuador recorded an account of the plant. */
  plant?: Plant;
  /** Present for plants from the Lagoa dos Cavalos inventory (Ceará). */
  ceara?: CearaPlant;
  photos: BookSpecies[];
};

const speciesByPage = new Map(bookSpecies.map((species) => [species.page, species]));

function photosFromPages(pages: number[] = []): BookSpecies[] {
  return pages.flatMap((page) => speciesByPage.get(page) ?? []);
}

const linkedPages = new Set(Object.values(bookPagesByPlant).flat());

export const catalog: CatalogEntry[] = [
  ...cearaPlants.map((ceara) => ({ id: ceara.id, ceara, photos: photosFromPages(ceara.bookPages) })),
  ...plants.map((plant) => ({ id: plant.id, plant, photos: photosFromPages(bookPagesByPlant[plant.id]) })),
  ...bookSpecies
    .filter((species) => !linkedPages.has(species.page))
    .map((species) => ({ id: `book-${species.page}`, photos: [species] })),
];

export function entryTitle(entry: CatalogEntry, locale: Locale): string {
  return entry.ceara?.name ?? entry.plant?.name[locale] ?? entry.photos[0].name;
}

export function entryRegion(entry: CatalogEntry): PlantRegion {
  return entry.ceara ? "ceara" : "ecuador";
}

/** Entries that carry an account: a consultation in Ecuador or a row of the Ceará inventory. */
export function entryHasReport(entry: CatalogEntry): boolean {
  return entry.plant !== undefined || entry.ceara !== undefined;
}

export function entryMatchesCategory(entry: CatalogEntry, category: PlantCategory): boolean {
  // The Lagoa dos Cavalos inventory records medicinal uses only.
  if (entry.ceara) return category === "medicinal";
  return entry.plant?.categories.includes(category) ?? false;
}

export type CatalogPhoto = { src: string; species: BookSpecies };

export function entryPhotos(entry: CatalogEntry): CatalogPhoto[] {
  return entry.photos.flatMap((species) => species.photos.map((file) => ({ src: `/plants/${file}`, species })));
}
