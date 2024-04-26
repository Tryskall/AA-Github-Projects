// File: insertion-sort.js

const colors = require('colors');

// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
    let unsorted = arr.slice();                             // Copy the original array
    let sorted = [];                                        // Create an array to store the sorted values
    while (unsorted.length > 0) {                           // While the array is not empty: dumb, because adding null each time
        console.log(sorted.join(','));                      // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
        let currentValue = unsorted.pop();                  // - Pop a value from the array
        sorted.push(null);                                  // - Create a new spot at the end of the array with null to help with comparisons
        let index = sorted.length - 2;                      // - Walk through the sorted array in reverse order
        let el = sorted[index];
        while (el >= currentValue && index >= 0) {          // - Check if the value to the left is smaller than the new value
            sorted[index + 1] = sorted[index];              // - If so, you've reached the insertion point so exit the loop
            index--;
            el = sorted[index];
            }                                               // - If not shift the value to the right by 1 and continue
            sorted[index + 1] = currentValue;               // - Insert the unsorted value at the break point
            }
    return sorted;                                          // Return the sorted array
}

console.log(colors.green('insertionSort(') + colors.red([3, 2, 0, 4, 1]) + colors.green(') = ') + colors.yellow(insertionSort([3, 2, 0, 4, 1]))); // => [0, 1, 2, 3, 4]

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
    let pointer = 0;                                        //  Set a pointer dividing the array into sorted and unsorted halves
    while (pointer < arr.length) {                          //  Repeat while the unsorted half is not empty:
        let currentValue = arr[pointer];                    //  - Grab the first value from the unsorted half
        let breakPoint = 0;
        for (let i = pointer; i >= 0; i--) {                //  - For each value starting from the divider,
            if (arr[i - 1] < currentValue) {                //  - Check if the value to the left is smaller than the unsorted value
                breakPoint = i;
                break;                                      //  - If so, you've reached the insertion point so exit the loop
            } else {
                arr[i] = arr[i - 1];                        //  - If not shift the value to the right by 1 and continue
            }
        }
        arr[breakPoint] = currentValue;                     //  - Insert the unsorted value at the break point
        console.log(arr.join(','));
        pointer++;                                          //  - Increment the dividing pointer and repeat
    }
    return arr;                                             //  Return the mutated array
}

console.log(colors.green('insertionSortInPlace(') + colors.red([3, 2, 0, 4, 1]) + colors.green(') = ') + colors.yellow(insertionSortInPlace([3, 2, 0, 4, 1]))); // => [0, 1, 2, 3, 4]

module.exports = [insertionSort, insertionSortInPlace];
