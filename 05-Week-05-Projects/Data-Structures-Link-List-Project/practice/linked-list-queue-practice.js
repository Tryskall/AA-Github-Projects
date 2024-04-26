// File: linked-list-queue-practice.js

// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
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
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Implement in O(n) and in O(1) time complexity
        // O(n) time complexity implementation
        let current = this.head;
        let count = 0;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
        // O(1) time complexity implementation
        // return this.length;
    }

    sumOfNodes() {
        let sum = 0;
        let current = this.head;
        while (current !== null) {
            sum += current.value;
            current = current.next;
        }
        return sum;
        // Write your hypothesis on the time complexity of this method here
        // O(n) has to access all nodes in linear time
    }

    averageValue() {
        let avg = (this.sumOfNodes() / this.listLength())
        return avg;
        // Write your hypothesis on the time complexity of this method here
        // O(n) has to access all nodes in linear time
    }

    findNthNode(n) {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            if (count === n) {
                return current;
            }
            count++;
            current = current.next;
        }
        return null;
        // Write you hypothesis on the time complexity of this method here
        // O(n) has to access all nodes in linear time
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
        let middle = Math.floor((this.listLength() - 1) / 2);
        return this.findNthNode(middle);
        // Write your hypothesis on the time complexity of this method here
        // O(n) has to access all nodes in linear time
    }

    reverse() {
        let reversed = new SinglyLinkedList;
        let current = this.head;
        while (current !== null) {
            reversed.addToHead(current.value);
            current = current.next;
        }
        return reversed;
        // Write your hypothesis on the time complexity of this method here
        // O(n) accesses all node in linear time
    }

    reverseInPlace() {
        let current = this.head;
        let prev = null;
        while (current !== null) {
            let next = current.next;
            if (next === null) {
                this.head = current;
            }
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
        // Write your hypothesis on the time complexity of this method here
        // O(n) accesses all nodes in linear time
    }
}

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
        this.next = null;
        this.prev = null;
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
        let newNode = new DoublyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        return this.head;
        // Write your hypothesis on the time complexity of this method here
        // O(1) adds newNode at head and updates the pointers in constant time
    }

    listLength() {
        // Implement in O(n) and in O(1) time complexity
        // O(n) time complexity implementation
        let current = this.head;
        let count = 0;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
        // O(1) time complexity implementation
        // return this.length;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
            let middle = Math.floor((this.listLength() -1) / 2);
            let count = 0;
            let current = this.head;
            while (current !== null) {
                if (count === middle) {
                    return current;
                }
                current = current.next;
                count++;
            }
        // Write your hypothesis on the time complexity of this method here
        // O(n) has to access all nodes in linear time
    }

    reverse() {
        let reversed = new SinglyLinkedList;
        let current = this.head;
        while (current !== null) {
            reversed.addToHead(current.value);
            current = current.next;
        }
        return reversed;
        // Write your hypothesis on the time complexity of this method here
        // O(n) accesses all node in linear time
    }

    reverseInPlace() {
        let current = this.head;
        let prev = null;
        while (current !== null) {
            let next = current.next;
            if (next === null) {
                this.head = current;
            }
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
        // Write your hypothesis on the time complexity of this method here
        // O(n) has to access all node in linear time
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
