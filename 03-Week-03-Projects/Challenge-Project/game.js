// File: game.js for initializing game play

const readline = require('readline');

const { Player } = require('./class/02-03-01-player');
const { World } = require('./class/00-world');
const { Gold } = require('./class/01-05-gold');

const worldData = require('./data/world-data');

let player;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printHelp() {
  console.log("Controls:")
  console.log("  Type 'h' for help");
  console.log("  Type 'q' to quit");
  console.log("  Type 'l' to look around");
  console.log("  Type 'insp <item/enemy>' to inspect something");
  console.log("  Type 'i' to check your inventory");
  console.log("  Type 'stats' to get your stats");
  console.log("  Type 'take <item>' to take an item");
  console.log("  Type 'drop <item>' to drop an item");
  console.log("  Type 'eat <item>' to eat a food item");
  console.log("  Type 'hit <enemy>' to attack an enemy");
  console.log("  Type 'n', 's', 'e', 'w', 'u', 'd' to move");
  console.log("");
}


function startGame() {
  console.clear();
  console.log(" ");
  console.log("Welcome to Challenge Project Adventure Game!\n");

  rl.question('Please enter your alternate identity: ', (name) => {
    console.clear();
    console.log(' ');
    console.log(`Hello, ${name}!\n`);

    // Create the world and player
    World.loadWorld(worldData, player);                           // 00-world.js line 56
    player = new Player(name, World.rooms[1]);
    World.setPlayer(player);                                      // 00-world.js line 45

    // Show commands
    printHelp();

    rl.question('\nHit RETURN to start your adventure\n', () => {

      console.clear();
      player.currentRoom.printRoom();

      processCommand();
    });
  });
}

function printStats() {
  console.log(`Health: ${player.health}, Strength: ${player.strength}, Defense: ${player.defense}`);
}

function getThing(name) {
  let thing = null;
  const roomEnemy = player.currentRoom.getEnemyByName(name);
  const roomItem = player.currentRoom.getItemByName(name);
  const roomFriend = player.currentRoom.getFriendByName(name);

  if (roomEnemy) {
    thing = roomEnemy;
  } else if (roomItem) {
    thing = roomItem;
  } else if (roomFriend) {
    thing = roomFriend;
  } else {
    player.items.forEach(item => {
      if (item.name === name) thing = item;
    });
  };

  if (thing) {
    console.log(' ');
    console.log(thing.description);     // getting item.description and undefined
    console.log(' ');
  } else {
    console.log("There's no such thing here.");
  };
};


function processCommand() {                     // add up and down commands for rooms on upper or lower levels

  rl.question('> ', (cmd) => {
    cmd = cmd.toLowerCase();

    if (cmd === 'h') {
      printHelp();                                    // game.js line 18

    } else if (cmd === 'q') {
      rl.close();
      process.exit();

    } else if (cmd === 'l') {
      player.currentRoom.printRoom();                 // 03-0-room.js should print room name, enemies, friends, items and exits

    } else if (cmd.startsWith("insp ")) {             // should print description of thing
      let thingName = cmd.split(" ")[1];

      console.log(getThing(thingName));        // line 66 // getting item.description and undefined
    } else if (cmd === 'i') {
      player.printInventory();                        // 02-03-01-player.js line 83

    } else if (['n', 's', 'e', 'w', 'u', 'd'].indexOf(cmd) >= 0) {
      let direction = cmd;
      player.move(direction);                         // 02-03-01-player.js line 38

    } else if (cmd.startsWith("take ")) {
      let itemName = cmd.split(" ")[1];

      player.takeItem(itemName);                      // 02-0-character.js line 39

    } else if (cmd.startsWith("drop ")) {
      let itemName = cmd.split(" ")[1];

      player.dropItem(itemName);                      // 02-0-character.js line 61

    } else if (cmd.startsWith("eat ")) {
      let itemName = cmd.split(" ")[1];

      player.eatItem(itemName);                       // 02-03-01-player.js line 121

    } else if (cmd.startsWith("hit ")) {
      let enemyName = cmd.split(" ")[1];

      player.hit(enemyName);                          // 02-03-01-player.js line 141

    } else if (cmd === "stats") {
      printStats();                                   // game.js line 61

    } else if (cmd.startsWith("mod ")) {
      let weaponName = cmd.split(" ")[1];
      let modName = cmd.split(" ")[2];
      let weaponsmith = player.currentRoom.getFriendByName("weaponsmith");        // change  to weaponsmith lines: 143, 147, 155, world-data.js line 314
      let weapon = player.getItemByName(weaponName);
      let mod = player.getItemByName(modName);

      if (weapon != undefined && mod != undefined && weaponsmith) {
        let ask = weaponsmith.askModify(weapon, mod);
        if (ask > 0) {

          rl.question('> ', (cmd) => {
            cmd = cmd.toLowerCase();

            if (cmd === "y") {
              weaponsmith.modify(weapon, mod, ask);
            }

            processCommand();
          });
        };
      }

    } else {
      console.log("Invalid command. Type 'h' for help.");
    }

    processCommand();
  });
}

