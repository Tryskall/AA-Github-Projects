/***********************************************************************
We've done most of the work for you below, but something's not quite
right. Refactor the problem below to avoid a stack overflow and save
the day!

When fixed, this function should behave similarly to JavaScript's '.map()'
function.

Examples:

doForAll([], (x) => x * 2); // => []
doForAll([1, 2, 3], (x) => x + 1); // => [2, 3, 4]
doForAll(["a", "b", "c"]), (x) => x.toUpperCase()); // => ["A", "B", "C"]
***********************************************************************/

function doForAll(arr, action) {                  // add a base case to check for empty array
  if (arr.length === 0) {                         // if true, return an empty array []
    return [];
  }
  const result = [action(arr[0])];                // split the results into 2 parts applying the action function to the 1rst
  const rest = doForAll(arr.slice(1), action);    // -- element of the array and the result of applying doForAll recursively
                                                  // --- to the rest of the array
  return result.concat(rest);                     // return the combined parts as the final result
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = doForAll;
