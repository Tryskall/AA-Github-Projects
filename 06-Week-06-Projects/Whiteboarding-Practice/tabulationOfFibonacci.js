// File: tabulationOfFibonacci.js

const colors = require('colors');

function tabulatedFib(n) {
    let message = colors.green('tabulatedFib(') + colors.red(n) + colors.green(') = ');
    let fibTable = new Array(n);
    fibTable[0] = 0;
    fibTable[1] = 1;
    for (let i = 2; i <= n; i += 1) {
        fibTable[i] = fibTable[i-1] + fibTable[i-2];
    }
    return  message + colors.yellow(fibTable[n]);
}

console.log(tabulatedFib(7));

function fib(n) {
    let message = colors.green('fib(') + colors.red(n) + colors.green(') = ');
    let mostRecentCals = [0, 1];
    if (n === 0) return mostRecentCals[0];
    for (let i = 2; i <= n; i++) {
        const [ secondLast, last] = mostRecentCals;
        mostRecentCals = [ last, secondLast + last];
    }
    return message + colors.yellow(mostRecentCals[1]);
}

console.log(fib(7));
console.log(fib(14));

// The Tabulation Formula

// Here are the general guidelines for implementing the tabulation strategy.
// This is just a general recipe, so adjust for taste depending on your problem:
// Create the table array based off of the size of the input, which isn't always
// straightforward if you have multiple input values
// Initialize some values in the table that "answer" the trivially small
// subproblem usually by initializing the first entry (or entries) of the table
// Iterate through the array and fill in remaining entries, using previous
// entries in the table to perform the current calculation
// Your final answer is (usually) the last entry in the table
