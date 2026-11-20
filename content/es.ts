import type { Dictionary } from "./types";

export const es: Dictionary = {
  meta: {
    title: "Reparación Integral Comunitaria",
    description:
      "Una comunidad del sertón de Ceará y una organización de la Amazonía ecuatoriana aprenden una de la otra a sanar la tierra, la salud y el tejido social.",
  },
  ui: { languageLabel: "Idioma", themeToggle: "Cambiar entre tema claro y oscuro" },
  nav: {
    label: "Secciones del sitio",
    menu: "Menú",
    mandala: "Mandala",
    about: "Sobre Lara",
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
      { value: "139", label: "familias de 10 comunidades afectadas por la 2.ª etapa del PITR" },
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
          "Salud, suelo y tejido social. En las reuniones de la Asociación Porfírio Nogueira da Costa, la comunidad eligió investigar los saberes populares en salud con plantas medicinales. Vinieron el mapeo participativo de los problemas de salud, una rueda de conversación sobre fitoterapia popular e industria farmacéutica y el inventario de las plantas nativas y cultivadas. En junio de 2017, 12 personas, la mayoría mujeres, forman el grupo que se convierte en el Colectivo Bem Viver.",
      },
      {
        step: "Etapa 2",
        name: "¡Actúa!",
        ecuador: "Intervención socioambiental: la población afectada actúa para cambiar su situación, con agroecología y permacultura.",
        ceara:
          "Agroecología y Buen Vivir. Reuniones quincenales del Colectivo, grupo de estudios en fitoterapia, recolección de 70 muestras de plantas para el Herbario Prisco Bezerra (UFC), niñas y niños ilustrando la cartilla y aplicación de la Propuesta Huipala. Pequeños proyectos aprobados en convocatorias de Cáritas Diocesana y de la Fundación Luterana de Diaconía (2018).",
      },
      {
        step: "Etapa 3",
        name: "¡Alégrate!",
        ecuador: "La alegría como pilar de la transformación: intercambios, ferias agroecológicas, cultura y audiovisual.",
        ceara:
          "Resistencia, solidaridad y esperanza. Intercambio con comunidades vecinas (2017), ferias de trueque de plantas medicinales y flores (2020), exposiciones de fotos, sesiones de cine, yoga y capoeira. Desde 2021, el Espacio Bem Viver produce hierbas medicinales, hortalizas, frutas y humus, y recibe talleres e intercambios.",
      },
    ],
    crossLabel: "atravesando las tres etapas:",
    crossItems: ["respeto al tiempo comunitario", "compromiso ético y político", "creatividad y experiencia estética"],
  },
  huipala: {
    label: "la herramienta",
    title: "Propuesta Huipala",
    introHtml:
      "El Sistema de Reparación Integral Comunitaria Alterativa (RICA), llamado Propuesta Huipala, nació en 2013, cuando la Clínica evaluó con las comunidades, tarjeta por tarjeta, sus cinco primeros años de trabajo. Parte de situaciones en las que se quitó a las personas la palabra y el poder de decidir, en la vida personal, familiar y comunitaria, y propone un diálogo de saberes entre lo académico y lo popular. Funciona como Sistema Participativo de Garantía: las propiedades son evaluadas por pares y reciben la <a href=\"https://www.clinicambiental.org/certificacion-huipala/\" target=\"_blank\" rel=\"noopener\">Certificación Huipala</a>.",
    levelsIntro: "La matriz es una escalera de colores. Parte del rojo, la realidad de hoy, y sube por siete niveles hasta el blanco, el horizonte utópico que cada comunidad sueña:",
    levelsAria: "La escalera de colores de la Propuesta Huipala, de la realidad actual a la utopía",
    levels: [
      { name: "Realidad actual", element: "tierra", hint: "agrotóxicos, monocultivo, violencia en casa, comunidad fragmentada" },
      { name: "No contaminar", element: "agua", hint: "plan de formación, plano de la finca, plantas medicinales, sin violencia familiar" },
      { name: "No malgastar", element: "fuego", hint: "ningún agrotóxico, solo abonos orgánicos, compostaje, ferias de semillas" },
      { name: "Descontaminar", element: "aire", hint: "limpiar los lugares afectados, flores para las abejas, cambiamanos con vecinos" },
      { name: "Reducir el consumo", element: "éter", hint: "finca integrada a la casa, trueque entre vecinos, decisiones por consenso familiar" },
      { name: "Enriquecer", element: "luz", hint: "soberanía alimentaria, tecnologías caseras, gestión comunitaria del agua y del bosque" },
      { name: "Aprovechar", element: "espacio", hint: "soberanía energética, el bosque como fuente de conocimiento, organizaciones movilizadas" },
      { name: "Disfrutar", element: "utopía", hint: "se hace arte con las manos, se comparten los sueños, la celebración conduce a la unión" },
    ],
    levelsNote:
      "Niveles, colores y prácticas según la matriz del Alerta Naranja nº 7 (Clínica Ambiental, 2013). Al poner los colores de la wiphala en la matriz, la Clínica notó que coincidían con los chakras, y asoció cada nivel a un elemento, de la tierra al espacio.",
    spheresTitle: "Tres esferas, tres valores",
    spheresIntro: "Cada nivel se lee en tres columnas, porque el modelo económico que solo prioriza el dinero fragmentó las tres:",
    spheres: [
      { title: "Personal", items: "conocimientos · habilidades · actitudes", value: "coherencia", shifts: ["del desconocimiento a la valoración de los saberes propios", "de la sensación de incapacidad a hacer arte", "del egoísmo a la solidaridad"] },
      { title: "Familiar", items: "producción · comercialización · energías", value: "ética", shifts: ["del monocultivo a la finca integral", "del abandono en la venta a la autogestión", "del desgaste a energías alterativas, que alteran la vida para mejorarla"] },
      { title: "Comunitaria", items: "alegría · organización", value: "estética", shifts: ["del miedo a la alegría", "de la fragmentación a una organización capaz de enfrentar sus problemas"] },
    ],
    processTitle: "Cómo se evalúa",
    processHtml:
      "Cada seis meses, cada campesino o campesina visita la finca de otro con la <em>Guía de Seguimiento y Control</em>, un cuestionario de sí o no para cada casilla de la matriz: ¿hay violencia intrafamiliar? ¿Los niños conocen más de diez plantas del bosque? ¿Las fiestas de la comunidad celebran la vida? El evaluador promedia los niveles alcanzados en cada columna y concede el color equivalente. Los productos de la finca salen con ese sello, que productores y compradores ven como un símbolo para superarse. Con el tiempo, la Clínica creó también certificados para quien hace el curso de permacultura, para comunidades que cuidan la naturaleza y para selvas protegidas.",
    adaptHtml:
      "La Clínica advierte que la matriz no es universal: se hizo para los problemas de un sector de la Amazonía ecuatoriana. La malla se puede reproducir en cualquier lugar, pero el contenido de cada casilla debe llenarse con la propia gente, empezando por recoger los sueños como punto de llegada. Es lo que hizo el Colectivo Bem Viver en Ceará.",
    sourceHtml:
      "Fuente: <a href=\"https://www.clinicambiental.org/wp-content/uploads/docs/publicaciones/alerta7huipala.pdf\" target=\"_blank\" rel=\"noopener\">Alerta Naranja nº 7, «La propuesta Huipala» (Clínica Ambiental, 2013)</a> y entrevistas de la misión de campo.",
    ceara: {
      title: "La Huipala en el sertón: Lagoa dos Cavalos",
      intro: "Entre 2018 y 2019, el Colectivo de Investigación Bem Viver remodeló la matriz ecuatoriana para Lagoa dos Cavalos, en Russas, en una investigación participativa de la tesis doctoral de Lara Braga. Antes de medir nada, la propuesta abrió espacio para mirar los sueños, un derecho que parecía haber sido robado con la expropiación.",
      stepsIntro: "Fueron seis talleres de tres horas, con murales de tarjetas:",
      steps: ["diagnóstico de los horizontes de la realidad y de la utopía, con cuestionario", "evaluación de las categorías de la matriz en grupos", "rueda de conversación sobre qué es el buen vivir"],
      gradientIntro: "En lugar de colores, la comunidad clasificó cada práctica en una escalera con palabras del sertón:",
      gradient: ["Realidad", "1. ¡Difícil!", "2. Despacio", "3. Más o menos", "4. Bueno", "5. ¡Muy bueno!", "6. ¡Maravilloso!", "Utopía"],
      utopiaIntro: "Y le dio nombre a la utopía de cada dimensión de la matriz:",
      utopias: [
        { dimension: "conocimientos", utopia: "saberes populares en salud" },
        { dimension: "habilidades", utopia: "alimentación, agricultura y arte" },
        { dimension: "actitudes", utopia: "hábitos saludables" },
        { dimension: "producción", utopia: "diversidad y colectividad" },
        { dimension: "comercialización", utopia: "solidaridad" },
        { dimension: "energías", utopia: "equilibrio" },
        { dimension: "alegría", utopia: "encuentros y naturaleza" },
        { dimension: "organización", utopia: "autonomía" },
      ],
      closingHtml: "El punto de partida fue un indicador elegido por la propia comunidad: las prácticas populares de salud con plantas medicinales, hacia la valoración de esos saberes. Se siguieron los tres principios de los Indicadores para el Sumak Kawsay de Adolfo Maldonado: <strong>soberanía</strong> (la comunidad decide qué medir), <strong>diversidad</strong> y <strong>simplicidad</strong> (fácil de medir por la propia gente). En la lectura de la tesis, la reparación fue también la creación del propio Colectivo, que ganó autonomía para seguir con sus prácticas de salud, su alegría y sus sueños.",
      quote: "Assuntos que nunca paramos para pensar, perceber, das coisas que estão guardadas no baú. Parece que agora acordamos para vida.",
      quoteTranslation: "«Temas en los que nunca nos detuvimos a pensar, cosas guardadas en el baúl. Parece que ahora despertamos a la vida.»",
      cite: "Osarina Lima, agricultora y emprendedora, Lagoa dos Cavalos (2017)",
      sourceHtml: "Fuente: BRAGA, L. Q. V. <em>Bem viver, saúde e reparação: tecendo diálogos urgentes</em>. Tesis (Doctorado en Desarrollo y Medio Ambiente), UFC, 2020, cap. 3.",
    },
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
      "Lagoa dos Cavalos está en el distrito de Peixe, en Russas, a 145 km de Fortaleza, en el sertón del Bajo Jaguaribe. El Perímetro de Riego Tabuleiro de Russas (PITR), obra del Dnocs que entró en el PAC, programa federal brasileño de infraestructura, en 2007, abarca Russas, Limoeiro do Norte y Morada Nova, con 14.365 hectáreas de área agrícola útil. La primera etapa (1992–2004) destruyó 22 comunidades rurales y afectó a 782 familias, con migración forzada y contaminación por agrotóxicos. La segunda afectó modos de vida basados en agroforestería, apicultura, cría de ovejas y agricultura familiar, con pérdida de bosque nativo, de áreas colectivas y de tecnologías de convivencia con el semiárido.",
    timeline: [
      { year: "1954", event: "Don Antônio, llegado a Córrego Salgado en 1934, compra las tierras donde hoy está Lagoa dos Cavalos. El nombre, cuentan los antiguos, viene de los vaqueros que atraparon allí unos caballos escapados.", source: "Braga, 2010" },
      { year: "1986", key: true, event: "Proyecto São Vicente: 21 familias cultivan juntas un campo comunitario de 20 hectáreas y llegan a cosechar 6.000 kilos de granos. Comienza la organización comunitaria, “debajo de los marañones”.", source: "Braga, 2010" },
      { year: "1988–89", event: "Casa de harina, casa de semillas y cursos de tecnologías alternativas. En 1989 comienza la apicultura." },
      { year: "1992", event: "Comienza la 1.ª etapa del PITR (hasta 2004): 22 comunidades destruidas y 782 familias afectadas en 10.765 hectáreas." },
      { year: "1995", event: "Llega la energía eléctrica y nace la Asociación Comunitaria Porfírio Nogueira da Costa." },
      { year: "2001", event: "Las cisternas de placa, construidas con el trabajo de las familias, garantizan agua para beber a todas las casas." },
      { year: "2002–03", event: "Represa subterránea, con Cáritas, y las primeras agroforesterías y sistemas agrosilvopastoriles, con la ONG Esplar, en Córrego Salgado." },
      { year: "2007", key: true, event: "Decreto de utilidad pública para la expropiación, el 4 de abril. 139 familias de Escondida, Bananeiras, Barbatão, Cipó, Córrego Salgado, Junco, Lagoa dos Cavalos, Peixe, Santa Terezinha y Sussuarana." },
      { year: "2008", event: "Se forma la Comisión de la Resistencia. En Ecuador, nace la Clínica Ambiental." },
      { year: "2009", event: "Audiencia pública en agosto. La Comisión elabora colectivamente una propuesta territorial alternativa." },
      { year: "2010", event: "En enero, la Comisión entrega al Dnocs la Propuesta de Reasentamiento de las Comunidades, con 2.096 hectáreas. Lara Braga defiende la tesis de maestría “Agronegócio cercando agroecologia”." },
      { year: "2011", key: true, event: "Acuerdo de Ajuste de Conducta firmado con el Ministerio Público Federal y el Dnocs el 18 de agosto. El análisis de 2011–2018 encontró amenazas y violaciones de derechos fundamentales.", source: "Braga & Meireles, Conexões, 2020" },
      { year: "2013", event: "El 25 de septiembre, agricultoras y agricultores ocupan las obras del Dnocs para exigir el cumplimiento del acuerdo." },
      { year: "2014", event: "Entrega de las casas de los reasentamientos de Lagoa dos Cavalos y Peixe (noviembre) y de Cipó (diciembre), sin energía conectada y sin título." },
      { year: "2015", event: "El Ministerio Público Federal lleva la ejecución del acuerdo a la Justicia." },
      { year: "2016", event: "El agua tratada llega al reasentamiento de Lagoa dos Cavalos por iniciativa de la propia comunidad." },
      { year: "2017", key: true, event: "El grupo de investigación se convierte en el Colectivo de Investigadoras e Investigadores Populares en Salud y Agroecología Bem Viver." },
      { year: "2018", event: "Inventario de 80 plantas medicinales. En octubre, las asociaciones firman el plan de explotación agrícola y el contrato de concesión de 73,10 hectáreas." },
      { year: "2019", event: "Proyecto aprobado por el Comité de Ética de la UFC (dictamen n.º 3.507.932/2019)." },
      { year: "2020", event: "Tesis “Bem viver, saúde e reparação: tecendo diálogos urgentes”, defendida también ante un tribunal popular, y publicación de la cartilla de plantas medicinales." },
      { year: "2021", key: true, event: "Inauguración del Espacio Bem Viver, área colectiva de producción agroecológica y formación." },
      { year: "2024–25", event: "Misión de campo en la Amazonía ecuatoriana con asociados y asociadas de la Clínica Ambiental." },
      { year: "2026", key: true, event: "Artículo publicado en la revista Mercator (v. 25, e25009), el 10 de mayo." },
    ],
    closing: "Hoy, las comunidades Cipó, Lagoa dos Cavalos, Peixe y Santa Terezinha siguen luchando por el acceso a la tierra para la agricultura familiar.",
    wayOfLife: {
      title: "Antes del perímetro: un modo de vida del sertón",
      intro: "En 2009, la investigación de maestría de Lara Braga registró cómo vivían 79 familias de Lagoa dos Cavalos, Junco, Barbatão y Córrego Salgado. Con poca tierra, habían construido, en más de veinte años de organización, alternativas de convivencia con el semiárido:",
      items: [
        { name: "chacra asociada", description: "maíz, fréjol y yuca entre marañones y palmas de carnaúba; la hoja del marañón abona el fréjol, y la carnaúba sembrada junto da más paja" },
        { name: "apicultura", description: "desde 1989, apiarios en los montes preservados y la casa de miel Floremel, en Córrego Salgado, sin agrotóxicos. Hoy quedan sus escombros" },
        { name: "agua", description: "cisternas de placa para beber y cocinar, pozos con desalinizadores, una represa subterránea y una aducción planificada por las propias familias" },
        { name: "agroforestería", description: "sistema agrosilvopastoril y reforestación en áreas antes deforestadas" },
        { name: "semillas", description: "casa de semillas criollas e intercambios entre comunidades, rechazando las transgénicas" },
        { name: "patios", description: "decenas de plantas que son comida y remedio: guayaba, granada, corama, malvavisco, boldo, hierba luisa, aroeira, cumarú" },
        { name: "Serrote da Tapera", description: "la “postal” de las comunidades, donde la misa anual reúne a unas 2 mil personas" },
        { name: "saber de la tierra", description: "la luna orienta la siembra, y la elección de las mejores semillas pasa de generación en generación" },
      ],
      quote: "“A mi ver, con la expropiación vamos a perder muchas de estas plantas. Es más, ya las estamos perdiendo. […] Sobre todo el marañón y la carnaúba, que serán las más perjudicadas.”",
      cite: "Lúcio, joven apicultor y agricultor de Lagoa dos Cavalos, en un taller de 2009 (traducción libre del portugués)",
      source: "Fuente: BRAGA, L. Q. V. Agronegócio cercando agroecologia: modo de vida e conflito socioambiental em comunidades agrícolas de Tabuleiro de Russas, Ceará. Dissertação (Mestrado em Saúde Pública), UFC, 2010, cap. 4.",
    },
    tac: {
      title: "El acuerdo de 2011: lo prometido y lo ocurrido",
      intro: "El 18 de agosto de 2011, el Ministerio Público Federal, el Dnocs y la Comisión en Defensa de las Familias de la 2.ª Etapa firmaron un Acuerdo de Ajuste de Conducta (TAC). La tesis leyó los documentos del proceso hasta 2018 y encontró incumplimiento en casi todas las cláusulas:",
      promiseLabel: "El acuerdo prometía",
      outcomeLabel: "Hasta 2018",
      rows: [
        { promise: "Preservar las comunidades de Cipó, Lagoa dos Cavalos y Peixe, base para el reasentamiento de las demás", outcome: "Las tres comunidades siguen en pie y ganaron reasentamientos a su alrededor: una conquista de la resistencia." },
        { promise: "Entregar la nueva casa antes de cualquier desalojo", outcome: "Las casas se entregaron en 2014 sin energía conectada. En 2017 funcionaba un solo medidor, y estaban robando el cableado de los postes." },
        { promise: "Un punto de agua y luz en cada área de producción", outcome: "En 2015, Cipó compraba agua a R$ 60–80 por 7 mil litros. En Lagoa dos Cavalos, el agua tratada solo llegó en 2016, por iniciativa de la comunidad." },
        { promise: "Cordón Verde: 10 metros de árboles elegidos por las comunidades, contra los agrotóxicos", outcome: "Solo plantaron algunas carnaúbas, en parte del terreno, y murieron en la sequía." },
        { promise: "Ampliar la reserva legal alrededor de las comunidades, para las abejas", outcome: "El Dnocs alegó falta de tierras (2015). El uso de la reserva para la apicultura seguía pendiente en 2018." },
        { promise: "Concesión gratuita y colectiva de 3 a 4 hectáreas por familia", outcome: "El contrato de 73,10 hectáreas recién se firmó en octubre de 2018, sin los cambios pedidos por las familias para la agricultura de secano." },
        { promise: "Lotes pequeños cerca de las comunidades, con selección de los expropiados sin licitación", outcome: "El Dnocs no respondió a la propuesta de criterios y justificó la demora con la falta de agua." },
        { promise: "Títulos de propiedad de las casas", outcome: "En 2017 no se había entregado ningún título." },
      ],
      quote: "“Llevamos más de ocho años sin poner una semilla en la tierra, y tenemos que comer para sobrevivir.”",
      cite: "Morador, en audiencia pública del Ministerio Público Federal, 2013 (traducción libre del portugués)",
      source: "Fuente: BRAGA, L. Q. V. Bem viver, saúde e reparação: tecendo diálogos urgentes. Tese (Doutorado em Desenvolvimento e Meio Ambiente), UFC, 2020, cap. 1, a partir del TAC, de actas de reunión del MPF (2015), de la memoria de reunión de la Defensoría Pública (2017) y del acta de audiencia de la Justicia Federal (2018).",
    },
  },
  voices: {
    label: "ecologías feministas de saberes",
    title: "Quién sostiene la lucha",
    intro:
      "El Colectivo Bem Viver está formado principalmente por mujeres: madres, agricultoras, profesoras, estudiantes y lideresas. Fueron ellas quienes propusieron como tema de investigación los saberes sobre plantas medicinales, la misma medicina popular que practicaban antes las mujeres de la comunidad. En la lucha contra la expropiación, eran ellas quienes convocaban a las familias, fundaban asociaciones y enfrentaban las reuniones con el Dnocs. La investigación trata a estas mujeres como investigadoras.",
    quotes: [
      {
        text: "“Desde 2007 la lucha no ha parado. Nosotras, que articulábamos esas reuniones, nos pusimos al frente para convocar a las familias […]. Una maraña de cosas en las que las mujeres se involucraron y siguen involucrándose.”",
        author: "Anna Keyle, agricultora y pedagoga, Colectivo Bem Viver (traducción libre del portugués)",
      },
      {
        text: "“Las mujeres, de cierta forma, perdieron el miedo a hablar, empezaron a expresarse más y a pelear más por lo que estaba mal. […] Si ya estábamos empoderadas, si ya teníamos un papel importante en la comunidad, ahora se amplió.”",
        author: "Osarina Lima, agricultora y emprendedora, Lagoa dos Cavalos (traducción libre del portugués)",
      },
      {
        text: "“¡Nos dimos cuenta de que prácticamente ya no usábamos las plantas medicinales! […] A partir de ese momento volvimos de verdad a usar esas plantas: la gente empezó a conseguir especies, algunos a hacer trueques, ya empezaron a plantar de nuevo en sus patios.”",
        author: "Erivânia Ferreira, agricultora y madre, Colectivo Bem Viver (traducción libre del portugués)",
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
    rows: [
      { year: "2024", date: "nov", place: "Chocó Andino", record: "Entrevistas sobre regeneración de la tierra y activismo ambiental" },
      { year: "2024", date: "nov", key: true, place: "Comunidad Shuar Sharup (1.ª visita)", record: "Consulta sobre plantas medicinales; grabaciones para documental" },
      { year: "2024", date: "3 dic", place: "Cascales", record: "Entrevistas con asociados; registro de batucada" },
      { year: "2024", date: "7–8 dic", place: "Shushufindi", record: "Entrevistas y consultas en finca permacultural" },
      { year: "2024", date: "16 dic", place: "Pacayacu", record: "Entrevistas y consultas con familia permacultora" },
      { year: "2024", date: "21 dic", place: "Comunidad Siekoya Remolino", record: "Consultas y conversaciones sobre el espíritu de la selva" },
      { year: "2025", date: "14–16 ene", key: true, place: "Comunidad Shuar Sharup (2.ª visita)", record: "Entrevistas y caminatas por el territorio" },
      { year: "2025", date: "26 ene", place: "Sector Madero", record: "Visitas de salud comunitaria" },
      { year: "2025", date: "31 ene", place: "Lago Agrio (Nueva Loja)", record: "Entrevista con asociada de la Clínica" },
      { year: "2025", date: "feb", place: "Shushufindi y Lago Agrio", record: "Regreso a las fincas; entrevistas sobre micología y restauración" },
      { year: "2025", date: "23 feb", key: true, place: "Amazonía ecuatoriana", record: "Entrevista con Adolfo Maldonado; visita a laboratorio en finca" },
      { year: "2025", date: "2025", place: "Quito · Universidad Andina Simón Bolívar", record: "Clase y evento sobre derrames de petróleo, mecheros y litigio ambiental" },
    ],
    source: "Fuente: organización del archivo de transcripciones del proyecto. Fechas de carpeta, sujetas a revisión. La fecha de la primera visita a Shuar Sharup está en revisión.",
    galleryTitle: "La misión en imágenes",
    galleryIntro: "Fotos del archivo del proyecto, tomadas durante la misión de campo en Ecuador.",
  },
  fruits: {
    label: "lo que ya brotó",
    title: "Frutos del proyecto",
    items: [
      {
        title: "Cartilla de plantas medicinales",
        description: "“Plantas medicinais, conhecimentos populares em saúde e luta por terra: uma cartilha em defesa da vida” (en portugués), escrita con las mujeres del Colectivo, ilustrada por niñas y niños de la comunidad y publicada en 2020, con recetas de Lagoa dos Cavalos.", links: [{ href: "https://drive.google.com/file/d/1Jtd4nYeeyt1cz69j-UivwZdQQLvay7ss/view?usp=sharing", label: "Leer la cartilla" }]
      },
      { title: "Inventario de 80 plantas medicinales", description: "Hecho en 2018 por el Colectivo con 24 agricultoras y agricultores. 70 muestras fueron al Herbario Prisco Bezerra (UFC). Está en el archivo de plantas de este sitio." },
      { title: "Espacio Bem Viver", description: "Área colectiva desde 2021: hierbas medicinales, hortalizas tradicionales, frutales, humus, talleres e intercambios.", links: [{ href: "https://www.instagram.com/coletivo.bemviver/", label: "Colectivo Bem Viver en Instagram" }] },
      { title: "Dos minidocumentales", description: "En alianza con el Colectivo Audiovisual Caroá y la Escuela de Gastronomía Social Ivens Dias Branco.", links: [{ href: "https://www.youtube.com/watch?v=iVvl3MRPU7s", label: "Ver: Lagoa dos Cavalos e o Bem Viver" }, { href: "https://www.youtube.com/watch?v=kDiJanz7bkE", label: "Ver: PANC na Lagoa dos Cavalos" }] },
      { title: "Tesis con tribunal popular", description: "La comunidad participó en la evaluación del conocimiento producido sobre ella y con ella." },
      { title: "Tesis de maestría (2010)", description: "“Agronegócio cercando agroecologia”, el primer estudio de Lara Braga en Lagoa dos Cavalos: modo de vida, apicultura y el conflicto con el perímetro de riego." },
      { title: "Dos artículos científicos", description: "Mercator (2026), sobre el método de reparación; Conexões (2020), sobre el acuerdo de ajuste de conducta y el conflicto.", links: [{ href: "https://doi.org/10.36517/rm2026.e25009", label: "Leer el artículo en Mercator (2026, en portugués)" }, { href: "https://doi.org/10.21439/conexoes.v14i2.1876", label: "Leer el artículo en Conexões (2020, en portugués)" }] },
      { title: "Plantas no convencionales en Lagoa dos Cavalos", description: "Investigación de Osarina Lima, nacida en Russas, sobre las plantas alimenticias no convencionales de la comunidad, con huerta agroecológica, recetas y un calendario de cultivo para agricultoras y agricultores.", links: [{ href: "https://gastronomiasocial.org.br/laboratorio-de-criac/osarina-lima/", label: "Conocer la investigación (en portugués)" }] },
      { title: "Archivo Ecuador", description: "Audios, fotos y 117 transcripciones de entrevistas con quienes hacen la Clínica Ambiental." },
    ],
  },
  archive: {
    label: "archivo de plantas",
    title: "Las plantas que guardan esta historia",
    intro: "Son las 80 plantas medicinales del inventario de Lagoa dos Cavalos y las 135 especies del libro Acervo Botânico, con los nombres, usos e historias contados en Ceará y en Ecuador. Las fotos muestran las especies, no las comunidades.",
    cta: "Explorar el archivo",
  },
  credits: {
    label: "quién lo hace",
    title: "Alianzas y créditos",
    groups: [
      {
        title: "En Ceará",
        description:
          "Colectivo de Investigadoras e Investigadores Populares en Salud y Agroecología Bem Viver · Asociación Comunitaria Porfírio Nogueira da Costa · Asociaciones de Reasentados de Lagoa dos Cavalos y de Cipó · Sindicato de Trabajadores Rurales de Russas · Cáritas Diocesana de Limoeiro do Norte · Comunidad Lagoa dos Cavalos · Colectivo Audiovisual Caroá",
      },
      { title: "En Ecuador", description: "Clínica Ambiental, coordinada por Adolfo Maldonado · asociadas y asociados · comunidades indígenas Shuar y Siekoya" },
      {
        title: "Universidad",
        description:
          "Lara de Queiroz Viana Braga (doctora en Medio Ambiente y Desarrollo) y Antônio Jeovah de Andrade Meireles (profesor, doctor en Geografía Física), de la UFC · PPGGeo/UFC · Núcleo Tramas, Herbario Prisco Bezerra y proyecto Farmácia Viva (UFC)",
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
      "BRAGA, L. Q. V. <em>Bem viver, saúde e reparação: tecendo diálogos urgentes</em>. Tesis (Doctorado en Desarrollo y Medio Ambiente) – Universidade Federal do Ceará, Fortaleza, 2020.",
      "BRAGA, L. Q. V. <em>Agronegócio cercando agroecologia: modo de vida e conflito socioambiental em comunidades agrícolas de Tabuleiro de Russas, Ceará</em>. Tesis (Maestría en Salud Pública) – Universidade Federal do Ceará, Fortaleza, 2010.",
      "COLETIVO DE PESQUISA BEM VIVER. <em>Plantas medicinais, conhecimentos populares em saúde e luta por terra: uma cartilha em defesa da vida</em>. Fortaleza: Expressão Gráfica e Editora, 2020.",
      "BRAGA, L. Q. V. Direitos da natureza e justiça ambiental: um debate. En: MORAES, G. O.; FREIRE, G. M. C. A.; FERRAZ, D. S. (orgs.). <em>Do direito ambiental aos direitos da natureza: teoria e prática</em>. Fortaleza: Mucuripe, 2019, p. 41–60.",
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
