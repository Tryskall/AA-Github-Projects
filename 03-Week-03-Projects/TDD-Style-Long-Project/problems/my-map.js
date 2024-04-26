// File: MyMap.js for myMap(inputArray, callback) function

function myMap(inputArray, callback) {
  let newArray = [];
  if (Array.isArray(inputArray)) {
    for (i = 0; i < inputArray.length; i++) {
      newArray.push(callback(inputArray[i]));
    }
  }
  return newArray;
}

module.exports = myMap;

// console.log(myMap([1,2,3], el => el * 2));
