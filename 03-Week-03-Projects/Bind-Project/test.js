const { Employee } = require('./employee');

let johnWick = new Employee("John Wick", "Dog Lover");

// setTimeout(() => {
//     setTimeout(() => {
//     johnWick.sayOccupation();
// }, 1000);
//     johnWick.sayName();
// }, 2000);
const boundName = johnWick.sayName.bind(johnWick);
const boundOccupation = johnWick.sayOccupation.bind(johnWick);
global.setTimeout(boundName, 2000, setTimeout(boundOccupation, 3000));
