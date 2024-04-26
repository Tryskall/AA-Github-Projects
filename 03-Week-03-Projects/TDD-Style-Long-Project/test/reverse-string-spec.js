// File: reverse-string-spec.js for testing reverseString() function

const chai = require('chai');
const expect = chai.expect;
const MyModule = require('../problems/reverse-string');

describe('reverseString function', function () {
    it('should return the string spelled backwards', function () {
        expect(MyModule.reverseString('fun')).to.equal('nuf');
    });

    it('should throw a TypeError when invoked with a non-string argument', function () {
        expect(() => MyModule.reverseString(123)).to.throw(TypeError);
        expect(() => MyModule.reverseString('example')).to.not.throw(TypeError);
    });
});
