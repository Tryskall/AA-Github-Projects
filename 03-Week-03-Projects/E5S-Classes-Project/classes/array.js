// File: array.js for Array class

// Define the isEqual method on the Array prototype
Array.prototype.isEqual = function (otherArray) {
    // Check if the lengths are equal
    if (this.length !== otherArray.length) {
        return false;
    }
    // Check if each element is equal
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== otherArray[i]) {
            return false;
        }
    }
    return true;
};

// Export the extended Array class
module.exports = Array;
