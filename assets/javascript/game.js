var wins = 0;
var losses = 0;
var guessesLeft = 10;
var computerGuess;
var userGuess;
var lettersAlreadyGuessed = [];

var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

function newGame() {
  computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  lettersAlreadyGuessed.length = 0;

  guessesLeft = 10;
}

document.onkeyup = function(event) {
  var userGuess = event.key;

  if (userGuess === computerGuess) {
    wins++;
    newGame();
  } else {
    guessesLeft--;
  }

  if (guessesLeft === 0) {
    losses++;
    newGame();
  }

  lettersAlreadyGuessed.push(userGuess);

  console.log(computerGuess);
  console.log(userGuess);
  console.log(wins);
  console.log(losses);
  console.log(lettersAlreadyGuessed);

  document.getElementById("userGuess").innerHTML = userGuess;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById(
    "lettersAlreadyGuessed"
  ).innerHTML = lettersAlreadyGuessed;
};

newGame();
