// File armor-specs.js for testing Armor class

const chai = require('chai');
const expect = chai.expect;
const { Armor } = require('../class/01-02-01-armor.js');
const { Equipment } = require('../class/01-02-0-equipment');
const { Item } = require('../class/01-0-item');
const { Player } = require('../class/02-03-01-player.js');
const { Room } = require('../class/03-0-room');
const { Context } = require('mocha');

describe('Armor attributes', () => {
  let ironShield;
  let room;
  let player;

  beforeEach(() => {
    //               Armor(name, description, room, defense, isArmor)
    ironShield = new Armor('Iron Shield', 'A sturdy iron shield', room,  5, true);
    room = new Room(1, "Test Room", "A test room", { e: 3, n: 2, s: 5, w: 4 });
    /*           Player(name, startingRoom) */
    player = new Player("player", "main character", room, [], 10, 100, 1);
  });

  context('ironShield instance', () => {
    it('should have name, description, defense and isArmor attributes', () => {
      expect(ironShield.name).to.equal('Iron Shield');
      expect(ironShield.description).to.equal('A sturdy iron shield');
      expect(ironShield.defense).to.equal(5);
      expect(ironShield.isArmor).to.equal(true);
    });
  });
});
