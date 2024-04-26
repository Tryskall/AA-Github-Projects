// TRY USING THIS EQUATION AS AN EXAMPLE FOR EACH PROBLEM TO LEARN HOW TO USE THE ARROW FUNCTION

// const adequateWaterTracker = (calendar) => calendar.every(week => week.filter((day) => day >= 1).length >= 4 );

// declare variable as function to equal calendar,
//  use .every method to iterate through array,
//  -- use .filter to iterate through days of week subArray,
// -- check if each day is nore than 1 and more than 4 days return true,
// --return true.

// PROBLEM 01 KEYS IN OBJECT

// function keysInObject(obj) {
//     let newArray = [];

//     for (let key in obj) {
//       newArray.push(key);
//     };
//     // console.log(newArray);
//     return newArray;
//   };

// function keysInObject(obj) {
//   console.log(Object.keys(obj));
// };

//   let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
//   let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
//   keysInObject(animals); // => ["dog", "cat", "bison"]
//   keysInObject(foods); // => ["apple", "lemon", "mango"]

// PROBLEM 02 VALUES IN OBJECTS

// function valuesInObject(obj) {
//   let newArray = [];

//   for (let value in obj) {
//     newArray.push(obj[value]);
//   };
//   console.log(newArray);
//   return newArray;
// };

// function valuesInObject(obj) {
//  console.log(Object.values(obj));
// return Object.keys(obj);
// };

// let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
// let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
// valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
// valuesInObject(foods); // => ["tart", "sour", "sweet"]

// PROBLEM 03 SET KEY IN OBJECT

// Write a function `setKeyInObject(obj, string, value)` that takes in three
// parameters. The first parameter is an object, the second parameter will be a
// string and the third parameter will be a value. Your job is to return the object
// adding the second parameter as a key using the third parameter as its value.

// function setKeyInObject(obj, string, value) {
// let { param1, object } = obj;
// obj[string] = value;
// console.log(obj);
// return obj;
// };

// let obj = {}
// setKeyInObject(obj, "apple", "yum"); // => {apple: "yum"}

// let obj1 = {str: "hello"}
// setKeyInObject(obj1, "num", 3); // => {str: "hello", num: 3}

// PROBLEM 04 GET FULL NAME

/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.

Examples:
***********************************************************************/
// function getFullName(person) {
//     let fullName = person.firstName + " " + person.lastName;
//     console.log(fullName);
//     return fullName;
//     // let {firstName, lastName} = person;
//     // console.log(firstName, lastName);
//     // return firstName, lastName;
// }

//   let p1 = {firstName: 'John', lastName: 'Doe'};
// getFullName(p1); // => 'John Doe'
// let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
// getFullName(p2); // => 'Charlie Brown'

// PROBLEM 05 DOES KEY EXIST

// Write a function `doesKeyExist(obj, key)` that takes in an object and a
// key and returns true if the key is inside the object and false if the
// key is not inside the object.

// Examples:

// function doesKeyExist(obj, key) {
//     // console.log(obj.hasOwnProperty(key));
//     // return (obj.hasOwnProperty(key));
//     console.log(key in obj);
//     return (key in obj);
// }

// let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
// doesKeyExist(obj1, 'course'); // => true
// doesKeyExist(obj1, 'name'); // => false

// PROBLEM 06 KEY IN OBJEXT ARRAY

// Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of
// objects as the first parameter and a string as the second. The `keyInObjectArray`
// will return `true` if any of the objects contains the `keyString` as a key within them, and
// `false` if not.



// function keyInObjectArray(objArray, keyString) {
//     for (let i = 0; i < objArray.length; i++) {
//         let obj = objArray[i];
//         // console.log(obj);
//         if (keyString in obj) {
//             console.log(keyString + ' ' + true);
//             return true;
//         };
//     };
//     console.log(keyString + ' ' + false);
//     return false;
// };

// let objArray = [
//   { name: "Rupert" },
//   { age: 42 },
//   { planet: "Earth", system: "Milky Way" }
// ];

// keyInObjectArray(objArray, 'planet'); // => true
// keyInObjectArray(objArray, 'age'); // => true
// keyInObjectArray(objArray, 'food'); // => false
// keyInObjectArray(objArray, 'animal'); // => false

// PROBLEM 07 BREAK DOWN OBJ

// Write a function `breakDownObj(obj)` that takes in an object as a parameter
// and returns an array containing:  all the keys from the object **and** all the
// values of the object.

// **Hint**: Use spread syntax to spread out elements into an array!

// function breakDownObj(obj) {
//   let newArray = [];
//   for (let key in obj) {
//     // console.log(key);
//     newArray.push(key)
//   }
//   for (let value in obj) {
//     newArray.push(obj[value]);
//   }
//   console.log(newArray);
//   return newArray;
// };


// let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
// breakDownObj(object1); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

// let object2 = {location: 'NY', borough: 'Brooklyn'};
// breakDownObj(object2); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]

// PROBLEM 08 VALUE PAIR

// Write a function `valuePair(obj1, obj2, key)` that takes in two objects
// and a key (string). The function should return an array containing the
// corresponding values of the objects for the given key.

// Examples:

// function valuePair(obj1, obj2, key) {
//   let valueArray = [];
//   if (key in obj1) {
//     valueArray.push(obj1[key]);
//   }
//   if (key in obj2) {
//     valueArray.push(obj2[key]);
//   };
//   console.log(valueArray);
//   return(valueArray);
// };

// let object1 = {name: 'One', location: 'NY', age: 3};
// let object2 = {name: 'Two', location: 'SF'};
// valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
// valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]

// PROBLEM 09

