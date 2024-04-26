// File: ThingsToDo.md for a List of code to fix and write

1) fix takeItem()
        it is taking more than one item ; take rock : takes gold and rock

2) fix take Gold to add gold to inventory and add amount of gold
        create function to add  Gold to character.currentGold.amount
        print: 'you have picked up 3 pieces of eight'
        print: 'you now have 8 pieces of eight'
        fix Gold readout in inventory to include amount of gold
        write specs to test gold in item specs


        It looks like there is a misunderstanding in your takeItem method when handling gold. Specifically, in the following part of your code:
         else if (item instanceof Gold) {
                const currentGold = this.getItemByName('gold');
        if (currentGold) {
        currentGold.addGold(amount);
        } else {
        const newGold = new Gold(amount);
        this.items.push(newGold);
        }
        console.log(`You found ${amount} Pieces of Eight!`);



3) fix enemy attack
        // it should rest() setTimeout for 5 seconds before attacking

        find a way to type without interuption, maybe a way the message is displayed
            -- in terminal.

4) change current weapon method to change weapon when prompted and not automatically
        add <hold> <weapon> method to change weapons

5) add new weapon attribute for specific enemy
        that will add more damage on certain enemy

6)  let enemy take Armor and automatically wear armor
        let it increase enemy defense and attack attributes
        when enemy dies all loot, equipment and armor returns to room ----- inventory

7)  character-specs.js ln:108
        change this to 'should be able to change weapons with <hold> <weapon>
        add 'should be able to add to Armor with <wear> <armor>
