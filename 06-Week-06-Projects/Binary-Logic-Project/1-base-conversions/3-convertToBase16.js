// File: 3-convertToBase16.js for Logic and Truth Project

// Convert the integers in the console.logs below to base 16:

/******************************************************************************/

const convertToBase16 = element => {
    let base = '0x';
    let rest = element;
    let maxExp16 = getMaxExp16(element);
    for (let i = 0; i <= maxExp16; i++) {
        let exp = 16**(maxExp16 - i);
        if (exp <= rest) {
            let digit = Math.floor(rest/exp);
            rest -= digit * exp;
            if (digit >= 10) {
                digit = 'abcdef'[digit - 10]
            }
            base += digit;
        } else {
            base += 0;
        }
    }
    return base;
  };

  const getMaxExp16 = num => {
    let i = 0;
    while ( 16**i <= num) {
        i++
    }
    i--;
    return i;
  }

  const convertToBase_16 = str => {
    return '0x' + (+str).toString(16);
  }

  /******************************************************************************/

  console.log(convertToBase16(4)); // 0x4
  console.log(convertToBase16(65)); // 0x41
  console.log(convertToBase16(256)); // 0x100
  console.log(convertToBase16(123)); // 0x7b
  console.log(convertToBase16(1000)); // 0x3e8

  console.log('––––––');

  console.log(convertToBase16('0b1100')); // 0xc
  console.log(convertToBase16('0b0101')); // 0x5
  console.log(convertToBase16('0b1000')); // 0x8
  console.log(convertToBase16('0b0111')); // 0x7

  console.log('––––––');

  console.log(convertToBase16('0b10100101')); // 0xa5
  console.log(convertToBase16('0b11111111')); // 0xff
  console.log(convertToBase16('0b01010101')); // 0x55
  console.log(convertToBase16('0b00110011')); // 0x33
