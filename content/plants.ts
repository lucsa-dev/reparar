import type { Locale } from "./index";

export const plantCategories = ["medicinal", "food", "crafts", "protection", "ceremonial"] as const;
export type PlantCategory = (typeof plantCategories)[number];

type Localized = Record<Locale, string>;

export type Plant = {
  id: string;
  name: Localized;
  scientificName?: string;
  /** Names as spelled in the automatic transcripts, pending community review. */
  localNames?: { name: string; language: string }[];
  categories: PlantCategory[];
  territories: string[];
  meaning?: Localized;
  uses: Localized;
  story?: Localized;
  caution?: boolean;
};

export type BookSpecies = { page: number; name: string; fullName: string; list: 1 | 2 | 3; photos: string[] };

export type PlantCopy = {
  metaTitle: string;
  metaDescription: string;
  back: string;
  label: string;
  title: string;
  intro: string;
  draftNotice: string;
  healthNotice: string;
  searchLabel: string;
  searchPlaceholder: string;
  filterLabel: string;
  all: string;
  categories: Record<PlantCategory, string>;
  territories: string;
  meaning: string;
  uses: string;
  story: string;
  cautionNote: string;
  withReports: string;
  noReport: string;
  photoCredit: string;
  noPhoto: string;
  previousPhoto: string;
  nextPhoto: string;
  photoCount: (current: number, total: number) => string;
  bookLists: Record<BookSpecies["list"], string>;
  count: (shown: number, total: number) => string;
  empty: string;
};

export const plantCopy: Record<Locale, PlantCopy> = {
  pt: {
    metaTitle: "Acervo de plantas · Reparação Integral Comunitária",
    metaDescription: "Plantas citadas nas conversas da missão de campo no Equador, com nomes, usos relatados e territórios.",
    back: "← Voltar ao início",
    label: "acervo de plantas",
    title: "As plantas nas conversas do Equador",
    intro: "Plantas reconhecidas nas consultas da missão de campo, em conversas guiadas pelo livro Acervo Botânico, de 135 espécies. Aqui estão as imagens do livro e os nomes, significados, usos e histórias contados nos territórios.",
    draftNotice: "Primeira versão. Nomes e usos vêm de transcrições automáticas e podem conter erros de grafia.",
    healthNotice: "Os usos registram saberes relatados. Não são recomendação de tratamento nem substituem atendimento em saúde.",
    searchLabel: "Buscar planta",
    searchPlaceholder: "Nome, uso ou território",
    filterLabel: "Filtrar por uso",
    all: "Todas",
    categories: { medicinal: "Medicinal", food: "Alimento", crafts: "Artesanato e casa", protection: "Proteção de plantios e criações", ceremonial: "Cerimonial" },
    territories: "Territórios",
    meaning: "Significado",
    uses: "Usos relatados",
    story: "História",
    withReports: "Com relatos",
    noReport: "Ainda sem relato registrado nas consultas.",
    photoCredit: "Imagens: livro Acervo Botânico.",
    noPhoto: "Ainda sem foto",
    previousPhoto: "Foto anterior",
    nextPhoto: "Próxima foto",
    photoCount: (current, total) => `Foto ${current} de ${total}`,
    bookLists: { 1: "Provavelmente domesticada", 2: "Provavelmente semidomesticada", 3: "Com populações em início de domesticação" },
    cautionNote: "Planta tóxica, potente ou de uso delicado. Não use sem orientação de quem conhece.",
    count: (shown, total) => `${shown} de ${total} plantas`,
    empty: "Nenhuma planta encontrada.",
  },
  es: {
    metaTitle: "Archivo de plantas · Reparación Integral Comunitaria",
    metaDescription: "Plantas mencionadas en las conversaciones de la misión de campo en Ecuador, con nombres, usos relatados y territorios.",
    back: "← Volver al inicio",
    label: "archivo de plantas",
    title: "Las plantas en las conversaciones de Ecuador",
    intro: "Plantas reconocidas en las consultas de la misión de campo, en conversaciones guiadas por el libro Acervo Botânico, de 135 especies. Aquí están las imágenes del libro y los nombres, significados, usos e historias contados en los territorios.",
    draftNotice: "Primera versión. Los nombres y usos provienen de transcripciones automáticas y pueden contener errores de ortografía.",
    healthNotice: "Los usos registran saberes relatados. No son una recomendación de tratamiento ni sustituyen la atención en salud.",
    searchLabel: "Buscar planta",
    searchPlaceholder: "Nombre, uso o territorio",
    filterLabel: "Filtrar por uso",
    all: "Todas",
    categories: { medicinal: "Medicinal", food: "Alimento", crafts: "Artesanía y hogar", protection: "Protección de cultivos y crianzas", ceremonial: "Ceremonial" },
    territories: "Territorios",
    meaning: "Significado",
    uses: "Usos relatados",
    story: "Historia",
    withReports: "Con relatos",
    noReport: "Aún sin relato registrado en las consultas.",
    photoCredit: "Imágenes: libro Acervo Botânico.",
    noPhoto: "Aún sin foto",
    previousPhoto: "Foto anterior",
    nextPhoto: "Siguiente foto",
    photoCount: (current, total) => `Foto ${current} de ${total}`,
    bookLists: { 1: "Probablemente domesticada", 2: "Probablemente semidomesticada", 3: "Con poblaciones en inicio de domesticación" },
    cautionNote: "Planta tóxica, potente o de uso delicado. No la use sin orientación de quien la conoce.",
    count: (shown, total) => `${shown} de ${total} plantas`,
    empty: "No se encontró ninguna planta.",
  },
  en: {
    metaTitle: "Plant archive · Comprehensive Community Reparation",
    metaDescription: "Plants mentioned in conversations during the field mission in Ecuador, with names, reported uses and territories.",
    back: "← Back to home",
    label: "plant archive",
    title: "Plants in the conversations from Ecuador",
    intro: "Plants recognized during field mission consultations, in conversations guided by the Acervo Botânico book of 135 species. Here are the book's images and the names, meanings, uses and stories told in the territories.",
    draftNotice: "First version. Names and uses come from automatic transcripts and may contain spelling errors.",
    healthNotice: "These uses record reported knowledge. They are not treatment advice and do not replace health care.",
    searchLabel: "Search plants",
    searchPlaceholder: "Name, use or territory",
    filterLabel: "Filter by use",
    all: "All",
    categories: { medicinal: "Medicinal", food: "Food", crafts: "Crafts and home", protection: "Crop and livestock protection", ceremonial: "Ceremonial" },
    territories: "Territories",
    meaning: "Meaning",
    uses: "Reported uses",
    story: "Story",
    withReports: "With accounts",
    noReport: "No account recorded in the consultations yet.",
    photoCredit: "Images: Acervo Botânico book.",
    noPhoto: "No photo yet",
    previousPhoto: "Previous photo",
    nextPhoto: "Next photo",
    photoCount: (current, total) => `Photo ${current} of ${total}`,
    bookLists: { 1: "Probably domesticated", 2: "Probably semi-domesticated", 3: "With incipiently domesticated populations" },
    cautionNote: "Toxic, potent or delicate plant. Do not use without guidance from those who know it.",
    count: (shown, total) => `${shown} of ${total} plants`,
    empty: "No plants found.",
  },
};
