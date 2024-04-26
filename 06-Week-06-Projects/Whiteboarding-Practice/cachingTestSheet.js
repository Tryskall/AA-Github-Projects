// File: cachingTestSheet.js

const colors = require('colors');

function multiply(a, b) {
    let product = 0;
    for (let i = 0; i < b; i++) {
        product += a;
    }

    return colors.green('multiply(') + colors.red(`${a} * ${b}`)  + colors.green(') = ') + (colors.yellow(product));
}

console.log(multiply(234, 84332));

// This is an O(n) operation, where n is equal to the second number,
//  b. While not particularly efficient, you could speed up subsequent
//  calculations with the same input using a cache. The plan would
//  look something like this:

let cache = {};

function multiplyCache(a, b) {
    const key = `${a}x${b}`;
    if (cache[key] === undefined) {
        cache[key] = multiply(a, b);
    }
    return colors.green(`multiplyCache(`) + colors.red(`${a} * ${b}`) + colors.green(') = ') + colors.cyan(cache[key]);
}

console.log(multiplyCache(2, 1000000));

function recursiveMultiplyCached(a, b) {
    if (b === 1) return a;
    const key = `${a}x${b}`;
    if (cache[key] === undefined) {
        cache[key] = a + recursiveMultiplyCached(a, b-1);
    }
    return colors.green('recursiveMultiplyCached = ') + cache[key];
}

console.log(recursiveMultiplyCached(2, 1000000));

// Memoization: creating a "memo" cache
const memo = new Map();

function fib(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;
    return fib(n-1) + fib(n-2) ;
}

console.log(colors.green('fib(10) = ') + fib(10));
console.log(colors.green('fib(11) = ') + fib(11));
console.log(colors.green('fib(12) = ') + fib(12));

function fibPrint(n) {
    console.log(colors.rainbow(`Running fibPrint(${n})`));
    if (n === 1) return 0;
    if (n === 2) return 1;
    return fibPrint(n-1) + fibPrint(n-2);
}

console.log(colors.green('fibPrint(3) = ' + fibPrint(3)));
console.log(colors.green('fibPrint() = ' + fibPrint(5)));

// finding the nth number of the fibonacci sequence
// with a cache memo

cache = {};

function fibMemo(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;
    if (cache[n] = undefined) {
        cache[n] = fibMemo(n-1) + fibMemo(n-2);
    }
    return cache[n];
}

console.log(colors.yellow('fibMemo(10) ', fibMemo(10)));
console.log(colors.blue('fibMemo(10) ', fibMemo(13)));
console.log(colors.magenta('fibMemo(10) ', fibMemo(16)));

function fibMemoPrint(n) {
    console.log(colors.yellow(`Running fibmemoPrint(${n})`));
    if (n === 1) return 0;
    if (n === 2) return 1;
    if (cache[n] === undefined) {
        cache[n] = fibMemoPrint(n-1) + fibMemoPrint(n-2);
    }
    return  + cache[n];
}

console.log(colors.green('fibMemoPrint: ', colors.red(fibMemoPrint(19))));

cache = {};

function fibTab(n) {
    cache[1] = 0;
    cache[2] = 1;
    for (let i = 3; i <= n; i++) {
        cache[i] = cache[i-1] + cache[i-2];
    }
    return cache;
}

console.log(colors.green('fibTab(11) '), colors.red(fibTab(11)));
