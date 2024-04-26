// File: 01-singlyLinkedList.js

// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new SinglyLinkedNode(val, null);
        if (this.head) {
            newNode.next = this.head;
        }
        this.head = newNode;
        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here
        // O(1) accesing head does not need to traverse n
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val, null);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
        // O(n) accessing the last node nedd to travers all nodes
    }

    removeFromHead() {
        if (!this.head) {
            return undefined;
        }
        let removed = this.head;
        this.head = this.head.next;
        this.length--;
        return removed;

        // Write your hypothesis on the time complexity of this method here
        // O(1) accessing head does not traverse n
    }

    removeFromTail() {
        if (!this.head) {
            return undefined;
        }
        if (this.length === 1) {
            this.head = null;
            this.length--;
            return;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        let removed = current.next;
        current.next = null;
        this.length--;
        return removed;
        // Write your hypothesis on the time complexity of this method here
        // O(n) must traverse all nodes to get to last node
    }

    peekAtHead() {
        if (this.head) {
            return this.head.value;
        }
        // Write your hypothesis on the time complexity of this method here
        // O(1) accessing head does not traverse n
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
        // Write your hypothesis on the time complexity of this method here
        // O(n) has to traverse n to acceess all nodes
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList
}
