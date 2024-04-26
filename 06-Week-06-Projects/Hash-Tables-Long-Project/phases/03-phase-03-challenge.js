// File: 03-phase-03-challenge.js
const colors = require('colors');

// simple javascript function for approximating the time and space
// --- complexity of another function... might not cover edge cases

const analyzeComplexity = (func, ...input) => {
    const startTime = Date.now();
    const startMemoryUsage = process.memoryUsage().heapUsed;
    func(input);
    const endTime = Date.now();
    const endMemoryUsage = process.memoryUsage().heapUsed;
    const elapsedTime = endTime - startTime;
    const memoryUsed = endMemoryUsage - startMemoryUsage;
    console.log(colors.yellow(`Time Comp = `) + colors.cyan(`O(${elapsedTime} ms)`));
    console.log(colors.yellow(`Space Comp = `) + colors.cyan(`O(${memoryUsed} bytes)`));
}

// idea for function that colors inquiry replies in terminal
const coloredInquiry = (func, ...input) => {
    let question = colors.green(func + '(');
    let parameters = colors.red(...input);
    let endQuote = colors.green(') = ');
    return question + parameters + endQuote;
}


// Given a string, return the kth most frequent char in string
// create a frequency table to count the occurrences of each
// --- char in the string
// sort the char based on their frequency in decending order
// return the char at the kth position in the sorted array

const kth = (str, k) => {
    let colorLog = colors.green('kth(') + colors.red(str + ', ' + k) + colors.green(') = ');
    const freqTable = {};
    for (const char of str) {
        freqTable[char] = (freqTable[char] || 0) + 1;
    }
    const sortedChars = Object.keys(freqTable).sort((a, b) => freqTable[b] - freqTable[a]);
    return colorLog + colors.yellow(sortedChars[k - 1]);
}

// startTime = Date.now();
console.log(kth('aaabbc', 1));
analyzeComplexity(kth, ('aaabbc', 1));
console.log(kth('aaabbc', 2));
analyzeComplexity(kth, ('aaabbc', 2));
console.log(kth('aaabbc', 3));
analyzeComplexity(kth, ('aaabbc', 3));


// New Alphabet
// Imagine the standard alphabet order (abc...xyz) is rearranged. Given a string
// and a new alphabet order, determine whether the characters in the string appear
// in lexicographically increasing order. Solve this in `O(m + n)` time.

const newAlphabet = (inputString, newAlphabetOrder) => {
    let colorLog = colors.green('newAlphabet(') + colors.red(inputString + ', ' + newAlphabetOrder) + colors.green(') = ');
    const charToPosition = new Map();
    for (let i = 0; i < newAlphabetOrder.length; i++) {
        charToPosition.set(newAlphabetOrder[i], i);
    }
    for (let i = 0; i < inputString.length -1; i++) {
        const currentChar = inputString[i];
        const nextChar = inputString[i + 1];
        if (charToPosition.get(currentChar) > charToPosition.get(nextChar)) {
            return colorLog + colors.yellow(false);
        }
    }
    return colorLog + colors.yellow(true);
}

console.log(newAlphabet('dino', 'opqrstuvwxyzabcdefghijklmn'));           // => false
// analyzeComplexity(newAlphabet, ('dino', 'opqrstuvwxyzabcdefghijklmn'));
console.log(newAlphabet('leetcode', 'klmnopqrstuabcdefghijvwxyz'));       // => false
// analyzeComplexity(newAlphabet, ('leetcode', 'klmnopqrstuabcdefghijvwxyz'));
console.log(newAlphabet('leetcod', 'labefghijkmnpqrstucvowxdyz'));        // => true
// analyzeComplexity(newAlphabet, ('leetcod', 'labefghijkmnpqrstucvowxdyz'));

// ### `Longest Palindrome`
// Given a string, determine the length of the longest palindrome that can be
// built with those letters. Solve this in `O(n)` time.


const longestPalindrome = s => {
    let colorLog = colors.green('longestPalindrome(') + colors.red(s) + colors.green(') = ');
    const charFrequency = new Map();
    for (const char of s) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }
    let maxLength = 0;
    let hasOddFrequency = false;
    for (const frequency of charFrequency.values()) {
        maxLength += Math.floor(frequency / 2) * 2;
        if (frequency % 2 !== 0) {
            hasOddFrequency = true;
        }
    }
    if (hasOddFrequency) {
        maxLength += 1;
    }
    return colorLog + colors.yellow(maxLength);
}

console.log(longestPalindrome("abccccdd")); //  => 7 because the palindrome "dccaccd" can be built.
analyzeComplexity(longestPalindrome, "abccccdd")

// ### `Longest Substring`
// Given a string, find the length of the longest substring without repeating
// characters. Solve this in `O(n)` time.

