// File: insettionSortPractice.js

const colors = require('colors');
// Insertion Sort
// Divide the array into sorted and unsorted
// Pick and remove a value from the unsorted
// Insert value into the correct place in the sorted
// Repeat until unsorted is empty

const insertionSort = array => {
    let colorLog = colors.green('insertionSort(') + colors.red(array) + colors.green(') = ');
    for (let i = 1; i < array.length; i++) {
        let currentElement = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > currentElement) {
            // array[j + 1] = array[j];
            [array[j + 1], array[j]] = [array[j], currentElement];
            j--;
        }
        array[j + 1] = currentElement;
    }
    return colorLog + colors.yellow(array);
}

console.log(insertionSort([3, 2, 0 , 4, 1])); // => [0, 1, 2, 3, 4]

// sorting using Math.min() to new array
const insertionSortWithNewArray = array => {
    let colorLog = colors.green('insertionSortWithNewArray(') + colors.red(array) + colors.green(') = ');
    let sorted = [];
    // find the lowest number and push it to the sorted array
    while (array.length > 0) {
        let indexOfLowest = array.indexOf(Math.min(...array));
        sorted.push(array.splice(indexOfLowest, 1)[0]);
        }
        sorted.join(',');
    return colorLog + colors.yellow(sorted);
}

console.log(insertionSortWithNewArray([3, 2, 0 , 4, 1])); // => [0, 1, 2, 3, 4]

// sorting using pop() to new sorted array
const insertionSortPopToNewArray = array => {
    let colorLog = colors.green('insertionSortPopToNewArray(') + colors.red(array) + colors.green(') = ');
    let sorted = [array.pop()];
    while (array.length > 0) {
        // start with the last element of array and move to sorted placing above the lowest value and below the next highest
        let currentElement = array.pop();
        for (let i = 0; i < sorted.length; i++) {
            if (currentElement < sorted[i]) {
                sorted.splice(i, 0, currentElement);
                break;
            } else if (i === sorted.length - 1) {
                sorted.push(currentElement);
                break;
            }
    } }
    return colorLog + colors.yellow(sorted);
}

console.log(insertionSortPopToNewArray([3, 2, 0 , 4, 1])); // => [0, 1, 2, 3, 4]

// in-place insertion using an Invariant(divider)
const insertionSortWithInvariant = array => {
    let colorLog = colors.green('insertionSortWithInvariant(') + colors.red(array) + colors.green(') = ');
    for (let i = 1; i < array.length; i++) {
        let divide = i;
        let temp = array[i];
        while (divide > 0 && temp < array[divide - 1]) {
            array[divide] = array[divide - 1];
            divide--;
        }
        array[divide] = temp;
    }
    return colorLog + colors.yellow(array);
}

console.log(insertionSortWithInvariant([3, 2, 0 , 4, 1])); // => [0, 1, 2, 3, 4]
