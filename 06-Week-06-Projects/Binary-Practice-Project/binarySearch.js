// File binarySearch.js

const colors = require('colors');

// Binary Search in Code
// -- Must be sort array
// -- Data can be accessed by index in constant time

function binarySearch(arr, target) {                    // to find the index of target
    let colorLog = colors.green('binarySearch(') + colors.red(arr, target) + colors.green(') = ');
    let lowerHalf = 0;                                                                          // lowerHalf = first index of array
    let higherHalf = arr.length -1;                                                             // higherHalf = last index of array
    while (lowerHalf <= higherHalf) {                                                           // while lower is less than higher
        let midPoint = Math.floor((lowerHalf + higherHalf) / 2);                                // find the midpoint each time through
        if (arr[midPoint] === target) {                                                         // check if target equals midpoint
            return colorLog + colors.yellow(`Target ${target} found at index ${midPoint}.`);    // return foundMessage
        } else if (arr[midPoint] < target) {                                                    // check if midPoint.value = target
            lowerHalf = midPoint + 1;                                                           // set new lowerHalf to equal midPoint + 1
        } else {                                                                                // if false
            higherHalf = midPoint - 1;                                                          // set new higherHalf to equal midPoint - 1
        }
    }
    let notFoundMessage = (`Target ${target} not found in the array.`);                         // notFoundMessage
    return colorLog + colors.yellow(notFoundMessage);                                           // if result equals false return notFoundMessage
}

arr = [1, 5, 8, 10, 14, 26, 27, 32, 37, 51, 52,
    53, 57, 63, 66, 67, 68, 69, 74, 76, 79,
    82, 83, 84, 86, 88, 89, 92, 94, 95, 99, 100]
target = 89

console.log(binarySearch(arr, target));

arr = [1, 5, 8, 10, 14, 26, 27, 32, 37, 51, 52,
    53, 57, 63, 66, 67, 68, 69, 74, 76, 79,
    82, 83, 84, 86, 88, 89, 92, 94, 95, 99, 100]
target = 7

console.log(binarySearch(arr, target));

n = 1000000;
arr = []
for (let i = 0; i < n; i++) arr.push(i);

valuesToSearch = [];
for (let i = 0; i < 10000; i++) {
    valuesToSearch.push(Math.floor(Math.random() * 2 * n) - n);
}

startTime = Date.now();
for (let i = 0; i < valuesToSearch.length; i++) {
    arr.includes(valuesToSearch[i]);
}
endTime = Date.now();

console.log(colors.green('Linear Search: ') + colors.yellow(`${endTime - startTime}ms`));

startTime = Date.now();
for (let i = 0; i < valuesToSearch.length; i++) {
    binarySearch(arr, valuesToSearch[i]);
}
endTime = Date.now();

console.log(colors.green(`Binary Search: `) +  colors.yellow(`${endTime - startTime}ms`));
