/*******************************************************************************

// PROBLEM 01 MY FOR EACH

/*******************************************************************************
Write a function `myForEach` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in the
element, index, and array itself. The function does not need to return any value.

Do not use the built in Array#forEach.

Examples:

let myForEach = function(array, cb) {
    for (let i = 0; i < array.length; i++) {
        el = array[i];
        cb(el, i, array);
    };
};

// let myForEack = function(array, cb) => {
//     array.forEach((el, i) => cb(el, i, array));
// };

myForEach(['a', 'b', 'c'], function (el, i) {
    console.log(el + ' is at index ' + i);
}); // prints
// a is at index 0
// b is at index 1
// c is at index 2

let test = [];
myForEach(['laika', 'belka'], function (el) {
    test.push(el.toUpperCase());
});
console.log(test); // ['LAIKA', 'BELKA']

*******************************************************************************/

// PROBLEM 02 MY MAP

/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.

Do not use the built in Array#map

Examples

let myMap = function(arr, cb) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
    newArray.push(cb(arr[i]));
};
return newArray;
};

// let myMap _ (arr, cb) => {
//     return arr.map(cb);
// };

let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]
*******************************************************************************/

// PROBLEM 03 MULTI MAP

/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let multiMap = function(value, n, cb) {
    for (let i = 0; i < n; i++) {
    value = cb(value)
    }
    return value;
};

let result1 = multiMap(7, 2, function(n) {
    return n * 10;
  });
  console.log(result1); // 700

  let result2 = multiMap(7, 3, function(n) {
      return n * 10;
  });
  console.log(result2); // 7000

  let result3 = multiMap("hi", 5, function(s) {
    return s + "!";
  });
  console.log(result3); // hi!!!!!
*******************************************************************************/

//  PROBLEM 04 MY FILTER

/*******************************************************************************
// Write a function `myFilter` that accepts an array and a callback as arguments.
// The function should call the callback on each element of the array, passing in
// the element. The function should return a new array containing
// the elements that result in true when passed to the callback.

// Do not use the built in Array#filter.

// Examples:

let myFilter = function(array, cb) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        if (cb(el)) {
        newArray.push(el);
    }};
    return newArray;
};

// let myFilter = (array, cb) => {
//     return array.filter(cb);
// };


let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
    return n % 2 === 0;
});
console.log(result1);       // [ 4, 8 ]

let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']
*******************************************************************************/

// PROBLEM 05 SELECTIVE MAP

/*******************************************************************************
Write a function `selectiveMap` that accepts an array and two callbacks as arguments.
The function should return a new array where elements are replaced with the results
of calling the second callback on the element only if calling the first callback
on the element results in true. If calling the first callback on an element results
in false, then the element should not be changed in the new array.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
    (optional if you already asked a question for this problem.)
- Explain how you are using both of the callbacks in the function.
- What do you expect each callback function to be returning?
- How many times are you calling each callback function?


let selectiveMap = function(array, cb1, cb2) {          // declare variable as function
    let newArray = [];                                  // declare newArray to equal empty array
    for (let i = 0; i < array.length; i++) {            // swap out the forr loop with forEach(el)
        let el = array[i];                              // declare variable to equal array[i]
        if (cb1(el)) {                                  // check if el passed through callback1 is true
            newArray.push(cb2(el));                     // if true, add el passed through callback2 to newArray
        } else {                                        // if false,
            newArray.push(el);                          // add original element to newArray
        }
    };
    return newArray;                                    // return newArray
};

// let seletiveMap = (array, cb1, cb2) => {
//     return array.map(el => cb1(el) ? cb2(el) : el);
// };

function isEven(n) {
    return n % 2 === 0;
}

function isPositive(n) {
    return n > 0;
}

function square(n) {
    return n * n;
}

function flipSign(n) {
    return n * -1;
}

console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// [ 64, 5, 100, 16 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign));
// [ 10, -4, 7, -6, 2, -9 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square));
// [-10, 16, 49, 36, -2, -9]
*******************************************************************************/

//  PROBLEM 06 REJECT

/*******************************************************************************
Write a function `reject` that accepts an array and callback as arguments. The
function should call the callback for each element of the array, passing in the
element. The function should return a new array
containing elements of the original array that result in false when given to the
callback.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

let reject = function(array, cb) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        if (!cb(el)) {
            newArray.push(el);
        }
    };
    return newArray;
};

// let reject = (array, cb) => {
//     return array.filter(el => !cb(el));
// };


let isEven = function(n) {
    return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function(s) {
    return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]
*******************************************************************************/

