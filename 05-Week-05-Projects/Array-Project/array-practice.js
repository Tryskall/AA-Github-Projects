// File: array-practice.js for practice project array long practice

const message = "Array must have at least 1 element!";
const errorMessage = "Input must be an array!"

const findMinimum = arr => {
  if (arr.length < 0) return message;
  let minNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
  }
  return minNum;
};

// console.log(findMinimum([1,2,3,4,5]));

const runningSum = arr => {
  if (arr.length < 1) return [];
  let runningSumOfArray = 0;
  let runningSumArray = [];
  for (let i = 0; i < arr.length; i++) {
    runningSumOfArray += arr[i];
    runningSumArray.push(runningSumOfArray);
  }
  return runningSumArray;
  // return arr.reduce((sum, current) => sum + current, arr[0]);
};

// console.log(runningSum([1,2,3,4,5]));
// console.log(runningSum([1,2,3,4,-2,-2]));
// console.log(runningSum([1,2,3,4,-2,-2,-10]));

const evenNumOfChars = arr => {
  if (arr.length < 0) return message;
  if (!Array.isArray(arr)) throw new Error(errorMessage);
  return arr.filter(str => str.length % 2 === 0).length;
};

// console.log(evenNumOfChars(['abc', 'ab', 'abcd', 'abcdef']));

const smallerThanCurr = arr => {
  if (arr.length < 0) return message;
  if (!Array.isArray(arr)) throw new Error(errorMessage);
  return arr.map((num, index) => {
      return arr.filter((otherNum, otherIndex) => otherIndex !== index & otherNum < num).length;
  })
};

// console.log(smallerThanCurr([8,1,2,2,3]));

const twoSum = (arr, target) => {
  if (arr.length < 0) return message;
  if (!Array.isArray(arr)) throw new Error(errorMessage);
  const numSet = new Set()
  for (let num of arr) {
    const canSumToTarget = target - num;
    if (numSet.has(canSumToTarget)) {
        return true;
    }
    numSet.add(num);
  }
  return false;
};

// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([3,1,4,6], 11));

const secondLargest = arr => {
  if (arr.length < 2) return;
  let first;
  let second;
  if (arr[0] > arr[1]) {
    first = arr[0];
    second = arr[1];
  } else {
    first = arr[1];
    second = arr[0];
  }
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }
  return second;
};

console.log(secondLargest([]));
console.log(secondLargest([5,2,8,7,1]));
console.log(secondLargest([10,3,5,8,2,8]));

const shuffle = (arr) => {
  if (arr.length < 0) return message;
  if (!Array.isArray(arr)) throw new Error(errorMessage);
  const shuffledArray = arr.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

// const originalArray = [1,2,3,4,5];
// const shuffledResult = shuffle(originalArray);
// console.log(shuffledResult);

module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
