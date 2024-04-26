const Person = require('./person');

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }
  static combinedYearsOfExperience(teachers) {
    if (!Array.isArray(teachers)) {
      throw new Error('combinedYearsOfExperience only takes an array as an argument.')
    }
    let totalYears = 0;
    for (const teacher of teachers) {
      if (!(teacher instanceof Teacher)) {
        throw new Error('All items in the array must be Teacher class instances.');
      }
      totalYears += teacher.yearsOfExperience;
    }
    return totalYears;
  }
}

module.exports = Teacher;

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
