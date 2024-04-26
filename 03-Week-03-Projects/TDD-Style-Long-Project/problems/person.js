class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello = name => {
    return `Hello, my name is ${this.name}.`;
  }

  visit = otherPerson => {
    return `${this.name} visited ${otherPerson.name}.`;
  }

  switchVisit = otherPerson => {
    return otherPerson.visit(this);
  }

  update = obj => {
    if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
      throw new TypeError('Invalid Argument! Must be an object.');
    }
    if ('name' in obj && 'age' in obj) {
      this.name = obj.name;
      this.age = obj.age;
      return { name: this.name, age: this.age };
    } else {
      throw new TypeError('Invalid Object! Must have name and age properties.');
    }

  }

  tryUpdate = obj => {
    try {
      this.update(obj);
      return true;
    } catch (error) {
        if (error instanceof TypeError) {
        return false;
      }
    }
  }

  static greetAll(people) {
    const greetings = [];
    for (const person of people) {
      greetings.push(person.sayHello());
    }
    return greetings;
  }

}
module.exports = Person;
