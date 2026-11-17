import type { Locale } from "./index";
import { plants } from "./plant-data";

/** Book photos used on the home page, each paired with the plant it shows. */
const heroPhotos = [
  { plantId: "morete", file: "p126-2.jpg" },
  { plantId: "cacao-blanco", file: "p092-2.jpg" },
  { plantId: "platanillo", file: "p070-1.jpg" },
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
