let rockBtn = document.querySelector('.rock');
let btns = document.querySelectorAll('button');

let paperBtn = document.querySelector('.paper');
let scissorsBtn = document.querySelector('.scissors');
let resultEl = document.querySelector('.result');
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
  let winner = '';
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      winner = 'computer';
    } else if (computerSelection === 'scissors') {
      winner = 'player';
    } else if (computerSelection === 'rock') {
      winner = 'neither';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      winner = 'computer';
    } else if (computerSelection === 'rock') {
      winner = 'player';
    } else if (computerSelection === 'paper') {
      winner = 'neither';
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      winner = 'computer';
    } else if (computerSelection === 'paper') {
      winner = 'player';
    } else if (computerSelection === 'scissors') {
      winner = 'neither';
    }
  }
  console.log(winner);
  updateGame(winner);
}
let playerScore = 0;
let computerScore = 0;
function updateGame(winner) {
  if (winner === 'player') {
    playerScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
  resultEl.innerHTML = `Player Score: ${playerScore}, Computer Score: ${computerScore} <br> Winner of current round was ${winner}`;
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      resultEl.innerHTML += ' <br>Player Has Won';
    } else if (computerScore === 5) {
      resultEl.innerHTML += '<br> Computer Has Won';
    }
    btns.forEach(btn => {
      btn.disabled = true;
    });
  }
}
rockBtn.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});
