

// // Start the game by setting the range
// startGame();

// READLINE MODULE

// import the readline modiule into file
// const readline = require("readline");
// console.log(readline);

// create an interface where we can talk to the user
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('what is your favorite numba? ', num => {
//     console.log(Number(num));
//     rl.close();
// });


// const handleFirstQuestion = (answer) => {
//     console.log("you responded: " + answer);
//     rl.question("Where are you from? ", handleSecondQuestion);
// }
// const handleSecondQuestion = (answer) => {
//     console.log(answer + " SUCKS! ");
//     rl.question("What are your plans today? ", handleThirdQuestion);
// }
// const handleThirdQuestion = (answer) => {
//     console.log('Very Cool!, ' + answer);
//     rl.close();
// }
// // ask the user a question
// rl.question("What's up, doc? ", handleFirstQuestion);

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const playGuessingGame = () => {
  console.log("Welcome to the Guessing Game!");

  let min;
  let max;
  let secretNumber;
  let attempts = 0;

  const getRandomNumber = () => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const askForNumber = (message, targetVariable, callback) => {
    rl.question(message, (input) => {
      const num = parseInt(input, 10);
      if (isNaN(num)) {
        console.log("Invalid input. Please enter a valid number.");
        askForNumber(message, targetVariable, callback);
      } else {
        targetVariable = num; // This doesn't update the outer variable, so we need to assign it explicitly.
        callback(targetVariable);
      }
    });
  };

  const askForMin = () => {
    askForNumber("Enter the minimum number: ", min, (result) => {
      min = result;
      askForMax();
    });
  };

  const askForMax = () => {
    askForNumber("Enter the maximum number (greater than the minimum): ", max, (result) => {
      max = result;
      startGame();
    });
  };

  const startGame = () => {
    secretNumber = getRandomNumber();
    console.log(`I'm thinking of a number between ${min} and ${max}!`);
    askForGuess();
  };

  const askForGuess = () => {
    rl.question("Enter your guess: ", (inputGuess) => {
      const guess = parseInt(inputGuess, 10);
      if (isNaN(guess)) {
        console.log("Invalid input. Please enter a valid number.");
        askForGuess();
      } else {
        attempts++;
        if (guess < secretNumber) {
          console.log('Too low! Try again.');
          askForGuess();
        } else if (guess > secretNumber) {
          console.log('Too high! Try again.');
          askForGuess();
        } else {
          console.log(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
          rl.close();
        }
      }
    });
  };

  askForMin();
};

playGuessingGame();
