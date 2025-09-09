/* 
THIS AN AN EVENT HANDLING REFACTOR FOR THE ROCK PAPER SCISSORS GAME LOGIC

STRUCTURE AND PLANNING: 

- Create init function that sets up the game state and sets up listeners ONCE
- Set up a global DOM Cache (global variables for storing DOM info)
- Create a global game state object that contains: 
  - Scores
  - Whether game is over
  - Max scores

- Phase 1: Set objects
*/

console.log("Hello, world!");

const gameState = {
  humanScore: 0,
  computerScore: 0,
  isGameOver: false,
};

const sectionNode = {};

// // Define the possible choices (for now)
// const ROCK = "rock";
// const PAPER = "paper";
// const SCISSORS = "scissors";

// const CHOICES = 3;

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
