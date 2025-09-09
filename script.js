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

function playGame() {
  let humanScore = 0,
    computerScore = 0;

  //Add event listeners for each button
  const rockButton = document.querySelector(".rock-btn");
  const paperButton = document.querySelector(".paper-btn");
  const scissorsButton = document.querySelector(".scissors-btn");

  //Get ref to buttons div
  const buttons = document.querySelector(".buttons");

  //Get ref to results div
  const results = document.querySelector(".results");

  //Get ref to score div
  const runningScore = document.querySelector(".score");

  // //Make sure they are showing in case we are starting a new game -- CHANGE TO A FUNCTION IN END SCREEN
  // buttons.style.display = "flex";
  // results.style.display = "flex";
  // runningScore.style.display = "flex";

  //Set up event listeners that call playRound when player makes a choice

  rockButton.addEventListener("click", () => {
    playRound(ROCK, getComputerChoice());
  });
  paperButton.addEventListener("click", () => {
    playRound(PAPER, getComputerChoice());
  });
  scissorsButton.addEventListener("click", () => {
    playRound(SCISSORS, getComputerChoice());
  });

  function playRound(humanChoice, computerChoice) {
    results.replaceChildren(); // Clear any results from last round
    const humanChoiceUI = document.createElement("div");
    const computerChoiceUI = document.createElement("div");

    humanChoiceUI.textContent = `You Chose: ${humanChoice}`;
    computerChoiceUI.textContent = `Computer Chose: ${computerChoice}`;

    results.appendChild(humanChoiceUI);
    results.appendChild(computerChoiceUI);

    // Functions for game control

    function lose() {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      console.log(`Score is human:  ${humanScore} computer : ${computerScore}`);
    }

    function win() {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      console.log(`Score is human:  ${humanScore} computer : ${computerScore}`);
    }

    function gameOverScreen(winnerText) {
      buttons.style.display = "none";
      results.style.display = "none";
      runningScore.style.display = "none";
      displayWinner = document.createElement("div");
      displayWinner.classList.add("winner");
    }

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
        case PAPER:
          win();
          break;
      }
    }

    //Call game over when anyone gets a score of 5
    if (humanScore >= 5) {
      gameOverScreen("You win!");
    } else if (computerScore >= 5) {
      gameOverScreen("You lose!");
    }

    // UPDATE RUNNING SCORE
    runningScore.textContent = `Human: ${humanScore}
  Computer: ${computerScore}`;
  }
}

playGame();
