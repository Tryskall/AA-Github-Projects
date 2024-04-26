// File: number-fun.js for returnsThree and reciprocal(n) functions

function returnsThree() {
  return 3;
}

function reciprocal(num) {
  if (num >= 1 && num <= 1000000) {
  return 1 / num;
  } else {
    throw new RangeError('number must be between 1 and 1000000');
  }
}

module.exports = {
  returnsThree,
  reciprocal
};
