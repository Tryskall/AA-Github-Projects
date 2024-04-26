// File: 01-01-food.js for Food class extends Item class

// Original File from starter project
const { Item } = require('./01-0-item');

class Food extends Item {
    constructor(name, description, healing) {
        super(name, description);
        this.healing = healing;
    }
};

// class Food extends Item {
//     /* Food(name, description, healing, isFood, room) */
//     constructor(name, description, healing, isFood, room) {
//         /* Item(name, description, room) */
//         super(name, description, room);
//         this.healing = healing;
//         this.isFood = isFood;
//     }
// };

module.exports = {
    Food,
};