/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.

Example:
***********************************************************************/
// function appleCounter(appleObj) {             // declare function appleCounter(appleObj)
//   let appleCount = 0;                         // declare variable appleCount to equal 0

// for (let key in appleObj) {                   // iterater through appleObj object
//   key = key.toLowerCase();                    // set key to equal key.toLowerCase()
//     if (key.indexOf('apple') > -1) {          // check if apple in is key using .indexOf
//       console.log(key);                       // if true, console.log(key)
//       appleCount += 1;                        // if true, add 1 to appleCount
//     };
// };
// console.log(appleCount);                      // see if its working with console.log(appleCount)
// return appleCount;                            // return appleCount
// }

// let obj = { banana: "yay!" };
// appleCounter(obj); // => 0

// let obj1 = { crabapple: "yum!" };
// appleCounter(obj1); // => 1

// let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
// appleCounter(obj2); // => 2


// let obj3 = {
//   crabApple: "yum!",
//   honeyApple: "super yum",
//   banana: "yay",
//   bigapple: "NYC"
// };
// appleCounter(obj3); // => 3

// PROBLEM 10 REST SUM

// Write a function named `restSum` that accepts all incoming parameters and sums them.

// **Hint**: Use rest parameter syntax!

// Examples:***********************************************************************/


// function restSum(...otherNums) {
//   let sum = 0;
//  otherNums.forEach(function (arg) {
//   sum += arg;
//  })
//  console.log(sum);
//  return sum;
// };

// restSum(3,5,6); // => 14
// restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
// restSum(0); // => 0

// PROBLEM 11 SPREAD IT OUT

/***********************************************************************
Write a function named `spreadItOut(array1, array2)` that accepts two arrays and
uses *spread operator* syntax to return a single array.



Examples:***********************************************************************/
// spreadItOut([3,5,6], [1,2,3]); // => [3,5,6,1,2,3];
// spreadItOut([], [1,2,3]); // => [1,2,3];
// spreadItOut(["apple", "banana"], [1,2,3]); // => ["apple", "banana", 1, 2, 3];


// function spreadItOut(array1, array2) {
//   let oneArray = [ ...array1, ...array2];
//   console.log(oneArray);
//   return oneArray;
// };

// PROBLEM 12 ARRAY CONVERTER

// Write a function `arrayConverter(array)` that will intake an
// array as an argument and returns an object representing the count of each
// value in the array. **Hint:** don't forget you can check if a key is present
// in an object by using `obj[key] === undefined`.

// Examples:***********************************************************************/

// function arrayConverter(array) {
//   let arrayToObject = {};

//   for (let i = 0; i < array.length; i++) {
//     let current = array[i];
//     if (arrayToObject[current] === undefined) {
//       arrayToObject[current] = 1;
//     } else {
//       arrayToObject[current] += 1;
//     };
//   }
//   // console.log(arrayToObject);
//   return arrayToObject;
// };

// function arrayConverter(array) {
//   const arrayToObject = {};

//   for (const current of array) {
//     arrayToObject[current] = (arrayToObject[current] || 0) + 1;
//   };
//   return arrayToObject;
// };

// let adequateWaterTracker = (array) => array.every(index => (index.filter((current) => current < 1)))
// // const adequateWaterTracker = (calendar) => calendar.every(week => week.filter((day) => day >= 1).length >= 4 );


// console.log(arrayConverter(["apple", "apple"]));
//  // => {apple: 2}
// console.log(arrayConverter(["mango", "pineapple"]));
// // => {mango: 1, pineapple: 1}
// console.log(arrayConverter(["apple", "banana", "potato", "banana"]));
// // => {apple: 1, banana: 2, potato: 1}


// PROBLEM 13 STRING CONVERTER

// Write a function `stringConverter(string)` that will intake a
// string as an argument and returns an object representing the count of each
// character in the string. **Hint:** don't forget you can check if a key is present
// in an object by using `obj[key] === undefined`.

// Examples:***********************************************************************/

// function stringConverter(string) {                                  // declare function stringConvderter
//   const stringToObject = {};                                        // declare constant stringToObject to equal empty object

//   for (const current of string) {                                   // iterate through string
//     stringToObject[current] = (stringToObject[current] || 0) + 1;   // check if current index of string is in stringToObject
//   };                                                                // if false, add to stringToObject & count index +1, if true count index +1
//   return stringToObject;                                            // return results of stringToObject
// }

// console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
// console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
// console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}

// PROBLEM 14 COUNT SCORES

/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:***********************************************************************/

// function countScores(people) {                // declare function countScores(people)
//     let peopleScore = {};                     // declare variable peopleScore to equal empty object

//   people.forEach(person => {                  // iterate through people object
//     const { name, score } = person;           // declare constant to destructure people array to equal name score
//       if (peopleScore[name]) {                // check if name is in peopleScore object
//         peopleScore[name] += score;           // if true, add the score to name.score[value]
//       } else {                                // if false,
//         peopleScore[name] = score;            // add name[value] and score[value]
//       }
//     });

//   return peopleScore;                         // return results of peopleScore object
// };

// let ppl = [{name: "Anthony", score: 10},
//             {name: "Fred", score : 10},
//             {name: "Anthony", score: -8},
//             {name: "Winnie", score: 12}];

// console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

// // Example 2:
// let peeps = [
//   {name: "Anthony", score: 2},
//   {name: "Winnie", score: 2},
//   {name: "Fred", score: 2},
//   {name: "Winnie", score: 2},
//   {name: "Fred", score: 2},
//   {name: "Anthony", score: 2},
//   {name: "Winnie", score: 2}
// ];
// console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
