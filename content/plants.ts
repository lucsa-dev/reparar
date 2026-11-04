import type { Locale } from "./index";

export const plantCategories = ["medicinal", "food", "crafts", "protection"] as const;
export type PlantCategory = (typeof plantCategories)[number];

type Localized = Record<Locale, string>;

export type Plant = {
  id: string;
  name: Localized;
  /** Names as spelled in the automatic transcripts, pending community review. */
  localNames?: { name: string; language: string }[];
  categories: PlantCategory[];
  territories: string[];
  uses: Localized;
  caution?: boolean;
};

const SHUAR = "Shuar Sharup";
const SIEKOYA = "Siekoya Remolino";
const PACAYACU = "Pacayacu";
const SHUSHUFINDI = "Shushufindi";

export const plants: Plant[] = [
  {
    id: "achiote",
    name: { pt: "Urucum (achiote)", es: "Achiote", en: "Annatto (achiote)" },
    localNames: [{ name: "ma ponsar", language: "Siekoya" }],
    categories: ["medicinal", "food"],
    territories: [SHUSHUFINDI, SIEKOYA, SHUAR],
    uses: {
      pt: "Dá cor à comida, como no arroz colorado. A semente também é citada como medicinal para inchaços.",
      es: "Da color a la comida, como en el arroz colorado. La semilla también se menciona como medicinal para hinchazones.",
      en: "Colors food, as in red rice. The seed is also described as medicinal for swelling.",
    },
  },
  {
    id: "aji",
    name: { pt: "Pimenta (ají)", es: "Ají", en: "Chili pepper (ají)" },
    localNames: [{ name: "jimea", language: "Shuar" }],
    categories: ["food", "protection"],
    territories: [SHUAR],
    uses: {
      pt: "Tempero indispensável à mesa; o nome remete ao que é picante e forte. Também é usada contra lagartas em plantios de batata-doce e mandioca.",
      es: "Condimento indispensable en la mesa; el nombre remite a lo picante y fuerte. También se usa contra gusanos en cultivos de camote y yuca.",
      en: "An essential seasoning; the name evokes what is hot and strong. Also used against worms in sweet potato and cassava plots.",
    },
  },
  {
    id: "barbasco",
    name: { pt: "Barbasco", es: "Barbasco", en: "Barbasco" },
    categories: ["protection"],
    territories: [SHUAR, SIEKOYA],
    caution: true,
    uses: {
      pt: "Planta tóxica, com variedades de mata e de cipó. Tem uso ancestral na pesca e serve como fungicida nos plantios.",
      es: "Planta tóxica, con variedades de mata y de bejuco. Tiene uso ancestral en la pesca y sirve como fungicida en los cultivos.",
      en: "A toxic plant, with shrub and vine varieties. It has an ancestral use in fishing and serves as a fungicide on crops.",
    },
  },
  {
    id: "cacao",
    name: { pt: "Cacau e cacau-branco", es: "Cacao y cacao blanco", en: "Cacao and white cacao" },
    localNames: [{ name: "wakam (cacao blanco)", language: "Shuar" }],
    categories: ["food"],
    territories: [SHUAR],
    uses: {
      pt: "A polpa vira suco para matar a sede. O cacau-branco é chupado como fruta e comido em maito, assado, tostado ou frito; o nome indica algo grande.",
      es: "La pulpa se toma como jugo para calmar la sed. El cacao blanco se chupa como fruta y se come en maito, asado, tostado o frito; el nombre indica algo grande.",
      en: "The pulp is drunk as juice to quench thirst. White cacao is sucked like a fruit and eaten wrapped in leaves, roasted, toasted or fried; the name suggests something large.",
    },
  },
  {
    id: "chia",
    name: { pt: "Chia", es: "Chía", en: "Chia" },
    categories: ["food"],
    territories: [SHUAR],
    uses: {
      pt: "A orientação é hidratar e triturar a semente antes de consumir, porque inteira ela passa pelo estômago sem proveito.",
      es: "La recomendación es hidratar y triturar la semilla antes de consumirla, porque entera pasa por el estómago sin provecho.",
      en: "The advice is to soak and grind the seed before eating it, since whole seeds pass through the stomach with no benefit.",
    },
  },
  {
    id: "chonta",
    name: { pt: "Chonta (pupunha)", es: "Chonta", en: "Peach palm (chonta)" },
    localNames: [{ name: "chontayura", language: "Kichwa" }],
    categories: ["food"],
    territories: [SHUAR, PACAYACU, SIEKOYA],
    uses: {
      pt: "Árvore sagrada para os Shuar, no centro da festa da chonta. Dá fruto e palmito, e tem variedades como a chonta-amarela.",
      es: "Árbol sagrado para los Shuar, en el centro de la fiesta de la chonta. Da fruto y palmito, y tiene variedades como la chonta amarilla.",
      en: "A sacred tree for the Shuar, at the heart of the chonta festival. It yields fruit and palm heart, and has varieties such as yellow chonta.",
    },
  },
  {
    id: "curcuma",
    name: { pt: "Cúrcuma", es: "Cúrcuma", en: "Turmeric" },
    categories: ["food", "crafts"],
    territories: [SHUAR],
    uses: {
      pt: "As batatas são cozidas e comidas como alimento. Também serve para colorir e para tingir o cabelo.",
      es: "Las papas se cocinan y se comen como alimento. También sirve para dar color y para teñir el cabello.",
      en: "The tubers are boiled and eaten. It is also used as a colorant and to dye hair.",
    },
  },
  {
    id: "guaba",
    name: { pt: "Ingá da mata (guaba)", es: "Guaba de la selva", en: "Forest ice-cream bean (guaba)" },
    localNames: [{ name: "machit", language: "Shuar" }],
    categories: ["food", "crafts", "protection"],
    territories: [SHUAR],
    uses: {
      pt: "O fruto fermentado vira chicha, bebida tradicional. O suco dos brotos é usado para fumigar plantios e também como sabão para lavar roupa.",
      es: "El fruto fermentado se convierte en chicha, bebida tradicional. El jugo de los cogollos se usa para fumigar cultivos y también como jabón para lavar la ropa.",
      en: "The fermented fruit becomes chicha, a traditional drink. Juice from the shoots is used to spray crops and as soap for washing clothes.",
    },
  },
  {
    id: "guayusa",
    name: { pt: "Guayusa", es: "Guayusa", en: "Guayusa" },
    localNames: [{ name: "guay", language: "Shuar" }],
    categories: ["medicinal", "food"],
    territories: [SHUAR, PACAYACU, SIEKOYA],
    uses: {
      pt: "Bebida tradicional tomada de manhã, como um café. Entre os Siekoya, acompanha o despertar e a conversa sobre os sonhos.",
      es: "Bebida tradicional que se toma por la mañana, como un café. Entre los Siekoya, acompaña el despertar y la conversación sobre los sueños.",
      en: "A traditional morning drink, taken like coffee. Among the Siekoya, it accompanies waking up and talking about dreams.",
    },
  },
  {
    id: "jengibre",
    name: { pt: "Gengibre", es: "Jengibre", en: "Ginger" },
    localNames: [{ name: "ajeja", language: "Shuar" }],
    categories: ["medicinal"],
    territories: [SHUAR, SHUSHUFINDI],
    uses: {
      pt: "Descrito como um uso medicinal tradicional muito bom e empregado para muitas coisas; também é tomado como água de gengibre.",
      es: "Descrito como un uso medicinal tradicional muy bueno y empleado para muchas cosas; también se toma como agua de jengibre.",
      en: "Described as a very good traditional medicine used for many things; it is also drunk as ginger water.",
    },
  },
  {
    id: "malva",
    name: { pt: "Malva", es: "Malva", en: "Mallow" },
    categories: ["medicinal"],
    territories: [PACAYACU],
    uses: {
      pt: "Lembrada como chá e como remédio desinflamatório, também usada para controlar febres na família.",
      es: "Recordada como té y como remedio desinflamatorio, también usada para controlar fiebres en la familia.",
      en: "Remembered as a tea and an anti-inflammatory remedy, also used within the family to control fevers.",
    },
  },
  {
    id: "mani",
    name: { pt: "Amendoim (maní)", es: "Maní", en: "Peanut" },
    categories: ["food"],
    territories: [SHUAR],
    uses: {
      pt: "Plantado e transmitido de geração em geração, aparece nas histórias Shuar como comida sagrada ligada a Nunkui.",
      es: "Sembrado y transmitido de generación en generación, aparece en las historias shuar como comida sagrada ligada a Nunkui.",
      en: "Planted and passed down through generations, it appears in Shuar stories as a sacred food linked to Nunkui.",
    },
  },
  {
    id: "mate",
    name: { pt: "Cuia (mate)", es: "Mate", en: "Gourd (mate)" },
    categories: ["crafts"],
    territories: [SHUAR],
    uses: {
      pt: "A casca vira artesanato, prato típico e cuia para beber chicha.",
      es: "La cáscara se convierte en artesanía, plato típico y recipiente para tomar chicha.",
      en: "The shell becomes handicrafts, a traditional dish and a bowl for drinking chicha.",
    },
  },
  {
    id: "morete",
    name: { pt: "Buriti (morete)", es: "Morete", en: "Moriche palm (morete)" },
    localNames: [{ name: "achu", language: "Shuar" }],
    categories: ["food", "crafts"],
    territories: [SHUAR],
    uses: {
      pt: "Palmeira de áreas alagadas, cujo nome se liga à água que ela retém. Dá palmito, fruto para chicha e suco, e folhas usadas nas casas.",
      es: "Palmera de zonas pantanosas, cuyo nombre se relaciona con el agua que retiene. Da palmito, fruto para chicha y jugo, y hojas usadas en las casas.",
      en: "A swamp palm whose name relates to the water it holds. It yields palm heart, fruit for chicha and juice, and leaves used in houses.",
    },
  },
  {
    id: "papa-china",
    name: { pt: "Taioba (papa china)", es: "Papa china", en: "Taro (papa china)" },
    categories: ["food"],
    territories: [SHUAR],
    uses: {
      pt: "Alimento que podia ficar bastante tempo enterrado até o consumo. Não foi citado uso medicinal.",
      es: "Alimento que podía permanecer enterrado bastante tiempo hasta su consumo. No se mencionó uso medicinal.",
      en: "A food that could stay buried for a long time until eaten. No medicinal use was mentioned.",
    },
  },
  {
    id: "piripri",
    name: { pt: "Piripri", es: "Piripri", en: "Piripri" },
    categories: ["medicinal"],
    territories: [SHUAR],
    uses: {
      pt: "Tem raiz parecida com a do gengibre e muitas variedades, cada uma com seu uso medicinal, inclusive para picadas de insetos.",
      es: "Tiene raíz parecida a la del jengibre y muchas variedades, cada una con su uso medicinal, incluso para picaduras de insectos.",
      en: "Its root resembles ginger, and it has many varieties, each with its own medicinal use, including for insect bites.",
    },
  },
  {
    id: "sabila",
    name: { pt: "Babosa (sábila)", es: "Sábila", en: "Aloe (sábila)" },
    categories: ["medicinal"],
    territories: [SHUAR],
    uses: {
      pt: "Aplicada sobre a pele como desinflamatório.",
      es: "Se aplica sobre la piel como desinflamatorio.",
      en: "Applied to the skin as an anti-inflammatory.",
    },
  },
  {
    id: "saque",
    name: { pt: "Palmeira saque", es: "Palmera saque", en: "Saque palm" },
    categories: ["food"],
    territories: [SHUAR],
    uses: {
      pt: "Palmeira alta e fina, cujas folhas fazem barulho com o vento. Dá palmito e frutos para suco, e também alimenta as aves da mata.",
      es: "Palmera alta y delgada, cuyas hojas suenan con el viento. Da palmito y frutos para jugo, y también alimenta a las aves del monte.",
      en: "A tall, slender palm whose leaves rustle in the wind. It yields palm heart and fruit for juice, and also feeds forest birds.",
    },
  },
  {
    id: "tabaco",
    name: { pt: "Tabaco", es: "Tabaco", en: "Tobacco" },
    categories: ["medicinal", "protection"],
    territories: [SHUAR, SIEKOYA],
    caution: true,
    uses: {
      pt: "Citado como remédio tradicional e presente em cerimônias. As folhas também são colocadas nos ninhos das galinhas para afastar piolhos e insetos.",
      es: "Citado como remedio tradicional y presente en ceremonias. Las hojas también se colocan en los nidos de las gallinas para alejar piojos e insectos.",
      en: "Cited as a traditional remedy and present in ceremonies. The leaves are also placed in hens' nests to keep lice and insects away.",
    },
  },
  {
    id: "yuca",
    name: { pt: "Mandioca (yuca)", es: "Yuca", en: "Cassava (yuca)" },
    categories: ["food"],
    territories: [SHUAR],
    uses: {
      pt: "Base da alimentação. As folhas novas também são cozidas e comidas. Existe uma variedade amarga, diferente da usada na comida do dia a dia.",
      es: "Base de la alimentación. Las hojas tiernas también se cocinan y se comen. Existe una variedad amarga, distinta de la que se usa en la comida diaria.",
      en: "A staple food. The tender leaves are also cooked and eaten. There is a bitter variety, different from the one used in everyday meals.",
    },
  },
  {
    id: "zapallo",
    name: { pt: "Abóbora (zapallo)", es: "Zapallo", en: "Squash (zapallo)" },
    categories: ["food"],
    territories: [SIEKOYA, SHUAR],
    uses: {
      pt: "Alimento importante, cozido maduro e coado para receber visitas, e presente nas histórias de origem.",
      es: "Alimento importante, cocinado maduro y colado para recibir a los invitados, y presente en las historias de origen.",
      en: "An important food, cooked ripe and strained to welcome guests, and present in origin stories.",
    },
  },
];

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
    intro: "Plantas citadas nas consultas e entrevistas da missão de campo na Amazônia equatoriana, organizadas por uso e território.",
    draftNotice: "Primeira versão. Nomes e usos vêm de transcrições automáticas e podem conter erros de grafia.",
    healthNotice: "Os usos registram saberes relatados. Não são recomendação de tratamento nem substituem atendimento em saúde.",
    searchLabel: "Buscar planta",
    searchPlaceholder: "Nome, uso ou território",
    filterLabel: "Filtrar por uso",
    all: "Todas",
    categories: { medicinal: "Medicinal", food: "Alimento", crafts: "Artesanato e casa", protection: "Proteção de plantios e criações" },
    territories: "Territórios",
    cautionNote: "Planta tóxica ou de uso delicado.",
    count: (shown, total) => `${shown} de ${total} plantas`,
    empty: "Nenhuma planta encontrada.",
  },
  es: {
    metaTitle: "Archivo de plantas · Reparación Integral Comunitaria",
    metaDescription: "Plantas mencionadas en las conversaciones de la misión de campo en Ecuador, con nombres, usos relatados y territorios.",
    back: "← Volver al inicio",
    label: "archivo de plantas",
    title: "Las plantas en las conversaciones de Ecuador",
    intro: "Plantas mencionadas en las consultas y entrevistas de la misión de campo en la Amazonía ecuatoriana, organizadas por uso y territorio.",
    draftNotice: "Primera versión. Los nombres y usos provienen de transcripciones automáticas y pueden contener errores de ortografía.",
    healthNotice: "Los usos registran saberes relatados. No son una recomendación de tratamiento ni sustituyen la atención en salud.",
    searchLabel: "Buscar planta",
    searchPlaceholder: "Nombre, uso o territorio",
    filterLabel: "Filtrar por uso",
    all: "Todas",
    categories: { medicinal: "Medicinal", food: "Alimento", crafts: "Artesanía y hogar", protection: "Protección de cultivos y crianzas" },
    territories: "Territorios",
    cautionNote: "Planta tóxica o de uso delicado.",
    count: (shown, total) => `${shown} de ${total} plantas`,
    empty: "No se encontró ninguna planta.",
  },
  en: {
    metaTitle: "Plant archive · Comprehensive Community Reparation",
    metaDescription: "Plants mentioned in conversations during the field mission in Ecuador, with names, reported uses and territories.",
    back: "← Back to home",
    label: "plant archive",
    title: "Plants in the conversations from Ecuador",
    intro: "Plants mentioned in consultations and interviews during the field mission in the Ecuadorian Amazon, organized by use and territory.",
    draftNotice: "First version. Names and uses come from automatic transcripts and may contain spelling errors.",
    healthNotice: "These uses record reported knowledge. They are not treatment advice and do not replace health care.",
    searchLabel: "Search plants",
    searchPlaceholder: "Name, use or territory",
    filterLabel: "Filter by use",
    all: "All",
    categories: { medicinal: "Medicinal", food: "Food", crafts: "Crafts and home", protection: "Crop and livestock protection" },
    territories: "Territories",
    cautionNote: "Toxic plant or one requiring care.",
    count: (shown, total) => `${shown} of ${total} plants`,
    empty: "No plants found.",
  },
};
