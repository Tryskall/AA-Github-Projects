// File: testing-overallocation.js

const addToBack = n => {
    const arr = [];
    for ( let i = 0; i < n; i++) {
        arr.push(i+1);
    }
    return arr;
}

const addToFrontPreallocation = n => {
    const arr = new Array(n);
    for ( let i = 0; i < n; i++) {
        arr[i] = i + 1;
    }
    return arr;
}

const addToFront = n => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.unshift(n - i);
    }
    return arr;
}

n = 1000000
startTimeBack = Date.now();
arr = addToBack(n);
endTimeBack = Date.now();

startTimePre = Date.now();
arr = addToFrontPreallocation(n);
endTimePre = Date.now();

console.log('');
console.log("addToBack(" + n + ") = " + (endTimeBack - startTimeBack) + "ms");
console.log('');
console.log("addToFrontPreallocation(" + n + ") = " + (endTimePre - startTimePre) + "ms");

n = 100000;
startTimeBack = Date.now();
arr = addToBack(n);
endTimeBack = Date.now();

startTimePre = Date.now();
arr = addToFront(n);
endTimePre = Date.now();

console.log('');
console.log("addToBack(" + n + ") = " + (endTimeBack - startTimeBack) + "ms");
console.log('');
console.log("addToFront(" + n + ") = " + (endTimePre - startTimePre) + "ms");
