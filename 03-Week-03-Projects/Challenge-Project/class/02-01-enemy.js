// File: 02-01-enemy.js for Enemy class extends Character

const { Character } = require('./02-0-character');
const { Weapon } = require('./01-04-weapon');


// Original File from starter project
// should have strength, health and defense attributes
class Enemy extends Character {
    constructor(name, description, currentRoom, items, strength, health, defense, fidget, cooldown = 5000, attackTarget) {
        super(name, description, currentRoom, items, strength, health, defense);            // changed from values to parameters 12/21/23 7:42 am
        this.fidget = fidget;
        this.cooldown = cooldown;
        this.attackTarget = attackTarget || false;                                          // changed from null to false and more tests fail... 12/20/23 7am changed to attackTargert || false 12/21/23
    }

    setPlayer(player) {                                                                     // declare setPlayer(player) method to add player to world
        this.player = player;                                                               // set this.player as player for enemy to target
    }

    randomPick(array) {                                                                     // declare randomPick(array) method for ramdomly picking an index
        if (Array.isArray(array) && array.length > 0) {                                     // check if the array is an array
            const randomIndex = Math.floor(Math.random() * array.length);                   // declare randomIndex using Math.floor and Math.random to pick a positive integer from 0 to array.length
            return array[randomIndex];                                                      // return array[randomIndex] for Index of given array
        } else {
            return null;                                                                    // if not array, return null
        };
    };

    // should use randomPick(rooms) to move to new room
    randomMove() {                                                                          // declare randomMove() method with randomPick(array) callback method
        if (this.currentRoom && this.currentRoom.exits) {                                   // added if statement to room and exits are properly initialized  12/21/23 7:46 am
        this.currentRoom = this.randomPick(Object.values(this.currentRoom.exits));          // update currentRoom to equal results of randomPick(currentRoom.roomExits)
        console.log(' ');                                                                   // add blank line for console readability
        console.log(`${this.name} has left the room!`)                                       // set alert() that enemy has left the room
        console.log(' ');                                                                   // add blank line for console readability
        };
    };

    takeRandomItem() {                                                                                  // declare takeRandomItem() for enemy to randomly take items from rooms
        if (this.currentRoom && this.currentRoom.items.length > 0) {                                    // check if enemy is in this room & if there are any items in currentRoom
            const itemNames = this.currentRoom.items.map(item => item.name);                            // declare itemNames for list of item names in currentRoom
            const randomItemName = this.randomPick(itemNames);                                          // added declarartion randomItemName to call randomPick(itemNames) for clarity 12/21/23 8am
            const itemIndex = this.currentRoom.items.findIndex(item => item.name === randomItemName);   // added to change from pop() 12/21/23 8am
            if (itemIndex !== -1) {
                const takenItem = this.currentRoom.items.splice(itemIndex, 1)[0];
                console.log(' ');                                                                       // add blank line for console readability
                console.log(`${this.name} picked up ${takenItem.name}`) ;                               // print enemy has picked up item
                console.log(' ');                                                                       // add blank line for console readability
                this.items.push(takenItem);                                                             // added to properly add item to emeny.items[array] 12/21/23 8am
            } else {
                this.alert('There are no items to scavenge here!');
            }
        };
    };

    enemyFidget() {                                                 // change to enemyFidget() from scratchNose() to include all enemy fidgets 12/20/23 12 noon
        console.log(' ');                                           // add blank line for console readability
        this.alert(`${this.fidget}`);                               // alert that enemy is perfoming its fidget
        console.log(' ');                                           // add blank line for console readability
    };

    alert(message) {                                                                        // declare alert(message) to allert player when enemy has entered or left the currentRoom
        if (this.player && this.player.currentRoom === this.currentRoom) {                  // check if player is in currentRoom
            console.log(message);                                                           // if true, print message to alert player
        }
    };

