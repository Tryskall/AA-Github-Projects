// File: whiteboardingProblems.js

const colors = require('colors');

// Define a function logBetween(lowNum, highNum) that will return an array
// from lowNum to highNum, inclusive. Inclusive means that the range
// includes lowNum and highNum.

// Time Complexity O(n) because the loop runs n times
// Space Complexity O(1) because the space used for i is constant
// function logBetween(lowNum, highNum) {
//     for (let i = lowNum; i <= highNum; i++) {
//         console.log(i);
//     }
//     let i = lowNum;
//     while (i <= highNum) {
//         console.log(i);
//         i++;
//     }
// }

// Time Complexity O(n) because the loop iterates from lowNum to highNum
// Space Complexity O(n) because the space used for the array is linear
function logBetween(lowNum, highNum) {
    let message = colors.green('logTable(') + colors.red(lowNum + ', ' + highNum) + colors.green(') = ');
    let logTable = [];
    for (let i = lowNum; i <= highNum; i++) {
        logTable.push(i);
    }
    return message + colors.yellow(logTable);
}

console.log(logBetween(-1, 2)); // => [-1,0,1,2]
console.log(logBetween(14, 6)); // => []
console.log(logBetween(4, 6));  // => [4,5,6]

// logBetweenStepper

// Write a function logBetweenStepper(min, max, step) that takes in three
//  numbers as parameters. The function should return an array of numbers
//  between min and max at step intervals.

// Time Complexity O(n) because the loop iterates from lowNum to highNum
// Space Complexity O(n) because the space used for the array is linear
const logBetweenStepper = (lowNum, highNum, stepper) => {
    let message = colors.green('logBetweenStepper(') + colors.red(lowNum + ', ' + highNum + ', ' + stepper) + colors.green(') = ');
    let stepperArray = [];
    for (let i = lowNum; i <= highNum; i += stepper) {
        stepperArray.push(i);
    }
    return message + colors.yellow(stepperArray);
}

console.log(logBetweenStepper(5, 9, 1)) // => [5, 6, 7, 8, 9]
console.log(logBetweenStepper(-10, 15, 5) )// => [-10, -5, 0, 5, 10, 15]

// printReverse

// Write a function printReverse(min, max) that returns an array of all
//  numbers from max to min (exclusive), in reverse order.

// Time Complexity O(n) because the loop iterates from max to min with stepper
// Space Complexity O(n) because the space used for the array is linear
const printReverse = (min, max) => {
    let message = colors.green('printReverse(') + colors.red(min + ', ' + max) + colors.green(') = ');
    let reverseArray = [];
    for (let i = max - 1; i > min; i--) {
        reverseArray.push(i);
    }
    return message + colors.yellow(reverseArray);
}

console.log(printReverse(13, 18)) // => [17, 16, 15, 14]
console.log(printReverse(90, 94)) // => [93, 92, 91]

// fizzBuzz

// Define a function fizzBuzz(max) that takes a number and returns
//  an array of every number from 0 to max that is divisible
//  by either 3 or 5, but not both.

// Time Complexity O(1) because it iterates once for constant time
// Space Complexity O(n) because the space used for the array is linear
const fizzBuzz = (max) => {
    let message = colors.green('fizzBuzz(') + colors.red(max) + colors.green(') = ');
    let fizzBuzzArray = [];
    for (let i = 0; i < max; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && (!(i % 15 === 0)))
        fizzBuzzArray.push(i);
    }
    return message + colors.yellow(fizzBuzzArray);
}

console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]

// isPrime

// Define a function isPrime(number) that returns true if number
// is prime. Otherwise, false. Assume number is a positive integer.

// Time Complexity O(n) because it iterates through loop number times
// Space Complexity O(1) because the space used is constant
const isPrimeHelper = number => {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Time Complexity O(n) because it iterates through loop number times
// Space Complexity O(1) because the space used is constant
const isPrime = (number) => {
    let message = colors.green('isPrime(') + colors.red(number) + colors.green(') = ');
    return message + colors.yellow(isPrimeHelper(number));
}

console.log(isPrime(0));  // => false
console.log(isPrime(2));  // => true
console.log(isPrime(10));  // => false
console.log(isPrime(11));  // => true
console.log(isPrime(9));  // => false
console.log(isPrime(2017));  // => true

// maxValue

// Write a function maxValue(array) that returns the largest
// value in array. Assume array is an array of numbers.

// Time Complexity O(n) because it iterates through array number times
// Space Complexity O(1) because the space used is constant
const maxValue = (array) => {
    let message = colors.green('maxValue(') + colors.red(array) + colors.green(') = ');
    if (array.length < 1) return message + colors.yellow(null);
    const max = Math.max(...array);
    return message + colors.yellow(max);
}

console.log(maxValue([12, 6, 43, 2]));  // => 43
console.log(maxValue([]));  // => null
console.log(maxValue([-4, -10, 0.43]));  // => 0.43

// myIndexOf

// Write a function myIndexOf(array, target) that takes
//  in an array of numbers and a target number as arguments.
//   It should return the index value of the target if it
//   is present in the array or -1 if it is not present.

// Time Complexity O(n) because it iterates
// Space Complexity O(1) because space is constant
const myIndexOf = (array, target) => {
    let message = colors.green('myIndexOf(') + colors.red(array, target) + colors.green(') = ');
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if ( target === array[i]) return message + colors.yellow(i);
    }
    return message + colors.yellow(-1);
}

console.log(myIndexOf([1,2,3,4],4)); // => 3
console.log(myIndexOf([5,6,7,8],2)); // => -1

// factorArray

// Write a function factorArray(array, number) that takes in an array
//  of numbers and a number and returns an array of all the factors.

// Time Complexity O(n) because iteration of loops
// Space Complexity O(n) because space is porportional to factors of number
const factorArray = (array, number) => {
    let message = colors.green('factorArray(') + colors.red(array, number) + colors.green(') = ');
    const factorsOfNumberArray = Array.from({ length: number }, (_, i) => i + 1).filter(i => number % i === 0);
    const matchingNumsArray = array.filter(num => factorsOfNumberArray.includes(num));
    return message + colors.yellow(matchingNumsArray);
}

console.log(factorArray([2,3,4,5,6],20)); // => [2,4,5]
console.log(factorArray([2,3,4,5,6],35)); // => [5]
console.log(factorArray([10,15,20,25],5)); // => []

// oddRange

// Write a function oddRange(end) that takes in a number and
// returns an array containing all positive odd numbers up to end.

// Time Complexity O(n) because iteration of loop
// Space Complexity O(n) because it creates an array
const oddRange = end => {
    let message = colors.green('oddRange(') + colors.red(end) + colors.green(') = ');
    let numbersArray = Array.from({ length: end + 1 }, (_, i) => i);
    let posOddArray = numbersArray.filter(num => num % 2 !== 0);
    return message + colors.yellow(posOddArray);
}

console.log(oddRange(13));  // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6));  // => [ 1, 3, 5 ]

// reverseHyphenString

// Write a function reverseHyphenString(string) that takes
//  in a hyphenated string and returns a the hyphenated string reversed.

// Time Complexity O(n) because iteration of loop
// Space Complexity O(1) because it does not create a new array
const reverseHyphenString = string => {
    let message = colors.green('reverseHyphenString(') + colors.red(string) + colors.green(') = ');
    let splitString = string.split('-');
    splitString.reverse();
    let revStringJoined = splitString.join('-');
    return message + colors.yellow(revStringJoined);
}

