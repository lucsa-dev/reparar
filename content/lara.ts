import type { Locale } from "./index";

/**
 * Página "Sobre mim" de Lara Braga.
 * Fontes: dissertação (UFC, 2010), tese (UFC, 2020, esp. introdução, cap. 2 e apêndice A
 * "o encontro das águas e a pesquisadora"), transcrições da missão no Equador (2024–2025)
 * e a página pública de Lara (linktr.ee/lara.vbraga).
 */

type Station = {
  when: string;
  place: string;
  title: string;
  body: string;
  marks: string[];
  source?: string;
  key?: boolean;
};

type Work = { year: string; title: string; note: string; href?: string };

export type LaraPage = {
  metaTitle: string;
  metaDescription: string;
  back: string;
  label: string;
  titleHtml: string;
  lede: string;
  roles: string[];
  about: { title: string; paragraphs: string[] };
  quote: { text: string; cite: string };
  route: { label: string; title: string; intro: string; stations: Station[] };
  method: { label: string; title: string; intro: string; items: { name: string; text: string }[] };
  voice: { text: string; cite: string };
  works: { label: string; title: string; items: Work[] };
  contact: { title: string; email: string; page: string; note: string };
};

const links = {
  cartilha: "https://drive.google.com/file/d/1Jtd4nYeeyt1cz69j-UivwZdQQLvay7ss/view?usp=sharing",
  conexoes: "https://doi.org/10.21439/conexoes.v14i2.1876",
  mercator: "https://periodicos.ufc.br/mercator/article/view/100570",
  ctma: "https://medium.com/ctma/apresentando-os-5-fasc%C3%ADculos-do-ctma-b4e144891a1",
  egsidv:
    "https://lac-conocimientos-sstc.ifad.org/documents/262275/0/EGSIDV+-+Sistematizacao+da+Experiencia+-+Web+PTBR.pdf/b188faee-0690-4f2e-6cb9-aaa5a19b0eef?version=1.0&t=1654198492258",
  doc: "https://www.youtube.com/watch?v=iVvl3MRPU7s",
};

