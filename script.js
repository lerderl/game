// Computer random selection function
function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

// Function to play a single game round
function play(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "A tie";
  }
  else if (playerSelection == 'rock') {
    if (computerSelection == 'paper') {
      computerScore++;
      return `You Lose! Computer selection of ${computerSelection} beats ${playerSelection}`;
    } else {
      playerScore++;
      return `You Win! ${playerSelection} beats computer selection of ${computerSelection}`;
    }
  }
  else if (playerSelection == 'scissors') {
    if(computerSelection == 'rock'){
      computerScore++;
      return `You Lose! Computer selection of ${computerSelection} beats ${playerSelection}`;
    } else {
      playerScore++;
      return `You Win! ${playerSelection} beats computer selection of ${computerSelection}`;
    }
  }
  else if (playerSelection == 'paper') {
    if(computerSelection == 'scissors'){
      computerScore++;
      return `You Lose! Computer selection of ${computerSelection} beats ${playerSelection}`;
    } else {
      playerScore++;
      return `You Win! ${playerSelection} beats computer selection of ${computerSelection}`;
    }
  }
};

let playerScore = 0,
computerScore = 0;
const buttons = document.querySelectorAll('button');

// Event listener for each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5) {
      let playerSelection = button.id;
      let computerSelection = computerPlay();
      play(playerSelection, computerSelection);
      document.getElementById("playerScore").textContent = `${playerScore}`;
      document.getElementById("computerScore").textContent = `${computerScore}`;
    }
    document.getElementById("result").textContent = `You: ${playerScore} Computer: ${computerScore}`;
    if (playerScore == 5 || computerScore == 5) {
      if (playerScore > computerScore) {
        document.getElementById("final").textContent = `You win ${playerScore} to ${computerScore}`;      
      } else if (computerScore > playerScore) {
        document.getElementById("final").textContent = `Computer wins ${computerScore} to ${playerScore}`;      
      }
    }
  })
});
