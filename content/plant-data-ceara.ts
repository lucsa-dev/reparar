import type { CearaPlant } from "./plants";

/**
 * Inventário de plantas medicinais do Coletivo de Pesquisa Bem Viver, Lagoa dos Cavalos, Russas (CE), 2018.
 * Source: BRAGA, L. Q. V. Bem viver, saúde e reparação (tese, UFC, 2020), cap. 2, Tabela 04, p. 70–79.
 * Text stays in Portuguese, as recorded in the inventory. Scientific names keep the thesis identification;
 * only evident typing slips were fixed (e.g. "Mntha" → "Mentha", "Cocos mucifera" → "Cocos nucifera").
 * `bookPages` links a plant to photos of the same species in the Acervo Botânico book.
 */
export const cearaPlants: CearaPlant[] = [
  { id: "ce-abacaxi", name: "Abacaxi", bookPages: [8], uses: [{ for: "gripe", part: "fruta", preparation: "mel" }], season: "qualquer época", propagation: "coroa", place: "quintal", citations: 2 },
  { id: "ce-acerola", name: "Acerola", scientificName: "Malpighia glabra", uses: [{ for: "vitamina; gripe; anemia", part: "fruta", preparation: "suco e mel" }], season: "qualquer época; inverno", propagation: "semente e muda", place: "quintal", citations: 5 },
  { id: "ce-agriao", name: "Agrião", uses: [{ for: "gripe; garganta; inflamação; antibiótico; inflamação da garganta; aftas", part: "botão, folha, talo e semente", preparation: "mel; lambedor; suco verde" }], season: "qualquer época", propagation: "semente; galho; fio", place: "quintal", citations: 6 },
  { id: "ce-alfavaca", name: "Alfavaca", scientificName: "Blainvillea acmella (L.) Philipson", uses: [{ for: "calmante; circulação", part: "folha", preparation: "chá" }], season: "qualquer época", propagation: "semente", place: "quintal", citations: 3 },
  {
    id: "ce-alfazema-do-mato", name: "Alfazema do mato",
    uses: [
      { for: "fígado", part: "folhas, galhos e cacho de flores", preparation: "chá ou água de alfazema" },
      { for: "enxaqueca; intestino", part: "galho", preparation: "chá" },
    ],
    season: "agosto (depois do inverno); inverno", propagation: "semente e muda", place: "capoeira e mata", citations: 3,
  },
  { id: "ce-algodao-brabo", name: "Algodão brabo", scientificName: "Cochlospermum vitifolium (Willd.) Spreng.", uses: [] },
  {
    id: "ce-ameixa-do-mato", name: "Ameixa do mato", scientificName: "Ximenia americana L.",
    uses: [
      { for: "inflamação", part: "casca", preparation: "água de ameixa; pode-se usar a casca da ameixa e a da aroeira juntas" },
      { for: "cicatrizante", part: "casca", preparation: "pó" },
    ],
    season: "qualquer época", propagation: "semente", place: "mata", citations: 2,
  },
  { id: "ce-amora", name: "Amora", uses: [{ for: "diminuir os sintomas da menopausa", part: "folha", preparation: "chá abafado (1 folha para 1 xícara de água)" }], season: "qualquer época", propagation: "semente", place: "quintal", citations: 2 },
  { id: "ce-angico", name: "Angico", uses: [{ for: "gripe", part: "casca" }], citations: 1 },
  { id: "ce-araruta", name: "Araruta", scientificName: "Maranta arundinacea L.", bookPages: [39], uses: [] },
  { id: "ce-arnica", name: "Arnica", uses: [] },
  {
    id: "ce-aroeira", name: "Aroeira", scientificName: "Myracrodruon cf. urundeuva Allemão",
    uses: [
      { for: "inflamação; antibiótico", part: "casca", preparation: "chá; asseio" },
      { for: "inflamação genital", part: "casca", preparation: "água de aroeira num copo, renovada: molho da casca sem aquecer; também como banho de assento" },
      { for: "cicatrização", part: "casca", preparation: "banho" },
    ],
    season: "qualquer época", propagation: "semente", place: "mata", citations: 3,
  },
  {
    id: "ce-babosa", name: "Babosa", scientificName: "Aloe vera (L.)",
    uses: [
      { for: "cicatrização", part: "palma", preparation: "no mel de abelha ou no suco verde" },
      { for: "anti-inflamatório", part: "palma", preparation: "mel" },
    ],
    season: "qualquer época", propagation: "fio e batata", place: "quintal", citations: 2,
  },
  {
    id: "ce-bananeira", name: "Bananeira", scientificName: "Musa paradisiaca L.",
    uses: [{ for: "cansaço; sinusite; ferimentos em acamados", part: "folha e mangará", preparation: "bater 1 mangará em 1 litro de mel de abelha, coar e tomar 1 colher 3 vezes ao dia; a folha vai embaixo dos ferimentos" }],
    season: "qualquer época", propagation: "fio", place: "quintal", citations: 3,
  },
  {
    id: "ce-batata-de-purga", name: "Batata de purga", scientificName: "Operculina macrocarpa (L.) Urb.", caution: true,
    uses: [
      { for: "verme", part: "batata", preparation: "ralada na banana, em doce ou em papa" },
      { for: "purgante", part: "batata", preparation: "raspa, seca as rodelas, pila e faz uma goma na papa" },
    ],
    season: "agosto (depois do inverno); verão", propagation: "semente", place: "quintal; mata", citations: 2,
  },
  {
    id: "ce-boldo", name: "Boldo",
    uses: [{ for: "enxaqueca; má digestão; fígado sobrecarregado", part: "folha", preparation: "chá (5 folhas para 1 copo de água morna, sem aquecer as folhas; deixar abafado)" }],
    season: "qualquer época", propagation: "galho", contraindication: "suspender o uso durante a menstruação; insuficiência renal", place: "quintal", citations: 7,
  },
  {
    id: "ce-cajueiro", name: "Cajueiro", scientificName: "Anacardium occidentale L.", bookPages: [55],
    uses: [
      { for: "dor de dente; anemia", part: "folha, entrecasca e fruta", preparation: "chá “cozinhando”; mel" },
      { for: "colesterol", part: "casca do cajueiro azedo", preparation: "casca de molho" },
    ],
    season: "qualquer época", propagation: "castanha", place: "cercado", citations: 7,
  },
  { id: "ce-canela-do-mato", name: "Canela do mato", otherNames: "supica, canela braba", scientificName: "Croton zehntneri Pax & K. Hoffm.", uses: [{ preparation: "chá e mel" }], citations: 1, note: "Rara no território. O Coletivo quer recuperá-la; é lembrada como muito boa para a coluna." },
  { id: "ce-capim-santo", name: "Capim santo", scientificName: "Cymbopogon citratus (DC.) Stapf", uses: [{ for: "diurético; antioxidante; calmante; nervos; relaxante; febre; inflamação", part: "folha", preparation: "chá" }], season: "qualquer época", propagation: "muda da raiz; “fio”", place: "quintal", citations: 13 },
  { id: "ce-carnauba", name: "Carnaúba", scientificName: "Copernicia prunifera (Mill.) H. E. Moore", uses: [{ for: "digestão", part: "palha seca", preparation: "chá" }], place: "capoeira", citations: 1 },
  { id: "ce-catingueira", name: "Catingueira", scientificName: "Poincianella bracteosa (Tul.) L. P. Queiroz", uses: [{ part: "flor", preparation: "mel" }], citations: 1 },
  { id: "ce-cha-preto", name: "Chá preto", uses: [{ for: "barriga (quando a comida não cai bem); dor de cabeça; cólica", part: "folha", preparation: "chá abafado" }], season: "qualquer época, desde que aguada", propagation: "muda; galho", place: "quintal", citations: 3 },
  { id: "ce-cidreira", name: "Cidreira", uses: [{ for: "calmante; pressão alta e inflamação; dor de barriga; intestino; constipação", part: "folha seca", preparation: "chá abafado diariamente (5 folhas para 1 xícara de água); chá e calda" }], season: "qualquer época, desde que aguada", propagation: "muda da raiz; galho", place: "quintal", citations: 9 },
  { id: "ce-ciriguela", name: "Ciriguela", uses: [] },
  { id: "ce-citronela", name: "Citronela", scientificName: "Cymbopogon winterianus Jowitt ex Bor", uses: [{ for: "repelente de insetos", part: "folha", preparation: "ter as plantas perto das janelas; fazer o chá e deixar no quarto à noite" }], season: "qualquer época", propagation: "fio", place: "quintal", citations: 1 },
  { id: "ce-coqueiro", name: "Coqueiro", scientificName: "Cocos nucifera L.", uses: [{ for: "dor de ouvido; dor de dente; pele; “serve para tudo”", part: "óleo e fruta", preparation: "derreter o óleo na quenga do coco e pôr na dor de dente; tomar a água de coco como soro" }], season: "qualquer época, desde que aguada", propagation: "coco", place: "quintal", citations: 6 },
  { id: "ce-colonia", name: "Colônia", scientificName: "Alpinia speciosa (Blume) D. Dietr.", uses: [{ for: "pressão alta; coração; calmante", part: "folha", preparation: "chá abafado (1 folha para 2 litros de água)" }], season: "qualquer época", propagation: "fio; muda", citations: 4 },
  { id: "ce-coroma", name: "Coroma", uses: [{ for: "estômago; inflamação; gastrite; úlcera; inflamação da garganta", part: "folha", preparation: "chá ou suco; mel; lambedor; garrafada (folhas em 1 litro de água com açúcar, enterrada por nove dias)" }], season: "qualquer época", propagation: "galho", place: "quintal", citations: 7 },
  { id: "ce-coroma-roxa", name: "Coroma roxa", scientificName: "Kalanchoe pinnata (Lam.) Pers.", uses: [{ for: "inflamação", part: "folha", preparation: "suco; lambedor; chá; mel" }], season: "qualquer época", propagation: "galho", place: "quintal", citations: 2 },
  { id: "ce-coroma-verde", name: "Coroma verde", scientificName: "Kalanchoe pinnata (Lam.) Pers.", uses: [{ for: "inflamação", part: "folha", preparation: "suco; lambedor; chá; mel" }], season: "qualquer época", propagation: "galho", place: "quintal", citations: 1 },
  { id: "ce-cumaru", name: "Cumaru", uses: [{ for: "gripe", part: "casca", preparation: "garrafada; chá; mel" }], season: "qualquer época", propagation: "semente", contraindication: "só se o mel ficar muito grosso", place: "mata", citations: 4 },
  { id: "ce-delegado", name: "Delegado", uses: [{ for: "gripe forte; verme", part: "raiz", preparation: "mel; chá" }], season: "inverno", propagation: "semente", place: "mata", citations: 2 },
  { id: "ce-erva-cidreira", name: "Erva cidreira", uses: [{ for: "calmante; insônia; afinar o sangue", part: "folha", preparation: "chá" }], season: "qualquer época", propagation: "muda", place: "quintal", citations: 2 },
  { id: "ce-espada-de-sao-jorge", name: "Espada de São Jorge", uses: [{ for: "limpeza e proteção", part: "folha", preparation: "banho" }], season: "qualquer época, desde que aguada", propagation: "muda", place: "quintal", citations: 1 },
  { id: "ce-eucalipto", name: "Eucalipto", scientificName: "Eucalyptus citriodora Hook.", uses: [{ for: "sinusite; congestão nasal; estalecido (espirros e muita secreção)", part: "folha", preparation: "folha de eucalipto com raiz de cumaru: banho, lavar a cabeça e deixar a toalha enrolada; garrafada com outras plantas" }], season: "qualquer época", propagation: "muda", place: "quintal; mata; feira", citations: 3 },
  { id: "ce-flor-de-urubu", name: "Flor de urubu", scientificName: "Turnera subulata Sm.", uses: [{ for: "inflamação; coluna", part: "raiz", preparation: "chá" }], season: "qualquer época", propagation: "semente", place: "mata; capoeira", citations: 1 },
  { id: "ce-gengibre", name: "Gengibre", scientificName: "Zingiber officinale Roscoe", uses: [{ for: "emagrecer; dor; inflamação da garganta; cólicas menstruais; digestivo", part: "batata ou raiz", preparation: "chá e suco verde; chá abafado (3 rodelas da raiz para 1 xícara de água)" }], season: "qualquer época", propagation: "batata ou raiz", place: "quintal", citations: 7 },
  { id: "ce-gergelim", name: "Gergelim", uses: [{ for: "AVC; quentura (febre); malina (inflamação genital ou anal)", part: "semente", preparation: "leite do gergelim: machucar a semente num pano, tirar o leite e misturar com pouca água e açúcar" }], season: "inverno", propagation: "semente", place: "capoeira; cercado", citations: 2 },
  { id: "ce-gergelim-branco", name: "Gergelim branco", uses: [{ for: "saúde da mulher; gestante; evitar quentura", part: "semente", preparation: "leite de gergelim pisado" }], season: "inverno", propagation: "semente", place: "quintal", citations: 1 },
  { id: "ce-gergelim-preto", name: "Gergelim preto", uses: [{ for: "dor de cabeça", part: "semente", preparation: "chá" }], season: "qualquer época", propagation: "semente", place: "feira", citations: 1 },
  {
    id: "ce-goiabeira", name: "Goiabeira", scientificName: "Psidium guajava L.", bookPages: [85],
    uses: [
      { for: "crise de intestino; diarreia", part: "olho da folha", preparation: "chá do olho da folha" },
      { for: "quentura de criança nova; inflamação da coluna", part: "olho da goiabeira", preparation: "chá de 3 olhos de goiaba com gergelim e raiz de maliça" },
      { for: "inflamação genital", part: "folha seca", preparation: "chá abafado (3 folhas secas em 1 litro de água, 3 vezes ao dia); banho de assento" },
    ],
    season: "qualquer época, desde que aguada", propagation: "semente", place: "quintal", citations: 7,
  },
  {
    id: "ce-graviola", name: "Graviola", scientificName: "Annona muricata L.", bookPages: [2],
    uses: [
      { for: "câncer", part: "olho, folha e fruta", preparation: "suco da folha perto do olho" },
      { for: "diabetes", part: "folha", preparation: "chá (5 folhas em 1 litro de água, abafado)" },
    ],
    season: "qualquer época", propagation: "semente", place: "quintal", citations: 2,
  },
  {
    id: "ce-hortela", name: "Hortelã", scientificName: "Mentha x villosa Huds.",
    uses: [
      { for: "dor de cabeça; cólica", part: "folha", preparation: "chá abafado com 1 colher de gergelim e hortelã macerados; sinapismo (fazer o chá e pôr a hortelã debaixo do pé)" },
      { for: "gripe", part: "folha", preparation: "inalar o chá ou tomar o lambedor" },
    ],
    season: "qualquer época", propagation: "galho; estaca; muda", contraindication: "não tomar banho logo depois do chá; se quiser tomar a qualquer hora, pode tomar no terreiro", place: "quintal", citations: 14,
  },
  { id: "ce-hortela-pimenta", name: "Hortelã pimenta", uses: [{ for: "calmante", part: "folha", preparation: "chá ou na comida" }], season: "qualquer época", propagation: "galho", place: "quintal", citations: 1 },
  {
    id: "ce-insulina", name: "Insulina", scientificName: "Cissus verticillata (L.) Nicolson & C. E. Jarvis",
    uses: [
      { for: "diabetes", part: "folha", preparation: "chá abafado" },
      { for: "cicatrizante", part: "casca", preparation: "pó" },
    ],
    season: "qualquer época", propagation: "galho", place: "quintal", citations: 1,
  },
  { id: "ce-jatoba", name: "Jatobá", scientificName: "Hymenaea courbaril L.", bookPages: [114], uses: [{ for: "gripe forte; dor de garganta; expectorante", part: "raiz, casca e bage (vagem)", preparation: "chá; garrafada; mel; lambedor" }], season: "qualquer época", propagation: "semente; bage", place: "mata", citations: 5 },
  { id: "ce-juazeiro", name: "Juazeiro", scientificName: "Ziziphus joazeiro Mart.", uses: [{ for: "cansaço", part: "casca", preparation: "garrafada" }], season: "qualquer época", propagation: "semente", contraindication: "não é bom misturar com remédio de farmácia", place: "mata", citations: 1 },
  {
    id: "ce-juca", name: "Jucá", scientificName: "Libidibia ferrea var. glabrescens (Benth.) L. P. Queiroz",
    uses: [
      { for: "dor no corpo", part: "bage", preparation: "colocar de molho em água" },
      { for: "inflamação; rins", part: "raiz", preparation: "chá" },
    ],
    season: "verão; tem o mês certo", propagation: "semente", place: "muda", citations: 3,
  },
  {
    id: "ce-laranjeira", name: "Laranjeira",
    uses: [
      { for: "malina; quentura", part: "semente", preparation: "torrar nove sementes, fazer o pó, pôr na água com açúcar e fazer o chá" },
      { for: "gripe e fraqueza", part: "fruta", preparation: "suco de laranja; suco com leite" },
      { for: "problema de fígado e rim", part: "casca", preparation: "chá, ou torrar a casca, deixar de molho na água e tomar o chá" },
      { for: "calmante; prevenção de virose", part: "folha", preparation: "chá" },
      { for: "constipação", part: "fruta", preparation: "comer a fruta todo dia, inclusive o bagaço" },
      { for: "cólica menstrual", part: "semente", preparation: "3 sementes piladas em 1 xícara de água" },
      { for: "diminuir os sintomas da gripe", part: "folha", preparation: "banho de chá abafado das folhas" },
    ],
    season: "três vezes ao ano", propagation: "muda; semente", place: "quintal", citations: 9,
  },
  { id: "ce-lianhaca", name: "Lianhaça", scientificName: "Leucaena leucocephala (Lam.) de Wit", uses: [{ for: "inflamações em geral", part: "semente", preparation: "1 colher de chá do pó da lianhaça torrada no suco" }], season: "qualquer época", propagation: "semente", place: "intercâmbio e trocas; quintal; capoeira", citations: 3 },
  {
    id: "ce-limoeiro", name: "Limoeiro", scientificName: "Citrus x limon Osbeck",
    uses: [
      { for: "intestino; estômago; azia; desintoxicação do estômago; antibiótico natural", part: "fruta", preparation: "suco de limão com goma" },
      { for: "mal-estar; “para tudo”", preparation: "água com limão" },
      { for: "prevenção de virose; gripe", part: "fruta e folha", preparation: "chá" },
      { for: "dor de barriga", part: "folha e fruta", preparation: "chá das folhas com mel; tomar água com limão" },
      { for: "febre; inflamação do fígado; constipação", preparation: "chá; suco verde" },
      { for: "sinusite", part: "folha", preparation: "fazer o chá das folhas e pôr no sereno; de manhã, banhar a cabeça e cobrir com uma toalha" },
    ],
    season: "qualquer época, desde que aguada", propagation: "muda; semente", contraindication: "útero; ovário", place: "quintal", citations: 10,
  },
  { id: "ce-malica-rasteira", name: "Maliça rasteira", scientificName: "Mimosa candollei R. Grether", uses: [{ for: "diarreia; quentura de criança nova; quentura", part: "raiz", preparation: "chá (3 raízes de 1 polegada)" }], season: "inverno; qualquer época, desde que aguada", place: "capoeira; quintal", citations: 3 },
  { id: "ce-malva", name: "Malva", scientificName: "Waltheria rotundifolia Schrank", uses: [{ for: "gripe; inflamação", part: "folha", preparation: "chá e mel (folhas lavadas, ao fogo com açúcar)" }], season: "qualquer época", propagation: "galho", place: "quintal", citations: 3 },
  { id: "ce-malvarisco-verde", name: "Malvarisco verde", uses: [{ for: "gripe; resfriado; expectorante; anti-inflamatório", part: "folha", preparation: "lambedor; suco; chá verde; mel (folhas e açúcar)" }], season: "qualquer época", propagation: "galho", place: "quintal do vizinho", citations: 11 },
  {
    id: "ce-mamao", name: "Mamão", scientificName: "Carica papaya L.", bookPages: [12],
    uses: [
      { for: "intestino seco; constipação", part: "fruta", preparation: "comer a fruta todo dia" },
      { for: "gripe; tosse", part: "flor e folha", preparation: "mel (uma camada de flor, uma de açúcar, ao fogo); mel feito com açúcar na brasa; chá das folhas fervidas" },
      { for: "enxaqueca", part: "folha e flor do mamão macho", preparation: "chá" },
      { for: "cansaço", part: "fruta", preparation: "mel da fruta verde" },
      { for: "barriga; digestão; estômago; “comida ruim”; fígado sobrecarregado", part: "folha", preparation: "chá do olho do mamão; chá abafado de 3 pedaços pequenos da ponta da folha em 2 xícaras de água" },
    ],
    season: "qualquer época, desde que aguada", propagation: "semente; muda", place: "quintal", citations: 9,
  },
  { id: "ce-mandioca", name: "Mandioca", otherNames: "carimã", bookPages: [25], uses: [{ for: "fraqueza; dor de estômago", part: "batata", preparation: "goma" }], season: "qualquer época", place: "quintal", citations: 1 },
  { id: "ce-manjerioba", name: "Manjerioba", scientificName: "Senna occidentalis (L.) Link", uses: [{ for: "anemia", part: "raiz", preparation: "chá; mel; garrafada com outras plantas" }], season: "inverno", citations: 1 },
  { id: "ce-maracuja", name: "Maracujá", scientificName: "Passiflora alata Curtis", uses: [{ for: "insônia; pressão alta", part: "fruta", preparation: "suco" }], propagation: "semente", contraindication: "para quem tem pressão baixa", place: "quintal", citations: 2 },
  { id: "ce-marmeleiro", name: "Marmeleiro", scientificName: "Croton sp.", uses: [{ for: "inchaço", part: "casca", preparation: "chá" }], citations: 1 },
  {
    id: "ce-mastruz", name: "Mastruz", scientificName: "Dysphania ambrosioides (L.) Mosyakin & Clemants", caution: true,
    uses: [
      { for: "gastrite; gripe", part: "folha", preparation: "chá" },
      { for: "fratura; quebradura (dores no corpo)", part: "folha", preparation: "“imprasto” (macera e põe em cima); o sumo; 1 litro de mastruz com leite; 10 folhas batidas em 250 ml de leite; compressas no local da pancada" },
      { for: "expectorante", part: "folha", preparation: "vitamina com leite (folhas lavadas, batidas com leite, todo dia)" },
      { for: "cicatrizante; anti-inflamatório", part: "folha", preparation: "suco; suco com leite" },
    ],
    season: "qualquer época, desde que aguada", propagation: "semente; muda nova", place: "quintal", citations: 13,
  },
  { id: "ce-melao-caetano", name: "Melão caetano", uses: [{ for: "hemorroida; impinge; ferimento", part: "folha" }], season: "inverno" },
  { id: "ce-milho", name: "Milho", bookPages: [26], uses: [{ for: "dor nas urinas (infecção urinária)", part: "cabelo de milho", preparation: "chá: cabelo de milho na água com cebola branca" }], season: "inverno", propagation: "semente", place: "cercado", citations: 1 },
  { id: "ce-mororo", name: "Mororó", scientificName: "Bauhinia cheilantha", uses: [{ for: "diabetes", part: "folha" }], season: "qualquer época" },
  { id: "ce-mucuna", name: "Mucunã", uses: [] },
  { id: "ce-mufumbo", name: "Mufumbo", uses: [{ for: "diarreia", part: "entrecasca", preparation: "emplastro (faz o chá junto com a goma)" }], season: "qualquer época", propagation: "semente" },
  {
    id: "ce-mussambe", name: "Mussambê",
    uses: [
      { for: "verme", part: "raiz", preparation: "chá" },
      { for: "gripe", part: "flor", preparation: "mel" },
    ],
    propagation: "semente", citations: 1,
  },
  { id: "ce-noni", name: "Noni", scientificName: "Morinda citrifolia L.", caution: true, uses: [{ for: "inflamação geral; câncer; inflamação", part: "fruta", preparation: "bater 3 frutas maduras em 1 litro de vinho e tomar o suco 3 vezes ao dia" }], season: "qualquer época", propagation: "semente", contraindication: "não tomar por muito tempo; gestantes; problemas renais", place: "quintal do vizinho", citations: 3 },
  {
    id: "ce-papaconha", name: "Papaconha",
    uses: [
      { for: "infecção; má digestão", part: "raiz", preparation: "chá abafado" },
      { for: "gripe; verme; rouquidão", part: "raiz", preparation: "chá (pilar 4 raízes, conforme o tamanho, e cozinhar); deixar curar para fazer um mel" },
    ],
    season: "agosto (depois do inverno)", propagation: "semente", place: "mata; lote", citations: 6,
  },
  { id: "ce-pata-de-vaca", name: "Pata de vaca", uses: [{ for: "diabetes; colesterol", part: "folha" }], citations: 1 },
  { id: "ce-pau-darco", name: "Pau d’arco", scientificName: "Handroanthus impetiginosus (Mart. ex DC.) Mattos", uses: [{ for: "dor de barriga", part: "casca", preparation: "chá" }], place: "mata", citations: 1 },
  { id: "ce-pega-pinto", name: "Pega-pinto", scientificName: "Boerhavia coccinea Mill.", uses: [{ part: "raiz", preparation: "chá; mel; garrafada com outras plantas" }], citations: 1 },
  { id: "ce-pimenta-malagueta", name: "Pimenta malagueta", scientificName: "Capsicum frutescens L.", uses: [] },
  { id: "ce-pinhao-branco", name: "Pinhão-branco", scientificName: "Jatropha mollissima (Pohl) Baill.", caution: true, uses: [{ for: "estancar sangramento e curar feridas", part: "folha", preparation: "pegar a folha e pingar o leite no local" }], season: "qualquer época", propagation: "muda", contraindication: "não pode ser ingerido", citations: 1 },
  { id: "ce-pinhao-roxo", name: "Pinhão-roxo", caution: true, uses: [{ for: "dor de cabeça", part: "folha", preparation: "amarrar a folha na testa" }], season: "qualquer época, desde que aguada", propagation: "semente", place: "quintal", citations: 1 },
  { id: "ce-quebra-pedra", name: "Quebra-pedra", uses: [{ for: "pedra nos rins e na vesícula biliar", part: "raiz", preparation: "chá abafado de duas raízes com folhas secas em 1 litro de água" }], season: "qualquer época; inverno", propagation: "reprodução espontânea", contraindication: "gestantes", place: "mata; capoeira", citations: 4 },
  {
    id: "ce-roma", name: "Romã", scientificName: "Punica granatum L.",
    uses: [
      { for: "garganta; rouquidão; inflamação; bronquite; antibiótico natural", part: "casca e semente", preparation: "garrafada; gargarejo com a casca de molho; chupar as sementes e a casca fresca; chá; lambedor; suco; água da casca de molho; mel" },
      { for: "inflamação ocular", part: "semente", preparation: "aplicar o líquido da semente no olho" },
      { for: "sapinho em criança", part: "casca", preparation: "água da casca" },
    ],
    season: "qualquer época; verão; inverno", propagation: "semente", place: "quintal", citations: 12,
  },
  { id: "ce-tamarindo", name: "Tamarindo", scientificName: "Tamarindus indica L.", uses: [{ for: "colesterol", part: "fruta", preparation: "suco sem açúcar" }], season: "verão; setembro e outubro", propagation: "semente", citations: 2 },
  { id: "ce-umburana", name: "Umburana de cheiro", otherNames: "cumaru", scientificName: "Amburana cearensis (Allemão) A. C. Sm.", uses: [{ for: "dor de dente" }] },
  {
    id: "ce-urucum", name: "Urucum", scientificName: "Bixa orellana L.", bookPages: [7],
    uses: [
      { for: "gripe", part: "semente; casca da fruta (caixa)", preparation: "mel" },
      { for: "cansaço", part: "semente; casca da fruta (caixa)", preparation: "mel" },
      { for: "bronquite", part: "semente", preparation: "lambedor" },
    ],
    season: "verão; inverno", propagation: "semente", place: "quintal", citations: 6,
  },
  { id: "ce-vassourinha", name: "Vassourinha", scientificName: "Scoparia dulcis L.", uses: [{ for: "“para tudo”; mancha no corpo (pano branco, impingem, manchas de sol); verme; urina", part: "raiz", preparation: "chá; mel; garrafada" }], citations: 1 },
];
