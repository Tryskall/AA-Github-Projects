// File: bubble-sort.js

const colors = require('colors');


function bubbleSort(arr) {
  let colorLog = colors.green('bubbleSort(') + colors.red(arr) + colors.green(') = ');
  let swapped = true;

    while (swapped) {     // Otherwise, repeat from the beginning
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {            // Iterate through the array
        if (arr[i] > arr[i + 1]) {                          // If the current value is greater than its neighbor to the right
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];      // Swap those values
          console.log(arr.join(","));                       // Do not move this console.log
          swapped = true;                                   // If you get to the end of the array and no swaps have occurred, return
        }
      }
    }
    return colorLog + colors.yellow(arr);
}

module.exports = bubbleSort;

// console.log(bubbleSort(['2,4,6,1,8,3,5,7,9']));
