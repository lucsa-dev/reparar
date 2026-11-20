import type { Locale } from "./index";

/** Texts for the route map and the river that runs through the home page. */
export type EstuaryCopy = {
  part: { label: string; titleHtml: string };
  mapLabel: string;
  mapNote: string;
  cards: { tag: string; title: string; text: string; coord?: string }[];
  chapters: string[];
  labels: { sea1: string; sea2: string; ec: string; co: string; pe: string; br: string; ce: string; napo: string; amazon: string; jag: string; mouth: string };
  markers: { clinic: string; clinicPlace: string; collective: string; collectivePlace: string };
  hint: string;
  /** Names of the river stretches, in order: sertão, rio, mangue, lama, encontro, mar. */
  scenes: string[];
  villages: { home: string; river: string; fishers: string };
  sea: { tag: string; title: string; text: string; back: string };
  bridge: { label: string; titleHtml: string };
};

const pt: EstuaryCopy = {
  part: { label: "Parte 1 · O caminho", titleHtml: "Dos Andes ao Jaguaribe: <em>uma mesma água</em> liga dois territórios." },
  mapLabel: "Mapa da rota entre Sucumbíos, no Equador, e Lagoa dos Cavalos, no Ceará",
  mapNote: "Mapa ilustrativo simplificado",
  cards: [
    { tag: "Ceará ⇄ Equador", title: "Dois territórios, uma mesma água", text: "Mais de 4 mil km em linha reta separam a Amazônia equatoriana do sertão do Baixo Jaguaribe. Role para seguir o caminho das águas entre eles." },
    { tag: "Equador", title: "Sucumbíos, Napo e Orellana", text: "Na Amazônia equatoriana, a Clínica Ambiental repara há quase duas décadas territórios contaminados pelo petróleo.", coord: "0°05′N · 76°53′O" },
    { tag: "Rio Napo", title: "A água desce dos Andes", text: "O Napo nasce nas encostas andinas do Equador e corre para o leste até encontrar o Amazonas, já em território peruano.", coord: "3°24′S · 72°54′O" },
    { tag: "Rio Amazonas", title: "Atravessando a floresta", text: "Pelo Amazonas, a água cruza o continente até o Atlântico, numa foz entre o Amapá e o Pará.", coord: "0°00′ · 50°00′O" },
    { tag: "Litoral norte", title: "Costa acima, até o Ceará", text: "Pelo mar, o caminho acompanha o litoral até a foz do rio Jaguaribe, entre Fortim e Aracati.", coord: "4°25′S · 37°46′O" },
    { tag: "Ceará", title: "Lagoa dos Cavalos, Russas", text: "Subindo o Jaguaribe, no distrito de Peixe, a 145 km de Fortaleza, vive a comunidade atingida pelo perímetro irrigado.", coord: "≈ 5°03′S · 38°03′O" },
  ],
  chapters: ["Dois territórios", "Equador", "Rio Napo", "Amazonas", "Litoral", "Ceará"],
  labels: { sea1: "Oceano Pacífico", sea2: "Oceano Atlântico", ec: "Equador", co: "Colômbia", pe: "Peru", br: "Brasil", ce: "Ceará", napo: "Rio Napo", amazon: "Rio Amazonas", jag: "Rio Jaguaribe", mouth: "Foz do Amazonas" },
  markers: { clinic: "Clínica Ambiental", clinicPlace: "Sucumbíos · Napo · Orellana", collective: "Coletivo Bem Viver", collectivePlace: "Lagoa dos Cavalos · Russas" },
  hint: "Role e siga a água",
  scenes: ["Sertão", "Rio Jaguaribe", "Mangue", "Lama", "Encontro das águas", "Mar"],
  villages: { home: "Lagoa dos Cavalos", river: "Comunidade ribeirinha", fishers: "Vila de pescadores" },
  sea: { tag: "Mar", title: "Tudo deságua no mar", text: "Dois territórios, uma mesma maré. O que se cuida em um lugar chega ao outro.", back: "Voltar à nascente ↑" },
  bridge: { label: "Parte 2 · Do sertão ao mar", titleHtml: "A água que chega ao Ceará <em>desce o rio</em> com a história do projeto." },
};

