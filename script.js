const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', 
(e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
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
  } else if (computerChoice === 'paper' && userChoice === 'rock' ||
             computerChoice === 'rock' && userChoice === 'scissors' ||
             computerChoice === 'scissors' && userChoice === 'paper') { 
    result = "Oh too bad, you lose!" 
  }
  resultDisplay.innerHTML = result;
}