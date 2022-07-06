import randomIndex from "./services/randomIndex.js";
const app = document.querySelector("#app");
//Información de la app
const categoriesList = ["Diga una canción", "Responda", "Actúe", "Dibuje"];
const questionsLists = {
  "Diga una canción": [
    "Arroz",
    "Mujeriego",
    "Dolor",
    "Venas",
    "Amor",
    "Soltero",
    "Odio",
    "Misterio",
    "Ojos",
    "Feliz",
    "Adiós",
    "Camisa",
    "Cerveza",
    "Ron",
    "Enamorar",
    "Noches",
    "Recuerdos",
    "Paloma",
    "Lunar",
    "Luna",
    "Sol",
    "Estrellas",
    "Mar",
    "Oceano",
    "Piel",
    "Dolor",
    "Pasión",
    "Cálido",
    "Besos",
    "Caricias",
    "Sangre",
    "Morir",
    "Crecer",
    "Vivir",
    "Amar",
    "Sombras",
    "Sonrisa",
    "Rosas",
    "Girasoles",
    "Canción",
    "Sin embargo",
    "Dos",
    "Uno",
    "Tres",
    "Quisiera",
    "Reloj",
    "Sueño",
    "Madrugada",
    "Pintor",
    "Corazón",
    "Alma",
    "Pájaro",
    "Ave",
    "León",
    "Tigre",
    "Lluvia",
    "Alma",
    "Herida",
    "Dormido",
    "Cuello",
    "Mano",
    "Peligro",
    "Favorito",
    "Cicatriz",
    "Sanar",
    "Brillar",
    "Gozar",
    "Bailar",
    "Gritar",
    "Pensando",
    "Ti",
    "Tú",
    "Ella",
    "Él",
    "Nosotros",
    "Fuimos",
    "Somos",
    "Amantes",
    "Cama",
    "Sabanas",
    "Mayor",
    "Quería",
    "Interés",
    "Mujer",
    "Hombre",
    "Mami",
    "Día",
    "Dinastía",
    "Fantasías",
    "Loco",
    "Cinturita",
    "Calentados",
    "Malvada",
    "Perversa",
    "Domingo",
    "Cielo",
    "Azul",
    "Rojo",
    "Amarillo",
    "Negro",
    "Negra",
    "Pura",
    "Mentira",
    "Mí",
    "Esperanza",
    "Esperanzas",
    "Luz",
    "Fronteras",
    "Horizonte",
    "Loca",
    "Fiebre",
  ],
  Responda: [
    "País que tenga la sílaba 'na'",
    "Animal que empiece con la letra H",
    "Nombre de algún roedor",
    "Personaje de Naruto",
    "Actriz australiana",
    "Boxeador mexicano",
    "Cantante canadiense",
    "Grupo de rock de los 80's",
    "Pintor Europeo",
    "Emperador romano",
    "Profeta judío",
    "Animal ovíparo",
    "Ave de vuelo corto",
    "Mamífero de mas de una tonelada",
    "Nombre de un vengador",
    "Marca de ropa",
    "Empresa de videojuegos",
    "Nación comunista",
    "Himno de alguna nación con la palabra gloria",
    "Videojuego para celular",
    "Videojuego para computador",
    "dios egipcio",
    "dios nórdico",
    "País con desierto",
    "Cantante Coreano",
    "Jugador de fútbol polaco",
    "Jugador de fútbol mexicano",
    "Jugador de Tennis Ruso",
    "Presidente de algún país menor de 50 años",
    "Animal que comience con la letra T",
    "País del continente africano",
    "País de Oceanía",
    "Nombre de un postre que tenga melocotón",
    "Personaje de juego de tronos",
    "Jugador profesional de League of legends",
    "Unidad de medida",
    "Color que tenga la letra M",
    "País con bandera que tenga el color verde",
    "País con billetes de color verde",
    "Animal con joroba",
    "Animal que aulle",
    "Animal que hiberne",
    "Mamífero que vive en el agua",
    "Dinosaurio gigante",
    "Animal veloz",
    "Ganador de más de dos premios oscar",
    "Prenda de vestir con la letra P",
    "Ciudad con más de 2 millones de habitantes",
    "Ciudad con canales de agua",
    "Árbol gigante",
    "Fruta tropical",
    "Fruta roja y amarga",
    "Fruta roja y dulce",
    "Fruto seco",
    "Animal rastrero",
    "Animal cuadrúpedo",
    "Bestia mitológica",
    "Héroe griego",
    "Personaje de videojuego",
    "Personaje de película animada",
    "Ciudad con sistema de metro",
    "País con mucho petróleo",
    "País con mucho café",
  ],
  Actúe: [
    "Joker",
    "Batman",
    "Superman",
    "Spider-Man",
    "Como si tuvieras diarrea",
    "Como borracho",
    "Robot",
    "Suegra",
    "Novia celosa",
    "Ladrón",
    "Paloma",
    "Payaso",
    "Thor",
    "Maldita lisiada",
    "Ave",
    "Artista marcial",
  ],
  Dibuje: [
    "Murciélago",
    "Rinoceronte",
    "Puerco Araña",
    "Monte Everest",
    "Goku",
    "Krilin",
    "Gorila lomo plateado",
    "Elefante",
    "Mil pies",
    "Tortuga Ninja",
    "Paisaje natural",
    "Oveja en un ascensor",
    "Escalras eléctricas",
    "Navaja suiza",
    "Rosa",
    "Pollo asado",
    "Harry Potter",
    "Messi",
    "Cristiano Ronaldo",
    "Computador",
    "Palomitas de maíz",
    "Destornillador",
    "Cama",
    "Ajedrez",
    "lágrima",
    "Rostro triste",
    "Cubo en 3D",
    "Casa en 3D",
    "Gafas de sol",
    "Playa",
    "Violín",
    "Guitarra",
    "Piano",
    "Tren de 5 vagones",
    "Hombre cayendo de un edificio",
    "Persona triste",
    "Persona millonaria",
    "Personaje de anime",
    "Actriz rubia",
    "Obra de teatro clásica",
    "Personaje de Garfield",
  ],
};
const setCurrentQuestionIndex = (questionsListsCategory) => {
  if (questionIndexesplayed.length === questionsListsCategory.length) {
    lastIndexPlayed = questionIndexesplayed[questionIndexesplayed.length - 1];
    questionIndexesplayed = [];
    currentQuestionIndex = randomIndex(
      questionIndexesplayed,
      questionsListsCategory.length - 1
    );
    while (lastIndexPlayed === currentQuestionIndex) {
      currentQuestionIndex = randomIndex(
        [lastIndexPlayed],
        questionsListsCategory.length - 1
      );
    }
  } else {
    currentQuestionIndex = randomIndex(
      questionIndexesplayed,
      questionsListsCategory.length - 1
    );
  }
};
let currentCategory = categoriesList[0];
let currentQuestion = "";
let questionIndexesplayed = [];
let lastIndexPlayed = -1;
let currentQuestionIndex = randomIndex(
  questionIndexesplayed,
  questionsLists[currentCategory].length - 1
);
questionIndexesplayed.push(currentQuestionIndex);

