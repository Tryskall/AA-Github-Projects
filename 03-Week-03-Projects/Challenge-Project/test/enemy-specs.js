// File: enemy-specs.js for testing Enemy class

const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const { World } = require("../class/00-world.js");
const { Item } = require("../class/01-0-item.js");
const { Food } = require("../class/01-01-food.js");
const { Armor } = require("../class/01-02-01-armor.js");
const { Weapon } = require("../class/01-04-weapon.js");
// const { Gold } = require("../class/01-05-gold.js");
const { Character } = require("../class/02-0-character.js");
const { Enemy } = require("../class/02-01-enemy.js");
const { Player } = require("../class/02-03-01-player.js");
const { Room } = require("../class/03-0-room.js");

describe('Enemy: Atributes', () => {
  let room;
  let enemy;

  beforeEach(() => {
    room = new Room(1, "Test Room", "A test room", { e: 3, n: 2, s: 5, w: 4 });
    /*          Enemy(name, description, room, items, strength, health, defense, fidget, cooldown, attackTarget) */
    enemy = new Enemy('Test Enemy', 'a test enemy', room, items = [], 10, 100, 1, 'scratches its nose', cooldown = 3000);
  });

  it('enemy should be an instance of Character, but not of Player', () => {
    expect(enemy instanceof Character).to.be.true;
    expect(enemy instanceof Player).to.be.false;
    expect(enemy instanceof Enemy).to.be.true;
  });

  it('enemy should have name and description attributes', () => {
    expect(enemy.name).to.equal('Test Enemy');
    expect(enemy.description).to.equal('a test enemy');
  });

  it('enemy should have zero items', () => {
    expect(enemy.items.length).to.equal(0);
  })

  it('enemy should have strength, health and defense attributes', () => {
    expect(enemy.strength).to.equal(10);
    expect(enemy.health).to.equal(100);
    expect(enemy.defense).to.equal(1);
  });

  it('enemy should have fidget "scratches its nose"', () => {
    expect(enemy.fidget).to.equal("scratches its nose");
  });

  it('enemy should have cooldown = 3000 and update when prompted', () => {
    expect(enemy.cooldown).to.equal(3000);
    enemy.cooldown += 1500;
    expect(enemy.cooldown).to.equal(4500);
  });
});

describe('Enemy Methods', () => {
  let room;
  let room2;
  let rock;
  let dagger;
  let sandwich;
  let enemy;
  let player;
  let character;
  // let gold;
  let chainmail;
  let fidget;

  beforeEach(function() {
    /*         Room(id, name, description, exits) */
    room = new Room(1, "Test Room", "A test room", { e: 4, n: 2, s: 5, w: 3 });
    room2 = new Room(2, 'Test Room 2', 'an empty room with no exits', { e: 0, n: 0, s: 0, w: 0});
    /*         Weapon(name, description, room, power, defense, isWeapon) */
    rock = new Weapon("rock", "just a simple rock", room, 1, 0, true);
    dagger = new Weapon("dagger", "a dull dagger", room, 5, 1, true);
    /*             Food(name, description, healing) */
    sandwich = new Food("sandwich", "a delicious looking sandwich", 5);
    /*          Enemy(name, description, room, items, strength, health, defense, fidget, cooldown, attackTarget) */
    predator = new Enemy('enemy', 'an ordinary character', room, [], 10, 100, 1, 'smiles eerily', 5000, false);
    /*           Player(name, startingRoom) */
    player = new Player("player", "main character", room, [], 10, 100, 1);
    /*              Character(name, description, currentRoom, items = [], strength = 10, health = 100, defense = 1) */
    character = new Character('Character', 'an ordinary character', room, [], 10, 100, 1);
    // gold = new Gold(3);
    /*              Armor(name, description, damageReduced) */
    chainmail = new Armor('chainmail', 'sterling silver armor', 3);
    fidget = 'predator picks its butt and smells it with facination!';
    World.enemies.push(predator);
    World.friends.push(character);
    predator.items.push(rock);
    room.items.push(dagger);
    room.items.push(sandwich);
    character.items.push(rock);
  });

  afterEach(() => {
    // Reset any state that might have been modified during the tests
    World.enemies = [];
    World.friends = [];
    // Reset other state if needed
  });


  describe('randomPick(array) method', () => {
    context('when picking from a room with 4 exits', () => {
      it('should return one valid index[value] from the array', () => {
        const roomExits = Object.values(room.exits);
        const randomRoomResult = predator.randomPick(roomExits);
        expect(roomExits).to.not.be.null;
        expect(roomExits).to.include(randomRoomResult);
      });
    });

    context('when picking an item in an empty room,', () => {
      it('should return null', () => {
        const randomRoomResult = predator.randomPick(Object.values(room2.items));
        expect(randomRoomResult).to.be.null;
      });
    });
  });

  describe('randomMove() method', () => {
    it('should move the enemy to a random room', () => {
      const initialRoom = predator.currentRoom;
      predator.randomMove();
      expect(predator.currentRoom).to.not.equal(initialRoom);
    });
      // context('randomMove() method', () => {
  //   it('should move to a new room', () => {
  //     let westRoom = new Room(3, "West Room", "A room to the west of testRoom", {e: 1});
  //     room.connectRooms('w', westRoom);
  //     expect(predator.currentRoom).to.equal(room);
  //     enemy.randomMove();
  //     expect(predator.currentRoom).to.equal(westRoom);
  //     expect(predator.cooldown).above(0);
  //   });
  // });

    it('should update cooldown', () => {
      const initialCooldown = predator.cooldown;
      predator.randomMove();
      expect(predator.cooldown).to.equal(initialCooldown);
    });
  });

  describe('takeRandomItem() method', () => {
    context('when picking from a room with one or more items', () => {
      it('should randomly remove an item from room.items and add it to enemy.items', () => {
        predator.items = [];
        predator.currentRoom = room;
        const initialEnemyItemCount = predator.items.length;
        const initialRoomItemCount = room.items.length;
        predator.takeRandomItem();
        expect(room.items.length).to.equal(initialRoomItemCount - 1);
        expect(predator.items.length).to.equal(initialEnemyItemCount + 1);
      });
    });
  });

  describe('attack() method', () => {
    context('when attackTarget is false', () => {
      it('should not attack player', () => {
        predator.attackTarget = false;
        predator.attack(player);
        expect(predator.attack()).to.equal(false);
      });
    });

    context('when player attacks enemy', () => {
      it('enemy should lose health when damage is applied', () => {
          expect(predator.health).to.equal(100);
          predator.applyDamage(10);
          expect(predator.health).to.equal(90);
      });
    });
  });

  context('die() method', () => {
    it('should drop all held items and have currentRoom set to null when dead', () => {
      room.items = [];
      expect(character.currentRoom).to.equal(room);
      expect(room.items.length).to.equal(0);
      character.die();
      expect(character.currentRoom).to.equal(null);
      expect(room.items.length).to.equal(1);
      expect(room.items[0]).to.equal(rock);
    });

    it('should die when damage brings health to 0 or less', () => {
      room.items = [];
      character.defense = 0;
      expect(character.currentRoom).to.equal(room);
      expect(character.health).to.equal(100);
      character.applyDamage(100);
      expect(character.health).to.equal(0);
      expect(character.currentRoom).to.equal(null);
      expect(room.items.length).to.equal(1);
      expect(room.items[0]).to.equal(rock);
    });
  });
});
