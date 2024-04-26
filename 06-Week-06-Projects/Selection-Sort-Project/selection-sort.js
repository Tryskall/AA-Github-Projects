// File: selection-sort.js

function selectionSort(arr) {
    let unsorted = [...arr];                                                // Copy the original array
    let sorted = [];                                                        // Create an array to store the sorted values
    while (unsorted.length > 0) {                                           // While the array is not empty...
        console.log(sorted.join(","));
        let minValue = Math.min(...unsorted);                               // Find the index of the minimum value in the unsorted half
        let minIndex = unsorted.indexOf(Math.min(...unsorted));
        unsorted.splice(minIndex, 1);                                       // Save and remove the value at the min index
        sorted.push(minValue);                                              // Add the min value to the end of the sorted array
    }
    return sorted;
  }

  function selectionSortInPlace(arr) {
    let pointer = 0;                                        // Set a pointer at zero dividing the array into sorted and unsorted halves
    let minValue;
    let minValueIndex;
    while (pointer < arr.length) {                          // Repeat while the unsorted half is not empty:
        console.log(arr.join(","));                         // Do not move this console.log
        for (let i = pointer; i < arr.length; i++) {        // Find the index of the minimum value in the unsorted half
            let el = arr[i];
            if (minValue === undefined || el < minValue) {
                minValue = el;                              // Save the min value
            }
        }
        minValueIndex = arr.indexOf(minValue);
        for (let j = minValueIndex - 1; j >= pointer; j--) {    // Shift every unsorted value to the left of the min value to the right by 1
            arr[j + 1] = arr[j];
        }
        arr[pointer] = minValue;                                // Put the min value at the divider
        minValue = undefined;
        pointer++;                                              // Increment the divider and repeat
    }
}

  module.exports = [selectionSort, selectionSortInPlace];
