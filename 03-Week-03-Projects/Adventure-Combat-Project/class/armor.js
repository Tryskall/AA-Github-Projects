// File: armor.js for Armor class extends Equipment class

class Armor extends Equipment {
    constructor(name, description, damageRecuded) {
        super(name, description);
            this.damageRecuded = damageRecuded
    }

}

// create Armor class extends Equipment
// Armor will decrease attackDamage value by (%amount)
// Can be found in room inventory and picked up <take> <item>
// can be worn <wear> <item>
