// // File: world-data.js for creating world objects

const { Weapon } = require("../class/01-04-weapon");
const { Equipment } = require("../class/01-02-0-equipment");
const { Item } = require("../class/01-0-item");
const { Gold } = require('../class/01-05-gold');
const { Mod } = require('../class/01-03-0-mod');
const { Character } = require("../class/02-0-character.js");
const { Enemy } = require("../class/02-01-enemy.js");
const { Player } = require("../class/02-03-01-player.js");



// File: world-data.js for creating world objects
// Original File from starter project

// const { Weapon } = require("../class/weapon");
// const { Equipment } = require("../class/equipment");
// const { Item } = require("../class/item");

module.exports = {
  rooms: [
    {
      id: 1,
      name: "Crossroad",
      description: "You are standing at a crossroad. To the north, east, south and west you see dark rooms, waiting to be explored.",
      exits: {n: 2, e: 3, w: 4, s: 5}
    },
    {
      id: 2,
      name: "Northern Point",
      description: "You are standing at the northern most room. To the south, you see the Crossroad.",
      exits: {s: 1}
    },
    {
      id: 3,
      name: "Eastern Point",
      description: "You are standing at the east point of a crossroad. To the west, you see the Crossroad.",
      exits: {w: 1}
    },
    {
      id: 4,
      name: "Western Point",
      description: "You are standing at the west point of a crossroad. To the east, you see the Crossroad.",
      exits: {e: 1}
    },
    {
      id: 5,
      name: "Southern Point",
      description: "You are standing at the south point of a crossroad. To the north, you see the Crossroad. There is a road to the south that appears to go on forever in darkness.",
      exits: {n: 1, s: 6}
    },
    {
      id: 6,
      name: "The Road less Traveled",
      description: "A Corridor to the Realms of the Ghost Fields.",
      exits: {n: 5, s: 7}
    },
    {
      id: 7,
      name: "The Road less Traveled",
      description: "This corridor appears to go on forever.",
      exits: {n: 6, s: 8}
    }, {
      id: 8,
      name: "The Road less Traveled",
      description: "The end of the corridor turns into a dirt trail splitting fields of screatching Ghosts.",
      exits: {n: 7, s: 9, e: 10}
    }, {
      id: 9,
      name: "Eerie Darkness",
      description: "This eerie dirt trail ends in darkness so dark it can't possibly go any further.",
      exits: {n: 8}
    }, {
      id: 10,
      name: "Cemetery of All that is Unholy.",
      description: "The trail ends in the middle of grave stones. There is movement all around, yet nothing is moving!",
      exits: {e: 11, w: 8}
    }, {
      id: 11,
      name: "The Middle of the cemetery",
      description: "No place to go but down or back the way you came, or maybe you could go through the Bronze Door",
      exits: {e: 12, w: 10}
    }, {
      id: 12,
      name: "Crypt of Doom: The other way out.",
      description: "A heavy Bronze Door that leads to the Crypt of Doom.",
      exits: {w: 11, d: 13}
    }, {
      id: 13,
      name: "Crypt of Doom: don't stay too long.",
      description: "The walls are filled with the bones of a million lost souls!",
      exits: {u: 2}
    }
  ],
  items: [
    // Item
    {
      name: "glassJar",
      description: "A dirty jar without a lid",
      room: 3,
      isItem: true
    },
    // Food
    {
      name: "sandwich",
      description: "A hot pastrami and peanut butter sandwich",
      room: 2,
      healing: 50,
      isFood: true
    },
    // Weapon
     {
      name: "rock",
      description: "Just a simple rock",
      room: 1,
      power: 3,
      defense: 1,
      isWeapon: true
    },
    {
      name: "dagger",
      description: "A dull old dagger",
      room: 1,
      power: 5,
      defense: 1,
      isWeapon: true
    },
    // Gold /* Gold(name, description, room, amount, isCurrency) */
    {
      name: "gold",
      description: "a shiny Piece of Eight",
      room: 2,
      amount: 1,
      isCurrency: true
    },
    {
      name: "gold",
      description: "a shiny Piece of Eight",
      room: 3,
      amount: 2,
      isCurrency: true
    },
    {
      name: "gold",
      description: "a shiny Piece of Eight",
      room: 4,
      amount: 1,
      isCurrency: true
    },
    {
      name: "gold",
      description: "a shiny Piece of Eight",
      room: 5,
      amount: 1,
      isCurrency: true
    },
    {
      name: "gold",
      description: "a shiny Piece of Eight",
      room: 6,
      amount: 3,
      isCurrency: true
    },
    {
      name: "gold",
      description: "a shiny Piece of Eight",
      room: 7,
      amount: 1,
      isCurrency: true
    },
    {
      name: "gold",
      description: "a shiny Piece of Eight",
      room: 8,
      amount: 1,
      isCurrency: true
    },
    {
      name: "gold",
      description: "a shiny Piece of Eight",
      room: 9,
      amount: 3,
      isCurrency: true
    },
    {
      name: "gold",
      description: "a shiny Piece of Eight",
      room: 10,
      amount: 2,
      isCurrency: true
    },
    {
      name: "gold",
      description: "a shiny Piece of Eight",
      room: 11,
      amount: 2,
      isCurrency: true
    },
    {
      name: "gold",
      description: "a shiny Piece of Eight",
      room: 12,
      amount: 1,
      isCurrency: true
    },
    {
      name: "gold",
      description: "a shiny Piece of Eight",
      room: 13,
      amount: 1,
      isCurrency: true
    },
    // Mod
    {
      name: "mica",
      description: "A handful of glittery mica",
      room: 12,
      effects: {spells: 1},
      isMod: true
    }
    // Equipment
  ],
  enemies: [
    {
      name: "goblin",
      description: "a mean-looking goblin",
      room: 3,
      items: [new Weapon('acid', 'skin melting puss', 3, 0, true)],
      strength: 10,
      health: 50,
      fidget: "The goblin scratches its nose."
    },
    {
      name: "slime",
      description: "a goopy green ball with big eyes",
      room: 5,
      items: [],
      strength: 7,
      health: 70,
      fidget: "The slime bobs gently."
    },
    {
      name: "reaper",
      description: "an eerily tall skeletal figure, shrouded in a dark hooded robe, weilding a scythe.",
      room: 10,
      items: [new Weapon("long pole scythe", "a sharp and shiny blade for reaping souls.",  5, 2, true, null)],
      strength: 12,
      health: 75,
      fidget: "The scarecrow glares at you with its painted black eyes."

    }
  ],
  friends: [
    {
      name: "weaponSmith",
      description: "a Dirty young man with skills to kills.",
      room: 12,
      items: [new Equipment("ever burning torch", "a magical torch that always stays lit.", 2)],
      greeting: "Need any weapons or armor modified? I can do it for a price..."
    }
  ]
}

