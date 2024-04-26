// File: binary-search.js

const linearSearch = (arr, target) => arr.indexOf(target);

function binarySearch(arr, target) {
    let lowPoint = 0;                                           // Set integers pointing to the high and low range of possible indices
    let highPoint = arr.length - 1;
    if (target > arr[highPoint] || target < arr[lowPoint]) return -1;
    while (lowPoint <= highPoint) {                             // While high and low indices do not overlap...
        let midPoint = Math.floor((lowPoint + highPoint) / 2);  // Find the midpoint between high and low indices
        if (arr[midPoint] === target) {                         // Compare the target value to the midpoint value
            return midPoint;                                    // Return the midpoint index
        } else if (target > arr[midPoint]) {                    // If the target is higher than the midpoint...
            lowPoint = midPoint + 1;                            // Move the low pointer to midpoint + 1
        } else if (target < midPoint) {                         // If the target is less than the midpoint...
            highPoint = midPoint - 1                            // Move the high pointer to midpoint - 1 }
        }
    }
}


module.exports = [linearSearch, binarySearch];

// console.log(linearSearch([1,2,3,4,5], 5));
// console.log(linearSearch([1,2,3,4,5], 7));

// console.log(binarySearch([1,2,3,4,5], 5)); // 2
// console.log(binarySearch([1,2,3,4,5], 9)); // -1
// console.log(binarySearch([1,2,3,4,5], -2)); // -1
