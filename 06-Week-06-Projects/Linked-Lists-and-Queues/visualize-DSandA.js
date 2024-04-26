// File: visualize-DSandA.js for understanding Data Structure and Algorithms

function insertionSort(array) {
    for (i = 1; i <= 3; i++) {
        e = array[i]; j = i;
        while (j > 0) {
            if (array[j-1] > e) {
            array[j] = array[j-1];
            } else {
                break;
            }
        j--;
        }
        array[j] = e;
    }
}

console.log(insertionSort([27, 12, 24, 25, 8, 11]));