//   function createRoom(id, roomName, description, exits) {
//     return {
//       id: id,
//       roomName: roomName,
//       description: description,
//       exits: exits
//     }
//   }

//   function createGold(name, description, amount, isCurrency, room) {
//     return {
//       name: name,
//       description: description,
//       amount: amount,
//       isCurrency: isCurrency,
//       room: room
//     }
//   }

//   function createFood(name, description, healing, isFood, room) {
//     return {
//       name: name,
//       description: description,
//       healing: healing,
//       isFood: isFood,
//       room: room
//     }
//   }

//     function createArmor(name, description, defense, isArmor, room) {
//     return {
//       name: name,
//       description: description,
//       defense: defense,
//       isArmor: isArmor,
//       room: room
//     }
//   }

//     function createMod(name, description, power, effects, isMod, room) {
//     return {
//       name: name,
//       description: description,
//       power: power,
//       effects: effects,
//       isMod: isMod,
//       room: room
//     }
//   }

//   function createWeapon(name, description, power, defense, isWeapon, room) {
//     return {
//       name: name,
//       description: description,
//       power: power,
//       defense: defense,
//       isWeapon: isWeapon,
//       room: room
//     }
//   }

//   function createEnemy(name, description, items, strength, health, fidget, isEnemy, room) {
//     return {
//     name: name,
//     description: description,
//     items: items,
//     strength: strength,
//     health: health,
//     fidget: fidget,
//     isEnemy: isEnemy,
//     room: room
//     }
//   }

//   function createFriend(name, description, items, greeting, isFriend, room) {
//     return {
//       name: name,
//       description: description,
//       items: items,
//       greeting: greeting,
//       isFriend: isFriend,
//       room: room
//     }
//   }

// module.exports = {

