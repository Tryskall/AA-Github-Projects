// File: pancakeSorting.js

function pancakeSort(arr) {
    const result = [];
    const flip = (k) => {
        let i = 0; j = k - 1;
        while ( i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    };
    for (let target = arr.length; target > 0; target--) {
        const index = arr.indexOf(target);
        if (index !== target - 1) {
            flip(index + 1);
            result.push(index + 1);

            flip(target);
            result.push(target);
        }
    }
    return result;
}

// Example usage:
console.clear();
console.log(pancakeSort([3, 2, 4, 1])); // Output: [4, 2, 4, 3]
console.log(pancakeSort([1, 2, 3]));    // Output: []
