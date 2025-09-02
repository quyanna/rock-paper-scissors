console.log("Hello, world!");

// Define the possible choices (for now)
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const CHOICES = 3;

function getComputerChoice() {
  // Get a random int of either 0, 1, or 2
  // Link these numbers to inputs of rock, paper and scissors

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