console.log(reverseHyphenString("Go-to-the-store")); // => "store-the-to-Go"
console.log(reverseHyphenString("Jump,-jump-for-joy")); // => "joy-for-jump-Jump,"

// intersect

// Write a function intersect(arr1, arr2) that takes in two arrays
// and returns a new array containing the elements common to both arr1 and arr2.

// Time Complexity O(n) because it creates set
// Space Complexity O(n) because it creates a new array
const intersect = (arr, arr2) => {
    let message = colors.green('intersect(') + colors.red(arr, arr2) + colors.green(') = ');
    const set1 = new Set(arr);
    const set2 = new Set(arr2);
    const commonArray = [...set1].filter(element => set2.has(element));
    return message + colors.yellow(commonArray);
}

console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])); // => [ 'b', 'd' ]
console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])); // => []

// mirrorArray

// Write a function mirrorArray(array) that takes in an array as an
// argument and returns a new array "mirrored" as shown in the examples:

// Time Complexity O(n) because iteration of loop
// Space Complexity O(n) because it creates a new array
const mirrorArray = array => {
    let message = colors.green('mirrowArray(') + colors.red(array) + colors.green(') = ');
    let mirroredArray = array.concat(array.slice().reverse());
    return message + colors.yellow(mirroredArray);
}

console.log(mirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
console.log(mirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

// abbreviate

// Write a function abbreviate(sentence) that takes in a sentence string and returns
// a new sentence where words longer than 4 characters have their vowels removed.
// Assume the sentence has all lowercase characters. Feel free to use the array
// below in your solution: const vowels = ['a', 'e', 'i', 'o', 'u'];

// Time Complexity O(n) because iteration using map
// Space Complexity O() because creates new string
const abbreviate = sentence => {
    let message = colors.green('abbreviate(') + colors.red(sentence) + colors.green(') = ');
    const abbrSentence = sentence.split(' ').map(word => (word.length > 4 ? removeVowels(word) : word)).join(' ');
    return message + colors.yellow(abbrSentence);
}

// Time Complexity O(n) because creates new set
// Space Complexity O(n) because it creates a new string
const removeVowels = word => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    return word.split('').filter(char => !vowels.has(char)).join('');
}

console.log(abbreviate('the bootcamp is fun')); // => 'the btcmp is fun'
console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
console.log(abbreviate('hello world')); // => 'hll wrld'
console.log(abbreviate('how are you')); // => 'how are you'

// adults

// Write a function adults(people) that takes in an array of person objects.
// The function should return an array containing the names of those who
// have an age of 18 or higher.

// Time Complexity O(n) because iteration over each person
// Space Complexity O(n) because creates a new array
const adults = people => {
    let message = colors.green('adults(') + colors.red(people) + colors.green(') = ');
    const ofAge18 = people.filter(person => person.age >= 18).map(person => person.name);
    return message + colors.yellow(ofAge18);
}

const ppl = [
    {name: 'John', age: 20},
    {name: 'Jim', age: 13},
    {name: 'Jane', age: 18},
    {name: 'Bob', age: 7}
  ];

console.log(adults(ppl)); // => [ 'John', 'Jane' ]

// countScores

// Write a function countScores(people) that takes in an array
// of score objects, people, as its input. A score object, people,
//  has two key-value pairs: a name (string) and a score (number).
//  countScores(people) should return an object that has key-value
//  pairs where each name is a key and the value is their total score.

// Time Complexity O(n) because iteration of each person
// Space Complexity O(n) because new array is created
const countScores = people => {
    let message = colors.green('countScores(') + colors.red(people) + colors.green(') = ');
    let countedScores = new Map();
    for (let person of people) {
        const { name, score } = person;
        countedScores.set(name, (countedScores.get(name) || 0) + score);
    }
    // for (let person of people) {
    //     const { name, score } = person;
    //     if (countedScores.hasOwnProperty(name)) {
    //         countedScores[name] += score;
    //     } else {
    //         countedScores[name] = score;
    //     }
    // }
    return message + colors.yellow(countedScores);
}

// Example 1:
const ppl2 = [
    { name: "Anthony", score: 10 },
    { name: "Fred", score : 10 },
    { name: "Anthony", score: -8 },
    { name: "Winnie", score: 12 }
  ];
console.log(countScores(ppl2)); // => { Anthony: 2, Fred: 10, Winnie: 12 }

  // Example 2
  const peeps = [
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 }
  ];

console.log(countScores(peeps)); // => { Anthony: 4, Fred: 4, Winnie: 6

// firstNPrimes

// Using the isPrime function you made, write a function firstNPrimes(n)
// that returns an array of the first n prime numbers

// Time Complexity O(n) because iteration of n
// Space Complexity O(n) because creation of new array
const firstNPrimes = n => {
    let message = colors.green('firstNPrimes(') + colors.red(n) + colors.green(') = ');
    let primesArray = [];
    let num = 2;
    while (primesArray.length < n) {
        if (isPrimeHelper(num)) {
            primesArray.push(num);
        }
        num++;
    }
    return message + colors.yellow(primesArray);
}

console.log(firstNPrimes(0));  // => []
console.log(firstNPrimes(1));  // => [2]
console.log(firstNPrimes(4));  // => [2, 3, 5, 7]

// peakFinder

// Write a function peakFinder(array) that takes in an array of numbers.
// It should return an array containing the indices of all the peaks.
// A peak is an element that is greater than both of its neighbors.
// If it is the first or last element, it is a peak if it is greater
// than its one neighbor. Assume the array has a length of at least 2.

// Time Complexity O(n) because iteration through loop
// Space Complexity O(1) because creation of new array
const peakFinder = array => {
    let message = colors.green('peakFinder(') + colors.red(array) + colors.green(') = ');
    let peakArray = [];
    if (array[0] > array[1]) peakArray.push(0);
        if (array[array.length -1] > array[array.length -2]) peakArray.push(array.length - 1);
    for (let i = 1; i < array.length - 1; i++) {
        if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
            peakArray.push(i);
        }
    }
    return message + colors.yellow(peakArray);
}

console.log(peakFinder([1, 2, 3, 2, 1])); // => [2]
console.log(peakFinder([2, 1, 2, 3, 4, 5])); // => [0, 5]
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // => [2, 6, 8]

// divisibleByThreePairSum

// Write a function divisibleByThreePairSum(array) that takes an array of numbers.
// It should return an array of all the pairs of indices, whose elements sum
// to a multiple of three.

// Time Complexity O(n) because iterization through loop
// Space Complexity O(1) because use of same indices in new array
const divisibleByThreePairSum = array => {
    let message = colors.green('divisbleByThreePairSum(') + colors.red(array) + colors.green(') = ');
    let pairsOfIndices = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) % 3 === 0) {
                pairsOfIndices.push([i, j]);
            }
        }
    }
    return message + colors.yellow(pairsOfIndices);
}

const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
console.log(arr1);

const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 // => [[1, 3]]
console.log(arr2);

// zipArray

// Write a function zipArray(arr1, arr2) that takes in two arrays
// and "zips" them together by returning a single 2D-array.
// Assume that both input arrays have the same length.

// Time Complexity O(n) because iteration through loop
// Space Complexity O(1) because use of same space in new array
const zipArray = (array1, array2) => {
    let message = colors.green('zipArray(') + colors.red(array1, array2) + colors.green(') = ');
    let zippedArray = [];
    for (let i = 0; i < array1.length; i++) {
            zippedArray.push([array1[i], array2[i]]);
    }
    return message + colors.yellow(zippedArray);
}

