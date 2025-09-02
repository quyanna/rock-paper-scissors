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

function playGame() {
  let humanScore = 0,
    computerScore = 0;

  for (i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log("Game!");

  if (humanScore == computerScore) {
    console.log("It's a draw!");
  } else if (humanScore < computerScore) {
    console.log("You lose!");
  } else {
    console.log("You win!");
  }

  console.log(`Final scores: 
    Computer: ${computerScore}
    Human (you): ${humanScore}`);

  //Plays a round of rock paper scissors
  function playRound(humanChoice, computerChoice) {
    let lose = function () {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    };

    let win = function () {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    };
    if (computerChoice == humanChoice) {
      console.log("It's a draw!");
    } else if (humanChoice == ROCK) {
      switch (computerChoice) {
        case SCISSORS:
          win();
          break;
        case PAPER:
          lose();
          break;
      }
    } else if (humanChoice == PAPER) {
      switch (computerChoice) {
        case SCISSORS:
          lose();
          break;
        case ROCK:
          win();
          break;
      }
    } else if (humanChoice == SCISSORS) {
      switch (computerChoice) {
        case ROCK:
          lose();
          break;
        case SCISSORS:
          win();
          break;
      }
    }
  }
}

playGame();
