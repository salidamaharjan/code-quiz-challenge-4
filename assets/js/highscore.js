var highscoreSection = document.querySelector(".highscore-section");
var goBackButton = document.querySelector(".go-back-button");
var clearHighScoreButton = document.querySelector(".clear-highscore-button");

for (var i = 0; i < localStorage.length; i++) {
  var keyName = localStorage.key(i);
  var value = localStorage.getItem(keyName);
  var divEl = document.createElement("div");
  var spanEl = document.createElement("span");
  console.log(keyName, value);
  highscoreSection.appendChild(divEl);
  divEl.appendChild(spanEl);
  spanEl.textContent = keyName + " " + value;
}
goBackButton.addEventListener("click", function(){
  location.href = "./index.html";
});