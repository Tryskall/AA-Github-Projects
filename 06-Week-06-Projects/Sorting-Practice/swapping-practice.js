// File: swapping-practice.js

// destructuring assignment

const arr = [0,1,2,3,4,5,6];

// Swap two values with a temporary variable
let temp = arr[1];
arr[1] = arr[2];
arr[2] = temp;

console.log(arr);

// Swap two values with desctructured array assignment
[arr[4], arr[6]] = [arr[6], arr[4]];

console.log(arr);

// Shifting

const arr1 = [0,1,2,3,4,5];
const arr2 = [0,1,2,3,4,5];

// Shift the array right by 1
// Shifting from front to back will overwrite all values
for (let i = 1; i < arr1.length; i++) {
    arr1[i] = arr1[i-1];
}

console.log(arr1);

// Instead, start from the back and shift backwards
for (let i = arr2.length - 1; i > 0; i--) {
    arr2[i] = arr2[i-1];
}

console.log(arr2);
