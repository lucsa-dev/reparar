/** Fields ending in `Html` hold trusted inline markup (strong, em, a) written in this repository. */
export type Dictionary = {
  meta: { title: string; description: string };
  ui: { languageLabel: string; themeToggle: string };
  nav: { label: string; menu: string; items: { id: string; label: string }[] };
  hero: {
    kicker: string;
    titleHtml: string;
    lede: string;
    routeFromHtml: string;
    routeToHtml: string;
    cta: { article: string; clinic: string; plants: string };
    facts: { value: string; label: string }[];
  };
  repair: {
    label: string;
    title: string;
    introHtml: string;
    elements: { name: string; description: string }[];
    closingHtml: string;
  };
  method: {
    label: string;
    title: string;
    intro: string;
    ecuadorLabel: string;
    cearaLabel: string;
    stages: {
      step: string;
      name: string;
      /** Original Spanish name; omitted when the page is already in Spanish. */
      originalName?: string;
      ecuador: string;
      ceara: string;
    }[];
    crossLabel: string;
    crossItems: string[];
  };
  huipala: {
    label: string;
    title: string;
    introHtml: string;
    levelsIntro: string;
    levelsAria: string;
    levels: string[];
    levelsNote: string;
    matrixTitle: string;
    matrixIntro: string;
    dimensions: string[];
    horizonsHtml: string;
    transformations: { title: string; description: string }[];
  };
  territory: {
    label: string;
    title: string;
    intro: string;
    timeline: { year: string; event: string; source?: string; key?: boolean }[];
    closing: string;
  };
  voices: {
    label: string;
    title: string;
    intro: string;
    quotes: { text: string; author: string }[];
  };
  bigQuote: { text: string; author: string };
  fieldMission: {
    label: string;
    title: string;
    intro: string;
    columns: { date: string; place: string; record: string };
    rows: { date: string; place: string; record: string }[];
    source: string;
    galleryTitle: string;
    galleryIntro: string;
  };
  fruits: {
    label: string;
    title: string;
    items: { title: string; description: string; links?: { href: string; label: string }[] }[];
  };
  archive: { label: string; title: string; intro: string; cta: string };
  credits: {
    label: string;
    title: string;
    groups: { title: string; description: string }[];
    contactsTitle: string;
    correspondingAuthor: string;
    clinicLocation: string;
  };
  references: { label: string; title: string; itemsHtml: string[] };
  footer: { paragraphs: string[] };
};
