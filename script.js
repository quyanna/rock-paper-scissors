/* 
THIS AN AN EVENT HANDLING REFACTOR FOR THE ROCK PAPER SCISSORS GAME LOGIC

STRUCTURE AND PLANNING: 

- Create init function that sets up the game state and sets up listeners ONCE
- Set up a global DOM Cache (global variables for storing DOM info)
- Create a global game state object that contains: 
  - Scores
  - Whether game is over
  - Max scores

- FLOW
StartGame function will clear the screen and show items
EndGame will display end messages and hide items

- Init Sets up event listeners and calls start game
- Play round gets called whenever a round is played and calls functions to render scores 
*/

console.log("Hello, world!");

const gameState = {
  humanScore: 0,
  computerScore: 0,
  isGameOver: false,
  maxScore: 5,
};

const nodes = {
  buttons: {
    rockBtn: document.getElementById("rock-btn"),
    scissorsBtn: document.getElementById("scissors-btn"),
    paperBtn: document.getElementById("paper-btn"),
  },
  buttonsDiv: document.getElementById("buttons"),
  resultsDiv: document.getElementById("results"),
  scoreDiv: document.getElementById("score"),
};

// Define the possible choices (for now)
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

// Utility functions
function getComputerChoice() {
  const choices = [ROCK, PAPER, SCISSORS];
  return choices[Math.floor(Math.random() * choices.length)];
}

//returns true iff a beats b, need to check for draw separately
function beats(a, b) {
  return (
    (a == ROCK && b == SCISSORS) ||
    (a == PAPER && b == ROCK) ||
    (a == SCISSORS && b == PAPER)
  );
}

function renderRunningScore() {
  nodes.scoreDiv.replaceChildren(); // clear previously created divs

  let compRunningScore = document.createElement("div");
  let playerRunningScore = document.createElement("div");

  playerRunningScore.textContent = `You: ${gameState.humanScore}`;
  compRunningScore.textContent = `Computer: ${gameState.computerScore}`;

  nodes.scoreDiv.appendChild(playerRunningScore);
  nodes.scoreDiv.appendChild(compRunningScore);
}

function renderRoundResult(text) {
  let results = document.createElement("div");
  results.textContent = text;
  nodes.resultsDiv.replaceChildren(results);
}

//GAME LOGIC
function startGame() {
  // reset state
  gameState.humanScore = 0;
  gameState.computerScore = 0;
  isGameOver = false;
}

function endGame(winnerText) {}

function playRound(humanChoice, computerChoice) {
  // IF game is not over
  // Check what beats what
  //Increment scores
  // Render scores
  // Render result text
  // Call endGame if game is over

  if (!gameState.isGameOver) {
    if (humanChoice == computerChoice) {
      renderRoundResult(`Draw! Both players picked ${humanChoice}`);
    } else if (beats(humanChoice, computerChoice)) {
      renderRoundResult(`You Win! ${humanChoice} beats ${computerChoice}`);
      gameState.humanScore++;
    } else {
      renderRoundResult(`You Lose! ${computerChoice} beats ${humanChoice}`);
      gameState.computerScore++;
    }
    renderRunningScore();

    // Check for a winner
    if (gameState.humanScore >= 5 || gameState.computerScore >= 5) {
      gameState.humanScore ==
      Math.max(gameState.humanScore, gameState.computerScore)
        ? endGame(`You Win! Final Score: 
          You: ${gameState.humanScore} - Computer: ${gameState.computerScore}`)
        : endGame(`You Lose! Final Score: 
          You: ${gameState.humanScore} - Computer: ${gameState.computerScore}`);
    }
  }
}

//Setup event listeners once
function init() {
  nodes.buttons.rockBtn.addEventListener("click", () => {
    playRound(ROCK, getComputerChoice());
  });
  nodes.buttons.paperBtn.addEventListener("click", () => {
    playRound(PAPER, getComputerChoice());
  });
  nodes.buttons.scissorsBtn.addEventListener("click", () => {
    playRound(SCISSORS, getComputerChoice());
  });

  startGame(); // Get game started
}