const pt: LaraPage = {
  metaTitle: "Lara Braga · Clínica Ambiental Ceará",
  metaDescription:
    "Bióloga, sanitarista e educadora ambiental. O roteiro de quase duas décadas de pesquisa com Lagoa dos Cavalos, no sertão do Ceará, e com a Clínica Ambiental, na Amazônia equatoriana.",
  back: "← Voltar ao início",
  label: "sobre mim",
  titleHtml: "Lara de Queiroz <em>Viana Braga</em>",
  lede:
    "Sou bióloga, sanitarista e educadora ambiental, pesquisadora interessada em metodologias ativas, sistematização de experiências e processos formativos. Desde 2008 caminho com a comunidade de Lagoa dos Cavalos, em Russas, no sertão do Ceará, e desde 2018 com a Clínica Ambiental, na Amazônia equatoriana.",
  roles: [
    "bióloga",
    "mestra em Saúde Pública (UFC, 2010)",
    "doutora em Desenvolvimento e Meio Ambiente (UFC, 2020)",
    "pós-doutoranda no PPGGeo/UFC",
    "educadora ambiental",
    "professora de yoga",
    "capoeirista",
  ],
  about: {
    title: "Quem sou",
    paragraphs: [
      "Sou cearense e me formei bióloga. Foi a própria biologia que me fez questionar a “neutralidade” da ciência: ela separa a natureza humana das outras naturezas que estuda. Fui buscar na saúde pública um jeito de religar a biologia à vida das pessoas, e no núcleo Tramas (Trabalho, Ambiente e Saúde) da UFC, com a professora Raquel Rigotto, encontrei uma ciência que caminha junto das lutas do campo.",
      "Meu lugar é o de pesquisadora-ativista. Trabalho para romper as fronteiras entre pesquisadora e pesquisado, entre conhecimento científico e popular, entre sujeito e objeto. Nas comunidades, ouvi muitas vezes o pedido de que a pesquisa deixasse “algo que fique para a comunidade”. É isso que procuro fazer.",
      "Hoje sigo esse caminho no pós-doutorado com o professor Jeovah Meireles, no Programa de Pós-Graduação em Geografia da UFC, com apoio da Funcap, aproximando a reparação integral comunitária da Clínica Ambiental das comunidades do semiárido. Este site é um dos frutos desse trabalho.",
    ],
  },
  quote: {
    text: "“Se em 2008 precisei crer para ver um modo de vida tradicional de caatingueiros e caatingueiras em convivência saudável com o semiárido, em 2016 precisava ver para crer no que me diziam.”",
    cite: "Lara Braga, diário de campo, na tese Bem viver, saúde e reparação (2020)",
  },
  route: {
    label: "roteiro",
    title: "O caminho do trabalho, de estação em estação",
    intro:
      "Um roteiro de quase vinte anos, contado pelos lugares, pelas pessoas e pelo que cada etapa deixou. Os fatos vêm da dissertação, da tese, dos diários de campo e das transcrições da missão no Equador.",
    stations: [
      {
        when: "2008",
        place: "Limoeiro do Norte e Russas, CE",
        title: "A primeira ida a campo",
        body: "Em 9 de novembro de 2008 cheguei a Limoeiro do Norte para uma reunião do Fórum Agrotóxicos, como integrante do núcleo Tramas. Fazia nove dias que um trabalhador de 31 anos de uma empresa de fruticultura da Chapada do Apodi tinha morrido. Uma conversa no mercadinho virou uma longa entrevista sobre o uso de venenos no almoxarifado onde ele trabalhava, e aquilo marcou meu jeito de fazer pesquisa. Em dezembro, depois de ver um vídeo-carta sobre a vida em Lagoa dos Cavalos, fui pela primeira vez à comunidade.",
        marks: ["escuta sensível dos moradores", "parte do Estudo Epidemiológico do Baixo Jaguaribe (Tramas/UFC)"],
        source: "Tese (2020), apêndice A",
      },
      {
        when: "2009–2010",
        place: "Lagoa dos Cavalos, Junco, Barbatão e Córrego Salgado",
        title: "Mestrado: “Agronegócio cercando agroecologia”",
        body: "No Mestrado em Saúde Pública da UFC, orientada por Raquel Rigotto, registrei o modo de vida de 79 famílias que, com pouca terra, tinham construído alternativas de convivência com o semiárido: agrofloresta, sistema agrossilvopastoril, apicultura comunitária, casa de sementes, cisternas de placa, barragem subterrânea. Ao mesmo tempo, documentei o conflito com o Perímetro Irrigado Tabuleiro de Russas e a proposta de reassentamento que as próprias comunidades entregaram ao Dnocs.",
        marks: ["observação participante e descrição densa", "oficinas de diagnóstico rural participativo e mapas sociais", "entrevistas com agricultores e apicultores", "defesa em 30 de junho de 2010"],
        source: "Dissertação (2010)",
        key: true,
      },
      {
        when: "2010–2017",
        place: "Brasília e Rio de Janeiro",
        title: "Formar gente do campo, das florestas e das águas",
        body: "Fiz parte do Núcleo de Estudos em Saúde Pública da UnB entre 2010 e 2011. Depois, por quatro anos, fui professora, coordenadora, sanitarista e sistematizadora de experiência na Escola Politécnica de Saúde Joaquim Venâncio (Fiocruz), no Curso Técnico em Meio Ambiente com ênfase em Saúde Ambiental, feito com o Tramas e o MST. Convivi com 56 jovens de movimentos como MST, MAB, pescadores artesanais e faxinalenses.",
        marks: ["sistematização coletiva do curso na coleção Tramas e Tessituras (EPSJV, 2017)"],
        source: "Tese (2020), apêndice A",
      },
      {
        when: "2016",
        place: "Lagoa dos Cavalos",
        title: "O retorno",
        body: "Seis anos depois, chegava até mim a frase “Lagoa dos Cavalos acabou. Se prepara para voltar, pois não irá reconhecê-la”. Voltei em junho de 2016, já no doutorado, com três amigos pesquisadores e artistas. Encontrei terras degradadas sem sombra de cajueiro, os escombros da casa de mel e as tecnologias de convivência destruídas pela segunda etapa do perímetro irrigado. Entendi esses silêncios como violação de direitos.",
        marks: ["começo do doutorado no Prodema/UFC, orientada por Jeovah Meireles e coorientada por Raquel Rigotto"],
        source: "Tese (2020), apêndices A e B",
      },
      {
        when: "2017–2019",
        place: "Lagoa dos Cavalos",
        title: "Abrir os olhos, atuar, alegrar-se",
        body: "Nas reuniões da associação comunitária perguntei que tema valia a pena pesquisar. A escolha foram os saberes populares em saúde com plantas medicinais. Em junho de 2017, doze pessoas, quase todas mulheres, formaram o grupo que viria a ser o Coletivo de Pesquisadoras e Pesquisadores Populares em Saúde e Agroecologia Bem Viver. Com ele fizemos o mapeamento dos agravos à saúde, o inventário das plantas e as receitas de remédios caseiros.",
        marks: ["reuniões quinzenais do Coletivo e grupo de estudos em fitoterapia", "inventário de 80 plantas com 24 agricultoras e agricultores; 70 amostras no Herbário Prisco Bezerra", "intercâmbio entre comunidades vizinhas (2017), exposições, yoga e capoeira com as crianças"],
        source: "Tese (2020), introdução e cap. 2",
        key: true,
      },
      {
        when: "2018–2019",
        place: "Amazônia equatoriana",
        title: "O encontro com a Clínica Ambiental",
        body: "Em janeiro de 2018 vivi a experiência com a Clínica Ambiental, que há dez anos reparava territórios atingidos pelas petroleiras e pelas fumigações na fronteira com a Colômbia. Com Adolfo Maldonado, a reparação entrou no centro da pesquisa. De volta, o Coletivo Bem Viver adaptou a matriz equatoriana de Reparação Integral Comunitária Alternativa (RICA) para Lagoa dos Cavalos, a primeira vez que ela foi usada no Brasil.",
        marks: ["matriz RICA com os indicadores para o Sumak Kawsay", "antes de medir danos, um espaço para olhar os sonhos"],
        source: "Tese (2020), apêndice A e cap. 3",
      },
      {
        when: "2020",
        place: "Fortaleza e Lagoa dos Cavalos",
        title: "Uma tese que é também reparação",
        body: "Defendi a tese “Bem viver, saúde e reparação: tecendo diálogos urgentes” em 28 de fevereiro de 2020, com Adolfo Maldonado na banca, e a comunidade participou da avaliação do conhecimento produzido sobre ela e com ela. No mesmo ano saiu a cartilha escrita com as mulheres do Coletivo e ilustrada pelas crianças.",
        marks: ["cartilha “Plantas medicinais, conhecimentos populares em saúde e luta por terra”", "artigo sobre o TAC na revista Conexões", "feira de troca de plantas medicinais e flores"],
        source: "Tese (2020)",
        key: true,
      },
      {
        when: "2023",
        place: "PPGGeo/UFC",
        title: "Pós-doutorado: bases para a reparação integral comunitária",
        body: "Com apoio da Funcap (edital de pós-doutorado 09/2023), voltei ao diálogo entre o sertão do Ceará e a Amazônia equatoriana para sistematizar um método de reparação integral comunitária a partir das ecologias feministas de saberes.",
        marks: ["parceria com Jeovah Meireles (PPGGeo/UFC)"],
      },
      {
        when: "2024–2025",
        place: "Sucumbíos, Napo, Orellana, Pastaza e Quito",
        title: "A missão de campo no Equador",
        body: "Entre novembro de 2024 e fevereiro de 2025, com Daniel Arruda, passei quase quatro meses com a Clínica Ambiental. Fiz entrevistas e registros audiovisuais, principalmente com as mulheres que trabalham com a Clínica, em fincas permaculturais, nas comunidades Shuar Sharup e Siekoya Remolino, em consultas de saúde e na Universidad Andina Simón Bolívar. Caminhei com Gloria pela mata aprendendo o jaboncillo, a guaba e as histórias de cada planta.",
        marks: ["15 entrevistas com lideranças, lidas na Mandala deste site", "consultas sobre plantas medicinais com o livro Acervo Botânico", "acervo de áudios, fotos e transcrições"],
        source: "Transcrições da missão (2024–2025)",
        key: true,
      },
      {
        when: "2026",
        place: "Ceará ⇄ Equador",
        title: "Devolver o que se aprendeu",
        body: "O artigo na revista Mercator apresenta as bases do método, e este site reúne o percurso para que as comunidades, a Clínica e quem luta no Brasil possam usar o que foi aprendido.",
        marks: ["artigo “Diálogos para reparação socioambiental integradora” (Mercator, 2026)", "site Clínica Ambiental Ceará | O Encontro das Águas"],
      },
    ],
  },
  method: {
    label: "como trabalho",
    title: "O que guia a pesquisa",
    intro: "Os princípios que fui aprendendo no caminho, dos dois lados do continente.",
    items: [
      { name: "A comunidade escolhe o tema", text: "A pergunta de pesquisa nasce nas assembleias e reuniões da associação, das preocupações de quem vive no território: saúde, solo e tecido social." },
      { name: "Sujeitos, não objetos", text: "As mulheres do Coletivo Bem Viver são pesquisadoras populares. As decisões são coletivas e o tempo de cada pessoa é respeitado." },
      { name: "Abrir os olhos, atuar, alegrar-se", text: "Três etapas inspiradas na Clínica Ambiental. A última legitima as emoções, o cuidado e a festa como parte da ciência." },
      { name: "Recuperar as vozes silenciadas", text: "Em contextos de violação de direitos, a pesquisa é também um processo de reparação: escutar, registrar e devolver a palavra a quem foi calado." },
      { name: "Os saberes das plantas", text: "A etnobotânica é ponte entre a ciência e o saber popular, e os direitos bioculturais são caminho para a justiça ambiental." },
      { name: "Algo que fique", text: "Cartilhas, inventários, feiras, documentários e espaços coletivos: o conhecimento volta para o território em formas que a comunidade pode usar." },
    ],
  },
  voice: {
    text: "“Sou bióloga primeiro, e na primeira vez que chegamos aqui fiquei muito encantada pela Amazônia, pela Clínica.”",
    cite: "Lara Braga, apresentando-se na Clínica Ambiental, 2025 (tradução livre do espanhol)",
  },
  works: {
    label: "produções",
    title: "Publicações e materiais",
    items: [
      { year: "2026", title: "Diálogos para reparação socioambiental integradora em uma pesquisa participativa de base comunitária", note: "Com Jeovah Meireles. Revista Mercator, v. 25.", href: links.mercator },
      { year: "2020", title: "Bem viver, saúde e reparação: tecendo diálogos urgentes", note: "Tese de doutorado, Prodema/UFC." },
      { year: "2020", title: "Plantas medicinais, conhecimentos populares em saúde e luta por terra: uma cartilha em defesa da vida", note: "Com o Coletivo de Pesquisa Bem Viver.", href: links.cartilha },
      { year: "2020", title: "Os sentidos da resolução negociada de um conflito socioambiental no sertão do Ceará", note: "Com Jeovah Meireles. Revista Conexões, v. 14, n. 2.", href: links.conexoes },
      { year: "2019", title: "Direitos da natureza e justiça ambiental: um debate", note: "Capítulo em Do direito ambiental aos direitos da natureza (Mucuripe)." },
      { year: "2017", title: "Coleção Tramas e Tessituras: Curso Técnico em Meio Ambiente", note: "Organização com Gigi Castro, André Búrigo e Eduardo Barcelos. EPSJV/Fiocruz.", href: links.ctma },
      { year: "2010", title: "Agronegócio cercando agroecologia: modo de vida e conflito socioambiental em comunidades agrícolas de Tabuleiro de Russas, Ceará", note: "Dissertação de mestrado, Saúde Pública/UFC." },
      { year: "—", title: "Formação em Saúde e Nutrição: sistematização da experiência", note: "Escola de Gastronomia Social Ivens Dias Branco / Secult-CE.", href: links.egsidv },
      { year: "—", title: "Lagoa dos Cavalos e o Bem Viver", note: "Minidocumentário com o Coletivo Audiovisual Caroá.", href: links.doc },
    ],
  },
  contact: {
    title: "Contato",
    email: "E-mail:",
    page: "Página pessoal de Lara",
    note: "Texto escrito a partir da dissertação, da tese, dos diários de campo e das entrevistas da missão no Equador.",
  },
};

