// File: 02-03-01-player.js for Player class extends Character

// c̶r̶e̶a̶t̶e̶ a̶ P̶l̶a̶y̶e̶r̶ c̶l̶a̶s̶s̶ t̶h̶a̶t̶ e̶x̶t̶e̶n̶d̶s̶ C̶h̶a̶r̶a̶c̶t̶e̶r̶
// i̶m̶p̶l̶e̶m̶e̶n̶t̶ t̶h̶e̶ a̶b̶i̶l̶i̶t̶y̶ f̶o̶r̶ t̶h̶e̶ p̶l̶a̶y̶e̶r̶ t̶o̶ h̶i̶t̶ t̶h̶e̶ e̶n̶e̶m̶y̶ f̶o̶r̶ d̶a̶m̶a̶g̶e̶
// t̶h̶e̶ c̶h̶a̶r̶a̶c̶t̶e̶r̶ s̶h̶o̶u̶l̶d̶ d̶i̶e̶ o̶n̶c̶e̶ t̶h̶e̶i̶r̶ h̶e̶a̶l̶t̶h̶ i̶s̶ a̶t̶ o̶r̶ b̶e̶l̶o̶w̶ 0̶

const colors = require('colors');
// const { Item } = require('./01-0-item');
const { Food } = require('./01-01-food');
const { Equipment } = require('./01-02-0-equipment');
// const { Armor } = require('./01-02-01-armor');
const { Mod } = require('./01-03-0-mod');
const { Weapon } = require('./01-04-weapon');
const { Gold } = require('./01-05-gold');
const { Character } = require('./02-0-character');
const { Enemy } = require('./02-01-enemy');
const { Room } = require('./03-0-room');
const { Item } = require('./01-0-item');


