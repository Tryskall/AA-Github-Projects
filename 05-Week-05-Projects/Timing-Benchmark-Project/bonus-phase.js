// File: bonus-phase.js for addNums(times, increment) and addManyNums(times, increment)

const [addNums, addManyNums] = require("./phase-1");

// Use addNums(n) code for addNumsNTiming(numOfIncrements, increment) function
// it('should run addNums(n) numOfIncrements number of times')
// Use console.time(), console.timelog() and console.timeEnd()
// --- to print timestamps after each call of addNums
// Use Date.now() to print the amount of time in milliseconds
// --- each call takes to execute
function addNumsNTiming(numOfIncrements, increment) {
    console.log("");
    console.time(`addNumsN`);
    let addNumsNArray = [];
    for (let i = increment; i <= numOfIncrements * increment; i += increment) {
      // let start = Date.now();
      console.timeLog('addNumsN');
      addNumsNArray.push(addNums(i));
      // let end = Date.now();
      // console.log(`${end - start}`);
    }
    console.timeEnd('addNumsN');
    // return addNumsNArray;
}

// use addManyNums10() code for addManyNums10Timing() function
// it('should run addManyNums(n) numOfIncrements nomver of times')
// Use console.time(), console.timelog() and console.timeEnd()
// --- to print timestamps after each call of addNums
// Use Date.now() to print the amount of time in milliseconds
// --- each call takes to execute
function addManyNumsNTiming(numOfIncrements, increment) {
    console.log("");
    console.time("addManyNums");
    const addManyNumsNArray = [];
    for (let i = increment; i <= numOfIncrements * increment; i += increment) {
      // let start = Date.now();
      console.timeLog("addManyNums")
      addManyNumsNArray.push(addManyNums(i));
      // let end = Date.now();
      // console.log(`${end - start}`);
    }
    console.timeEnd("addManyNums");
    return addManyNumsNArray;
}

module.exports = [addNumsNTiming, addManyNumsNTiming];

console.log(addNumsNTiming(100, 1000000));
addNumsNTiming(100,1000000);

console.log("\n****************\n");

console.log(addManyNumsNTiming(100, 5000));
addManyNumsNTiming(100, 5000);
