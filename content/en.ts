import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Comprehensive Community Reparation",
    description:
      "A community in the backlands of Ceará and an organization in the Ecuadorian Amazon learn from each other how to heal the land, health and the social fabric.",
  },
  ui: { languageLabel: "Language", themeToggle: "Switch between light and dark theme" },
  nav: {
    label: "Page sections",
    menu: "Menu",
    items: [{ id: "repair", label: "What it is" }, { id: "method", label: "Method" }, { id: "huipala", label: "Huipala" }, { id: "territory", label: "Territory" }, { id: "voices", label: "Voices" }, { id: "field-mission", label: "Mission" }, { id: "fruits", label: "Fruits" }, { id: "archive", label: "Archive" }, { id: "credits", label: "Partners" }, { id: "references", label: "References" }],
  },
  hero: {
    kicker: "community-based participatory research · Ceará ⇄ Ecuador",
    titleHtml:
      "Methodological foundations for comprehensive community reparation based on <em>Feminist Ecologies of Knowledge</em>: a dialogue of experiences from the Global South",
    lede: "A community in the backlands of Ceará affected by an irrigation project and an organization in the Ecuadorian Amazon that has spent nearly two decades repairing territories contaminated by oil learn from each other how to heal the land, health and the social fabric.",
    routeFromHtml: "<b>Lagoa dos Cavalos</b>, Russas (Ceará, Brazil)",
    routeToHtml: "<b>Clínica Ambiental</b>, Sucumbíos · Napo · Orellana (Ecuador)",
    cta: {
      article: "Read the article (Mercator, 2026, in Portuguese)",
      clinic: "Visit Clínica Ambiental",
      plants: "See the plant archive",
    },
    facts: [
      { value: "3", label: "stages of the method: open your eyes, act, rejoice" },
      { value: "782", label: "families in 10 communities affected by the second phase of the PITR" },
      { value: "2008", label: "year Clínica Ambiental and the Resistance Commission were founded" },
      { value: "117", label: "transcripts from the field mission in Ecuador (2024–2025)" },
    ],
  },
  repair: {
    label: "what it is",
    title: "Repairing is more than compensating",
    introHtml:
      "In international human rights law, reparation has five elements (Beristain, 2010). In environmental conflicts these elements are rarely fulfilled, because there are no consolidated international standards. The project broadens the idea: reparation depends on <strong>how repaired people, families and communities feel</strong>, from the standpoint of the culture of those who lived through the violation (Maldonado, 2018).",
    elements: [
      { name: "Restitution", description: "returning rights, housing, property and land; overcoming injustices" },
      { name: "Compensation", description: "monetary compensation for material damage" },
      { name: "Rehabilitation", description: "psychosocial care, health, education and environmental bioremediation" },
      { name: "Satisfaction", description: "measures that restore dignity" },
      { name: "Non-repetition", description: "legal changes that protect human rights and the rights of nature" },
    ],
    closingHtml:
      "Health appears here as a social, intercultural and multidimensional phenomenon. For Clínica Ambiental, <em>“health is dignity, and health begins in the soil: when hope lies in the land, it must be recovered so that it can sprout again”</em>.",
  },
  method: {
    label: "the method",
    title: "Three stages, from there to here",
    intro: "Clínica Ambiental works in three stages. The Bem Viver Collective adapted each one to the semi-arid region of Ceará.",
    ecuadorLabel: "in Ecuador",
    cearaLabel: "in Ceará",
    stages: [
      {
        step: "Stage 1",
        name: "Open your eyes",
        originalName: "¡Abre los ojos!",
        ecuador: "Participatory Action Research carried out with affected people to understand the problems.",
        ceara:
          "Health, climate extremes and the social fabric. The Porfírio Nogueira da Costa Association chose the theme of health and illness; the women brought medicinal plants. This gave rise to the group that became the Bem Viver Collective in 2017.",
      },
      {
        step: "Stage 2",
        name: "Act",
        originalName: "¡Actúa!",
        ecuador: "Socio-environmental intervention: the affected population acts to change its situation, through agroecology and permaculture.",
        ceara:
          "Agroecology and Bem Viver (“good living”). Integrative health practices, an ethnobotanical study and application of the Huipala Proposal. Small projects funded through public calls.",
      },
      {
        step: "Stage 3",
        name: "Rejoice",
        originalName: "¡Alégrate!",
        ecuador: "Joy as a pillar of transformation: exchanges, agroecological fairs, culture and audiovisual work.",
        ceara:
          "Resistance, solidarity and hope. Since 2021, the Bem Viver Space has produced medicinal herbs, vegetables, fruit and humus, and has hosted workshops and exchanges.",
      },
    ],
    crossLabel: "running through all three stages:",
    crossItems: ["respect for community time", "ethical and political commitment", "creativity and aesthetic experience"],
  },
  huipala: {
    label: "the tool",
    title: "Huipala Proposal",
    introHtml:
      'The Alternative Comprehensive Community Reparation System (RICA), known as the Huipala Proposal, starts from situations in which people were stripped of their voice and their power to decide, in personal, family and community life. Since 2013 it has worked as a Participatory Guarantee System: the Clínica assesses which level each property has reached and issues the <a href="https://www.clinicambiental.org/certificacion-huipala/" target="_blank" rel="noopener">Huipala Certification</a>.',
    levelsIntro: "There are seven levels of work, from present reality to the desired utopia, each across the individual, family and community spheres:",
    levelsAria: "The seven levels of the Huipala Proposal",
    levels: ["Enjoy", "Make good use", "Enrich", "Reduce consumption", "Decontaminate", "Do not waste", "Do not pollute"],
    levelsNote:
      "Levels in the order listed on the Clínica's website. The colors refer to the wiphala, which gives the proposal its name; the website does not specify an exact match between level and color.",
    matrixTitle: "The Bem Viver Collective's Reparation Matrix",
    matrixIntro:
      "In Ceará, the dimensions of the Ecuadorian method became a flowchart linking the local and the global, the individual and the community, the popular and the scientific:",
    dimensions: ["knowledge", "skills", "attitudes", "production", "marketing", "energies", "joy", "organization"],
    horizonsHtml:
      "The outer circle holds the horizons of <strong>care, hope, solidarity and desirability</strong>. The emancipatory process transforms:",
    transformations: [
      { title: "exposure → hope", description: "overcoming exposure to contaminants, disease and fear" },
      { title: "dispossession → solidarity", description: "overcoming the loss of living conditions and ways of life" },
      { title: "imposition → utopia", description: "breaking with imposed development models" },
    ],
  },
  territory: {
    label: "the territory",
    title: "Lagoa dos Cavalos, Russas",
    intro:
      "The Tabuleiro de Russas Irrigation Project (PITR), built by Dnocs, Brazil's federal drought-relief agency, and added to the PAC federal infrastructure program in 2007, covers Russas, Limoeiro do Norte and Morada Nova, with 14,365 hectares of usable farmland. The first phase fragmented 22 rural communities through forced migration and pesticide contamination. The second affected ways of life based on agroforestry, beekeeping, sheep farming and family farming, with the loss of native forest, collective areas and technologies for living with the semi-arid climate.",
    timeline: [
      { year: "1992", event: "The first phase of the PITR begins (until 2004). 22 communities fragmented." },
      {
        year: "2007",
        key: true,
        event:
          "Public-utility decree for expropriation, on April 4. 782 families from Escondida, Bananeiras, Sítio Junco, Lagoa dos Cavalos, Córrego Salgado, Barbatão, Sussuarana, Peixe, Cipó and Santa Terezinha.",
      },
      { year: "2008", event: "The Resistance Commission is formed. In Ecuador, Clínica Ambiental is born." },
      { year: "2009", event: "Public hearing in August. The Commission collectively drafts an alternative territorial proposal." },
      {
        year: "2011",
        key: true,
        event:
          "Conduct Adjustment Agreement signed with the Federal Public Prosecutor's Office and Dnocs on August 18. An analysis of 2011–2018 found threats to and violations of fundamental rights.",
        source: "Braga & Meireles, Conexões, 2020",
      },
      {
        year: "2017",
        key: true,
        event: "The research group becomes the Bem Viver Collective of Popular Researchers in Health and Agroecology.",
      },
      { year: "2019", event: "Project approved by the UFC Ethics Committee (opinion no. 3.507.932/2019)." },
      { year: "2020", event: "Thesis “Bem viver, saúde e reparação: tecendo diálogos urgentes”, also defended before a community examination panel." },
      { year: "2021", key: true, event: "Opening of the Bem Viver Space, a collective area for agroecological production and training." },
      { year: "2024–25", event: "Field mission in the Ecuadorian Amazon with members of Clínica Ambiental." },
      { year: "2026", key: true, event: "Article published in the journal Mercator (v. 25, e25009), on May 10." },
    ],
    closing: "Today, the communities of Cipó, Lagoa dos Cavalos, Peixe and Santa Terezinha continue to fight for access to land for family farming.",
  },
  voices: {
    label: "feminist ecologies of knowledge",
    title: "Who sustains the struggle",
    intro:
      "The Bem Viver Collective is made up mainly of women: mothers, farmers, teachers, students and community leaders. They were the ones who proposed knowledge about medicinal plants as a research topic, the same folk medicine that women in the community practiced before them. The research treats these women as researchers.",
    quotes: [
      {
        text: "“The struggle hasn't stopped since 2007. Those of us who organized those meetings took the lead in calling the families together […]. A tangle of things that women got involved in and keep getting involved in.”",
        author: "Anna Keyle, farmer and educator, Bem Viver Collective (free translation from Portuguese)",
      },
      {
        text: "“Just like the women who developed this medicine in the past, our collective is also made up only of women. […] Struggling and going after what is ours by right is a feminine trait.”",
        author: "Edivânia, farmer and math teacher, Bem Viver Collective (free translation from Portuguese)",
      },
      {
        text: "“We are not objects of study. We are subjects, protagonists of our own history! Of all the research, this is the one that has left deep organizational roots.”",
        author: "Jucélio Silva, History student, Bem Viver Collective (free translation from Portuguese)",
      },
    ],
  },
  bigQuote: {
    text: "“Brazilian comrades, the message is to recover hope by recovering the soil. We need you to be fighters for hope. Care work has always been left to women, and that has served to subordinate them; carry it as a banner, because it is the greatest strength you can give the world. Only you can teach us to care. Repair us too.”",
    author: "Adolfo Maldonado, physician and co-founder of Clínica Ambiental, in an interview in the Ecuadorian Amazon, February 23, 2025 (free translation from the Portuguese version; the interview was in Spanish)",
  },
  fieldMission: {
    label: "south–south dialogue",
    title: "The field mission in Ecuador",
    intro:
      "Between November 2024 and February 2025, the team visited permaculture farms, Shuar and Siekoya Indigenous communities, health consultations and academic spaces. In the interviews, members of the Clínica share their stories and leave messages for those fighting in Brazil.",
    columns: { date: "date", place: "place", record: "record" },
    rows: [
      { date: "Nov 2024", place: "Chocó Andino", record: "Interviews on land regeneration and environmental activism" },
      { date: "2024", place: "Shuar Sharup community (1st visit)", record: "Consultation on medicinal plants; recordings for a documentary" },
      { date: "Dec 3, 2024", place: "Cascales", record: "Interviews with members; recording of a batucada" },
      { date: "Dec 7–8, 2024", place: "Shushufindi", record: "Interviews and consultations on a permaculture farm" },
      { date: "Dec 16, 2024", place: "Pacayacu", record: "Interviews and consultations with a permaculture family" },
      { date: "Dec 21, 2024", place: "Siekoya Remolino community", record: "Consultations and conversations about the spirit of the forest" },
      { date: "Jan 14–16, 2025", place: "Shuar Sharup community (2nd visit)", record: "Interviews and walks through the territory" },
      { date: "Jan 26, 2025", place: "Sector Madero", record: "Community health visits" },
      { date: "Jan 31, 2025", place: "Lago Agrio (Nueva Loja)", record: "Interview with a Clínica member" },
      { date: "Feb 2025", place: "Shushufindi and Lago Agrio", record: "Return to the farms; interviews on mycology and restoration" },
      { date: "Feb 23, 2025", place: "Ecuadorian Amazon", record: "Interview with Adolfo Maldonado; visit to a farm laboratory" },
      { date: "2025", place: "Quito · Universidad Andina Simón Bolívar", record: "Class and event on oil spills, gas flares and environmental litigation" },
    ],
    source: "Source: organization of the project's transcript archive. Dates come from folder names and are subject to review.",
    galleryTitle: "The mission in pictures",
    galleryIntro: "Photos from the project's archive, taken during the field mission in Ecuador.",
  },
  fruits: {
    label: "what has already sprouted",
    title: "Fruits of the project",
    items: [
      {
        title: "Medicinal plants booklet",
        description: "“Plantas medicinais, conhecimentos populares em saúde e luta por terra: uma cartilha em defesa da vida” (in Portuguese), written with the women of the Collective.", link: { href: "https://tr.ee/8v2VcmZmiC", label: "Read the booklet (in Portuguese)" }
      },
      { title: "Bem Viver Space", description: "A collective area since 2021: medicinal herbs, traditional vegetables, fruit trees, humus, workshops and exchanges.", link: { href: "https://www.instagram.com/coletivo.bemviver/", label: "Bem Viver Collective on Instagram" } },
      { title: "Two short documentaries", description: "In partnership with the Caroá Audiovisual Collective and the Ivens Dias Branco School of Social Gastronomy.", link: { href: "https://tr.ee/E85-yBxU0d", label: "Watch: Lagoa dos Cavalos e o Bem Viver" } },
      { title: "A thesis with a community panel", description: "The community took part in evaluating the knowledge produced about it and with it." },
      { title: "Two scientific articles", description: "Mercator (2026), on the reparation method; Conexões (2020), on the conduct adjustment agreement and the conflict." },
      { title: "Ecuador archive", description: "Audio, photos and 117 transcripts of interviews with the people who make up Clínica Ambiental." },
    ],
  },
  archive: {
    label: "plant archive",
    title: "The plants that hold this story",
    intro: "Here are 135 species from the Acervo Botânico book, with the names, meanings, uses and stories told in the territories. The photos show the species, not the communities.",
    cta: "Explore the archive",
  },
  credits: {
    label: "who does it",
    title: "Partners and credits",
    groups: [
      {
        title: "In Ceará",
        description:
          "Bem Viver Collective of Popular Researchers in Health and Agroecology · Porfírio Nogueira da Costa Community Association · Lagoa dos Cavalos Community · Caroá Audiovisual Collective",
      },
      { title: "In Ecuador", description: "Clínica Ambiental, coordinated by Adolfo Maldonado · its members · Shuar and Siekoya Indigenous communities" },
      {
        title: "University",
        description:
          "Lara de Queiroz Viana Braga (PhD in Environment and Development) and Antônio Jeovah de Andrade Meireles (professor, PhD in Physical Geography), of UFC · PPGGeo/UFC",
      },
      { title: "Support", description: "FUNCAP, Postdoctoral Call 09/2023 · Capes (PPGGeo/UFC, rating 7)" },
    ],
    contactsTitle: "Public contacts",
    correspondingAuthor: "Corresponding author of the article:",
    clinicLocation: "Quito and Nueva Loja, Ecuador",
  },
  references: {
    label: "to go deeper",
    title: "References and links",
    itemsHtml: [
      'BRAGA, L. Q. V.; MEIRELES, A. J. A. Diálogos para reparação socioambiental integradora em uma pesquisa participativa de base comunitária. <em>Mercator</em>, v. 25, e25009, 2026. <a href="https://periodicos.ufc.br/mercator/article/view/100570" target="_blank" rel="noopener">periodicos.ufc.br/mercator/article/view/100570</a>',
      'BRAGA, L. Q. V.; MEIRELES, A. J. A. Os sentidos da resolução negociada de um conflito socioambiental no sertão do Ceará. <em>Conexões – Ciência e Tecnologia</em>, v. 14, n. 2, p. 86–97, 2020. <a href="https://doi.org/10.21439/conexoes.v14i2.1876" target="_blank" rel="noopener">doi.org/10.21439/conexoes.v14i2.1876</a>',
      'CLÍNICA AMBIENTAL. Soluciones socioambientales. <a href="https://www.clinicambiental.org/" target="_blank" rel="noopener">clinicambiental.org</a> · <a href="https://www.clinicambiental.org/certificacion-huipala/" target="_blank" rel="noopener">Huipala Certification</a> · <a href="https://www.clinicambiental.org/wp-content/uploads/docs/publicaciones/alerta7huipala.pdf" target="_blank" rel="noopener">Alerta Naranja no. 7 (Huipala Proposal, 2013)</a>',
      "MALDONADO, A. <em>Una propuesta de reparación socio-ecosistémica a los impactos del metabolismo de la actividad petrolera para la Amazonía ecuatoriana</em>. PhD thesis (Collective Health, Environment and Society), Universidad Andina Simón Bolívar, Quito, 2018.",
      "BERISTAIN, C. M. (ed.). <em>El derecho a la reparación en los conflictos socioambientales</em>. Bilbao: Hegoa, 2010.",
      "PORTO, M. F.; FINAMORE, R.; ROCHA, D. <em>Saúde como dignidade: riscos, saúde e mobilizações por justiça ambiental</em>. Rio de Janeiro: Fiocruz, 2018.",
    ],
  },
  footer: {
    paragraphs: [
      "Research approved by the UFC Research Ethics Committee (opinion no. 3.507.932/2019). The raw archive of audio, photos and transcripts remains in the care of the project and the communities; what is published here is already public or was authorized for sharing.",
      "Article texts under a CC-BY 3.0 license. Updated November 2026.",
    ],
  },
};
