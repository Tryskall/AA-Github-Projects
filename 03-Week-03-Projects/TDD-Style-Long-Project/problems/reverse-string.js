// File: problems/reverse-string.js for reverseString() function

module.exports = {
  reverseString: string => string.split('').reverse().join(''),
};

// const reversed = module.exports.reverseString('butter');
// console.log(reversed); // 'rettub'

// const reverseModule = module.exports.reverseString(123);
// console.log(reverseModule); // TypeError: string.split is not a function
