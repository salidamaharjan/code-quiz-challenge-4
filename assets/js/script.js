//getting an element from html and storing in a variable in a DOM
var questionTitle = document.querySelector(".question-title");
var answerContainer = document.querySelector(".answer-container");
var options = document.querySelectorAll(".option");

//array of object containing question and answer
var questionsArr = [
  {
    question: "What is your name?",
    answer: ["Salida", "Hari", "Ram", "Maharjan"],
  },
  {
    question: "Where do you live?",
    answer: ["UK", "USA", "France", "Italy"],
  },
  {
    question: "What is you hobby?",
    answer: ["Paint", "Cooking", "Dancing", "Listening Music"],
  },
];
//created to change in each click
var indexOfQuestionsArr = 0;

prepareQuestion();

//question and answer placed in a function to execute when called
function prepareQuestion() {
  questionTitle.textContent = questionsArr[indexOfQuestionsArr];

  //looping the option to assign a different values from answerArr
  for (var i = 0; i < answersArr.length; i++) {
    options[i].textContent = answersArr[i];
  }
}

//using add event listener to change the question on click
answerContainer.addEventListener("click", function () {
  indexOfQuestionsArr++;
  prepareQuestion();
});
