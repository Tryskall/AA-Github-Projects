// File: hash-tables-practice-sheet.js for learning hash functions

const colors = require('colors');
const sha256 = require('sha256');
// const { KeyValuePair } = require('./keyValuePair');
const { HashTable } = require('./hashTable');
const { createHash } = require('crypto');

// DETERMINISTIC -- no matter what the input is, the hashing process will always go through the exact
// --- same steps, resulting in the exact same output

function simpleHash(str) {
    let message = colors.green('simpleHash(' + colors.red(str) + colors.green(') = '));
    let hashValue = 0;
    for (let i = 0; i < str.length; i++) {
        hashValue += str.charCodeAt(i);
    }
    return message + colors.yellow(hashValue);
}

function hashHelper(str) {
    let hashValue = 0;
    for (let i = 0; i < str.length; i++) {
        hashValue += str.charCodeAt(i);
    }
    return hashValue % this.table.length;
}

console.log(simpleHash('Hello, World!'));
console.log(simpleHash('Hello, World!'));
console.log(simpleHash('ABC'));
console.log(simpleHash('abc'));
console.log(simpleHash('ABCDEF'));
console.log(simpleHash('ABCDEF'));
console.log(simpleHash('zbeT'));

// SHA256 hashing --- secure hashing algorithm

// const strongerHash = val => {
//     crypto.subtle
//         .digest('SHA-256', new TextEncoder('utf-8').encode(val))
//         .then(h => {
//             let hexes = [],
//             view = new DataView(h);
//             for (let i = 0; i < view.byteLength; i += 4)
//                 hexex.push(('000000000' + view.getUint32(i).toString(16)).slice(-8));
//             return hexes.join('');
//         });
// }
function strongerHash(string) {
    let message = colors.green('strogerHash(' + colors.red(string) + colors.green(') = '))
    return message + colors.yellow(createHash('sha256').update(string).digest('hex'));
}

console.log(strongerHash("Hello, World!"));
console.log(strongerHash("ABC"));
console.log(strongerHash("ABCDEF"));
console.log(strongerHash("ABBEEF"));
console.log(strongerHash("Hello, world:"));

// Hash Tables --- key/value storage

// const hashtable = {};
// hashtable["key"] = colors.green('hashtable[') + colors.red('key') + colors.green('] = ') + colors.yellow('value');
// console.log(hashtable["key"]);


// Conversion Key to convert hash into a valid array

// function hashMod(key) {
//     let message = colors.green('hashMod(') + colors.red('key') + colors.green(') = ');
//     let result = hashHelper(key) % data.length;
//     return message + colors.yellow(result);
// }

// let HashTable = {
//     data: [
//         null,
//         KeyValuePair { key: 'key', value: 'value' },
//         null,
//         null,
//         null,
//         null,
//         null,
//         null
//     ]
// }

// console.log(simpleHash('key'));
// console.log(hashMod('key'));

// console.log(simpleHash('new key'));
// console.log(hashMod('new key'));

// console.log(simpleHash('App Academy'));
// console.log(hashMod('App Academy'));

// console.log(simpleHash('She sells seashells by the seashore...'));
// console.log(hashMod('She sells seashells by the seashore...'));

const ht = new HashTable();
ht.set('France', 111);
ht.set('Spain', 150);
ht.set('a', 192);

ht.display();
console.log(ht.size);
ht.remove('spain');
ht.display();
