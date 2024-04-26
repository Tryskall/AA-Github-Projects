function averageOfTwo(num1, num2) {
    var addemAndDividem = (num1 + num2) / 2;
    console.log(addemAndDividem);
    return addemAndDividem;
    /* Returns the average of two numbers, num1 and num2. */
    // Your code here
};

function divideByThree(num) {
    var aThird = num /3;
    console.log(aThird);
    return aThird;
    /* Returns the passed in number argument divided by three. */
    // Your code here
};

function averageOfFour(num1, num2, num3, num4) {
    var addemAndDividem = (num1 + num2 + num3 + num4) /4;
    console.log(addemAndDividem);
    return addemAndDividem;
    /* Takes in four numbers. The function should return the average of all of
    the numbers. */
    // Your code here
};

function doubler(nums) {
    for (let i = 0; i < nums.length; i++) {
        var twice = nums[i] * 2;
        console.log(twice);
        }
      return twice;
    /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
    // Your code here
};

function combineArrays(arr1, arr2) {
    const mixed = arr1.concat(arr2);
    console.log(mixed);
    return mixed;
    /* Takes in two arrays of numbers and returns the two arrays combined into
    a single array. **Hint**: Use the `Array.concat` method but be aware that
    calling this method won't permanently change, also known as **mutate**,
    either array. */
    // Your code here
};

function wordWithinArray(word, arr) {
        for(let i = 0; i < array.length; i++) {
          if (array[i] == word);
          console.log(true);
          return true;
        } {
          console.log(false);
          return false;
        }
    /* Takes in both a word and an array of words as arguments and returns a
    boolean that returns true if that string is located inside of the array, or
    false if it does not. Use `Array.indexOf`. */
    // Your code here
};

function echo(str) {
    var up = str.toUpperCase() + "..." + str + "..." + str.toLowerCase();
        console.log(up);
        return up;
    /* Takes in a string and returns that string "echo-ized". E.g.
    echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
    echo("hey"); // => returns "HEY ... hey ... hey"
    echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */
    // Your code here
};

function fizzBuzz(max) {
    let arr = [];
    for (i = 0; i < max; i++) {
      if (i % 3 == 0 ^ i % 5 == 0){
        arr.push(i);
    }
      console.log(arr);
      return arr;
    /* Takes a number, max and returns an array that contains every number from
    0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */
    // Your code here
};

function hello(name) {
    var addHello = "Hello, " + name + "!";
    console.log(addHello);
    return addHello;
    /* Takes in a string name and returns a string saying "Hello, " to that name. */
    // Your code here
};

function goodbye(name) {
    var addGoodbye = "Bye, " + name + "!";
    console.log(addGoodbye);
    return addGoodbye;
    /* Takes in a string name and returns a string saying "Bye, " to that name. */
    // Your code here
};

function isFive(num) {
    if (num == 5) {
        console.log(true);
        return true;
    } {
        console.log(false);
        return false;
    }
    /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
    // Your code here
};

function isOdd(num) {
    if (num %2 != 0){
        console.log(true);
        return true
    } {
        console.log(false);
        return false;
    }
    /* Takes in a number and returns `true` if the number is odd and returns
    `false` otherwise. Try writing this with and without `if` statements */
    // Your code here
};

function isSubString(searchString, subString) {
    var subLower = subString.toLowerCase;
    var searchLower = searchString.toLowerCase;
    var searchArr = [searchLower];
    console.log(searchArr.includes(subLower));
    /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */
    // Your code here
};

function aCounter(word) {

    /* Takes in a word and returns the number of a's within that word. Counts
    both lowercase (a) and uppercase (A). Your job is to translate the following
    function to use a `for` loop instead of the `while` loop it is currently
    using. */

    /*
    let index = 0;
    let count = 0;
    while (index < word.length) {
        let char = word[index];
        if (char === "a" || char === "A") {
        count += 1;
        }
        index++;
    }
    return count;
    */
    // Your code here
    let count = 0;
    for (i = 0; i < word.length; i++) {
        let char = word[i];
        if (char === "a" || char === "A") {
        count += 1;
        }
    }
    console.log(count);
    return count;
};

module.exports = {
    divideByThree,
    averageOfTwo,
    averageOfFour,
    doubler,
    combineArrays,
    wordWithinArray,
    echo,
    fizzBuzz,
    hello,
    goodbye,
    isFive,
    isOdd,
    isSubString,
    aCounter
}
