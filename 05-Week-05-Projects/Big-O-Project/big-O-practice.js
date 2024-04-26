// File: big-O-practice.js for practicing Big-O time and space complexity

const colors = require('colors');
animals = ['alligator', 'bear', 'cat', 'dog', 'elephant', 'fish', 'goose', 'hamster', 'iguana', 'jaquar', 'kangaroo'];

// Count how many animals are in the list
// Time Complexity: O(n)
// Space Complexity: O(n)
function countAnimals(animals) {
    let count = 0;
    for (let i = 0; i < animals.length; i++) {
        count++;
    }
    return count;
}

countAnimalsStartTime = Date.now();
console.log(countAnimals(animals));
countAnimalsEndTime = Date.now();
console.log(`countAnimals runTime: ${countAnimalsEndTime - countAnimalsStartTime}`.red);

// Count how many animals are in the list
// Time Complexity: O(n)
// Space Complexity: O(n)
function countAnimals2(animals) {
    return animals.length;
}

countAnimals2StartTime = Date.now();
console.log(countAnimals2(animals));
countAnimals2EndTime = Date.now();
console.log(`countAnimals2 runTime: ${countAnimals2EndTime - countAnimals2StartTime}`.blue);

// Print the first 10 animals in the list
// Time Complexity: O(n)
// Space Complexity: O(1)
function print10(animals) {
    if (animals.length < 10) {
        throw Error('Not enough animals in list'.green);
    }
    console.log(animals[0].cyan);
    console.log(animals[1]);
    console.log(animals[2]);
    console.log(animals[3]);
    console.log(animals[4]);
    console.log(animals[5]);
    console.log(animals[6]);
    console.log(animals[7]);
    console.log(animals[8]);
    console.log(animals[9]);
}

print10StartTime = Date.now();
print10(animals);
print10EndTime = Date.now();
console.log(`print10 runTime: ${print10EndTime - print10StartTime}`.red);

function printAnimals(animals) {
    for (let i = 0; i < animals.length; i++) {
        console.log(animals[i]);
    }
}

printAnimalsStartTime = Date.now();
printAnimals(animals);
printAnimalsEndTime = Date.now();
console.log(`printAnimals runTime: ${printAnimalsEndTime - printAnimalsStartTime}`.blue);

function printAnimalsTwice(animals) {
    for (let i = 0; i < animals.length; i++) {
        console.log(animals[i]);
    }
    for (let j = 0; j < animals.length; j++) {
        console.log(animals[j]);
    }
}

printAnimalsTwiceStartTime = Date.now();
printAnimalsTwice(animals);
printAnimalsTwiceEndTime = Date.now();
console.log(`printAnimalsTwice runTime: ${printAnimalsTwiceEndTime - printAnimalsStartTime}`.red);

function printAnimalPairs(animals) {
    for (let i = 0; i < animals.length; i++) {
        for (let j = 0; j < animals.length; j++) {
            console.log(`${animals[i]} - ${animals[j]}`);
        }
    }
}

printAnimalPairsStartTime = Date.now();
printAnimalPairs(animals);
printAnimalPairsEndTime = Date.now();
console.log(`printAnimalPairs runTime: ${printAnimalPairsEndTime - printAnimalPairsStartTime}`.blue);

function getAnimalPairs(animals) {
    const pairs = [];
    for (let i = 0; i < animals.length; i++) {
        for (let j = 0; j < animals.length; j++) {
            pairs.push([animals[i], animals[j]]);
        }
    }
    return pairs;
}

getAnimalPairsStartTime = Date.now();
getAnimalPairs(animals);
getAnimalPairsEndTime = Date.now();
console.log(`getAnimalPairs runTime: ${getAnimalPairsEndTime - getAnimalPairsStartTime}`.red);

function getAnimalTriples(animals) {
    const triples = [];
    for (let i = 0; i < animals.length; i++) {
        for (let j = 0; j < animals.length; j++) {
            for (let k = 0; k < animals.length; k++) {
                triples.push([animals[i], animals[j], animals[k]]);
            }
        }
    }
    return triples;
}

getAnimalTriplesStartTime = Date.now();
getAnimalTriples(animals);
getAnimalTriplesEndTime = Date.now();
console.log(`getAnimalTriples runTime: ${getAnimalTriplesEndTime - getAnimalTriplesStartTime}`.blue);

function findAnimals(animals, target) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i] === target) {
            return i;
        }
    }
    return -1;
}

findAnimalsStartTime = Date.now();
findAnimals(animals);
findAnimalsEndTime = Date.now();
console.log(`findAnimals runTime: ${findAnimalsEndTime - findAnimalsStartTime}`.red);
