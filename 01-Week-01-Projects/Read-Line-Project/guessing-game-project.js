// build a game where the user has to guess a secret random number
// in response to the guessed number, give a hint as to too small or to big

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let attempts = 0;
console.log('Welcome to the Guessing Game!');
// handle a max number, print max number, post next inquiry for minNumber
// handle a min number, print min number, print rule 1, find random number,
// post next inquiry to start guessing
const handleMaxNumber = numMax => {
    rl.question('Enter a Maximum Number: ', handleMaxNumber);
    console.log('Max # is: *' + Number(numMax) + '*');
    rl.question('Enter a Minimum Number ', numMin => {
    console.log('Min # is: *' + Number(numMin) + '*');
    console.log("I'm thinking of a number between " + Number(numMax) + " and " + Number(numMin) + "...");
    const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (Number(numMax) - Number(numMin) + 1)) + Number(numMin);
    }
    rl.question('Enter a Guess: ', handleGuess);
});
};



const handleGuess = numGuess => {
    if (isNaN(Number(numGuess))) {
        console.log('Please enter a valid Number.');
        handleGuess;
    } else {
        attempts++;
        if (Number(numGuess) < randomNumber) {
            console.log('Too low! Guess again.');
            rl.question('Enter another Guess: ', handleGuess);
        } else if (Number(numGuess) > randomNumber) {
            console.log('Too high! Guess again.');

        }
    }
}
