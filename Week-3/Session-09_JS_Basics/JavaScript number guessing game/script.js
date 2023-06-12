// Your solution goes here 
let totalGuessesCount = 10;
let guessesUsed = 0;
let lastGuessedValue;
let itemFound = false;

function playGuessingGame(numToGuess, totalGuesses = totalGuessesCount) {
  while (guessesUsed < totalGuesses && !itemFound) {
    if (guessesUsed === 0) {
      lastGuessedValue = window.prompt("Enter a number between 1 and 100:");
    } else if (parseInt(lastGuessedValue) < numToGuess) {
      lastGuessedValue = window.prompt(
        `${lastGuessedValue} is too small. Guess a larger number:`
      );
    } else if (parseInt(lastGuessedValue) > numToGuess) {
      lastGuessedValue = window.prompt(
        `${lastGuessedValue} is too large. Guess a smaller number:`
      );
    }

    if (lastGuessedValue === null) {
      return 0;
    }

    if (lastGuessedValue === "" || isNaN(parseInt(lastGuessedValue))) {
      console.log("Please enter a number.");
      continue;
    }

    if (parseInt(lastGuessedValue) === numToGuess) {
      console.log("Matched");
      itemFound = true;
    } else {
      console.log("Not matched");
      guessesUsed++;
    }
  }

  return guessesUsed;
}

playGuessingGame(6);