init();

// function getComputerChoice() {
//   let randomInt = Math.floor(Math.random() * CHOICES);
//   switch (randomInt) {
//     case 0:
//       return ROCK;
//     case 1:
//       return PAPER;
//     case 2:
//       return SCISSORS;
//   }
// }

// function playGame() {
//   let humanScore = 0,
//     computerScore = 0;

//   //Add event listeners for each button
//   const rockButton = document.querySelector(".rock-btn");
//   const paperButton = document.querySelector(".paper-btn");
//   const scissorsButton = document.querySelector(".scissors-btn");

//   //Get ref to buttons div
//   const buttons = document.querySelector(".buttons");

//   //Get ref to results div
//   const results = document.querySelector(".results");

//   //Get ref to score div
//   const runningScore = document.querySelector(".score");

//   //Set up event listeners that call playRound when player makes a choice

//   rockButton.addEventListener("click", () => {
//     playRound(ROCK, getComputerChoice());
//   });
//   paperButton.addEventListener("click", () => {
//     playRound(PAPER, getComputerChoice());
//   });
//   scissorsButton.addEventListener("click", () => {
//     playRound(SCISSORS, getComputerChoice());
//   });

//   function playRound(humanChoice, computerChoice) {
//     results.replaceChildren(); // Clear any results from last round
//     const humanChoiceUI = document.createElement("div");
//     const computerChoiceUI = document.createElement("div");

//     humanChoiceUI.textContent = `You Chose: ${humanChoice}`;
//     computerChoiceUI.textContent = `Computer Chose: ${computerChoice}`;

//     results.appendChild(humanChoiceUI);
//     results.appendChild(computerChoiceUI);

//     // Functions for game control

//     function lose() {
//       computerScore++;
//       console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//       console.log(`Score is human:  ${humanScore} computer : ${computerScore}`);
//     }

//     function win() {
//       humanScore++;
//       console.log(`You win! ${humanChoice} beats ${computerChoice}`);
//       console.log(`Score is human:  ${humanScore} computer : ${computerScore}`);
//     }

//     function gameOverScreen(winnerText) {
//       buttons.style.display = "none";
//       runningScore.style.display = "none";
//       results.replaceChildren();

//       // Add winner message and Play Again button to results div
//       displayWinner = document.createElement("div");
//       displayWinner.classList.add("winner");
//       displayWinner.textContent = winnerText;

//       playAgainBtn = document.createElement("button");
//       playAgainBtn.textContent = "Play Again?";
//       playAgainBtn.classList.add("play-again-btn");
//       displayWinner.appendChild(playAgainBtn);

//       results.appendChild(displayWinner);

//       // Listen for play again event
//       playAgainBtn.addEventListener("click", () => {
//         results.replaceChildren(); // clear results
//         return;
//       });
//     }

//     if (computerChoice == humanChoice) {
//       console.log("It's a draw!");
//     } else if (humanChoice == ROCK) {
//       switch (computerChoice) {
//         case SCISSORS:
//           win();
//           break;
//         case PAPER:
//           lose();
//           break;
//       }
//     } else if (humanChoice == PAPER) {
//       switch (computerChoice) {
//         case SCISSORS:
//           lose();
//           break;
//         case ROCK:
//           win();
//           break;
//       }
//     } else if (humanChoice == SCISSORS) {
//       switch (computerChoice) {
//         case ROCK:
//           lose();
//           break;
//         case PAPER:
//           win();
//           break;
//       }
//     }

//     //Call game over when anyone gets a score of 5
//     if (humanScore >= 5) {
//       gameOverScreen("You win!");
//       return;
//     } else if (computerScore >= 5) {
//       gameOverScreen("You lose!");
//       return;
//     }

//     // UPDATE RUNNING SCORE
//     runningScore.textContent = `Human: ${humanScore}
//   Computer: ${computerScore}`;
//   }
// }

// playGame();
