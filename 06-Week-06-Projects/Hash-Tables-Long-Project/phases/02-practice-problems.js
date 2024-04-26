// File: 02-practice-problems.js

const colors = require('colors');

function anagrams(str1, str2) {
    let table1 = table(str1);
    let table2 = table(str2);
    for (const char of str1) {
      if (table1[char] !== table2[char]) return false;
    }
    for (const char of str2) {
      if (table1[char] !== table2[char]) return false;
    }
    return true;
  }

const table = str => {
  let tableu = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (tableu[letter] === undefined) tableu[letter] = 1;
    else tableu[letter]++;
  }
  return tableu;
}

function commonElements(arr1, arr2) {
  let set1 = new Set(arr1);
  let newArr = [];
  for (const num of arr2) {
    if (set1.has(num)) newArr.push(num);
  }
  return newArr;
}

function duplicate(arr) {
  let set = new Set();
  for (const num of arr) {
    if (set.has(num)) return num;
    else set.add(num);
  }
}

function twoSum(nums, target) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(target - nums[i])) return true;
    else set.add(nums[i]);
  }
  return false;
}

function wordPattern(pattern, strings) {
  if (strings.length > pattern.length) return false;
  let hash1 = hash(pattern.slice(0,4).split(''));
  let first4 = strings.slice(0,4);
  let hash2 = hash(first4);
  if (hash2 !== hash1) return false;
  for (let i = 4; i < strings.length; i += 4) {
    if (strings.slice(i,i+4).join('') !== first4.join('')) return false;
  }
  return true;
}

const hash = arr => {
  let num = 0;
  let max = 0;
  let hash = 0;
  let obj = {};
  for (let i = 0; i < 4; i++) {
    let el = arr[i];
    if (obj[el]) num = obj[el];
    else {
      max++
      num = max;
      obj[el] = num;
    }
    hash += num * 10**(3 - i);
  }
  return hash;
}

// Node testing wordPattern()
let target = 1000000;
let patternArr = [];
let strings = [];
for (let i = 0; i < target; i++) {
  patternArr.push("ABCD");
  strings.push('Agave');
  strings.push('Bonuelo');
  strings.push("ChaCha");
  strings.push('DingoBerry');
}
console.log(colors.green('wordPattern(')
+ colors.red(patternArr, strings)
+ colors.green(') = ')
+ colors.yellow(wordPattern(patternArr.join(""), strings)));


  module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