//   rooms: [
//     /* Room(id, roomName, description, exits) */
//     createRoom(1, "Crossroad", "You are standing at a crossroad. To the north, east, south and west you see empty space, waiting to be filled.", {n: 2, e: 3, w: 4, s: 5}),
//     createRoom(2, "Northern Point", "You are standing at the north point of a crossroad. To the south, you see an empty intersection.", {s: 1}),
//     createRoom(3, "Eastern Point", "You are standing at the east point of a crossroad. To the west, you see an empty intersection.", {w: 1}),
//     createRoom(4, "Western Point", "You are standing at the west point of a crossroad. To the east, you see an empty intersection.", {e: 1}),
//     createRoom(5, "Southern Point", "You are standing at the south point of a crossroad. To the north, you see an empty intersection.", {n: 1, s: 6}),
//     createRoom(6, "The Road less Traveled", "A Corridor to the Realms of the Ghost Fields.", {n: 2, s: 7}),
//     createRoom(7, "The Road less Traveled", "This corridor goes on forever.", {n: 6, s: 8}),
//     createRoom(8, "The Road less Traveled", "The end of the corridor turns into a dirt trail splitting fields of screatching Ghosts.", {n: 7, s: 9, e: 10}),
//     createRoom(9, "The Road less Traveled", "The dirt trail is dark and eerie.", {n: 8}),
//     createRoom(10, "Cemetery of All that is Unholy.", "The trail ends in the middle of grave stones. There is movement all around, yet nothing is moving!", {e: 11, w: 8}),
//     createRoom(11, "The Middle of the cemetery", "No place to go but down or back the way you came.", {e: 12, w: 10}),
//     createRoom(12, "Crypt of Doom: The other way out.", "A heavy bronze door that leads to the Crypt of Doom.", {w: 11, e: 13}),
//     createRoom(13, "Crypt of Doom: don't stay too long.", "The walls are filled with the bones of a million lost souls!", {w: 12})
//   ],

//   items: [
//     /*    Gold(name, description, amount, isCurrency, room) */
    // createGold("gold", "a shiny Piece of Eight", 1, true, 2),
    // createGold("gold", "a shiny Piece of Eight", 2, true, 3),
    // createGold("gold", "a shiny Piece of Eight", 1, true, 4),
    // createGold("gold", "a shiny Piece of Eight", 1, true, 5),
    // createGold("gold", "a shiny Piece of Eight", 3, true, 6),
    // createGold("gold", "a shiny Piece of Eight", 1, true, 7),
    // createGold("gold", "a shiny Piece of Eight", 1, true, 8),
    // createGold("gold", "a shiny Piece of Eight", 3, true, 9),
    // createGold("gold", "a shiny Piece of Eight", 2, true, 10),
    // createGold("gold", "a shiny Piece of Eight", 2, true, 11),
    // createGold("gold", "a shiny Piece of Eight", 1, true, 12),
    // createGold("gold", "a shiny Piece of Eight", 1, true, 13),
//     /*    Food(name, description, healing, isFood, room) */
//     createFood("sandwich", "A hot pastrami and peanut butter sandwich", 5, true, 2),
//     /*    Armor(name, description, defense, isArmor, room) */
//     createArmor("chainmail", "Strong steel chain mail vest to protect your soul from damage.", 3, true, 9),
//     createArmor("shieldoflight", "a shield made of dim red light, takes the brunt of damage.", 4, true, 4),
//     createArmor("leather-chaps", "hot day-glo pink, leopard spotted assless leather chaps", 2, true, 5),
//     /*    Weapon(name, description, power, defense, isWeapon, room) */
//     createWeapon("dagger", "a dull, blood stained dagger", 3, 1, true, 1),
//     createWeapon("pet-rock", "a rock with happy face painted on it.", 1, 1, true, 2),
//     /*    Mod(name, description, power, defense, effects, isMod, room) */
//     createMod("magic orbs", "A tiny bag of Magical Orbs.", 1, 0, {spells: 3}, true, 12)
//   ],

//   enemies: [
//     /*    Enemy(name, description, strength, health, fidget, items, isEnemy, room) */
//     createEnemy("goblin", "a mean-looking goblin", 7, 50, "The goblin scratches its grotesque nose.",
//     /*               Weapon(name, description, power, defense, isWeapon, room) */
//                 [new Weapon("fork", "a bent old fork", 1, 1, true, null)], true, 3),
//     createEnemy("slime", "a goopy green ball with big eyes", 3, 45, "The slime bobs gently as it oozes its way towards you.", [], true, 3),
//     createEnemy("reaper", "He's here to take your soul.", 2, 70, "The Reaper fades in and out of the darkness.",
//     /*               Weapon(name, description, power, defense, isWeapon, room) */
//                 [new Weapon("long pole scythe", "a sharp and shiny blade for reaping souls.",  5, 2, true, null)], true, 12)
//   ],

//   friends: [
//     /*    Friend(name, description, items, greeting, isFriend, room) */
//     createFriend("weaponSmith", "a Dirty young man with skills to kills.",
//                  [new Equipment("ever burning torch", "a magical torch that always stays lit.", 2)],
//                  "Need any weapons modified? I can do it for a price...", true, 1)
//   ]
// }
