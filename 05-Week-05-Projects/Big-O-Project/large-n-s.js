// File: large-n-s.js for learning Big-O

function addTwoNums(num1, num2) {
    let total = 0;
    for (let i = 0; i < num1; i++) {
        total += 1;
    }
    for (let i = 0; i < num2; i++) {
        total += 1;
    }
    return total;
}

startTime = Date.now();
addTwoNums(1234, 5678);
endTime = Date.now();
// console.log(`Runtime: ${endTime - startTime}ms`);

function arraySearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return true;
    }
    return false;
}

function addFirstAndLast(nums) {
    const firstNum = nums[0];
    const lastNum = nums[nums.length-1];
    return firstNum + lastNum;
}

const twoNums = [999999999999, 999999999999];
const millionNums = [];
const twoMillionNums = [];

for (let i = 0; i < 1000000; i++) {
    millionNums.push(999999999999);
}

for (let i = 0; i < 20000000; i ++) {
    twoMillionNums.push()
}

startTime2 = Date.now();
addFirstAndLast(twoNums);
endTime2 = Date.now();

startTime1m = Date.now();
addFirstAndLast(millionNums);
endTime1m = Date.now();

startTime2m = Date.now();
addFirstAndLast(twoMillionNums);
endTime2m = Date.now();

// console.log(`runTime 2 ${endTime2 - startTime2}`);
// console.log(`runTime1m ${endTime1m- startTime1m}`);
// console.log(`runTime2m ${endTime2m - startTime2m}`);

function printLetters() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < letters.length; i++) {
        console.log(letters[i]);
    }
}
// startTimeL = Date.now();
// printLetters();
// endTimeL = Date.now();
// console.log(`runTimeL ${endTimeL - startTimeL}`);

function getNumPairsList(n) {
    let pairs = [];
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            pairs.push([i, j]);
            count++;
        }
    }
    console.log(count);
    return pairs;
}

// console.log(getNumPairsList(8).length);

function increaseByOne(nums) {
    const increased = [];
    for (let i = 0; i < nums.length; i++) {
        increased.push(nums[i] + 1);
    }
    return increased;
}

console.log(increaseByOne([10, 15, 20]));