const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
console.log(result); // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]

// twoDimensionalTotal

// Write a function twoDimensionalTotal(array) that takes in a 2D array
// of numbers and returns the total sum of all elements.

// O(n^2)
// const twoDimensionalTotal = array => {
//     let message = colors.green('twoDimensionalTotal(') + colors.red(array) + colors.green(') = ');
//     let mixedArray = [];
//     for (let h = 0; h < array.length; h++) {
//         for (let j = 0; j < array[h].length; j++) {
//             mixedArray.push(array[h][j]);
//         }
//     }
//     let totalSum = 0;
//     for (let i = 0; i < mixedArray.length; i++) {
//         totalSum += mixedArray[i];
//     }
//     return message + colors.yellow(totalSum);
//  }

// O(1)
const twoDimensionalTotal = array => {
    let message = colors.green('twoDimensionalTotal(') + colors.red(array) + colors.green(') = ');
    const totalSum = array.reduce((accOuter, row) => {
        return accOuter + row.reduce((accInner, num) => accInner + num, 0);
    }, 0);
    return message + colors.yellow(totalSum);
}

 const array1 = [
    [5, 2, 5, 3],
    [12, 13],
  ];

  console.log(twoDimensionalTotal(array1));  // => 40

  const array2 = [
    [2],
    [1, 9],
    [1, 1, 1]
  ]

  console.log(twoDimensionalTotal(array2));  // => 15

// countInnerElement

// Write a function countInnerElement(arr) that takes in a
// 2-D array of elements. Each element of arr is a sub array
// that contains multiple elements. The number of elements
// contained in each sub array are not the same. You can
// assume each sub array contains at least one element.
// You should return an object that counts how many
// times each element in each sub array repeats.

// Time Complexity O(n) because subArray length is n
// Space Complexity O(n) because unique elements of object creation
const countInnerElement = arr => {
    let message = colors.green('countInnerElement(') + colors.red(arr) + colors.green(') = ');
    let countArray = {};
    arr.forEach(subArray => {
        subArray.forEach(element => {
            countArray[element] = (countArray[element] || 0) + 1;
        });
    });
    return message + colors.yellow(countArray);
}

const arr3 = [
    [1, 2, 4, 5],
    [2, 7, 4],
    [1, 4, 5, 2, 7]
  ]

console.log(countInnerElement(arr3));  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

  const arr4 = [
    ['a','b','c','d'],
    ['a','b'],
    ['a','c','d','a']
  ]

console.log(countInnerElement(arr4));  // => {a: 4, b: 2, c: 2, d: 2}

// twoDiff

// Write a function twoDiff(array), given an array of numbers,
// return a 2-D array, where each of the sub array are indices
// of the two numbers such that their difference is 2. If there
// are no such numbers, return an empty array.

// NOTE: The pairs are unique. HINT: Account for negative difference too!

// Time Complexity O(n) because length of input array
// Space Complexity O() because creation of new array
const twoDiff = array => {
    let message = colors.green('twoDiff(') + colors.red(array) + colors.green(') = ');
    let twoDiffArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] - array[j] === 2 || array[j] - array[i] === 2) {
                let pair = [i, j];
                twoDiffArray.push(pair);
            }
        }
    }
    return message + colors.yellow(twoDiffArray);
}

console.log(twoDiff([2, 3, 4, 6, 1, 7]));  // => [[0, 2], [1, 4], [2, 3]]
console.log(twoDiff([0, 2, 4, 3, 5]));  // => [[0, 1], [1, 2], [3,4]]
console.log(twoDiff([])); // => []

// arrayDiff

// Write a function arrayDiff(arr1, arr2) that takes in two arrays.
// The function should return a new array, containing the elements
// of arr1 that are not also in arr2.

// Note: Assume both arrays have unique elements.

// Time Complexity O(n) because n is length of arrays
// Space Complexity O(n) because creation of new array
const arrayDiff = (arr1, arr2) => {
    let message = colors.green('arrayDiff(') + colors.red(arr1, arr2) + colors.green(') = ');
    let diffArray = arr1.filter(element => !arr2.includes(element));
    return message + colors.yellow(diffArray);
}

const array5 = [1, 23, 2, 43, 3, 4]
const array6 = [3, 23]
console.log(arrayDiff(array5, array6));  // => [1, 2, 43 ,4]

const array7 = ['a', 'ab', 'c', 'd', 'c']
const array8 = ['d']
console.log(arrayDiff(array7, array8));  // => ['a', 'ab', 'c', 'c']

// valueCounter

// Write a function valueCounter(obj, val) that takes in an
// object and a value, the function should return the number
// of times val repeats as a value in obj.

// Time Complexity O(n) because n is the number of keys in object
// Space Complexity O(1) because space used is constant
const valueCounter = (obj, val) => {
    let message = colors.green('valueCounter(') + colors.red(obj, val) + colors.green(') = ');
    let count = Object.values(obj).filter(value => value === val).length;
    // for (const key in obj) {
    //     if (obj.hasOwnProperty(key) && obj[key] === val) {
    //         count++;
    //     }
    // }
    return message + colors.yellow(count);
}

const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
console.log(valueCounter(obj1, 'Anne'));  // => 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
console.log(valueCounter(obj2, 88));  // => 0

const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
console.log(valueCounter(pairs, 'Roman'));  // => 2

// elementCount

// Write a function elementCount(array) that returns an object.
// Each key corresponds to an element in the array and the value
// corresponds to how many times that element appears in the array.

// Time Complexity O(n) because n is length of array
// Space Complexity O(n) because creation of new object
const elementCount = array => {
    let message = colors.green('elementCount(') + colors.red(array) + colors.green(') = ');
    let newObjectCount = {};
    array.forEach(element => newObjectCount[element] = (newObjectCount[element] || 0) + 1);
    // for (const element of array) {
    //     newObjectCount[element] = (newObjectCount[element] || 0) + 1;
    // }
    return message + colors.yellow(newObjectCount);
}

console.log(elementCount(["a", "a", "b", "b"])); // => { "a" : 2, "b" : 2 }
console.log(elementCount(['c', 'a', 'c', 'a', 'b'])); // => { "c": 2, "a": 2, "b": 1 }

// nextTwoPrimes

// Write a function nextTwoPrimes(num) that takes in a number num and
// returns the next two prime numbers greater than num.

// Time Complexity O(n) because continuation until finds next 2 primes
// Space Complexity O(1) because stores a constant num of variables
const nextTwoPrimes = num => {
    let message = colors.green('nextTwoPrimes(') + colors.red(num) + colors.green(') = ');
    let count = 0;
    let i = num + 1;
    let twoPrimesAfterNum = [];
    while (count < 2) {
        if (isPrimeHelper(i)) {
            twoPrimesAfterNum.push(i);
            count++;
        }
        i++;
    }
    return message + colors.yellow(twoPrimesAfterNum);
}

console.log(nextTwoPrimes(2));  // => [ 3, 5 ]
console.log(nextTwoPrimes(3));  // => [ 5, 7 ]
console.log(nextTwoPrimes(7));  // => [ 11, 13 ]
console.log(nextTwoPrimes(8));  // => [ 11, 13 ]
console.log(nextTwoPrimes(20));  // => [ 23, 29 ]
console.log(nextTwoPrimes(97));  // => [ 101, 103 ]

// pairProduct

