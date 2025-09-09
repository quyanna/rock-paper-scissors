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

  //Add event listeners for each button
  const rockButton = document.querySelector(".rock-btn");
  const paperButton = document.querySelector(".paper-btn");
  const scissorsButton = document.querySelector(".scissors-btn");

  //Get ref to results div
  const results = document.querySelector(".results");

  rockButton.addEventListener("click", () => {
    playRound(ROCK, getComputerChoice());
  });
  paperButton.addEventListener("click", () => {
    playRound(PAPER, getComputerChoice());
  });
  scissorsButton.addEventListener("click", () => {
    playRound(SCISSORS, getComputerChoice());
  });

  // OLD LOOP LOGIC TO PLAY 5 GAMES
  // for (i = 1; i <= 5; i++) {
  //   console.log(`Round ${i}`);
  //   playRound(getHumanChoice(), getComputerChoice());
  // }
  // console.log("Game!");

  // THIS IS THE OLD LOGIC TO GET FINAL SCORE
  // if (humanScore == computerScore) {
  //   console.log("It's a draw!");
  // } else if (humanScore < computerScore) {
  //   console.log("You lose!");
  // } else {
  //   console.log("You win!");
  // }

  // console.log(`Final scores:
  //   Computer: ${computerScore}
  //   Human (you): ${humanScore}`);

  //Plays a round of rock paper scissors
  // TODO: Now a round should entail printing the outcome
  /* 
    - Maybe turn the selected button a different color 
    - Turn the AI button some other color 
    - At the end of the round, reset button color
  */
  function playRound(humanChoice, computerChoice) {
    results.replaceChildren(); // Clear any results from last round
    const humanChoiceUI = document.createElement("div");
    const computerChoiceUI = document.createElement("div");

    humanChoiceUI.textContent = `You Chose: ${humanChoice}`;
    computerChoiceUI.textContent = `Computer Chose: ${computerChoice}`;

    results.appendChild(humanChoiceUI);
    results.appendChild(computerChoiceUI);

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
