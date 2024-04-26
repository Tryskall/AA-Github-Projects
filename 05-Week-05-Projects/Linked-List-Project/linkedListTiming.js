// File: linkedListTiming.js for test the time of LinkedList and DoublyLinkedList classes

const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/
/*
I believe inserting at the head or tail of either linked list
will have a time complexity of O(1), but inserting anywhere else
in the list would be O(n)
*/

const n = 1000;
let start, end;

console.log('----------addToHead: singly linked list----------');
console.log(`Single - addToHead(${n}): `);
const singleHead = new LinkedList();
start = Date.now();
for (let i = 0; i < n; i++) {
    singleHead.addToHead(i);
    end = Date.now();
    console.log(`${end - start}`);
}
console.log(`Single - addToHead(${n}): `);

console.log('------------------------------------------------');


console.log('----------addToHead: doubly linked list----------');
console.log(`Double - addToHead(${n}): `);
const doubleHead = new DoublyLinkedList();
start = Date.now();
for (let i = 0; i < n; i++) {
    doubleHead.addToHead(i);
    end = Date.now();
    console.log(`${end - start}`);
}
console.log(`Double - addToHead(${n}): `);

console.log('------------------------------------------------');


console.log('----------addToTail: singly linked list----------');
console.log(`Single - addToTail(${n}): `);
const singleTail = new LinkedList();
start = Date.now();
for (let i = 0; i < n; i++) {
    singleTail.addToTail(i);
    end = Date.now();
    console.log(`${end - start}`);
}
console.log(`Single - addToTail(${n}): `);


console.log('------------------------------------------------');


console.log('----------addToTail: doubly linked list----------');
console.log(`Double - addToTail(${n}): `);
const doubleTail = new DoublyLinkedList();
start = Date.now();
for (let i = 0; i < n; i++) {
    doubleTail.addToTail(i);
    end = Date.now();
    console.log(`${end - start}`);
}
console.log(`Double - addToTail(${n}): `);
