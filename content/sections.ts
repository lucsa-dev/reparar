import { localeHref, type Locale } from "./index";

const t = (pt: string, es: string, en: string): Record<Locale, string> => ({ pt, es, en });

/** Sections of the landing page that have a page of their own, in reading order. */
export const sectionPages = [
  { id: "repair", slug: "reparacao" },
  { id: "method", slug: "metodo" },
  { id: "huipala", slug: "huipala" },
  { id: "territory", slug: "territorio" },
  { id: "voices", slug: "vozes" },
  { id: "field-mission", slug: "missao" },
  { id: "fruits", slug: "frutos" },
  { id: "credits", slug: "parcerias" },
  { id: "references", slug: "referencias" },
] as const;

export type SectionId = (typeof sectionPages)[number]["id"];

/** Pages that live outside the section route but appear in the menu and on the landing page. */
const otherPages: Record<string, string> = { archive: "plantas", mandala: "mandala" };

export function pageSlug(id: string): string | undefined {
  return sectionPages.find((page) => page.id === id)?.slug ?? otherPages[id];
}

export function pageHref(locale: Locale, id: string): string {
  const slug = pageSlug(id);
  if (!slug) throw new Error(`Unknown page: ${id}`);
  return localeHref(locale, slug);
}

export function findSection(slug: string) {
  return sectionPages.find((page) => page.slug === slug);
}

/** Landing page cards: one image and a short call for each page. Titles and labels come from the dictionary. */
export const sectionCards: { id: SectionId | "archive" | "mandala"; image: string; teaser: Record<Locale, string> }[] = [
  {
    id: "repair",
    image: "/field/9202.jpg",
    teaser: t(
      "Os cinco elementos da reparação e por que, em conflitos ambientais, ela depende de como as próprias comunidades se sentem reparadas.",
      "Los cinco elementos de la reparación y por qué, en conflictos ambientales, depende de cómo se sienten reparadas las propias comunidades.",
      "The five elements of reparation, and why in environmental conflicts it depends on how communities themselves feel repaired.",
    ),
  },
  {
    id: "method",
    image: "/field/9296.jpg",
    teaser: t(
      "Abrir os olhos, atua, alegra-te: as três etapas da Clínica Ambiental e como o Coletivo Bem Viver as adaptou ao semiárido.",
      "Abre los ojos, actúa, alégrate: las tres etapas de la Clínica Ambiental y cómo el Colectivo Bem Viver las adaptó al semiárido.",
      "Open your eyes, act, rejoice: the Clínica Ambiental's three stages and how the Bem Viver Collective adapted them to the semi-arid region.",
    ),
  },
  {
    id: "huipala",
    image: "/field/9252.jpg",
    teaser: t(
      "A matriz de sete cores que mede, da realidade presente à utopia, o quanto uma comunidade se sente reparada, e como ela foi refeita no sertão.",
      "La matriz de siete colores que mide, de la realidad presente a la utopía, cuánto se siente reparada una comunidad, y cómo se rehízo en el sertão.",
      "The seven-colour matrix that measures, from present reality to utopia, how repaired a community feels, and how it was remade in the sertão.",
    ),
  },
  {
    id: "territory",
    image: "/plants/p010-1.jpg",
    teaser: t(
      "A história de Lagoa dos Cavalos, em Russas, atingida pela segunda etapa do perímetro irrigado Tabuleiro de Russas.",
      "La historia de Lagoa dos Cavalos, en Russas, afectada por la segunda etapa del perímetro de riego Tabuleiro de Russas.",
      "The story of Lagoa dos Cavalos, in Russas, hit by the second stage of the Tabuleiro de Russas irrigation scheme.",
    ),
  },
  {
    id: "voices",
    image: "/plants/p013-1.jpg",
    teaser: t(
      "As mulheres que sustentam a luta e os saberes que elas guardam, nas palavras delas.",
      "Las mujeres que sostienen la lucha y los saberes que guardan, en sus propias palabras.",
      "The women who sustain the struggle and the knowledge they keep, in their own words.",
    ),
  },
  {
    id: "mandala",
    image: "/field/9181.jpg",
    teaser: t(
      "As 15 entrevistas com quem faz a Clínica Ambiental, lidas pelos 12 sentidos da mandala.",
      "Las 15 entrevistas con quienes hacen la Clínica Ambiental, leídas a través de los 12 sentidos de la mandala.",
      "The 15 interviews with the people who make the Clínica Ambiental, read through the mandala's 12 senses.",
    ),
  },
  {
    id: "field-mission",
    image: "/field/9148.jpg",
    teaser: t(
      "A linha do tempo da missão de campo no Equador (2024–2025) e a galeria de fotos dos territórios visitados.",
      "La línea de tiempo de la misión de campo en Ecuador (2024–2025) y la galería de fotos de los territorios visitados.",
      "The timeline of the field mission in Ecuador (2024–2025) and the photo gallery of the territories visited.",
    ),
  },
  {
    id: "fruits",
    image: "/field/9124.jpg",
    teaser: t(
      "Cartilha, Espaço Bem Viver, documentários, tese, artigos e pesquisas: o que o projeto já produziu.",
      "Cartilla, Espacio Bem Viver, documentales, tesis, artículos e investigaciones: lo que el proyecto ya produjo.",
      "Booklet, Bem Viver Space, documentaries, thesis, articles and research: what the project has produced so far.",
    ),
  },
  {
    id: "archive",
    image: "/plants/p040-1.jpg",
    teaser: t(
      "135 espécies do livro Acervo Botânico, com os nomes, usos e histórias contados nos territórios.",
      "135 especies del libro Acervo Botânico, con los nombres, usos e historias contados en los territorios.",
      "135 species from the Acervo Botânico book, with the names, uses and stories told in the territories.",
    ),
  },
  {
    id: "credits",
    image: "/field/9146.jpg",
    teaser: t(
      "Quem faz o projeto no Ceará e no Equador, a universidade, os apoios e os contatos.",
      "Quién hace el proyecto en Ceará y en Ecuador, la universidad, los apoyos y los contactos.",
      "Who makes the project in Ceará and Ecuador, the university, the funders and the contacts.",
    ),
  },
  {
    id: "references",
    image: "/field/9106.jpg",
    teaser: t(
      "Artigos, livros e links para aprofundar a leitura.",
      "Artículos, libros y enlaces para profundizar la lectura.",
      "Articles, books and links to read further.",
    ),
  },
];

export const sectionUi: Record<Locale, { cardsLabel: string; cardsTitle: string; more: string; back: string; previous: string; next: string; mandalaLabel: string; mandalaTitle: string }> = {
  pt: { cardsLabel: "explore o projeto", cardsTitle: "Cada parte, na sua página", more: "Ler mais", back: "← Voltar ao início", previous: "Anterior", next: "Próxima", mandalaLabel: "escuta das lideranças", mandalaTitle: "Mandala das Lideranças" },
  es: { cardsLabel: "explora el proyecto", cardsTitle: "Cada parte, en su página", more: "Leer más", back: "← Volver al inicio", previous: "Anterior", next: "Siguiente", mandalaLabel: "escucha de los liderazgos", mandalaTitle: "Mandala de los Liderazgos" },
  en: { cardsLabel: "explore the project", cardsTitle: "Each part on its own page", more: "Read more", back: "← Back to home", previous: "Previous", next: "Next", mandalaLabel: "listening to the leaders", mandalaTitle: "Leaders' Mandala" },
};