const longestSubstring = str => {
    let colorLog = colors.green('longestSubString(') + colors.red(str) + colors.green(') = ');
    const charIndexMap = new Map();
    let maxLength = 0;
    let startIndex = 0;
    for (let endIndex = 0; endIndex < str.length; endIndex++) {
        const currentChar = str[endIndex];
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= startIndex) {
            startIndex = charIndexMap.get(currentChar) + 1;
        }
        charIndexMap.set(currentChar, endIndex);
        maxLength = Math.max(maxLength, endIndex - startIndex + 1);
    }
    return colorLog + colors.yellow(maxLength);
}

console.log(longestSubstring("abcabcbb"));      // => 3, where the longest substring is "abc"
analyzeComplexity(longestSubstring, "abcabcbb")
console.log(longestSubstring("bbbbb"));         // => 1, where the longest substring is "b"
analyzeComplexity(longestSubstring, "bbbbb");

// ### `Max Subarray Length`
// Given an array of integers, return the length of the longest subarray where the
// difference between its maximum value and its minimum value is at most 1. Solve
// this in `O(n)` time.

const maxSubArrayLength = array => {
    let colorLog = colors.green('maxSubArrayLength(') + colors.red(array) + colors.green(') = ');
    let maxLength = 0;
    let start = 0;
    let end = 0;
    let minVal = array[0];
    let maxVal = array[0];
    while (end < array.length) {
        minVal = Math.min(minVal, array[end]);
        maxVal = Math.max(maxVal, array[end]);
        if (maxVal - minVal > 1) {
            start++;
            minVal = Math.min(...array.slice(start, end + 1));
            maxVal = Math.max(...array.slice(start, end + 1));
        }
        maxLength = Math.max(maxLength, end - start + 1);
        end++;
    }
    return colorLog + colors.yellow(maxLength);
}

console.log(maxSubArrayLength([1,3,2,2,5,2,3,7]));  // => 5 because the longest subarray is [3,2,2,2,3]
analyzeComplexity(maxSubArrayLength, [1,3,2,2,5,2,3,7]);
console.log(maxSubArrayLength([1,1,1,1,3]));        // => 4 because the longest subarray is [1,1,1,1]
analyzeComplexity(maxSubArrayLength, [1,1,1,1,3]);

// ### `Coin Change`
// You are given coins of different denominations and a total amount of money
// amount. Write a function to compute the fewest number of coins that you need to
// make up that amount. If that amount of money cannot be made up by any
// combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.


const coinChange = (coinArray, n) => {
    let colorLog = colors.green('coinChange(') + colors.red(coinArray, n) + colors.green(') = ');
    const leastCoins = new Array(n + 1).fill(Infinity);
    leastCoins[0] = 0;
    for (const coin of coinArray) {
        for (let i = coin; i <= n; i++) {
            leastCoins[i] = Math.min(leastCoins[i], leastCoins[i - coin] + 1);
        }
    }
    let amountOfCoins = leastCoins[n] === Infinity ? -1 : leastCoins[n];
    return colorLog + colors.yellow(amountOfCoins);
}

const coins = [1, 5, 10, 25];
const coins2 = [5];

console.log(coinChange(coins, 11));      // => 2, 10 + 1 = 11
console.log(coinChange(coins2, 3));      // => -1
console.log(coinChange(coins2, 0));      // => 0

// ### `Climbing Steps`

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1, 2, or 3 steps. In how many distinct ways can
// you climb to the top?

const climbingSteps = n => {
    let colorLog = colors.green('climbingSteps(') + colors.red(n) + colors.green(') = ');
    const waysToClimb = new Array(n + 1).fill(0);
    waysToClimb[0] = 1;
    for (let i = 1; i <= n; i++) {
        waysToClimb[i] += waysToClimb[i - 1];
        if (i >= 2) waysToClimb[i] += waysToClimb[i - 2];
        if (i >= 3) waysToClimb[i] += waysToClimb[i - 3];
    }
    return colorLog + colors.yellow(waysToClimb[n]);
}

// There is 1 way to climb zero steps:
//   1. 0 steps
console.log(climbingSteps(0));  // 1

// There is 1 ways to climb one step:
//   1. 1 step
console.log(climbingSteps(1));  // 1

// There are 2 ways to climb two steps:
//   1. 1 step + 1 step
//   2. 2 steps
console.log(climbingSteps(2));  // 2

// There are 4 ways to climb three steps:
//   1. 1 step + 1 step + 1 step
//   2. 1 step + 2 steps
//   3. 2 steps + 1 step
//   4. 3 steps
console.log(climbingSteps(3));  // 4

// There are 5 ways to climb four steps:
//   1. 1 step + 1 step + 1 step + 1 step
//   2. 1 step + 1 step + 2 steps
//   3. 1 step + 2 steps + 1 step
//   4. 2 steps + 1 step + 1 step
//   5. 1 step + 3 steps
//   6. 3 steps + 1 steps
console.log(climbingSteps(4));  // 6
