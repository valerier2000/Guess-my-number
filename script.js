"use strict";

// Valiables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Functions
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function changeBackgroundColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}

function changeElementsColor(color) {
  document.querySelector("body").style.color = color;
  document.querySelector(".guess").style.borderColor = color;
  document.querySelector(".number").style.backgroundColor = color;
  let btn = document.querySelectorAll(".btn");
  btn.forEach((el) => {
    console.log(el);
    el.style.backgroundColor = color;
  });
}

// Event handlers
document.querySelector(".check").addEventListener("click", function () {
  const guess = +document.querySelector(".guess").value;

  if (!guess) {
    displayMessage("⛔ It's not a number");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct number!");
    document.querySelector(".number").textContent = secretNumber;
    changeBackgroundColor("#009900");

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    changeElementsColor("#e6ffcc");
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😢 You lost the game");
      document.querySelector(".score").textContent = 0;
      changeBackgroundColor("#a82424");
      changeElementsColor("#ffe6e6");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  displayMessage("🧐 Start guessing...");
  changeBackgroundColor("#14141f");
  document.querySelector(".score").textContent = score;
  changeElementsColor("#e2ffff");
});
