// File: 01-02-01-armor for Armor class extends Equipment

const { Equipment } = require('./01-02-0-equipment');
// const { Item } = require('./01-0-item');

// Original File from starter Project
// class Armor extends Equipment {
//     constructor(name, description, damageReduced) {
//         super(name, description);
//             this.damageReduced = damageReduced
//         }
// }

class Armor extends Equipment {
    /*    Armor(name, description, room, defense, isArmor) */
    constructor(name, description, room, defense, isArmor) {
        /* Equipment(name, description, defense) */
        super(name, description, room, defense);
        this.isArmor = isArmor;
        // this.mod = [];
    }

    /* applyMod(mod) {
        // Apply the effects of the mod to the armor
        for (const effect in mod.effects) {
            // this.power += (effect === 'power') ? mod.effects[effect] : 0;
            this.defense += (effect === 'defense') ? mod.effects[effect] : 0;
        }
        this.mods.push(mod);
    } */

}


module.exports = {
    Armor
};

// Changed damageReduced to defense
// Added isArmor
// create Armor class extends Equipment
// Armor will decrease attackDamage value by (defense)
// Can be found in room inventory and picked up <take> <item>
// can be worn <wear> <item>
