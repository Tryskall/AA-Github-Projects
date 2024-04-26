// PROBLEM 05 POSTPONE

/***********************************************************************
Write a function, `postpone`, that accepts a callback and a delay in
milliseconds as arguments. `postpone` should return a new function. When
the returned function is called, it should invoke the callback after the
given delay.

Hint: use closures and setTimeout to your advantage

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Examples:

function postpone(cb, delay) {
    let intervals;
    return function () {
        clearInterval(intervals);
        const timer = setTimeout(() => {
           clearInterval(intervals);
           cb();
        }, delay);
        intervals = setInterval(() => {
            if (!timer) {
                clearInterval(intervals);
            }
        }, 10);
    }
}

// const postpone = (cb, delay) => () => setTimeout(cb, delay);

  const sayHello = () => console.log('hi');
const slowHello = postpone(sayHello, 1000);
console.log(slowHello); // [Function]
slowHello(); // prints 'hi' after 1000 ms

const sayGoodbye = () => console.log('bye');
const slowerGoodbye = postpone(sayGoodbye, 1750);
console.log(slowerGoodbye); // [Function]
slowerGoodbye(); // prints 'bye' after 1750 ms
***********************************************************************/

// PROBLEM 06 DYNAMIC INTERVAL COUNT

/***********************************************************************
Write a function, `dynamicIntervalCount`, that accepts a callback, a delay
in milliseconds, and an optional amount as arguments. The function should
set an interval with the given callback and delay. If an amount argument
is passed, the interval should be cleared after the callback has been
called 'amount' number of times. If an amount argument is not passed,
the interval should not be cleared and `dynamicIntervalCount` should instead
return the Timeout object for the interval.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Examples:

function dynamicIntervalCount(cb, delay, amount) {
    let intervals;
    let count = 0;
    const wrapper = () => {
        cb();
        count++;
        if (typeof amount === 'number' && count >= amount) {
            clearInterval(intervals);
        }
    };
    intervals = setInterval(wrapper, delay);
    if (typeof amount === 'number') {
        setTimeout(() => {
            cb();
            clearInterval(intervals);
        }, delay * amount);
        return undefined;
    } else {
        return intervals;
    }
}

  dynamicIntervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times


const timeoutObject = dynamicIntervalCount(function() {
    console.log('hi');
}, 500); // prints 'hi' at 500ms intervals indefinitely

console.log(timeoutObject); // Timeout { ... }
***********************************************************************/

//PROBLEM 07 POSTPONE WITH ARGS

/***********************************************************************
Write a function, `postponeWithArgs`, that accepts a callback and a delay in
milliseconds as arguments. `postponeWithArgs` should return a new function that
accepts any number of arguments. When the returned function is called, it should
invoke the callback after the given delay, passing any arguments it receives to
the callback.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Examples***********************************************************************/

function postponeWithArgs(cb, delay) {
   return function (...args) {
    setTimeout(() => {
        cb(...args);
    }, delay);
   };
  }

const greet = (person) => console.log('Hello ' + person + '!');
const slowGreet = postponeWithArgs(greet, 1000);
slowGreet('Rose'); // prints 'Hello Rose!' after 1000 ms
slowGreet('Alex'); // prints 'Hello Alex!' after 1000 ms

const printSum = (num1, num2) => console.log(num1 + num2);
const slowPrintSum = postponeWithArgs(printSum, 500);
slowPrintSum(4, 3); // prints '7' after 500 ms
slowPrintSum(2, 8); // prints '10' after 500 ms
