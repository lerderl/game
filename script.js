function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  computerSelection = options[Math.floor(Math.random() * options.length)];
  console.log(computerSelection);
};

computerPlay();
