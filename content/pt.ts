import type { Dictionary } from "./types";

export const pt: Dictionary = {
  meta: {
    title: "Reparação Integral Comunitária",
    description:
      "Uma comunidade do sertão cearense e uma organização da Amazônia equatoriana aprendem uma com a outra a curar a terra, a saúde e o tecido social.",
  },
  ui: { languageLabel: "Idioma", themeToggle: "Alternar entre tema claro e escuro" },
  nav: {
    label: "Seções da página",
    menu: "Menu",
    items: [{ id: "repair", label: "O que é" }, { id: "method", label: "Método" }, { id: "huipala", label: "Huipala" }, { id: "territory", label: "Território" }, { id: "voices", label: "Vozes" }, { id: "field-mission", label: "Missão" }, { id: "fruits", label: "Frutos" }, { id: "archive", label: "Acervo" }, { id: "credits", label: "Parcerias" }, { id: "references", label: "Referências" }],
  },
  hero: {
    kicker: "pesquisa participativa de base comunitária · Ceará ⇄ Equador",
    titleHtml:
      "Bases metodológicas para reparação integral comunitária a partir das <em>Ecologias Feministas de Saberes</em>: um diálogo de experiências do Sul Global",
    lede: "Uma comunidade do sertão cearense atingida por um perímetro irrigado e uma organização da Amazônia equatoriana que há quase duas décadas repara territórios contaminados pelo petróleo aprendem uma com a outra a curar a terra, a saúde e o tecido social.",
    routeFromHtml: "<b>Lagoa dos Cavalos</b>, Russas (CE)",
    routeToHtml: "<b>Clínica Ambiental</b>, Sucumbíos · Napo · Orellana (EC)",
    cta: {
      article: "Ler o artigo (Mercator, 2026)",
      clinic: "Conhecer a Clínica Ambiental",
      plants: "Ver o acervo de plantas",
    },
    facts: [
      { value: "3", label: "etapas do método: abrir os olhos, atua, alegra-te" },
      { value: "782", label: "famílias de 10 comunidades atingidas pela 2ª etapa do PITR" },
      { value: "2008", label: "ano de fundação da Clínica Ambiental e da Comissão da Resistência" },
      { value: "117", label: "transcrições da missão de campo no Equador (2024–2025)" },
    ],
  },
  repair: {
    label: "o que é",
    title: "Reparar é mais que indenizar",
    introHtml:
      "No direito internacional dos direitos humanos, a reparação tem cinco elementos (Beristain, 2010). Em conflitos ambientais esses elementos raramente se cumprem, porque não há normas internacionais consolidadas. O projeto amplia a ideia: a reparação depende de <strong>como se sentem reparadas as pessoas, as famílias e as comunidades</strong>, a partir da cultura de quem viveu a violação (Maldonado, 2018).",
    elements: [
      { name: "Restituição", description: "devolver direitos, moradia, bens e terra; superar injustiças" },
      { name: "Indenização", description: "compensação monetária por danos materiais" },
      { name: "Reabilitação", description: "atenção psicossocial, saúde, educação e biorremediação ambiental" },
      { name: "Satisfação", description: "medidas de dignificação" },
      { name: "Não repetição", description: "mudanças legais que protejam os direitos humanos e da natureza" },
    ],
    closingHtml:
      "A saúde aparece aqui como fenômeno social, intercultural e multidimensional. Para a Clínica Ambiental, <em>“saúde é dignidade, e a saúde começa no solo: quando a esperança está na terra, é preciso recuperá-la para que volte a brotar”</em>.",
  },
  method: {
    label: "o método",
    title: "Três etapas, de lá para cá",
    intro: "A Clínica Ambiental trabalha em três etapas. O Coletivo Bem Viver adaptou cada uma ao semiárido cearense.",
    ecuadorLabel: "no Equador",
    cearaLabel: "no Ceará",
    stages: [
      {
        step: "Etapa 1",
        name: "Abrir os olhos",
        originalName: "¡Abre los ojos!",
        ecuador: "Investigação-Ação Participativa feita com as pessoas atingidas para entender os problemas.",
        ceara:
          "Saúde, extremos climáticos e tecido social. A Associação Porfírio Nogueira da Costa escolheu o tema saúde-doença; as mulheres trouxeram as plantas medicinais. Nasce o grupo que, em 2017, vira o Coletivo Bem Viver.",
      },
      {
        step: "Etapa 2",
        name: "Atua",
        originalName: "¡Actúa!",
        ecuador: "Intervenção socioambiental: a população atingida age para mudar sua situação, com agroecologia e permacultura.",
        ceara:
          "Agroecologia e Bem Viver. Práticas integrativas de saúde, estudo etnobotânico e aplicação da Proposta Huipala. Pequenos projetos aprovados em editais.",
      },
      {
        step: "Etapa 3",
        name: "Alegra-te",
        originalName: "¡Alégrate!",
        ecuador: "A alegria como pilar da transformação: intercâmbios, feiras agroecológicas, cultura e audiovisual.",
        ceara:
          "Resistência, solidariedade e esperança. Desde 2021, o Espaço Bem Viver produz ervas medicinais, hortaliças, frutas e húmus, e recebe oficinas e intercâmbios.",
      },
    ],
    crossLabel: "atravessando as três etapas:",
    crossItems: ["respeito ao tempo comunitário", "compromisso ético e político", "criatividade e experiência estética"],
  },
  huipala: {
    label: "a ferramenta",
    title: "Proposta Huipala",
    introHtml:
      'O Sistema de Reparação Integral Comunitária Alterativa (RICA), chamado Proposta Huipala, parte de situações em que se tirou das pessoas a palavra e o poder de decidir, na vida pessoal, familiar e comunitária. Desde 2013 funciona como Sistema Participativo de Garantia: a Clínica avalia em que nível estão as propriedades e emite a <a href="https://www.clinicambiental.org/certificacion-huipala/" target="_blank" rel="noopener">Certificação Huipala</a>.',
    levelsIntro: "São sete níveis de trabalho, da realidade atual à utopia desejada, cada um nas esferas individual, familiar e comunitária:",
    levelsAria: "Os sete níveis da Proposta Huipala",
    levels: ["Disfrutar", "Aprovechar", "Enriquecer", "Reducir el consumo", "Descontaminar", "No malgastar", "No contaminar"],
    levelsNote:
      "Níveis na ordem em que o site da Clínica os lista. As cores remetem à wiphala, que dá nome à proposta; o site não indica a correspondência exata entre nível e cor.",
    matrixTitle: "A Matriz de Reparação do Coletivo Bem Viver",
    matrixIntro:
      "No Ceará, as dimensões do método equatoriano viraram um fluxograma que liga as escalas local e global, individual e comunitária, popular e científica:",
    dimensions: ["conhecimentos", "habilidades", "atitudes", "produção", "comercialização", "energias", "alegria", "organização"],
    horizonsHtml:
      "No círculo externo ficam os horizontes de <strong>cuidado, esperança, solidariedade e desejabilidade</strong>. O processo emancipador transforma:",
    transformations: [
      { title: "exposição → esperança", description: "superar a exposição a contaminantes, doenças e medo" },
      { title: "espoliação → solidariedade", description: "vencer a perda das condições e dos modos de vida" },
      { title: "imposição → utopia", description: "romper com modelos de desenvolvimento impostos" },
    ],
  },
  territory: {
    label: "o território",
    title: "Lagoa dos Cavalos, Russas",
    intro:
      "O Perímetro Irrigado Tabuleiro de Russas (PITR), obra do Dnocs que entrou no PAC em 2007, cobre Russas, Limoeiro do Norte e Morada Nova, com 14.365 hectares de área agrícola útil. A primeira etapa fragmentou 22 comunidades rurais por migração forçada e contaminação por agrotóxicos. A segunda atingiu modos de vida baseados em agroflorestas, apicultura, ovinocultura e agricultura familiar, com perda de mata nativa, de áreas coletivas e de tecnologias de convivência com o semiárido.",
    timeline: [
      { year: "1992", event: "Começa a 1ª etapa do PITR (até 2004). 22 comunidades fragmentadas." },
      {
        year: "2007",
        key: true,
        event:
          "Decreto de utilidade pública para desapropriação, em 4 de abril. 782 famílias de Escondida, Bananeiras, Sítio Junco, Lagoa dos Cavalos, Córrego Salgado, Barbatão, Sussuarana, Peixe, Cipó e Santa Terezinha.",
      },
      { year: "2008", event: "Forma-se a Comissão da Resistência. No Equador, nasce a Clínica Ambiental." },
      { year: "2009", event: "Audiência pública em agosto. A Comissão elabora coletivamente uma proposta territorial alternativa." },
      {
        year: "2011",
        key: true,
        event:
          "Termo de Ajustamento de Conduta assinado com MPF e Dnocs em 18 de agosto. A análise de 2011–2018 encontrou ameaças e violações de direitos fundamentais.",
        source: "Braga & Meireles, Conexões, 2020",
      },
      {
        year: "2017",
        key: true,
        event: "O grupo de pesquisa vira o Coletivo de Pesquisadoras e Pesquisadores Populares em Saúde e Agroecologia Bem Viver.",
      },
      { year: "2019", event: "Projeto aprovado no Comitê de Ética da UFC (parecer nº 3.507.932/2019)." },
      { year: "2020", event: "Tese “Bem viver, saúde e reparação: tecendo diálogos urgentes”, defendida também diante de uma banca popular." },
      { year: "2021", key: true, event: "Inauguração do Espaço Bem Viver, área coletiva de produção agroecológica e formação." },
      { year: "2024–25", event: "Missão de campo na Amazônia equatoriana com associados e associadas da Clínica Ambiental." },
      { year: "2026", key: true, event: "Artigo publicado na revista Mercator (v. 25, e25009), em 10 de maio." },
    ],
    closing: "Hoje, as comunidades Cipó, Lagoa dos Cavalos, Peixe e Santa Terezinha seguem lutando por acesso à terra para a agricultura familiar.",
  },
  voices: {
    label: "ecologias feministas de saberes",
    title: "Quem sustenta a luta",
    intro:
      "O Coletivo Bem Viver é formado principalmente por mulheres: mães, agricultoras, professoras, estudantes e lideranças. Foram elas que propuseram como tema de pesquisa os saberes sobre plantas medicinais, a mesma medicina popular que as mulheres da comunidade praticavam antes delas. A pesquisa trata essas mulheres como pesquisadoras.",
    quotes: [
      {
        text: "“Desde 2007 que a luta não parou. A gente que era articuladora dessas reuniões, ficamos à frente para convocar as famílias […]. Um emaranhado de coisas que as mulheres se envolveram e continuam a se envolver.”",
        author: "Anna Keyle, agricultora e pedagoga, Coletivo Bem Viver",
      },
      {
        text: "“Como no passado as mulheres que desenvolviam essa medicina, o nosso coletivo também são só mulheres. […] É uma característica feminina a luta e ir atrás do que é nosso por direito.”",
        author: "Edivânia, agricultora e professora de matemática, Coletivo Bem Viver",
      },
      {
        text: "“Nós não somos objeto de estudo. Nós somos sujeitos, protagonistas da própria história! Das pesquisas, essa é a que tem deixado raiz profunda de organização.”",
        author: "Jucélio Silva, estudante de História, Coletivo Bem Viver",
      },
    ],
  },
  bigQuote: {
    text: "“Companheiras brasileiras, o recado é recuperar a esperança recuperando o solo. Precisamos que vocês sejam lutadoras da esperança. O trabalho de cuidado sempre foi deixado às mulheres, e isso serviu para subordiná-las; levem-no como bandeira, porque é a maior força que vocês podem dar ao mundo. Só vocês podem nos ensinar a cuidar. Reparem a nós também.”",
    author: "Adolfo Maldonado, médico e cofundador da Clínica Ambiental, em entrevista na Amazônia equatoriana, 23/02/2025 (tradução livre do espanhol)",
  },
  fieldMission: {
    label: "diálogo sul–sul",
    title: "A missão de campo no Equador",
    intro:
      "Entre novembro de 2024 e fevereiro de 2025, a equipe visitou fincas permaculturais, comunidades indígenas Shuar e Siekoya, consultas de saúde e espaços acadêmicos. Nas entrevistas, associadas e associados da Clínica contam suas histórias e deixam recados para quem luta no Brasil.",
    columns: { date: "data", place: "lugar", record: "registro" },
    rows: [
      { date: "nov/2024", place: "Chocó Andino", record: "Entrevistas sobre regeneração da terra e ativismo ambiental" },
      { date: "2024", place: "Comunidade Shuar Sharup (1ª visita)", record: "Consulta sobre plantas medicinais; gravações para documentário" },
      { date: "03/12/2024", place: "Cascales", record: "Entrevistas com associados; registro de batucada" },
      { date: "07–08/12/2024", place: "Shushufindi", record: "Entrevistas e consultas em finca permacultural" },
      { date: "16/12/2024", place: "Pacayacu", record: "Entrevistas e consultas com família permacultora" },
      { date: "21/12/2024", place: "Comunidade Siekoya Remolino", record: "Consultas e conversas sobre o espírito da floresta" },
      { date: "14–16/01/2025", place: "Comunidade Shuar Sharup (2ª visita)", record: "Entrevistas e caminhadas pelo território" },
      { date: "26/01/2025", place: "Sector Madero", record: "Visitas de saúde comunitária" },
      { date: "31/01/2025", place: "Lago Agrio (Nueva Loja)", record: "Entrevista com associada da Clínica" },
      { date: "fev/2025", place: "Shushufindi e Lago Agrio", record: "Retorno às fincas; entrevistas sobre micologia e restauração" },
      { date: "23/02/2025", place: "Amazônia equatoriana", record: "Entrevista com Adolfo Maldonado; visita a laboratório em finca" },
      { date: "2025", place: "Quito · Universidad Andina Simón Bolívar", record: "Aula e evento sobre derrames de petróleo, mecheros e litígio ambiental" },
    ],
    source: "Fonte: organização do acervo de transcrições do projeto. Datas de pasta, sujeitas a revisão.",
    galleryTitle: "A missão em imagens",
    galleryIntro: "Fotos do acervo do projeto, feitas durante a missão de campo no Equador.",
  },
  fruits: {
    label: "o que já brotou",
    title: "Frutos do projeto",
    items: [
      {
        title: "Cartilha de plantas medicinais",
        description: "“Plantas medicinais, conhecimentos populares em saúde e luta por terra: uma cartilha em defesa da vida”, escrita com as mulheres do Coletivo.", links: [{ href: "https://drive.google.com/file/d/1Jtd4nYeeyt1cz69j-UivwZdQQLvay7ss/view?usp=sharing", label: "Ler a cartilha" }]
      },
      { title: "Espaço Bem Viver", description: "Área coletiva desde 2021: ervas medicinais, hortaliças tradicionais, frutíferas, húmus, oficinas e intercâmbios.", links: [{ href: "https://www.instagram.com/coletivo.bemviver/", label: "Coletivo Bem Viver no Instagram" }] },
      { title: "Dois minidocumentários", description: "Em parceria com o Coletivo Audiovisual Caroá e a Escola de Gastronomia Social Ivens Dias Branco.", links: [{ href: "https://www.youtube.com/watch?v=iVvl3MRPU7s", label: "Assistir: Lagoa dos Cavalos e o Bem Viver" }] },
      { title: "Tese com banca popular", description: "A comunidade participou da avaliação do conhecimento produzido sobre ela e com ela." },
      { title: "Dois artigos científicos", description: "Mercator (2026), sobre o método de reparação; Conexões (2020), sobre o TAC e o conflito.", links: [{ href: "https://doi.org/10.36517/rm2026.e25009", label: "Ler o artigo na Mercator (2026)" }, { href: "https://doi.org/10.21439/conexoes.v14i2.1876", label: "Ler o artigo na Conexões (2020)" }] },
      { title: "Acervo Equador", description: "Áudios, fotos e 117 transcrições de entrevistas com quem faz a Clínica Ambiental." },
    ],
  },
  archive: {
    label: "acervo de plantas",
    title: "As plantas que guardam essa história",
    intro: "São 135 espécies do livro Acervo Botânico e os nomes, significados, usos e histórias contados nos territórios. As fotos mostram as espécies, não as comunidades.",
    cta: "Explorar o acervo",
  },
  credits: {
    label: "quem faz",
    title: "Parcerias e créditos",
    groups: [
      {
        title: "No Ceará",
        description:
          "Coletivo de Pesquisadoras e Pesquisadores Populares em Saúde e Agroecologia Bem Viver · Associação Comunitária Porfírio Nogueira da Costa · Comunidade Lagoa dos Cavalos · Coletivo Audiovisual Caroá",
      },
      { title: "No Equador", description: "Clínica Ambiental, coordenada por Adolfo Maldonado · associadas e associados · comunidades indígenas Shuar e Siekoya" },
      {
        title: "Universidade",
        description:
          "Lara de Queiroz Viana Braga (doutora em Meio Ambiente e Desenvolvimento) e Antônio Jeovah de Andrade Meireles (professor, doutor em Geografia Física), da UFC · PPGGeo/UFC",
      },
      { title: "Apoio", description: "FUNCAP, Edital Pós-Doutorado 09/2023 · Capes (PPGGeo/UFC, conceito 7)" },
    ],
    contactsTitle: "Contatos públicos",
    correspondingAuthor: "Autora correspondente do artigo:",
    clinicLocation: "Quito e Nueva Loja, Equador",
  },
  references: {
    label: "para aprofundar",
    title: "Referências e links",
    itemsHtml: [
      'BRAGA, L. Q. V.; MEIRELES, A. J. A. Diálogos para reparação socioambiental integradora em uma pesquisa participativa de base comunitária. <em>Mercator</em>, v. 25, e25009, 2026. <a href="https://periodicos.ufc.br/mercator/article/view/100570" target="_blank" rel="noopener">periodicos.ufc.br/mercator/article/view/100570</a>',
      'BRAGA, L. Q. V.; MEIRELES, A. J. A. Os sentidos da resolução negociada de um conflito socioambiental no sertão do Ceará. <em>Conexões – Ciência e Tecnologia</em>, v. 14, n. 2, p. 86–97, 2020. <a href="https://doi.org/10.21439/conexoes.v14i2.1876" target="_blank" rel="noopener">doi.org/10.21439/conexoes.v14i2.1876</a>',
      'CLÍNICA AMBIENTAL. Soluciones socioambientales. <a href="https://www.clinicambiental.org/" target="_blank" rel="noopener">clinicambiental.org</a> · <a href="https://www.clinicambiental.org/certificacion-huipala/" target="_blank" rel="noopener">Certificação Huipala</a> · <a href="https://www.clinicambiental.org/wp-content/uploads/docs/publicaciones/alerta7huipala.pdf" target="_blank" rel="noopener">Alerta Naranja nº 7 (Proposta Huipala, 2013)</a>',
      "MALDONADO, A. <em>Una propuesta de reparación socio-ecosistémica a los impactos del metabolismo de la actividad petrolera para la Amazonía ecuatoriana</em>. Tese (Doutorado em Saúde Coletiva, Ambiente e Sociedade), Universidad Andina Simón Bolívar, Quito, 2018.",
      "BERISTAIN, C. M. (org.). <em>El derecho a la reparación en los conflictos socioambientales</em>. Bilbao: Hegoa, 2010.",
      "PORTO, M. F.; FINAMORE, R.; ROCHA, D. <em>Saúde como dignidade: riscos, saúde e mobilizações por justiça ambiental</em>. Rio de Janeiro: Fiocruz, 2018.",
    ],
  },
  footer: {
    paragraphs: [
      "Pesquisa aprovada pelo Comitê de Ética em Pesquisa da UFC (parecer nº 3.507.932/2019). O acervo bruto de áudios, fotos e transcrições fica sob guarda do projeto e das comunidades; o que se publica aqui é o que já é público ou teve a divulgação autorizada.",
      "Textos do artigo sob licença CC-BY 3.0. Atualizado em novembro de 2026.",
    ],
  },
};
