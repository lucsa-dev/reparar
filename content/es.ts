import type { Dictionary } from "./types";

export const es: Dictionary = {
  meta: {
    title: "Reparación Integral Comunitaria",
    description:
      "Una comunidad del sertón de Ceará y una organización de la Amazonía ecuatoriana aprenden una de la otra a sanar la tierra, la salud y el tejido social.",
  },
  ui: { languageLabel: "Idioma", themeToggle: "Cambiar entre tema claro y oscuro" },
  nav: {
    label: "Secciones de la página",
    menu: "Menú",
    items: [{ id: "repair", label: "Qué es" }, { id: "method", label: "Método" }, { id: "huipala", label: "Huipala" }, { id: "territory", label: "Territorio" }, { id: "voices", label: "Voces" }, { id: "field-mission", label: "Misión" }, { id: "fruits", label: "Frutos" }, { id: "archive", label: "Archivo" }, { id: "credits", label: "Alianzas" }, { id: "references", label: "Referencias" }],
  },
  hero: {
    kicker: "investigación participativa de base comunitaria · Ceará ⇄ Ecuador",
    titleHtml:
      "Bases metodológicas para la reparación integral comunitaria desde las <em>Ecologías Feministas de Saberes</em>: un diálogo de experiencias del Sur Global",
    lede: "Una comunidad del sertón de Ceará afectada por un perímetro de riego y una organización de la Amazonía ecuatoriana que desde hace casi dos décadas repara territorios contaminados por el petróleo aprenden una de la otra a sanar la tierra, la salud y el tejido social.",
    routeFromHtml: "<b>Lagoa dos Cavalos</b>, Russas (Ceará, Brasil)",
    routeToHtml: "<b>Clínica Ambiental</b>, Sucumbíos · Napo · Orellana (Ecuador)",
    cta: {
      article: "Leer el artículo (Mercator, 2026)",
      clinic: "Conocer la Clínica Ambiental",
      plants: "Ver el archivo de plantas",
    },
    facts: [
      { value: "3", label: "etapas del método: abre los ojos, actúa, alégrate" },
      { value: "782", label: "familias de 10 comunidades afectadas por la 2.ª etapa del PITR" },
      { value: "2008", label: "año de fundación de la Clínica Ambiental y de la Comisión de la Resistencia" },
      { value: "117", label: "transcripciones de la misión de campo en Ecuador (2024–2025)" },
    ],
  },
  repair: {
    label: "qué es",
    title: "Reparar es más que indemnizar",
    introHtml:
      "En el derecho internacional de los derechos humanos, la reparación tiene cinco elementos (Beristain, 2010). En los conflictos ambientales estos elementos rara vez se cumplen, porque no existen normas internacionales consolidadas. El proyecto amplía la idea: la reparación depende de <strong>cómo se sienten reparadas las personas, las familias y las comunidades</strong>, desde la cultura de quienes vivieron la violación (Maldonado, 2018).",
    elements: [
      { name: "Restitución", description: "devolver derechos, vivienda, bienes y tierra; superar injusticias" },
      { name: "Indemnización", description: "compensación monetaria por daños materiales" },
      { name: "Rehabilitación", description: "atención psicosocial, salud, educación y biorremediación ambiental" },
      { name: "Satisfacción", description: "medidas de dignificación" },
      { name: "No repetición", description: "cambios legales que protejan los derechos humanos y de la naturaleza" },
    ],
    closingHtml:
      "La salud aparece aquí como fenómeno social, intercultural y multidimensional. Para la Clínica Ambiental, <em>“la salud es dignidad, y la salud empieza en el suelo: cuando la esperanza está en la tierra, hay que recuperarla para que vuelva a brotar”</em>.",
  },
  method: {
    label: "el método",
    title: "Tres etapas, de allá para acá",
    intro: "La Clínica Ambiental trabaja en tres etapas. El Colectivo Bem Viver adaptó cada una al semiárido de Ceará.",
    ecuadorLabel: "en Ecuador",
    cearaLabel: "en Ceará",
    stages: [
      {
        step: "Etapa 1",
        name: "¡Abre los ojos!",
        ecuador: "Investigación-Acción Participativa realizada con las personas afectadas para comprender los problemas.",
        ceara:
          "Salud, extremos climáticos y tejido social. La Asociación Porfírio Nogueira da Costa eligió el tema salud-enfermedad; las mujeres trajeron las plantas medicinales. Nace el grupo que, en 2017, se convierte en el Colectivo Bem Viver.",
      },
      {
        step: "Etapa 2",
        name: "¡Actúa!",
        ecuador: "Intervención socioambiental: la población afectada actúa para cambiar su situación, con agroecología y permacultura.",
        ceara:
          "Agroecología y Buen Vivir. Prácticas integrativas de salud, estudio etnobotánico y aplicación de la Propuesta Huipala. Pequeños proyectos aprobados en convocatorias.",
      },
      {
        step: "Etapa 3",
        name: "¡Alégrate!",
        ecuador: "La alegría como pilar de la transformación: intercambios, ferias agroecológicas, cultura y audiovisual.",
        ceara:
          "Resistencia, solidaridad y esperanza. Desde 2021, el Espacio Bem Viver produce hierbas medicinales, hortalizas, frutas y humus, y acoge talleres e intercambios.",
      },
    ],
    crossLabel: "atravesando las tres etapas:",
    crossItems: ["respeto al tiempo comunitario", "compromiso ético y político", "creatividad y experiencia estética"],
  },
  huipala: {
    label: "la herramienta",
    title: "Propuesta Huipala",
    introHtml:
      'El Sistema de Reparación Integral Comunitaria Alterativa (RICA), llamado Propuesta Huipala, parte de situaciones en las que se quitó a las personas la palabra y el poder de decidir, en la vida personal, familiar y comunitaria. Desde 2013 funciona como Sistema Participativo de Garantía: la Clínica evalúa en qué nivel están las propiedades y emite la <a href="https://www.clinicambiental.org/certificacion-huipala/" target="_blank" rel="noopener">Certificación Huipala</a>.',
    levelsIntro: "Son siete niveles de trabajo, de la realidad actual a la utopía deseada, cada uno en las esferas individual, familiar y comunitaria:",
    levelsAria: "Los siete niveles de la Propuesta Huipala",
    levels: ["Disfrutar", "Aprovechar", "Enriquecer", "Reducir el consumo", "Descontaminar", "No malgastar", "No contaminar"],
    levelsNote:
      "Niveles en el orden en que los presenta el sitio de la Clínica. Los colores remiten a la wiphala, que da nombre a la propuesta; el sitio no indica la correspondencia exacta entre nivel y color.",
    matrixTitle: "La Matriz de Reparación del Colectivo Bem Viver",
    matrixIntro:
      "En Ceará, las dimensiones del método ecuatoriano se convirtieron en un diagrama de flujo que conecta las escalas local y global, individual y comunitaria, popular y científica:",
    dimensions: ["conocimientos", "habilidades", "actitudes", "producción", "comercialización", "energías", "alegría", "organización"],
    horizonsHtml:
      "En el círculo externo están los horizontes de <strong>cuidado, esperanza, solidaridad y deseabilidad</strong>. El proceso emancipador transforma:",
    transformations: [
      { title: "exposición → esperanza", description: "superar la exposición a contaminantes, enfermedades y miedo" },
      { title: "despojo → solidaridad", description: "vencer la pérdida de las condiciones y de los modos de vida" },
      { title: "imposición → utopía", description: "romper con modelos de desarrollo impuestos" },
    ],
  },
  territory: {
    label: "el territorio",
    title: "Lagoa dos Cavalos, Russas",
    intro:
      "El Perímetro de Riego Tabuleiro de Russas (PITR), obra del Dnocs que entró en el PAC, programa federal brasileño de infraestructura, en 2007, abarca Russas, Limoeiro do Norte y Morada Nova, con 14.365 hectáreas de área agrícola útil. La primera etapa fragmentó 22 comunidades rurales por migración forzada y contaminación por agrotóxicos. La segunda afectó modos de vida basados en agroforestería, apicultura, cría de ovejas y agricultura familiar, con pérdida de bosque nativo, de áreas colectivas y de tecnologías de convivencia con el semiárido.",
    timeline: [
      { year: "1992", event: "Comienza la 1.ª etapa del PITR (hasta 2004). 22 comunidades fragmentadas." },
      {
        year: "2007",
        key: true,
        event:
          "Decreto de utilidad pública para la expropiación, el 4 de abril. 782 familias de Escondida, Bananeiras, Sítio Junco, Lagoa dos Cavalos, Córrego Salgado, Barbatão, Sussuarana, Peixe, Cipó y Santa Terezinha.",
      },
      { year: "2008", event: "Se forma la Comisión de la Resistencia. En Ecuador, nace la Clínica Ambiental." },
      { year: "2009", event: "Audiencia pública en agosto. La Comisión elabora colectivamente una propuesta territorial alternativa." },
      {
        year: "2011",
        key: true,
        event:
          "Acuerdo de Ajuste de Conducta firmado con el Ministerio Público Federal y el Dnocs el 18 de agosto. El análisis de 2011–2018 encontró amenazas y violaciones de derechos fundamentales.",
        source: "Braga & Meireles, Conexões, 2020",
      },
      {
        year: "2017",
        key: true,
        event: "El grupo de investigación se convierte en el Colectivo de Investigadoras e Investigadores Populares en Salud y Agroecología Bem Viver.",
      },
      { year: "2019", event: "Proyecto aprobado por el Comité de Ética de la UFC (dictamen n.º 3.507.932/2019)." },
      { year: "2020", event: "Tesis “Bem viver, saúde e reparação: tecendo diálogos urgentes”, defendida también ante un tribunal popular." },
      { year: "2021", key: true, event: "Inauguración del Espacio Bem Viver, área colectiva de producción agroecológica y formación." },
      { year: "2024–25", event: "Misión de campo en la Amazonía ecuatoriana con asociados y asociadas de la Clínica Ambiental." },
      { year: "2026", key: true, event: "Artículo publicado en la revista Mercator (v. 25, e25009), el 10 de mayo." },
    ],
    closing: "Hoy, las comunidades Cipó, Lagoa dos Cavalos, Peixe y Santa Terezinha siguen luchando por el acceso a la tierra para la agricultura familiar.",
  },
  voices: {
    label: "ecologías feministas de saberes",
    title: "Quién sostiene la lucha",
    intro:
      "El Colectivo Bem Viver está formado principalmente por mujeres: madres, agricultoras, profesoras, estudiantes y lideresas. Fueron ellas quienes propusieron como tema de investigación los saberes sobre plantas medicinales, la misma medicina popular que practicaban antes las mujeres de la comunidad. La investigación trata a estas mujeres como investigadoras.",
    quotes: [
      {
        text: "“Desde 2007 la lucha no ha parado. Nosotras, que articulábamos esas reuniones, nos pusimos al frente para convocar a las familias […]. Una maraña de cosas en las que las mujeres se involucraron y siguen involucrándose.”",
        author: "Anna Keyle, agricultora y pedagoga, Colectivo Bem Viver (traducción libre del portugués)",
      },
      {
        text: "“Como en el pasado las mujeres que desarrollaban esta medicina, nuestro colectivo también es solo de mujeres. […] Es una característica femenina la lucha e ir tras lo que es nuestro por derecho.”",
        author: "Edivânia, agricultora y profesora de matemáticas, Colectivo Bem Viver (traducción libre del portugués)",
      },
      {
        text: "“No somos objeto de estudio. ¡Somos sujetos, protagonistas de nuestra propia historia! De las investigaciones, esta es la que ha dejado raíz profunda de organización.”",
        author: "Jucélio Silva, estudiante de Historia, Colectivo Bem Viver (traducción libre del portugués)",
      },
    ],
  },
  bigQuote: {
    text: "“Compañeras brasileñas, el mensaje es recuperar la esperanza recuperando el suelo. Necesitamos que sean luchadoras de la esperanza. El trabajo de cuidado siempre se les ha dejado a las mujeres, y eso ha servido para subordinarlas; llévenlo como bandera, porque es la mayor fuerza que pueden dar al mundo. Solo ustedes pueden enseñarnos a cuidar. Repárennos a nosotros también.”",
    author: "Adolfo Maldonado, médico y cofundador de la Clínica Ambiental, en entrevista en la Amazonía ecuatoriana, 23/02/2025 (traducido de la versión en portugués; no son las palabras exactas de la entrevista original en español)",
  },
  fieldMission: {
    label: "diálogo sur–sur",
    title: "La misión de campo en Ecuador",
    intro:
      "Entre noviembre de 2024 y febrero de 2025, el equipo visitó fincas permaculturales, comunidades indígenas Shuar y Siekoya, consultas de salud y espacios académicos. En las entrevistas, asociadas y asociados de la Clínica cuentan sus historias y dejan mensajes para quienes luchan en Brasil.",
    columns: { date: "fecha", place: "lugar", record: "registro" },
    rows: [
      { date: "nov/2024", place: "Chocó Andino", record: "Entrevistas sobre regeneración de la tierra y activismo ambiental" },
      { date: "2024", place: "Comunidad Shuar Sharup (1.ª visita)", record: "Consulta sobre plantas medicinales; grabaciones para documental" },
      { date: "03/12/2024", place: "Cascales", record: "Entrevistas con asociados; registro de batucada" },
      { date: "07–08/12/2024", place: "Shushufindi", record: "Entrevistas y consultas en finca permacultural" },
      { date: "16/12/2024", place: "Pacayacu", record: "Entrevistas y consultas con familia permacultora" },
      { date: "21/12/2024", place: "Comunidad Siekoya Remolino", record: "Consultas y conversaciones sobre el espíritu de la selva" },
      { date: "14–16/01/2025", place: "Comunidad Shuar Sharup (2.ª visita)", record: "Entrevistas y caminatas por el territorio" },
      { date: "26/01/2025", place: "Sector Madero", record: "Visitas de salud comunitaria" },
      { date: "31/01/2025", place: "Lago Agrio (Nueva Loja)", record: "Entrevista con asociada de la Clínica" },
      { date: "feb/2025", place: "Shushufindi y Lago Agrio", record: "Regreso a las fincas; entrevistas sobre micología y restauración" },
      { date: "23/02/2025", place: "Amazonía ecuatoriana", record: "Entrevista con Adolfo Maldonado; visita a laboratorio en finca" },
      { date: "2025", place: "Quito · Universidad Andina Simón Bolívar", record: "Clase y evento sobre derrames de petróleo, mecheros y litigio ambiental" },
    ],
    source: "Fuente: organización del archivo de transcripciones del proyecto. Fechas de carpeta, sujetas a revisión.",
    galleryTitle: "La misión en imágenes",
    galleryIntro: "Fotos del archivo del proyecto, tomadas durante la misión de campo en Ecuador.",
  },
  fruits: {
    label: "lo que ya brotó",
    title: "Frutos del proyecto",
    items: [
      {
        title: "Cartilla de plantas medicinales",
        description: "“Plantas medicinais, conhecimentos populares em saúde e luta por terra: uma cartilha em defesa da vida” (en portugués), escrita con las mujeres del Colectivo.", links: [{ href: "https://drive.google.com/file/d/1Jtd4nYeeyt1cz69j-UivwZdQQLvay7ss/view?usp=sharing", label: "Leer la cartilla" }]
      },
      { title: "Espacio Bem Viver", description: "Área colectiva desde 2021: hierbas medicinales, hortalizas tradicionales, frutales, humus, talleres e intercambios.", links: [{ href: "https://www.instagram.com/coletivo.bemviver/", label: "Colectivo Bem Viver en Instagram" }] },
      { title: "Dos minidocumentales", description: "En alianza con el Colectivo Audiovisual Caroá y la Escuela de Gastronomía Social Ivens Dias Branco.", links: [{ href: "https://www.youtube.com/watch?v=iVvl3MRPU7s", label: "Ver: Lagoa dos Cavalos e o Bem Viver" }, { href: "https://www.youtube.com/watch?v=kDiJanz7bkE", label: "Ver: PANC na Lagoa dos Cavalos" }] },
      { title: "Tesis con tribunal popular", description: "La comunidad participó en la evaluación del conocimiento producido sobre ella y con ella." },
      { title: "Dos artículos científicos", description: "Mercator (2026), sobre el método de reparación; Conexões (2020), sobre el acuerdo de ajuste de conducta y el conflicto.", links: [{ href: "https://doi.org/10.36517/rm2026.e25009", label: "Leer el artículo en Mercator (2026, en portugués)" }, { href: "https://doi.org/10.21439/conexoes.v14i2.1876", label: "Leer el artículo en Conexões (2020, en portugués)" }] },
      { title: "Plantas no convencionales en Lagoa dos Cavalos", description: "Investigación de Osarina Lima, nacida en Russas, sobre las plantas alimenticias no convencionales de la comunidad, con huerta agroecológica, recetas y un calendario de cultivo para agricultoras y agricultores.", links: [{ href: "https://gastronomiasocial.org.br/laboratorio-de-criac/osarina-lima/", label: "Conocer la investigación (en portugués)" }] },
      { title: "Archivo Ecuador", description: "Audios, fotos y 117 transcripciones de entrevistas con quienes hacen la Clínica Ambiental." },
    ],
  },
  archive: {
    label: "archivo de plantas",
    title: "Las plantas que guardan esta historia",
    intro: "Son 135 especies del libro Acervo Botânico y los nombres, significados, usos e historias contados en los territorios. Las fotos muestran las especies, no las comunidades.",
    cta: "Explorar el archivo",
  },
  credits: {
    label: "quién lo hace",
    title: "Alianzas y créditos",
    groups: [
      {
        title: "En Ceará",
        description:
          "Colectivo de Investigadoras e Investigadores Populares en Salud y Agroecología Bem Viver · Asociación Comunitaria Porfírio Nogueira da Costa · Comunidad Lagoa dos Cavalos · Colectivo Audiovisual Caroá",
      },
      { title: "En Ecuador", description: "Clínica Ambiental, coordinada por Adolfo Maldonado · asociadas y asociados · comunidades indígenas Shuar y Siekoya" },
      {
        title: "Universidad",
        description:
          "Lara de Queiroz Viana Braga (doctora en Medio Ambiente y Desarrollo) y Antônio Jeovah de Andrade Meireles (profesor, doctor en Geografía Física), de la UFC · PPGGeo/UFC",
      },
      { title: "Apoyo", description: "FUNCAP, Convocatoria de Posdoctorado 09/2023 · Capes (PPGGeo/UFC, calificación 7)" },
    ],
    contactsTitle: "Contactos públicos",
    correspondingAuthor: "Autora de correspondencia del artículo:",
    laraPage: "Página de Lara Braga",
    clinicLocation: "Quito y Nueva Loja, Ecuador",
  },
  references: {
    label: "para profundizar",
    title: "Referencias y enlaces",
    itemsHtml: [
      'BRAGA, L. Q. V.; MEIRELES, A. J. A. Diálogos para reparação socioambiental integradora em uma pesquisa participativa de base comunitária. <em>Mercator</em>, v. 25, e25009, 2026. <a href="https://periodicos.ufc.br/mercator/article/view/100570" target="_blank" rel="noopener">periodicos.ufc.br/mercator/article/view/100570</a>',
      'BRAGA, L. Q. V.; MEIRELES, A. J. A. Os sentidos da resolução negociada de um conflito socioambiental no sertão do Ceará. <em>Conexões – Ciência e Tecnologia</em>, v. 14, n. 2, p. 86–97, 2020. <a href="https://doi.org/10.21439/conexoes.v14i2.1876" target="_blank" rel="noopener">doi.org/10.21439/conexoes.v14i2.1876</a>',
      'CLÍNICA AMBIENTAL. Soluciones socioambientales. <a href="https://www.clinicambiental.org/" target="_blank" rel="noopener">clinicambiental.org</a> · <a href="https://www.clinicambiental.org/certificacion-huipala/" target="_blank" rel="noopener">Certificación Huipala</a> · <a href="https://www.clinicambiental.org/wp-content/uploads/docs/publicaciones/alerta7huipala.pdf" target="_blank" rel="noopener">Alerta Naranja n.º 7 (Propuesta Huipala, 2013)</a>',
      "MALDONADO, A. <em>Una propuesta de reparación socio-ecosistémica a los impactos del metabolismo de la actividad petrolera para la Amazonía ecuatoriana</em>. Tesis (Doctorado en Salud Colectiva, Ambiente y Sociedad), Universidad Andina Simón Bolívar, Quito, 2018.",
      "BERISTAIN, C. M. (org.). <em>El derecho a la reparación en los conflictos socioambientales</em>. Bilbao: Hegoa, 2010.",
      "PORTO, M. F.; FINAMORE, R.; ROCHA, D. <em>Saúde como dignidade: riscos, saúde e mobilizações por justiça ambiental</em>. Rio de Janeiro: Fiocruz, 2018.",
    ],
  },
  footer: {
    paragraphs: [
      "Investigación aprobada por el Comité de Ética en Investigación de la UFC (dictamen n.º 3.507.932/2019). El archivo bruto de audios, fotos y transcripciones queda bajo custodia del proyecto y de las comunidades; lo que se publica aquí es lo que ya es público o cuya difusión fue autorizada.",
      "Textos del artículo bajo licencia CC-BY 3.0. Actualizado en noviembre de 2026.",
    ],
  },
};
