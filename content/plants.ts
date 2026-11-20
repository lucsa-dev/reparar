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

/** One row of the Lagoa dos Cavalos inventory: what the plant is used for, which part and how it is prepared. */
export type CearaUse = { for?: string; part?: string; preparation?: string };

/** A plant from the Coletivo Bem Viver inventory (Lagoa dos Cavalos, 2018), recorded in Portuguese. */
export type CearaPlant = {
  id: string;
  name: string;
  otherNames?: string;
  scientificName?: string;
  uses: CearaUse[];
  season?: string;
  propagation?: string;
  contraindication?: string;
  place?: string;
  citations?: number;
  note?: string;
  caution?: boolean;
  bookPages?: number[];
};

export const plantRegions = ["ceara", "ecuador"] as const;
export type PlantRegion = (typeof plantRegions)[number];

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
  regionLabel: string;
  allRegions: string;
  regions: Record<PlantRegion, string>;
  cearaSource: string;
  cearaFields: { for: string; part: string; preparation: string; season: string; propagation: string; contraindication: string; place: string; citations: (count: number) => string; notRecorded: string };
  cearaLanguageNote?: string;
};

export const plantCopy: Record<Locale, PlantCopy> = {
  pt: {
    metaTitle: "Acervo de plantas · Clínica Ambiental Ceará",
    metaDescription: "Plantas medicinais do inventário de Lagoa dos Cavalos (Ceará) e plantas citadas nas conversas da missão de campo no Equador, com nomes, usos relatados e territórios.",
    back: "← Voltar ao início",
    label: "acervo de plantas",
    title: "As plantas do sertão e da Amazônia",
    intro: "Duas fontes se encontram aqui. Do Ceará, as 80 plantas do inventário que o Coletivo de Pesquisa Bem Viver fez em Lagoa dos Cavalos em 2018, ouvindo 24 agricultoras e agricultores indicados pela comunidade. Do Equador, as plantas reconhecidas nas consultas da missão de campo, em conversas guiadas pelo livro Acervo Botânico, de 135 espécies.",
    draftNotice: "Primeira versão. Os relatos do Equador vêm de transcrições automáticas e podem conter erros de grafia. Os do Ceará seguem a Tabela 4 da tese de Lara Braga (2020); das 70 amostras levadas ao Herbário Prisco Bezerra (UFC), 50 tinham identificação científica até então.",
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
    photoCredit: "Imagens: livro Acervo Botânico. Nas plantas do Ceará, as fotos do livro mostram a mesma espécie, não as plantas de Lagoa dos Cavalos.",
    noPhoto: "Ainda sem foto",
    previousPhoto: "Foto anterior",
    nextPhoto: "Próxima foto",
    photoCount: (current, total) => `Foto ${current} de ${total}`,
    bookLists: { 1: "Provavelmente domesticada", 2: "Provavelmente semidomesticada", 3: "Com populações em início de domesticação" },
    cautionNote: "Planta tóxica, potente ou de uso delicado. Não use sem orientação de quem conhece.",
    count: (shown, total) => `${shown} de ${total} plantas`,
    empty: "Nenhuma planta encontrada.",
    regionLabel: "Filtrar por origem",
    allRegions: "Ceará e Equador",
    regions: { ceara: "Ceará · Lagoa dos Cavalos", ecuador: "Equador" },
    cearaSource: "Inventário do Coletivo Bem Viver, Lagoa dos Cavalos (CE), 2018",
    cearaFields: { for: "Para", part: "Parte usada", preparation: "Preparo", season: "Época de coleta", propagation: "Propagação", contraindication: "Contraindicação", place: "Onde se encontra", citations: (count) => (count === 1 ? "1 citação" : `${count} citações`), notRecorded: "Planta identificada pelo Coletivo, sem uso registrado na tabela." },
  },
  es: {
    metaTitle: "Archivo de plantas · Clínica Ambiental Ceará",
    metaDescription: "Plantas medicinales del inventario de Lagoa dos Cavalos (Ceará) y plantas mencionadas en las conversaciones de la misión de campo en Ecuador, con nombres, usos relatados y territorios.",
    back: "← Volver al inicio",
    label: "archivo de plantas",
    title: "Las plantas del sertón y de la Amazonía",
    intro: "Aquí se encuentran dos fuentes. De Ceará, las 80 plantas del inventario que el Colectivo de Investigación Bem Viver hizo en Lagoa dos Cavalos en 2018, escuchando a 24 agricultoras y agricultores indicados por la comunidad. De Ecuador, las plantas reconocidas en las consultas de la misión de campo, en conversaciones guiadas por el libro Acervo Botânico, de 135 especies.",
    draftNotice: "Primera versión. Los relatos de Ecuador provienen de transcripciones automáticas y pueden contener errores de ortografía. Los de Ceará siguen la Tabla 4 de la tesis de Lara Braga (2020); de las 70 muestras llevadas al Herbario Prisco Bezerra (UFC), 50 tenían identificación científica hasta entonces.",
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
    photoCredit: "Imágenes: libro Acervo Botânico. En las plantas de Ceará, las fotos del libro muestran la misma especie, no las plantas de Lagoa dos Cavalos.",
    noPhoto: "Aún sin foto",
    previousPhoto: "Foto anterior",
    nextPhoto: "Siguiente foto",
    photoCount: (current, total) => `Foto ${current} de ${total}`,
    bookLists: { 1: "Probablemente domesticada", 2: "Probablemente semidomesticada", 3: "Con poblaciones en inicio de domesticación" },
    cautionNote: "Planta tóxica, potente o de uso delicado. No la use sin orientación de quien la conoce.",
    count: (shown, total) => `${shown} de ${total} plantas`,
    empty: "No se encontró ninguna planta.",
    regionLabel: "Filtrar por origen",
    allRegions: "Ceará y Ecuador",
    regions: { ceara: "Ceará · Lagoa dos Cavalos", ecuador: "Ecuador" },
    cearaSource: "Inventario del Colectivo Bem Viver, Lagoa dos Cavalos (CE), 2018",
    cearaFields: { for: "Para", part: "Parte usada", preparation: "Preparación", season: "Época de cosecha", propagation: "Propagación", contraindication: "Contraindicación", place: "Dónde se encuentra", citations: (count) => (count === 1 ? "1 mención" : `${count} menciones`), notRecorded: "Planta identificada por el Colectivo, sin uso registrado en la tabla." },
    cearaLanguageNote: "Los registros de Ceará están en portugués, como en el inventario original.",
  },
  en: {
    metaTitle: "Plant archive · Clínica Ambiental Ceará",
    metaDescription: "Medicinal plants from the Lagoa dos Cavalos inventory (Ceará) and plants mentioned in conversations during the field mission in Ecuador, with names, reported uses and territories.",
    back: "← Back to home",
    label: "plant archive",
    title: "Plants of the sertão and the Amazon",
    intro: "Two sources meet here. From Ceará, the 80 plants in the inventory the Bem Viver Research Collective made in Lagoa dos Cavalos in 2018, listening to 24 farmers chosen by the community. From Ecuador, the plants recognized during field mission consultations, in conversations guided by the Acervo Botânico book of 135 species.",
    draftNotice: "First version. The accounts from Ecuador come from automatic transcripts and may contain spelling errors. Those from Ceará follow Table 4 of Lara Braga's thesis (2020); of the 70 samples taken to the Prisco Bezerra Herbarium (UFC), 50 had a scientific identification at the time.",
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
    photoCredit: "Images: Acervo Botânico book. For plants from Ceará, the book photos show the same species, not the plants of Lagoa dos Cavalos.",
    noPhoto: "No photo yet",
    previousPhoto: "Previous photo",
    nextPhoto: "Next photo",
    photoCount: (current, total) => `Photo ${current} of ${total}`,
    bookLists: { 1: "Probably domesticated", 2: "Probably semi-domesticated", 3: "With incipiently domesticated populations" },
    cautionNote: "Toxic, potent or delicate plant. Do not use without guidance from those who know it.",
    count: (shown, total) => `${shown} of ${total} plants`,
    empty: "No plants found.",
    regionLabel: "Filter by origin",
    allRegions: "Ceará and Ecuador",
    regions: { ceara: "Ceará · Lagoa dos Cavalos", ecuador: "Ecuador" },
    cearaSource: "Bem Viver Collective inventory, Lagoa dos Cavalos (CE), 2018",
    cearaFields: { for: "For", part: "Part used", preparation: "Preparation", season: "Harvest time", propagation: "Propagation", contraindication: "Contraindication", place: "Where it grows", citations: (count) => (count === 1 ? "1 mention" : `${count} mentions`), notRecorded: "Plant identified by the Collective, with no use recorded in the table." },
    cearaLanguageNote: "Records from Ceará are in Portuguese, as in the original inventory.",
  },
};