class Player extends Character {
  constructor(name, startingRoom) {
    /* Character(name, description, currentRoom, items = [], strength = 10, health = 100, defense = 1) */
    super(name, "main character", startingRoom);
      /*                     Weapon(name, description, power, defense, isWeapon, room) */
    this.currentWeapon = new Weapon('fists', 'just yer bare hands', 2, 1, true);
      /*                        Equipment(name, description, defense) */
    this.currentEquipment = new Equipment('plainclothes', 'blood stained blue jeans and a dirty white t-shirt', 0);
      /*                    Armor(name, description, defense, isArmor, room) */
    // this.currentArmor = new Armor('pink leather chaps', 'bright, shiny and tight as can be, pink leather chaps', 1, true);
    /*                     Gold(name, description, amount, isCurrency, room) */
    // this.currentGold = new Gold('gold', 'shiny Piece of Eight', 5, true);
    this.items = [];
    // this.armorWorn = [];
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);      // room.js line 64
    if (nextRoom) {
      this.currentRoom = nextRoom;
      nextRoom.printRoom(this);       // room.js line 23
    } else {
      console.log("You cannot move in that direction");
    ;}
  };

  printObject(obj) {
    let objStr = '';
      for (const key in obj) {
        objStr += `+${obj[key]} ${key}`;
      }
      return objStr;
  };

  // printInventory() {
  //   console.clear();
  //   console.log(`weapon: ${this.currentWeapon.name}`);
  //   console.log(`equipment: ${this.currentEquipment.name}`);
  //   console.log(`gold: ${this.gold}`);
  //   console.log('');
  //   if (this.items.length === 0) {
  //     console.log(`${this.name} is not carrying anything else.`);
  //   } else {
  //     console.log(`inventory:`);
  //     for (let i = 0 ; i < this.items.length ; i++) {
  //       let thisItem = this.items[i];
  //       if (thisItem instanceof Food) {
  //         console.log(`  ${thisItem.name} (${thisItem.healing} ` + '<3'.red + ')');
  //       } else if (thisItem instanceof Weapon) {
  //         console.log(`  ${thisItem.name} (${thisItem.power} dmg, ${thisItem.spells} spells)`);
  //       } else if (thisItem instanceof Equipment) {
  //         console.log(`  ${thisItem.name} (${thisItem.defense} def)`);
  //       } else if (thisItem instanceof Mod) {
  //         console.log(`  ${thisItem.name} (${this.printObject(thisItem.effects)})`)
  //       } else {
  //       console.log(`  ${thisItem.name}`);
  //       }
  //     }
  //   };
  // };

    printInventory() {
    console.clear();
    console.log(' ');
    console.log(`At hand:`)
    // if (!this.currentWeapon.spells) {
    //   this.currentWeapon.spells = 0;
    // }
    console.log(`Current Weapon: ${this.currentWeapon.name}, ${this.currentWeapon.description}, power: ${this.currentWeapon.power ?? 0}, defense: ${this.currentWeapon.defense ?? 0}, ${this.currentWeapon.spells ?? 0} spells`);
    console.log(`Current Equipment: ${this.currentEquipment.name}, ${this.currentEquipment.description}, defense: ${this.currentEquipment.defense ?? 0}`);
    // console.log(`Current Armor: ${this.currentArmor.name}, ${this.currenArmor.description}, ${this.currentArmor.defense}`);
    // console.log(`Current Gold: ${this.currentGold.amount}, ${this.currentGold.description}`);
    console.log('');
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything else.`);
    } else {
      console.log(`Backpack:`);
      for (let i = 0 ; i < this.items.length; i++) {
        let thisItem = this.items[i];
        if (thisItem instanceof Food) {
            let redHeart = '<3'.red;
            console.log(`  ${thisItem.name}:  ${redHeart} ${thisItem.healing ?? 0}`);
        } else if (thisItem instanceof Weapon) {
            console.log(`  ${thisItem.name} (${thisItem.power ?? 0} dmg, ${thisItem.defense ?? 0} def, ${thisItem.spells ?? 0} spells)`);
        } else if (thisItem instanceof Equipment) {
            console.log(`  ${thisItem.name} (${thisItem.defense ??= 0} def)`);
        } /* else if (thisItem instanceof Armor) {
            console.log(`  ${thisItem.name} (${thisItem.defense ??= 0} def)`);
        } */ else if (thisItem instanceof Mod) {
            console.log(`  ${thisItem.name} (${this.printObject(thisItem.effects)})`);
        } /* else if (thisItem instanceof Gold) {                                          // Change to currentGold.amount
            console.log(` ${this.goldBag.getGoldAmount()} Pieces of Eight!`);
        } */ else {
        console.log(`  ${thisItem.name}`);
        }
      }
    }
  }

  eatItem(itemName) {
      this.items.forEach((item, index) => {
          if (item.name === itemName) {
            if (item instanceof Food) {
              this.health += item.healing;
              console.log(`The ${item.name} restored ${item.healing ??= 0} health.`)
              this.items.splice(index, 1);
            }
          }
      });
  };

  getItemByName(name) {
      let thisItem;
      this.items.forEach(item => {
          if (item.name === name) thisItem = item;
      })
      return thisItem;
  };

  hit(name) {
    let enemy = this.currentRoom.getEnemyByName(name);                                                  // declare enemy from list of enemies in currentRoom
    if (enemy instanceof Enemy) {                                                                       // check if enemy is Enemy class
      if (enemy.health >= 0) {                                                                          // check if enemy health is greater than 0
        const playerStrength = this.strength ?? 0;                                                      // declare playerStrength to make sure strength is positive number or 0
        const enemyDefense = enemy.defense ?? 0;                                                        // declare enemyDefense to make sure defense is positive number or 0
        const damageTaken = Math.max(0, playerStrength - enemyDefense);                                 // declare damageTaken to with Math.max to ensure positive number

        if (enemy.health <= damageTaken) {
          console.log(`You hit the ${enemy.name} for ${enemy.health} damage`);
          enemy.applyDamage(enemy.health);                                    // character.js line 34    // call applyDamage(damageTaken) to run function
        } else {
          enemy.applyDamage(damageTaken);
          console.log("");                                                                               // add blank line for console readability
          console.log(`You hit the ${enemy.name} for ${damageTaken} damage.`);                            // print hit enemy message in console
          console.log("");                                                                               // add blank line for console readability
          console.log(`${enemy.name} has ${enemy.health} health remaining`);                            // print health message in console
          console.log("");                                                                               // add blank line for console readability
          console.log(`${enemy.name} is recovering from hit!`);                                           // print message of recovery time from hit
          console.log("");                                                                               // add blank line for console readability
        };
        enemy.setPlayer(this);                                                                          // set player as enemy target
        enemy.attackTarget = true;                                                                      // set attackTarget to true to allow enemy to attack
        enemy.act();
      } else {
        console.log("Don't hit the dead enemy! That's just wrong.");
      }
  } else {
    console.log("");
    console.log("You can't hit that.");                                                               // if not enemy, print you cant hit that message
  };
  };

  applyDamage(amount) {
    this.health -= (amount);
    if (this.health <= 0) this.die();
  }

  die() {
    console.log("You are dead!");
    process.exit();
  };

}

//   eatItem(itemName) {
//     this.items.forEach((item, index) => {
//       if (item.name === itemName) {
//         if (item instanceof Food) {
//           this.health += item.healing;
//           console.log(`The ${item.name} restored ${item.healing} health.`)
//           this.items.splice(index, 1);
//         }
//       } else {
//         console.log(`You can not eat the ${itemName}!`)
//       }
//     })
//   }

//   // enaable the ability to chose which items of armor to wear - remove automatic selection from player
//   /* wearItem(itemName) {
//     // Check if the item is in the inventory and isArmor
//     let itemToWear = this.items.find(item => item.name === itemName);

//     if (itemToWear) {
//         // Check if the item is not already worn
//         if (!this.armorWorn.includes(itemToWear)) {
//             if (itemToWear instanceof Armor) {
//                 this.armorWorn.push(itemToWear);
//                 this.defense += itemToWear.defense;
//                 this.strength += itemToWear.power;

//                 console.log(`${this.name} is now wearing ${itemName},`);
//                 console.log(`and increased your defense by ${itemToWear.defense},`);
//                 console.log(`and increased your strength by ${itemToWear.power}.`);
//             } else {
//                 console.log(`${itemName} cannot be worn.`);
//             }
//         } else {
//             console.log(`${this.name} is already wearing ${itemName}.`);
//         }
//     } else {
//         console.log(`${itemName} is not in your inventory.`);
//     }
// } */

//   getItemByName(name) {
//     let thisItem;
//     this.items.forEach(item => {
//         if (item.name === name) thisItem = item;
//     })
//     return thisItem;
//   }



//   die() {
//     console.log("You are dead!");
//     process.exit();
//   }
// }

module.exports = {
  Player,
};
