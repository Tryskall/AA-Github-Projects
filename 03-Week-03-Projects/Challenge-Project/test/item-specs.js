// File: item-specs.js for testing Item, Food, Equipment, Armor, Mod, Weapon classes

const chai = require('chai');
const expect = chai.expect;
const {Player} = require("../class/02-03-01-player.js");
const {Room} = require("../class/03-0-room.js");
const {Item} = require("../class/01-0-item.js");
const {Food} = require("../class/01-01-food.js");

describe ('Item', () => {
  let item;
  let room;
  let player;

  beforeEach(() => {
    item = new Item("pet-rock", "a pet-rock with happy face painted on it.");
    room = new Room("Test Room", "A test room");
    player = new Player("player", room);
  });

  it('should have name and description attributes', () => {
    expect(item.name).to.equal("pet-rock");
    expect(item.description).to.equal("a pet-rock with happy face painted on it.");
  });

  it('can be retrieved from player inventory by name', () => {
    player.items.push(item);
    expect(player.items.length).to.equal(1);
    expect(player.getItemByName("pet-rock")).to.equal(item);
  });

  it('can be retrieved from a room by name', () => {
    room.items.push(item);
    expect(room.items.length).to.equal(1);
    expect(room.getItemByName("pet-rock")).to.equal(item);
  });

  it('can be picked up from a room by a player', () => {
    room.items.push(item);
    expect(room.items.length).to.equal(1);
    expect(player.items.length).to.equal(0);
    player.takeItem("pet-rock");
    expect(room.items.length).to.equal(0);
    expect(player.items.length).to.equal(1);
    expect(player.getItemByName("pet-rock")).to.equal(item);
  });

  it('can be dropped into a room by a player', () => {
    player.items.push(item);
    expect(room.items.length).to.equal(0);
    expect(player.items.length).to.equal(1);
    player.dropItem("pet-rock");
    expect(room.items.length).to.equal(1);
    expect(player.items.length).to.equal(0);
    expect(room.getItemByName("pet-rock")).to.equal(item);
  });
});


describe ('Food', () => {
  let food;
  let item;
  let player;

  beforeEach(() => {
    food = new Food("sandwich", "a delicious sandwich");
    item = new Item("pet-rock", "a rock with happy face painted on it.");
    player = new Player("player", room);
  })

  it('should have name and description attributes', () => {
    expect(food.name).to.equal("sandwich");
    expect(food.description).to.equal("a delicious sandwich");
  });

  it('should be an instance of Item and Food', () => {
    expect(food instanceof Item).to.be.true;
    expect(food instanceof Food).to.be.true;
    expect(item instanceof Item).to.be.true;
    expect(item instanceof Food).to.be.false;
  });

  it('can be eaten by a player', () => {
    player.items.push(food);
    expect(player.items.length).to.equal(1);
    player.eatItem("sandwich");
    expect(player.items.length).to.equal(0);
  });

  it('cannot be eaten by a player if not food', () => {
    player.items.push(item);
    expect(player.items.length).to.equal(1);
    player.eatItem("pet-rock");
    expect(player.items.length).to.equal(1);
  });
});
