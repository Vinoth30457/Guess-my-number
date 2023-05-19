"use strict";

const inputEl = document.querySelector(".input-element");
const btnguess = document.querySelector(".btn-guess");
const chance = document.getElementById("left-chance");
const result = document.querySelector(".result");
const reset = document.querySelector(".btn-reset");

let guessNum,
  chanceNum = 10,
  compGuess;

const init = () => {
  inputEl.value = ``;
  chanceNum = 10;
  compGuess = getcompNum();
  btnguess.classList.add("open");
  btnguess.classList.remove("close");
  inputEl.classList.add("open");
  inputEl.classList.remove("close");
  result.classList.add("close");
  result.classList.remove("open");
  result.classList.remove("green");
  chance.classList.add("close");
  chance.classList.remove("open");
};
const getcompNum = () => {
  compGuess = Math.trunc(Math.random() * 100 + 1);
  return compGuess;
};
btnguess.addEventListener("click", () => {
  const userguess = Number(inputEl.value);
  result.classList.add("open");
  result.classList.remove("close");
  result.classList.remove("green");
  chance.classList.add("open");
  chance.classList.remove("close");
  if (chanceNum > 0) {
    if (userguess) {
      if (userguess > compGuess) {
        chanceNum--;
        result.innerText = `Your Guess is to High`;
        chance.innerText = `${chanceNum} chance left`;
      } else if (userguess < compGuess) {
        chanceNum--;
        result.innerText = `Your Guess is to Low`;
        chance.innerText = `${chanceNum} chance left`;
      } else if (userguess === compGuess) {
        chanceNum--;
        btnguess.classList.add("close");
        btnguess.classList.remove("open");
        inputEl.classList.add("close");
        inputEl.classList.remove("open");
        result.classList.add("green");
        result.innerText = `Your Guess is correct`;
      }
    } else {
      alert`Enter the number`;
    }
  } else if (chanceNum === 0) {
    btnguess.classList.add("close");
    btnguess.classList.remove("open");
    inputEl.classList.add("close");
    inputEl.classList.remove("open");
    result.classList.add("close");
    result.classList.remove("open");
    chance.innerText = `GAME OVER 
    YOU LOST`;
  }
});
reset.addEventListener("click", () => {
  init();
});
console.log(getcompNum());
