// File: hashTable.js for KeyValuePair & HashTable

const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    let keyToSha256 = sha256(key);
    let res = parseInt(keyToSha256.substring(0, 8), 16);
    return res;
  }

  hashMod(key) {
    const hashValue = this.hash(key);
    return hashValue % this.capacity;
  }

  insertNoCollisions(key, value) {
    let node = new KeyValuePair(key, value);
    let location = this.hashMod(key);
    if (this.data[location] === null) {
        this.data[location] = node;
        this.count++;
    } else {
        throw new Error('hash collision or same key/value pair already exists!');
    }
  }

  insertWithHashCollisions(key, value) {
    let node = new KeyValuePair(key, value);
    let location = this.hashMod(key);
    if (this.data[location] === null) {
        this.data[location] = node;
    } else {
        node.next = this.data[location];
        this.data[location] = node;
    }
    this.count++;
  }

  insert(key, value) {
    let node = new KeyValuePair(key, value);
    let location = this.hashMod(key);
    if (this.data[location] === null) {
        this.data[location] = node;
        this.count++;
    } else {
        let head = this.data[location];
        let same = false;
        while (head !== null) {
            if (head.key === key) {
                head.value = value;
                same = true;
                break;
            }
            head = head.next;
        }
        if (!same) {
            node.next = this.data[location];
            this.data[location] = node;
            this.count++;
        }
    }
   }

}


module.exports = HashTable;
