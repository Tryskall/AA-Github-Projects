/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''
*/


let longestWord = function(sentence) {
    if (sentence.length === 0) {
        return '';
    }
    let sentSplit = sentence.split(' ');
    let longWord = sentence[0];
    let findLong = sentSplit.forEach((element) => {
        if (element.length > longWord.length) {
            longWord = element;
        }
    });
    return longWord;
}

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
