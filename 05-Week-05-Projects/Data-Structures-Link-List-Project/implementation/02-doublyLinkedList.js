// File: 02-doublyLinkedList.js

// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        let newNode = new DoublyLinkedNode(val);
        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
        } else {
            this.tail = newNode;
        }
        this.head = newNode;
        this.length++;
        // Write your hypothesis on the time complexity of this method here
        // O(1) adds newNode at head and updates the pointers in constant time
    }

    addToTail(val) {
        const newNode = new DoublyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        // Write your hypothesis on the time complexity of this method here
        // O(1) adds newNode and updates pointers in constant time
    }

    removeFromHead() {
        if (!this.head) {
            return undefined;
        }
        let removed = this.head.value;
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        }
        this.length--;
        return removed;
        // Write your hypothesis on the time complexity of this method here
        // O(1) removes head node and updates pointers in constant time
    }

    removeFromTail() {
        if (!this.head) {
            return undefined;
        }
        let removed = this.tail.value;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else { this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return removed;
        // Write your hypothesis on the time complexity of this method here
        // O(1) removes tail node and updates pointers in constant time
    }

    peekAtHead() {
        if (this.head) {
            return this.head.value;
        }
        // Write your hypothesis on the time complexity of this method here
        // O(1) retrieves the value of head node in constant time
    }

    peekAtTail() {
        if (this.tail) {
            return this.tail.value;
        }
        // Write your hypothesis on the time complexity of this method here
        // O(1) retrieves the value of the tail node in constant time
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