// PROBLEM 07 MY SOME

/*******************************************************************************
Write a function `mySome` that accepts an array and a callback as an argument.
The function should call the callback for each element of the array, passing in
the element and its index. The function should return a boolean
indicating whether or not at least one element of the array returns true when passed
into the callback.

Examples:

// let mySome = function(array, cb) {
//     for (let i = 0; i < array.length; i++) {
//         let el = array[i];
//         if (cb(el, i)) {
//             return true;
//         };
//     };
//     return false;
// };

let mySome = (array, cb) => {
    return array.some(cb);
};

let result1 = mySome([5, 1, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result1);   // true

let result2 = mySome([5, 3, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result2);   // false

let result3 = mySome(['soup', 'noodles', 'bike', 'ship'], function(ele) {
    return ele.length === 4;
});
console.log(result3);   // true
*******************************************************************************/

// PROBLEM 08 COUNT

/*******************************************************************************
Write a function `count` that accepts an array and a callback as arguments. The
function should return the number of elements of the array that return true when
passed to the callback.

Examples:

// let count = function(array, cb) {
//     let elCount = 0;
//     for (let i = 0; i < array.length; i++) {
//         let el = array[i];
//         if (cb(el)) {
//             elCount++;
//         }
//     };
//     return elCount;
// };

let count = (array, cb) => {
    return array.reduce((count, el) => count + (cb(el) ? 1 : 0), 0);
};

let result1 = count([18, 5, 32, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 3

let result2 = count([17, 5, 31, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result2); // 1

let result3 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('o');
});
console.log(result3); // 3

let result4 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('x');
});
console.log(result4); // 0
*******************************************************************************/

// PROBLEM 09 CHAIN MAP

/*******************************************************************************
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:

- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result

Examples:

// let chainMap = function(value, cb1, cb2, cb3) {
//     let totalValue = value;

//         if (cb2 === undefined && cb3 === undefined) {
//             totalValue = cb1(totalValue);
//             // console.log(totalValue);
//         } else if (cb3 === undefined) {
//             totalValue = cb2(cb1(totalValue));
//             // console.log(totalValue);
//         } else {
//             totalValue = cb3(cb2(cb1(totalValue)));
//             // console.log(totalValue);
//         }
//     return totalValue;
// };

let chainMap = (value, ...cbs) => {
    return  cbs.reduce((accum, cb) => cb(accum), value);
};

let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4
*******************************************************************************/

// PROBLEM 10 MY EVERY

/*******************************************************************************
Write a function `myEvery` that accepts an array and a callback as arguments.
The function should return a boolean indicating whether or not all elements of
the array return true when passed into the callback.

Do not use the built in Array#every.

Examples:

let myEvery = function(array, cb) {
   for (let i = 0; i < array.length; i++) {
        let el = array[i];
        if (!cb(el)) {
            return false;
        }
   }
   return true;
};

// let myEvery = (array, cb) => {
//     return array.every(cb);
// };

let isEven = function (num) {
    return num % 2 === 0;
};


let hasO = function(string) {
    return string.includes('o');
};

console.log(myEvery([4, 8, 6, 10], isEven));            // true
console.log(myEvery([4, 7, 6, 10], isEven));            // false
console.log(myEvery(['book', 'door'], hasO));           // true
console.log(myEvery(['book', 'door', 'pen'], hasO));    // false
*******************************************************************************/

// PROBLEM 11 AND SELECT

/*******************************************************************************
Write a function `andSelect` that accepts an array and two callbacks. The function
should return a new array containing elements of the original array that result in
true when passed into both callbacks.

Examples:


let andSelect = function(array, cb1, cb2) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        if (cb1(el) && cb2(el)) {
            newArray.push(el);
        }
    };
    return newArray;
};

let andSelect = (array, cb1, cb2) => {
    return array.filter(el => cb1(el) && cb2(el));
};

let isEven = function (n) {
    return n % 2 === 0;
};

let isPositive = function (n) {
    return n > 0;
};

console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
// [ 8, 6, 12 ]

let isUpperCase = function (s) {
    return s === s.toUpperCase();
};

let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
}
console.log(andSelect(['ants', 'APPLES', 'ART', 'BACON', 'arm'], isUpperCase,  startsWithA));
// [ 'APPLES', 'ART' ]
*******************************************************************************/

