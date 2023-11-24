//getting an element from html and storing in a variable in a DOM
var questionTitle = document.querySelector(".question-title");
var answerContainer = document.querySelector(".answer-container");
var options = document.querySelectorAll(".option");

//adding the question to h1 tag
questionTitle.textContent = "What is your name?";

//array of answers created with different option
var answersArr = ["Salida", "Hari", "Ram", "Maharjan"];

//looping the option to assign a different values from answerArr
for (var i = 0; i < answersArr.length; i++) {
  options[i].textContent = answersArr[i];
}
