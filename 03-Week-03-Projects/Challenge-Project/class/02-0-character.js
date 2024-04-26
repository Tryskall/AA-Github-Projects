// File: 02-0-character.js for Character class

// const { Item } = require('../class/01-0-item');
// const { Food } = require('../class/01-01-food');
const { Equipment } = require('../class/01-02-0-equipment');
const { Armor } = require('../class/01-02-01-armor');
// const { Mod } = require('../class/01-03-0-mod');
const { Weapon } = require('../class/01-04-weapon');
// const { Gold } = require('../class/01-05-gold');
// const { Enemy } = require('../class/02-01-enemy');
// const { Friend } = require('../class/02-02-friend');
// const { Player } = require('../class/02-03-01-player');
// const { Room } = require('../class/03-0-room');


// Original File from starter project
// const { Weapon } = require('./weapon');
// const { Equipment } = require('./equipment');
class Character {

  constructor(name, description, currentRoom, items = [], strength = 10, health = 100, defense = 1) {
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = items;
    this.strength = strength;
    this.health = health;
    this.defense = defense;
    this.currentWeapon = new Weapon('fists', 'just yer bare hands', 0);
    this.currentEquipment = new Equipment('plainclothes', 'plain old cotton clothes', 0);
    this.gold = 5;
  };

//       /*                     Weapon(name, description, power, defense, isWeapon, room) */
//     this.currentWeapon = new Weapon('fists', 'just yer bare hands', 2, 1, true);
//       /*                        Equipment(name, description, defense) */
//     this.currentEquipment = new Equipment('plainclothes', 'plain old tattered cotton clothes', 1);
//       /*                    Armor(name, description, defense, isArmor, room) */
//     /* this.currentArmor = new Armor('pink leather chaps', 'bright, shiny and tight as can be, pink leather chaps', 1, true); */
//       /*                   Gold(name, description, amount, isCurrency, room) */
//     /* this.currentGold = new Gold('gold', 'a shiny piece of eight', 5, true); */
//     /* this.armorWorn = []; */
//   }

  applyDamage(amount) {                                   // competing or adding to enemy.applyDamage(amount)
    this.health -= amount - this.defense;
    if (this.health <= 0) this.die();
  };

  takeItem(itemName) {
    const roomItems = this.currentRoom.items;                         // declare roomItems for list of items in currentRoom
    roomItems.forEach((item, index) => {                              // Iterate through roomItems
      if (item.name === itemName) {                                   // check if items wanted is in roomItems list
        let taken = roomItems.splice(index, 1);                       // declare taken as item to be removed from list
        this.items.push(taken[0]);                                    // add taken item to player inventory
        console.clear();                                              // clear the console for clarity
        console.log(" ");                                             // add space for readability
        console.log(`${this.name} picked up the ${itemName}`);        // print which character picked up which item
        console.log(" ");                                             // add space for readability
        if (item instanceof Weapon) {                                 // check if item is Weapon class
          if (item.power > this.currentWeapon.power) {                // if true, check if new weapon is more powerful than currentWeapon
            this.currentWeapon = item;                                // if true, use new weapon
            this.strength += item.power;                              //          add weaponPower to playerStrength
            this.defense = item.defense;                              //          add weaponDefense to playerDefense
          }
        } else if (item instanceof Equipment) {
          if (item.defense > this.currentEquipment.defense) {
            this.currentEquipment = item;
            this.defense = item.defense;
          }
        }
      }
    });
  };

  dropItem(itemName) {
    this.items.forEach((item, index) => {
        if (item.name === itemName) {
            let dropped = this.items.splice(index, 1);
            this.currentRoom.items.push(dropped[0]);
        }
    });
  };

  // should drop all enemy items and add them to room items
  dropAllItems() {
    for (let i = 0; this.items.length > 0; i++) {
      console.log(`The ${this.name} dropped its ${this.items[0].name}.`);
      console.log('');
      let dropped = this.items.splice(0, 1);
      this.currentRoom.items.push(dropped[0]);
    };
  };

  die() {
    this.dropAllItems();
    console.log(`The ${this.name} died!`);
    console.log("");
    this.currentRoom = null;
  };
};

// class Character {



//   // Should apply damage less defense
//   applyDamage(amount) {
//     this.health -= (amount - this.defense);
//     if (this.health <= 0) this.die();
//   }

