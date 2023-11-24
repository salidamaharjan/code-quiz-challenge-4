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
  questionTitle.textContent = questionsArr[indexOfQuestionsArr].question;

  //looping the option to assign a different values from answerArr
  for (var i = 0; i < questionsArr[indexOfQuestionsArr].answer.length; i++) {
    options[i].textContent = questionsArr[indexOfQuestionsArr].answer[i];
  }
}

//using add event listener to change the question on click
answerContainer.addEventListener("click", function () {
  indexOfQuestionsArr++;
  //prepares question when index of questionArr exists
  if(indexOfQuestionsArr < questionsArr.length){
  prepareQuestion();
  }
});
