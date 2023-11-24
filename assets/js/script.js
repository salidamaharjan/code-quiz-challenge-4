//getting an element from html and storing in a variable in a DOM
var questionTitle = document.querySelector(".question-title");
var answerContainer = document.querySelector(".answer-container");
var options = document.querySelectorAll(".option");

//array of object containing question and answer
var questionsArr = [
  {
    question: "What is your name?",
    answer: [
      {
        name: "Salida",
        checkCorrect: "correct",
      },
      {
        name: "Hari",
        checkCorrect: "incorrect",
      },
      {
        name: "Ram",
        checkCorrect: "incorrect",
      },
      {
        name: "Maharjan",
        checkCorrect: "incorrect",
      },
    ],
  },
  {
    question: "Where do you live?",
    answer: [
      {
        name: "UK",
        checkCorrect: "incorrect",
      },
      {
        name: "USA",
        checkCorrect: "correct",
      },
      {
        name: "France",
        checkCorrect: "incorrect",
      },
      {
        name: "Italy",
        checkCorrect: "incorrect",
      },
    ],
  },
  {
    question: "What is you hobby?",
    answer: [
      {
        name: "Cooking",
        checkCorrect: "incorrect",
      },
      {
        name: "Singing",
        checkCorrect: "incorrect",
      },
      {
        name: "Dancing",
        checkCorrect: "incorrect",
      },
      {
        name: "Listening Music",
        checkCorrect: "correct",
      },
    ],
  },
];
//created to change in each click
var indexOfQuestionsArr = 0;



//calling a function
prepareQuestion();

//question and answer placed in a function to execute when called
function prepareQuestion() {
  questionTitle.textContent = questionsArr[indexOfQuestionsArr].question;

  //looping the option to assign a different values from questionsArr
  for (var i = 0; i < questionsArr[indexOfQuestionsArr].answer.length; i++) {
    options[i].textContent = questionsArr[indexOfQuestionsArr].answer[i].name;
    //setting data attribute to li element which is dynamic
    options[i].setAttribute("data-correct",questionsArr[indexOfQuestionsArr].answer[i].checkCorrect);
  }
}

//using add event listener to change the question on click
answerContainer.addEventListener("click", function (event) {
  //checking if the clicked element is li element
  if (event.target.matches("li") === false) {
    return;
  }
  indexOfQuestionsArr++;
  //prepares question when index of questionArr exists
  if (indexOfQuestionsArr < questionsArr.length) {
    prepareQuestion();
  }
});
