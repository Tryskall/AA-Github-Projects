// A queue is an abstract data type (ADT) that returns values
//  in the same order they are added. That means that,
//  like the definition of a stack, the definition of a queue
//  has nothing to do with its implementation. In this reading,
//  you will learn how a queue works and examine the tradeoffs
//  of two different implementations.

// FIFO: First in, first out

// You are probably familiar with how waiting in line works.
//  At the grocery store, the first person in line is the first
//  person checked out. A queue works the same way: First in, first out.

// Compare this to a stack which works like a stack of plates: last in,
// first out.
// Queues serve many purposes in computing. A customer service app might
// use a queue to serve customers in the order of entry. A printer might
// use a queue to store print jobs. Any time you are modeling first-come,
// first-served behavior, you can use a queue.
// There are two important functions that define a queue: enqueue()
// and dequeue(). They work like this:

const LinkedList = require('./linkedList')

class Queue {
    constructor() {
        this.linkedList = new LinkedList();
    }
    enqueue(value) {
        this.linkedList.addToTail(value);
    }
    dequeue() {
        const value = this.linkedList.head.value;
        this.linkedList.removeFromHead();
        return value;
    }
}

module.export = Queue;

// const queue = new Queue();
// queue.enqueue(1);
// console.log(queue);
// queue.enqueue(2);
// console.log(queue);
// queue.enqueue(3);
// console.log(queue);

// console.log(queue.dequeue());
// console.log(queue.dequeue());

// queue.enqueue(4);
// console.log(queue);

// console.log(queue.dequeue());
// console.log(queue.dequeue());

q = new Queue();
n = 1000;

enqueueStartTime = Date.now();
for (let i = 0; i < n; i++) {
  q.enqueue(i);
}
enqueueEndTime = Date.now();

dequeueStartTime = Date.now();
for (let i = 0; i < n; i++) {
  q.dequeue();
}
dequeueEndTime = Date.now();

console.log(`Enqueue time: ${enqueueEndTime - enqueueStartTime}ms`);
console.log(`Dequeue time: ${dequeueEndTime - dequeueStartTime}ms`);
