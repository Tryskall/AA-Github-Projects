// File: phase-2.js for addNums10 and addManyNums10

const [addNums, addManyNums] = require("./phase-1");
const colors = require('colors');

let message = "Input Positive Numbers Only!".red;

// addNums10(increment) takes in an increment value and runs addNums() 10 times,
// --- increasing by the increment each time.
// it('should return an array containing the 10 return valies);
function addNums10(increment) {
  if (increment < 1) return message;
  let addNums10Array = [];
  let currentIncrement = 0;
  for (let i = 1; i <= 10; i++) {
    currentIncrement += increment;
    addNums10Array.push(addNums(currentIncrement));
  }
  return addNums10Array;
}

// addManyNums10(increment) takes in an increment value and runs addManyNums() 10 times
// --- increasing by the increment each time
// it('should return an array containing the 10 return values);
function addManyNums10(increment) {
    if (increment < 1) return message;
    const resultArray = [];
    for (let i = 1; i <= 10; i++) {
        resultArray.push(addManyNums(i * increment));
    }
    return resultArray;
}

console.log('');
console.log("addNums10(1)");
console.log(addNums10(1).join(','));
console.log("addNums10(10)");
console.log(addNums10(10).join(','));
console.log('');
console.log("addManyNums10(1)");
console.log(addManyNums10(1));
console.log("addManyNums10(10)");
console.log(addManyNums10(10));


module.exports = [addNums10, addManyNums10];
