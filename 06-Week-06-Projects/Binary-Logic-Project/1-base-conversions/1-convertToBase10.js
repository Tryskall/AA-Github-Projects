// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const { addZeros } = require('../utils/addZeros');

const convertToBase10 = str => {                   // takes a string to convert from binary or hexadecimal into decimal
   let base;                                       // declares a variable to store the base number system 2 or 16
   let chars = '0123456789ABCDEF';                 // declares a string of all characters used in hexadecimal system
   if (str.startsWith('0b')) base = 2;             // identifies the base by using the first 2 characters
   if (str.startsWith('0x')) base = 16;            // identifies the base by using the first 2 characters
   let sum = 0;                                    // declares a variable to store the final decimal result
   for (let i = str.length - 1; i >= 2; i--) {     // iterates over each character backwards
    let exp = str.length - 1 - i;                  // declares a variable to represent the exponent of current digit
    let els = str[i];                              // declares a variable to represent the current character of iteration
    let el = Number(chars.indexOf(els));           // declares a variable that equals the numeric value of current character
    sum += el*(base**exp);                         // calculates the contribution of current digit
   }                                               // --- and adds to the sum and multiplies by power of base
   return sum;                                     // returns the final result of sum
  };

  /******************************************************************************/

  console.log(convertToBase10('0b1100')); // 12
  console.log(convertToBase10('0b0101')); // 5
  console.log(convertToBase10('0b1000')); // 8
  console.log(convertToBase10('0b0111')); // 7

  console.log('––––––');

  console.log(convertToBase10('0b10100101')); // 165
  console.log(convertToBase10('0b11111111')); // 255
  console.log(convertToBase10('0b01010101')); // 85
  console.log(convertToBase10('0b00110011')); // 51

  console.log('––––––');

  console.log(convertToBase10('0xf')); // 15
  console.log(convertToBase10('0xfa')); // 250
  console.log(convertToBase10('0x1234')); // 4660
  console.log(convertToBase10('0xc9a1')); // 51617
  console.log(convertToBase10('0xbf12')); // 48914
