// File: 01-04-weapon.js for Weapon class extends Item

const { Item } = require('./01-0-item');

// Original File from starter Project
// class Weapon extends Item {
//     constructor(name, description, power) {
//         super(name, description);
//         this.power = power;
//         this.spells = 0;
//     }
// }

class Weapon extends Item {
    /*   Weapon(name, description, room, power, defense, isWeapon) */
    constructor(name, description, room, power, defense, isWeapon) {
    /*   Item(name, description, room) */
        super(name, description, room);
        this.power = power;
        this.defense = defense;
        this.isWeapon = isWeapon;
        // this.mods = [];
    }

   applyMod(mod) {
        // Apply the effects of the mod to the weapon
        for (const effect in mod.effects) {
            this.power += (effect === 'power') ? mod.effects[effect] : 0;
            this.defense += (effect === 'defense') ? mod.effects[effect] : 0;
        }
        this.mods.push(mod);
    }
}

module.exports = {
    Weapon,
};

// Added applyMod(mod) to apply the effects of mod on weapon
// Removed this.spells = 0 or add spells class
