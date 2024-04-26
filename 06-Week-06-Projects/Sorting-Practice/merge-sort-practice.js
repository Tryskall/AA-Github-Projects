// File: merge-sort-practice.js

const colors = require('colors');

// The Merge Sort Algorithm
// -- Split unsorted array in half with Divide
// -- Sort the halves with Conquer
// -- Merge the newly sorted halves

const recursiveSortHelper = arr => {
    if (arr.length <= 1) return arr;
        let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) maxIndex = i;
    }
    const maxValue = arr.splice(maxIndex, 1)[0];
    recursiveSortHelper(arr);
    arr.push(maxValue);
    return arr;
    }

const mergeSort = arr => {
    let colorLog = colors.green('mergeSort(') + colors.red(arr) + colors.green(') = ');
    if (arr.length <= 1) return arr;
    let divide = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, divide);
    const rightHalf = arr.slice(divide);
    let result = merge(recursiveSortHelper(leftHalf), recursiveSortHelper(rightHalf));
    return colorLog + colors.yellow(result);
}

const merge = (arrA, arrB) => {
    let returnArray = [];
    let i = 0;
    let j = 0;
    while (i < arrA.length || j < arrB.length) {
        const elA = i < arrA.length ? arrA[i] : Infinity;
        const elB = j < arrB.length ? arrB[j] : Infinity;
        returnArray.push(elA < elB ? arrA[i++] : arrB[j++]);
        // if (i === arrA.length) {
        //     returnArray.push(arrB[j]);
        //     j++;
        // } else if (j === arrB.length) {
        //     returnArray.push(arrA[i]);
        //     i++;
        // } else if (arrA[i] < arrB[j]) {
        //     returnArray.push(arrA[i]);
        //     i++;
        // } else {
        //     returnArray.push(arrB[j]);
        //     j++;
        // }
    }
    return returnArray;
}

console.log(mergeSort([9, 3, 4, 2]));
