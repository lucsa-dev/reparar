import type { Locale } from "./index";

type SectionPhoto = { src: string; caption: Record<Locale, string> };
type SectionKey = "repair" | "method" | "huipala" | "territory" | "voices" | "fruits" | "references";

const t = (pt: string, es: string, en: string) => ({ pt, es, en });
const SHUAR = "Shuar Sharup";

export const sectionPhotos: Record<SectionKey, SectionPhoto[]> = {
  repair: [
    { src: "/field/9118.jpg", caption: t(`Frutos da terra · ${SHUAR}`, `Frutos de la tierra · ${SHUAR}`, `Fruits of the land · ${SHUAR}`) },
    { src: "/field/9202.jpg", caption: t(`Fruto nas mãos · ${SHUAR}`, `Fruto en las manos · ${SHUAR}`, `Fruit in hand · ${SHUAR}`) },
  ],
  method: [
    { src: "/field/9206.jpg", caption: t(`Abrir os olhos: conhecer as plantas · ${SHUAR}`, `Abre los ojos: conocer las plantas · ${SHUAR}`, `Open your eyes: getting to know the plants · ${SHUAR}`) },
    { src: "/field/9296.jpg", caption: t(`Atua: viveiro de mudas · ${SHUAR}`, `Actúa: vivero de plántulas · ${SHUAR}`, `Act: seedling nursery · ${SHUAR}`) },
    { src: "/field/9183.jpg", caption: t(`Alegra-te: conversa e riso · ${SHUAR}`, `Alégrate: conversación y risa · ${SHUAR}`, `Rejoice: talk and laughter · ${SHUAR}`) },
  ],
  huipala: [
    { src: "/field/9252.jpg", caption: t(`Tambor enferrujado entre as folhas · ${SHUAR}`, `Tambor oxidado entre las hojas · ${SHUAR}`, `Rusty drum among the leaves · ${SHUAR}`) },
    { src: "/field/9107.jpg", caption: t(`A mata ao redor · ${SHUAR}`, `El monte alrededor · ${SHUAR}`, `The surrounding forest · ${SHUAR}`) },
  ],
  territory: [
    { src: "/plants/p010-1.jpg", caption: t("Caroá, planta do semiárido", "Caroá, planta del semiárido", "Caroá, a semi-arid plant") },
    { src: "/plants/p055-1.jpg", caption: t("Caju, fruta do Nordeste brasileiro", "Marañón, fruta del nordeste de Brasil", "Cashew, a fruit of Brazil's Northeast") },
  ],
  voices: [
    { src: "/plants/p013-1.jpg", caption: t("Japana, planta medicinal", "Ayapana, planta medicinal", "Ayapana, a medicinal plant") },
    { src: "/plants/p015-1.jpg", caption: t("Jambu, planta medicinal", "Botoncillo, planta medicinal", "Toothache plant, a medicinal herb") },
  ],
  fruits: [
    { src: "/plants/p085-1.jpg", caption: t("Goiaba, uma das plantas do acervo", "Guayaba, una de las plantas del archivo", "Guava, one of the plants in the archive") },
  ],
  references: [
    { src: "/field/9106.jpg", caption: t(`Mata em ${SHUAR}`, `Monte en ${SHUAR}`, `Forest in ${SHUAR}`) },
  ],
};

/** Book images illustrate species and must not read as photos of the people or places in the text. */
export const bookPhotoNote: Record<Locale, string> = {
  pt: "Imagens de espécies do livro Acervo Botânico. Não mostram a comunidade nem as pessoas citadas.",
  es: "Imágenes de especies del libro Acervo Botânico. No muestran a la comunidad ni a las personas citadas.",
  en: "Images of species from the Acervo Botânico book. They do not show the community or the people quoted.",
};
