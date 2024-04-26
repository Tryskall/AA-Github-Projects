// File array-practice.js for Array Practice Project

// Identify the time complexity of each of these functions with a 1 sentence justification for your answer. Assume arr is an array of length n

// arr.push()
// timeComplexity = O(1)
// spaceComplexity = O(1)
// justification = constant growth doesnt depend on array size, constant growth doesnt require additional space

// arr.pop()
// timeComplexity = O(1)
// spaceComplexity = O(1)
// justification = constant growth doesnt depend on array size, constant growth doesnt require additional space

// arr.shift()
// timeComplexity = O(n)
// spaceComplexity = O(1)
// justification = linear growth depends on array size, constant growth doesnt require additional space

// arr.unshift()
// timeComplexity = O(n)
// spaceComplexity = O(n)
// justification = linear growth depends on array size, linear growth requires additional space is proportional

// arr.splice()
// timeComplexity = O(n)
// spaceComplexity =O(n)
// justification = linear growth depends on array size, linear growth may require additional space or need to remove space

// arr.slice()
// timeComplexity = O(n) or O(n^2) depending on the number of indice in the slice
// spaceComplexity = O(n) or O(n^2) depending on the number of indice in the slice
// justification = linear growth creates a new array, linear growth creates new array to store selection

// arr.indexOf()
// timeComplexity = O(n)
// spaceComplexity = O(1)
// justification = linear growth depends on size of array, constant growth doesnt require additional space

// arr.map()
// timeComplexity = O(n)
// spaceComplexity = O(1)
// justification = linear growth depends on size of array, linear growth creates new array to store selection

// arr.filter()
// timeComplexity = O(n)
// spaceComplexity = O(n) or O(n^2)
// justification = linear growth depends on size of array, linear growth depends on number of elements and creates new array

// arr.reduce()
// timeComplexity = O(n)
// spaceComplexity = O(1)
// justification = linear growth depends on size of array, constant growth doesnt create new array but accumulates to a single variable
// arr.reverse()

// [...arr]
// timeComplexity = O(n)
// spaceComplexity = O(n)
// justification = linear growth depends on size of array, linear new array has same number of elements and requires proportional space
