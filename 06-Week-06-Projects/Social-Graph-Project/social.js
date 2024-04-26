// File social.js

const colors = require('colors');

class User {
  constructor(id, name) {
      this.id = id;
      this.name = name;
      this.follows = new Set();
  }
}

// Implement the SocialNetwork class here
class SocialNetwork {
  constructor() {
    this.users = {};
    this.follows = {};
    this.currentId = 0;
  }

  addUser(name) {
    this.users[this.currentId + 1] = {
      'id': this.currentId + 1,
      'name': name
    }
    this.follows[this.currentId + 1] = new Set();
    this.currentId++;
    return this.currentId;
  }

  getUser(userId) {
    return this.users[userId] || null;
  }

  follow(userId1, userId2) {
    if (this.follows[userId1] && this.users[userId2]) {
      this.follows[userId1].add(userId2);
    } else return false;
    if (this.follows[userId1].has(userId2)) return true;
  }

  getFollows(userId) {
    return this.follows[userId] || new Set();
  }

  getFollowers(userId) {
    let followersSet = new Set();
    let netFollowsArr = Object.entries(this.follows);
    for (const [iterId, followsSet] of netFollowsArr) {
      if (followsSet.has(userId)) followersSet.add(Number(iterId));
    };
    return followersSet;
  }

  getRecommendedFollows(userId, degrees) {
    let queue = [[userId]];
    let visited = new Set();
    let friends = [];
    while (queue.length !== 0) {
      let currentPath = queue.shift();
      let currentNode = currentPath[currentPath.length - 1];
      if (!visited.has(currentNode)) {
        visited.add(currentNode);
        if (currentPath.length > 2 && currentPath.length <= degrees + 2) {
          friends.push(currentNode);
        }
        let neighbors = this.follows[currentNode];
        neighbors.forEach(neighbor => {
          queue.push(currentPath.concat(neighbor));
        });
      }
    }
    return friends;
  }
}

module.exports = {
  User,
  SocialNetwork
};

// console.log(colors.magenta('addUser'));
// const socialNetwork = new SocialNetwork();
// // let user1Id = socialNetwork.addUser('John Doe');
// let user2Id = socialNetwork.addUser('Jane Doe');

// // console.log(colors.green('user1Id: ') + colors.red(user1Id));
// // console.log(colors.green('user2Id: ') + colors.red(user2Id));

// const userId = socialNetwork.addUser('John Doe');
// console.log(colors.green(`User add with ID: `)  + colors.red(`${userId}`));

// console.log(colors.magenta('getUser'));
// user1 = socialNetwork.getUser(1);
// user2 = socialNetwork.getUser(2);
// user3 = socialNetwork.getUser(3);

// console.log(colors.green('user1.name: ') + colors.red(user1.name)); // 'John Doe'
// console.log(colors.green('user2.name: ') + colors.red(user2.name)); // 'Jane Doe'
// console.log(colors.green('user3: ') + colors.red(user3));      // null

// console.log(colors.magenta('follow'));
// socialNetwork.follow(1, 2); // true
// socialNetwork.follow(1, 3); // false, userID 3 does not exist

// const userId3 = socialNetwork.addUser("Jane Smith");
// const userId4 = socialNetwork.addUser("Alice Wonderland");

// socialNetwork.follow(userId1, userId3);
// socialNetwork.follow(userId4, userId3);

// console.log(socialNetwork.getRecommendedFollows(userId1, 1)); // Output: [ 3 ] (Recommended follows for John Doe at degrees 1)
// console.log(socialNetwork.getRecommendedFollows(userId1, 2)); // Output: [ 3 ] (Recommended follows for John Doe at degrees 2)
// console.log(socialNetwork.getRecommendedFollows(userId2, 1)); // Output: [] (No recommended follows for Jane Smith at degrees 1)
// console.log(socialNetwork.getRecommendedFollows(userId2, 2)); // Output: [ 1 ] (Recommended follows for Jane Smith at degrees 2)
