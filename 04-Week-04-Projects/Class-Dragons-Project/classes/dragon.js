// class dragon


class Dragon {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    breathesFire() {
        return `${this.name} breathes fire everywhere! BURN!!!!`;
    }
    static getDragons(...dragons) {
        const dragonNames = dragons.map(dragon => dragon.name);
        return dragonNames;
    }
}

module.exports = Dragon;

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