// Write a function pairProduct(arr, num) that accepts an array
// of numbers, arr, and a target number, num. It should return
// pairs of indices whose elements multiply to num. No pair
// should appear twice in the result.

// Time Complexity O(n) because n is length of array
// Space Complexity O(n) because creation of new array
const pairProduct = (arr, num) => {
    let message = colors.green('pairProduct(') + colors.red(arr, num) + colors.green(') = ');
     let multipliedPairs = [];
     arr.forEach((value, index) => {                // for (let i = 0; i < arr.length; i++) {
        for (let j = index + 1; j < arr.length; j++) {
            let product = value * arr[j];           // let pairs = arr[i] * arr[j];
                if (product === num) {              // if (pairs === num) {
                if (!(multipliedPairs.some(pair => pair.includes(index) || pair.includes(j)))) {
                    multipliedPairs.push([index, j]);
                }
            }
        }
     });
     return message + colors.yellow(multipliedPairs);
}

console.log(pairProduct([1, 2, 3, 4, 5], 4)); // => [ [ 0, 3 ] ]
console.log(pairProduct([1, 2, 3, 4, 5], 8)); // => [ [ 1, 3 ] ]
console.log(pairProduct([1, 2, 3, 12, 8], 24)); // => [ [ 1, 3 ], [ 2, 4 ] ]

// twoDimensionalSize

// Write a function twoDimensionalSize(array) that takes in a 2D-array as
// an argument. The function should return the total number of elements
// in the 2D-array.

// Time Complexity O(n) because length of rows & cols
// Space Complexity O(1) because single variable use is linear
const twoDimensionalSize = array => {
    let message = colors.green('twoDimensionalSize(') + colors.red(array) + colors.green(') = ');
    let numOfElements = 0;
    array.forEach(innerArray => {                       // for (let i = 0; i < array.length; i++) {
        numOfElements += innerArray.length;             // for (let j = 0; j < array[i].length; j++) {
        //     numOfElements++
        // }
    });
    return message + colors.yellow(numOfElements);
}

const arr6 = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
  ];
  console.log(twoDimensionalSize(arr6));  // => 9

  const arr7 = [
    ['a'],
    ['b', 'c', 'd', 'e']
  ];
  console.log(twoDimensionalSize(arr7));  // => 5

// longWordCount

// Write a function longWordCount(string) that takes in a string
// and returns the number of words longer than 7 characters.

// Time Complexity O(n) because n is number of word in string
// Space Complexity O(1) because single variable use is linear
const longWordCount = string => {
    let message = colors.green('longWordCount(') + colors.red(string) + colors.green(') = ');
    let words = string.split(' ');
    let sevenPlusLetterWordCount = 0;
    words.forEach(word => { // for (let i = 0; i < words.length; i++) {
        if (word.length > 7) {
            sevenPlusLetterWordCount++;
        }
    });
    return message + colors.yellow(sevenPlusLetterWordCount);
}

console.log(longWordCount(""));  // => 0
console.log(longWordCount("short words only"));  // => 0
console.log(longWordCount("one reallylong word"));  // => 1
console.log(longWordCount("two reallylong words inthisstring"));  // => 2
console.log(longWordCount("allwordword longwordword wordswordword"));  // => 3
console.log(longWordCount("seventy schfifty five"));  // => 1

// factorial

// Write a function factorial(n), that returns the factorial of the number n.
// For example, the factorial of 4 is 4 * 3 * 2 * 1 = 24.

// Time Complexity O(n) because iteration through loop
// Space Complexity O(1) because single variable use is linear
const factorial = n => {
    let message = colors.green('factorial(') + colors.red(n) + colors.green(') = ');
    let factorialN = 1;
    for (let i = 2; i <= n; i++) {
        factorialN *= i;
    }
    return message + colors.yellow(factorialN);
}

console.log(factorial(1));  // => 1
console.log(factorial(4));  // => 24
console.log(factorial(5));  // => 120
console.log(factorial(10));  // => 3628800

// lcm

// Write a function lcm(num1, num2) that returns the lowest number
// which is a multiple of both num1 and num2.

// Time Complexity O(1) because of use of Euclidian Algorithm
// Space Complexity O(1) because of use of Euclidian Algorithm
const findGCD = (a, b) => {
    return b === 0 ? a : findGCD(b, a % b); // if b === 0 return(?) a, if b !== 0 return findGCD(b, a % b)
}                                           // Euclidian Algorithm (b, a % b) = find CD of b until 0
                                            // the remainder of a divided by b is used recursively

// Time Complexity O(1) because helper function is constant
// Space Complexity O(1) because helper function is constant
const lcm = (num1, num2) => {
    let message = colors.green('lcm(') + colors.red(num1, num2) + colors.green(') = ');
    let lowestMultiple = Math.abs(num1 * num2) / findGCD(num1, num2);
    return message + colors.yellow(lowestMultiple);
}

console.log(lcm(2, 3));  // => 6
console.log(lcm(6, 10));  // => 30
console.log(lcm(24, 26));  // => 312

// hipsterfyWord

// Write a function hipsterfyWord(word) that takes takes in a string
// and returns the string with the last vowel removed. 'y' is not a vowel.

// Time Complexity O(n) because iteration through loop
// Space Complexity O(1) because use of single variable
const hipsterfyWord = word => {
    let message = colors.green('hipsterfyWord(') + colors.red(word) + colors.green(') = ');
    let hipsterfiedWord;
    let vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    for (let i = word.length -1; i >= 0; i--) {
        const char = word[i];
        if (vowels.has(char) && char !== 'y') {
            hipsterfiedWord = word.slice(0, i) + word.slice(i + 1);
            return message + colors.yellow(hipsterfiedWord);
        }
    }
    return message + colors.yellow(word);
}

console.log(hipsterfyWord('proper')); // => 'propr'
console.log(hipsterfyWord('tonic')); // => 'tonc'
console.log(hipsterfyWord('PANTHER')); // => 'PANTHR'
console.log(hipsterfyWord('BACKWARDS')); // => 'BACKWRDS'

// hipsterfy

// Write a function hipsterfy(sentence) that takes takes a string containing
// several words as input. Remove the last vowel from each word.
// 'y' is not a vowel.

// Time Complexity O(n) because iteration of loop
// Space Complexity O(1) because creation of Set
const hipsterfyWordHelper = word => {
    let vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    for (let i = word.length -1; i >= 0; i--) {
        const char = word[i];
        if (vowels.has(char) && char !== 'y') {
            let hipsterfiedWord = word.slice(0, i) + word.slice(i + 1);
            return hipsterfiedWord;
        }
    }
    return word;
}

// Time Complexity O(n) because uses helper with iteration
// Space Complexity O(1) because helper uses Set
const hipsterfy = sentence => {
    let message = colors.green('hipsterfy(') + colors.red(sentence) + colors.green(') = ');
    let words = sentence.split(' ');                    // declare words to equal the words of sentence as new strings
    let hipsterfiedWords = words.map(hipsterfyWordHelper);
    console.log(hipsterfiedWords);
    let hipsterfiedSentence = hipsterfiedWords.join(' ');
    return message + colors.yellow(hipsterfiedSentence);
}

console.log(hipsterfy("proper"));  // => "propr"
console.log(hipsterfy("proper tonic panther"));  // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana"));  // => "towl flickr banan"
console.log(hipsterfy("runner anaconda"));  // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries"));  // => "turtl cheeseburgr fris"

