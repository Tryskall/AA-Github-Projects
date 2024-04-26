// File: quicksort.js

const colors = require('colors');

const sortMinToMax = arr => {
    if (arr.length <=1) return arr;
    // console.log(colors.magenta('sorted'), colors.cyan(arr.sort((a, b) => a - b)));
    return arr.sort((a, b) => a - b);
}

function quicksort(arr) {
    if (arr.length <= 1) return arr;                        // Check if the input is length 1 or less
    let pivotValue = arr[0];                                // Pick the first value as the pivot
    let left = arr.filter(el => el < pivotValue);           // every number smaller than the pivot is to the left
    let right = arr.filter(el => el >= pivotValue);         // every number larger (or equal) than the pivot is to the right
    // console.log(colors.magenta('left '), colors.cyan(left));
    // console.log(colors.magenta('right '), colors.cyan(right));
    return [ ...sortMinToMax(left), ...sortMinToMax(right)];    // Return the left, pivot and right in sorted order
}

module.exports = [quicksort];


// console.log(colors.green('quicksort('), colors.red([2,4,6,8,1,3,5,7,9]), colors.green(') = '), colors.yellow(quicksort([2,4,6,8,1,3,5,7,,9])));
// console.log(colors.green('sortMinToMax('), colors.red([3,5,2,8,9,4,7,6]), colors.green(') = '), colors.yellow(sortMinToMax([3,4,5,6,7,8,9])));
// console.log(colors.green('sortMinToMax('), colors.red([1]), colors.green(') = '), colors.yellow(sortMinToMax([1])));
