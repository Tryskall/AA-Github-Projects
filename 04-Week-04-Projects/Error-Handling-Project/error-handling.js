// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
// TypeError
try {
  let res = sum(null);
console.log(sum(res));
} catch(e) {
  if (e instanceof TypeError) {
    console.log(e.name + ': ' + e.message);
}}


// 2.
function sayName(fname) {
  if (typeof fname === 'string') {
  console.log(fname);
  } else {
    throw new TypeError("Invalid name! Must be a string!");
  }
}

try {
  sayName("Alex");
  sayName(1);
  } catch (error) {
    console.error(error.message);
}
// tests

// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  const result = greet('');

} catch (error) {
   if (error.message === "There was no greeting given.") {
    console.log('Hello World!');
  } else {
  console.error(error.message);
  }
}
