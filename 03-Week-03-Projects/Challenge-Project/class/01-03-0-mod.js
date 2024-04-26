// File: 01-03-0-mod.js for Mod class extends Item

const { Item } = require('./01-0-item');

class Mod extends Item {
    /*      Mod(name, description, room, power, defense, effects, isMod) */
    constructor(name, description, room, power, defense, effects, isMod) {
    /*   Item(name, description, room) */
        super(name, description, room);
        this.power = power;
        this.defense = defense;
        this.effects = effects;
        this.isMod = isMod;
    }
}

module.exports = {
    Mod,
};

// Added power
// Added defense
// Added isMod

// Origninal File from starter Project
// class Mod extends Item {
//     constructor(name, description, power, effects, isMod) {
//         super(name, description);
//         this.power = power;
//         this.effects = effects;
//         this.isMod = isMod;
//     }
// }