//   // Original Function from starter project --- add needed code from commented out section below
//   takeItem(itemName) {
//     const roomItems = this.currentRoom.items;
//     roomItems.forEach((item, index) => {
//       if (item.name === itemName) {
//         let taken = roomItems.splice(index, 1);
//         this.items.push(taken[0]);
//         if (item instanceof Weapon) {
//           if (item.power > this.currentWeapon.power) {
//             this.currentWeapon = item;
//             this.strength = 10 + item.power;
//           }
//         } else if (item instanceof Equipment) {
//           if (item.defense > this.currentEquipment.defense) {
//             this.currentEquipment = item;
//             this.defense += item.defense;
//           }
//         }
//       }
//     });
//   }
//   // takeItem(itemName) {
//   //   const roomItems = this.currentRoom.items;   /* let itemFound = false; */
//   //   roomItems.forEach((item, index) => {        /* for (let index = 0; index < roomItems.length; index++) { */
//   //     if (item.name === itemName) {
//   //       console.log(`You picked up ${item.description}`);

//   //       if (item instanceof Weapon) {                                           // change to <hold> <weapon> not automatic, add left and right weapon
//   //         if (item.power > this.currentWeapon.power) {                          // char. ln:
//   //           this.currentWeapon = item;
//   //           this.strength = 10 + item.power;
//   //           this.defense = 2 + item.defense;
//   //           console.log(`The ${itemName} is now your weapon!`);
//   //         }
//   //       } else if (item instanceof Equipment) {
//   //         if (item.defense > this.currentEquipment.defense) {
//   //           this.defense = 2 + item.defense;
//   //         }
//   //       } else if (item instanceof Armor) {                                     // Allow for more one piece of armor, and add to defense value
//   //           //                                                                 splice(where to place or add, remove(y 1, n 0), replace with 'what to add')
//   //           this.items.splice(index, 1);                                        // Remove item at index from items[array]
//   //           this.armorWorn.push(item);                                          // Add item to armorWorn[array]
//   //           this.defense += item.defense;                                       // Add item defense stat to character defense stat
//   //           this.strength += item.power;                                        // Add item power stat to character strength stat
//   //           console.log(`${this.name} is now wearing ${itemName},`);
//   //           console.log(`and increased your defense by ${item.defense},`);
//   //           console.log(`and increased your strength by ${item.power}.`);
//   //       } else if (item instanceof Gold) {                                      // Allow for gold amount to add to amount value
//   //           currentGold = this.getItemByName('gold');                           // set currentGold to equal items['gold'] amount
//   //           if (currentGold) {                                                  // not sure if this statement is needed
//   //             this.currentGold.amount += thisItem.amount;                              // add gold taken to items['gold'.amount]
//   //           } else {
//   //             const newGold = new Gold(amount);
//   //             this.items.push(newGold);
//   //           }
//   //           console.log(`You found ${amount} Pieces of Eight!`);
//   //       } else if (item instanceof Food) {
//   //         console.log(`You put the ${itemName} in your backpack.`);
//   //       }
//   //     }
//   //     let [taken] = roomItems.splice(index, 1);
//   //     this.items.push(taken);
//   //     itemFound = true;
//   //   });
//   //   if (!itemFound) {
//   //     console.log(`There's no ${itemName} here.`);
//   //   }
//   // }

//   dropItem(itemName) {
//     this.items.forEach((item, index) => {
//         if (item.name === itemName) {
//             let dropped = this.items.splice(index, 1);
//             this.currentRoom.items.push(dropped[0]);
//         }
//     })
//   }

//    // should drop all enemy items and add them to room items when enemy dies
//   dropAllItems() {
//  /*   while (this.items.length > 0) {
//       console.log(`The ${this.name} dropped its ${this.items[0].name}.`);
//       let dropped = this.items.splice(0, 1);
//       this.currentRoom.items.push(dropped[0]);
//     } */

//     for (let i = 0; this.items.length > 0; i++) {
//       console.log(`The ${this.name} dropped its ${this.items[0].name}.`);
//       let dropped = this.items.splice(0, 1);
//       this.currentRoom.items.push(dropped[0]);
//     }
//   }

//   die() {
//     this.dropAllItems();
//     console.log(`The ${this.name} died!`);
//     this.currentRoom = null;
//   }
// }

module.exports = {
  Character,
};

// Add gold functionality
