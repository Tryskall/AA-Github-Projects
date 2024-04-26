// File: dynamic-array.js for DynamicArray class

class DynamicArray {

    constructor(defaultSize = 4) {
        this.data = new Array(defaultSize);
        this.length = 0;
        this.capacity = defaultSize;
    }

    read(index) {
        if (index < this.length) {
            return this.data[index];
           }
           return undefined;
    }

    push(val) {
        if (this.length === this.capacity) {
            this.resize();
        }
        this.data[this.length] = val;
        this.length++
    }


    pop() {
        if (this.length > 0) {
            let val = this.data[this.length -1];
            this.data[this.length - 1] = null;
            this.length--;
            return val;
        }
    }

    shift() {
        if (this.length > 0) {
            let val = this.data[0];
            let newArr = new Array(this.capacity + 5);
            for (let i = 1; i < this.length; i++) {
                this.data[i-1] = this.data[i];
            }
            this.data[this.data.length - 1] = null;
            this.length--;
            return val;
        }
    }

    unshift(val) {
        if (this.length === this.capacity) {
            this.resize();
          }
          for (let i = this.length; i >= 1; i--) {
            this.data[i] = this.data[i - 1];
          }
          this.data[0] = val;
          this.length++;
    }

    indexOf(val) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === val) {
                return i;
            }
        }
        return -1;
    }

    resize() {
       let newArr = new Array(this.capacity * 2);
       for (let i = 0; i < this.length; i++) {
        newArr[i] = this.data[i];
       }
       this.data = newArr;
       this.capacity *= 2;
    }
  }


  module.exports = DynamicArray;
