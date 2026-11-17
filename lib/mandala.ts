// @ts-nocheck
/* Painel "Mandala das Lideranças": as entrevistas da missão de campo lidas pelos 12 sentidos
   da mandala de "Aquarela, semiose e design". Código DOM puro, iniciado pelo componente MandalaDashboard. */
import peopleData from "@/content/people.json";

export function initMandala() {

const SENSES=[
 {id:1,name:"Vida",pig:"azul cerúleo",c:"#2E86C1",def:"Energia potencial, primordial, criadora. A primeiridade de Peirce. Na aquarela, a primeira pincelada de água no papel.",lens:"Nas falas: a terra que volta a produzir, a regeneração, a chance de recomeçar."},
 {id:2,name:"Amor",pig:"turquesa",c:"#17A398",def:"Força vinculante, relacional, magnética. Na aquarela, a fusão dos pigmentos ao molhar o pincel.",lens:"Nas falas: a terra como mãe, a família, a alegria de partilhar, o cuidado."},
 {id:3,name:"Alma",pig:"verde ftalo",c:"#0F6E55",def:"Existencial, intuitiva, as profundezas do ser. Na aquarela, render-se às águas; a transparência que dá profundidade.",lens:"Nas falas: a dor que quebra por dentro, o luto, a espiritualidade, o que move sem explicação."},
 {id:4,name:"Cartografias",pig:"verde amarelado",c:"#8FAE22",def:"Mapear o território criativo, as direções do processo, as paisagens de dentro e de fora.",lens:"Nas falas: migrar, chegar ao território, mapear problemas, ler onde cada planta quer estar."},
 {id:5,name:"Alteridade",pig:"amarelo",c:"#E0AE17",def:"Relacional, ética, valores. A obra como outra; abertura a pontos de vista de fora.",lens:"Nas falas: a comunidade, os pares, o vizinho, as mulheres, dar voz a quem não era ouvido."},
 {id:6,name:"Aprendizagem",pig:"laranja",c:"#E5732A",def:"Escola da vida, consciência das transformações. O erro como o inesperado de um novo sentido.",lens:"Nas falas: oficinas, errar e tentar de novo, ensinar o que se aprendeu."},
 {id:7,name:"Manifesto",pig:"vermelho encarnado",c:"#C4262E",def:"Tudo o que é, o objeto dinâmico. A passagem do ideal ao real; a água leva o sentimento ao pigmento.",lens:"Nas falas: o fato concreto (petróleo, câncer, fumigação) e a finca como prova de que se pode."},
 {id:8,name:"(In)finitude",pig:"magenta",c:"#BE2A7C",def:"Instante e duração, tempos cíclicos. Na aquarela, o tempo de secagem da água.",lens:"Nas falas: o tempo da terra (4, 5 anos), avós e netos, a memória, o que não pode se perder."},
 {id:9,name:"Caminho",pig:"púrpura",c:"#7A2E8E",def:"Jornada, ponte, estrela guia. O fio de Ariadne; o rio quando sente o mar.",lens:"Nas falas: a trajetória, o ponto de virada, o chamado, seguir adiante."},
 {id:10,name:"Cosmos",pig:"violeta",c:"#5840A8",def:"Ordem natural, cosmovisão, integração com a natureza (Krenak, Kopenawa). Conexão com um sistema maior.",lens:"Nas falas: «nosotros y la naturaleza somos uno», o bosque como casa, a rede dos fungos."},
 {id:11,name:"Espelho",pig:"moonglow",c:"#9FB3BE",def:"Reflexos e reflexões, símbolos, arquétipos. Atravessar o espelho d'água; luz e sombra.",lens:"Nas falas: a Huipala como termômetro, o reconhecimento entre pares, o nome que carrega mito e rito."},
 {id:12,name:"Autoconhecimento",pig:"azul ultramar",c:"#1F3FA0",def:"Evolução, ponto de mutação, ouroboros. Ser o que se faz, fazer-se. Fecha e reabre o ciclo.",lens:"Nas falas: «la que tengo que cambiar soy yo», repararse, a paz consigo."}
];
const QUESTIONS=[
 {id:1,s:"P1 · Trajetória",l:"Quem é você? De onde vem, o que faz?"},
 {id:2,s:"P2 · A Clínica",l:"O que é a Clínica Ambiental para você e como você chegou nela?"},
 {id:3,s:"P3 · Reparação",l:"O que é reparação (socioambiental)?"},
 {id:4,s:"P4 · Permacultura",l:"Por que a permacultura e o solo são caminhos de reparação?"},
 {id:5,s:"P5 · Huipala",l:"Como funciona e o que significa a certificação Huipala?"},
 {id:6,s:"P6 · Cuidado e mulheres",l:"Saúde, cuidado e o lugar das mulheres na luta ambiental."},
 {id:7,s:"P7 · Nomes das plantas",l:"Qual a importância dos nomes das plantas e dos saberes ancestrais?"},
 {id:8,s:"P8 · Mensagem",l:"Que mensagem você deixa para as companheiras e companheiros do Brasil?"}
];
const PEOPLE=[
{id:"adolfo",name:"Adolfo",role:"Médico espanhol, chegou em 1987, cofundador",place:"Amazonas",date:"23.02.25",files:["entrevista Adolfo take 1–6"],ex:[
 {q:1,s:[2,9,5],t:"Chegou como médico, encantou-se com a Amazônia e «caiu do cavalo» diante do extrativismo. O primeiro paciente tinha tétano.",c:["me quedé completamente fascinado","era el camino que debería seguir… Fue un amor a la naturaleza, a la amazonía"]},
 {q:2,s:[3,5,7],t:"A Clínica nasce de um «grito calado» das crianças da fronteira fumigada: os desenhos perderam a cor, os olhos, as bocas.",c:["a estos niños les ha quebrado el alma y es esto lo que hay que recuperar","¿Cómo recuperamos el color en los dibujos de unos niños…?"]},
 {q:3,s:[10,1,2],t:"Três princípios: recuperar o solo para recuperar a esperança; a saúde começa no solo; reparação como reconstrução das relações.",c:["cuando la esperanza está por los suelos hay que recuperar el suelo","reconstrucción de las relaciones entre personas, animales, naturaleza, ríos, suelos"]},
 {q:3,s:[12,7],t:"Não esperar o Estado nem os 35 anos do caso Texaco: repararem-se a si mesmos.",c:["nos hemos preocupado más de que nos sintamos orgullosos del proceso","el repararnos es fundamental… son el alma de la lucha"]},
 {q:4,s:[4,6,9],t:"O método «Abre os olhos, age e alegra-te» e a escala de cores da Huipala, do vermelho ao roxo. Famílias que se reencontram.",c:["Abre los ojos, investiga… actúa… alégrate","he recuperado a la familia"]},
 {q:5,s:[11,5,12],t:"A certificação como reconhecimento entre pares, nos níveis pessoal, familiar e comunitário.",c:["es un reconocimiento entre pares","la alegremia, la alegría en sangre","estoy caminando, estoy avanzando"]},
 {q:6,s:[2,5,6,3],t:"Câncer acima de Detroit, 72% mulheres, abandonadas pelos maridos. As próprias doentes formam-se como cuidadoras.",c:["que la gente se sintiera cuidada, se sintiera reparada pero sobre todo se sintiera querida"]},
 {q:6,s:[10,8,2],t:"Recuperar o tecido comunitário pela celebração e pela ritualidade com a natureza.",c:["la fuerza de la unión está en la celebración","les recuperaba el niño que llevaban dentro"]},
 {q:7,s:[11,10,12],t:"Todo nome carrega uma mensagem; a planta tem mito e rito. Descolonizar os nomes.",c:["Si a mí me llamaran lobo noble, yo sacaría pecho","sembrarlas al lado de la casa para que la planta conozca a la familia"]},
 {q:8,s:[9,2,8],t:"Esperança e cuidado como bandeira.",c:["sean luchadoras de la esperanza","repárennos a nosotros también"]}
]},
{id:"maria",name:"María Pantoja",role:"Presidenta da Clínica, naturopata",place:"Lago Agrio",date:"31.01.25",files:["Audio Maria take 1–8"],ex:[
 {q:1,s:[2,9,6],t:"Desde jovem, as plantas e a cura. Distingue curar de sanar.",c:["siempre me ha llenado de alegría trabajar, conocer el proceso de sanación","si curas, solamente curas el malestar… sanar, ahí va poco a poco","la tierra tiene venas"]},
 {q:2,s:[4,5],t:"Reuniões em que cada comunidade trazia seu problema. O nome surgiu «de la nada»: uma clínica dentro da natureza.",c:["que vengan y planteen la problemática de su comunidad","es algo dentro de la naturaleza… desde la misma gente"]},
 {q:3,s:[10,1],t:"Reparar é trabalhar o solo, a família, a comunidade e o entorno. A cachoeira San Rafael perdida.",c:["trabajar desde el suelo, la familia y la comunidad y en el entorno","había una cultura con naturaleza"]},
 {q:4,s:[10,2,6],t:"O solo fumigado solta fumaça, defende-se. Os fungos dão-se as mãos. A oficina não é aula: é lembrança.",c:["si ellos, que no hablan, se tejen tan bonito y se ayudan, ¿por qué los seres humanos hacemos lo contrario?","no venimos a darles cátedra, venimos a hacer un recorderis"]},
 {q:5,s:[12,11,8],t:"A Huipala avalia até se você fala com as plantas. Cinco anos para o químico sair. A mudança começa em si.",c:["La idea es la conciencia conmigo misma","primero tienes que hacer un cambio radical en ti misma, entonces ahí funciona la Huipala","hay un tiempo hasta para reparar"]},
 {q:6,s:[5,2,12],t:"Homens e mulheres juntos, contra grupos separados. A mudança é interior.",c:["la sociedad se teje hombre-mujer… ¿De qué reparación hablamos?","no voy a buscar que el hombre cambie. La que tengo que cambiar soy yo"]},
 {q:8,s:[6,1,10],t:"A vida como escola; a permacultura ensina que primeiro somos nós.",c:["la vida es una escuela en la que cada minuto se aprende una lección","puro monte, pero ahí está la esencia"]}
]},
{id:"carlos",name:"Carlos Aldaz",role:"Agricultor, cofundador, Isla de Esperanza Hicama",place:"Shushufindi",date:"07.12.24 · 06.02.25",files:["entrevista Carlos 1–2 (dez.)","Carlos take 1–4 (fev.)"],ex:[
 {q:1,s:[9,6,4],t:"A família migra da costa; o modelo convencional fracassa. Um acidente de carro é o ponto de virada.",c:["fue como el detonante","los agrotóxicos prácticamente fueron creados para desaparecer vida"]},
 {q:2,s:[10,1,5],t:"A Clínica é a clínica de sanar a terra; um espaço onde a gente do campo é ouvida.",c:["clínica ambiental es la clínica de sanar a la tierra","la gente del campo, ¿dónde pone su voz?"]},
 {q:3,s:[3,12,7],t:"Reparar é juntar as peças quebradas, começando pelo que está ao próprio alcance.",c:["ir uniendo… todas las piezas rotas"]},
 {q:4,s:[10,8,9],t:"Permacultura imita a selva; quatro anos de transição; a ilha de esperança no meio da contaminação.",c:["nosotros y la naturaleza somos uno","sí se puede en espacios que hay contaminación"]},
 {q:5,s:[11,8,6],t:"As cores sobem com os anos, até o branco da utopia; um estímulo, não uma pressão.",c:["hasta llegar… al color blanco que se habla de la utopía","le llena internamente"]},
 {q:6,s:[2,5],t:"Comer sem agrotóxicos é tomar remédio; terapeutas acompanham quem foi abandonada.",c:["si tú tomas un café sin agrotóxicos, te estás tomando medicina"]},
 {q:8,s:[12,2,8,10],t:"Paz consigo, com a família e com a natureza; pensar nos netos.",c:["lleno de alegría y lleno de paz conmigo mismo","sanemos la tierra, sanamos todo, sanamos nuestro cuerpo"]}
]},
{id:"cecilia",name:"Cecilia Núñez",role:"Agricultora, finca Hicama",place:"Shushufindi",date:"07.12.24 · 06.02.25",files:["entrevista Cecilia 1–3 (dez.)","Cecília take 1–3 (fev.)"],ex:[
 {q:1,s:[2,10],t:"Vinte anos na finca, o gosto pelo campo, pelas plantas e pelos bichos.",c:["nos gusta el trabajo del campo… tener las plantas, todos los animalitos"]},
 {q:2,s:[6,5,2],t:"A Clínica como ensinamento e como troca de sementes.",c:["la clínica ambiental para mí es una enseñanza muy hermosa"]},
 {q:3,s:[1,10],t:"Reparar é limpar o que está contaminado e viver num lugar limpo.",c:["Es como ver algo muy hermoso, vivir en un lugar limpio, sano"]},
 {q:4,s:[10,1,8],t:"As abelhas sustentam a humanidade; a agroecologia pede paciência.",c:["sin ellas… no hubiera la humanidad","hay que tener mucha paciencia… se demora"]},
 {q:5,s:[11,2,9],t:"Percorre a Huipala inteira, do vermelho ao roxo. Os beija-flores entram em casa.",c:["hasta los colibríes nos entran adentro a la casa","yo me siento muy alegre de estar en ese estado de la Huipala"]},
 {q:6,s:[5],t:"Mulheres e homens são iguais.",c:["somos iguales mujeres y hombres… solo cambiamos el sexo"]},
 {q:7,s:[10,7],t:"Apresenta a mesa: chonta duro, goiaba, naranjilla, chuchu como remédio, flores comestíveis.",c:["el propio alimento es la medicina"]},
 {q:8,s:[8,9,2],t:"Cuidar da mãe terra agora, pelos netos.",c:["si no la cuidamos ahora, más después será un desierto todo","sembrando sanos para vivir sanos"]}
]},
{id:"carmen",name:"Carmen Zambrano",role:"Militante UDAPT, cofundadora",place:"Shushufindi",date:"08.12.24",files:["Carmen Entrevista 1–4"],ex:[
 {q:1,s:[2,10,8],t:"Chegou em 1984, quando tudo era selva. Viu o paraíso desaparecer com a Texaco.",c:["esto era un paraíso… todo esto era una selva","así fue desapareciendo el paraíso"]},
 {q:2,s:[7,9,5],t:"«A Clínica nós mesmos fizemos.» Ficou com os afetados; o nome mudou quando quiseram fechar a Acción Ecológica.",c:["la clínica ambiental la hicimos nosotros mismos","No podemos irnos a otro lado si somos los afectados"]},
 {q:3,s:[1,10],t:"Reparar é plantar sem químico contra o câncer e filtrar a água.",c:["la reparación de nosotros es sembrar plantas sin químico para la salud, para contra el cáncer"]},
 {q:4,s:[3,8,5],t:"A permacultura nasceu da ideia de um companheiro que morreu de câncer, abandonado. A pambamesa.",c:["que su comida sea su medicina","todos se unen en una sola mesa… nadie come solito"]},
 {q:5,s:[5,7],t:"Pouca gente entende a certificação; falta apoio para quem trabalha sozinha.",c:["Poquita gente lo entiende"]},
 {q:6,s:[2,3,10],t:"Sente a infelicidade dos outros como sua. Sonho no hospital: os espíritos a chamam para ajudar.",c:["Yo si veo a una persona que está infeliz, yo soy infeliz","no puedes estar aquí. Ve allá, que allá te necesitan"]},
 {q:8,s:[2,8,9],t:"Amor e paciência.",c:["si no hay amor y paciencia, no llegas a ninguna parte"]}
]},
{id:"bella",name:"Belia (Bella)",role:"Auxiliar de enfermagem, cofundadora, permacultora nível roxo",place:"Pacayacu",date:"16.12.24",files:["entrevista Bella 1–7"],ex:[
 {q:1,s:[8,2,3],t:"A infância colada à avó formou quem ela é. Vinte anos em casa «com as asas cortadas».",c:["yo era rabo de mi abuelita","lo que soy hoy fue lo que viví antes","como con las alas cortadas"]},
 {q:2,s:[9,7,2],t:"Do Frente de Defensa às pesquisas com Adolfo, ao convite para começar. Chamaram-na de louca por plantar flores.",c:["yo siembro flores para mirarlas mientras estoy viva","le planté una flor… para darle el color, esa alegría al espacio"]},
 {q:3,s:[10,12,6,8],t:"Reparação de todo o universo, a partir do eu. A teoria ela mostra na prática.",c:["desde el yo, desde la familia, desde la comunidad","es repararnos","yo la demuestro con la práctica, que habla la práctica"]},
 {q:5,s:[11,6,9],t:"Chorou com o inventário das 87 pupunheiras; ganhou o roxo há um ano. O branco são os sonhos.",c:["si nos daban ese color, como que ya parábamos","para mí como que los sueños ya los completé"]},
 {q:6,s:[5,12,2,3],t:"A vizinha com a pilha de roupa, as lágrimas, a vontade de voar. A carta do filho.",c:["Decisión de que vuelvan a moverse las alas","su mundo quiere volar, pero no puede","Vale la pena ser diferente"]},
 {q:6,s:[10,2],t:"A terra generosa dá até a alegria.",c:["la alegría, que no hay donde comprar la alegría en ninguna tienda"]},
 {q:8,s:[2,10,8],t:"Amar a terra como mãe; as flores dão cor e alegria.",c:["ella nos devuelve ese amor produciendo el alimento","las flores nos regalan ese color, esa alegría"]}
]},
{id:"galo",name:"Galo Rodríguez",role:"Ex-trabalhador petroleiro, descendência kichwa",place:"Pacayacu",date:"16.12.24",files:["entrevista Galo 1–3"],ex:[
 {q:1,s:[7,12,11],t:"Abriu a selva para os primeiros poços. Desistiu do gado e deixou o pasto virar mata.",c:["fui como el primer destructor de la montaña aquí en la Amazonía","Todo lo que era potrero… le dejé que se remonte"]},
 {q:1,s:[8,10],t:"O rio da infância, a balsa até Nuevo Rocafuerte, os peixes que acabaram.",c:["mejor que no haya habido carretera… se ha destruido todo","ni un pajarito… ya se los hicieron"]},
 {q:2,s:[5,9],t:"Conheceu Adolfo como médico do subcentro; Bella entrou primeiro na Clínica.",c:["ahí nos conocimos con Adolfo"]},
 {q:3,s:[10,5],t:"A ilha invadida e as árvores imensas cortadas.",c:["Había unos árboles bastantes, hermosos, grandes"]},
 {q:4,s:[8,10,11],t:"Antes da palavra permacultura havia a chacra.",c:["para mí… no había la permacultura, sino que la chacra","en la chacra se tiene de todo"]},
 {q:5,s:[6],t:"A Huipala mostra o que falta: fogão rocket, banheiro seco, filtro de água.",c:["Y eso es lo que se ha aprendido"]},
 {q:8,s:[2,10],t:"O veneno anda com a chuva até o vizinho de baixo.",c:["eso camina con el aguacero… más abajo hay otros vecinos"]}
]},
{id:"julia",name:"Julia Eva Vargas",role:"Argentina, atriz, costureira",place:"Cascales",date:"03.12.24",files:["entrevista Julia 1–2"],ex:[
 {q:1,s:[9,10,5],t:"Um chamado pessoal pela natureza; o alívio de achar a Clínica numa feira.",c:["fue un alivio poder compartir este sueño"]},
 {q:2,s:[2,5],t:"A Clínica vira família e continência emocional.",c:["empieza a ser una familia… una contención emocional muy fuerte"]},
 {q:4,s:[8,6,4],t:"Permacultura é caminho infinito e está viva.",c:["a sentarse y ver por dónde sale el sol","la permacultura está viva, hay que alimentarla"]},
 {q:3,s:[1,7,3],t:"O dano já está feito: e agora? Fazer tudo de novo. A arte também repara.",c:["Tienes la oportunidad de poder hacer todo de nuevo, es hermoso","el arte siempre es terapéutico, es sanador, es reparador"]},
 {q:6,s:[5,10],t:"As mulheres ficam mais perto do que somos: comida, água, semente.",c:["las mujeres son las que se mantienen más cerca de lo que somos"]},
 {q:7,s:[8,4,11],t:"Saberes que viajam no tempo; a memória dos nomes se adapta e viaja.",c:["cosas que viajan en el tiempo y están tan frágiles de desaparecer","cómo la memoria también se adapta, viaja"]},
 {q:5,s:[6,8],t:"Um incentivo bonito; não se chega a lugar nenhum, é um processo.",c:["no es que llegas a ningún lado con eso"]},
 {q:8,s:[2,1,12],t:"Criação instintiva; sair dos moldes.",c:["formas nuevas con formas de antes","salirse de los moldes, ese es mi mensaje"]}
]},
{id:"pablo",name:"Pablo Andrés Yepes",role:"Artista circense, permacultor",place:"Cascales",date:"03.12.24",files:["entrevista Pablo 1–2"],ex:[
 {q:1,s:[10,9],t:"Conexão com a Amazônia desde criança.",c:["quién soy yo no sé"]},
 {q:2,s:[9,5,4],t:"Procurava companhia para um caminho «um pouco louco»; ilhas no meio do devastado.",c:["un espacio de contención… en este camino, que es un poco loco","Siempre somos como pequeñas islas"]},
 {q:4,s:[8,6],t:"Permacultura é o que já se fazia há muitos anos.",c:["la permacultura es lo que ya hacían las personas hace muchos años"]},
 {q:3,s:[1,8,4],t:"A natureza se repara sozinha quando uma árvore cai; cada rio tem sua particularidade.",c:["ella sola se va a restablecer nuevamente","nunca va a haber una reparación total"]},
 {q:5,s:[11,4],t:"A Huipala é um termômetro para si mesmo. Descreve as cores, do alerta ao bosque que cria sua própria água.",c:["un termómetro para uno mismo"]},
 {q:6,s:[5,2],t:"O cuidado é das mulheres; as oportunidades ficam com os homens.",c:["la intención de cuidado y de reparación es bastante en las mujeres"]},
 {q:6,s:[7,11,3],t:"O riso reflete; as pessoas voltam a ser crianças, transparentes.",c:["esa risa les refleja… se vuelven niños otra vez","todos y todas somos artistas"]},
 {q:8,s:[2,5],t:"Cooperar, refazer laços.",c:["no romper los lazos, más bien rehacer lazos"]}
]},
{id:"lexie",name:"Lexie Crawford",role:"Bióloga e micóloga, Laboratório Amisacho",place:"Lago Agrio",date:"07.02.25",files:["Lexie take 1–3"],ex:[
 {q:1,s:[6,9,4],t:"Veio por três meses e ficou. Errar, aprender, expandir; o laboratório-labirinto.",c:["para mí la vida es una experiencia y sigo inspirándome y sigo aprendiendo","es difícil soñar de qué es posible si nunca has tenido la oportunidad"]},
 {q:2,s:[5,2],t:"Um curso de abelhas nativas a levou à rede da Clínica.",c:["técnicas de regenerar la vida, y celebrar la vida","fue un proceso de mucho orgullo"]},
 {q:4,s:[6,2],t:"Ensinar o solo é apaixonar-se por ele.",c:["enamoramos con este suelo vivo que estamos cultivando"]},
 {q:7,s:[10,8,11],t:"A memória das plantas é também a memória delas com os humanos. Amisacho: o nome sumiu com o bambu.",c:["la memoria de las plantas con nosotros los humanos","semillas, saberes y sabores","el nombre para una planta… tiene una historia"]},
 {q:6,s:[1,10,5],t:"As mulheres são guardiãs do território desde o lar.",c:["la relación entre el cuerpo y el territorio","somos fértiles… crear y regenerar"]},
 {q:8,s:[10,2,1],t:"Trabalhar como os fungos: tua sobrevivência melhora a minha.",c:["yo crezco al verte crecer y crecemos juntos","cuando perdemos la creatividad, perdemos el ánimo"]}
]},
{id:"arley",name:"Arley (Ale) Payaguaje",role:"Siekopai, Fundación Yakum",place:"Sekoya Remolino",date:"2025",files:["entrevista Arley take 1–4"],ex:[
 {q:1,s:[8,4,6],t:"A lista de 88 frutas dos avós em Lagartococha; redescobriu 25. Não sabia nem a cor.",c:["no sabía cómo era el color, la fruta","Sí se puede soñar, pero hay que perseguir el sueño"]},
 {q:4,s:[8,10],t:"Alimento sagrado e nostálgico; uma fruta por mês; o bosque vale mais que o ouro.",c:["una fuente de alimentación muy sagrada, muy nostálgica","el bosque vale más que el oro"]},
 {q:2,s:[5,6],t:"Conheceu Adolfo aos 12 anos; uma cadeia de aprendizagem.",c:["es como una cadena de aprendizaje"]},
 {q:3,s:[5,10],t:"Reparar do menor ao maior; a fé da Clínica na natureza.",c:["confían mucho en la naturaleza porque saben hacer milagros"]},
 {q:7,s:[11,8,4],t:"Um guia com nomes paicoca e um calendário lunar de 128 frutas.",c:["entendemos realmente a la planta, la convivencia de la planta","para siempre no se pierda la información"]},
 {q:8,s:[10,2,3],t:"No bosque há muitos espíritos: professores, guias, farmácia.",c:["con el bosque, son completos","ese cansancio le va a devolver más fuerza si… lo haces con el corazón"]}
]},
{id:"petra",name:"Petra & Johannes",role:"Casal austríaco, finca Beso de la Amazonía",place:"Amazonas",date:"23.02.25",files:["entrevista Petra e Johannes take 1–3"],ex:[
 {q:1,s:[9,10,12],t:"O sonho da autonomia alimentar; o respeito à natureza como valor maior.",c:["para mí siempre era un sueño la autarquía","Esta idea que el hombre puede mejorar la naturaleza… nos parece loca"]},
 {q:2,s:[5],t:"Um vídeo de girassóis sem químicos; o movimento tem de ser dos equatorianos.",c:["tiene que ser un movimiento de ecuatorianos. Es su tierra"]},
 {q:4,s:[8,10],t:"Perma = para sempre; o preço barato esconde o dano à terra.",c:["Perma dice que para siempre","¿Qué futuro dejamos para nuestros nietos?"]},
 {q:5,s:[11,5,2],t:"O valor está em quem visita e aconselha; as sementes chegam com histórias.",c:["esta planta le gusta mucho estar en compañía con otra","Te sientes como en una familia grande"]},
 {q:8,s:[4,6,1],t:"Não se frustrar; observar o que a terra dá sem esforço.",c:["esta tierra no es para este frejol y listo","No es solamente la plata… Es mucho más de poder vivir"]}
]},
{id:"gloria",name:"Gloria",role:"Shuar, guardiã de sementes, reserva Sharup",place:"Sharup",date:"25.11.24",files:["Rec 001–003 Gloria Sharup"],ex:[
 {q:2,s:[12,8,11],t:"Também fumigavam e pescavam sem cuidado; a Clínica ajudou a recuperar o saber antigo e a reserva.",c:["nosotros hemos sido una persona que también fumiga","podemos mirar la belleza de las dantas, de los venados"]},
 {q:1,s:[3,2,8],t:"Recolhe as sementes medicinais da mãe e as esconde sob as árvores; passa o saber às filhas.",c:["yo nací con ese don de ayudar a la gente","nosotros debemos ser felices hasta para morir"]},
 {q:3,s:[1],t:"Reparar é recuperar o que se perdeu.",c:["recuperar lo que se perdió, remediar lo que está dañado"]},
 {q:4,s:[6,7,12],t:"Experimenta: folha de tomate como fungicida; «a bananeira dos meus sonhos» em terra dura.",c:["nosotros somos sabios, si no es que dormimos a nuestra memoria","me siento libre, me siento feliz, capaz de todo"]},
 {q:6,s:[3,10],t:"Ver cortar uma planta medicinal de 60 anos parte a alma.",c:["eso a mí me parte el alma","la felicidad es vivir tranquilo… disfrutar de la belleza"]},
 {q:7,s:[11,8,12],t:"Uma enciclopédia com os nomes originais, para a geração já mestiça não esquecer.",c:["no pueden olvidarse de qué viene la planta, cómo nació esa planta, cómo se llama","nuestras civilizaciones como que apagó eso"]},
 {q:8,s:[9,6,5],t:"As mulheres podem defender e criar; estudar as plantas, experimentar.",c:["hay que estudiar a las plantas, experimenten, no se queden","manos que dan, manos que reciben"]}
]},
{id:"carmenr",name:"Carmen Rivera",role:"Jovem Shuar, restauradora de territórios",place:"Sharup",date:"25.11.24",files:["Rec 004–006 Carmen Rivera"],ex:[
 {q:2,s:[9,5,11],t:"Comunidade de fronteira que ninguém conhecia; a Clínica é esperança para quem preserva o bosque.",c:["es una esperanza para aquellos pueblos y nacionalidades que preservamos nuestros bosques","nos abren los ojos"]},
 {q:3,s:[8,10,12],t:"Que volte a ser como quando eram crianças; reparar a partir do sentir e do saber ancestral.",c:["queremos que esto sea como antes, como cuando éramos niños","que nos sintamos bien con nuestro entorno"]},
 {q:6,s:[6,7],t:"Resistir pela presença e pelo exemplo; o saber que vem com a experiência.",c:["el conocimiento valioso es aquel que se lleva de la mano con la experiencia"]},
 {q:7,s:[11,10],t:"O porquê do nome revela o religioso, o medicinal, o parecido com um bicho.",c:["al saber el por qué tiene ese nombre podemos entender el punto… religioso o… medicinal"]},
 {q:8,s:[5,9],t:"A força está na união; nunca desmaiar.",c:["la fuerza la hace la unión","nunca desmayar"]}
]},
{id:"paulina",name:"Paulina",role:"Jovem Shuar",place:"Sharup",date:"25.11.24",files:["Rec009 Paulina"],ex:[
 {q:2,s:[11,12,10],t:"Viver na natureza é diferente de valorizá-la.",c:["me abrió prácticamente los ojos hacia la naturaleza","es muy distinto vivir en la naturaleza a valorar la naturaleza"]},
 {q:4,s:[6,5,8],t:"Levou o que aprendeu ao pai que fumigava; uma comunidade cheia de frutas.",c:["cuando uno aprende, no sólo se queda con el conocimiento, sino trata de enseñar"]},
 {q:3,s:[1,10],t:"Reparar é plantar árvores que soltam folhas, como a goiabeira.",c:["Reparar algo que está dañado"]},
 {q:7,s:[11,4],t:"O nome orienta o uso.",c:["por los nombres o por su figura uno los identifica"]},
 {q:8,s:[2,9,12],t:"Nada é impossível, passo a passo, com amor.",c:["nada es imposible","la clínica nos ha enseñado a valorar más lo que nosotros somos"]}
]}
];
const THREADS=[
 {t:"A Clínica nasce para devolver a cor",s:[3,7,1],p:"Adolfo situa a origem da Clínica no momento em que os desenhos das crianças da fronteira fumigada perderam a cor. É a mesma matéria da mandala: aquarela, pigmento, água.",q:"¿Cómo recuperamos el color en los dibujos de unos niños…?",src:"Adolfo, take 1"},
 {t:"A Huipala é uma mandala de cores própria",s:[11,8,9],p:"A certificação sobe do vermelho (perigo) ao roxo, e o branco é a utopia. Assim como a mandala, é cíclica e não termina: Bella teme parar se ganhar a cor, María desce um companheiro de volta ao vermelho.",q:"si nos daban ese color, como que ya parábamos",src:"Bella, entrevista 5",wiphala:true},
 {t:"A reparação começa por dentro",s:[12,3],p:"Autoconhecimento atravessa María, Bella, Carlos e Adolfo: antes da finca, a mudança de mentalidade; antes do Estado, o «repararnos».",q:"La que tengo que cambiar soy yo",src:"María, take 7"},
 {t:"O tempo da terra",s:[8,6],p:"Quatro, cinco anos para o químico sair do solo; frutas que só dão em cinco anos; avós que ensinam e netos que herdam. A (in)finitude é o sentido mais presente nas falas sobre permacultura.",q:"hay un tiempo hasta para reparar",src:"María, take 4"},
 {t:"A natureza como rede e como sujeito",s:[10,2],p:"Fungos que se dão as mãos, o solo que se defende, os espíritos do bosque. O cosmos aparece como companhia, não como recurso.",q:"si ellos, que no hablan, se tejen tan bonito y se ayudan, ¿por qué los seres humanos hacemos lo contrario?",src:"María, take 3"},
 {t:"O que move as pessoas: um ponto de virada",s:[9,3,5],p:"Na P2, quase todas as histórias têm um momento que muda a vida: o paciente com tétano, o acidente de carro, as crianças sem cor, um convite em casa, uma feira, um cartaz na estrada.",q:"fue como el detonante",src:"Carlos, entrevista 1"},
 {t:"Flores para dar cor",s:[2,1,7],p:"Bella planta uma flor ao lado do llantén só para dar cor; Arley procura frutas dos avós sem saber de que cor eram. A cor volta como alegria e como memória.",q:"le planté una flor… para darle el color, esa alegría al espacio",src:"Bella, entrevista 2"},
 {t:"Nomear é lembrar",s:[11,8,10],p:"Na P7, os nomes das plantas carregam mito, rito e uso. Perder o bosque é perder a língua: o nome Amisacho desapareceu junto com o bambu que lhe dava nome.",q:"cuando se pierde el bosque, se pierde el idioma",src:"Lexie, take 2"}
];

const S=id=>SENSES[id-1];
const state={q:null,p:null,sense:null,focus:null};
const ALL=[];PEOPLE.forEach(p=>p.ex.forEach((e,i)=>ALL.push({...e,pid:p.id,person:p,key:p.id+"-"+i})));
const visible=e=>(state.q==null||e.q===state.q)&&(state.p==null||e.pid===state.p);
const NS="http://www.w3.org/2000/svg";
const el=(t,a={},parent)=>{const n=document.createElementNS(NS,t);for(const k in a)n.setAttribute(k,a[k]);if(parent)parent.appendChild(n);return n};
const R0=58,R1=232,RL=272,ring=q=>R0+(R1-R0)*(q-0.5)/8;
const ang=i=>(-90+i*30)*Math.PI/180;
const pt=(r,a)=>[r*Math.cos(a),r*Math.sin(a)];

function arc(r1,r2,a1,a2){const[x1,y1]=pt(r2,a1),[x2,y2]=pt(r2,a2),[x3,y3]=pt(r1,a2),[x4,y4]=pt(r1,a1);return`M${x1},${y1}A${r2},${r2} 0 0 1 ${x2},${y2}L${x3},${y3}A${r1},${r1} 0 0 0 ${x4},${y4}Z`}

function buildMandala(){
 const rings=document.getElementById("rings"),sec=document.getElementById("sectors"),lab=document.getElementById("labels");
 for(let q=1;q<=8;q++){el("circle",{r:R0+(R1-R0)*q/8,fill:"none",stroke:"var(--line)","stroke-width":q===2?1.4:.7,"stroke-dasharray":q===2?"":"2 3"},rings)}
 el("circle",{r:R0,fill:"none",stroke:"var(--line)"},rings);
 SENSES.forEach((s,i)=>{
  const a1=ang(i)-Math.PI/12+0.012,a2=ang(i)+Math.PI/12-0.012;
  const g=el("g",{class:"sector",tabindex:"0",role:"button","aria-label":s.name,"data-id":s.id},sec);
  el("path",{d:arc(R0,R1,a1,a2),fill:s.c,"fill-opacity":.13},g);
  el("path",{d:arc(R1+4,R1+26,a1,a2),fill:s.c,"fill-opacity":.92},g);
  g.addEventListener("click",()=>selectSense(s.id));
  g.addEventListener("keydown",ev=>{if(ev.key==="Enter"||ev.key===" "){ev.preventDefault();selectSense(s.id)}});
  const a=ang(i),[lx,ly]=pt(RL+12,a);
  const t=el("text",{x:lx,y:ly,"text-anchor":Math.abs(Math.cos(a))<.2?"middle":(Math.cos(a)>0?"start":"end"),"dominant-baseline":"middle","font-size":13,"font-weight":600,fill:"var(--ink)",style:"cursor:pointer;font-family:var(--f-ui)"},lab);
  t.textContent=s.name;t.addEventListener("click",()=>selectSense(s.id));
  const[nx,ny]=pt(R1+15,a);
  const n=el("text",{x:nx,y:ny,"text-anchor":"middle","dominant-baseline":"central","font-size":11,"font-weight":700,fill:"#fff","pointer-events":"none",style:"font-family:var(--f-ui)"},lab);n.textContent=s.id;
 });
}

const flags=cs=>(cs||[]).map(c=>`<img class="pc-flag" src="/flags/${c.code.toLowerCase()}.svg" alt="${esc(c.name)}" title="${esc(c.name)}" width="21" height="14">`).join("");
const INFO=Object.fromEntries(peopleData.people.map(p=>[p.id,p]));
function personCardHTML(id){
 const p=INFO[id];if(!p)return"";
 const c=counts(e=>e.pid===id),top=SENSES.slice().sort((a,b)=>c[b.id]-c[a.id]).filter(s=>c[s.id]).slice(0,3);
 const rel=(p.relations||[]).map(r=>`${esc(r.type)}${r.confirmed?"":" (a confirmar)"}`);
 const place=[p.home.community,p.home.place].filter(Boolean).join(", ");
 const ints=p.interviews.map(i=>i.date.split("-").reverse().join(".")).join(" · ");
 return`<b class="pc-name">${esc(p.fullName)}<span class="pc-flags">${flags(p.countries)}</span></b>
 <span class="pc-sub">${esc(place)}</span>
 <p>${esc(p.summary)}</p>
 <dl>
  <dt>Origem</dt><dd>${(p.countries||[]).map(c=>esc(c.name)).join(" e ")}${p.countries&&p.countries.length?" · ":""}${esc(p.origin)}</dd>
  <dt>Papéis</dt><dd>${p.roles.map(esc).join("; ")}</dd>
  <dt>Na Clínica</dt><dd>${p.clinic.since?esc(p.clinic.since)+". ":""}${esc(p.clinic.how)}</dd>
  ${rel.length?`<dt>Relações</dt><dd>${rel.join("; ")}</dd>`:""}
  <dt>Entrevista</dt><dd>${esc(ints)}</dd>
 </dl>
 ${top.length?`<span class="pc-senses">${top.map(s=>`<span><i style="background:${s.c}"></i>${s.name}</span>`).join("")}</span>`:""}`;
}
function buildPersonCards(){
 const root=document.querySelector(".md");if(!root)return;
 const card=document.createElement("div");card.className="md-card";card.hidden=true;card.setAttribute("role","tooltip");root.appendChild(card);
 let cur=null;
 const show=t=>{
  const id=t.dataset.person;if(cur===t)return;cur=t;
  card.innerHTML=personCardHTML(id);card.hidden=false;
  const r=t.getBoundingClientRect(),w=card.offsetWidth,h=card.offsetHeight,vw=document.documentElement.clientWidth,vh=window.innerHeight;
  let x=Math.max(8,Math.min(r.left,vw-w-8)),y=r.bottom+8;if(y+h>vh-8)y=Math.max(8,r.top-h-8);
  card.style.left=x+"px";card.style.top=y+"px";
 };
 const hide=()=>{cur=null;card.hidden=true};
 root.addEventListener("mouseover",e=>{const t=e.target.closest("[data-person]");if(t)show(t)});
 root.addEventListener("mouseout",e=>{const t=e.target.closest("[data-person]");if(t&&!t.contains(e.relatedTarget))hide()});
 root.addEventListener("focusin",e=>{const t=e.target.closest("[data-person]");if(t)show(t)});
 root.addEventListener("focusout",hide);
 window.addEventListener("scroll",hide,{passive:true});
}

function buildQA(){
 const box=document.getElementById("qa");if(!box)return;
 box.innerHTML=QUESTIONS.map(q=>{
  const ex=ALL.filter(e=>e.q===q.id);
  const who=PEOPLE.filter(p=>ex.some(e=>e.pid===p.id));
  const miss=PEOPLE.filter(p=>!who.includes(p));
  const [num,short]=q.s.split(" · ");
  return`<details class="qa"${q.id===2?" open":""}>
  <summary><span class="qa-num">${esc(num)}</span><span class="qa-head"><b>${esc(short)}</b><span class="qa-q">${esc(q.l)}</span></span><span class="qa-count">${who.length} de ${PEOPLE.length} pessoas</span></summary>
  <div class="qa-list">${who.map(p=>{const info=INFO[p.id];return`<article class="qa-p">
   <header><b data-person="${p.id}" tabindex="0">${esc(p.name)}</b>${info?`<span class="pc-flags">${flags(info.countries)}</span>`:""}<span class="qa-meta">${esc(p.place)}</span></header>
   ${ex.filter(e=>e.pid===p.id).map(e=>`<div class="qa-ex">${pips(e.s)}<p class="gist">${esc(e.t)}</p>${e.c.map(c=>`<blockquote>«${esc(c)}»</blockquote>`).join("")}</div>`).join("")}
  </article>`}).join("")}</div>
  ${miss.length?`<p class="qa-miss">Sem trecho registrado nesta pergunta: ${miss.map(p=>esc(p.name)).join(", ")}.</p>`:""}
 </details>`}).join("");
}

function buildHover(){
 const svg=document.getElementById("mandala"),box=svg.parentElement;
 const hl=el("path",{fill:"none",stroke:"var(--ink)","stroke-width":2,"pointer-events":"none",opacity:0},svg);
 const tip=document.createElement("div");tip.className="md-tip";tip.hidden=true;box.appendChild(tip);
 const band=(R1-R0)/8;let last="";
 const hide=()=>{tip.hidden=true;hl.setAttribute("opacity",0);last=""};
 const move=ev=>{
  const m=svg.getScreenCTM();if(!m)return;
  const p=new DOMPoint(ev.clientX,ev.clientY).matrixTransform(m.inverse());
  const r=Math.hypot(p.x,p.y);
  if(r<R0||r>R1){hide();return}
  const q=Math.min(8,Math.floor((r-R0)/band)+1);
  let deg=Math.atan2(p.y,p.x)*180/Math.PI+90;if(deg<0)deg+=360;
  const i=Math.round(deg/30)%12,s=SENSES[i],Q=QUESTIONS[q-1],key=i+"-"+q;
  if(key!==last){
   last=key;
   hl.setAttribute("d",arc(R0+band*(q-1),R0+band*q,ang(i)-Math.PI/12,ang(i)+Math.PI/12));hl.setAttribute("opacity",1);
   const n=ALL.filter(e=>e.q===q&&e.s.includes(s.id)).length;
   tip.innerHTML=`<b>${esc(Q.s.split(" · ")[1])}</b><span class="tq">${esc(Q.l)}</span><span class="ts"><i style="background:${s.c}"></i>${esc(s.name)} · ${n} trecho${n===1?"":"s"}</span>`;
  }
  tip.hidden=false;
  const br=box.getBoundingClientRect(),cx=ev.clientX-br.left,cy=ev.clientY-br.top,w=tip.offsetWidth,h=tip.offsetHeight;
  let x=Math.max(0,Math.min(cx-w/2,br.width-w)),y=cy-h-16;if(y<0)y=cy+18;
  tip.style.left=x+"px";tip.style.top=y+"px";
 };
 svg.addEventListener("pointermove",move);svg.addEventListener("pointerdown",move);svg.addEventListener("pointerleave",hide);
}

function drawDots(){
 const g=document.getElementById("dots");g.innerHTML="";
 const cells={};
 ALL.forEach(e=>e.s.forEach((sid,rank)=>{const k=sid+"-"+e.q;(cells[k]=cells[k]||[]).push({e,sid,rank})}));
 Object.values(cells).forEach(list=>{
  const n=list.length;
  list.forEach((d,j)=>{
   const i=d.sid-1,span=Math.PI/6*0.78;
   const a=ang(i)+(n===1?0:(-span/2+span*j/(n-1)));
   const rr=ring(d.e.q)+((j%2)?4:-4)*(n>4?1:0);
   const[x,y]=pt(rr,a);
   const on=visible(d.e)&&(state.sense==null||d.sid===state.sense);
   const isF=state.focus===d.e.key;
   const c=el("circle",{cx:x,cy:y,r:(d.rank===0?6.2:4.2)+(isF?2.5:0),fill:S(d.sid).c,stroke:isF?"var(--ink)":"var(--bg)","stroke-width":isF?2:1.2,opacity:on?1:.12,class:"dot",tabindex:on?"0":"-1"},g);
   const tt=el("title",{},c);tt.textContent=d.e.person.name+" · P"+d.e.q+" · "+S(d.sid).name;
   c.addEventListener("click",()=>{state.focus=d.e.key;state.sense=d.sid;render()});
   c.addEventListener("keydown",ev=>{if(ev.key==="Enter"){state.focus=d.e.key;state.sense=d.sid;render()}});
  });
 });
 document.querySelectorAll(".sector").forEach(s=>{const id=+s.dataset.id;s.style.opacity=state.sense==null||state.sense===id?1:.35});
 const c=document.getElementById("center");c.innerHTML="";
 const s=state.sense?S(state.sense):null;
 el("circle",{r:R0-6,fill:s?s.c:"var(--surface-raised)","fill-opacity":s?.9:1,stroke:"var(--line)"},c);
 const t1=el("text",{y:s?-4:-6,"text-anchor":"middle",style:"font-family:var(--f-display)","font-size":s?(s.name.length>11?15:19):17,fill:s?"#fff":"var(--ink)"},c);t1.textContent=s?s.name:"12 sentidos";
 const t2=el("text",{y:14,"text-anchor":"middle","font-size":9.5,fill:s?"#fff":"var(--muted)",style:"font-family:var(--f-ui)"},c);t2.textContent=s?s.pig:"15 vozes · 8 perguntas";
}

function counts(filterFn){const c=Array(13).fill(0);ALL.filter(filterFn).forEach(e=>e.s.forEach(s=>c[s]++));return c}
const esc=s=>s.replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
const pips=ids=>`<span class="pips">${ids.map(i=>`<span class="pip" title="${S(i).name}" style="background:${S(i).c}"></span>`).join("")}</span>`;

function exHTML(e){return`<div class="ex" ${state.focus===e.key?'style="background:var(--wash);margin:0 -10px;padding:12px 10px;border-radius:10px"':""}><div class="who"><b data-person="${e.pid}" tabindex="0">${esc(e.person.name)}</b><span class="qtag">${QUESTIONS[e.q-1].s}</span>${pips(e.s)}</div><p class="gist">${esc(e.t)}</p>${e.c.map(q=>`<blockquote>«${esc(q)}»</blockquote>`).join("")}</div>`}

function renderPanel(){
 const P=document.getElementById("panel");
 const scope=[state.q?QUESTIONS[state.q-1].s:null,state.p?PEOPLE.find(p=>p.id===state.p).name:null].filter(Boolean).join(" · ");
 if(state.sense==null){
  const c=counts(visible),max=Math.max(1,...c.slice(1));
  const order=SENSES.slice().sort((a,b)=>c[b.id]-c[a.id]);
  const person=state.p?PEOPLE.find(p=>p.id===state.p):null;
  P.innerHTML=`<h3>${scope?esc(scope):"Todas as entrevistas"}</h3>
  ${person?`<p class="def"><b data-person="${person.id}" tabindex="0">${esc(person.name)}</b> · ${esc(person.role)} · ${esc(person.place)}, ${esc(person.date)}</p>`:`<p class="def">Que sentidos aparecem com mais força ${state.q?"nesta pergunta":"no conjunto das falas"}. Clique em uma barra ou numa cor da mandala para ler os trechos.</p>`}
  <div class="bars">${order.map(s=>`<div class="bar" data-s="${s.id}" role="button" tabindex="0"><span>${s.name}</span><span class="track"><span class="fill" style="width:${c[s.id]/max*100}%;background:${s.c}"></span></span><span class="v">${c[s.id]}</span></div>`).join("")}</div>
  ${person?ALL.filter(visible).map(exHTML).join(""):""}`;
  P.querySelectorAll(".bar").forEach(b=>{const f=()=>selectSense(+b.dataset.s);b.addEventListener("click",f);b.addEventListener("keydown",ev=>{if(ev.key==="Enter")f()})});
  return;
 }
 const s=S(state.sense);
 let list=ALL.filter(e=>visible(e)&&e.s.includes(s.id));
 list.sort((a,b)=>(a.s.indexOf(s.id)-b.s.indexOf(s.id))||(a.q-b.q));
 if(state.focus){const f=list.find(e=>e.key===state.focus);if(f)list=[f,...list.filter(e=>e!==f)]}
 P.innerHTML=`<div class="sense-head"><span class="swatch" style="background:${s.c}"></span><div><div class="nm">${s.id}. ${s.name}</div><div class="pg">${s.pig}${scope?" · "+esc(scope):""}</div></div></div>
 <p class="def">${esc(s.def)}</p><p class="lens">${esc(s.lens)}</p>
 <h3>${list.length} trecho${list.length===1?"":"s"}</h3>
 ${list.length?list.map(exHTML).join(""):`<p class="empty">Nenhum trecho com este sentido neste recorte.</p>`}
 <p style="margin:14px 0"><button class="chip" id="clearS">Ver todos os sentidos</button></p>`;
 document.getElementById("clearS").addEventListener("click",()=>{state.sense=null;state.focus=null;render()});
}

function selectSense(id){state.sense=state.sense===id?null:id;state.focus=null;render()}

function buildChips(){
 const qr=document.getElementById("qRow"),pr=document.getElementById("pRow");
 const mk=(row,label,val,key,n)=>{const b=document.createElement("button");b.className="chip";b.innerHTML=esc(label)+(n!=null?`<span class="n">${n}</span>`:"");b.dataset.key=key;b.dataset.val=val==null?"":val;b.addEventListener("click",()=>{state[key]=(state[key]===val||val==null)?null:val;state.focus=null;render()});row.appendChild(b)};
 mk(qr,"Todas",null,"q");QUESTIONS.forEach(q=>mk(qr,q.s,q.id,"q",ALL.filter(e=>e.q===q.id).length));
 mk(pr,"Todas",null,"p");PEOPLE.forEach(p=>mk(pr,p.name,p.id,"p"));pr.querySelectorAll(".chip").forEach(b=>{if(b.dataset.val)b.dataset.person=b.dataset.val});
}
function syncChips(){document.querySelectorAll(".chip[data-key]").forEach(b=>{const k=b.dataset.key,v=b.dataset.val;const cur=state[k];const val=v===""?null:(k==="q"?+v:v);b.setAttribute("aria-pressed",String(cur===val))})}

function heat(tableId,rows,rowLabel,filterFor,prime){
 const T=document.getElementById(tableId);
 const data=rows.map(r=>counts(filterFor(r)));
 const max=Math.max(1,...data.flatMap(c=>c.slice(1)));
 let h=`<thead><tr><th></th>${SENSES.map(s=>`<th><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${s.c};margin-bottom:4px"></span> ${s.name}</th>`).join("")}</tr></thead><tbody>`;
 rows.forEach((r,ri)=>{h+=`<tr class="${prime&&prime(r)?"prime":""}"><th${tableId==="heatP"?` data-person="${r.id}" tabindex="0"`:""}>${esc(rowLabel(r))}</th>`;SENSES.forEach(s=>{const v=data[ri][s.id];const a=v?0.18+0.82*v/max:0;const dark=a>.55;h+=`<td class="${v?"":"z"}" data-r="${ri}" data-s="${s.id}" style="background:${v?hexA(s.c,a):"var(--surface)"};color:${dark?"#fff":"var(--ink)"}" title="${esc(rowLabel(r))} · ${s.name}: ${v}">${v||"·"}</td>`});h+="</tr>"});
 T.innerHTML=h+"</tbody>";
 T.querySelectorAll("td").forEach(td=>td.addEventListener("click",()=>{const r=rows[+td.dataset.r];if(tableId==="heatP"){state.p=r.id;state.q=null}else{state.q=r.id;state.p=null}state.sense=+td.dataset.s;state.focus=null;render();document.getElementById("mandala").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth",block:"start"})}));
}
function hexA(hex,a){const n=parseInt(hex.slice(1),16);return`rgba(${n>>16},${(n>>8)&255},${n&255},${a.toFixed(2)})`}

function buildThreads(){
 document.getElementById("threads").innerHTML=THREADS.map(t=>`<article class="thread">${pips(t.s)}<div class="tt">${esc(t.t)}</div>${t.wiphala?`<div class="md-wiph" aria-label="Escala Huipala">${["--w1","--w2","--w3","--w5","--w6","--w7","--w4"].map(c=>`<span style="background:var(${c})"></span>`).join("")}</div><div class="src">vermelho → laranja → amarelo → verde → azul → roxo, e o branco como utopia</div>`:""}<p>${esc(t.p)}</p><blockquote>«${esc(t.q)}»</blockquote><div class="src">${esc(t.src)}</div></article>`).join("");
 document.getElementById("qlist").innerHTML=QUESTIONS.map(q=>`<li><b>${q.s.split(" · ")[1]}.</b> ${esc(q.l)}</li>`).join("");
 document.getElementById("files").innerHTML=PEOPLE.map(p=>`<div><b data-person="${p.id}" tabindex="0">${esc(p.name)}</b>: ${p.files.map(esc).join(", ")}</div>`).join("");
}

function render(){syncChips();drawDots();renderPanel()}
buildMandala();buildHover();buildPersonCards();buildChips();buildQA();buildThreads();
heat("heatP",PEOPLE,p=>p.name,p=>e=>e.pid===p.id);
heat("heatQ",QUESTIONS,q=>q.s,q=>e=>e.q===q.id,q=>q.id===2);
render();

}
