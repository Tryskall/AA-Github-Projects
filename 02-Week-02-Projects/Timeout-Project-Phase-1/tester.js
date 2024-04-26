// PROBLEM 01 SET SECONDS TIMEOUT

/***********************************************************************
Recall that the built-in `setTimeout` function accepts a delay in
milliseconds. It would be cool if we had a version that could accept the
delay in seconds!

Write a function, `setSecondsTimeout`, that accepts a callback and a delay
in *seconds*. The function should set a timeout on the given callback for
the specified amount of time. Feel free to use the built-in `setTimeout`
in your implementation.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below. Use the command
`node problems/01-set-seconds-timeout.js`

Examples:

function setSecondsTimeout(cb, delayInSeconds) {
    const milliseconds = delayInSeconds * 1000;
    setTimeout(cb, milliseconds);
  }

setSecondsTimeout(function () {
    console.log('hello');
}, 1); // should print 'hello' after 1000 milliseconds

setSecondsTimeout(function () {
    console.log('world');
}, 1.4); // should print 'world' after 1400 milliseconds
***********************************************************************/

// PROBLEM 02 SET SECONDS TIMEOUT ARGS

/***********************************************************************
The `setSecondsTimeout` you wrote was cool, but it's missing some functionality.
The built-in `setTimeout` can also accept any additional number of arguments that
will be passed to the callback.

Write a function, `setSecondsTimeoutArgs`, that accepts a callback, a delay
in seconds, and any number of additional arguments. The function should call the
callback with the additional arguments after the specified delay.

In addition to Mocha, we recommend that you test your code manually using node
with the examples below.

Examples:

function setSecondsTimeoutArgs(cb, delayInSeconds, ...args) {
    const milliseconds = delayInSeconds * 1000;

    setTimeout(() => {
        cb(...args);
    }, milliseconds);
  };

  function printSum(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
// setSecondsTimeoutArgs(printSum, 0.25, 5, 1, 4); // should print '10' after 250ms

setSecondsTimeoutArgs(function(arg1, arg2) {
    console.log(arg1 + '-' + arg2);
}, 0.7, 'hello', 'world'); // should print 'hello-world' after 700ms
***********************************************************************/

// PROBLEM 03 BATCH TIMEOUTS

/***********************************************************************
Write a function, `batchTimeouts`, that accepts an array of callbacks and an
array of delays in milliseconds. The function should set a timeout for each
callback in the array with its corresponding delay. For example, the
callback at index 0 should be set with the delay at index 0,
the callback at index 1 should be set with the delay at index 1, and so on.
The `batchTimeouts` function should return an array containing the Timeout
objects for each timeout that was set. You may assume that both array arguments
have the same length.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below to confirm the correct behavior.

Note: The test specs for this problem are valid for iterative solutions. If you
pass the specs for an iterative solution and then attempt a recursive solution,
you will need to test your new solution manually using node.

Example:

// function batchTimeouts(callbacks, delays) {
//     let timeOuts = [];
//     for (let i = 0; i < callbacks.length; i++) {
//         let cb = callbacks[i];
//         let delay = delays[i];
//         let timeOut = setTimeout(cb, delay);
//         timeOuts.push(timeOut)
//         }
//         return timeOuts;
// }

const batchTimeouts = (cbs, delays) => cbs.map((cb, i) => setTimeout(cb, delays[i]));

const sayHello = () => console.log('hi');
const sayGoodbye = () => console.log('bye');
const shout = () => console.log('WHAT?');
const tasks = [sayHello, sayGoodbye, shout];
const delays = [500, 200, 900];

const timeoutObjs = batchTimeouts(tasks, delays);
// should print:
//  'bye' after 200 ms
//  'hi' after 500 ms
//  'WHAT?' after 900 ms

console.log(timeoutObjs); // [ Timeout {...},  Timeout {...}, Timeout {...} ]
***********************************************************************/

// PROBLEM 04 INTERVAL COUNT

/***********************************************************************
Write a function, `intervalCount`, that accepts a callback, a delay in
milliseconds, and an amount. The function should set an interval with
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Example:***********************************************************************/

// function intervalCount(cb, delay, amount) {
//     let count = 0;
//     const interval = setInterval(() => {
//         cb();
//         count++;
//         if (count === amount) {
//             clearInterval(interval);
//         }
//     }, delay);
//   }

const intervalCount = (cb, delay, amount) => {
    let count = 0;
    const interval = setInterval(() =>  {
        cb();
        count++;
        (count === amount) && clearInterval(interval);
    }, delay);
};

  intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
