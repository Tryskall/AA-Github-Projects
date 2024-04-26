const User = require('./classes/user');

const michelle = new User('Michelle');

// function greetAfterNameChange(changeName, newName) {
//   const name = changeName(newName);

//   console.log(`Hi my name is ${name}`);
// }
const greetAfterNameChange = (changeName, newName) => console.log(`Hi my name is ${changeName(newName)}`);

greetAfterNameChange(michelle.changeName, 'Elle');
  // should print out: Hi my name is Elle
