// File: linkedList.js for LinkedList class

class LinkedListNode {                  // create LinkedListNode class
    constructor(val) {                  // add constructor with param of val
      this.value = val;                 // define this.value to equal val
      this.next = null;                 // define this.next to equal null
    }
  }

  class LinkedList {                    // create LinkedList class
    constructor() {                     // add constructor
      this.head = null;                 // define this.head to equal null
      this.length = 0;                  // define this.length to equal 0
    }

    addToHead(val) {                                        // declare the addToHead(val) method with the val param
      const newNode = new LinkedListNode(val, null);        // declare newNode to equal LinkedListNode(val, null)
      newNode.next = this.head;                             // set newNode.next to equal this.head
      this.head = newNode;                                  // set this.head to equal newNode
      this.length++;                                        // add 1 node to LinkedListNode.length
    }

    addToTail(val) {                                        // declare the addToTail(val) method with the val param
      const newNode = new LinkedListNode(val, null);        // declare newNode to equal LinkedListNode(val, null)
      if (!this.head) {                                     // check if this.head is false or null
        this.head = newNode;                                // if null, set this.head to equal newNode
        this.length++;                                      // if null, add 1 node to LinkedListNode.length
        return this.head;                                   // if null, return this.head
      }
      let current = this.head;                              // declare current to equal this.head
      while (current.next) {                                // while current.next is true or not null
        current = current.next;                             // set current to equal current.next
      }
      current.next = newNode;                               // set current.next to equal newNode
      this.length++;                                        // add 1 node to LinkedListNode.length
    }

    removeFromHead() {
        if (this.head !== null) {
            const remmovedValue = this.head.value;
            this.head = this.head.next;
            return remmovedValue;
        }
    }

    // You can use this function to help debug
    print() {
      let current = this.head;

      while (current) {
        process.stdout.write(`${current.value} -> `);
        current = current.next;
      }

      console.log("NULL");
    }
  }

  module.exports = LinkedList;
