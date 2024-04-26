/*

Fix the function `adequateWaterTracker`. `adequateWaterTracker` should return
true if ALL the the weeks in the calendar array having more days in the week
that you drank water than you didn't.

For example, in this week, [0, 0, 3, 1, 0, 4, 0], each day represents how many
cups of water you drank that day. In this example, there were only 3 days where
you drank at least one cup of water.

A calendar is represented by multiple weeks,
[[0, 0, 3, 1, 0, 4, 0], [1, 2, 1, 2, 1, 3, 1]].

If you drank water for at least 4 days of water for every week in the calendar,
then return true. Otherwise, return false.

*/

function adequateWaterTracker(calendar) {             // declare function adequateWaterTracker(calendar)
  let noWater = 0;                                    // declare variable noWater to equal 0
  let water = 0;                                      // declare variable water to equal 0
  let prevRow = true;                                 // declare variable prevRow to equal 0 to take on results of each subMatrix
  for (let i = 0; i < calendar.length; i++) {         // iterate through array of subArrays
    const week = calendar[i];                         // declare variable week to equal each week of the calendar
    for (let j = 0; j < week.length; j++) {           // iterate through each week for each day
      const day = calendar[i][j];                     // declare variable day to equal each day of each week
      if (day === 0) {                                // check if the amount of water drank equal 0
        noWater++;                                    // if true, add to the noWater count
      } else {                                        // if false, add to the water count
        water++;
      };
    };
    if (noWater > water) {                            // check if the noWater count is greater than the water count
      prevRow = false;                                // if true, update prevRow to false
      break;                                          // if true, stop the iteration
    };
    noWater = 0;                                      // if not stopped, reset noWater to equal 0
    water = 0;                                        // if not stopped, reset water to equal 0
  };
  return prevRow;                                     // return the results of prevRow
};

// const adequateWaterTracker = (calendar) => calendar.every(week => week.filter((day) => day >= 1).length >= 4 );
// declare variable as function to equal calendar, use .every method to iterate through array, use .filter to
// -- iterate through days of week subArray, check if each day is nore than 1 and more than 4 days return true, return true.

const calendar1 = [
  [0, 0, 3, 1, 0, 4, 0],
  [1, 2, 1, 2, 1, 3, 1],
];

console.log(adequateWaterTracker(calendar1)); // false

const calendar2 = [
  [1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 1],
];

console.log(adequateWaterTracker(calendar2)); // false

const calendar3 = [
  [1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0],
];

console.log(adequateWaterTracker(calendar3)); // true
