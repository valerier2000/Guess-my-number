"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".number").textContent = secretNumber;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = +document.querySelector(".guess").value;
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ It's not a number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";
    document.querySelector("body").style.backgroundColor = "#73e64c";
    // document.querySelector("body").style.color = "#e6ffcc";
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😢 You lost the game");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#a82424";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".guess").value = "";
  score = 20;

  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#14141f";
  document.querySelector(".score").textContent = score;
});