const es: LaraPage = {
  metaTitle: "Lara Braga · Clínica Ambiental Ceará",
  metaDescription:
    "Bióloga, salubrista y educadora ambiental. El recorrido de casi dos décadas de investigación con Lagoa dos Cavalos, en el sertón de Ceará, y con la Clínica Ambiental, en la Amazonía ecuatoriana.",
  back: "← Volver al inicio",
  label: "sobre mí",
  titleHtml: "Lara de Queiroz <em>Viana Braga</em>",
  lede:
    "Soy bióloga, salubrista y educadora ambiental, investigadora interesada en metodologías activas, sistematización de experiencias y procesos formativos. Desde 2008 camino con la comunidad de Lagoa dos Cavalos, en Russas, en el sertón de Ceará, y desde 2018 con la Clínica Ambiental, en la Amazonía ecuatoriana.",
  roles: [
    "bióloga",
    "magíster en Salud Pública (UFC, 2010)",
    "doctora en Desarrollo y Medio Ambiente (UFC, 2020)",
    "posdoctoranda en el PPGGeo/UFC",
    "educadora ambiental",
    "profesora de yoga",
    "capoeirista",
  ],
  about: {
    title: "Quién soy",
    paragraphs: [
      "Soy cearense y me formé como bióloga. Fue la propia biología la que me hizo cuestionar la “neutralidad” de la ciencia: separa la naturaleza humana de las otras naturalezas que estudia. Busqué en la salud pública una forma de volver a unir la biología con la vida de la gente, y en el núcleo Tramas (Trabajo, Ambiente y Salud) de la UFC, con la profesora Raquel Rigotto, encontré una ciencia que camina junto a las luchas del campo.",
      "Mi lugar es el de investigadora-activista. Trabajo para romper las fronteras entre investigadora e investigado, entre conocimiento científico y popular, entre sujeto y objeto. En las comunidades escuché muchas veces el pedido de que la investigación dejara “algo que quede para la comunidad”. Eso es lo que busco hacer.",
      "Hoy sigo ese camino en el posdoctorado con el profesor Jeovah Meireles, en el Programa de Posgrado en Geografía de la UFC, con apoyo de Funcap, acercando la reparación integral comunitaria de la Clínica Ambiental a las comunidades del semiárido. Este sitio es uno de los frutos de ese trabajo.",
    ],
  },
  quote: {
    text: "“Si en 2008 necesité creer para ver un modo de vida tradicional de caatingueiros y caatingueiras en convivencia sana con el semiárido, en 2016 necesitaba ver para creer lo que me decían.”",
    cite: "Lara Braga, diario de campo, en la tesis Bem viver, saúde e reparação (2020)",
  },
  route: {
    label: "recorrido",
    title: "El camino del trabajo, estación por estación",
    intro:
      "Un recorrido de casi veinte años, contado por los lugares, las personas y lo que dejó cada etapa. Los hechos vienen de la disertación, de la tesis, de los diarios de campo y de las transcripciones de la misión en Ecuador.",
    stations: [
      {
        when: "2008",
        place: "Limoeiro do Norte y Russas, CE",
        title: "La primera salida de campo",
        body: "El 9 de noviembre de 2008 llegué a Limoeiro do Norte para una reunión del Foro Agrotóxicos, como integrante del núcleo Tramas. Hacía nueve días que había muerto un trabajador de 31 años de una empresa frutícola de la Chapada do Apodi. Una conversación en la tienda del barrio se volvió una larga entrevista sobre el uso de venenos en el almacén donde él trabajaba, y eso marcó mi manera de investigar. En diciembre, después de ver una video-carta sobre la vida en Lagoa dos Cavalos, fui por primera vez a la comunidad.",
        marks: ["escucha sensible de los pobladores", "parte del Estudio Epidemiológico del Bajo Jaguaribe (Tramas/UFC)"],
        source: "Tesis (2020), apéndice A",
      },
      {
        when: "2009–2010",
        place: "Lagoa dos Cavalos, Junco, Barbatão y Córrego Salgado",
        title: "Maestría: “Agronegócio cercando agroecologia”",
        body: "En la Maestría en Salud Pública de la UFC, con Raquel Rigotto, registré el modo de vida de 79 familias que, con poca tierra, habían construido alternativas de convivencia con el semiárido: agroforestería, sistema agrosilvopastoril, apicultura comunitaria, casa de semillas, cisternas de placa, represa subterránea. Al mismo tiempo documenté el conflicto con el Perímetro de Riego Tabuleiro de Russas y la propuesta de reasentamiento que las propias comunidades entregaron al Dnocs.",
        marks: ["observación participante y descripción densa", "talleres de diagnóstico rural participativo y mapas sociales", "entrevistas con agricultores y apicultores", "defensa el 30 de junio de 2010"],
        source: "Disertación (2010)",
        key: true,
      },
      {
        when: "2010–2017",
        place: "Brasilia y Río de Janeiro",
        title: "Formar gente del campo, de los bosques y de las aguas",
        body: "Formé parte del Núcleo de Estudios en Salud Pública de la UnB entre 2010 y 2011. Luego, durante cuatro años, fui profesora, coordinadora, salubrista y sistematizadora de experiencias en la Escuela Politécnica de Salud Joaquim Venâncio (Fiocruz), en el Curso Técnico en Medio Ambiente con énfasis en Salud Ambiental, hecho con Tramas y el MST. Conviví con 56 jóvenes de movimientos como el MST, el MAB, pescadores artesanales y faxinalenses.",
        marks: ["sistematización colectiva del curso en la colección Tramas e Tessituras (EPSJV, 2017)"],
        source: "Tesis (2020), apéndice A",
      },
      {
        when: "2016",
        place: "Lagoa dos Cavalos",
        title: "El regreso",
        body: "Seis años después me llegaba la frase “Lagoa dos Cavalos se acabó. Prepárate para volver, porque no la vas a reconocer”. Volví en junio de 2016, ya en el doctorado, con tres amigos investigadores y artistas. Encontré tierras degradadas sin sombra de marañón, los escombros de la casa de la miel y las tecnologías de convivencia destruidas por la segunda etapa del perímetro de riego. Entendí esos silencios como violación de derechos.",
        marks: ["inicio del doctorado en el Prodema/UFC, con Jeovah Meireles y Raquel Rigotto"],
        source: "Tesis (2020), apéndices A y B",
      },
      {
        when: "2017–2019",
        place: "Lagoa dos Cavalos",
        title: "Abrir los ojos, actuar, alegrarse",
        body: "En las reuniones de la asociación comunitaria pregunté qué tema valía la pena investigar. La elección fueron los saberes populares en salud con plantas medicinales. En junio de 2017, doce personas, casi todas mujeres, formaron el grupo que luego sería el Colectivo de Investigadoras e Investigadores Populares en Salud y Agroecología Bem Viver. Con él hicimos el mapeo de los problemas de salud, el inventario de plantas y las recetas de remedios caseros.",
        marks: ["reuniones quincenales del Colectivo y grupo de estudio en fitoterapia", "inventario de 80 plantas con 24 agricultoras y agricultores; 70 muestras en el Herbario Prisco Bezerra", "intercambio entre comunidades vecinas (2017), exposiciones, yoga y capoeira con los niños"],
        source: "Tesis (2020), introducción y cap. 2",
        key: true,
      },
      {
        when: "2018–2019",
        place: "Amazonía ecuatoriana",
        title: "El encuentro con la Clínica Ambiental",
        body: "En enero de 2018 viví la experiencia con la Clínica Ambiental, que desde hacía diez años reparaba territorios afectados por las petroleras y las fumigaciones en la frontera con Colombia. Con Adolfo Maldonado, la reparación entró al centro de la investigación. De vuelta, el Colectivo Bem Viver adaptó la matriz ecuatoriana de Reparación Integral Comunitaria Alternativa (RICA) para Lagoa dos Cavalos, la primera vez que se usó en Brasil.",
        marks: ["matriz RICA con los indicadores para el Sumak Kawsay", "antes de medir daños, un espacio para mirar los sueños"],
        source: "Tesis (2020), apéndice A y cap. 3",
      },
      {
        when: "2020",
        place: "Fortaleza y Lagoa dos Cavalos",
        title: "Una tesis que también es reparación",
        body: "Defendí la tesis “Bem viver, saúde e reparação: tecendo diálogos urgentes” el 28 de febrero de 2020, con Adolfo Maldonado en el tribunal, y la comunidad participó en la evaluación del conocimiento producido sobre ella y con ella. Ese mismo año salió la cartilla escrita con las mujeres del Colectivo e ilustrada por los niños.",
        marks: ["cartilla “Plantas medicinais, conhecimentos populares em saúde e luta por terra”", "artículo sobre el TAC en la revista Conexões", "feria de intercambio de plantas medicinales y flores"],
        source: "Tesis (2020)",
        key: true,
      },
      {
        when: "2023",
        place: "PPGGeo/UFC",
        title: "Posdoctorado: bases para la reparación integral comunitaria",
        body: "Con apoyo de Funcap (convocatoria de posdoctorado 09/2023), volví al diálogo entre el sertón de Ceará y la Amazonía ecuatoriana para sistematizar un método de reparación integral comunitaria desde las ecologías feministas de saberes.",
        marks: ["alianza con Jeovah Meireles (PPGGeo/UFC)"],
      },
      {
        when: "2024–2025",
        place: "Sucumbíos, Napo, Orellana, Pastaza y Quito",
        title: "La misión de campo en Ecuador",
        body: "Entre noviembre de 2024 y febrero de 2025, con Daniel Arruda, pasé casi cuatro meses con la Clínica Ambiental. Hice entrevistas y registros audiovisuales, sobre todo con las mujeres que trabajan con la Clínica, en fincas permaculturales, en las comunidades Shuar Sharup y Siekoya Remolino, en consultas de salud y en la Universidad Andina Simón Bolívar. Caminé con Gloria por el monte aprendiendo el jaboncillo, la guaba y las historias de cada planta.",
        marks: ["15 entrevistas con liderazgos, leídas en la Mandala de este sitio", "consultas sobre plantas medicinales con el libro Acervo Botânico", "archivo de audios, fotos y transcripciones"],
        source: "Transcripciones de la misión (2024–2025)",
        key: true,
      },
      {
        when: "2026",
        place: "Ceará ⇄ Ecuador",
        title: "Devolver lo aprendido",
        body: "El artículo en la revista Mercator presenta las bases del método, y este sitio reúne el recorrido para que las comunidades, la Clínica y quienes luchan en Brasil puedan usar lo aprendido.",
        marks: ["artículo “Diálogos para reparação socioambiental integradora” (Mercator, 2026)", "sitio Clínica Ambiental Ceará | El Encuentro de las Aguas"],
      },
    ],
  },
  method: {
    label: "cómo trabajo",
    title: "Lo que guía la investigación",
    intro: "Los principios que fui aprendiendo en el camino, a ambos lados del continente.",
    items: [
      { name: "La comunidad elige el tema", text: "La pregunta de investigación nace en las asambleas y reuniones de la asociación, de las preocupaciones de quienes viven en el territorio: salud, suelo y tejido social." },
      { name: "Sujetos, no objetos", text: "Las mujeres del Colectivo Bem Viver son investigadoras populares. Las decisiones son colectivas y se respeta el tiempo de cada persona." },
      { name: "Abrir los ojos, actuar, alegrarse", text: "Tres etapas inspiradas en la Clínica Ambiental. La última legitima las emociones, el cuidado y la fiesta como parte de la ciencia." },
      { name: "Recuperar las voces silenciadas", text: "Donde se violan derechos, la investigación también es un proceso de reparación: escuchar, registrar y devolver la palabra a quien fue callado." },
      { name: "Los saberes de las plantas", text: "La etnobotánica es puente entre la ciencia y el saber popular, y los derechos bioculturales son camino hacia la justicia ambiental." },
      { name: "Algo que quede", text: "Cartillas, inventarios, ferias, documentales y espacios colectivos: el conocimiento vuelve al territorio en formas que la comunidad puede usar." },
    ],
  },
  voice: {
    text: "“Yo soy bióloga primero, y la primera vez que llegamos aquí me quedé muy encantada por la Amazonía, por la Clínica.”",
    cite: "Lara Braga, presentándose en la Clínica Ambiental, 2025",
  },
  works: {
    label: "producción",
    title: "Publicaciones y materiales",
    items: [
      { year: "2026", title: "Diálogos para reparação socioambiental integradora em uma pesquisa participativa de base comunitária", note: "Con Jeovah Meireles. Revista Mercator, v. 25 (en portugués).", href: links.mercator },
      { year: "2020", title: "Bem viver, saúde e reparação: tecendo diálogos urgentes", note: "Tesis doctoral, Prodema/UFC." },
      { year: "2020", title: "Plantas medicinais, conhecimentos populares em saúde e luta por terra: uma cartilha em defesa da vida", note: "Con el Colectivo de Investigación Bem Viver.", href: links.cartilha },
      { year: "2020", title: "Os sentidos da resolução negociada de um conflito socioambiental no sertão do Ceará", note: "Con Jeovah Meireles. Revista Conexões, v. 14, n. 2.", href: links.conexoes },
      { year: "2019", title: "Direitos da natureza e justiça ambiental: um debate", note: "Capítulo en Do direito ambiental aos direitos da natureza (Mucuripe)." },
      { year: "2017", title: "Colección Tramas e Tessituras: Curso Técnico en Medio Ambiente", note: "Organización con Gigi Castro, André Búrigo y Eduardo Barcelos. EPSJV/Fiocruz.", href: links.ctma },
      { year: "2010", title: "Agronegócio cercando agroecologia: modo de vida e conflito socioambiental em comunidades agrícolas de Tabuleiro de Russas, Ceará", note: "Disertación de maestría, Salud Pública/UFC." },
      { year: "—", title: "Formação em Saúde e Nutrição: sistematização da experiência", note: "Escuela de Gastronomía Social Ivens Dias Branco / Secult-CE.", href: links.egsidv },
      { year: "—", title: "Lagoa dos Cavalos e o Bem Viver", note: "Minidocumental con el Colectivo Audiovisual Caroá.", href: links.doc },
    ],
  },
  contact: {
    title: "Contacto",
    email: "Correo:",
    page: "Página personal de Lara",
    note: "Texto escrito a partir de la disertación, la tesis, los diarios de campo y las entrevistas de la misión en Ecuador.",
  },
};

