/*

You are given a list dishes, where each element consists of a list of strings beginning with the name of the dish, followed by all the ingredients used in preparing it. You want to group the dishes by ingredients, so that for each ingredient you'll be able to find all the dishes that contain it (if there are at least 2 such dishes).

Return an array where each element is a list beginning with the ingredient name, followed by the names of all the dishes that contain this ingredient. The dishes inside each list should be sorted lexicographically, and the result array should be sorted lexicographically by the names of the ingredients.

Example

    For

      dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
                ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
                ["Quesadilla", "Chicken", "Cheese", "Sauce"],
                ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]]

    the output should be

      groupingDishes(dishes) = [["Cheese", "Quesadilla", "Sandwich"],
                                ["Salad", "Salad", "Sandwich"],
                                ["Sauce", "Pizza", "Quesadilla", "Salad"],
                                ["Tomato", "Pizza", "Salad", "Sandwich"]]

    For

      dishes = [["Pasta", "Tomato Sauce", "Onions", "Garlic"],
                ["Chicken Curry", "Chicken", "Curry Sauce"],
                ["Fried Rice", "Rice", "Onions", "Nuts"],
                ["Salad", "Spinach", "Nuts"],
                ["Sandwich", "Cheese", "Bread"],
                ["Quesadilla", "Chicken", "Cheese"]]

    the output should be

      groupingDishes(dishes) = [["Cheese", "Quesadilla", "Sandwich"],
                                ["Chicken", "Chicken Curry", "Quesadilla"],
                                ["Nuts", "Fried Rice", "Salad"],
                                ["Onions", "Fried Rice", "Pasta"]]

Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.array.string dishes

    An array of dishes, where dishes[i] for each valid i contains information about the ith dish: dishes[i][0] is the name of the dish, and all the elements after it are the ingredients of that dish. Both the dish name and the ingredient names consist of English letters and spaces. It is guaranteed that all dish names are different. It is also guaranteed that the ingredient names for any one dish are also pairwise distinct.

    Guaranteed constraints:
    1 ≤ dishes.length ≤ 500,
    2 ≤ dishes[i].length ≤ 10,
    1 ≤ dishes[i][j].length ≤ 50.

    [output] array.array.string
        The array containing the grouped dishes.

*/

exports.groupingDishes = function groupingDishes(dishes) {
  const dishesByIngredients = groupDishesByIngredients(dishes);

  const dishesByIngredientsInAtLeastTwoDishes = removeIngredientsWithLessThanTwoDishes(
    dishesByIngredients
  );

  return formatOutput(dishesByIngredientsInAtLeastTwoDishes);
};

function groupDishesByIngredients(dishes) {
  const dishesByIngredients = new Map();
  for (let i = 0; i < dishes.length; i++) {
    const dishAndIngredients = dishes[i];
    const dish = dishAndIngredients[0];
    const ingredients = dishAndIngredients.slice(1);
    for (let j = 0; j < ingredients.length; j++) {
      const ingredient = ingredients[j];
      addDishToIngredient(dishesByIngredients, ingredient, dish);
    }
  }
  return dishesByIngredients;
}

function addDishToIngredient(dishesByIngredients, ingredient, dish) {
  let dishesForIngredient = dishesByIngredients.get(ingredient);
  if (!dishesForIngredient) {
    dishesByIngredients.set(ingredient, new Set([dish]));
  } else {
    dishesByIngredients.set(ingredient, dishesForIngredient.add(dish));
  }
}

function formatOutput(dishesByIngredients) {
  const result = [];

  addIngredientsAndDishesToResult(dishesByIngredients, result);

  sortResultByIngredient(result);

  return result;
}

function sortResultByIngredient(result) {
  result.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    } else {
      return 0;
    }
  });
}

function addIngredientsAndDishesToResult(dishesByIngredients, result) {
  dishesByIngredients.forEach((dishes, ingredient) => {
    const ingredientAndSortedDishes = sortIngredientAndThenDishes(
      dishes,
      ingredient
    );
    result.push(ingredientAndSortedDishes);
  });
}

function sortIngredientAndThenDishes(dishes, ingredient) {
  const sortedDishes = Array.from(dishes).sort();
  sortedDishes.unshift(ingredient);
  const ingredientAndSortedDishes = sortedDishes;
  return ingredientAndSortedDishes;
}

function removeIngredientsWithLessThanTwoDishes(dishesByIngredients) {
  const result = new Map(dishesByIngredients);
  for (const ingredient of dishesByIngredients.keys()) {
    if (dishesByIngredients.get(ingredient).size < 2) {
      result.delete(ingredient);
    }
  }
  return result;
}

exports.groupDishesByIngredients = groupDishesByIngredients;
exports.formatOutput = formatOutput;
exports.sortResultByIngredient = sortResultByIngredient;
