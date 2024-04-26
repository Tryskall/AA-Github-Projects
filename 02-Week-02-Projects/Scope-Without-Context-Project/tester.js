
// PROBLEM 00 ARROW ADDFIVE

/***********************************************************************
We've just covered how to write functions using arrow function syntax.
Let's give some old functions a new flair by rewriting them using fat arrow syntax.

Write a function `addFive` that accepts a number and will return that number
plus 5. Write this function on a single line, and utilize a fat arrow function's
ability to implicitly return by leaving out your own return statement.

Examples:
let result1 = addFive(0); // returns 5
let result2 = addFive(10); // returns 15
let result3 = addFive(37); // returns 42

let addFive = (num) => num + 5;
console.log(addFive(7));
***********************************************************************/

// PROBLEM 01 ARROW FULL NAME

/***********************************************************************
Write a function using fat arrow syntax, `arrowGetFullName(person)` that takes in
a person object and returns a string containing their full name.

Assign the below function to a variable using the const keyword. Using the const
keyword will allow any value assigned to that variable protection from being
reassigned within that scope.

Examples:

let arrowGetFullName = (person) => {
    let fullName = `${person.firstName} ${person.lastName}`;
    console.log(fullName);
    return fullName;
};

let p1 = {firstName: 'John', lastName: 'Doe'};
arrowGetFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
arrowGetFullName(p2); // => 'Charlie Brown'

***********************************************************************/

// PROBLEM 02 ARROW MY MAP

/***********************************************************************
Write a function using fat arrow syntax named `arrowMyMap` that accepts an array
and a callback as arguments. The function will return an array of new elements
obtained by calling the callback on each element of the array, passing in the
element. Assign the below function to a variable using the const keyword.

Do not use the built in Array.map - use Array.forEach for iteration.


Examples:

const arrowMyMap = (array, cb) => array.map(cb);            // declare function as variable to equal (array, cb)
                                                            // -- fatArrow to equal array.map(callback function)

const arrowMyMap = (array, cb) => {
    const newArray = [];
    array.forEach(item => {
        newArray.push(cb(item));
    });
    return newArray;
};

  let result1 = arrowMyMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

const yell = el => el.toUpperCase() + '!'

let result2 = arrowMyMap(['run', 'Forrest'], yell);
console.log(result2);   // [ 'RUN!', 'FORREST!' ]

// let myMap = function() {
//     let newArray = [];

//     for (let i = 0; i < arr.length; i++) {
//     newArray.push(cb(arr[i]));
// };
// return newArray;
// };
***********************************************************************/

// PROBLEM 03 ARROW REST SUM

/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:

const arrowRestSum = (...otherNums) => otherNums.reduce((sum, num) => sum + num, 0);


