import type { Locale } from "./index";
import { plants } from "./plant-data";

/** Book photos used on the home page, each paired with the plant it shows. */
const heroPhotos = [
  { plantId: "morete", file: "p126-2.jpg" },
  { plantId: "cacao-blanco", file: "p092-2.jpg" },
  { plantId: "platanillo", file: "p070-1.jpg" },
];

const archivePhotos = [
  { plantId: "chonta", file: "p040-1.jpg" },
  { plantId: "granadilla", file: "p041-2.jpg" },
  { plantId: "achiote", file: "p007-1.jpg" },
  { plantId: "zapallo", file: "p018-1.jpg" },
  { plantId: "huito", file: "p043-2.jpg" },
  { plantId: "tabaco", file: "p051-1.jpg" },
];

export type HomePhoto = { src: string; name: string };

function localize(photos: typeof heroPhotos, locale: Locale): HomePhoto[] {
  return photos.map(({ plantId, file }) => {
    const plant = plants.find(({ id }) => id === plantId);
    if (!plant) throw new Error(`Unknown plant: ${plantId}`);
    return { src: `/plants/${file}`, name: plant.name[locale] };
  });
}

export const getHeroPhotos = (locale: Locale) => localize(heroPhotos, locale);
export const getArchivePhotos = (locale: Locale) => localize(archivePhotos, locale);
