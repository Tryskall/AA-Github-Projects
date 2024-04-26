// File: 2-convertToBase2.js for solving Binary problems

// Convert the integers in the console.logs below to base 2

/******************************************************************************/

const convertToBase2 = element => {
    let base = '0b';
    let rest = element;
    let maxExp2 = Math.floor(getMaxExp2(element));
    for (let i = 0; i <= maxExp2; i++) {
        let exp = 2**(maxExp2 - i);
        if (exp <= rest) {
            base += 1;
            rest -= exp;
        } else {
            base += 0;
        }
    }
    return base;
};

const getMaxExp2 = num => {
    let i = 0;
    while (2**i <= num) {
        i++;
    }
    i--;
    return i;
}

const convertToBase_2 = str => {
    return 'ob' + (+str).toString(2);
}

  /******************************************************************************/

  console.log(convertToBase2(4)); // 0b100
  console.log(convertToBase2(65)); // 0b1000001
  console.log(convertToBase2(256)); // 0b100000000
  console.log(convertToBase2(123)); // 0b1111011
  console.log(convertToBase2(1000)); // 0b1111101000

  console.log('––––––');

  console.log(convertToBase2('0xf')); // 0b1111
  console.log(convertToBase2('0xfa')); // 0b11111010
  console.log(convertToBase2('0x1234')); // 0b1001000110100
  console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
  console.log(convertToBase2('0xbf12')); // 0b1011111100010010
