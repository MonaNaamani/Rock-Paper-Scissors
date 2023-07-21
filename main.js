let getComputerChoice = () => {
  let allOptions = ['Rock', 'Paper', 'Scissors'];
  let index = Math.floor(Math.random() * 3);
  return allOptions[index];
}

function playRound(playerSelection, computerSelection) {
  let playerSelectionUpper = playerSelection.toUpperCase();
  let computerSelectionUpper = computerSelection.toUpperCase();

  if (playerSelectionUpper === computerSelectionUpper) {
    return ("It's a tie");
  } else if (playerSelectionUpper === 'PAPER' && computerSelectionUpper === 'ROCK' ||
             playerSelectionUpper === 'ROCK' && computerSelectionUpper === 'SCISSORS' ||
             playerSelectionUpper === 'SCISSORS' && computerSelectionUpper === 'PAPER') {
        return (`Congratulations, you win! ${playerSelectionUpper} beats ${computerSelectionUpper}.`);      
  } else if (computerSelectionUpper === 'PAPER' && playerSelectionUpper === 'ROCK' ||
             computerSelectionUpper === 'ROCK' && playerSelectionUpper === 'SCISSORS' ||
             computerSelectionUpper === 'SCISSORS' && playerSelectionUpper === 'PAPER') {
        return (`Oh too bad, you lose! ${playerSelectionUpper} loses to ${computerSelectionUpper}.`);  
  }
}

function game() {
  for ( let roundNumber = 0; roundNumber < 5; roundNumber++ ) {
    const playerSelection = prompt('Please select Rock, Paper, or Scissors.');
    const computerSelection = getComputerChoice();
    console.log(playerSelection, computerSelection);
    console.log(`This is round number ${roundNumber} `)
  }
}

game();