// PROBLEM 12 EXACTLY

/*******************************************************************************
Write a function `exactly` that accepts an array, a number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
exactly `number` elements of the array that return true when passed into the callback.

Examples:

let exactly = function(array, num, cb) {
    let nCount = 0;

    for (let i = 0; i < array.length; i++) {
        let el = array[i];

        if (cb(el)) {
            nCount++;
        }
    };
    return (nCount === num);
};

let exactly = (array, num, cb) => {
    const nCount = array.reduce((count, el) => count + (cb(el) ? 1 : 0), 0);
    return nCount === num;
};

let result1 = exactly([18, 5, 32, 7, 100], 3, function (n) {
    return n % 2 === 0;
});
console.log(result1); // true

let result2 = exactly([18, 5, 32, 7, 100], 2, function (n) {
    return n % 2 === 0;
});
console.log(result2); // false

let result3 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 1, function (str) {
    return str.includes('x');
});
console.log(result3); // false

let result4 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 0, function (str) {
    return str.includes('x');
});
console.log(result4); // true
*******************************************************************************/

// PROBLEM 13 MIN VALUE CALLBACK

/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:


// let minValueCallback = function(arr, cb) {
//     let min = arr[0];
//     let newArray = [];
//     for (let i = 1; i < arr.length; i++) {
//         let el = arr[i];
//        if (el < min) {
//            min = el;
//        }
//     }
//     if (cb !== undefined) {
//         min = (cb(min));
//     };
//     return min;
// };

let minValueCallback = (arr, cb) => {
    let min = arr.reduce((prev, curr) => Math.min(prev, curr), arr[0]);
    if (cb !== undefined) {
        min = cb(min);
    };
    return min;
};


console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3
*******************************************************************************/

// PROBLEM 14 MAP MUTATOR

/*******************************************************************************
Write a function `mapMutator` that accepts an array and a callback as arguments.
The function should pass each element and index into the callback and use the result
to overwrite elements of the original array, mutating the array.

Examples:

let mapMutator = function(array, cb) {
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        let pos = array.indexOf(el);
        array.push(cb(array.shift(el), pos));
    }
    return array;
};

let mapMutator = (array, cb) => {
    array.forEach((el, pos) => {
        array[pos] = cb(el, pos);
    });
    return array;
};

let arr1 = [4, 2, 6, 5];
mapMutator(arr1, function (el, i) {
    return el * 2;
});
console.log(arr1);  // [ 8, 4, 12, 10 ]

let arr2 = [8, 9, 10];
mapMutator(arr2, function (el, i) {
    return el * i;
});
console.log(arr2); // [ 0, 9, 20 ]
*******************************************************************************/

// PROBLEM 15 SENTENCE MAPPER

/*******************************************************************************
Write a function `sentenceMapper` that accepts a sentence and a callback as arguments.
The function should return a new sentence where every word of the original sentence
becomes the result of passing the word to the callback.

Examples:


// let sentenceMapper = function(sentence, cb) {
//     let newSent = sentence.split(' ');
//     // console.log(newSent);
//     for (let i = 0; i < newSent.length; i++) {
//         let word = newSent[i];
//         // console.log(word);
//         newSent.push(cb(newSent.shift(word)));
//     };
//     return newSent.join(' ');
// };

let sentenceMapper = (sentence, cb) => {
    return sentence.split(' ').map(cb).join(' ');
};

let result1 = sentenceMapper("what is the answer?", function(word) {
    return word.toUpperCase() + "!";
});
console.log(result1); // 'WHAT! IS! THE! ANSWER?!'

let removeVowels = function(word) {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!"aeiou".includes(char)) {
            newWord += char;
        }
    }
    return newWord;
};

let result2 = sentenceMapper("this is pretty cool right", removeVowels);
console.log(result2); // 'ths s prtty cl rght'

*******************************************************************************/

// PROBLEM 16 SUFFIX CIPHER

/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let suffixCipher = function(sent, obj) {
   const modWords = sent.split(' ').map(word => {
    for (const suffix in obj) {
        if (word.endsWith(suffix)) {
            return obj[suffix](word);
        }
    }
    return word;
   });
   return modWords.join(' ');
};



let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

// PROBLEM 17 XOR SELECT

/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.

Examples:


// let xorSelect = function(array, cb1, cb2) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         let el = array[i];
//        if (cb1(el) && (!cb2(el)) || (cb2(el) && (!cb1(el)))) {
//             newArray.push(el);
//         }
//     }
//     return newArray;
// };