// objectToString

// Write a function objectToString(count) that takes in a char count
// object and returns a string representing the counts of each character.

// Time Complexity O(n) because count iterates through Object
// Space Complexity O(n) because creation of new array
const objectToString = count => {
    let message = colors.green('objectToString(') + colors.red(count) + colors.green(') = ');
    let result = Object.entries(count).map(([char, charCount]) => char.repeat(charCount)).join('');
    // for (char in count) {
    //     result += char.repeat(count[char]);
    // }
    return message + colors.yellow(result);
}

console.log(objectToString({ a : 2, b: 4, c: 1 })); // => 'aabbbbc'
console.log(objectToString({ b: 1, o: 2, t: 1 })); // => 'boot'

// shortestWord

// Write a function shortestWord(sentence) that returns the shortest word of a sentence.
// You can assume that the words of the sentence all have different lengths.

// Time Complexity O(n) because iteration through words
// Space Complexity O(1) because uses contant space
const shortestWord = sentence => {
    let message = colors.green('shortestWord(') + colors.red(sentence) + colors.green(') = ');
    let words = sentence.split(' ');                // words are new strings
    let shortWord = words.reduce((shortest, current) => current.length < shortest.length ? current : shortest, words[0]);
    // let shortWord = words[0];
    // for (let i = 1; i < words.length; i++) {        // iterate through sentence
    //     if (words[i].length < shortWord.length) shortWord = words[i];
    //     }
    return message + colors.yellow(shortWord);
}

console.log(shortestWord('app academy is cool')); // => 'is'
console.log(shortestWord('programming bootcamp')); // => 'bootcamp'

// greatestCommonFactor

// Write a function greatestCommonFactor(num1, num2) that returns the
// largest number that is divides both num1 and num2.

// Time Complexity O(n) because iteration through new arrays
// Space Complexity O(1) because use of Euclidean Algorithm
const greatestCommonFactor = (num1, num2) => {
    let message = colors.green('greatestCommonFactor(') + colors.red(num1, num2) + colors.green(') = ');
    let gCF = (num2 === 0 ? num1 : findGCD(num2, num1 % num2)); // Ternary: condition ? expression_if_true : expression_if_false
    return message + colors.yellow(gCF);                        // if num2 equals 0 return(?) num1
}                                                               // if num2 !== 0 return findGCD(num2, num1 % num2)

console.log(greatestCommonFactor(15, 25)); // => 5
console.log(greatestCommonFactor(16, 24)); // => 8
console.log(greatestCommonFactor(7, 11)); // => 1

// isPassing

// Write a function isPassing(assessments) that takes in an array of
// assessment objects. The function should return true if the average
// assessment score is at least 70. It should return false otherwise.

// Time Complexity O(n) because iteration through object
// Space Complexity O(1) because use of single variable
const isPassing = assessments => {
    let message = colors.green('isPassing(') + colors.red(assessments) + colors.green(') = ');
    // let avgscore70OrLess;            // not used
    if (assessments.length > 0) {       // check if array is not empty
                                        // calculate the total score using reduce() method
        const totalScore = assessments.reduce((sum, assessments) => sum + assessments.score, 0);
        const averageScore = totalScore / assessments.length;
        return message + colors.yellow(averageScore >= 70);
    }
    return message + colors.yellow(false);
}

const assessments1 = [
    { number: 1, score: 60 },
    { number: 2, score: 90 },
    { number: 3, score: 80 },
    { number: 4, score: 100 },
    { number: 5, score: 85 }
  ];

console.log(isPassing(assessments1)); // => true

const assessments2 = [
  { number: 1, score: 60 },
  { number: 2, score: 20 },
  { number: 3, score: 45 }
];

console.log(isPassing(assessments2)); // => false

// valueConcat

// Write a function valueConcat(array, obj) that takes in an array
// and object The function should return a new array where each element
// is concatenated with it's corresponding value from the object.

// Time Complexity O(n) because iteration through object
// Space Complexity O(n) because creation of new array
const valueConcat = (arr, obj) => {
    let message = colors.green('valueConcat(') + colors.red(arr, obj) + colors.green(') = ');
    const concatenatedArray = arr.map((element) => {   // use map to create new array with concat values
        if  (obj.hasOwnProperty(element)) {            // check if obj has corresponding value with currentElement
            return element + obj[element];             // concatenate the element with corresponding value from obj
        } else {
            return element;                            // if no value found return original element
        }
    })
    return message + colors.yellow(concatenatedArray);
}

const arr8 = ['alex', 'maurice', 'meagan', 'ali'];
const obj4 = { alex: 'bronca', ali: 'harris' }
console.log(valueConcat(arr8, obj4)); // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]
console.log(valueConcat(['a', 'b', 'c'], { b: 2, c: 3 }));// => [ 'a', 'b2', 'c3' ]

// threeInARow

// Write a function threeInARow(arr) that takes in an array of numbers
// and returns true if the array contains 3 of the same number consecutively.
// The function should return false otherwise.

// Time Complexity O(n) because iteration of loop
// Space Complexity O(1) because no new space is created
const threeInARow = arr => {
    let message = colors.green('threeInARow(') + colors.red(arr) + colors.green(') = ');
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr.slice(i, i + 3).every(element => element === arr[i])) {
        // if ([arr[i], arr[i + 1], arr[i + 2]].every(element => element === arr[i])) {
            return message + colors.yellow(true);
        }
    }
    return message + colors.yellow(false);
}

console.log(threeInARow([4, 3, 7, 7, 7, 8, 13]));  // => true;
console.log(threeInARow([10, 9, 20, 33, 3, 3]));  // => false;

// variableNameify

// Write a function variableNameify(words) that takes in an array of words.
// The function should return a string representing the variable name
// obtained by combining the words and captitalizing them in mixCased style

// Time Complexity O(n) because iteration through words
// Space Complexity O(n) because creation of new string
const variableNameify = words => {
    let message = colors.green('variableNameify(') + colors.red(words) + colors.green(') = ');
    const camelCased = words.map((word, index) => index === 0 ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1)).join('');
    // let camelCased = words[0];
    // for (let i = 1; i < words.length; i++) {
    //     camelCased += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    // }
    return message + colors.yellow(camelCased);
}

console.log(variableNameify(['is', 'prime'])); // => 'isPrime'
console.log(variableNameify(['remove', 'last', 'vowel'])); // => 'removeLastVowel'
console.log(variableNameify(['MaX', 'VALUE'])); // => 'maxValue'

// threeIncreasing

// Write a function threeIncreasing(arr) that takes in an array of numbers
// and returns true if the array contains 3 consecutive numbers in
// increasing order. The function should return false otherwise. Note
// that the 3 consecutive numbers should be increasing by 1, so
// the second number is 1 greater than the first, and the third number
// is 1 greater than the second.

// Time Complexity O(n) because iteration through array
// Space Complexity O(1) because no new space is created
const threeIncreasing = arr => {
    let message = colors.green('threeIncreasing(') + colors.red(arr) + colors.green(') = ');
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] === (arr[i + 1] - 1) && (arr[i] === arr[i + 2] - 2)) {
            return message + colors.yellow(true);
        }
    }
    return message + colors.yellow(false);
}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));  // => true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));  // => false

// reverse2D

// Write a function reverse2D(array) that takes in a 2D array of strings.
// The function should return a string representing the elements
// of the array in reverse order.

