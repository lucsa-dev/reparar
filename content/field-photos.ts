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
  { file: "9255.jpg", place: SHUAR, caption: t("A caminho da casa", "Camino a la casa", "On the way to the house") },
  { file: "8914.jpg", place: "Puyo", caption: t("Serra entre as nuvens", "Sierra entre las nubes", "Mountains in the clouds") },
  { file: "9091.jpg", place: SHUAR, caption: t("Abrigo ao entardecer", "Refugio al atardecer", "Shelter at dusk") },
  { file: "9114.jpg", place: SHUAR, caption: t("Verde da mata", "El verde del monte", "Forest green") },
  { file: "9108.jpg", place: SHUAR, caption: t("Botões em flor", "Botones en flor", "Flower buds") },
  { file: "9112.jpg", place: SHUAR, caption: t("Palmeiras contra o céu", "Palmeras contra el cielo", "Palms against the sky") },
  { file: "9115.jpg", place: SHUAR, caption: t("Fruto no galho", "Fruto en la rama", "Fruit on the branch") },
  { file: "9120.jpg", place: SHUAR, caption: t("Troncos na mata", "Troncos en el monte", "Trunks in the forest") },
  { file: "9124.jpg", place: SHUAR, caption: t("Frutos colhidos", "Frutos cosechados", "Harvested fruit") },
  { file: "9137.jpg", place: SHUAR, caption: t("Sol entre as folhas", "Sol entre las hojas", "Sun through the leaves") },
  { file: "9139.jpg", place: SHUAR, caption: t("Árvore no campo", "Árbol en el campo", "Tree in the field") },
  { file: "9162.jpg", place: SHUAR, caption: t("Cachos vermelhos", "Racimos rojos", "Red clusters") },
  { file: "9173.jpg", place: SHUAR, caption: t("A mesa da casa", "La mesa de la casa", "The household table") },
  { file: "9211.jpg", place: SHUAR, caption: t("Folha em leque", "Hoja en abanico", "Fan-shaped leaf") },
  { file: "9231.jpg", place: SHUAR, caption: t("Tronco visto de baixo", "Tronco visto desde abajo", "Trunk seen from below") },
  { file: "9261.jpg", place: SHUAR, caption: t("Cacho de palmeira", "Racimo de palmera", "Palm cluster") },
  { file: "9281.jpg", place: SHUAR, caption: t("Fruto verde no galho", "Fruto verde en la rama", "Green fruit on the branch") },
  { file: "9291.jpg", place: SHUAR, caption: t("Frutos amarelos", "Frutos amarillos", "Yellow fruit") },
  { file: "9300.jpg", place: SHUAR, caption: t("Caminho e mirante", "Camino y mirador", "Path and lookout") },
  { file: "9787.jpg", caption: t("Macaco na mata", "Mono en el monte", "Monkey in the forest") },
  { file: "9798.jpg", caption: t("Ave na mata", "Ave en el monte", "Bird in the forest") },
];
