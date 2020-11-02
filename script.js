'use strict';

let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

//Rolling dice
btnRoll.addEventListener('click', function () {
  let diceRoll = Math.trunc(Math.random() * 6 + 1);
  console.log(`Roll = ${diceRoll}`);

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceRoll}.png`;

  if (activePlayer === 0) {
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      current0El.textContent = currentScore;
    } else {
      playerOne.classList.remove('player--active');
      playerTwo.classList.add('player--active');
      current0El.textContent = 0;
      currentScore = 0;
      activePlayer = 1;
    }
  } else {
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      current1El.textContent = currentScore;
    } else {
      playerOne.classList.add('player--active');
      playerTwo.classList.remove('player--active');
      current1El.textContent = 0;
      currentScore = 0;
      activePlayer = 0;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playerOne.classList.contains('player--active')) {
    score0El.textContent = Number(score0El.textContent) + currentScore;
    activePlayer = 1;
    currentScore = 0;
    current0El.textContent = 0;
    if (Number(score0El.textContent) >= 100) {
      score0El.textContent = `Winner!`;
    } else {
      playerOne.classList.remove('player--active');
      playerTwo.classList.add('player--active');
    }
  } else {
    score1El.textContent = Number(score1El.textContent) + currentScore;
    activePlayer = 0;
    currentScore = 0;
    current1El.textContent = 0;
    if (Number(score1El.textContent) >= 100) {
      score1El.textContent = `Winner!`;
    } else {
      playerOne.classList.add('player--active');
      playerTwo.classList.remove('player--active');
    }
  }
});

btnNew.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  currentScore = 0;
  activePlayer = 0;
});
