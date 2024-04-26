// File: 03-0-room.js for Room class

// Original File from starter project
class Room {
  constructor(id, name, description, exits) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.exits = exits || {};
    this.items = [];
    this.enemies = [];
  }

  getEnemies() {
    const { World } = require('./00-world');
    return World.getEnemiesInRoom(this);
  }

  getFriends() {
    const { World } = require('./00-world');
    return World.getFriendsInRoom(this);
  }

  printRoom() {
    console.clear();
    console.log("");
    console.log('room: ' + this.id);
    console.log("");
    console.log(this.name);
    console.log("");
    console.log(this.description);
    console.log("");
    console.log(this.getExitsString());
    if (this.getEnemies().length > 0) {
      console.log(`Enemies: ${this.getEnemies()
        .map(enemy => enemy.name)
        .join(", ")}`);
      // this.getEnemies().forEach(enemy => enemy.act());
    }
    if (this.items.length > 0) {
      console.log(`Items: ${this.items.map(item => item.name).join(", ")}`);
    }
    if (this.getFriends().length > 0) {
      console.log(`Friends: ${this.getFriends().map(friend => friend.name).join(", ")}`);
      console.log("");
      this.getFriends().forEach(friend => friend.act());
    }
    console.log("");
  }

  getExits() {
    return Object.keys(this.exits);
  }

  getExitsString() {
    return `Exits: ${this.getExits().join(", ")}`;
  }

  connectRooms(direction, connectingRoom) {
    // Check if the direction and connecting room are valid
    if (['n', 's', 'e', 'w', 'u', 'd'].indexOf(direction) < 0 || !connectingRoom) {
      throw new Error("Error: Invalid room connection");
    }
    this.exits[direction] = connectingRoom;
  }

  getRoomInDirection(direction) {
    return this.exits[direction];
  }

  getItemByName(name) {
      let thisItem;
      this.items.forEach(item => {
          if (item.name === name) thisItem = item;
      });
      return thisItem;
  };

  // DRY
  getEnemyByName(name) {
    return this.getEnemies().find(enemy => enemy.name === name);
  }
  // getEnemyByName(name) {
  //     let thisEnemy;
  //     let enemies = this.getEnemies();
  //     enemies.forEach(enemy => {
  //         if (enemy.name === name) {
  //           thisEnemy = enemy;
  //         }
  //     });
  //     return thisEnemy;
  // }

  // DRY
  getFriendByName(name) {
    const friends = this.getFriends();
    return friends.find(friend => friend.name === name) || null;
}

  //   getFriendByName(name) {
  //     let thisFriend;
  //     let friends = this.getFriends();
  //     friends.forEach(friend => {
  //         if (friend.name === name) thisFriend = friend;
  //     })
  //     return thisFriend;
  // }



// class Room {
//     // createRoom(id, roomName, description, exits)   is this the same constructor ?
//     constructor(id, name, description, exits) {
//       this.id = id;
//       this.name = name;
//       this.description = description;
//       this.exits = {};
//       this.items = [];
//     }

//     getEnemies() {
//       const { World } = require('./00-world');
//       return World.getEnemiesInRoom(this);
//     }

//     getFriends() {
//       const { World } = require('./00-world');
//       return World.getFriendsInRoom(this);
//     }

//     printRoom() {
//       console.clear();
//       console.log("");
//       console.log(this.name);
//       console.log("");
//       console.log(this.description);
//       console.log("");
//       console.log(this.getExitsString());
//       if (this.getEnemies().length > 0) {
//         console.log(`Enemies: ${this.getEnemies().map(enemy => enemy.name).join(", ")}`);
//         this.getEnemies().forEach(enemy => enemy.act());   // maybe change this to performRandomAct()
//       }
//       if (this.items.length > 0) {
//         console.log(`Items: ${this.items.map(item => item.name).join(", ")}`);
//       }
//       if (this.getFriends().length > 0) {
//         console.log(`Friends: ${this.getFriends().map(friend => friend.name).join(", ")}`);
//         console.log("");
//         this.getFriends().forEach(friend => friend.act());   // maybe change this to performRandomAct()
//       }                                                      // -- to allow friend to pick-up items ???
//       console.log("");
//     }

//     getExits() {
//       return Object.keys(this.exits);
//     }

//     getExitsString() {
//       return `Exits: ${this.getExits().join(", ")}`;
//     }

//     connectRooms(direction, connectingRoom) {
//       // Check if the direction and connecting room are valid
//       if (['n', 's', 'e', 'w'].indexOf(direction) < 0 || !connectingRoom) {
//         throw new Error("Error: Invalid room connection");
//       }
//       this.exits[direction] = connectingRoom;
//     }

//     getRoomInDirection(direction) {
//       return this.exits[direction];
//     }

//     getItemByName(name) {
//         let thisItem;
//         this.items.forEach(item => {
//             if (item.name === name) thisItem = item;
//         })
//         return thisItem;
//     }

//     getEnemyByName(name) {
//         let thisEnemy;
//         let enemies = this.getEnemies();
//         enemies.forEach(enemy => {
//             if (enemy.name === name) thisEnemy = enemy;
//         })
//         return thisEnemy;
//     }

//       getFriendByName(name) {
//         let thisFriend;
//         let friends = this.getFriends();
//         friends.forEach(friend => {
//             if (friend.name === name) thisFriend = friend;
//         })
//         return thisFriend;
//     }
//   }
};

  module.exports = {
    Room,
  };
