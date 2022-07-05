import randomIndex from "./services/randomIndex.js";
const app = document.querySelector("#app");
//Información de la app
const categoriesList = ["Diga una canción", "Responda", "Actúe", "Dibuje"];
const questionsLists = {
  "Diga una canción": ["Arroz", "Mujeriego", "Dolor", "Venas"],
  Responda: [
    "¿De qué país es Jean Claude Van Damme?",
    "¿Cuántas partículas subatómicas existen?",
    "¿Eres un ser humano?",
  ],
  Actúe: ["Joker", "Batman", "Superman", "Spider-Man"],
  Dibuje: ["Murciélago", "Rinoceronte", "Puerco Araña"],
};
const setCurrentQuestionIndex = (questionsListsCategory) => {
    if(questionIndexesplayed===questionsListsCategory.length){
        questionIndexesplayed=[];
    }
    return randomIndex(questionIndexesplayed,questionsListsCategory.length-1);
};
let currentCategory = categoriesList[0];
let currentQuestion = "";
let questionIndexesplayed=[];
let currentQuestionIndex =setCurrentQuestionIndex(questionsLists[currentCategory]);
questionIndexesplayed.push(currentQuestionIndex)


const setCurrentCategory = (newCurrentCategory) => {
  currentCategory = newCurrentCategory;
};
const setCurrentQuestion = (newCurrentQuestion) => {
  currentQuestion = newCurrentQuestion;
};

const selectCategory = (
  categoriesList,
  currentCategory,
  setCurrentCategory
) => {
  const select = document.createElement("select");
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
    setCurrentCategory(e.target.value);
    setCurrentQuestion("");
    setCurrentQuestionIndex(0);
    render();
  });
  return select;
};
const playButton = (currentCategory) => {
  const button = document.createElement("button");
  button.innerHTML = "Juega";
  button.addEventListener("click", () => {
    let questionListsCategory = questionsLists[currentCategory];
    let newCurrentQuestion = questionListsCategory[currentQuestionIndex];
    setCurrentQuestion(newCurrentQuestion);
    setCurrentQuestionIndex(currentQuestionIndex + 1, questionListsCategory);
    render();
  });
  return button;
};
const question = (currentQuestion) => {
  const questionContaner = document.createElement("div");
  const question = document.createElement("p");
  question.appendChild(document.createTextNode(currentQuestion));
  questionContaner.appendChild(question);
  return questionContaner;
};
const render = () => {
  app.innerHTML = "";
  app.appendChild(
    selectCategory(categoriesList, currentCategory, setCurrentCategory)
  );
  app.appendChild(playButton(currentCategory));
  app.appendChild(question(currentQuestion));
};
render();
const array=[0,1,2,3,4,5,6,7,8,9]
let indice=randomIndex(array, 10)

