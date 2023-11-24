//getting an element from html and storing in a variable in a DOM
var questionTitle = document.querySelector(".question-title");
var answerContainer = document.querySelector(".answer-container");
var options = document.querySelectorAll(".option");

//array of answers created with different option
var answersArr = ["Salida", "Hari", "Ram", "Maharjan"];

//array of questions
var questionsArr = [
  "What is your name?",
  "Where do you live?",
  "What is you hobby?",
];

//adding the question to h1 tag
questionTitle.textContent = "What is your name?";
//looping the option to assign a different values from answerArr
for (var i = 0; i < answersArr.length; i++) {
  options[i].textContent = answersArr[i];
}

//using add event listener to change the question on click
answerContainer.addEventListener("click", function () {
    questionTitle.textContent = questionsArr[1];
});
