// File: 00-world.js for compiling game world

// Original File from starter project

const { Item } = require('./01-0-item');
const { Food } = require('./01-01-food');
/* const { Equipment } = require('./01-02-0-equipment'); */
/* const { Armor } = require('./01-02-01-armor'); */
const { Mod } = require('./01-03-0-mod');
const { Weapon } = require('./01-04-weapon');
const { Gold } = require('./01-05-gold');
const { Enemy } = require('./02-01-enemy');
const { Friend } = require('./02-02-friend');
const { Room } = require('./03-0-room');

class World {

  static rooms = {};
  static enemies = [];
  static friends = [];


  static setPlayer(player) {
    World.enemies.forEach(enemy => enemy && enemy.setPlayer(player));
    World.friends.forEach(friend => friend && friend.setPlayer(player));
  }

  static startGame() {
    World.enemies.forEach(enemy => enemy && enemy.act());
  }

  static getEnemiesInRoom(room) {
    return World.enemies.filter(enemy => enemy.currentRoom === room);
  }

  static getFriendsInRoom(room) {
    return World.friends.filter(friend => friend.currentRoom === room);
  }

  static loadWorld(worldData) {

    const roomList = worldData.rooms;
    const itemList = worldData.items;
    const enemyList = worldData.enemies;
    const friendList = worldData.friends;

    // Instantiate new room objects
    // Get name, id and description from room data
    for (let i = 0; i < roomList.length; i++) {
        let roomData = roomList[i];
        let newRoom = new Room(roomData.id, roomData.name, roomData.description);
        World.rooms[roomData.id] = newRoom;
    }

    // Connect rooms by ID
    for (let i = 0; i < roomList.length; i++) {
      let roomID = roomList[i].id;
      let roomConnections = roomList[i].exits;
      for (const direction in roomConnections) {
        let connectedRoomID = roomConnections[direction];
        let roomToConnect = World.rooms[connectedRoomID];
        World.rooms[roomID].connectRooms(direction, roomToConnect);
      }
    }

    // Instantiate items
    for (let i = 0; i < itemList.length; i++) {
      let itemData = itemList[i];
      let newItem;
      if (itemData.isFood) {
        newItem = new Food(itemData.name, itemData.description, itemData.healing);
      } else if (itemData.isWeapon) {
          newItem = new Weapon(itemData.name, itemData.description, itemData.power, itemData.defense);
      } else if (itemData.isMod) {
          newItem = new Mod(itemData.name, itemData.description, itemData.power, itemData.defense, itemData.effects);
      } else if (itemData.isCurrency) {
          /*            Gold(name, description, room, amount, isCurrency) */
          newItem = new Gold(itemData.name, itemData.description, itemData.amount);
      }else {
        newItem = new Item(itemData.name, itemData.description, itemData.currentRoom);
      }
      let itemRoom = World.rooms[itemData.room];
      itemRoom.items.push(newItem);
   }

    // Instantiate enemies
    for (let i = 0 ; i < enemyList.length ; i++) {

      let enemyData = enemyList[i];
      let enemyRoom = World.rooms[enemyData.room];
      let newEnemy = new Enemy(enemyData.name, enemyData.description, enemyRoom, enemyData.items, enemyData.strength, enemyData.health, enemyData.defense, enemyData.fidget);
      World.enemies.push(newEnemy);
    }

    // Instantiate friends
    for (let i = 0; i < friendList.length; i++) {
      let friendData = friendList[i];
      let friendRoom = World.rooms[friendData.room];
      let newFriend = new Friend(friendData.name, friendData.description, friendRoom, friendData.items, friendData.greeting);
      World.friends.push(newFriend);
    }

  }
}

module.exports = {
  World,
};

// const { Item } = require('./01-0-item');
// const { Food } = require('./01-01-food');
// /* const { Equipment } = require('./01-02-0-equipment'); */
// /* const { Armor } = require('./01-02-01-armor'); */
// const { Mod } = require('./01-03-0-mod');
// const { Weapon } = require('./01-04-weapon');
// /* const { Gold } = require('./01-05-gold'); */
// const { Enemy } = require('./02-01-enemy');
// const { Friend } = require('./02-02-friend');
// const { Room } = require('./03-0-room');

// class World {

//   static rooms = {};
//   static enemies = [];
//   static friends = [];

//   // Original Function from starter project
//   static setPlayer(player) {
//     for (let i = 0; i < World.enemies.length; i++) {
//       if (World.enemies[i]) {
//         World.enemies[i].setPlayer(player);
//       }
//       if (World.friends[i]) {
//         World.friends[i].setPlayer(player);
//       }
//     }
//   }

//   // Changed from Starter project to better reflect friends[array]
//   // static setPlayer(player) {
//   //   for (const enemy of World.enemies) {
//   //     if (enemy) {
//   //       enemy.setPlayer(player);
//   //     }
//   //   }
//   //   for (const friend of World.friends) {
//   //     if (friend) {
//   //       friend.setPlayer(player);
//   //     }
//   //   }
//   // }

