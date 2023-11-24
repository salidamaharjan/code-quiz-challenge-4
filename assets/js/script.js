//getting an element from html and storing in a variable in a DOM
var questionTitle = document.querySelector(".question-title");
var answerContainer = document.querySelector(".answer-container");
var options = document.querySelectorAll(".option");

//adding the question to h1 tag
questionTitle.textContent = "What is your name?";

//adding answer option to li tag
options[0].textContent = "Salida";
options[1].textContent = "Hari";
options[2].textContent = "Ram";
options[3].textContent = "Maharjan";
