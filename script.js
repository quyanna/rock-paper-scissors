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
    playAgainBtn: document.getElementById("play-again-btn"),
  },
  buttonsDiv: document.getElementById("buttons"),
  resultsDiv: document.getElementById("results"),
  scoreDiv: document.getElementById("score"),
  winnerDiv: document.getElementById("winner"),
  winnerMsg: document.getElementById("winner-msg"),
};

// Define the possible choices (for now)
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

/* -------- UTILITY FUNCTIONS --------*/

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

// Hides the game components and show winner if passed "true" or nothing, if passed false it unhides them
function hideGame(hidden = true) {
  if (hidden) {
    nodes.buttonsDiv.classList.add("hidden");
    nodes.resultsDiv.classList.add("hidden");
    nodes.scoreDiv.classList.add("hidden");
    nodes.winnerDiv.classList.remove("hidden");
  } else {
    nodes.buttonsDiv.classList.remove("hidden");
    nodes.resultsDiv.classList.remove("hidden");
    nodes.scoreDiv.classList.remove("hidden");
    nodes.winnerDiv.classList.add("hidden");
  }
}

/* -------- GAME LOGIC FUNCTIONS --------*/

function startGame() {
  // reset state
  gameState.humanScore = 0;
  gameState.computerScore = 0;

  //If starting a new game, unhide hidden nodes and clear text from old game
  if (gameState.isGameOver) {
    hideGame(false);
    nodes.resultsDiv.replaceChildren();
    nodes.scoreDiv.replaceChildren();
  }

  gameState.isGameOver = false;
}

function endGame(winnerText) {
  nodes.winnerMsg.textContent = winnerText;
  hideGame();
  gameState.isGameOver = true;
}

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

/* -------- INITIALIZATION AND EVENT LISTENER SETUP --------*/

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
  nodes.buttons.playAgainBtn.addEventListener("click", () => {
    startGame();
  });

  startGame(); // Get game started
}

init();
