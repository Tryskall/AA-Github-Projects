// File: number-fun.spec.js for testing returnThree() and reciprocal() functions

const chai = require('chai');
const expect = chai.expect;
const { returnsThree, reciprocal } = require('../problems/number-fun');
const MyModule = require('../problems/number-fun');

describe('returnsThree function', () => {
    let n = 'hello';
    let n2 = 4;

    it('should return the number 3', () => {
        expect(returnsThree(n)).to.equal(3);
        expect(returnsThree(n2)).to.equal(3);
    })
})

describe('reciprocal function', () => {
    context('context: if the given number is within the range 1 and 1000000', () => {
        it('should return the reciprocal of the given number', () => {
            expect(MyModule.reciprocal(2)).to.equal(0.5);
            expect(MyModule.reciprocal(1000000)).to.equal(1/1000000);
        })
    })

    context('context: if the given number is not within the range 1 and 1000000', () => {
        it('should throw a RangeError if context is not met', () => {
            expect(() => MyModule.reciprocal(1000001)).to.throw(RangeError, 'number must be between 1 and 1000000');
            expect(() => MyModule.reciprocal(-1)).to.throw(RangeError, 'number must be between 1 and 1000000');
            expect(() => MyModule.reciprocal(50000)).to.not.throw(RangeError)
        })
    })
})
