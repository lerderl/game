function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

function play(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "A tie";
  }
  else if (playerSelection == 'rock') {
    if (computerSelection == 'paper') {
      return `You Lose! Computer selection of ${computerSelection} beats ${playerSelection}`;
    } else {
      return `You Win! ${playerSelection} beats computer selection of ${computerSelection}`;
    }
  }
  else if (playerSelection == 'scissors') {
    if(computerSelection == 'rock'){
      return `You Lose! Computer selection of ${computerSelection} beats ${playerSelection}`;
    } else {
      return `You Win! ${playerSelection} beats computer selection of ${computerSelection}`;
    }
  }
  else if (playerSelection == 'paper') {
    if(computerSelection == 'scissors'){
      return `You Lose! Computer selection of ${computerSelection} beats ${playerSelection}`;
    } else {
      return `You Win! ${playerSelection} beats computer selection of ${computerSelection}`;
    }
  }
  else {
    alert("Please enter the right option");
  }
};

let playerSelection = window.prompt("Enter your option");
let computerSelection = computerPlay();
console.log(play(playerSelection, computerSelection));
