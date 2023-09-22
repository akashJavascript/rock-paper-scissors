function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * (4 - 1) + 1);
  let choice;
  if (randomNum === 1) {
    choice = 'rock';
  }
  if (randomNum === 2) {
    choice = 'paper';
  }
  if (randomNum === 3) {
    choice = 'scissors';
  }
   return choice;
  
}

function playRound(playerSelection, computerSelection) {
  let message = '';
  let winner = '';
       playerSelection = playerSelection.toLowerCase();
  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
        winner='computer';
        message = 'You Lose! Paper beats Rock'
    } else if (computerSelection === 'scissors') {
        message = 'You Win! Rock beats Scissors'
        winner='player'
    } else if (computerSelection === 'rock') {
        message = 'It is a tie'
        winner='neither'
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
        message = 'You Lose! Scissors beats Paper'
        winner='computer';

    } else if (computerSelection === 'rock') {
        message = 'You Win! Paper beats Rock'
        winner='player'

    } else if (computerSelection === 'paper') {
        message = 'Its a tie'
        winner='neither'

    }
  }else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
        message = 'You Lose! Rock beats Scissors'
        winner='computer';
    } else if (computerSelection === 'paper') {
        message = 'You Win! Scissors beats paper'
        winner='player'
    } else if (computerSelection === 'scissors') {
        message = 'its a tie'
        winner='neither'
    }
  }
  return [message,winner];
}

function game() {
let playerSelection;
let computerSelection;
let playerScore = 0;
let finalWinner = '';
    let computerScore = 0;
    let i =0;
while (i<5) {
playerSelection = prompt('Pick Your Weapon! Rock, Paper, or Scissors')
computerSelection = getComputerChoice();
        
        let roundInfo = playRound(playerSelection,computerSelection);
        console.log(roundInfo[0])
        let roundScore = roundInfo[1];
        if (roundScore === 'player') {
            playerScore++;
            i++;

        }else if(roundScore === 'computer'){
            computerScore++;
            i++;
        }
    }
    playerScore>computerScore ? finalWinner = 'Player Won!': finalWinner = 'Computer Won';
    return finalWinner;
}

console.log(game())

