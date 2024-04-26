// File: 02-02-friend.js for Friend class extends Character

const { Character } = require('./02-0-character');
const { Weapon } = require('./01-04-weapon');
const { Mod } = require('./01-03-0-mod');
const { Room } = require('./03-0-room');

// Original File from starter project
class Friend extends Character {
  constructor(name, description, currentRoom, items = [], greeting) {
    super(name, description, currentRoom, items);
    this.greeting = greeting;
  }

  setPlayer(player) {
    this.player = player;
  }

  act() {
    console.log("");
    console.log(`The ${this.name} says, "${this.greeting}"`);
    console.log("");
    console.log("Type 'mod <weapon or armor> <mod>' to modify a weapon or armor.");
  }

  askModify(weapon, mod) {
    if (weapon instanceof Weapon && mod instanceof Mod) {

      if (Math.max(...Object.values(mod.effects)) <= 5) {
        console.log(`"I can bind your ${mod.name} to your ${weapon.name} for 5 gold. Sound good?" (y/n)`);
        return 5;
      } else {
        console.log(`"I don't think you can afford that!"`);
      };

    } else {
      console.log(`"Those items can't combine!"`);
    };
    return 0;
  };

  modify(weapon, mod, cost) {
    let effects = mod.effects;

      for (const key in effects) {
          weapon[key] += effects[key];
      }
      weapon.description += `, modified with ${mod.name}`;

      this.player.dropItem(mod.name);
      this.player.gold -= cost;

      console.log(`The tinkerer cackles greedily. "Enjoy your new and improved ${weapon.name}!"`);
  }

}

// class Friend extends Character {
//   constructor(name, description, items = [], greeting, currentRoom) {
//     // Character(name, description, items = [], strength = 10, health = 100, defense = 1, currentRoom)
//     super(name, description, items, currentRoom);
//     this.greeting = greeting;
//   }

//   setPlayer(player) {
//     this.player = player;
//   }

//   act() {
//       console.log(`The ${this.name} says, "${this.greeting}"`);
//       console.log("");
//       console.log("Type 'mod <equipment> <mod>' to modify a weapon.");
//   }

//   // Change to askModify(item, mod) so it can modify weapons and armor
//   askModify(weapon, mod) {
//     if (weapon instanceof Weapon && mod instanceof Mod) {

//       if (Math.max(...Object.values(mod.effects)) <= 3) {
//         console.log(`"I can bind your ${mod.name} to your ${weapon.name} for 5 gold. Sound good?" (y/n)`);
//         return 5;
//       } else {
//         console.log(`"I don't think you can afford that!"`);
//       };

//     } else {
//       console.log(`"Those items can't combine!"`);
//     };
//     return 0;
//   };

//   modify(equipment, mod, cost) {
//     let effects = mod.effects;

//       for (const key in effects) {
//           weapon[key] += effects[key];
//       }
//       equipment.description += `, modified with ${mod.name}`;

//       this.player.dropItem(mod.name);
//       this.player.gold -= cost;

//       console.log(`The Weapon Smith cackles greedily. "Enjoy your new and improved ${weapon.name}!"`);
//   }
// }

module.exports = {
    Friend,
};
