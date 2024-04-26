// File: binary-practice.js for Binary Practice Project

// Binary to base 10
// 1) 0b1010 = 10
// 2)0b0011 = 3

const binaryToBase10 = (binary) => {
    binary = String(binary);
    let base10 = 0;
    for (let i = 0; i < binary.length; i++) {
        base10 += parseInt(binary[i]) * Math.pow(2, binary.length -1 - i);
    }
    return base10;
}

console.log(binaryToBase10('1010')); // 10
console.log(binaryToBase10('0011')); // 3

// Binary to hexadecimal

// 1) 0b1010 = A
// 2) 0b0011 = 3

function binaryToHexadecimal(binary) {
    binary = String(binary);
    while (binary.length % 4 !== 0) {
        binary = "0" + binary;
    }
    let hexadecimal = "";
    for (let i = 0; i < binary.length; i += 4) {
        const group = binary.substr(i, 4);
        const hexDigit = parseInt(group, 2).toString(16);
        hexadecimal += hexDigit;
    }
    return hexadecimal.toUpperCase();
}

console.log(binaryToHexadecimal("1010")); // Should print "A"
console.log(binaryToHexadecimal("0011")); // Should print "3"

// Hexadecimal to base 10

// 1) 0xa1 = 161
// 2) 0xff = 255

function hexadecimalToBase10(hexadecimal) {
    hexadecimal = String(hexadecimal);
    let base10 = 0;
    for (let i = hexadecimal.length - 1; i >= 0; i--) {
        const digitValue = parseInt(hexadecimal[i], 16);
        base10 += digitValue * Math.pow(16, hexadecimal.length - 1 - i);
    }
    return base10;
}

console.log(hexadecimalToBase10("a1")); // Should print 161
console.log(hexadecimalToBase10("ff")); // Should print 255

// Hexadecimal to Binary

// 1) 0xa1 = 10100001
// 2) 0xff = 11111111

function hexadecimalToBinary(hexadecimal) {
    hexadecimal = String(hexadecimal);
    let binary = "";
    for (let i = 0; i < hexadecimal.length; i++) {
        const binaryDigit = parseInt(hexadecimal[i], 16).toString(2).padStart(4, '0');
        binary += binaryDigit;
    }
    return binary;
}

console.log(hexadecimalToBinary("a1")); // Should print "10100001"
console.log(hexadecimalToBinary("ff")); // Should print "11111111"

// Base 10 to Binary

// 1) 8 = 1000
// 2) 24 = 11000
// 3) 255 = 11111111

function decimalToBinary(decimal) {
    if (decimal === 0) {
        return "0";
    }
    let binary = "";
    while (decimal > 0) {
        const remainder = decimal % 2;
        binary = remainder + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}

console.log(decimalToBinary(8)); // Should print "1000"
console.log(decimalToBinary(24)); // Should print "11000"
console.log(decimalToBinary(255)); // Should print "11111111"


// Base 10 ASCII

// 1) 65 = A
// 2) 66 = B
// 3) 97 = a
// 4) 98 = b

function decimalToASCII(decimal) {
    const asciiChar = String.fromCharCode(decimal);
    return asciiChar;
}

console.log(decimalToASCII(65)); // Should print "A"
console.log(decimalToASCII(66)); // Should print "B"
console.log(decimalToASCII(97)); // Should print "a"
console.log(decimalToASCII(98)); // Should print "b"

// Hexadecimal to ASCII

// 1) 0x41 = A
// 2) 0x42 = B
// 3) 0x61 = a
// 4) 0x62 = b

function hexadecimalToASCII(hexadecimal) {
    hexadecimal = String(hexadecimal);
    let asciiString = "";
    for (let i = 0; i < hexadecimal.length; i += 2) {
        const hexPair = hexadecimal.substr(i, 2);
        const decimalValue = parseInt(hexPair, 16);
        asciiString += String.fromCharCode(decimalValue);
    }
    return asciiString;
}

console.log(hexadecimalToASCII("0x41")); // Should print "A"
console.log(hexadecimalToASCII("0x42")); // Should print "B"
console.log(hexadecimalToASCII("0x61")); // Should print "a"
console.log(hexadecimalToASCII("0x62")); // Should print "b"

// Binary to ASCII

// 1) 0b01000001 = A
// 2) 0b01000010 = B
// 3) 0b01100001 = a
// 4) 0b01100010 = b

function binaryToASCII(binary) {
    binary = String(binary);
    let asciiString = "";
    for (let i = 0; i < binary.length; i += 8) {
        const byte = binary.substr(i, 8);
        const decimalValue = parseInt(byte, 2);
        asciiString += String.fromCharCode(decimalValue);
    }
    return asciiString;
}

console.log(binaryToASCII("01000001")); // Should print "A"
console.log(binaryToASCII("01000010")); // Should print "B"
console.log(binaryToASCII("01100001")); // Should print "a"
console.log(binaryToASCII("01100010")); // Should print "b"
