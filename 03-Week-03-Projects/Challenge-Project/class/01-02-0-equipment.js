// File: 01-02-0-equipment.js for Equipment class extends Item

const { Item } = require('./01-0-item');

// Original File from starter project
// class Equipment extends Item {
//     constructor(name, description, armor) {
//         super(name, description);
//         this.armor = armor;
//     }
// }

class Equipment extends Item {
    constructor(name, description, room, defense) {
        // Item(name, description, room)
        super(name, description);
        this.room = room;
        this.defense = defense;
    }
}

module.exports = {
    Equipment,
};
