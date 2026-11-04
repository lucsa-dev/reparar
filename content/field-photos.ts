import type { Locale } from "./index";

type FieldPhoto = {
  file: string;
  place?: string;
  /** Keeps faces in frame when a tall photo is cropped to the gallery shape. */
  portrait?: boolean;
  caption: Record<Locale, string>;
};

const SHUAR = "Shuar Sharup";
const t = (pt: string, es: string, en: string) => ({ pt, es, en });

export const fieldPhotos: FieldPhoto[] = [
  { file: "9148.jpg", place: SHUAR, caption: t("Saberes passados de mão em mão", "Saberes que pasan de mano en mano", "Knowledge passed from hand to hand") },
  { file: "9157.jpg", place: SHUAR, caption: t("Consulta com o livro de plantas", "Consulta con el libro de plantas", "Consultation with the plant book") },
  { file: "9154.jpg", place: SHUAR, caption: t("A copa da floresta", "La copa del bosque", "The forest canopy") },
  { file: "9181.jpg", place: SHUAR, caption: t("Conversa na varanda", "Conversación en el corredor", "Talking on the porch") },
  { file: "9296.jpg", place: SHUAR, caption: t("Cuidando do viveiro de mudas", "Cuidando el vivero de plántulas", "Tending the seedling nursery") },
  { file: "8915.jpg", place: "Puyo", caption: t("Flor da mata", "Flor del monte", "Forest flower") },
  { file: "9146.jpg", place: SHUAR, caption: t("Falando sobre as plantas", "Hablando de las plantas", "Talking about the plants") },
  { file: "9205.jpg", place: SHUAR, caption: t("Frutos colhidos no caminho", "Frutos cosechados en el camino", "Fruit gathered along the way") },
  { file: "9098.jpg", place: SHUAR, caption: t("Entardecer", "Atardecer", "Sunset") },
  { file: "9144.jpg", place: SHUAR, portrait: true, caption: t("Preparando a comida", "Preparando la comida", "Preparing the meal") },
  { file: "9280.jpg", place: SHUAR, portrait: true, caption: t("Caminhada pelo território", "Caminata por el territorio", "Walking the territory") },
  { file: "9255.jpg", place: SHUAR, caption: t("A caminho da casa", "Camino a la casa", "On the way to the house") },
  { file: "9787.jpg", caption: t("Macaco na mata", "Mono en el monte", "Monkey in the forest") },
  { file: "9798.jpg", caption: t("Ave na mata", "Ave en el monte", "Bird in the forest") },
];