// Time Complexity O(n) because iteration using map
// Space Complexity O() because creation of new array
const reverse2D = array => {
    let message = colors.green('reverse2D(') + colors.red(array) + colors.green(') = ');
    const reversedArray = [...array].reverse();
    // reversedArray = array.map(subArray => subArray.reverse());  // use .map to reverse each subArray
    // reversedArray.reverse();                                    // use .reverse to reverse order
    const flattenedArray = reversedArray.flatMap(subArray => [...subArray].reverse());
    // const flattenedArray = [].concat(...reversedArray);         // .concat to make single array
    const resultString = flattenedArray.join('');               // .join to make single string
    return message + colors.yellow(resultString);
}

const arr10 = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f'],
    ['g', 'h', 'i']
  ];

  console.log(reverse2D(arr10)); // => 'ihgfedcba'
  const arr11 = [
    ['Julian', 'Matt', 'Mike'],
    ['Oscar', 'Patrick']
  ];
  console.log(reverse2D(arr11)); // => 'PatrickOscarMikeMattJulian'

// reverb

// Write a function reverb(word) that takes in a word string and
// returns the word with all characters after the last vowel repeated.

// Time Complexity O(n) because iteration through word
// Space Complexity O(n) because creates new string
const reverb = word => {
    let message = colors.green('reverb(') + colors.red(word) + colors.green(') = ');
    if (typeof word !== 'string') return message + colors.magenta("Input is not a string");
    const vowels = 'aeiouAEIOU';
    const lastVowelIndex = Array.from(word).reverse().findIndex(char => vowels.includes(char));
    const reverbed = lastVowelIndex !== -1 ? word.slice(-lastVowelIndex - 1).split('').join('') : '';
    return message + colors.yellow(word + reverbed);
    // let reverbed = '';
    // let vowels = 'aeiouAEIOU'
    // if (typeof word === 'string') {
    //     for (let i = word.length - 1; i >= 0; i--) {
    //         let char = word[i];
    //         if (vowels.includes(char)) {
    //             reverbed = word + word.slice(i).split('').join('');
    //             return message + colors.yellow(reverbed);

    //         }
    //     }
    //     return message + colors.yellow(word);
    // }
    // return message + colors.magenta("Input is not a string");
}

console.log(reverb('running'));  // => 'runninging'
console.log(reverb('wild'));  // => 'wildild'
console.log(reverb('debugged'));  // => 'debuggeded'
console.log(reverb('my'));  // => 'my'
console.log(reverb(234));  // => 'Input is not a string'

// countRepeats

// Write a function countRepeats(string) that takes in a string and
// returns the number of letters that appear more than once in the
// string. You may assume the string contains only lowercase letters.
// Count the number of letters that repeat, not the number of times
// they repeat in the string.

// Time Complexity O(n) because iteration of string
// Space Complexity O(n) because creation of new string
const countRepeats = string => {
    let message = colors.green('countRepeats(') + colors.red(string) + colors.green(') = ');
    let repeatLetterCount = 0;
    let repeatedLetters = new Set();
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        for (let j = i + 1; j < string.length; j++) {
            if (char === string[j] && !repeatedLetters.has(char)) {
                    repeatedLetters.add(char);
                    repeatLetterCount++;
            }
        }
    }
    return message + colors.yellow(repeatLetterCount);
}

console.log(countRepeats('calvin')); // => 0
console.log(countRepeats('caaaalvin')); // => 1
console.log(countRepeats('pops')); // => 1
console.log(countRepeats('mississippi')); // => 3
console.log(countRepeats('hellobootcampprep')); // => 4

// pairsToString

// Write a function pairsToString(arr) that takes in an array of pairs.
// The function should return a string corresponding to the pairs.

// Time Complexity O(n) because iteration through pairs
// Space Complexity O(n) because creating of new string from pairs
const pairsToString = arr => {
    let message = colors.green('pairsToString(') + colors.red(arr) + colors.green(') = ');
    const stringedLetters = arr.reduce((acc, [char, count]) => {
        return acc + char.repeat(count);
    }, '');
    // let stringedLetters = '';
    // let count = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     while (count < arr[i][1]) {
    //         stringedLetters += arr[i][0];
    //         count++;
    //     }
    //     count = 0;
    // }
    return message + colors.yellow(stringedLetters);
}

const array13 = [
    ['a', 3],
    ['b', 1],
    ['c', 2]
  ];
  console.log(pairsToString(array13));  // => 'aaabcc'

  const array14 = [
    ['f', 1],
    ['o', 2],
    ['d', 1],
    ['!', 1]
  ];
  console.log(pairsToString(array14));  // => 'food!'

// countAdjacentSums

// Write the function countAdjacentSums(arr, n) that takes an array
// and number. It should count the number of times that two adjacent
// numbers in an array add up to n.

// Time Complexity O(n) because iteration through array
// Space Complexity O(n) because creation of new array
// new Space Complexity O(1) because no new array is created
const countAdjacentSums = (arr, n) => {
    let message = colors.green('countAdjacentSums(') + colors.red(arr, n) + colors.green(') = ');
    let pairCount = 0;
    // let pairsArray = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if ((arr[i] + arr[i + 1]) === n) {
            // let pairs1 = [];
            // pairs1.push(arr[i], arr[i + 1]);
            pairCount++;
            // pairsArray.push(pairs1);
        }
    }
    return message + colors.yellow(pairCount);
}

console.log(countAdjacentSums([1, 5, 1], 6)); // => 2
console.log(countAdjacentSums([7, 2, 4, 6], 7)); // => 0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)); // => 3

// signFlipCount

// Write a function signFlipCount(nums) that takes in an array of numbers as
// arguments. The function should return the number of times adjacent numbers
// in the array switch signs from positive to negative or vice versa.
// The number 0 is neither positive nor negative.

// Time Complexity O(n) because iteration through nums array
// Space Complexity O(1) because it counts without creating new space
const signFlipCount = nums => {
    let message = colors.green('signFlipCount(') + colors.red(nums) + colors.green(') = ');
    let switchCount = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (((nums[i] < 0) && (nums[i + 1] > 0) || (nums[i] > 0) && (nums[i + 1] < 0))) {
            switchCount++;
        }
    }
    return message + colors.yellow(switchCount);
}

console.log(signFlipCount([5, 6, 10, 3])); // => 0
console.log(signFlipCount([-12, 0, -3, -5])); // => 0
console.log(signFlipCount([-12, 10, -3, -5])); // => 2
console.log(signFlipCount([1, -2, -3, -4])); // => 1
console.log(signFlipCount([-1, 11.3, -3, 100])); // => 3

// powerSequence

// Write a function powerSequence(base, length) that takes in two numbers,
// base and length. The function should return an array containing a power
// sequence with the given length. Assume that the length is at least 1.

// The first number of a power sequence begins with base. powerSeqBase = base;
// The second number of the sequence is the product between the first number and the base.
// The third number of the sequence is the product between the second number and the base...

// Time Complexity O(n) because iteration through sequence
// Space Complexity O(n) because creation of new array
const powerSequence = (base, length) => {
    let message = colors.green('powerSequence(') + colors.red(base, length) + colors.green(') = ');
    let powerSequenceArray = Array.from({ length }, (_, i) =>base ** (i + 1));
    // let powerSequenceArray = [base];
    // for (let i = 0; i < length - 1; i++) {
    //     powerSequenceArray.push(powerSequenceArray[i] * base);
    // }
    return message + colors.yellow(powerSequenceArray);
}

