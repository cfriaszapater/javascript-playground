const groupingDishes = require("./groupingDishes");

describe("Grouping dishes - Hashtables - Codesignal", () => {
  it("test 1", () => {
    const dishes = [
      ["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
      ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
      ["Quesadilla", "Chicken", "Cheese", "Sauce"],
      ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]
    ];

    expect(groupingDishes.groupingDishes(dishes)).toEqual([
      ["Cheese", "Quesadilla", "Sandwich"],
      ["Salad", "Salad", "Sandwich"],
      ["Sauce", "Pizza", "Quesadilla", "Salad"],
      ["Tomato", "Pizza", "Salad", "Sandwich"]
    ]);
  });

  it("test 2", () => {
    const dishes = [
      ["Pasta", "Tomato Sauce", "Onions", "Garlic"],
      ["Chicken Curry", "Chicken", "Curry Sauce"],
      ["Fried Rice", "Rice", "Onions", "Nuts"],
      ["Salad", "Spinach", "Nuts"],
      ["Sandwich", "Cheese", "Bread"],
      ["Quesadilla", "Chicken", "Cheese"]
    ];

    expect(groupingDishes.groupingDishes(dishes)).toEqual([
      ["Cheese", "Quesadilla", "Sandwich"],
      ["Chicken", "Chicken Curry", "Quesadilla"],
      ["Nuts", "Fried Rice", "Salad"],
      ["Onions", "Fried Rice", "Pasta"]
    ]);
  });
});

describe("Internal functions - Hashtables - Codesignal", () => {
  it("test groupDishesByIngredients 1", () => {
    const dishes = [["dish1", "ing1"], ["dish2", "ing21", "ing22"]];
    const expectedDishesByIngredients = new Map([
      ["ing1", new Set(["dish1"])],
      ["ing21", new Set(["dish2"])],
      ["ing22", new Set(["dish2"])]
    ]);

    expect(groupingDishes.groupDishesByIngredients(dishes)).toEqual(
      expectedDishesByIngredients
    );
  });

  it("test groupDishesByIngredients 2", () => {
    const dishes = [["dish1", "ing1"], ["dish2", "ing1", "ing2"]];
    const expectedDishesByIngredients = new Map([
      ["ing1", new Set(["dish1", "dish2"])],
      ["ing2", new Set(["dish2"])]
    ]);

    expect(groupingDishes.groupDishesByIngredients(dishes)).toEqual(
      expectedDishesByIngredients
    );
  });

  it("test formatOutput 1", () => {
    const dishesByIngredients = new Map([
      ["ing1", new Set(["dish1", "dish2"])],
      ["ing2", new Set(["dish2"])]
    ]);

    expect(groupingDishes.formatOutput(dishesByIngredients)).toEqual([
      ["ing1", "dish1", "dish2"],
      ["ing2", "dish2"]
    ]);
  });

  it("test sortResultByIngredient 1", () => {
    const array = [["ing2", "dish2"], ["ing1", "dish1", "dish2"]];

    groupingDishes.sortResultByIngredient(array);
    expect(array).toEqual([["ing1", "dish1", "dish2"], ["ing2", "dish2"]]);
  });

  it("test sortResultByIngredient 2", () => {
    const array = [
      ["Nuts", "Fried Rice", "Salad"],
      ["Chicken", "Chicken Curry", "Quesadilla"]
    ];

    groupingDishes.sortResultByIngredient(array);
    expect(array).toEqual([
      ["Chicken", "Chicken Curry", "Quesadilla"],
      ["Nuts", "Fried Rice", "Salad"]
    ]);
  });
});
