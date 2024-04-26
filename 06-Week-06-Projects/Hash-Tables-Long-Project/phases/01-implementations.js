// File: 01-implementations.js

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)
  constructor(numBuckets = 8) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue;
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insert(key, value) {
      if (this.count > this.capacity * 0.7) {
        if (this.count > 4) this.resize();
      }
      let newNode = new KeyValuePair(key, value);
      let mod = this.hashMod(key);
      if (this.data[mod]) {
        let node = this.data[mod];
        while (node !== null && node.key !== key) {
          node = node.next;
        }
        if (node === null) {
          newNode.next = this.data[mod];
          this.data[mod] = newNode;
          this.count++
        } else {
          node.value = newNode.value;
        };
      } else {
        this.data[mod] = newNode;
        this.count++
      }
  }

  read(key) {
    let mod = this.hashMod(key);
    let newNode = this.data[mod];
    while ( newNode !== null && !(key === newNode.key)) {
      newNode = newNode.next;
    }
    if (newNode === null) return undefined;
    return newNode.value;
  }

  resize() {
    let dataCopy = this.data.slice();
    let countCopy = this.count;
    this.capacity = this.capacity * 2;
    this.data = new Array(this.capacity).fill(null);
    for (let i = 0; i < dataCopy.length; i++) {
      let copied = dataCopy[i];
      while (copied) {
        this.insert(copied.key, copied.value);
        copied = copied.next;
      }
      this.count = countCopy;
    }
  }

  delete(key) {
    let mod = this.hashMod(key);
    let node = this.data[mod];
    let prev;
    while (node !== null && !(key === node.key)) {
      prev = node;
      node = node.next;
    }
    if (node === null) return "Key not found";
    if (prev) {
      prev.next = node.next;
    } else {
      this.data[mod] = node.next;
    }
    this.count--;
  }
}


  module.exports = HashTable;
