// File: quickSort-practice.js

const colors = require('colors');

// QuickSort Algorithm
// -- Pick a value in the array to serve as a pivot
// -- Partition the array so that values smaller than
// ---- the pivot are on the left
// -- Sort the let and right partitions
// -- Return an array with left, pivot, and right values

const recursiveSortHelper = arr => {
    if (arr.length <= 1) return arr;
    const maxIndex = arr.reduce((maxIdx, el, idx) => (el > arr[maxIdx] ? idx : maxIdx), 0);
    const maxValue = arr.splice(maxIndex, 1)[0];
    return [...recursiveSortHelper(arr), maxValue];
};

const quickSort = arr => {
    let colorLog = colors.green('quicksort(') + colors.red(arr) + colors.green(') = ');
    if (arr.length <= 1) return arr;
    let pivotIndex = 1;
    let pivotValue = arr[pivotIndex];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivotValue) {
            left.push(arr[i])
        } else if (arr[i] > pivotValue) {
            right.push(arr[i]);
        }
    }
    let result = [...recursiveSortHelper(left), pivotValue, ...recursiveSortHelper(right)];
    return colorLog + colors.yellow(result);
}

console.log(quickSort([5, 4, 10, 1, 8, 3, 6]));
