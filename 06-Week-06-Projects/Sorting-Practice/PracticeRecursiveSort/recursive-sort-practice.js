// File: recursive-sort-practice.js

const colors = require('colors');

const factorialHelper = (n , accumulator) => {
    if (n <= 1) return accumulator;
    return factorialHelper(n -1, n * accumulator);
}

function factorial(n) {
    let colorLog = colors.green('factorial(') + colors.red(n) + colors.green(') = ');
    let result = factorialHelper(n, 1);
    return colorLog + colors.yellow(result);
}

console.log(factorial(1));
console.log(factorial(9));
console.log(factorial(19));

function recursiveSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }
    const maxValue = arr.splice(maxIndex, 1)[0];
    recursiveSort(arr).join(', ');
    arr.push(maxValue);
    let result = arr;
    return result;
}

console.log(colors.green('recursiveSort(') + colors.red([]) + colors.green(') = ') + colors.yellow(recursiveSort([])));
console.log(colors.green('recursiveSort(') + colors.red([]) + colors.green(') = ') + colors.yellow(recursiveSort([3, 2, 0, 4, 1])));

const recursiveSortWithDivideAndConquer = arr => {
    if (arr.length <=1) return arr;
    const findMinIndex = (arr, start) => {
        let minIndex = start;
        for (let i = start + 1; i < arr.length; i++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = i;
            }
        }
        return minIndex;
    }
    const swap = (arr, i, j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    const recursiveSortHelper = (arr, start) => {
        if (start >= arr.length - 1) {
            return;
        }
        const minIndex = findMinIndex(arr, start);
        swap(arr, start, minIndex);
        recursiveSortHelper(arr, start + 1);

    }
    recursiveSortHelper(arr, 0);
    return arr;
}

console.log(colors.green('recursiveSortWithDivideAndConquer(') + colors.red([3, 2, 0, 4, 1]) + colors.green(') = ')+ colors.yellow(recursiveSortWithDivideAndConquer([3, 2, 0, 4, 1])));
console.log(colors.green('recursiveSortWithDivideAndConquer(') + colors.red([]) + colors.green(') = ')+ colors.yellow(recursiveSortWithDivideAndConquer([])));
