// main file for testing with console.log()'s

const Dragon = require('./dragon');
const EvilDragon = require('./evil-dragon');
const FriendlyDragon = require('./friendly-dragon');

// *************** Phase 1 Create Dragon Class *****************************

// const puff = new Dragon('Puff', 'green');
// // console.log(puff);
// // console.log(puff.breathesFire());

// const toothless = new Dragon('Toothless', 'black');
// // console.log(toothless);
// // console.log(toothless.breathesFire());

// console.log(Dragon.getDragons(puff, toothless)); // should return ['Puff', 'Toothless']

// ************** Phase 2 Create FriendlyDragon Class extends Dragon **************

// const puff = new FriendlyDragon(
//     'Puff',
//     'green',
//     [
//         'live by the sea',
//         'frolick in the autumn mist',
//         'help small children'
//     ],
//     'Jackie Paper'
// );

// console.log(puff);
// console.log(puff.breathesFire());
// puff.hasLifeGoals();
// console.log(puff.helpsPeople());

// const toothless = new FriendlyDragon(
//     'Toothless',
//     'black',
//     [

//         'save the town of Burke',
//         'fly with a kid on his back',
//         'hang out with Vikings'
//     ],
//     'Hiccup'
// );

// console.log(toothless); toothless.hasLifeGoals();
// console.log(toothless.helpsPeople());
// console.log(toothless.breathesFire());

// ********************* Phase 3 Create EvilDragon Class extends Dragon ******************

// const enderDragon = new EvilDragon(
//     'Ender Dragon',
//     'black', [
//         'spit a fireball at Steve',
//         'rule over all the Endermen',
//         'destroy all blocks in its way'
//     ],
//     'Steve'
// );

// console.log(enderDragon);
// enderDragon.dontInviteThemOverForDinner();
// console.log(enderDragon.breathesFire());
// console.log(enderDragon.burnsNemisis());

// const drogon = new EvilDragon(
//     'Drogon',
//     'black-red',
//     [
//         'eat all your livestock',
//         'burn down your castle in Westeros',
//         'burn your father and brother'
//     ],
//     'Night King'
// );

// console.log(drogon);
// drogon.dontInviteThemOverForDinner();
// console.log(drogon.breathesFire());
// console.log(drogon.burnsNemisis());

// ************************** Phase 4 Make all Dragons ***********************


const falkor = new FriendlyDragon(
    'Falkor',
    'white', [
      'save Atreyu from the swamp',
      'save Atreyu from Nothing',
      'scare the local bullies into a dumpster'
    ],
    'Bastian'
  );

  const smaug = new EvilDragon(
    'Smaug',
    'black', [
      'take over your mountain kingdom',
      'steal all your dwarven gold',
      'burn down your floating village'
    ],
    'Dwarf King'
  );

  const allDragons = getDragons(falkor, smaug);
