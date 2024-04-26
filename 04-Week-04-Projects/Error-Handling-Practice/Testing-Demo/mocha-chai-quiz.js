// mocha-chai-quiz

// Which of the following Node.js modules is a testing framework
// Mocha

// Which of the following Node.js modules is an assertion library\
// Chai

// Which directory will Mocha default to, to look in, for running test spec files?
// test

// If you are testing a file called quiz.js, what should the test-spec file be called?
// quiz-spec.js

// Which of the following functions is used to group test specs in Mocha
// describe

// Which of the following functions is used to test a single spec in Mocha
// it

// Which of the following functions is used to define when a test spec passes or fails in Chai?
// expect

// describe('Person', () => {
//     let alex;
//     beforeEach(() => {
//         alex = new personalbar('Alex');
//     });
//     afterEach(() => {
//         alex = null;
//     })
//     describe('constructor', () => {
//         it('should set the name property to the given argument', expect(alex.name).to.eq('Alex'));
//     })
// })
// What are possible reasons that the code above would fail?
// if the Person , alex, does not have a name property of "Alex"
// if there is no Person class

// Using the Chai docs as a reference, which of the foloowing is an example of asserting that the 
// -- throwsAnError function will throw any error?
// expect(() => throwsAnError()).to.throw()

// Using the Chai Docs as a reference, which of the following is an example of asserting that the num
// -- variable evauluated to True
// expect(num).to.be.true

// Using the Chai docs as a reference, which of the following is an example of asserting that the 
// -- person object has properties of firstName and lastName?
// expect(person).to.have.all.keys('firstName', 'lastName');