import { bookSpecies } from "./book-species";
import type { Locale } from "./index";
import { bookPagesByPlant, plants } from "./plant-data";
import type { BookSpecies, Plant, PlantCategory } from "./plants";

export type CatalogEntry = {
  id: string;
  /** Present only when the consultations recorded an account of the plant. */
  plant?: Plant;
  photos: BookSpecies[];
};

const speciesByPage = new Map(bookSpecies.map((species) => [species.page, species]));

function photosFor(plantId: string): BookSpecies[] {
  return (bookPagesByPlant[plantId] ?? []).flatMap((page) => speciesByPage.get(page) ?? []);
}

const linkedPages = new Set(Object.values(bookPagesByPlant).flat());

export const catalog: CatalogEntry[] = [
  ...plants.map((plant) => ({ id: plant.id, plant, photos: photosFor(plant.id) })),
  ...bookSpecies
    .filter((species) => !linkedPages.has(species.page))
    .map((species) => ({ id: `book-${species.page}`, photos: [species] })),
];

export function entryTitle(entry: CatalogEntry, locale: Locale): string {
  return entry.plant?.name[locale] ?? entry.photos[0].name;
}

export function entryMatchesCategory(entry: CatalogEntry, category: PlantCategory): boolean {
  return entry.plant?.categories.includes(category) ?? false;
}

export function photoPath({ page }: BookSpecies): string {
  return `/plants/p${String(page).padStart(3, "0")}.jpg`;
}
