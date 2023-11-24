//getting an element from html and storing in a variable in a DOM
var questionTitle = document.querySelector(".question-title");
var answerContainer = document.querySelector(".answer-container");
var options = document.querySelectorAll(".option");
var display = document.querySelector(".display-correctness");
var questionSection = document.querySelector("#question-section");
var gameOver = document.querySelector(".game-over");
var timerSection = document.querySelector(".timer-section");
var startQuizBtn = document.querySelector(".start-quiz-button");
var startQuizContainer = document.querySelector(".start-quiz-container");
var obtainedScore = document.querySelector(".obtained-score");
var timer = document.querySelector(".timer");
var score = document.querySelector(".score");
var inputLabel = document.querySelector(".input-label");
var restartQuiz = document.querySelector(".restart-quiz");
var highScoreTimeSection = document.querySelector(".highscore-time-section");
var userInputSection = document.querySelector(".user-input-section");
var saveButton = document.querySelector(".save-button");
var initial = document.querySelector("#initial");

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

var time = 5;
var timeCount;

//created to change in each click
var indexOfQuestionsArr = 0;

//only displaying start button
gameOver.style.display = "none";
questionSection.style.display = "none";
timerSection.style.display = "none";
score.style.display = "none";
userInputSection.style.display = "none";

function gameEnded() {
  //stopping timer and hiding question when the value is less than 0
  clearInterval(timeCount);
  questionSection.style.display = "none";
  gameOver.style.display = "block";
  //display score when time out
  obtainedScore.textContent = time;
}
//displays a question and list of answers from array of question
function prepareQuestion() {
  questionTitle.textContent = questionsArr[indexOfQuestionsArr].question;

  //looping the option to assign a different values from questionsArr
  for (var i = 0; i < questionsArr[indexOfQuestionsArr].answer.length; i++) {
    options[i].textContent = questionsArr[indexOfQuestionsArr].answer[i].name;
    //setting data attribute to li element which is dynamic
    options[i].setAttribute(
      "data-correct",
      questionsArr[indexOfQuestionsArr].answer[i].checkCorrect
    );
  }
}

//using add event listener to change the question on click
answerContainer.addEventListener("click", function (event) {
  //checking if the clicked element is li element
  if (event.target.matches("li") === false) {
    return;
  }
  //checking the data attribute of clicked element is correct or not to enter if block
  if (event.target.getAttribute("data-correct") === "correct") {
    display.textContent = "correct";
    //time is added when correct answer is clicked and updated the text content of timer
    time = time + 10;
    timer.textContent = time;
  } else {
    display.textContent = "incorrect";
    //time is deducted when incorrect answer is clicked and updates the text content of timer
    //preventing to count below 0 using Math.max() method
    time = Math.max(0, time - 5);
    timer.textContent = time;
    if (time <= 0) {
      gameEnded();
    }
  }
  indexOfQuestionsArr++;
  //calls prepare question function when index of questionArr exists
  if (indexOfQuestionsArr < questionsArr.length) {
    prepareQuestion();
  } else {
    // this is where user successfully finished all question
    //stopping the timer when no question to display
    clearInterval(timeCount);
    questionSection.style.display = "none";
    gameOver.style.display = "none";
    //displaying score when no more question
    obtainedScore.textContent = time;
    score.style.display = "none";
    userInputSection.style.display = "block";
  }
});

//starting quiz when clicked start quiz button
startQuizBtn.addEventListener("click", function () {
  //calling a function to show the question
  prepareQuestion();
  //timer element displays default time to start from
  timer.textContent = time;
  timeCount = setInterval(function () {
    //only decreases time until its value is upto zero
    if (time > 0) {
      time = time - 1;
      timer.textContent = time;
    } else {
      //else block is executed when game is over
      gameEnded();
    }
  }, 1000);
  //displays when the start button is clicked
  startQuizBtn.style.display = "none";
  timerSection.style.display = "block";
  questionSection.style.display = "block";
});
//reload the page when clicked restart button
restartQuiz.addEventListener("click", function () {
  location.reload();
});

saveButton.addEventListener("click", function(){
    localStorage.setItem(initial.value, time);
    location.href = "./highscore.html";
})
