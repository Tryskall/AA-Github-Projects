// File: 01-05-gold.js for Gold class

const { Item } = require('./01-0-item');

class Gold extends Item {
    /* Gold(name, description, room, amount, isCurrency) */
    constructor(name, description, room, amount, isCurrency) {
    /*   Item(name, description, room) */
        super(name, description, room);
        this.amount = amount;
        this.isCurrency = isCurrency;
    }
}

module.exports = {
    Gold,
};

// Fix this class
// Add goldSatchel for carrying gold
// create function to add the totalGold --- if (takenItem === gold) amount += amount -- add to amount, do not add to items
// make sure the inventory shows total gold and not gold as individual items
