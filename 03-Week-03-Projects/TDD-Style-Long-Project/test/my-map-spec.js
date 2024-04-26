// File: my-map-spec.js for testing myMap(inputArray, callback) function

const chai = require('chai');
const spies = require('chai-spies')
const expect = chai.expect;
chai.use(spies);
const myMap = require('../problems/my-map');

describe('myMap() function', () => {
    let arr;
    let callback;
    let callbackSpy;

    beforeEach(() => {
        arr = [1,2,3];
        callback = el => el * 2;
        callbackSpy = chai.spy(() => {});
    })

    it('should be a function', () => {
        expect(myMap).to.be.a('function');
    })
    it('should not mutate the original array', () => {
        myMap(arr, callbackSpy);
        expect(arr).to.deep.equal([1,2,3]);
    })
    it('should not use the built-in Array.map method', () => {
        callback = chai.spy(el => el * 2);
        myMap(arr, callback);
        expect(callback).to.have.been.called.exactly(arr.length);
    })
})
