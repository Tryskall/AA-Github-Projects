// File: friend-specs.js for testing Friend class

const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const { Player } = require('../class/02-03-01-player');
const { Room } = require('../class/03-0-room');
const { Weapon } = require('../class/01-04-weapon');
const { Mod } = require('../class/01-03-0-mod');
const { Friend } = require('../class/02-02-friend');


describe('Friend attributes', () => {
    let friend;
    let player;
    let room;
    let weapon;
    let mod;


    beforeEach(() => {
        room =  new Room("Test Room", "A test room");
        player = new Player('Kat', room);
        friend = new Friend('friend', 'a guy', room, [], 'hi');
        friend.setPlayer(player);
        weapon = new Weapon('dagger', 'shiny', 1);
        mod = new Mod('mica', 'shinier', {spells: 1});
        player.items.push(weapon);
        player.items.push(mod);
    });

    it ('should have a name, description, room, and greeting', () => {
        expect(friend.name).to.equal("friend");
        expect(friend.description).to.equal("a guy");
        expect(friend.currentRoom).to.equal(room);
        expect(friend.greeting).to.equal('hi');
    });

    it ('should recognize the current player', () => {
        expect(friend.player).to.exist;
    });

    // it ('should offer a mod & return cost when askModify() is called with a weapon and mod item', () => {
    //     expect(friend.askModify(weapon, mod)).to.equal(2);
    // });          FIX THIS

    // it ('should decline a mod & return 0 when askModify() is called without appropriate items', () => {
    //     mod = new Mod('mica', 'shinier', {spells: 5});
    //     expect(friend.askModify(weapon, mod)).to.equal(0);
    // });          FIX THIS
});


describe('Friend Methods', () => {
    let room;
    let player;
    let friend;
    let weapon;
    let mod;

    beforeEach(() => {
        // Room(id, roomName, description, exits)
        room =  new Room("Test Room", "A test room");

        // Player(name, startingRoom) Character(name, description, currentRoom, items = [], strength = 10, health = 100, defense = 1)
        player = new Player('Kat', 'main character', room, [gold = 5]);

        //           Friend(name, description, room, items, greeting)
        friend = new Friend('weaponSmith', 'a guy', room, [], 'hi');
        friend.setPlayer(player);

        // Weapon(name, description, room, power, defense, isWeapon)
        weapon = new Weapon('dagger', 'shiny', null, 1, 1, true);

        //        Mod(name, description, room, power, defense, effects, isMod)
        mod = new Mod('mica', 'shinier', 2, 3, 1, { spells: 1 }, true);
        player.items.push(weapon);
        player.items.push(mod);

        friend.modify(weapon, mod, 2);
    });

    describe('act() method', () => {
        it('should print a greeting when act() is called', () => {
            const originalConsoleLog = console.log;
            let consoleOutput = '';
            console.log = (output) => {
            consoleOutput += output + '\n';
            };
            friend.act();
            console.log = originalConsoleLog;
            assert.include(consoleOutput, `The ${friend.name} says, "${friend.greeting}"`);
        });

        it('should prompt player to modify weapon or armor in the console output', () => {
            const originalConsoleLog = console.log;
            let consoleOutput = '';
            console.log = (output) => {
                consoleOutput += output + '\n';
            };
            friend.act();
            console.log = originalConsoleLog;
            assert.include(consoleOutput, "Type 'mod <item> <mod>' to modify a weapon or armor.");
        });
    });

    describe('askModify() method', () => {
        context('if player has 5 gold and mod in nventory', () => {
            it ('should prompt to bind mod to weapon or armor for 5 gold', () => {
                const weapon = new Weapon('sword', 'a shard long blade', 10, 2, true);
                /*              Mod(name, description, room, power, defense, effects, isMod) */
                const mod = new Mod('Sharpness', 'Increase damage', { power: 3 });
                const originalConsoleLog = console.log;
                let consoleOutput = '';
                console.log = (output) => {
                    consoleOutput += output + '\n';
                };
                const cost = friend.askModify(weapon, mod);
                console.log = originalConsoleLog;
                assert.include(consoleOutput, `"I can bind your ${mod.name} to your ${weapon.name} for 5 gold. Sound good?" (y/n)`);
                assert.equal(cost, 5, 'Cost should be 5 gold');
            });


        });
    });


// it ('should alter the weapon description when modify() is called', () => {
//         expect(weapon.description).to.equal('shiny, modified with mica');
//     });


    // it ('should subtract the player gold when modify() is called', () => {
    //     expect(player.gold).to.equal(0);
    // });

    // it ('should make the player drop the mod item when modify() is called', () => {
    //     expect(player.items.length).to.equal(1);
    // });

});
