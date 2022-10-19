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

// Function to play all rounds of the game
// function game() {
//   for (let i = 0; i < 5; i++) {
//     console.log(`ROUND ${i + 1}`);
//     const playerOptions = ["rock", "paper", "scissors"];
    // let playerSelection = window.prompt("Enter your option");
    // if (!playerOptions.includes(playerSelection)) {
    //   alert("Please enter the right option of either rock, paper or scissors");
    //   i--;
    //   continue;
    // }
    // let computerSelection = computerPlay();
    // console.log(play(playerSelection, computerSelection));
//   };

//   console.log(`You: ${playerScore}   Computer: ${computerScore}`);

//   while (playerScore === computerScore) {
//     console.log("It's a tie. Please play again");
//     let playerSelection = window.prompt("Enter your option");
//     let computerSelection = computerPlay();
//     console.log(play(playerSelection, computerSelection));
//     console.log(`You: ${playerScore}   Computer: ${computerScore}`);
//   };

//   console.log("Thank you for playing");
// };


let playerScore = 0,
computerScore = 0;

// game();

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let playerSelection = button.id;
    let computerSelection = computerPlay();
    play(playerSelection, computerSelection);
    document.getElementById("playerScore").textContent = `${playerScore}`;
    document.getElementById("computerScore").textContent = `${computerScore}`;
  })
});
