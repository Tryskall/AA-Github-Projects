// File: sorting-practice.js

const colors = require('colors')

const sortFromLowToHigh = array => {
    let colorLog = colors.green('sortFromLowToHigh(') + colors.red(array) + colors.green(') = ');
    let sorted = true;
    while (sorted) {                                                            // run through array n times until array is low to high
        sorted = false;
        for (let i = 0; i < array.length - 1; i++) {                            // iterate through array
            if (array[i] > array[i + 1]) {                                      // check values in pairs
                [array[i], array[i + 1]] =  [array[i + 1], array[i]];           // deconstruct array
                sorted = true
            }
        }
    }
    return colorLog + colors.yellow(array);
}

let unsorted = [3,2,0,4,1];
console.log(sortFromLowToHigh(unsorted)); // => [0,1,2,3,4]