console.log(arrowRestSum(3,5,6)); // => 14
console.log(arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
console.log(arrowRestSum(0)); // => 0

***********************************************************************/

// PROBLEM 04 ARROW AVG VALUE

/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

// const arrowAvgValue = array => {
//     const sum = array.reduce((acc, num) => acc + num, 0);
//     const avg = sum / array.length;
//     console.log(avg);
//     return avg;
// };

const arrowAvgValue = array => array.reduce((acc, num) => acc + num, 0) / array.length;

console.log(arrowAvgValue([10, 20])); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667

***********************************************************************/

// PROBLEM 05 ARROW MIRROR ARRAY

/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

// const mirrorArray = array => {
//     array.concat(array.reverse());
// };
const mirrorArray = array => [...array, ...array.slice().reverse()];

In this function, I'm using the spread operator (...)
to concatenate the original array with a reversed copy of itself using the reverse() method.
This creates a new array where the elements are mirrored.

console.log(mirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
console.log(mirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

***********************************************************************/

// PROBLEM 06 CLOSURE SANDWICHES

/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:
Another Sandwich:

// const sandwichMaker = () => { let ingredients = ['tomato']; return ingredient => (ingredient && ingredients.push(ingredient)), ingredients.join('One sandwich with' +  'and ') };

function sandwichMaker() {
    let ingredients = ['One sandwich with tomato'];
    return  ingredient => {
        if (ingredient) {
            ingredients.push(ingredient);
        }
        console.log(ingredients.join(' and '))
        return ingredients.join(' and ');
    };
  };

  let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"

    let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"

***********************************************************************/

// PROBLEM 07 SET TIME OUT

/***********************************************************************
Write a function named `funcTimer(time, func)` that will allow you to hand
in a function and a number representing milliseconds. The `funcTimer` should use
the global.setTimeout function to invoke the passed in function in `time` amount
of seconds.

There are no specs for this problem - try it in the console yourself to
test your answer!

Examples:

const funcTimer = (time, func) => {setTimeout(func, time); };

  function partyFunc () {
  console.log("Party time!")
}

funcTimer(5000, partyFunc); // in 5 seconds prints: "Party time!"

***********************************************************************/

// PROBLEM O8 HIDDEN COUNTER

/***********************************************************************
Write a function named `hiddenCounter()`. This function will do two things - first
it will define a count variable, then it will return a function.
When invoked the function returned by hiddenCounter will increment the counter by 1.

Look below to see how this function is invoked:


// const hiddenCounter = () => {
//    let count = 0;

//    return () => {
//         count++;
//         console.log(count);
//         return count;
//    };
// };

const hiddenCounter = () => { let count = 0; return () => (count++, console.log(count), count); };

let hidden1 = hiddenCounter(); //returns a function
hidden1(); // returns 1
hidden1(); // returns 2

let hidden2 = hiddenCounter(); // returns a function
hidden2(); // returns 1

***********************************************************************/

//  PROBLEM 09 INTERRUPTER

/***********************************************************************
Write a function named interrupter that accepts a single parameter `interruptingWord`:
  `interrupter(interruptingWord)`
The interrupter function should return a function.
When the function returned by interrupter is called with a sentence,
the sentence will be returned with the original interruptingWord inserted
between each word in the sentence.

Look below to see how this function is invoked:


const interrupter = (interruptingWord) => {
   return (sentence) =>  {
    return sentence.split(' ')
    .join(` ${interruptingWord} `);
    };
};

let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


// Invoking the interrupter function again:
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"

***********************************************************************/

// PROBLEM 10 COUNT DOWN TIMER

/***********************************************************************
Write a function named: countDownTimer(n). This function will represent a count
down of days till the New Year. The countDownTimer function will
take in a number argument (n) the first time it is called and if that
number is greater than 0 the countDownTimer will return a function.

The function returned by countDownTimer can then be invoked n times before it
returns a string of "Happy New Year!". Look closely at how this function is
invoked below:

Example 1:

// const countDownTimer = (n) => {
//     if (n <= 0) {
//         return "Happy New Year!";
//     }
//     return countdown = () => {
//         if (n > 0) {
//             n--;
//             return countdown;
//         } else {
//             return "Happy New Year!";
//         }
//     };
//     return countdown;
// };

function countDownTimer(num) {
    let count = num;
    if (count === 0) {
      return "Happy New Year!";
    }
    return () => {
      count--;
      if (count <= 0) {
        return "Happy New Year"
      }
    };
  };

  console.log(countDownTimer(0)); // prints "Happy New Year!"

// Example 2:
  let oneDay = countDownTimer(1); // returns a function
  console.log(oneDay()); // prints "Happy New Year!"

// Example 3:
  let twoDays = countDownTimer(2); // returns a function
  console.log(twoDays()); // returns a function
  console.log(twoDays()); // prints "Happy New Year!"

// Example 4:
  let threeDays = countDownTimer(3); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // prints "Happy New Year!"
***********************************************************************/

// PROBLEM 11 LAZY ADDER

/***********************************************************************
Write a function named: lazyAdder(firstNum). The lazyAdder function will
accept a number and return a function. When the function returned by lazyAdder
is invoked it will again accept a number, (secondNum), and then return a function.
When the last mentioned function is invoked with a number, (thirdNum), it will
FINALLY return a number. See below for examples!

Example 1

const lazyAdder = (firstNum) => {
    return (secondNum) => {
        return (thirdNum) => {
            return firstNum + secondNum + thirdNum;
        };
    };
;}

let firstAdd = lazyAdder(1);
let secondAdd = firstAdd(2);
let sum = secondAdd(3);
console.log(sum); // prints 6

// Example 2:
let func1 = lazyAdder(10);
let func2 = func1(20);
let total = func2(3);
console.log(total); // prints 33

// AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
// - Explain, but don't code, how you would turn your solution into a one-line
//   fat-arrow function

:***********************************************************************/

// PROBLEM 12 VOLUME

/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.

Example 1:

const recVolume = (height) => {
    let sides = [height];

    if (sides.length <= 3) {
    return (measurement) => {
        sides.push(measurement);
        [h, w, l] = sides;
        return h * l * w;
    };
  };
  };

let table1 = recVolume(5); // returns a function
table1(4); // returns a function
console.log(table1(3)); // prints 60
console.log(table1(145)); // STILL prints 60

// Example 2:
let table2 = recVolume(3); // returns a function
table2(2); // returns a function
console.log(table2(1)); // prints 6
console.log(table2(75)); // STILL prints 6

***********************************************************************/

// PROBLEM 13 DYNAMIC DIVIDE

/***********************************************************************
Write a function named `dynamicDivide(divisor)`. The dynamicDivide function will
return a new function that when invoked will divide the argument number by the
divisor.


Look below to see how this function is invoked:


// function dynamicDivide(divisor) {
//     return (arg) => {
//         return arg / divisor;
//     };
//   };

const dynamicDivide = divisor => arg => arg / divisor;

const halfer = dynamicDivide(2); // returns a function
console.log(halfer(20)); // returns 10)

const divideByThree = dynamicDivide(3);
console.log(divideByThree(30)); // returns 10

const  divideByFive = dynamicDivide(5);
console.log(divideByFive(50)); // returns 10
***********************************************************************/

// PROBLEM 14 SMOOTHIE MACHANIC

/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of parameters
and returns a function.

The returned function will also accept any number of parameters and will
return a string including all of the parameters of smoothieMachine as well
as the returned function's parameters. Look at the examples for a guide of
how your return should be formatted!

See below for examples:


const smoothieMachine = (...ingredients) => {
    let addOn = [];
    return (...ingredients) => {
        addOn.push(...ingredients);
        return "I'm having a smoothie with " + addOn.join(' and ');
    }
  };


let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

// PROBLEM 15 CLOSURE DYNAMIC MULTIPLY

/***********************************************************************
Let's practice writing closures by creating a method called `dynamicMultiply(num)`.
The dynamicMultiply function will return a new function that will allow us to
create new separate custom multiply functions.


Look below to see how this function is invoked:


// function dynamicMultiply(num) {
//     return (digit) => {
//         console.log(num * digit);
//         return num * digit;
//     };
// };

const dynamicMultiply = num => digit => (console.log(num * digit), num * digit);

const doubler = dynamicMultiply(2); // returns a functions
doubler(5); // returns 10

const tripler = dynamicMultiply(3);
tripler(5); // returns 15

const multiplyByFive = dynamicMultiply(5);
multiplyByFive(5); // returns 25
***********************************************************************/

// PROBLEM 16 COUPON

/***********************************************************************
Write a function named: coupon(discount). The coupon function will intake a
number to apply as a discount, and will return a function that accepts an array
of prices. Every call to the function returned by coupon will return the array
of prices with the discount applied.



// function coupon(discount) {
//     let discountArray = [];
//     return (array) => {
//     for (let i = 0; i < array.length; i++) {
//         let el = array[i];
//         let discPrice = el - (el * discount);
//         discountArray.push(discPrice);
//         };
//         return discountArray;
//     };
// };

const coupon = discount => array =>
    (discountArray =>
    (array.forEach(el =>
        discountArray.push(el - el * discount)),
        discountArray))([]);

  let tenPercent = coupon(0.1);
console.log(tenPercent([10, 20, 30])); // [ 9, 18, 27 ]

// Example 2:
let twentyPercent = coupon(0.2);
console.log(twentyPercent([10, 20, 30])); // [ 8, 16, 24 ]
Example 1:***********************************************************************/

// PROBLEM 17 ARROW REVERSE

/***********************************************************************
Write a function reverseStr(str) that accepts a string and returns that string
reversed.

Write this function using a fat arrow function!

Examples:

// const reverseStr = (str) => {
//     let revArray = [];
//     chars = str.split('');
//     revArray.push(chars.reverse());
//     // console.log(chars.join(' '));
//     return chars.join(' ');
// };

const reverseStr = str => str.split('').reverse().join('');

let result1 = console.log(reverseStr("hello")); // returns "olleh"
let result2 = console.log(reverseStr("garden")); // returns "nedrag"
let result3 = console.log(reverseStr("potato")); // returns "otatop"
***********************************************************************/

// PROBLEM 18 PLANNED INTERSECTION

/******************************************************************************
Write a function named plannedIntersect(firstArr) that takes in an array and
returns a function. When the function returned by plannedIntersect is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.


Example 1:

// const plannedIntersect = (firstArr) => {
//     let commonArray = [];
//     return (secArray) => {
//         for (let i = 0; i < firstArr.length; i++) {
//             let fEl = firstArr[i];
//             for (let j = 0; j < secArray.length; j++) {
//                 let sEl = secArray[j];
//                 if (fEl === sEl) {
//                     commonArray.push(fEl);
//                 }
//             }
//         }
//         console.log(commonArray);
//         return commonArray;
//     };
//   };

const plannedIntersect = firstArr => secArray => {
    const commonArray = firstArr.filter(fEl => secArray.includes(fEl));
    console.log(commonArray);
    return commonArray;
};

  let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

// Example 2:
let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]
*******************************************************************************/

// PROBLEM 19 COIN COLLECTOR

/***********************************************************************
Write a function named: coinCollector(numCoins). The coinCollector function will
accept a number of coins (greater that 0) to collect when it is first invoked
and will return a function. The function returned by coinCollector can then be
invoked numCoins number of times passing in one coin (represented by an int) to
be added to the collection.

Once the function returned by coinCollector has the numCoins required it will
return an array of the coins it has gathered.

Example 1:

// const coinCollector = (numCoins) => {
//     let collection = [];
//     return (coin) => {
//         collection.push(coin);
//         return collection;
//     };
//   };

// const coinCollector = () => {
//     const collection = [];
//     return coin => (collection.push(coin), collection);
// };

const coinCollector = () => (collection => coin => (collection.push(coin), collection))([]);

  let oneCoin = coinCollector(1); // returns a function
  console.log(oneCoin(10)); // prints [10]

// Example 2:
  let twoCoins = coinCollector(2); // returns a function
  twoCoins(25); // returns a function
  console.log(twoCoins(10)); // prints [25, 10]

// Example 3:
  let threeCoins = coinCollector(3); // returns a function
  threeCoins(25); // returns a function
  threeCoins(5); // returns a function
  console.log(threeCoins(10)); // prints [ 25, 5, 10 ]
***********************************************************************/

// PROBLEM 20 CURRIED SUM

/***********************************************************************

Currying is the process of decomposing a function that takes multiple arguments
into one that takes single arguments successively until it has the sufficient
number of arguments to run.This technique is named after the
logician Haskell Curry(the functional programming language Haskell is, too).

Write a `curriedSum` function that takes an integer(how many numbers to sum)
and returns a function that can be successively called with single arguments
until it finally returns a sum.

Here is a breakdown of how curriedSum(numArgs) should work:
    - Define an empty array, `numbers`.
    - Define a function, `_curriedSum` that:
        - Closes over `numArgs` and `numbers`.
        - Takes a single number as an argument.
        - Appends this to the `numbers` array each time.
        - If `numbers.length === numArgs`, it sums the numbers in the array and
        returns the result.
        - Else, it returns itself.
    - Returns `_curriedSum`.

If you're confused, think of it this way: `_curriedSum` keeps collecting
arguments and returning itself until it has enough arguments, at which point it
actually does the required work of summing.


Example:
// 1***********************************************************************/

// const curriedSum = (numArgs) => {
//     const numbers = [];

//     const _curriedSum = (number) => {
//         numbers.push(number);

//         if (numbers.length === numArgs) {
//             const accum = numbers.reduce((accum, el) => accum + el, 0);
//             return accum;
//         } else {
//         return _curriedSum;
//         }
//     };
//     console.log(_curriedSum);
//     return _curriedSum;
//   };

function curriedSum(numArgs) {
    const numbers = [];
    return _curriedSum = number => {
      numbers.push(number);
      if (numbers.length === numArgs) {
        const sum = numbers.reduce((sum, next) => sum + next);
        console.log(sum);
        return sum;
      }
    return _curriedSum;
    }
  }

const sum = curriedSum(4); // returns a function
sum(5) // returns a function
sum(20) // returns a function
sum(30) // returns a function
sum(20); // => returns 75

// 2
// this function can also be invoked like this:
const sum2 = curriedSum(3)(2)(1)(7); // => returns 10

// AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
// - Come up with at least two situations (one per person) on when currying would
//   be useful