const es: EstuaryCopy = {
  part: { label: "Parte 1 · El camino", titleHtml: "De los Andes al Jaguaribe: <em>una misma agua</em> une dos territorios." },
  mapLabel: "Mapa de la ruta entre Sucumbíos, en Ecuador, y Lagoa dos Cavalos, en Ceará",
  mapNote: "Mapa ilustrativo simplificado",
  cards: [
    { tag: "Ceará ⇄ Ecuador", title: "Dos territorios, una misma agua", text: "Más de 4 mil km en línea recta separan la Amazonía ecuatoriana del sertón del Bajo Jaguaribe. Desliza para seguir el camino del agua entre ellos." },
    { tag: "Ecuador", title: "Sucumbíos, Napo y Orellana", text: "En la Amazonía ecuatoriana, la Clínica Ambiental repara desde hace casi dos décadas territorios contaminados por el petróleo.", coord: "0°05′N · 76°53′O" },
    { tag: "Río Napo", title: "El agua baja de los Andes", text: "El Napo nace en las laderas andinas del Ecuador y corre hacia el este hasta encontrarse con el Amazonas, ya en territorio peruano.", coord: "3°24′S · 72°54′O" },
    { tag: "Río Amazonas", title: "Atravesando la selva", text: "Por el Amazonas, el agua cruza el continente hasta el Atlántico, en una desembocadura entre Amapá y Pará.", coord: "0°00′ · 50°00′O" },
    { tag: "Litoral norte", title: "Costa arriba, hasta Ceará", text: "Por el mar, el camino sigue el litoral hasta la desembocadura del río Jaguaribe, entre Fortim y Aracati.", coord: "4°25′S · 37°46′O" },
    { tag: "Ceará", title: "Lagoa dos Cavalos, Russas", text: "Subiendo el Jaguaribe, en el distrito de Peixe, a 145 km de Fortaleza, vive la comunidad afectada por el perímetro de riego.", coord: "≈ 5°03′S · 38°03′O" },
  ],
  chapters: ["Dos territorios", "Ecuador", "Río Napo", "Amazonas", "Litoral", "Ceará"],
  labels: { sea1: "Océano Pacífico", sea2: "Océano Atlántico", ec: "Ecuador", co: "Colombia", pe: "Perú", br: "Brasil", ce: "Ceará", napo: "Río Napo", amazon: "Río Amazonas", jag: "Río Jaguaribe", mouth: "Desembocadura del Amazonas" },
  markers: { clinic: "Clínica Ambiental", clinicPlace: "Sucumbíos · Napo · Orellana", collective: "Colectivo Bem Viver", collectivePlace: "Lagoa dos Cavalos · Russas" },
  hint: "Desliza y sigue el agua",
  scenes: ["Sertón", "Río Jaguaribe", "Manglar", "Lodo", "Encuentro de las aguas", "Mar"],
  villages: { home: "Lagoa dos Cavalos", river: "Comunidad ribereña", fishers: "Pueblo de pescadores" },
  sea: { tag: "Mar", title: "Todo desemboca en el mar", text: "Dos territorios, una misma marea. Lo que se cuida en un lugar llega al otro.", back: "Volver al nacimiento ↑" },
  bridge: { label: "Parte 2 · Del sertón al mar", titleHtml: "El agua que llega a Ceará <em>baja por el río</em> con la historia del proyecto." },
};

const en: EstuaryCopy = {
  part: { label: "Part 1 · The way", titleHtml: "From the Andes to the Jaguaribe: <em>the same water</em> links two territories." },
  mapLabel: "Map of the route between Sucumbíos, in Ecuador, and Lagoa dos Cavalos, in Ceará",
  mapNote: "Simplified illustrative map",
  cards: [
    { tag: "Ceará ⇄ Ecuador", title: "Two territories, the same water", text: "More than 4,000 km as the crow flies separate the Ecuadorian Amazon from the backlands of the Lower Jaguaribe. Scroll to follow the water between them." },
    { tag: "Ecuador", title: "Sucumbíos, Napo and Orellana", text: "In the Ecuadorian Amazon, the Clínica Ambiental has spent almost two decades repairing territories contaminated by oil.", coord: "0°05′N · 76°53′W" },
    { tag: "Napo River", title: "Water comes down from the Andes", text: "The Napo rises on Ecuador's Andean slopes and flows east until it meets the Amazon, already in Peru.", coord: "3°24′S · 72°54′W" },
    { tag: "Amazon River", title: "Crossing the forest", text: "Along the Amazon, the water crosses the continent to the Atlantic, reaching the sea between Amapá and Pará.", coord: "0°00′ · 50°00′W" },
    { tag: "North coast", title: "Up the coast to Ceará", text: "By sea, the route follows the coastline to the mouth of the Jaguaribe River, between Fortim and Aracati.", coord: "4°25′S · 37°46′W" },
    { tag: "Ceará", title: "Lagoa dos Cavalos, Russas", text: "Up the Jaguaribe, in the district of Peixe, 145 km from Fortaleza, lives the community hit by the irrigation project.", coord: "≈ 5°03′S · 38°03′W" },
  ],
  chapters: ["Two territories", "Ecuador", "Napo River", "Amazon", "Coast", "Ceará"],
  labels: { sea1: "Pacific Ocean", sea2: "Atlantic Ocean", ec: "Ecuador", co: "Colombia", pe: "Peru", br: "Brazil", ce: "Ceará", napo: "Napo River", amazon: "Amazon River", jag: "Jaguaribe River", mouth: "Mouth of the Amazon" },
  markers: { clinic: "Clínica Ambiental", clinicPlace: "Sucumbíos · Napo · Orellana", collective: "Bem Viver Collective", collectivePlace: "Lagoa dos Cavalos · Russas" },
  hint: "Scroll and follow the water",
  scenes: ["Backlands", "Jaguaribe River", "Mangrove", "Mud", "Meeting of the waters", "Sea"],
  villages: { home: "Lagoa dos Cavalos", river: "Riverside community", fishers: "Fishing village" },
  sea: { tag: "Sea", title: "Everything flows into the sea", text: "Two territories, one tide. What is cared for in one place reaches the other.", back: "Back to the source ↑" },
  bridge: { label: "Part 2 · From the backlands to the sea", titleHtml: "The water that reaches Ceará <em>runs down the river</em> with the story of the project." },
};

export const estuary: Record<Locale, EstuaryCopy> = { pt, es, en };
