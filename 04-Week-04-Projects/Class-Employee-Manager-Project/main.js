
const Employee = require('./employee');
const Manager = require('./manager');                                   // Import the Manager Class

// **** Phase 5 Testing

const hobbes = new Manager('Hobbes', 1000000, 'Founder');
const calvin = new Manager('Calvin', 130000, 'Director', hobbes);
const susie = new Manager('Susie', 100000, 'TA Manager', calvin);
const lily = new Employee('Lily', 90000, 'TA', susie);
const clifford = new Employee('Clifford', 90000, 'TA', susie);

console.log(hobbes.calculateBonus(0.05));
console.log(calvin.calculateBonus(0.05));
console.log(susie.calculateBonus(0.05));
console.log(lily.calculateBonus(0.05));
console.log(clifford.calculateBonus(0.05));

// **** Phase 4b Calculate Managers' Bonus' **************************************************************

// const splinter = new Manager('Splinter', 100000, 'Sensei');             // declare splinter as new Manager
// const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);          // declare leo as new Manager
// const raph = new Manager('Rapael', 90000, 'Ninja', leo);                // declare raph as new Manager
// const mikey = new Employee('Michelangelo', 85000, 'Ninja', raph);       // declare mikey as new Employee
// const donnie = new Employee('Donatello', 85000, 'Ninja', raph);         // declare donnie as new Employee

// console.log(splinter.calculateBonus(0.05));
// console.log(leo.calculateBonus(0.05));
// console.log(raph.calculateBonus(0.05));



// **** Phase 4a Calculate Bonuses for Regular Employees

// const raph = new Employee('Raphael', 90000, 'Ninja');
// const donnie = new Employee('Donatello', 85000, 'Grasshopper');

// console.log(raph.calculateBonus(0.025));
// console.log(donnie.calculateBonus(0.15));


// **** Phase 3 Dynamically adding employees **************************************************************

// const splinter = new Manager('Splinter', 100000, 'Sensei');
// console.log('Before: ', splinter);

// const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
// const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
// const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
// const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

// console.log('After: ', splinter);


// **** Phase 2 Define the Manager Class extends Employee ***************************************************

// const splinter = new Manager('Splinter', 100000, 'Sensei');             // declare splinter as new Manager
// console.log('Before: ', splinter);
// const let = new Employee('Leonardo', 90000, 'Ninja', splinter);
// const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
// const donnie = new Employee('Donatello', 90000, 'Ninja, splinter');
// const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

// splinter.addEmployee(leo);
// splinter.addEmployee(mikey);
// splinter.addEmployee(donnie);
// splinter.addEmployee(raph);

// console.log('After: ', splinter);


// **** Phase 1 Define Employee Class **********************************************************************

// const leo = new Employee('Leonardo', 90000, 'Ninja');
// console.log(leo);
