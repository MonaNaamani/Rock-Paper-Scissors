const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
let playerScoreDisplay = document.getElementById('player-score');
let computerScoreDisplay = document.getElementById('computer-score');
let roundNumberDisplay = document.getElementById('round-number');
const possibleChoices = document.querySelectorAll('.main-button');
let computerChoice;
let userChoice;
let result;
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
playerScoreDisplay.innerHTML = playerScore;
computerScoreDisplay.innerHTML = computerScore;
roundNumberDisplay.innerHTML = roundNumber;
resultDisplay.innerHTML = "Whoever gets 5 points first wins!";

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', 
(e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
  playSound();
}))

let generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  let allOptions = ['rock', 'paper', 'scissors'];
  computerChoice = allOptions[randomNumber];
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'Its a draw!'
  } else if (userChoice === 'paper' && computerChoice === 'rock' ||
             userChoice === 'rock' && computerChoice === 'scissors' ||
             userChoice === 'scissors' && computerChoice === 'paper') {
    result = "Congratulations, you win!"
              playerScore++;
  } else if (computerChoice === 'paper' && userChoice === 'rock' ||
             computerChoice === 'rock' && userChoice === 'scissors' ||
             computerChoice === 'scissors' && userChoice === 'paper') { 
    result = "Oh too bad, you lose!" 
              computerScore++;
  }
  roundNumber++;
  roundNumberDisplay.innerHTML = roundNumber;
  resultDisplay.innerHTML = result;
  playerScoreDisplay.innerHTML = playerScore;
  computerScoreDisplay.innerHTML = computerScore;
  gameOver();
}


function gameOver() {
  if (playerScore === 5) {
  possibleChoices.forEach((possibleChoice) => (possibleChoice.disabled = true));
  alert("Game Over! Press the restart button to play again.");
  resultDisplay.innerHTML = "Game over, you win!";
  } else  if (computerScore === 5) {
  possibleChoices.forEach((possibleChoice) => (possibleChoice.disabled = true));
  alert("Game Over! Press the restart button to play again.");
  resultDisplay.innerHTML = "Game over, computer wins!";
  }
}

const reset = document.querySelector('.restart-button');
  reset.addEventListener('click', restartGame)

function restartGame() {
resultDisplay.innerHTML = "Whoever gets 5 points first wins!";
computerChoiceDisplay.innerHTML ="";
userChoiceDisplay.innerHTML ="";
playerScore = 0;
computerScore = 0;
roundNumber = 0;
playerScoreDisplay.innerHTML = playerScore;
computerScoreDisplay.innerHTML = computerScore;
roundNumberDisplay.innerHTML = roundNumber;
possibleChoices.forEach((possibleChoice) => (possibleChoice.disabled = false));
}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', function addAnimation(e) {
  possibleChoice.classList.add('pressed');
}));

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('transitionend', removeTransition))

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('pressed');
};

function playSound () {
  const audio = document.getElementById('sound');
  audio.currentTime = 0;
  audio.play();
}