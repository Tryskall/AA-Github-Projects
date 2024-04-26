// File: custom-sorts.js

function ageSort(users) {
    return users.sort((a, b) => a.age - b.age);
  }

function oddEvenSort(arr) {
    const oddArray = [];
    const evenArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArray.push(arr[i]);
        } else if (arr[i] % 2 !== 0) {
            oddArray.push(arr[i]);
        }
    }
    return [...oddArray.sort((a, b) => a - b), ...evenArray.sort((a, b) => a - b)];
}

function validAnagrams(s, t) {
    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');
    return sortedS === sortedT;
}

function reverseBaseSort(arr) {
  const sortByBaseAndValue = (a, b) => {
    const baseA = Math.floor(Math.log10(Math.abs(a))) + 1;
    const baseB = Math.floor(Math.log10(Math.abs(b))) + 1;
    if (baseA !== baseB) {
        return baseB - baseA;
    } else {
        const digitsA = Array.from(String(Math.abs(a)), Number);
        const digitsB = Array.from(String(Math.abs(b)), Number);
        while (digitsA.length && digitsB.length) {
            const digitA = digitsA.shift();
            const digitB = digitsB.shift();
            if (digitA !== digitB) {
                return digitA - digitB;
            }
        }
        return digitsA.length = digitsB.length;
    }
  }
  arr.sort(sortByBaseAndValue);
  return arr;
}

function frequencySort(arr) {
    const frequencyMap = new Map();
    arr.forEach((num) => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });
    const customSort = (a, b) => {
        const frequencyA = frequencyMap.get(a);
        const frequencyB = frequencyMap.get(b);
        if (frequencyA !== frequencyB) {
            return frequencyA - frequencyB;
        }
        return b - a;
    }
    arr.sort(customSort);
    return arr;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];

// const users = [
//   {
//     id: 1,
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     occupation: 'Software Engineer',
//     friends: [2, 3, 4]
//   },
//   {
//     id: 2,
//     firstName: 'Jane',
//     lastName: 'Doe',
//     age: 25,
//     occupation: 'Data Scientist',
//     friends: [1, 4]
//   },
//   {
//     id: 3,
//     firstName: 'Mary',
//     lastName: 'Smith',
//     age: 32,
//     occupation: 'UX Designer',
//     friends: [2, 4]
//   },
//   {
//     id: 4,
//     firstName: 'James',
//     lastName: 'Johnson',
//     age: 55,
//     occupation: 'CTO',
//     friends: [1, 2, 3]
//   }
// ];

// console.log(ageSort(users));         // => Jane, John, Mary, James

// const arr1 = [5, 4, 7, 2, 9, 8, 1, 6, 3];
// const arr2 = [5, 8, 13, 6, 22, 14, 9];

// console.log(oddEvenSort(arr1));           // => [1, 3, 5, 7, 9, 2, 4, 6, 8]
// console.log(oddEvenSort(arr2));           // => [5, 9, 13, 6, 8, 14, 22]

// let s = "anagram";
// let t = "nagaram";
// let r = "ranagra";

// console.log(validAnagrams(s, t));            // => true
// console.log(validAnagrams(s, r));            // => false

// const arr1 = [11, 1, 101, 0, 10, 100];
// const arr2 = [1, 45, 164, 6, 31, 90, 671];

// console.log(reverseBaseSort(arr1));      // => [100, 101, 10, 11, 0, 1]
// console.log(reverseBaseSort(arr2));      // => [164, 671, 31, 45, 90, 1, 6]

const arr1 = [1, 1, 2, 2, 2, 3];
const arr2 = [2, 3, 1, 3, 2];
const arr3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1]

console.log(frequencySort(arr1));        // => [3, 1, 1, 2, 2, 2]
console.log(frequencySort(arr2));        // => [1, 3, 3, 2, 2]
console.log(frequencySort(arr3));        // => [5, -1, 4, 4, -6, -6, 1, 1, 1]
