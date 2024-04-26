// File: cachingMemoizationnTabulationTestSheet.js

const colors = require('colors');

// Memoization factorial

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(colors.green('factorial(') + colors.red(6) + colors.green(') ='), colors.yellow(factorial(6))); // factorial(6) = 720
console.log(colors.green('factorial(') + colors.red(7) + colors.green(') ='), colors.yellow(factorial(7))); // factorial(7) = 5040
console.log(colors.green('factorial(') + colors.red(5) + colors.green(') ='), colors.yellow(factorial(5))); // factorial(5) = 120
console.log(colors.green('factorial(') + colors.red(6) + colors.green(') ='), colors.yellow(factorial(6))); // factorial(6) = 720

let memo = {};

function factorialMemo(n) {
    let message = colors.green('factorialMemo(') + colors.red(n) + colors.green(') = ');
    if (n === 1) return message + colors.red(1);
    if (n in memo) return message + colors.green(memo[n]);
    memo[n] = n * factorial(n-1);
    result = message + colors.yellow(memo[n]);
    return result;
}

console.log(factorialMemo(4)); // factorialMemo(4) = 24
console.log(factorialMemo(1)); // factorialMemo(4) = 24
console.log(factorialMemo(6)); // factorialMemo(4) = 24
console.log(factorialMemo(5)); // factorialMemo(4) = 24
console.log(factorialMemo(7)); // factorialMemo(4) = 24
console.log(factorialMemo(6)); // factorialMemo(4) = 24
console.log(factorialMemo(8)); // factorialMemo(4) = 24
console.log(factorialMemo(1)); // factorialMemo(4) = 24

function fib(n) {
    if (n === 1 || n === 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(colors.green('fib(6) = '), colors.yellow(fib(6)));
doubleDigitTimeStart = Date.now();
console.log(colors.green('fib(50) = '), colors.yellow(fib(50)));
doubleDigitTimeEnd = Date.now();
console.log(colors.blue('factorialMemo:'), colors.magenta(`${doubleDigitTimeEnd - doubleDigitTimeStart}ms`));
