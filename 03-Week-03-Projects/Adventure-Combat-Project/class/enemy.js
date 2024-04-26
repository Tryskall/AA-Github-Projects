// File enemy.js for Enemy class extends Character class

// Create an Enemy class which performs actions on a cooldown timer
// fill in the appropriate code gaps (look at the test specs) until you see
// --- the goblin scratching its nose every 3 seconds
// impliment the ability for the gobling to move to a different room on a
// --- cooldown timer
// impliment the abilty for the gobling to attack the player back after being hit
// the goblin should attach the player on sight once hit
// all enemy actions should increase the cooldown timer, and the enemy should
// --- not act unless the cooldown is at 0
// the enemy should die when its health is at or below 0

const { Character } = require('./character');


class Enemy extends Character {
    constructor(name, description, currentRoom, items, strength, health, fidget, cooldown = 3000, attackTarget) {
        super(name, description, currentRoom, items, strength = 10, health = 100);
        this.fidget = fidget;
        this.cooldown = cooldown;
        this.attackTarget = null;
    }

    setPlayer(player) {
        this.player = player;
    }

    randomRoom(rooms) {
        return this.currentRoom.exits[rooms[rooms.length * Math.random() << 0]];
    };

    randomMove() {
        let roomOptions = this.currentRoom.exits;
        let keys = Object.keys(roomOptions);
        let randomRoom = roomOptions[keys[ keys.length * Math.random() << 0]];
        this.currentRoom = randomRoom;
        this.cooldown += 3000;
        this.act();
    };

    takeSandwich() {
        let items = this.currentRoom.items;
        let keys = Object.keys(items);
        let randomItem = items[keys[ keys.length * Math.random() << 0]];
        this.takeItem(randomItem.name);
        console.log(` ${this.name} took the ${randomItem.name}!`);
        this.cooldown += 1500;
        this.act();
    };

    alert(message) {
        if (this.player && this.player.currentRoom === this.currentRoom) {
            console.log(message);
            this.act();
        }
    };

    rest() {
        const resetCoolDown = () => {
            this.cooldown = 0;
            this.act();
        };
        setTimeout(resetCoolDown.bind(this), this.cooldown);
    };

    attack() {
        if (this.attackTarget === null) return null;
        this.attackTarget.applyDamage(this.strength);
        console.log(` ${this.name} hits you for ${this.strength} damage.`);
        this.cooldown += 3000;
        this.act();
    }

    applyDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.die();
        } else {
            this.attackTarget = this.player;
            this.act();
        }
    };

    act() {
        const randomNum = Math.floor(Math.random() * 5);
        if (this.health <= 0 || (this.player && this.player.currentRoom !== this.currentRoom)) {
            // do nothing
        } else if (this.cooldown > 0) {
            this.rest();
        } else if (this.attackTarget) {
            this.attack();
        } else {
            if (randomNum > 2) {
                this.scratchNose();
            } else if (this.currentRoom.items.length > 0) {
                this.takeSandwich();
            } else if (randomNum === 1) {
                this.attackTarget = this.player;
                this.act();
            } else {
                this.randomMove();
            }
        }
    };

     scratchNose() {
        this.cooldown += 3000;
        this.alert(`${this.enemy} is scratching its nose!`);
    };
}

module.exports = {
    Enemy,
};