    attack() {                                                                                              // declare attack method for enemy to attack player
        if (!this.attackTarget) return false;                                                               // check if attackTarget is false and return false to stop attack
        let enemyStrength = this.strength ?? 0;                                                             // declare enemyStrength to ensure positive number or 0
        let playerDefense = this.player.defense ?? 0;                                                       // declare playerDefense to ensure positive number or 0
        let damageTaken = Math.max(0, enemyStrength - playerDefense);                                       // declare damageTaken to calculate enemyStrength - playerDefense
        this.player.applyDamage(damageTaken);                                                               // call applyDamage(damageTaken) on player
        console.log(`\n ${this.name} hits you for ${damageTaken} damage.`);                                 // print enemy attack message to show damage taken
        console.log(' ');                                                                                   // add blank line for console readability
        console.log(`You have ${this.player.health} health remaining.`);                                           // print player remaning health message
        console.log(' ');                                                                                   // add blank line for console readability
    }

    applyDamage(amount) {                                           // declare applyDamage(amount) to calculate damage from attack
        console.clear();                                            // call clear console for readability
        this.health -= amount;                                      // subtract damage amount from enemy health
        if (this.health <= 0) {                                     // check if enemy health is zero or less
            console.log(' ');
            console.log(`${this.name} has 0 health remaining`);
            console.log(' ');
            this.die();                                             // if true, call this.die()
        } else {                                                    // if false,
            this.attackTarget = true;                               // change attackTarget to true to allow enemy to attack player again"
        }
    };

    act() {
        const intervalId = setInterval(() => {                                                          // Use setInterval to repeatedly call the specified function with a fixed time delay
            const randomNum = Math.floor(Math.random() * 10);
            if (this.health <= 0 || (this.player && this.player.currentRoom !== this.currentRoom)) {
                // Stop the interval if health is zero or player is not in the same room
                clearInterval(intervalId);
            } else {
                switch (randomNum) {
                    case 8:
                        this.enemyFidget();
                        break;
                    case 5:
                        this.takeRandomItem();
                        break;
                    case 1:
                        this.randomMove();
                        break;
                    default:
                        this.attackTarget = true;
                        this.attack();
                        break;
                }
            }
        }, this.cooldown);
    }

//     act() {
//         if (this.cooldown === 0) {
//             const randomNum = Math.floor(Math.random() * 10);
//             if (this.health <= 0 || (this.player && this.player.currentRoom !== this.currentRoom)) {
//                 // do nothing
//             }  else {
//                 switch (randomNum) {
//                     case 8:
//                         console.log('act() method called the enemyFidget() method');
//                         this.enemyFidget();                             // change to this.enemyFidget() from scratchNose() 12/20/23 12 noon
//                         break;
//                     case 5:
//                         console.log('act() method called the takeRandomItem() method');
//                         this.takeRandomItem();
//                         break;
//                     case 1:
//                         console.log('act() method called the randomMove() method');
//                         this.randomMove();
//                         break;
//                     default:
//                         console.log('act() method called the attack() method');
//                         this.attackTarget = true;
//                         this.attack();
//                         break;
//                 };
//             };
//             this.act();
//         };
//     };
};

//     // change to enemyFidget() & add enemy.fidget and enemy.fidgetMessage ???
//      scratchNose() {
//         this.cooldown += 3000;
//         this.rest();
//         this.alert(`${this.name} is scratching its nose!`);
//     };
// }

module.exports = {
    Enemy,
};

// Create an Enemy class which performs actions on a cooldown timer
// fill in the appropriate code gaps (look at the test specs) until you see
// --- the goblin scratching its nose every 3 seconds
// impliment the ability for the gobling to move to a different room on a
// --- cooldown timer
// impliment the abilty for the gobling to attack the player back after being hit
// the goblin should attack the player on sight once hit
// all enemy actions should increase the cooldown timer, and the enemy should
// --- not act unless the cooldown is at 0
// the enemy should die when its health is at or below 0
