"use strict";

const check = document.querySelector(".check");
const input = document.querySelector(".input-number");
const guessingText = document.querySelector(".guessing-text");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const correctAns = document.querySelector(".game-correct-ans");
const playAgain = document.querySelector(".play-again");

// variables
let SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
let SCORE = 20;
let HIGH_SCORE = 0;

// display text
function displayGuessingText(text) {
  guessingText.textContent = text;
}
// checking
check.addEventListener("click", function () {
  const inputNumber = Number(input.value);

  // when there is no input
  if (!inputNumber) displayGuessingText("Inter a valid number!");
  // when player is win
  else if (inputNumber === SECRET_NUMBER) {
    displayGuessingText("Correct Ans");
    correctAns.textContent = SECRET_NUMBER;
    correctAns.style.color = "#222";
    correctAns.body.style.backgroundColor = teal;

    if (SCORE > HIGH_SCORE) {
      HIGH_SCORE = SCORE;
      highScore.textContent = HIGH_SCORE;
    }
  }
});
