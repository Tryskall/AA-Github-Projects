// File: doublyLinkedList.js for DoublyLinkedList class

class DoublyLinkedListNode {            // create DoublyLinkedListNode class
    constructor(val) {                  // add the constructor with the value param
      this.value = val;                 // define the value constructor
      this.prev = null;                 // define the prev constructor
      this.next = null;                 // define the next constructor
    }
  }

  class DoublyLinkedList {              // create DoublyLinkedList class
    constructor() {                     // add the constructor
      this.head = null;                 // define the head constructor
      this.tail = null;                 // define the tail constructor
      this.length = 0;                  // set the length to 0
    }

    addToHead(val) {                                            // declare the addToHead(val) method with val as a param
      const newNode = new DoublyLinkedListNode(val, null);      // declare newNode variable to equal new DoublyLinkedListNode class
      if (!this.head) {                                         // check if this.head is false or null
        this.head = newNode;                                    // if this.head is false, set this.head to equal newNode;
        this.tail = newNode;                                    // if this.head is false, set this.tail to equal newNode
      } else {                                                  // if this.head is true
        newNode.next = this.head;                               // set newNode.next to equal this.head
        this.head.prev = newNode;                               // set this.head.prev to equal newNode
        this.head = newNode;                                    // set this.head to equal newNode
      }
      this.length++;                                            // add 1 node to DoublyLinkedListNode.length
    }

    addToTail(val) {                                            // declare the addToTail(val) method with val as a param
      const newNode = new DoublyLinkedListNode(val, null);      // declare newNode to equal new DoublyLinkedListNode(val, null)
      if (!this.head) {                                         // check if this.head is false or null
        this.head = newNode;                                    // if this.head is false, set this.head to equal newNode
        this.tail = newNode;                                    // if this.head is false, set this.tail to equal newNode
      } else {                                                  // if this.head is true or not empty
        newNode.prev = this.tail;                               // set newNode.prev to equal this.tail
        this.tail.next = newNode;                               // set this.tail.next to equal newNode
        this.tail = newNode;                                    // set this.tail to equal newNode
      }
      this.length++;                                            // add 1 node to DoublyLinkedListNode.length
    }

    // You can use this function to help debug
    print() {                                                   // declare print method to check for bugs
      let current = this.head;                                  // declare current to equal this.head

      while (current) {                                         // while current is true,
        process.stdout.write(`${current.value} <-> `);          // print to terminal with process.stdout.write(current.value)
        current = current.next;                                 // set current to equal current.next or next node
      }

      console.log("NULL");                                      // if current is false, print NULL in the terminal
    }
  }

  module.exports = DoublyLinkedList;
