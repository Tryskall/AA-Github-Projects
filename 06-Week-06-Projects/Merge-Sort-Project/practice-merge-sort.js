// File: practice-merge-sort.js

// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
    if (arr.length <= 1) return arr;                    // Check if the input is length 1 or less, If so, return arr
    let divide = Math.floor(arr.length / 2);            // Divide the array in half
    const recursiveSortHelper = arr => {
        if (arr.length <= 1) return arr;
        const maxIndex = arr.reduce((maxIdx, el, idx) => (el > arr[maxIdx] ? idx : maxIdx), 0);
        const maxValue = arr.splice(maxIndex, 1)[0];
        return [...recursiveSortHelper(arr), maxValue];
    };
    let leftHalf = recursiveSortHelper(arr.slice(0, divide));           // Recursively sort the left half
    let rightHalf = recursiveSortHelper(arr.slice(divide));             // Recursively sort the right half
    let result = merge(leftHalf, rightHalf);                            // Merge the halves together and return
    return result;
}


  // Takes in two sorted arrays and returns them merged into one
  function merge(arrA, arrB) {
    let returnArray = [];                                       // Create an empty return array
    let i = 0;                                                  // Point to the first value of each array
    let j = 0;                                                  // While there are still values in each array...
    while (i < arrA.length || j < arrB.length) {                // Compare the first values of each array
        const elA = i < arrA.length ? arrA[i] : Infinity;       // Add the smaller value to the return array
        const elB = j < arrB.length ? arrB[j] : Infinity;       // Move the pointer to the next value in that array
        returnArray.push(elA < elB ? arrA[i++] : arrB[j++]);    // Return the return array
    }
    return returnArray;
}

  module.exports = [merge, mergeSort];
