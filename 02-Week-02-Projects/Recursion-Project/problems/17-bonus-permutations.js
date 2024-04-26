/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

const permutations = (array) => {
  if (array.length === 1) {
      return [array];
  }
  const result = [];
  const generatePermutations = ( currentPermutation, remainingElements) => {
      if (remainingElements.length === 0) {
          result.push(currentPermutation);
          return;
      }
      for (let i = 0; i < remainingElements.length; i++) {
          const updatedPermutation = currentPermutation.concat([remainingElements[i]]);
          const updatedRemainingElements = remainingElements.slice(0, i).concat(remainingElements.slice(i + 1));
          generatePermutations(updatedPermutation, updatedRemainingElements);
      }
  };
  generatePermutations([], array);
  return result;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
