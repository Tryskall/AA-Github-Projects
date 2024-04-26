// File: phase-1.js for addNums and addManyNums functions

const colors = require('colors');

let message = "Positive integers only!".red;
// addsNum(n) take in a positive integer and returns the sum
// ---  of all numbers 1 through n
function addNums(n) {
    let total = 0;
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            total += i;
        }
    } else {
        return message;
    }
    return total;
  }

  // addManyNums(n) takes in a positive integer and returns
  // --- the sum of addNums(1) through addNums(n)
  function addManyNums(n) {
    let total = 0;
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            total += addNums(i);
        }
    } else {
        return message;
    }
    return total;
  }

// console.log(addNums(5));
// console.log(addNums(-10));
// console.log(addManyNums(3));

  module.exports = [addNums, addManyNums];
