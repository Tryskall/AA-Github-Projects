/******************************** CONSTANTS *********************************/
const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/
// helper function to print ingredients
function printIngredients(pieType, recipe) {
  let combMsg = `Combining ingredients for ${pieType}: `;
  combMsg +=  recipe.map(ingredient => `${ingredient.name}`).join(', ');
  return combMsg;
}

// helper function to bake pies
function bakePies(pieType, pieQuantity, recipe) {
  for (let i = 0; i < pieQuantity; i++) {
    console.log(printIngredients(pieType, recipe))
    console.log(`Baked pie ${i + 1}!`);
  }
}

// helper function to calculare cost per pie
function calculateCostPerPie(recipe) {
  const costOfPie = recipe.reduce((prev, current) => {
    const ingredientCost = current.cost;
    return prev + Number(ingredientCost.toFixed(2));
}, recipe[0].cost.);
  return costOfPie;
}

// helper function to calculate total revenue
function calculateTotalRevenue(costOfPie, pieQuantity, profitMargin) {
  const totalCost = costOfPie * pieQuantity;
  const revenue = totalCost * profitMargin;
  return revenue;
}

// self-responsible function
function bakeAndSellPies(pieType, pieQuantity, profitMargin = 1.2) {
  const recipe = recipes[pieType];

  if (!recipe) {
      console.log(`Recipe for ${pieType} not found.`);
      return;
  }
  // console.log(printIngredients(pieType, recipe));
  bakePies(pieType, pieQuantity, recipe);
  const costOfPie = calculateCostPerPie(recipe);
  console.log(`Cost per pie: ${(costOfPie).toFixed(2)}`);
  const revenue = calculateTotalRevenue(costOfPie, pieQuantity, profitMargin);
  console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
}
/******************************* LOCAL TESTS *******************************/
// bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies
};
