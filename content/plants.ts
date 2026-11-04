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
    intro: "Plantas reconhecidas nas consultas da missão de campo, em conversas guiadas por um livro de 138 espécies: nomes, significados, usos e histórias contados nos territórios.",
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
    intro: "Plantas reconocidas en las consultas de la misión de campo, en conversaciones guiadas por un libro de 138 especies: nombres, significados, usos e historias contados en los territorios.",
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
    intro: "Plants recognized during field mission consultations, in conversations guided by a book of 138 species: names, meanings, uses and stories told in the territories.",
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
    cautionNote: "Toxic, potent or delicate plant. Do not use without guidance from those who know it.",
    count: (shown, total) => `${shown} of ${total} plants`,
    empty: "No plants found.",
  },
};
