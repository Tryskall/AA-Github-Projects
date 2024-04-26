// File: selection-sort-practice.js

const colors = require('colors');

// Out Of Place Selection Sort (easy)
// Divide the array in sort and unsorted
// Find and remove the smallest value from the unsorted
// Add this value to the end of the sorted array
// Repeat this until unsorted is empty and sorted is full

let arr = [3, 2, 0, 4, 1];
let sorted = [];

const selectionSortOutOfPlace = unsorted => {
    let colorLog = ('selectionSortOutOfPlace(').green + colors.red(unsorted) + (') = ').green;
    while (arr.length > 0) {
        let minValue = Math.min(...unsorted);
        let minIndex = unsorted.indexOf(Math.min(...unsorted));
        console.log(('unsorted: ').magenta, colors.red(unsorted));
        arr.splice(minIndex, 1);
        sorted.push(minValue);
        console.log(('sorted: ').cyan, colors.yellow(sorted));
    }
    return colorLog + colors.yellow(sorted);
}

console.log(selectionSortOutOfPlace(arr));

// In Place Selection Sort (medium)
// Mutate the original array to keep the space complexity at O(1)

const selectionSortInPlace = arr => {
    let colorLog = ('selectionSortInPlace(').green + colors.red(arr) + (') = ').green;
    for (let i = 1; i < arr.length; i++) {
        let invariant = i;
        let temp = arr[i];
        while (invariant > 0 && temp < arr[invariant - 1]) {
            arr[invariant] = arr[invariant - 1];
            invariant--;
            console.log(('invariantArr: ').magenta + colors.red(arr));
        }
        arr[invariant] = temp;
    }
    return colorLog + colors.yellow(arr);
}

console.log(selectionSortInPlace([3, 2, 0, 4, 1]));