const setCurrentCategory = (newCurrentCategory) => {
  currentCategory = newCurrentCategory;
};
const setCurrentQuestion = (newCurrentQuestion) => {
  currentQuestion = newCurrentQuestion;
};
const selectCategory = (categoriesList, setCurrentCategory) => {
  const select = document.createElement("select");
  select.classList.add("select-category");
  let fragment = document.createDocumentFragment();
  categoriesList.forEach((categoryItem) => {
    let option = document.createElement("option");
    option.value = categoryItem;
    option.selected = false;
    if (option.value === currentCategory) {
      option.selected = true;
    }
    option.innerHTML = categoryItem;
    fragment.appendChild(option);
  });

  select.appendChild(fragment);
  select.addEventListener("change", (e) => {
    questionIndexesplayed = [];
    setCurrentCategory(e.target.value);
    setCurrentQuestion("");
    setCurrentQuestionIndex(questionsLists[currentCategory]);

    questionIndexesplayed.push(currentQuestionIndex);
    lastIndexPlayed = -1;
    render();
  });
  return select;
};
const playButton = (currentCategory) => {
  const button = document.createElement("button");
  button.classList.add("play-button");
  button.innerHTML = "Juega";
  button.addEventListener("click", () => {
    let questionListsCategory = questionsLists[currentCategory];
    let newCurrentQuestion = questionListsCategory[currentQuestionIndex];
    setCurrentQuestion(newCurrentQuestion);
    setCurrentQuestionIndex(questionListsCategory);
    questionIndexesplayed.push(currentQuestionIndex);

    render();
  });
  return button;
};
const question = (currentQuestion) => {
  const questionContainer = document.createElement("div");
  questionContainer.classList.add("question-container");
  const question = document.createElement("p");
  question.classList.add("question");
  question.appendChild(document.createTextNode(currentQuestion));
  questionContainer.appendChild(question);
  return questionContainer;
};
const render = () => {
  app.innerHTML = "";
  app.appendChild(selectCategory(categoriesList, setCurrentCategory));
  app.appendChild(playButton(currentCategory));
  app.appendChild(question(currentQuestion));
};
render();