console.log(powerSequence(3, 4));  // => [ 3, 9, 27, 81 ]
console.log(powerSequence(2, 6));  // => [ 2, 4, 8, 16, 32, 64 ]
console.log(powerSequence(8, 3));  // => [ 8, 64, 512 ]

// collapseString

// Write a function collapseString(str) that takes in a string as an argument.
// The function should return the string where 'streaks' of consecutive
// characters are collapsed to a single character.
// Hint: use the keyword continue

// Time Complexity O(n) because iteration through string
// Space Complexity O(n) because creation of new string
const collapseString = str => {
    let message = colors.green('collapseString(') + colors.red(str) + colors.green(') = ');
    if (typeof str !== 'string') {
        return message + colors.magenta('Input is not a string');
    }
    if (str.length === 0) {
        return message + colors.magenta('The input string is empty');
    }
    let collapsed = str[0];
    let currentChar = str[0];
    for (let i = 1; i < str.length; i++) {
        if (str[i] === currentChar) {               // if currentChar = prevChar
            continue;                               // continue to next iteration
        }
        currentChar = str[i];                       // update currentChar
        collapsed += currentChar;                   // append currentChar to collapsed string
    }
    return message + colors.yellow(collapsed);
}

console.log(collapseString('apple')); // => 'aple'
console.log(collapseString('AAAaalviiiiin!!!')); // => 'Aalvin!'
console.log(collapseString('hello   app academy')); // => 'helo ap academy'
console.log(collapseString(234)); // => ''
console.log(collapseString('')); // => 'helo ap academy'

// oddWordsOut

// Write a function oddWordsOut(sentence) that takes in a sentence
// string and returns the sentence where words with an odd number
// of characters are removed.

// Time Complexity O(n) because iteration through sentence
// Space Complexity O(n) because creation of new string
const oddWordsOut = sentence => {
    let message = colors.green('oddWordsOut(') + colors.red(sentence) + colors.green(') = ');
    if (typeof sentence !== 'string') return message + colors.magenta('Input is not a string');
    if (sentence.length === 0) return message + colors.magenta('The input string is empty');
    let evenWordSentence = sentence.split(' ').filter(word => word.length % 2 === 0).join(' ');
    // let sentenceSplit = sentence.split(' ');
    // let evenWordSentence = '';
    // for (let word of sentenceSplit) {
    //     if (word.length % 2 === 0) {
    //         evenWordSentence += ' ' + word;
    //     }
    // }
    return message + colors.yellow(evenWordSentence);
}

console.log(oddWordsOut('go to the store and buy milk'));  // => 'go to milk'
console.log(oddWordsOut('what is the answer'));  // => 'what is answer'
console.log(oddWordsOut(''));  // => 'The input string is empty'
console.log(oddWordsOut(234));  // => 'Input is not a string'

// mindPsAndQs

// Write a function mindPsAndQs(str) that accepts a string of uppercase letters.
// The function should return the length of the longest consecutive streak
// of the letters 'P' and 'Q'.

// Hint: Use two variables. One to track the length of the current streak
// and another to track the length of the longest streak so far.
// Think of using a strategy similar to maxValue.
// This can also be solved using a single loop!
// Nested loops not needed!

// Time Complexity O(n) because iteration througth string
// Space Complexity O(1) because no new space is created
const mindPsAndQs = str => {
    let message = colors.green('mindPsAndQs(') + colors.red(str) + colors.green(') = ');
    if (typeof str !== 'string') return message + colors.magenta("Input is not a string");
    let longestStreak = 1;
    let currentStreak = 1;
    let letters = 'PQ';
    for (let i = 0; i < str.length; i++) {
        if (letters.includes(str[i]) && (letters.includes(str[i + 1]))) {
            currentStreak++
        } else {
            currentStreak = 1;
        }
        if (longestStreak < currentStreak) {
            longestStreak = currentStreak;
        }
    }
    return message + colors.yellow(longestStreak);
}

console.log(mindPsAndQs('BOOTCAMP'));  // => 1
console.log(mindPsAndQs('APCDQQPPC'));  // => 4
console.log(mindPsAndQs('PQPQ'));  // => 4
console.log(mindPsAndQs('PPPXQPPPQ'));  // => 5

// commonFactors

// Write a function commonFactors(num1, num2) that returns an
// array that contains the common factors between both numbers.
// A factor is a number that divides another number with no remainder.

// Time Complexity O(n) because iteration of factors of nums
// Space Complexity O(n) because creation of new array
const commonFactors = (num1, num2) => {
    let message = colors.green('commonFactors(') + colors.red(num1, num2) + colors.green(') = ');
    let commonOfBoth = [];
    let factorsOfNum1 = factorOfNum(num1);
    let factorsOfNum2 = factorOfNum(num2);
    for (let i = 0; i < factorsOfNum1.length; i++) {
        for (let j = 0; j < factorsOfNum2.length; j++) {
            if (factorsOfNum1[i] === factorsOfNum2[j]) {
                commonOfBoth.push(factorsOfNum1[i]);
            }
        }
    }
    return message + colors.yellow(commonOfBoth);
}

// Time Complexity O(n) because iteration of 0 to num
// Space Complexity O(n) because creation of new array
const factorOfNum = num => {
    let factorsOfNumberArray = [];
    for ( let i = 0; i <= num; i++) {
        if (num % i === 0) {
            factorsOfNumberArray.push(i);
        }
    }
    return factorsOfNumberArray;
}

console.log(commonFactors(12, 50));  // => [ 1, 2 ]
console.log(commonFactors(6, 24));  // => [ 1, 2, 3, 6 ]
console.log(commonFactors(11, 22));  // => [ 1, 11 ]
console.log(commonFactors(45, 60));  // => [ 1, 3, 5, 15 ]

// commonPrimeFactors

// Write a function commonPrimeFactors(num1, num2) that takes in two
// numbers as arguments and returns an array of all prime factors
// that are common between the two numbers. A factor is a number
// that divides another number without resulting in a remainder.

// Time Complexity O(n) because iteration from 1 to num
// Space Complexity O(n) because creation of new array
const primeFactors = num => {
    const factors = [];
    for (let i = 2; i <= num; i++) {
        while (num % i === 0 && isPrimeHelper(i)) {
            factors.push(i);
            num /= i;
        }
    }
    return factors;
}

// Time Complexity O(n) because us of helper function O(n)
// Space Complexity O(n) because creation of new Set
const commonPrimeFactors = (num1, num2) => {
    let message = colors.green('commonPrimeFactors(') + colors.red(num1, num2) + colors.green(') = ');
    const factors1 = primeFactors(num1);
    const factors2 = primeFactors(num2);
    const commonFactors = factors1.filter(factor => factors2.includes(factor));
    const uniqueCommonFactors = [...new Set(commonFactors)];
    return message + colors.yellow(uniqueCommonFactors);
}

console.log(commonPrimeFactors(12, 50));  // => [ 2 ]
console.log(commonPrimeFactors(6, 24));  // => [ 2, 3 ]
console.log(commonPrimeFactors(11,22));  // => [ 11 ]
console.log(commonPrimeFactors(45, 60));  // => [ 3, 5 ]

// splitHalfArray

// Write a function splitHalfArray(array) that takes in an array
// as an argument and returns two halves of that array split in
// the middle. If the array has an odd number of elements,
// then the middle element should be excluded.

