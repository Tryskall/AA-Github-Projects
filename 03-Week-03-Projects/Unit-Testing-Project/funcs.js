function isFive(num) {
  return num === 5;
}

function isOdd(number) {
  if (typeof number !== 'number') {
    throw new Error('Input is not a number');
  }
  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  let myRangeArray = [];
  for (let i = min; i <= max; i += step) {
    myRangeArray.push(i);
  }
  return myRangeArray;
}


module.exports = { isFive, isOdd, myRange };
