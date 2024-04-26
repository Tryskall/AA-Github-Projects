// File: phase-3.js for timing addManyNums10 and addNums10 functions

const colors = require('colors');
const [addNums, addManyNums] = require("./phase-1");
let message = "Input Positive Number Only!".red;

// Use addNums10() code for addNums10Timing() function
// Use console.time(), console.timelog() and console.timeEnd()
// --- to print timestamps after each call of addNums
// Use Date.now() to print the amount of time in milliseconds
// --- each call takes to execute
function addNums10Timing(increment) {
    if (increment < 1) return message;
    console.log("");
    console.time(`addNums10`);
    let addNums10Array = [];
    for (let i = 1; i <= 10; i++) {
            // let start = Date.now();
            console.timeLog(`addNums10`);
            addNums10Array.push(addNums(i));
            // let end = Date.now();
            // console.log(`${end - start}`);
        }
        console.timeEnd("addNums10");
        return addNums10Array;
}

// use addManyNums10() code for addManyNums10Timing() function
// Use console.time(), console.timelog() and console.timeEnd()
// --- to print timestamps after each call of addNums
// Use Date.now() to print the amount of time in milliseconds
// --- each call takes to execute
function addManyNums10Timing(increment) {
    console.log("");
    console.time("addManyNums10");
        if (increment < 1) return message;
        const addManyNums10Array = [];
        for (let i = 1; i <= 10; i++) {
            // let start = Date.now();
            console.timeLog("addManyNums10")
            addManyNums10Array.push(addManyNums(i * increment));
            // let end = Date.now();
            // console.log(`${end - start}`);
        }
        console.timeEnd("addManyNums10")
        return addManyNums10Array;
}

n = -10
console.log('');
console.log(`addNums10(${n})`);
addNums10Timing(n);

console.log("\n***********\n");

n = 1000000
console.log(`addNums10(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 5000
console.log(`addManyNums10(${n}): `);
addManyNums10Timing(5000);