//   // Original Function from starter project
//   static startGame() {
//     for (let i = 0; i < World.enemies.length; i++) {
//       if (World.enemies[i]) {
//         World.enemies[i].rest();
//       }
//     }
//   }

//   // Changed to better reflect enemies[array]
//   // static startGame() {
//   //   for (const enemy of World.enemies) {
//   //     if (enemy) {
//   //       enemy.rest();
//   //     }
//   //   }
//   // }

//   static getEnemiesInRoom(room) {
//     return World.enemies.filter(enemy => enemy.currentRoom === room);
//   }

//   static getFriendsInRoom(room) {
//     return World.friends.filter(friend => friend.currentRoom === room);
//   }

//   static loadWorld(worldData) {

//     const roomList = worldData.rooms;
//     const itemList = worldData.items;
//     const enemyList = worldData.enemies;
//     const friendList = worldData.friends;

//     // Instantiate new room objects
//     // Get name, id and description from room data
//     for (let i = 0; i < roomList.length; i++) {
//         let roomData = roomList[i];
//         let newRoom = new Room(roomData.name, roomData.description);
//         World.rooms[roomData.id] = newRoom;
//     }

//     // Connect rooms by ID
//     for (let i = 0; i < roomList.length; i++) {
//       let roomID = roomList[i].id;
//       let roomConnections = roomList[i].exits;
//       for (const direction in roomConnections) {
//         let connectedRoomID = roomConnections[direction];
//         let roomToConnect = World.rooms[connectedRoomID];
//         World.rooms[roomID].connectRooms(direction, roomToConnect);
//       }
//     }
// // Original for Loop from starter project
//         // Instantiate items
//         for (let i = 0; i < itemList.length; i++) {
//           let itemData = itemList[i];
//           let newItem;
//           if (itemData.isFood) {
//             newItem = new Food(itemData.name, itemData.description, itemData.healing);
//           } else if (itemData.isWeapon) {
//             newItem = new Weapon(itemData.name, itemData.description, itemData.power);
//           } else if (itemData.isMod) {
//             newItem = new Mod(itemData.name, itemData.description, itemData.effects);
//           } else {
//             newItem = new Item(itemData.name, itemData.description);
//           }
//           let itemRoom = World.rooms[itemData.room];
//           itemRoom.items.push(newItem);
//        }

//   //  Changed to Add Aromor and Gold classes
//   //   // Instantiate items
//   //   for (let i = 0; i < itemList.length; i++) {
//   //     let itemData = itemList[i];
//   //     let newItem;
//   //     if (itemData.isFood) {
//   //       //            Food(name, description, healing, isFood, room)
//   //       newItem = new Food(itemData.name, itemData.description, itemData.healing, itemData.isFood, World.rooms[itemData.room]);
//   //     } /* else if (itemData.isArmor) {
//   //       //              Armor(name, description, defense, isArmor, room)
//   //         newItem = new Armor(itemData.name, itemData.description, itemData.defense, itemData.isArmor, World.rooms[itemData.room]);
//   //     } */ else if (itemData.isMod) {
//   //       //              Mod(name, description, power, defense, effect, isMod, room)
//   //         newItem = new Mod(itemData.name, itemData.description, itemData.power, itemData.effects, itemData.isMod, World.rooms[itemData.room]);
//   //     } else if (itemData.isWeapon) {
//   //       //              Weapon(name, description, power, defense, isWeapon, room)
//   //         newItem = new Weapon(itemData.name, itemData.description, itemData.power, itemData.defense , itemData.isWeapon, World.rooms[itemData.room]);
//   //     } /* else if (itemData.isCurrency) {
//   //       //            Gold(name, description, amount, isCurrency, room)
//   //       newItem = new Gold(itemData.name, itemData.description, itemData.isCurrency, itemData.amount);
//   //     } */ else {
//   //         newItem = new Item(itemData.name, itemData.description);
//   //     }
//   //     let itemRoom = World.rooms[itemData.room];
//   //     itemRoom.items.push(newItem);
//   //  }

//     // Instantiate enemies
//     for (let i = 0 ; i < enemyList.length ; i++) {

//       let enemyData = enemyList[i];
//       let enemyRoom = World.rooms[enemyData.room];
//       /*                 Enemy(name, description, strength, health, fidget, items, isEnemy, room) */
//       let newEnemy = new Enemy(enemyData.name, enemyData.description, enemyData.strength,  enemyData.health, enemyData.fidget, enemyData.items, enemyData.isEnemy, enemyRoom);
//       World.enemies.push(newEnemy);
//     }

//     // Instantiate friends
//     for (let i = 0; i < friendList.length; i++) {
//       let friendData = friendList[i];
//       let friendRoom = World.rooms[friendData.room];
//       /*                  Friend(name, description, items, greeting, isFriend, room) */
//       let newFriend = new Friend(friendData.name, friendData.description, friendData.items, friendData.greeting, friendData.isFriend, friendRoom);
//       World.friends.push(newFriend);
//     }

//   }
// }

// module.exports = {
//   World,
// };
