// File: character-specs.js for testing character class attributes and methods


const chai = require('chai');
const expect = chai.expect;
const { Item } = require('../class/01-0-item');
const { Food } = require('../class/01-01-food');
const { Equipment } = require('../class/01-02-0-equipment');
const { Armor } = require('../class/01-02-01-armor');
const { Mod } = require('../class/01-03-0-mod');
const { Weapon } = require('../class/01-04-weapon');
// const { Gold } = require('../class/01-05-gold');
const { Character } = require('../class/02-0-character');
const { Enemy } = require('../class/02-01-enemy');
const { Player } = require('../class/02-03-01-player');
const { Room } = require('../class/03-0-room');
const { Context } = require('mocha');

describe('Character Attributes', () => {
  let character;
  let room;
  let item;
  let weapon;
  let equipment;
  let armor;
  let mod;
  let food;
  // let gold;

  beforeEach(() => {
    //         Room(id, roomName, description, exits)
    room = new Room(1, 'Test Room', 'A test room', {e: 2, n: 3, s: 4, w: 5});
    //         item(name, description, room)
    item = new Item('rock', 'just a simple rock', room);
    //           Weapon(name, description, room, power, defense, isWeapon)
    weapon = new Weapon('sword', 'a sharp sword', 10, 2, true);
    //              Equipment(name, description, room, defense)
    equipment = new Equipment('backpack', 'a sturdy backpack', 5);
    //          Armor(name, description, room, defense, isArmor)
    armor = new Armor('steel armor', room, 'strong steel armor', 4, true);
    //        Mod(name, description, room, power, effect, isMod)
    mod = new Mod('power boost', 'a temporary power boost', room, 3, true);
    //         Food(name, description, room, healing, isFood)
    food = new Food('apple', 'a juicy red apple', room, 5, true);
    //         Gold(name, description, room, amount, isCurrency)
    // gold = new Gold('gold', 'shiny Piece(s) of Eight', room, 5, true);
    //              Character(name, description, currentRoom, items = [], strength = 10, health = 100, defense = 1)
    character = new Character('Player', 'the main character', room);
  });

  it('should have name, description, and currentRoom attributes', () => {
    expect(character.name).to.equal('Player');
    expect(character.description).to.equal('the main character');
    expect(character.currentRoom).to.equal(room);
  });

  it('should have default strength, health, and defense attributes',() => {
    expect(character.strength).to.equal(10);
    expect(character.health).to.equal(100);
    expect(character.defense).to.equal(1);
  });

  it('should have items array to hold inventory', () => {
    expect(character.items).to.be.an('array');
    expect(character.items).to.be.empty;
  });

  it('should have default currentWeapon, currentEquipment, and currentArmor attributes', () => {
    expect(character.currentWeapon.name).to.equal('fists');
    expect(character.currentEquipment.name).to.equal('plainclothes');
    // expect(character.currentArmor.name).to.equal('steel armor');
    // expect(character.currentGold.name).to.equal('gold');
    // expect(character.currentGold.amount).to.equal(5);  FIX THIS
  });

  it('should not be an instance of Enemy or Player', () => {
    expect(character instanceof Player).to.be.false;
    expect(character instanceof Enemy).to.be.false;
  });
});

describe ('Character Methods', () => {
  let character;
  let room;
  let item;

  beforeEach(() => {
    room =  new Room("Test Room", "A test room");
    item = new Item("rock", "just a simple rock");
    /*              Character(name, description, currentRoom, items = [], strength = 10, health = 100, defense = 1) */
    character = new Character('Character', 'an ordinary character', room, [], 10, 100, 1);
    character.items.push(item);
  });

  afterEach(() => {
    character.items = [];
  });

  context('applyDamage() method', () => {
    it('should lose health when damage is applied and defense equals 0', () => {
      expect(character.health).to.equal(100);
      character.defense = 0;
      character.applyDamage(10);
      expect(character.health).to.equal(90);
    });
    it('should lose less health when damage is applied and defense equals 3', () => {
      expect(character.health).to.equal(100);
      character.defense = 3;
      character.applyDamage(10);
      expect(character.health).to.equal(93);
    });
  });

  context('takeItem() method', () => {
    it('should remove item from room and add to character', () => {
      character.items = [];
      character.takeItem(item);
      expect(item).to.include(character.items);
      expect(room.items).to.be.empty;
    });
  });

  context('dropItem() method', () => {
    it('should remove item from character and add to room', () => {
      character.dropItem('rock');
      expect(character.items).to.be.empty;
      expect(room.items).to.include(item);
    });
  });

  context('die() method', () => {
    it('should drop all items and set character.currentRoom to null when dead', () => {
      expect(character.currentRoom).to.equal(room);
      expect(room.items.length).to.equal(0);
      character.die();
      expect(character.currentRoom).to.equal(null);
      expect(room.items.length).to.equal(1);
      expect(room.items).to.deep.include(item);
    });
  });
});

  // change this to 'should be able to change weapons with <hold> <weapon>
  // ----  add 'should be able to add to Armor with <wear> <armor>
  // it('should equip better weapon, equipment, and armor when taking items', () => {
  //   const betterWeapon = new Weapon('greatsword', 'a powerful greatsword', 15);
  //   const betterEquipment = new Equipment('rucksack', 'a spacious rucksack', 8);
  //   const betterArmor = new Armor('dragon scale armor', 'impenetrable dragon scale armor', 15);

  //   room.items.push(betterWeapon, betterEquipment, betterArmor);

  //   character.takeItem('greatsword');
  //   expect(character.currentWeapon).to.equal(betterWeapon);

  //   character.takeItem('rucksack');
  //   expect(character.currentEquipment).to.equal(betterEquipment);

  //   character.takeItem('dragon scale armor');
  //   expect(character.currentArmor).to.equal(betterArmor);
  // });

  // it('should increase gold when taking gold items', () => {
  //   room.items.push(gold);
  //   character.takeItem('gold');
  //   expect(character.gold).to.equal(15);
  // });

  // it('should print inventory correctly', () => {
  //   room.items.push(weapon, equipment, armor, mod, food);
  //   player.takeItem('sword');
  //   player.takeItem('backpack');
  //   player.takeItem('steel armor');
  //   player.takeItem('speed boost');
  //   player.takeItem('apple');

  //   const expectedOutput = [
  //     'Weapon: greatsword (15 dmg, 0 spells)',
  //     'Equipment: rucksack (a spacious rucksack)',
  //     'Armor: dragon scale armor (impenetrable dragon scale armor, defense: 15)',
  //     'Mod: speed boost (a temporary speed boost)',
  //     'Food: apple (5 <3)',
  //   ].join('\n');
  //   const printedInventory = player.printInventory();
  //   expect(printedInventory).to.equal(expectedOutput);
  // });