// Time Complexity O(n) because iteration through array
// Space Complexity O(n) because creation of new arrays
const splitHalfArray = array => {
    let message = colors.green('splitHalfArray(') + colors.red(array) + colors.green(') = ');
    const middleIndex = Math.floor(array.length / 2);
    const firstHalfArray = array.slice(0, middleIndex);
    const secondHalfArray = array.slice(middleIndex + (array.length % 2 === 0 ? 0 : 1));
    return message + colors.yellow(firstHalfArray, secondHalfArray);
    // if (array.length % 2 === 0) {
    //     const firstHalfArray = array.slice(0, middleIndex);
    //     const secondHalfArray = array.slice(middleIndex);
    //     return message + colors.yellow([firstHalfArray, secondHalfArray]);
    // } else {
    //     const firstHalfArray = array.slice(0, middleIndex);
    //     const secondHalfArray = array.slice(middleIndex + 1);
    //     return message + colors.yellow([firstHalfArray, secondHalfArray]);
    // }
}

console.log(splitHalfArray([1, 2, 3, 4, 5]));
  // => [ [ 1, 2 ], [ 4, 5 ] ]

console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));
  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

// threeUniqueVowels

// Write a function threeUniqueVowels(string) that takes in a string
// and returns true if the string contains at least three different vowels.

// Time Complexity O(n) because iteration through string
// Space Complexity O(1) because new array uses unique vowels only
const threeUniqueVowels = string => {
    let message = colors.green('threeUniqueVowels(') + colors.red(string) + colors.green(') = ');
    let vowels = 'aeiouAEIOU';
    let uniqueArray = [];
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i]) && !(uniqueArray.includes(string[i]))) {
            uniqueArray.push(string[i]);
        }
    }
    return message + colors.yellow(uniqueArray.length >= 3);
}

console.log(threeUniqueVowels('delicious'));  // => true
console.log(threeUniqueVowels('the bootcamp'));  // => true
console.log(threeUniqueVowels('bootcamp'));  // => false
console.log(threeUniqueVowels('dog'));  // => false
console.log(threeUniqueVowels('go home'));  // => false

// vowelShift

// Write a function vowelShift(sentence) that takes in a sentence string.
// The function should return a new sentence, where every vowel is
// replaced with the next vowel in the alphabet.

// Time Complexity O(n) because iteration through sentence
// Space Complexity O(n) because creation of new array
const vowelShift = sentence => {
    let message = colors.green('vowelShift(') + colors.red(sentence) + colors.green(') = ');
    let vowels = ['a','e','i','o','u','a'];
    const vowelMap = {
        'a': 'e',
        'e': 'i',
        'i': 'o',
        'o': 'u',
        'u': 'a',
        'A': 'E',
        'E': 'I',
        'O': 'U',
        'U': 'A'
    };
    if (typeof sentence !== 'string') {
        return message + colors.magenta('Input is not a string');
    }
    if (sentence.length === 0) {
        return message + colors.magenta('The input string is empty');
    }
    const shiftedSentence = sentence.split('').map(char => {
        return vowels.includes(char) ? vowelMap[char] : char;
    }).join('');
    return message + colors.yellow(shiftedSentence);
}

console.log(vowelShift('bootcamp'));  // => 'buutcemp'
console.log(vowelShift('hello world'));  // => 'hillu wurld'
console.log(vowelShift('on the hunt'));  // => 'un thi hant'
console.log(vowelShift(''));  // => 'The input string is empty'
console.log(vowelShift(234));  // => 'Input is not a string'

// hasSymmetry

// Write a function hasSymmetry(array) that takes in an array.
// The function should return true if the array has symmetry,
// false otherwise. For an array to have symmetry,
// it should be the same forwards and backwards.

// TIP: In JavaScript, it is not possible to compare arrays for
// equality with ===. In other words, [1, 2, 3] === [1, 2, 3]
// evaluates to false.

// Time Complexity O(n) because iteration through array
// Space Complexity O(1) because creates no new space
const hasSymmetry = array => {
    let message = colors.green('hasSymmetry(') + colors.red(array) + colors.green(') = ');
    const length = array.length;
    const booleanResult = array.every((element, index) => element === array[array.length - 1 - index]);
    // let booleanResult = true;
    // for (let i = 0; i < Math.floor(length / 2); i++) {
    //    if (array[i] !== array[length - 1 - i]) {
    //     booleanResult = false;
    //    }
    // }
    return message + colors.yellow(booleanResult);
}

console.log(hasSymmetry([1, 2, 3, 3, 2, 1])); // => true
console.log(hasSymmetry([1, 2, 3, 3, 4, 1])); // => false
console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])); // => true
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])); // => false

// evenSumArray

// Write a function evenSumArray(array) that takes in an array of
// numbers and returns a new array where each num is replaced
// with the sum of all even numbers less than or equal to that num.

// Time Complexity O(n) because iteration of array
// Space Complexity O(n) because creation of new array
const evenSumArray = array => {
    let message = colors.green('evenSumArray(') + colors.red(array) + colors.green(') = ');
    const evenArraySum = array.map(currentNum => {
        let runningSum = 0;
        for (let j = 1; j <= currentNum; j++) {
            if (j % 2 === 0) {
                runningSum += j;
            }
        }
        return runningSum;
    })
    // let evenArraySum = [];
    // for (let i = 0; i < array.length; i++) {
    //     let currentNum = array[i];
    //     let runningSum = 0;
    //     for (let j = 1; j <= currentNum; j++) {
    //         if (j % 2 === 0) {
    //             runningSum += j;
    //         }
    //     }
    //     evenArraySum.push(runningSum);
    // }
    return message + colors.yellow(evenArraySum);
}

console.log(evenSumArray([6, 7, 5])); // => [ 12, 12, 6 ]
console.log(evenSumArray([2, 8, 3, 5])); // => [ 2, 20, 2, 6 ]

// numsToWords

// Write a function numsToWords(numString) that takes in a string
// representing a number. The function should return a new string where
// each digit character is replaced with it's "word" representation.
// Assume the input string only contains numeric characters.

// Time Complexity O(n) because iteration throught numString with map
// Space Complexity O(n) because creation of new string
const numsToWords = numString => {
    let message = colors.green('numsToWords(') + colors.red(numString) + colors.green(') = ');
    let numbers = '0,1,2,3,4,5,6,7,8,9';
    let numberMap = {
        0: 'Zero',
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine'
    };
    const numToWord = numString.split('').map(char => (numberMap[char] ? numberMap[char] : char)).join('');
    return message + colors.yellow(numToWord);
}

console.log(numsToWords('42')); // => 'FourTwo'
console.log(numsToWords('123')); // => 'OneTwoThree'
console.log(numsToWords('159598')); // => 'OneFiveNineFiveNineEight'

// moreDotLessDash

// Write a function moreDotLessDash(str) that takes in a string
// and returns  true if the string contains more dots ('.')
// than dashes ('-'), false otherwise.

// Time Complexity O(n) because iteration throught string
// Space Complexity O(1) because no new space is created
const moreDotLessDash = str => {
    let message = colors.green('moreDotLessDash(') + colors.red(str) + colors.green(') = ');
    let dotCount = 0;
    let dashCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.') dotCount++;
        if (str[i] === '-') dashCount++;
    }
    return message + colors.yellow(dotCount > dashCount);
}

console.log(moreDotLessDash('2-D arrays are fun. I think.'));  // => true
console.log(moreDotLessDash('.-.-.'));  // => true
console.log(moreDotLessDash('.-'));  // => false
console.log(moreDotLessDash('..--'));  // => false
