import type { Locale } from "./index";

/** Texts for the river that runs through the home page. */
export type EstuaryCopy = {
  hint: string;
  /** Names of the river stretches, in order: sertão, rio, mangue, lama, encontro, mar. */
  scenes: string[];
  villages: { home: string; river: string; fishers: string };
  sea: { tag: string; title: string; text: string; back: string };
  bridge: { label: string; titleHtml: string };
};

const pt: EstuaryCopy = {
  hint: "Role e siga a água",
  scenes: ["Sertão", "Rio Jaguaribe", "Mangue", "Lama", "Encontro das águas", "Mar"],
  villages: { home: "Lagoa dos Cavalos", river: "Comunidade ribeirinha", fishers: "Vila de pescadores" },
  sea: { tag: "Mar", title: "Tudo deságua no mar", text: "Dois territórios, uma mesma maré. O que se cuida em um lugar chega ao outro.", back: "Voltar à nascente ↑" },
  bridge: { label: "Do sertão ao mar", titleHtml: "Da nascente ao mar, <em>a água desce o rio</em> com a história do projeto." },
};

const es: EstuaryCopy = {
  hint: "Desliza y sigue el agua",
  scenes: ["Sertón", "Río Jaguaribe", "Manglar", "Lodo", "Encuentro de las aguas", "Mar"],
  villages: { home: "Lagoa dos Cavalos", river: "Comunidad ribereña", fishers: "Pueblo de pescadores" },
  sea: { tag: "Mar", title: "Todo desemboca en el mar", text: "Dos territorios, una misma marea. Lo que se cuida en un lugar llega al otro.", back: "Volver al nacimiento ↑" },
  bridge: { label: "Del sertón al mar", titleHtml: "Del nacimiento al mar, <em>el agua baja por el río</em> con la historia del proyecto." },
};

const en: EstuaryCopy = {
  hint: "Scroll and follow the water",
  scenes: ["Backlands", "Jaguaribe River", "Mangrove", "Mud", "Meeting of the waters", "Sea"],
  villages: { home: "Lagoa dos Cavalos", river: "Riverside community", fishers: "Fishing village" },
  sea: { tag: "Sea", title: "Everything flows into the sea", text: "Two territories, one tide. What is cared for in one place reaches the other.", back: "Back to the source ↑" },
  bridge: { label: "From the backlands to the sea", titleHtml: "From the source to the sea, <em>the water runs down the river</em> with the story of the project." },
};

export const estuary: Record<Locale, EstuaryCopy> = { pt, es, en };
