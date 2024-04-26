// File: equipment.js for Equipment class extends Item class

const { Item } = require('./item');

class Equipment extends Item {
    constructor(name, description, armor) {
        super(name, description);
        this.armor = armor;
    }
}

module.exports = {
    Equipment,
};