const xorSelect = (array, cb1, cb2) => {
    return array.filter(el => (cb1(el) || cb2(el)) && !(cb1(el) && cb2(el)));
};

let isEven = function(n) {
    return n % 2 === 0;
  };

  let isPositive = function(n) {
    return n > 0;
  };

  console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
  // [ -2, 1, 3 ]


  let longString = function(s) {
    return s.length > 4;
  };

  let startsA = function(s) {
    return s[0] === "a";
  };

  console.log(
    xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
  );
  // [ 'art', 'app', 'buttery' ]
*******************************************************************************/

// PROBLEM 18 ONE

/*******************************************************************************
Write a function `one` that accepts an array and a callback as arguments. The
function should call the callback for each element of the array, passing in the
element and its index. The function should return a boolean indicating whether
or not exactly one element of the array results in true when passed into the callback.

Examples:


// let one = function(array, cb) {
//     let oneTrueArray = [];
//     for (let i = 0; i < array.length; i++) {
//         let el = array[i];
//         if (cb(el, i)) {
//             oneTrueArray.push(el);
//         }
//     }
//     if (oneTrueArray.length === 1) {
//         return true;
//     }
//     return false;
// };

const one = (array, cb) => {
    const oneTrue = array.filter(cb);
    return oneTrue.length === 1;
};

let result1 = one(['x', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result1);   // false

let result2 = one(['x', 'a', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result2);   // true

let result3 = one(['x', 'a', 'y', 'a', 'z'], function(el) {
    return el === 'a';
});
console.log(result3);   // false

let result4 = one(['apple', 'dog'], function(el) {
    return el.length > 3;
});
console.log(result4);   // true

let result5 = one(['apple', 'dog', 'pear'], function(el) {
    return el.length > 3;
});
console.log(result5);   // false

let result6 = one(['apple', 'dog', 'food', 'cat'], function(el, idx) {
    return el.length === idx;
});
console.log(result6);   // true
*******************************************************************************/

// PROBLEM 19 GREATER CALLBACK

/*******************************************************************************
Write a function `greaterCallbackValue` that accepts a value and two callbacks
as arguments. The function should pass the value to both callbacks and return the
result of the callback that is greater.

Examples:

// let greaterCallbackValue = function(value, cb1, cb2) {
//     let valueCb = [];
//     valueCb.push(cb1(value), cb2(value));
//     if (valueCb[0] < valueCb[1]) {
//         return valueCb[1];
//     }
//     return valueCb[0];
// };

let greaterCallbackValue = (value, cb1, cb2) => {
    let valueCb = [cb1(value), cb2(value)];
    return Math.max( ...valueCb);
};

let doubler = function (n) {
    return 2 * n;
}

let squarer = function (n) {
    return n * n;
}

console.log(greaterCallbackValue(5, doubler, squarer));     // 25
console.log(greaterCallbackValue(1, doubler, squarer));     // 2
console.log(greaterCallbackValue(9, Math.sqrt, doubler));   // 18
*******************************************************************************/

// PROBLEM 20 NONE

/*******************************************************************************
Write a function `none` that accepts an array and a callback as arguments.
The function should call the callback for each element of the array, passing in
the element. The function should return true if all
elements of the array result to false when passed into the callback. Otherwise,
the method should return false.

Examples:


// let none = function(array, cb) {
//     for (let i = 0; i < array.length; i++) {
//         let el = array[i];
//         if (cb(el)) {
//             return false;
//         }
//     };
//     return true;
// };

let none = (array, cb) => {
    return array.every(el => !cb(el));
};

let result1 = none(['ruby', 'topaz', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result1);   // true

let result2 = none(['ruby', 'topaz', 'sapphire', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result2);   // false

let result3 = none([4, 5, 7, 1], function(n) {
    return n < 0;
});
console.log(result3);   // true

let result4 = none([4, -5, 7, -1], function(n) {
    return n < 0;
});
console.log(result4);   // false
*******************************************************************************/

// PROBLEM 21 AT MOST

