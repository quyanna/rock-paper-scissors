console.log("Hello, world!");

// Define the possible choices (for now)
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const CHOICES = 3;

function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * CHOICES);
  switch (randomInt) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    case 2:
      return SCISSORS;
  }
}

//This is bad error handling because it could eventually overflow the call stack, fix later
function getHumanChoice(message = "Enter your choice: ") {
  let humanChoice = prompt(message);
  switch (humanChoice.toLowerCase()) {
    case ROCK:
      return ROCK;
    case PAPER:
      return PAPER;
    case SCISSORS:
      return SCISSORS;
    default:
      return getHumanChoice(
        "Please enter a valid input! (rock, paper, scissors): "
      );
  }
}
