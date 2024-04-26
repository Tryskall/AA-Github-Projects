// const restSum = (...otherNums) => {
//     let sum = otherNums.reduce((acc, el) => (acc += el));
//     return sum;
// }
const restSum = (...otherNums) => otherNums.reduce((acc, el) => acc + el, 0);
console.log(('restSum output:'));
console.log(restSum(1,2,3));

const getFullName = person => person.firstName + " " + person.lastName;
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
console.log('getFullName output:');
console.log(getFullName(new Person("Elle", "Woods")));

const addFive = num => num + 5;
console.log('addFive output:');
console.log(addFive(3));

const coupon = discount => prices => prices.map((price) => price -= price * discount);
console.log('coupon output:');
console.log(coupon(0.5)([10, 6, 3, 9]));