const en: LaraPage = {
  metaTitle: "Lara Braga · Clínica Ambiental Ceará",
  metaDescription:
    "Biologist, public health researcher and environmental educator. Nearly two decades of research with Lagoa dos Cavalos, in the backlands of Ceará, and with the Clínica Ambiental, in the Ecuadorian Amazon.",
  back: "← Back to home",
  label: "about me",
  titleHtml: "Lara de Queiroz <em>Viana Braga</em>",
  lede:
    "I am a biologist, public health researcher and environmental educator, interested in active methodologies, the systematization of experiences and learning processes. Since 2008 I have walked alongside the community of Lagoa dos Cavalos, in Russas, in the backlands of Ceará, and since 2018 alongside the Clínica Ambiental, in the Ecuadorian Amazon.",
  roles: [
    "biologist",
    "MSc in Public Health (UFC, 2010)",
    "PhD in Development and Environment (UFC, 2020)",
    "postdoctoral researcher at PPGGeo/UFC",
    "environmental educator",
    "yoga teacher",
    "capoeirista",
  ],
  about: {
    title: "Who I am",
    paragraphs: [
      "I am from Ceará and trained as a biologist. It was biology itself that made me question the “neutrality” of science: it separates human nature from the other natures it studies. I turned to public health to reconnect biology with people's lives, and in the Tramas group (Work, Environment and Health) at UFC, with Professor Raquel Rigotto, I found a science that walks alongside rural struggles.",
      "My place is that of a researcher-activist. I work to break down the borders between researcher and researched, between scientific and popular knowledge, between subject and object. In the communities I often heard the request that research should leave “something that stays with the community”. That is what I try to do.",
      "Today I continue this path as a postdoctoral researcher with Professor Jeovah Meireles, in UFC's Graduate Program in Geography, with support from Funcap, bringing the Clínica Ambiental's comprehensive community reparation closer to communities in the semi-arid region. This site is one of the fruits of that work.",
    ],
  },
  quote: {
    text: "“If in 2008 I had to believe in order to see a traditional way of life living healthily with the semi-arid land, in 2016 I had to see in order to believe what I was being told.”",
    cite: "Lara Braga, field diary, in the thesis Bem viver, saúde e reparação (2020)",
  },
  route: {
    label: "journey",
    title: "The path of the work, station by station",
    intro:
      "A journey of almost twenty years, told through places, people and what each stage left behind. The facts come from the dissertation, the thesis, the field diaries and the transcripts of the mission in Ecuador.",
    stations: [
      {
        when: "2008",
        place: "Limoeiro do Norte and Russas, Ceará",
        title: "The first field trip",
        body: "On November 9, 2008 I arrived in Limoeiro do Norte for a meeting of the Pesticides Forum, as a member of the Tramas group. Nine days earlier, a 31-year-old worker at a fruit company on the Apodi plateau had died. A chat at the corner shop turned into a long interview about the pesticides in the storeroom where he worked, and it shaped the way I do research. In December, after watching a video letter about life in Lagoa dos Cavalos, I visited the community for the first time.",
        marks: ["careful listening to local residents", "part of the Lower Jaguaribe Epidemiological Study (Tramas/UFC)"],
        source: "Thesis (2020), appendix A",
      },
      {
        when: "2009–2010",
        place: "Lagoa dos Cavalos, Junco, Barbatão and Córrego Salgado",
        title: "Master's: “Agribusiness encircling agroecology”",
        body: "In UFC's Master's in Public Health, supervised by Raquel Rigotto, I recorded the way of life of 79 families who, with little land, had built ways of living with the semi-arid climate: agroforestry, agro-silvo-pastoral systems, community beekeeping, a seed bank, rainwater cisterns, an underground dam. At the same time, I documented the conflict with the Tabuleiro de Russas irrigation project and the resettlement proposal the communities themselves handed to Dnocs.",
        marks: ["participant observation and thick description", "participatory rural appraisal workshops and social maps", "interviews with farmers and beekeepers", "defended on June 30, 2010"],
        source: "Dissertation (2010)",
        key: true,
      },
      {
        when: "2010–2017",
        place: "Brasília and Rio de Janeiro",
        title: "Teaching young people from fields, forests and waters",
        body: "I was part of the Public Health Studies Group at the University of Brasília in 2010 and 2011. Then, for four years, I was a teacher, coordinator, public health worker and systematizer at Fiocruz's Joaquim Venâncio Polytechnic School of Health, in a technical course on environment and environmental health run with Tramas and the Landless Workers' Movement (MST). I lived alongside 56 young people from movements such as the MST, MAB, artisanal fishers and faxinalenses.",
        marks: ["collective systematization of the course in the Tramas e Tessituras collection (EPSJV, 2017)"],
        source: "Thesis (2020), appendix A",
      },
      {
        when: "2016",
        place: "Lagoa dos Cavalos",
        title: "The return",
        body: "Six years later, a sentence reached me: “Lagoa dos Cavalos is over. Get ready to come back, because you won't recognize it.” I returned in June 2016, now a PhD student, with three researcher and artist friends. I found degraded land without the shade of a single cashew tree, the ruins of the honey house and the semi-arid technologies destroyed by the second stage of the irrigation project. I came to understand those silences as a violation of rights.",
        marks: ["start of the PhD at Prodema/UFC, supervised by Jeovah Meireles and co-supervised by Raquel Rigotto"],
        source: "Thesis (2020), appendices A and B",
      },
      {
        when: "2017–2019",
        place: "Lagoa dos Cavalos",
        title: "Open your eyes, act, rejoice",
        body: "At community association meetings I asked which topic was worth researching. The choice was popular health knowledge about medicinal plants. In June 2017, twelve people, almost all women, formed the group that became the Bem Viver Collective of Popular Researchers in Health and Agroecology. With them we mapped health problems, inventoried the plants and gathered home-remedy recipes.",
        marks: ["fortnightly Collective meetings and a herbal medicine study group", "inventory of 80 plants with 24 farmers; 70 samples at the Prisco Bezerra Herbarium", "exchange with neighbouring communities (2017), exhibitions, yoga and capoeira with the children"],
        source: "Thesis (2020), introduction and ch. 2",
        key: true,
      },
      {
        when: "2018–2019",
        place: "Ecuadorian Amazon",
        title: "Meeting the Clínica Ambiental",
        body: "In January 2018 I spent time with the Clínica Ambiental, which for ten years had been repairing territories harmed by oil companies and by fumigation on the Colombian border. With Adolfo Maldonado, reparation moved to the centre of the research. Back home, the Bem Viver Collective adapted the Ecuadorian Alternative Comprehensive Community Reparation (RICA) matrix for Lagoa dos Cavalos, the first time it was used in Brazil.",
        marks: ["RICA matrix with the Sumak Kawsay indicators", "before measuring harm, room to look at dreams"],
        source: "Thesis (2020), appendix A and ch. 3",
      },
      {
        when: "2020",
        place: "Fortaleza and Lagoa dos Cavalos",
        title: "A thesis that is also reparation",
        body: "I defended the thesis “Bem viver, saúde e reparação: tecendo diálogos urgentes” on February 28, 2020, with Adolfo Maldonado on the committee, and the community took part in evaluating the knowledge produced about and with it. The same year saw the booklet written with the Collective's women and illustrated by the children.",
        marks: ["booklet on medicinal plants, popular health knowledge and the struggle for land", "article on the TAC in the journal Conexões", "medicinal plant and flower swap fair"],
        source: "Thesis (2020)",
        key: true,
      },
      {
        when: "2023",
        place: "PPGGeo/UFC",
        title: "Postdoc: foundations for comprehensive community reparation",
        body: "With support from Funcap (postdoctoral call 09/2023), I returned to the dialogue between Ceará's backlands and the Ecuadorian Amazon to systematize a method of comprehensive community reparation grounded in feminist ecologies of knowledge.",
        marks: ["partnership with Jeovah Meireles (PPGGeo/UFC)"],
      },
      {
        when: "2024–2025",
        place: "Sucumbíos, Napo, Orellana, Pastaza and Quito",
        title: "The field mission in Ecuador",
        body: "Between November 2024 and February 2025, with Daniel Arruda, I spent almost four months with the Clínica Ambiental. I carried out interviews and audiovisual recordings, mostly with the women who work with the Clinic, on permaculture farms, in the Shuar Sharup and Siekoya Remolino communities, in health consultations and at the Universidad Andina Simón Bolívar. I walked the forest with Gloria, learning about jaboncillo, guaba and the stories of each plant.",
        marks: ["15 interviews with leaders, read in this site's Mandala", "medicinal plant consultations with the Acervo Botânico book", "archive of audio, photos and transcripts"],
        source: "Mission transcripts (2024–2025)",
        key: true,
      },
      {
        when: "2026",
        place: "Ceará ⇄ Ecuador",
        title: "Giving back what was learned",
        body: "The article in the journal Mercator sets out the foundations of the method, and this site gathers the journey so that the communities, the Clinic and those struggling in Brazil can use what was learned.",
        marks: ["article on integrative socio-environmental reparation (Mercator, 2026)", "Clínica Ambiental Ceará | The Meeting of the Waters website"],
      },
    ],
  },
  method: {
    label: "how I work",
    title: "What guides the research",
    intro: "Principles I learned along the way, on both sides of the continent.",
    items: [
      { name: "The community chooses the topic", text: "The research question comes from assemblies and association meetings, from the concerns of those who live in the territory: health, soil and the social fabric." },
      { name: "Subjects, not objects", text: "The women of the Bem Viver Collective are popular researchers. Decisions are collective and each person's time is respected." },
      { name: "Open your eyes, act, rejoice", text: "Three stages inspired by the Clínica Ambiental. The last one makes emotions, care and celebration a legitimate part of science." },
      { name: "Recovering silenced voices", text: "Where rights are violated, research is also a process of reparation: listening, recording and giving the word back to those who were silenced." },
      { name: "Plant knowledge", text: "Ethnobotany bridges science and popular knowledge, and biocultural rights are a path toward environmental justice." },
      { name: "Something that stays", text: "Booklets, inventories, fairs, documentaries and shared spaces: knowledge returns to the territory in forms the community can use." },
    ],
  },
  voice: {
    text: "“I'm a biologist first, and the first time we came here I fell in love with the Amazon, with the Clinic.”",
    cite: "Lara Braga, introducing herself at the Clínica Ambiental, 2025 (translated from Spanish)",
  },
  works: {
    label: "work",
    title: "Publications and materials",
    items: [
      { year: "2026", title: "Diálogos para reparação socioambiental integradora em uma pesquisa participativa de base comunitária", note: "With Jeovah Meireles. Mercator, v. 25 (in Portuguese).", href: links.mercator },
      { year: "2020", title: "Bem viver, saúde e reparação: tecendo diálogos urgentes", note: "PhD thesis, Prodema/UFC (in Portuguese)." },
      { year: "2020", title: "Plantas medicinais, conhecimentos populares em saúde e luta por terra: uma cartilha em defesa da vida", note: "With the Bem Viver Research Collective.", href: links.cartilha },
      { year: "2020", title: "Os sentidos da resolução negociada de um conflito socioambiental no sertão do Ceará", note: "With Jeovah Meireles. Conexões, v. 14, n. 2.", href: links.conexoes },
      { year: "2019", title: "Direitos da natureza e justiça ambiental: um debate", note: "Chapter in Do direito ambiental aos direitos da natureza (Mucuripe)." },
      { year: "2017", title: "Tramas e Tessituras collection: Technical Course in Environment", note: "Edited with Gigi Castro, André Búrigo and Eduardo Barcelos. EPSJV/Fiocruz.", href: links.ctma },
      { year: "2010", title: "Agronegócio cercando agroecologia: modo de vida e conflito socioambiental em comunidades agrícolas de Tabuleiro de Russas, Ceará", note: "Master's dissertation, Public Health/UFC." },
      { year: "—", title: "Formação em Saúde e Nutrição: sistematização da experiência", note: "Ivens Dias Branco Social Gastronomy School / Secult-CE.", href: links.egsidv },
      { year: "—", title: "Lagoa dos Cavalos e o Bem Viver", note: "Short documentary with the Caroá Audiovisual Collective.", href: links.doc },
    ],
  },
  contact: {
    title: "Contact",
    email: "Email:",
    page: "Lara's personal page",
    note: "Written from the dissertation, the thesis, the field diaries and the interviews of the mission in Ecuador.",
  },
};

export const laraPage: Record<Locale, LaraPage> = { pt, es, en };
