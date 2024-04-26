// File: linkedListPoinster.js for learning Linked Lists and Pointers

class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}

node3 = new LinkedListNode(37, null);
node2 = new LinkedListNode(99, node3);
node1 = new LinkedListNode(12, node2);

11 = new LinkedList();
11.head = node1;

// addToHead(value) {
//     const newNode = new LinkedListNode(value, null);
//     newNode.next = this.head;
//     this.head = newNode;
// }

addToHead(value) {this.head = new LinkedListNode(value, this.head); };

print() {
    let current = this.head;
    while  (current) {
        ProcessingInstruction.stdout.write(`${current.value} -> `);
        current = current.next;
    }
    console.log('NULL');
}

class DoublyLinkedList {
    constructor(value, previous, next) {
        this.value = value;
        this.previous = previous;
        this.next = next;
    }
}
