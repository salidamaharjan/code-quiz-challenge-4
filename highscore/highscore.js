var highscoreSection = document.querySelector(".highscore-section");

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