// let player;

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function printHelp() {
//   console.log("Controls:")
//   console.log("  Type 'h' for help");
//   console.log("  Type 'q' to quit");
//   console.log("  Type 'l' to look around");
//   console.log("  Type 'insp <item||enemy>' to inspect something");
//   console.log("  Type 'i' to check your inventory");
//   console.log("  Type 'stats' to get your stats");
//   console.log("  Type 'take <item>' to take an item");
//   console.log("  Type 'drop <item>' to drop an item");
//   console.log("  Type 'eat <item>' to eat a food item");
//   console.log("  Type 'hit <enemy>' to attack an enemy");
//   console.log("  Type 'wear <item>' to put item on");
//   console.log("  Type 'mod <item> spell' to add mod to item");
//   console.log("  Type 'n', 's', 'e', 'w' to move");
//   console.log("");
// }


// function startGame() {
//   console.clear();
//   console.log("Welcome to App Academy Adventure!\n");

//   rl.question('Please enter your name: ', (name) => {
//     console.clear();
//     console.log(`Hello, ${name}!\n`);

//     // Create the world and player
//     player = new Player(name, World.rooms[1]);
//     World.loadWorld(worldData, player);
//     World.setPlayer(player);

//     // Show commands
//     printHelp();

//     rl.question('\nHit RETURN to start your adventure\n', () => {

//       console.clear();
//       player.currentRoom.printRoom();

//       processCommand();
//     });
//   });
// }

// function printStats() {
//   console.log(`Health: ${player.health}, Strength: ${player.strength}, Defense: ${player.defense}`);
// }

// function getThing(name) {
//   let thing = null;
//   const roomEnemy = player.currentRoom.getEnemyByName(name);
//   const roomItem = player.currentRoom.getItemByName(name);
//   const roomFriend = player.currentRoom.getFriendByName(name);

//   if (roomEnemy) {
//     thing = roomEnemy;
//   } else if (roomItem) {
//     thing = roomItem;
//   } else if (roomFriend) {
//     thing = roomFriend;
//   } else {
//     player.items.forEach(item => {
//       if (item.name === name) thing = item;
//     });
//   };

//   if (thing) {
//     return thing.description;
//   } else {
//     console.log("There's no such thing here.");
//   }
// }


// function processCommand() {

//   rl.question('> ', (cmd) => {
//     cmd = cmd.toLowerCase();

//     if (cmd === 'h') {
//       printHelp();

//     } else if (cmd === 'q') {
//       rl.close();
//       process.exit();

//     } else if (cmd === 'l') {
//       player.currentRoom.printRoom();

//     } else if (cmd.startsWith("insp ")) {
//       let thingName = cmd.split(" ")[1];

//       console.log(getThing(thingName));
//     } else if (cmd === 'i') {
//       player.printInventory();

//     } else if (['n', 's', 'e', 'w'].indexOf(cmd) >= 0) {
//       let direction = cmd;
//       player.move(direction);

//     } else if (cmd.startsWith("take ")) {
//       let itemName = cmd.split(" ")[1];

//       player.takeItem(itemName);

//     } else if (cmd.startsWith("drop ")) {
//       let itemName = cmd.split(" ")[1];

//       player.dropItem(itemName);

//     } else if (cmd.startsWith("eat ")) {
//       let itemName = cmd.split(" ")[1];

//       player.eatItem(itemName);

//     } else if (cmd.startsWith("hit ")) {
//       let enemyName = cmd.split(" ")[1];

//       player.hit(enemyName);

//     } /*b else if (cmd.startsWith('wear')) {
//       let itemName = cmd.split(" ")[1];

//       player.wearItem(itemName);                        // add wear(itemName) to player class
//     } */

//       else if (cmd === "stats") {
//       printStats();

//     } else if (cmd.startsWith("mod ")) {
//       let weaponName = cmd.split(" ")[1];
//       let modName = cmd.split(" ")[2];
//       let weaponSmith = player.currentRoom.getFriendByName("weaponSmith");
//       let weapon = player.getItemByName(weaponName);      // change weapon to item to allow for armor
//       let mod = player.getItemByName(modName);

//       if (weapon != undefined && mod != undefined && weaponSmith) {
//         let ask = weaponSmith.askModify(weapon, mod);
//         if (ask > 0) {

//           rl.question('> Do you want to continue? (y/n) ', (cmd) => {
//             cmd = cmd.toLowerCase();

//             if (cmd === "y") {
//               weaponSmith.modify(weapon, mod, ask);
//             }

//             processCommand();
//           });
//         };
//       }

//     } else {
//       console.log("Invalid command. Type 'h' for help.");
//     }

//     processCommand();
//   });
// }

startGame();
