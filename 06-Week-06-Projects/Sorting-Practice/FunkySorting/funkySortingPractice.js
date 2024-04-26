// File: funkySortingPractice.js

const colors = require('colors');

// Funky Sorting
// Zeroes to the right

const zeroesToTheRight = arr => {
    let colorLog = colors.green('zeroesToTheRight(') + colors.red(arr) + colors.green(') = ');
    if (arr.length < 1) return colorLog + colors.yellow(arr);
    let nonZeroIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
            nonZeroIndex++;
        }
    }
    return colorLog + colors.yellow(arr);
}

console.log(zeroesToTheRight([0,2,0,3,4,0,5]));
console.log(zeroesToTheRight([0]));

function moveZeroes(nums) {
    let colorLog = colors.green('moveZeroes(') + colors.red(nums) + colors.green(') = ');
    let firstZero = -1;
    for (let i = 0; i < nums.length; i++) {
        if (firstZero === -1) {
            if (nums[i] === 0) firstZero = i;
        } else if (nums[i] !== 0) {
            [nums[i], nums[firstZero]] = [nums[firstZero], nums[i]];
            firstZero++;
        }
    }
    return colorLog + colors.yellow(nums);
}

console.log(moveZeroes([0,0,2,5,0,3]));
console.log(moveZeroes([0]));

// Even/Odd sort

const recursiveSortHelper = arr => {
    if (arr.length <= 1) return arr;
    const maxIndex = arr.reduce((maxIdx, el, idx) => (el > arr[maxIdx] ? idx : maxIdx), 0);
    const maxValue = arr.splice(maxIndex, 1)[0];
    return [...recursiveSortHelper(arr), maxValue];
};

const evenOddSortRecursive = arr => {
    let colorLog = colors.green('evenOddSortRecursive(') + colors.red(arr) + colors.green(') = ');
    let evenArray = [];
    let oddArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 ===0) {
            evenArray.push(arr[i]);
        } else {
            oddArray.push(arr[i]);
        }
    }
    let maxEven = Math.max(...evenArray);                 // find the largest even number
    let result = [ ...recursiveSortHelper(evenArray), ...recursiveSortHelper(oddArray)]
    return colorLog + colors.yellow(result);
}

console.log(evenOddSortRecursive([9,8,7,6,5,4,3,2,1,]));

const evenOddSort = (nums) => {
    let colorLog = colors.green('evenOddSort(') + colors.red(nums) + colors.green(') = ');
    const evens = [];
    const odds = [];
    while (nums.length > 0) {
        let smallestEven = Infinity;
        let smallestOdd = Infinity;
        for ( let i = 0; i < nums.length; i++) {
            if (nums[i] % 2 === 0) {
                if (nums[i] < smallestEven) {
                    smallestEven = nums[i];
                }
            } else if (nums[i] < smallestOdd) {
                smallestOdd = nums[i];
            }
        }
        if (smallestEven !== Infinity) {
            evens.push(smallestEven);
            let smallestEvenIndex = nums.indexOf(smallestEven);
            nums.splice(smallestEvenIndex, 1);
        }
        if (smallestOdd !== Infinity) {
            odds.push(smallestOdd);
            let smallestOddIndex = nums.indexOf(smallestOdd);
            nums.splice(smallestOddIndex, 1);
        }
    }
    result = [ ...evens, ...odds];
    return colorLog + colors.yellow(result);
}

console.log(evenOddSort([0,1,1,1,1,1,1,1,1,1,2,4,5]));
console.log(evenOddSort(0,2));

// Built in Sorts

nums = [3,2,0,4,1];
console.log(colors.green('nums.sort(') + colors.red(nums) + colors.green(') = ') + colors.yellow(nums.sort()));
nums = [ 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
console.log(colors.green('nums.sort(') + colors.red(nums) + colors.green(') = ') + colors.yellow(nums.sort()));

const compareNumbers = (a, b) => {
    return a - b;
}

nums = [1024, 128, 16,   2, 256,  32, 4, 512, 64, 8];
console.log(colors.green('compareNumbers('), colors.red(...nums), colors.green(') ='), colors.yellow(nums.sort(compareNumbers).join(',')));

// Funky Sorting with JavaScript's sort

nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const oddEvenCompare = (a, b) => {
    let colorLog = colors.green('oddEvenCompare(') + colors.red(a, b) + colors.green(') = ');
    if (a % 2 === 1 && b % 2 === 0) return colorLog + colors.yellow(1);
    if (a % 2 === 0 && b % 2 === 1) return colorLog + colors.yellow(-1);
    return colorLog + (a[0] - b[0]);
}

console.log(colors.green('nums.sort(') + colors.red(oddEvenCompare) + colors.green(') = ') + nums.sort(oddEvenCompare));
console.log(oddEvenCompare(1, 2));
console.log(oddEvenCompare(0, 1));

// MoveZeroesCompare

nums [0, 1, 0, 4, 15];

const MoveZeroesCompare = (a, b) => {
    if (a === 0) return 1;
    if (b === 0) return -1;
    return a - b;
}

console.log(nums.sort(MoveZeroesCompare));
