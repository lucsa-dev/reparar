/** Fields ending in `Html` hold trusted inline markup (strong, em, a) written in this repository. */
export type Dictionary = {
  meta: { title: string; description: string };
  ui: { languageLabel: string; themeToggle: string };
  nav: { label: string; menu: string; items: { id: string; label: string }[]; mandala: string; about: string };
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
    /** From present reality (red) up to the utopian horizon (white), as in the Alerta Naranja nº 7 matrix. */
    levels: { name: string; element: string; hint: string }[];
    levelsNote: string;
    spheresTitle: string;
    spheresIntro: string;
    spheres: { title: string; items: string; value: string; shifts: string[] }[];
    processTitle: string;
    processHtml: string;
    adaptHtml: string;
    sourceHtml: string;
    /** The matrix as remodeled in Lagoa dos Cavalos (Braga, 2020, ch. 3). */
    ceara: {
      title: string;
      intro: string;
      stepsIntro: string;
      steps: string[];
      gradientIntro: string;
      gradient: string[];
      utopiaIntro: string;
      utopias: { dimension: string; utopia: string }[];
      closingHtml: string;
      quote: string;
      quoteTranslation: string;
      cite: string;
      sourceHtml: string;
    };
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
    /** Life in the communities before the irrigation scheme (Braga, 2010). */
    wayOfLife: { title: string; intro: string; items: { name: string; description: string }[]; quote: string; cite: string; source: string };
    /** What the 2011 conduct adjustment agreement promised and what had happened by 2018 (Braga, 2020, ch. 1). */
    tac: { title: string; intro: string; promiseLabel: string; outcomeLabel: string; rows: { promise: string; outcome: string }[]; quote: string; cite: string; source: string };
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
    rows: { year: string; date: string; place: string; record: string; key?: boolean }[];
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
    laraPage: string;
    clinicLocation: string;
  };
  references: { label: string; title: string; itemsHtml: string[] };
  footer: { paragraphs: string[] };
};
