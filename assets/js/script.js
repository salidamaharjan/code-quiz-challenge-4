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
    question: "What is commonly used coding language?",
    answer: [
      {
        name: "JavaScript",
        checkCorrect: "correct",
      },
      {
        name: "For loop",
        checkCorrect: "incorrect",
      },
      {
        name: "Script",
        checkCorrect: "incorrect",
      },
      {
        name: "String",
        checkCorrect: "incorrect",
      },
    ],
  },
  {
    question: "Commonly used data types do not include?",
    answer: [
      {
        name: "Booleans",
        checkCorrect: "incorrect",
      },
      {
        name: "Alerts",
        checkCorrect: "correct",
      },
      {
        name: "Strings",
        checkCorrect: "incorrect",
      },
      {
        name: "Numbers",
        checkCorrect: "incorrect",
      },
    ],
  },
  {
    question: "The index of an array starts with?",
    answer: [
      {
        name: "1",
        checkCorrect: "incorrect",
      },
      {
        name: "-1",
        checkCorrect: "incorrect",
      },
      {
        name: "i",
        checkCorrect: "incorrect",
      },
      {
        name: "0",
        checkCorrect: "correct",
      },
    ],
  },
  {
    question: "The condition in if/else statement inclosed within?",
    answer: [
      {
        name: "quotes",
        checkCorrect: "incorrect",
      },
      {
        name: "curly brackets",
        checkCorrect: "incorrect",
      },
      {
        name: "parentheses",
        checkCorrect: "correct",
      },
      {
        name: "square brackets",
        checkCorrect: "incorrect",
      },
    ],
  },
  {
    question: "What is not semantic html element",
    answer: [
      {
        name: "<header>",
        checkCorrect: "incorrect",
      },
      {
        name: "<nav>",
        checkCorrect: "incorrect",
      },
      {
        name: "<section>",
        checkCorrect: "incorrect",
      },
      {
        name: "<div>",
        checkCorrect: "incorrect",
      },
    ],
  },
];

var time = 15;
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
  gameOver.style.display = "flex";
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
  if (event.target.matches("button") === false) {
    return;
  }
  //checking the data attribute of clicked element is correct or not to enter if block
  if (event.target.getAttribute("data-correct") === "correct") {
    display.textContent = "correct";
    //time is added when correct answer is clicked and updated the text content of timer
    time = time + 10;
    timer.textContent = time;
    setTimeout(function () {
      display.textContent = "";
    }, 300);
  } else {
    display.textContent = "incorrect";
    setTimeout(function () {
      display.textContent = "";
    }, 300);
    //time is deducted when incorrect answer is clicked and updates the text content of timer
    //preventing to count below 0 using Math.max() method
    time = Math.max(0, time - 5);
    timer.textContent = time;
    if (time <= 0) {
      gameEnded();
      return;
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
    score.style.display = "flex";
    userInputSection.style.display = "flex";
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
  startQuizContainer.style.display = "none";
  timerSection.style.display = "block";
  questionSection.style.display = "flex";
});
//reload the page when clicked restart button
restartQuiz.addEventListener("click", function () {
  location.reload();
});

saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (initial.value.trim() === "") {
    return;
  }
  localStorage.setItem(initial.value.trim(), time);
  location.href = "./highscore.html";
});