/*******************************************************************************
Write a function `atMost` that accepts an array, a max number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
at most (fewer than or equal to) `max` elements of the array that result in true
when passed into the callback.

Examples:

// let atMost = function(array, maxN, cb) {
//     let trueCount = 0;
//     for (let i = 0; i < array.length; i++) {
//         let el = array[i];
//         if (cb(el)) {
//             trueCount++;
//         }
//     };
//     return (trueCount <= maxN);
// };

let atMost = (array, maxN, cb) => {
    let trueCount = array.reduce((count, el) => count + (cb(el) ? 1 : 0), 0);
    return trueCount <= maxN;
};

let isPositive = function (n) {
    return n > 0;
};
let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
};

console.log(atMost([6, -2, 4, -1], 3, isPositive));                             // true
console.log(atMost([6, -2, 4, 1], 3, isPositive));                              // true
console.log(atMost([6, 2, 4, 1], 3, isPositive));                               // false
console.log(atMost(['boat', 'cat', 'car'], 1, startsWithA));                    // true
console.log(atMost(['boat', 'cat', 'car', 'academy'], 1, startsWithA));         // true
console.log(atMost(['boat', 'arc', 'cat', 'car', 'academy'], 1, startsWithA));  // false
*******************************************************************************/

// PROBLEM 22 FIRST INDEX

/*******************************************************************************
Write a function `firstIndex` that accepts an array and a callback as arguments.
The function should return the index of the first element of the array that
results in true when passed into the callback. If no elements of the array
result in true, then the function should return -1.

Examples:


// let firstIndex = function(array, cb) {
//     for (let i = 0; i < array.length; i++) {
//         let el = array[i];
//         if (cb(el)) {
//             return i;
//         }
//     }
//     return -1;
// };

let firstIndex = (array, cb) => {
    return array.findIndex(cb);
};

let result1 = firstIndex([3, 7, 8, 10], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 2

let result2 = firstIndex(['dog', 'cat', 'tree'], function (s) {
    return s.length === 3;
});
console.log(result2); // 0

let result3 = firstIndex(['canine', 'feline', 'tree'], function (s) {
    return s.length === 3;
});
console.log(result3); // -1
*******************************************************************************/

// PROBLEM 23 ALTERNATING MAP

/*******************************************************************************
Write a function `alternatingMap` that accepts an array and two callbacks as
arguments. The function should return a new array containing the results of passing
the original elements into the callbacks in an alternating fashion.

In other words,
    - the first element should be passed to callback 1
    - the second element should be passed to callback 2
    - the third element should be passed to callback 1
    - the fourth element should be passed to callback 2
    - ... and so on

Examples:

// let alternatingMap = function(array, cb1, cb2) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         let el = array[i];
//         if (i % 2 === 0) {
//             newArray.push(cb1(el));
//         } else {
//             newArray.push(cb2(el));
//         }
//     };
//     return newArray;
// };

let alternatingMap = (array, cb1, cb2) => {
    return array.map((el, i) => (i % 2 === 0) ? cb1(el) : cb2(el));
};

let triple = function (n) {
    return 3 * n;
};

let half = function (n) {
    return n / 2;
};
console.log(alternatingMap([7, 3, 2, 9, 8], triple, half));
// [ 21, 1.5, 6, 4.5, 24 ]


let yell = function (s) {
    return s.toUpperCase() + '!';
};

let whisper = function (s) {
    return '..' + s.toLowerCase() + '..';
};
console.log(alternatingMap(['hEy', 'EVERYone', 'whats', 'uP??'], yell, whisper));
// [ 'HEY!', '..everyone..', 'WHATS!', '..up??..' ]
*******************************************************************************/

// PROBLEM 24 MY SIMPLE REDUCE

/*******************************************************************************
Write a function `mySimpleReduce` that accepts an array and a callback as arguments.
The function should mimic the behavior of the built in Array#reduce, utilizing the
first element of the array as the default accumulator.

In other words, the function should begin with the first element of the array as
the accumulator and call the callback for each of the remaining elements in the array,
passing in the current accumulator and current element into the callback. Upon calling the callback,
the accumulator should be set to the result of the callback.

Examples:

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would refactor this problem to take in an
  optional initial accumulator


let mySimpleReduce = function(array, cb) {                  // for code review,
    let accum = array[0];                                   // remove this statement
    for (let i = 1; i < array.length; i++) {
        let el = array[i];
        accum = cb(accum, el);
    }                                                       // add initaializer as array[0]
    return accum;
};

// let mySimpleReduce = (array, cb) => {
//     return array.reduce(cb);
// };

let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
    return sum + el;
});
console.log(result1); // 14

let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
    return product * el;
});
console.log(result2); // 48

let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(result3); // 8
*******************************************************************************/
