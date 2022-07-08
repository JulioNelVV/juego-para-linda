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
    "Enamorar",
    "Noches",
    "Recuerdos",
    "Paloma",
    "Lunar",
    "Pollitos",
    "Pez",
    "Fantasía",
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
    "Memoria",
    "Recuerdo",
    "Anhelo",
    "Romance",
    "Baile",
    "Danza",
    "Adrenalina",
    "Físico",
    "Física",
    "Química",
    "Mujeriego",
    "Mentiroso",
    "Sin embargo",
    "Vida",
    "Mía",
    "Gusto",
    "Jovencita",
    "Eso",
    "Chiquitita",
    "Amando",
    "Alas",
    "Sueños",
    "Juventud",

  ],
  Responda: [
    "País que tenga la sílaba 'na'",
    "Animal que empiece con la letra H",
    "Nombre de algún roedor",
    "Personaje de Naruto",
    "Emperador romano",
    "Profeta judío",
    "Animal ovíparo",
    "Ave de vuelo corto",
    "Nombre de un vengador",
    "Marca de ropa",
    "Empresa de videojuegos",
    "Nombre de un videojuego",
    "dios egipcio",
    "Río caudaloso",
    "Jugador de fútbol argentino",
    "Animal que comience con la letra T",
    "País del continente africano",
    "País de Oceanía",
    "Nombre de un postre",
    "Personaje de juego de tronos",
    "Color que tenga la letra M",
    "País con bandera que tenga el color verde",
    "País con billetes de color verde",
    "Animal con joroba",
    "Animal que aulle",
    "Animal que hiberne",
    "Mamífero que viva en el agua",
    "Animal veloz",
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
    "País con mucho petróleo",
    "País con mucho café",
    "Ropa para la nieve",
    "Insecto con luz propia",
    "Raza de perro pequeña",
    "Nombre de un cereal",
    "Nombre de una telenovela",
    "Nombre de una serie de televisión",
    "Apellidos que empiecen con la letra X"
  ],
  Actúe: [
    "Joker",
    "Jack Sparrow",
    "Homero Simpson",
    "Spider-Man",
    "Batman",
    "Cristiano Ronaldo",
    "Novia celosa",
    "Vegeta",
    "Super-Man",
    "Rambo",
    "Zombie",
    "León",
    "Perro",
    "Gato",
    "Soldado",
    "Político", 
    "Ratón",
    "Carro",
    "Bebé",
    "Borracho",
    "Mujer embarazda",
    "Tiburón",
    "Burro",
    "Oveja",
    "Serpiente",
    "Búho",
    "Jirafa",
    "Elefante",
    "Lombriz",
    "Sapo",
    "Bombero",
    "Boxeador",
    "Mesero",
    "Arquero",
    "Panadero",
    "Médico",
    "Ardilla",
    "Anciano",
    "Astronauta",
    "Científico",
  ],
  Dibuje: [
    "Murciélago",
    "Rinoceronte",
    "Goku",
    "Krilin",
    "Elefante",
    "Mil pies",
    "Rosa",
    "Harry Potter",
    "Computador",
    "Palomitas de maíz",
    "Destornillador",
    "Cama",
    "Gafas",
    "Playa",
    "Violín",
    "Guitarra",
    "Piano",
    "Edificio",
    "Dinero",
    "Unicornio",
    "Pegaso",
    "Arpa",
    "Anillo",
    "Abeja",
    "Tulipán",
    "Montaña",
    "Río",
    "Carro",
    "Bicicleta",
    "Motocicleta",
    "Bus",
    "Taxi",
    "Manzana",
    "Naranja",
    "Pera",
    "Limón",
    "Carne",
    "Pollo",
    "Gallina",
    "Gallo",
    "Paloma",
    "Saco",
    "Camisa",
    "Pantalón",
    "Cremallera",
    "Maleta",
    "Lápiz",
    "Cuaderno",
    "Borrador",
    "Bolígrafo",
    "Mesa",
    "Silla",
    "Tabla",
    "Casa",
    "Tienda",
    "Cebolla",
    "Galleta",
    "Botella",
    "Vino",
    "Brocoli",
    "Zanahoria",
    "Frijol",
    "Hoja",
    "Árbol",
    "Pasto",
    "Teclado",
    "Pantalla",
    "Avión",
    "Barco",
    "Mapa",
    "Hilo",
    "Cuerda",
    "Vaso",
    "Jarra",
    "Leche",
    "Vaca",
    "Toro",
    "Caballo",
    "Perro",
    "Gato",
    "Baño",
    "Puerta",
    "Fuego",
    "Alas",
    "Misil",
    "Balas",
    "Espada",
    "Barba",
    "Collar",
    "Reloj",
    "Correa",
    "Medias",
    "Zapato",
    "Pie",
    "Mano",
    "Cabeza",
    "Brazo",
    "Ojos",
    "Orejas",
    "Viento",
    "Lluvia",
    "Sol",
    "Nubes",
    "Cielo",
    "Escuela",
    "Banco",
    "Parque",
    "Cine",
    "Camping",
    "Moneda",
    "Carta",
    "Caja",
    "Pelota",
    "Cubo",
    "Círculo",
    "Triángulo",
    "Pez espada"
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
    option.classList.add("select-category__option")
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
