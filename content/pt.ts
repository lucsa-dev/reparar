import type { Dictionary } from "./types";

export const pt: Dictionary = {
  meta: {
    title: "Reparação Integral Comunitária",
    description:
      "Uma comunidade do sertão cearense e uma organização da Amazônia equatoriana aprendem uma com a outra a curar a terra, a saúde e o tecido social.",
  },
  ui: { languageLabel: "Idioma", themeToggle: "Alternar entre tema claro e escuro" },
  nav: {
    label: "Seções do site",
    menu: "Menu",
    mandala: "Mandala",
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
      { value: "139", label: "famílias de 10 comunidades atingidas pela 2ª etapa do PITR" },
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
          "Saúde, solo e tecido social. Nas reuniões da Associação Porfírio Nogueira da Costa, a comunidade escolheu pesquisar os saberes populares em saúde com plantas medicinais. Vieram o mapeamento participativo dos problemas de saúde, uma roda de conversa sobre fitoterapia popular e indústria farmacêutica e o inventário das plantas nativas e cultivadas. Em junho de 2017, 12 pessoas, a maioria mulheres, formam o grupo que vira o Coletivo Bem Viver.",
      },
      {
        step: "Etapa 2",
        name: "Atua",
        originalName: "¡Actúa!",
        ecuador: "Intervenção socioambiental: a população atingida age para mudar sua situação, com agroecologia e permacultura.",
        ceara:
          "Agroecologia e Bem Viver. Reuniões quinzenais do Coletivo, grupo de estudos em fitoterapia, coleta de 70 amostras de plantas para o Herbário Prisco Bezerra (UFC), crianças ilustrando a cartilha e aplicação da Proposta Huipala. Pequenos projetos aprovados em editais da Cáritas Diocesana e da Fundação Luterana de Diaconia (2018).",
      },
      {
        step: "Etapa 3",
        name: "Alegra-te",
        originalName: "¡Alégrate!",
        ecuador: "A alegria como pilar da transformação: intercâmbios, feiras agroecológicas, cultura e audiovisual.",
        ceara:
          "Resistência, solidariedade e esperança. Intercâmbio com comunidades vizinhas (2017), feiras de troca de plantas medicinais e flores (2020), exposições de fotos, sessões de cinema, yoga e capoeira. Desde 2021, o Espaço Bem Viver produz ervas medicinais, hortaliças, frutas e húmus, e recebe oficinas e intercâmbios.",
      },
    ],
    crossLabel: "atravessando as três etapas:",
    crossItems: ["respeito ao tempo comunitário", "compromisso ético e político", "criatividade e experiência estética"],
  },
  huipala: {
    label: "a ferramenta",
    title: "Proposta Huipala",
    introHtml:
      "O Sistema de Reparação Integral Comunitária Alterativa (RICA), chamado Proposta Huipala, nasceu em 2013, quando a Clínica avaliou com as comunidades, cartão por cartão, seus cinco primeiros anos de trabalho. Parte de situações em que se tirou das pessoas a palavra e o poder de decidir, na vida pessoal, familiar e comunitária, e propõe um diálogo entre o saber acadêmico e o popular. Funciona como Sistema Participativo de Garantia: as propriedades são avaliadas por pares e recebem a <a href=\"https://www.clinicambiental.org/certificacion-huipala/\" target=\"_blank\" rel=\"noopener\">Certificação Huipala</a>.",
    levelsIntro: "A matriz é uma escada de cores. Parte do vermelho, a realidade de hoje, e sobe por sete níveis até o branco, o horizonte utópico que cada comunidade sonha:",
    levelsAria: "A escada de cores da Proposta Huipala, da realidade atual à utopia",
    levels: [
      { name: "Realidade atual", element: "terra", hint: "agrotóxicos, monocultivo, violência em casa, comunidade fragmentada" },
      { name: "No contaminar", element: "água", hint: "plano de formação, plano da finca, plantas medicinais, nenhuma violência familiar" },
      { name: "No malgastar", element: "fogo", hint: "nenhum agrotóxico, só adubo orgânico, compostagem, feiras de sementes" },
      { name: "Descontaminar", element: "ar", hint: "limpar os lugares afetados, flores para as abelhas, cambiamanos com vizinhos" },
      { name: "Reducir el consumo", element: "éter", hint: "finca integrada à casa, troca entre vizinhos, decisões por consenso familiar" },
      { name: "Enriquecer", element: "luz", hint: "soberania alimentar, tecnologias caseiras, gestão comunitária da água e do bosque" },
      { name: "Aprovechar", element: "espaço", hint: "soberania energética, o bosque como fonte de conhecimento, organizações mobilizadas" },
      { name: "Disfrutar", element: "utopia", hint: "faz-se arte com as mãos, partilham-se os sonhos, a celebração leva à união" },
    ],
    levelsNote:
      "Níveis, cores e práticas segundo a matriz do Alerta Naranja nº 7 (Clínica Ambiental, 2013). Ao pôr as cores da wiphala na matriz, a Clínica percebeu que elas coincidiam com os chakras, e associou cada nível a um elemento, da terra ao espaço.",
    spheresTitle: "Três esferas, três valores",
    spheresIntro: "Cada nível é lido em três colunas, porque o modelo econômico que só prioriza o dinheiro fragmentou as três:",
    spheres: [
      { title: "Pessoal", items: "conhecimentos · habilidades · atitudes", value: "coerência", shifts: ["do desconhecimento à valorização dos saberes próprios", "da sensação de incapacidade a fazer arte", "do egoísmo à solidariedade"] },
      { title: "Familiar", items: "produção · comercialização · energias", value: "ética", shifts: ["do monocultivo à finca integral", "do abandono na venda à autogestão", "do desgaste a energias alterativas, que alteram a vida para melhor"] },
      { title: "Comunitária", items: "alegria · organização", value: "estética", shifts: ["do medo à alegria", "da fragmentação a uma organização capaz de enfrentar seus problemas"] },
    ],
    processTitle: "Como se avalia",
    processHtml:
      "A cada seis meses, cada camponês ou camponesa visita a finca de outro com a <em>Guía de Seguimiento y Control</em>, um questionário de sim ou não para cada casa da matriz: há violência intrafamiliar? As crianças conhecem mais de dez plantas do bosque? As festas da comunidade celebram a vida? O avaliador faz a média dos níveis alcançados em cada coluna e concede a cor correspondente. Os produtos da finca saem com esse selo, que produtores e compradores enxergam como um símbolo para seguir se superando. Com o tempo, a Clínica criou também certificados para quem faz o curso de permacultura, para comunidades que cuidam da natureza e para selvas protegidas.",
    adaptHtml:
      "A Clínica avisa que a matriz não é universal: foi feita para os problemas de um trecho da Amazônia equatoriana. A grade pode ser reproduzida em qualquer lugar, mas o conteúdo de cada casa deve ser preenchido com a própria gente, começando por recolher os sonhos como ponto de chegada. Foi o que o Coletivo Bem Viver fez no Ceará.",
    sourceHtml:
      "Fonte: <a href=\"https://www.clinicambiental.org/wp-content/uploads/docs/publicaciones/alerta7huipala.pdf\" target=\"_blank\" rel=\"noopener\">Alerta Naranja nº 7, «La propuesta Huipala» (Clínica Ambiental, 2013)</a> e entrevistas da missão de campo.",
    ceara: {
      title: "A Huipala no sertão: Lagoa dos Cavalos",
      intro: "Entre 2018 e 2019, o Coletivo de Pesquisa Bem Viver remodelou a matriz equatoriana para Lagoa dos Cavalos, em Russas, numa pesquisa participante da tese de doutorado de Lara Braga. Antes de medir qualquer coisa, a proposta abriu espaço para olhar os sonhos, um direito que parecia ter sido roubado com a desapropriação.",
      stepsIntro: "Foram seis oficinas de três horas, com murais de cartões:",
      steps: ["diagnóstico dos horizontes da realidade e da utopia, com questionário", "avaliação das categorias da matriz em grupos", "roda de conversa sobre o que é bem viver"],
      gradientIntro: "No lugar das cores, a comunidade classificou cada prática numa escada com palavras do sertão:",
      gradient: ["Realidade", "1. Difícil!", "2. Devagar", "3. Mais ou menos", "4. Bom", "5. Muito bom!", "6. Maravilhoso!", "Utopia"],
      utopiaIntro: "E deu nome à utopia de cada dimensão da matriz:",
      utopias: [
        { dimension: "conhecimentos", utopia: "saberes populares em saúde" },
        { dimension: "habilidades", utopia: "alimentação, agricultura e arte" },
        { dimension: "atitudes", utopia: "hábitos saudáveis" },
        { dimension: "produção", utopia: "diversidade e coletividade" },
        { dimension: "comercialização", utopia: "solidariedade" },
        { dimension: "energias", utopia: "equilíbrio" },
        { dimension: "alegria", utopia: "encontros e natureza" },
        { dimension: "organização", utopia: "autonomia" },
      ],
      closingHtml: "O ponto de partida foi um indicador escolhido pela própria comunidade: as práticas populares de saúde com plantas medicinais, rumo à valorização desses saberes. Seguiram-se os três princípios dos Indicadores para o Sumak Kawsay de Adolfo Maldonado: <strong>soberania</strong> (a comunidade decide o que medir), <strong>diversidade</strong> e <strong>simplicidade</strong> (fácil de medir pela própria gente). Na leitura da tese, a reparação foi também a criação do próprio Coletivo, que ganhou autonomia para seguir com suas práticas de saúde, sua alegria e seus sonhos.",
      quote: "Assuntos que nunca paramos para pensar, perceber, das coisas que estão guardadas no baú. Parece que agora acordamos para vida.",
      quoteTranslation: "",
      cite: "Osarina Lima, agricultora e empreendedora, Lagoa dos Cavalos (2017)",
      sourceHtml: "Fonte: BRAGA, L. Q. V. <em>Bem viver, saúde e reparação: tecendo diálogos urgentes</em>. Tese (Doutorado em Desenvolvimento e Meio Ambiente), UFC, 2020, cap. 3.",
    },
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
      "Lagoa dos Cavalos fica no distrito de Peixe, em Russas, a 145 km de Fortaleza, no sertão do Baixo Jaguaribe. O Perímetro Irrigado Tabuleiro de Russas (PITR), obra do Dnocs que entrou no PAC em 2007, cobre Russas, Limoeiro do Norte e Morada Nova, com 14.365 hectares de área agrícola útil. A primeira etapa (1992–2004) destruiu 22 comunidades rurais e atingiu 782 famílias, com migração forçada e contaminação por agrotóxicos. A segunda atingiu modos de vida baseados em agroflorestas, apicultura, ovinocultura e agricultura familiar, com perda de mata nativa, de áreas coletivas e de tecnologias de convivência com o semiárido.",
    timeline: [
      { year: "1954", event: "Seu Antônio, chegado ao Córrego Salgado em 1934, compra as terras onde hoje fica Lagoa dos Cavalos. O nome, contam os antigos, vem dos vaqueiros que pegaram ali uns cavalos fugidos.", source: "Braga, 2010" },
      { year: "1986", key: true, event: "Projeto São Vicente: 21 famílias cultivam juntas um campo comunitário de 20 hectares e chegam a colher 6.000 quilos de grãos. Começa a organização comunitária, “debaixo dos cajueiros”.", source: "Braga, 2010" },
      { year: "1988–89", event: "Casa de farinha, casa de sementes e cursos de tecnologias alternativas. Em 1989 começa a apicultura." },
      { year: "1992", event: "Começa a 1ª etapa do PITR (até 2004): 22 comunidades destruídas e 782 famílias atingidas em 10.765 hectares." },
      { year: "1995", event: "Chega a energia elétrica e nasce a Associação Comunitária Porfírio Nogueira da Costa." },
      { year: "2001", event: "As cisternas de placa, construídas com o trabalho das famílias, garantem água de beber a todas as casas." },
      { year: "2002–03", event: "Barragem subterrânea, com a Cáritas, e as primeiras agroflorestas e sistemas agrossilvopastoris, com o Esplar, no Córrego Salgado." },
      { year: "2007", key: true, event: "Decreto de utilidade pública para desapropriação, em 4 de abril. 139 famílias de Escondida, Bananeiras, Barbatão, Cipó, Córrego Salgado, Junco, Lagoa dos Cavalos, Peixe, Santa Terezinha e Sussuarana." },
      { year: "2008", event: "Forma-se a Comissão da Resistência. No Equador, nasce a Clínica Ambiental." },
      { year: "2009", event: "Audiência pública em agosto. A Comissão elabora coletivamente uma proposta territorial alternativa." },
      { year: "2010", event: "Em janeiro, a Comissão entrega ao Dnocs a Proposta de Reassentamento das Comunidades, com 2.096 hectares. Lara Braga defende a dissertação “Agronegócio cercando agroecologia”." },
      { year: "2011", key: true, event: "Termo de Ajustamento de Conduta assinado com MPF e Dnocs em 18 de agosto. A análise de 2011–2018 encontrou ameaças e violações de direitos fundamentais.", source: "Braga & Meireles, Conexões, 2020" },
      { year: "2013", event: "Em 25 de setembro, agricultoras e agricultores ocupam o canteiro de obras do Dnocs para cobrar o cumprimento do TAC." },
      { year: "2014", event: "Entrega das casas dos reassentamentos de Lagoa dos Cavalos e Peixe (novembro) e do Cipó (dezembro), sem energia ligada e sem título." },
      { year: "2015", event: "O Ministério Público Federal leva a execução do TAC à Justiça." },
      { year: "2016", event: "A água tratada chega ao reassentamento de Lagoa dos Cavalos por iniciativa da própria comunidade." },
      { year: "2017", key: true, event: "O grupo de pesquisa vira o Coletivo de Pesquisadoras e Pesquisadores Populares em Saúde e Agroecologia Bem Viver." },
      { year: "2018", event: "Inventário de 80 plantas medicinais. Em outubro, as associações assinam o plano de exploração agrícola e o contrato de concessão de 73,10 hectares." },
      { year: "2019", event: "Projeto aprovado no Comitê de Ética da UFC (parecer nº 3.507.932/2019)." },
      { year: "2020", event: "Tese “Bem viver, saúde e reparação: tecendo diálogos urgentes”, defendida também diante de uma banca popular, e cartilha de plantas medicinais publicada." },
      { year: "2021", key: true, event: "Inauguração do Espaço Bem Viver, área coletiva de produção agroecológica e formação." },
      { year: "2024–25", event: "Missão de campo na Amazônia equatoriana com associados e associadas da Clínica Ambiental." },
      { year: "2026", key: true, event: "Artigo publicado na revista Mercator (v. 25, e25009), em 10 de maio." },
    ],
    closing: "Hoje, as comunidades Cipó, Lagoa dos Cavalos, Peixe e Santa Terezinha seguem lutando por acesso à terra para a agricultura familiar.",
    wayOfLife: {
      title: "Antes do perímetro: um modo de vida do sertão",
      intro: "Em 2009, a pesquisa de mestrado de Lara Braga registrou como viviam 79 famílias de Lagoa dos Cavalos, Junco, Barbatão e Córrego Salgado. Com pouca terra, elas tinham construído, em mais de vinte anos de organização, alternativas de convivência com o semiárido:",
      items: [
        { name: "roçado consorciado", description: "milho, feijão e mandioca entre cajueiros e carnaubeiras; a folha do cajueiro aduba o feijão, e a carnaúba plantada junto dá mais palha" },
        { name: "apicultura", description: "desde 1989, apiários nas matas preservadas e a casa do mel Floremel, no Córrego Salgado, sem agrotóxicos. Hoje, dela restam escombros" },
        { name: "água", description: "cisternas de placa para beber e cozinhar, poços com dessalinizadores, uma barragem subterrânea e uma adutora planejada pelas próprias famílias" },
        { name: "agrofloresta", description: "sistema agrossilvopastoril e reflorestamento em áreas antes desmatadas" },
        { name: "sementes", description: "casa de sementes crioulas e trocas entre comunidades, recusando as transgênicas" },
        { name: "quintais", description: "dezenas de plantas que são comida e remédio: goiaba, romã, corama, malvarisco, boldo, capim-santo, aroeira, cumaru" },
        { name: "Serrote da Tapera", description: "o “cartão-postal” das comunidades, onde a missa anual reúne cerca de 2 mil pessoas" },
        { name: "saber da terra", description: "a lua orienta o plantio, e a escolha das melhores sementes passa de geração em geração" },
      ],
      quote: "“No meu ver, com a desapropriação, a gente vai perder muito dessas plantas aí. Aliás, já está perdendo. […] Principalmente o cajueiro e a carnaúba, que serão as mais prejudicadas.”",
      cite: "Lúcio, jovem apicultor e agricultor de Lagoa dos Cavalos, em oficina de 2009",
      source: "Fonte: BRAGA, L. Q. V. Agronegócio cercando agroecologia: modo de vida e conflito socioambiental em comunidades agrícolas de Tabuleiro de Russas, Ceará. Dissertação (Mestrado em Saúde Pública), UFC, 2010, cap. 4.",
    },
    tac: {
      title: "O TAC: o que foi prometido e o que aconteceu",
      intro: "Em 18 de agosto de 2011, o Ministério Público Federal, o Dnocs e a Comissão em Defesa das Famílias da 2ª Etapa assinaram um Termo de Ajustamento de Conduta. A tese leu os documentos do processo até 2018 e encontrou descumprimento em quase todas as cláusulas:",
      promiseLabel: "O TAC prometia",
      outcomeLabel: "Até 2018",
      rows: [
        { promise: "Preservar as comunidades do Cipó, de Lagoa dos Cavalos e do Peixe, base para o reassentamento das demais", outcome: "As três comunidades continuam de pé e ganharam reassentamentos ao redor: uma conquista da resistência." },
        { promise: "Entregar a nova casa antes de qualquer desocupação", outcome: "As casas foram entregues em 2014 sem energia ligada. Em 2017, um único medidor funcionava, e a fiação dos postes estava sendo roubada." },
        { promise: "Um ponto de água e luz em cada área de produção", outcome: "Em 2015, o Cipó comprava água a R$ 60–80 por 7 mil litros. Em Lagoa dos Cavalos, a água tratada só chegou em 2016, por iniciativa da comunidade." },
        { promise: "Cordão Verde: 10 metros de árvores escolhidas pelas comunidades, contra os agrotóxicos", outcome: "Plantaram só algumas carnaúbas, em parte do terreno, e elas morreram na seca." },
        { promise: "Ampliar a reserva legal ao redor das comunidades, para as abelhas", outcome: "O Dnocs alegou falta de terras (2015). O uso da reserva para a apicultura seguia em aberto em 2018." },
        { promise: "Concessão gratuita e coletiva de 3 a 4 hectares por família", outcome: "O contrato de 73,10 hectares só foi assinado em outubro de 2018, sem as mudanças pedidas pelas famílias para a agricultura de sequeiro." },
        { promise: "Lotes pequenos perto das comunidades, com seleção dos expropriados sem licitação", outcome: "O Dnocs não respondeu à proposta de critérios e justificou a demora com a falta de água." },
        { promise: "Títulos de propriedade das casas", outcome: "Em 2017, nenhum título tinha sido entregue." },
      ],
      quote: "“Estamos há mais de oito anos sem colocar uma semente no chão e temos que comer para sobreviver.”",
      cite: "Morador, em audiência pública do Ministério Público Federal, 2013",
      source: "Fonte: BRAGA, L. Q. V. Bem viver, saúde e reparação: tecendo diálogos urgentes. Tese (Doutorado em Desenvolvimento e Meio Ambiente), UFC, 2020, cap. 1, a partir do TAC, de atas de reunião do MPF (2015), da memória de reunião da DPU (2017) e do termo de audiência da Justiça Federal (2018).",
    },
  },
  voices: {
    label: "ecologias feministas de saberes",
    title: "Quem sustenta a luta",
    intro:
      "O Coletivo Bem Viver é formado principalmente por mulheres: mães, agricultoras, professoras, estudantes e lideranças. Foram elas que propuseram como tema de pesquisa os saberes sobre plantas medicinais, a mesma medicina popular que as mulheres da comunidade praticavam antes delas. Na luta contra a desapropriação, eram elas que convocavam as famílias, fundavam associações e enfrentavam as reuniões com o Dnocs. A pesquisa trata essas mulheres como pesquisadoras.",
    quotes: [
      {
        text: "“Desde 2007 que a luta não parou. A gente que era articuladora dessas reuniões, ficamos à frente para convocar as famílias […]. Um emaranhado de coisas que as mulheres se envolveram e continuam a se envolver.”",
        author: "Anna Keyle, agricultora e pedagoga, Coletivo Bem Viver",
      },
      {
        text: "“As mulheres de certa forma perderam o medo de falar, passaram a se expressar mais e a brigar mais por aquilo que estava errado. […] Se já éramos empoderadas, se já tínhamos um papel importante na comunidade, agora ele se ampliou.”",
        author: "Osarina Lima, agricultora e empreendedora, Lagoa dos Cavalos",
      },
      {
        text: "“A gente percebeu que praticamente não usava mais as plantas medicinais! […] A partir desse momento, a gente voltou realmente a fazer uso dessas plantas: as pessoas começaram a adquirir espécies, algumas a fazer trocas, já começaram a plantar de novo nos seus quintais.”",
        author: "Erivânia Ferreira, agricultora e mãe, Coletivo Bem Viver",
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
    rows: [
      { year: "2024", date: "nov", place: "Chocó Andino", record: "Entrevistas sobre regeneração da terra e ativismo ambiental" },
      { year: "2024", date: "nov", key: true, place: "Comunidade Shuar Sharup (1ª visita)", record: "Consulta sobre plantas medicinais; gravações para documentário" },
      { year: "2024", date: "3 dez", place: "Cascales", record: "Entrevistas com associados; registro de batucada" },
      { year: "2024", date: "7–8 dez", place: "Shushufindi", record: "Entrevistas e consultas em finca permacultural" },
      { year: "2024", date: "16 dez", place: "Pacayacu", record: "Entrevistas e consultas com família permacultora" },
      { year: "2024", date: "21 dez", place: "Comunidade Siekoya Remolino", record: "Consultas e conversas sobre o espírito da floresta" },
      { year: "2025", date: "14–16 jan", key: true, place: "Comunidade Shuar Sharup (2ª visita)", record: "Entrevistas e caminhadas pelo território" },
      { year: "2025", date: "26 jan", place: "Sector Madero", record: "Visitas de saúde comunitária" },
      { year: "2025", date: "31 jan", place: "Lago Agrio (Nueva Loja)", record: "Entrevista com associada da Clínica" },
      { year: "2025", date: "fev", place: "Shushufindi e Lago Agrio", record: "Retorno às fincas; entrevistas sobre micologia e restauração" },
      { year: "2025", date: "23 fev", key: true, place: "Amazônia equatoriana", record: "Entrevista com Adolfo Maldonado; visita a laboratório em finca" },
      { year: "2025", date: "2025", place: "Quito · Universidad Andina Simón Bolívar", record: "Aula e evento sobre derrames de petróleo, mecheros e litígio ambiental" },
    ],
    source: "Fonte: organização do acervo de transcrições do projeto. Datas de pasta, sujeitas a revisão. A data da primeira visita a Shuar Sharup está em revisão.",
    galleryTitle: "A missão em imagens",
    galleryIntro: "Fotos do acervo do projeto, feitas durante a missão de campo no Equador.",
  },
  fruits: {
    label: "o que já brotou",
    title: "Frutos do projeto",
    items: [
      {
        title: "Cartilha de plantas medicinais",
        description: "“Plantas medicinais, conhecimentos populares em saúde e luta por terra: uma cartilha em defesa da vida”, escrita com as mulheres do Coletivo, ilustrada por crianças da comunidade e publicada em 2020, com receitas de Lagoa dos Cavalos.", links: [{ href: "https://drive.google.com/file/d/1Jtd4nYeeyt1cz69j-UivwZdQQLvay7ss/view?usp=sharing", label: "Ler a cartilha" }]
      },
      { title: "Inventário de 80 plantas medicinais", description: "Feito em 2018 pelo Coletivo com 24 agricultoras e agricultores. 70 amostras foram ao Herbário Prisco Bezerra (UFC). Está no acervo de plantas deste site." },
      { title: "Espaço Bem Viver", description: "Área coletiva desde 2021: ervas medicinais, hortaliças tradicionais, frutíferas, húmus, oficinas e intercâmbios.", links: [{ href: "https://www.instagram.com/coletivo.bemviver/", label: "Coletivo Bem Viver no Instagram" }] },
      { title: "Dois minidocumentários", description: "Em parceria com o Coletivo Audiovisual Caroá e a Escola de Gastronomia Social Ivens Dias Branco.", links: [{ href: "https://www.youtube.com/watch?v=iVvl3MRPU7s", label: "Assistir: Lagoa dos Cavalos e o Bem Viver" }, { href: "https://www.youtube.com/watch?v=kDiJanz7bkE", label: "Assistir: PANC na Lagoa dos Cavalos" }] },
      { title: "Tese com banca popular", description: "A comunidade participou da avaliação do conhecimento produzido sobre ela e com ela." },
      { title: "Dissertação de mestrado (2010)", description: "“Agronegócio cercando agroecologia”, o primeiro estudo de Lara Braga em Lagoa dos Cavalos: modo de vida, apicultura e o conflito com o perímetro irrigado." },
      { title: "Dois artigos científicos", description: "Mercator (2026), sobre o método de reparação; Conexões (2020), sobre o TAC e o conflito.", links: [{ href: "https://doi.org/10.36517/rm2026.e25009", label: "Ler o artigo na Mercator (2026)" }, { href: "https://doi.org/10.21439/conexoes.v14i2.1876", label: "Ler o artigo na Conexões (2020)" }] },
      { title: "PANC na Lagoa dos Cavalos", description: "Pesquisa de Osarina Lima, nascida em Russas, sobre as plantas alimentícias não convencionais da comunidade, com horta agroecológica, receitas e um calendário de cultivo para agricultoras e agricultores.", links: [{ href: "https://gastronomiasocial.org.br/laboratorio-de-criac/osarina-lima/", label: "Conhecer a pesquisa" }] },
      { title: "Acervo Equador", description: "Áudios, fotos e 117 transcrições de entrevistas com quem faz a Clínica Ambiental." },
    ],
  },
  archive: {
    label: "acervo de plantas",
    title: "As plantas que guardam essa história",
    intro: "São as 80 plantas medicinais do inventário de Lagoa dos Cavalos e as 135 espécies do livro Acervo Botânico, com os nomes, usos e histórias contados no Ceará e no Equador. As fotos mostram as espécies, não as comunidades.",
    cta: "Explorar o acervo",
  },
  credits: {
    label: "quem faz",
    title: "Parcerias e créditos",
    groups: [
      {
        title: "No Ceará",
        description:
          "Coletivo de Pesquisadoras e Pesquisadores Populares em Saúde e Agroecologia Bem Viver · Associação Comunitária Porfírio Nogueira da Costa · Associações dos Reassentados de Lagoa dos Cavalos e do Cipó · Sindicato dos Trabalhadores Rurais de Russas · Cáritas Diocesana de Limoeiro do Norte · Comunidade Lagoa dos Cavalos · Coletivo Audiovisual Caroá",
      },
      { title: "No Equador", description: "Clínica Ambiental, coordenada por Adolfo Maldonado · associadas e associados · comunidades indígenas Shuar e Siekoya" },
      {
        title: "Universidade",
        description:
          "Lara de Queiroz Viana Braga (doutora em Meio Ambiente e Desenvolvimento) e Antônio Jeovah de Andrade Meireles (professor, doutor em Geografia Física), da UFC · PPGGeo/UFC · Núcleo Tramas, Herbário Prisco Bezerra e projeto Farmácia Viva (UFC)",
      },
      { title: "Apoio", description: "FUNCAP, Edital Pós-Doutorado 09/2023 · Capes (PPGGeo/UFC, conceito 7)" },
    ],
    contactsTitle: "Contatos públicos",
    correspondingAuthor: "Autora correspondente do artigo:",
    laraPage: "Página de Lara Braga",
    clinicLocation: "Quito e Nueva Loja, Equador",
  },
  references: {
    label: "para aprofundar",
    title: "Referências e links",
    itemsHtml: [
      'BRAGA, L. Q. V.; MEIRELES, A. J. A. Diálogos para reparação socioambiental integradora em uma pesquisa participativa de base comunitária. <em>Mercator</em>, v. 25, e25009, 2026. <a href="https://periodicos.ufc.br/mercator/article/view/100570" target="_blank" rel="noopener">periodicos.ufc.br/mercator/article/view/100570</a>',
      'BRAGA, L. Q. V.; MEIRELES, A. J. A. Os sentidos da resolução negociada de um conflito socioambiental no sertão do Ceará. <em>Conexões – Ciência e Tecnologia</em>, v. 14, n. 2, p. 86–97, 2020. <a href="https://doi.org/10.21439/conexoes.v14i2.1876" target="_blank" rel="noopener">doi.org/10.21439/conexoes.v14i2.1876</a>',
      "BRAGA, L. Q. V. <em>Bem viver, saúde e reparação: tecendo diálogos urgentes</em>. Tese (Doutorado em Desenvolvimento e Meio Ambiente) – Universidade Federal do Ceará, Fortaleza, 2020.",
      "BRAGA, L. Q. V. <em>Agronegócio cercando agroecologia: modo de vida e conflito socioambiental em comunidades agrícolas de Tabuleiro de Russas, Ceará</em>. Dissertação (Mestrado em Saúde Pública) – Universidade Federal do Ceará, Fortaleza, 2010.",
      "COLETIVO DE PESQUISA BEM VIVER. <em>Plantas medicinais, conhecimentos populares em saúde e luta por terra: uma cartilha em defesa da vida</em>. Fortaleza: Expressão Gráfica e Editora, 2020.",
      "BRAGA, L. Q. V. Direitos da natureza e justiça ambiental: um debate. In: MORAES, G. O.; FREIRE, G. M. C. A.; FERRAZ, D. S. (orgs.). <em>Do direito ambiental aos direitos da natureza: teoria e prática</em>. Fortaleza: Mucuripe, 2019, p. 41–60.",
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
