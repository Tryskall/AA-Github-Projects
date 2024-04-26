// File: stacks.js for abstract data types

class Stack {
    constructor() {
        this.data = [];
    }
    push(value) {
        this.data.push(value);
    }
    pop() {
        return this.data.pop();
    }
    size() {
        return this.data.length;
    }
}

module.export = Stack;

const stackOfPlates = new Stack();

stackOfPlates.push('plate 1');
console.log(stackOfPlates);
stackOfPlates.push('plate 2');
console.log(stackOfPlates);
stackOfPlates.push('plate 3');
console.log(stackOfPlates);

console.log(stackOfPlates.pop());
console.log(stackOfPlates);
console.log(stackOfPlates.pop());
console.log(stackOfPlates);

stackOfPlates.push('plate 4');
console.log(stackOfPlates);

console.log(stackOfPlates.pop());
console.log(stackOfPlates);
console.log(stackOfPlates.pop());
console.log(stackOfPlates);

function clickLink(newURL) {
    browserHistory.push(currentURL);
    currentURL = newURL;
    load(currentURL);
}
function clickBack() {
    currentURL = browserHistory.pop();
    load(currentURL);
}

function factorial(n) {
    // console.log(n);
    if (n <= 1) return 1;
    return n * factorial(n-1);
}
console.log(factorial(500));

function factorialIterative(n) {
    let total = 1;
    for (let i = n; i > 0; i--) {
        total *= n;
    }
    return total;
}

console.log(factorialIterative(1000000));
