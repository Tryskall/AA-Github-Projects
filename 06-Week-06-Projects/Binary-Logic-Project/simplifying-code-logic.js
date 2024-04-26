// File: simplifying-code-logic.js

// write a function that takes in a number and counts from that number to zero
// -- the number can be positive or negative, integer or non-integer

// function isInt(n) {
//     if (n % 1 === 0) return true;
//     if (n % 1 !== 0) return false;
// }

// function countToZero(n) {
//     console.log(n);
//     if (n > 0 && !isInt(n)) {
//         countToZero(n - n % 1);
//     } else if (n < 0 && !isInt(n)) {
//         countToZero(n + -(n % 1));
//     } else if (n !== 0) {
//         countToZero(n - (n < 0 ? -1 : 1));
//     }
// }

const countToZero = (n) => {
    console.log(n);
    if (n === 0) return;
    let decrement = n % 1;
    if (decrement === 0) {
        decrement = n / Math.abs(n);
    }
    countToZero(n - decrement);
}

countToZero(5);
countToZero(-5);
countToZero(5.5);
countToZero(-5.5);
