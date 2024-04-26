// File: person-spec.js for testing Person class

const chai = require('chai');
const expect = chai.expect;
const Person = require('../problems/person');

describe('person class', () => {
    let person;
    let otherPerson;
    let coolPerson;
    let noAgePerson;

    beforeEach(() => {
        person = new Person('John', 35);
        otherPerson = new Person('Randy', 43);
        coolPerson = new Person('Mai', 32);
        noAgePerson = new Person('Benny', 27);
    })

    describe('constructor', () => {
        it('should have a name property and set the name property correctly', () => {
            expect(person).to.have.property('name').that.equals('John');
        })
        it('should have an age property and set the age property correctly', () => {
            expect(person).to.have.property('age').that.equals(35);
        })
    })

    describe('sayHello method', () => {
        it('should return a string with a name and greeting', () => {
            expect(person.sayHello()).to.equal('Hello, my name is John.');
        })
    })

    describe('visit method', () => {
        it('should return a string with a name visited other name', () => {
            expect(person.visit(otherPerson)).to.equal('John visited Randy.').to.be.a('string');
            expect(coolPerson.visit(noAgePerson)).to.equal('Mai visited Benny.').to.be.a('string');
        })
    })

    describe('switchVisit method', () => {
        it('should invoke the visit() method of the otherPerson', () => {
            expect(otherPerson.visit(person)).to.equal('Randy visited John.');
            expect(noAgePerson.visit(coolPerson)).to.equal('Benny visited Mai.')
        })
    })

    describe('update method', () => {
        context('context: if the argument is not an object', () => {
            it('should throw a TypeError', () => {
                expect(() => coolPerson.update('not an object').to.throw(TypeError, 'Invalid argument! Must be an object.'))
            })
        })
        context('context: if the incoming argument is an object', () => {
            it('should update properties with incoming object values', () => {
                coolPerson.update({ name: 'Lulu', age: 57 });
                expect(coolPerson.name).to.equal('Lulu');
                expect(coolPerson.age).to.equal(57);
            })
        })

        context('context: if the object does not have both name and age properties', () => {
            it('should throw a TypeError', () => {
                expect(() => {
                    noAgePerson.update({ name: 'Benny' }).to.throw(TypeError, 'Invalid object! Must have both name and age properties.');
                })
            })
        })
    })

    describe('tryUpdate method', () => {
        context('context: if update is successfully invoked', () => {
            it('should successfully update the name property', () => {
                coolPerson = new Person('Mai', 32);
                expect(coolPerson.tryUpdate({ name: 'Lulu', age: 57 })).to.be.true;
                expect(coolPerson.name).to.equal('Lulu');
                expect(coolPerson.age).to.equal(57);
            })
        })
        context('context: if update is not successfully invoked it should throw error', () => {
            it('should return false when update method fails', () => {
                coolPerson = new Person('Mai', 32);
                expect(coolPerson.tryUpdate({ age: 57 })).to.equal(false);
                // expect(coolPerson.tryUpdate(null)).to.equal(false);
                // expect(coolPerson.name).to.equal('Mai');
            })
        })
    })

    describe('greetAll method', () => {
        it('should return an array of greeting for an array of people', () => {
            const people = [person, otherPerson, coolPerson, noAgePerson];
            const greetings = Person.greetAll(people);
            expect(greetings).to.be.an('array');
            expect(greetings).to.deep.include.members(['Hello, my name is John.', 'Hello, my name is Randy.', 'Hello, my name is Mai.', 'Hello, my name is Benny.']);
        })
    })
})
