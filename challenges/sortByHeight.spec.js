const sortByHeight = require("./sortByHeight");

describe("Sort people by height without moving trees (-1)", function() {
  it("test 1", function() {
    const result = sortByHeight.sortByHeight([
      -1,
      150,
      190,
      170,
      -1,
      -1,
      160,
      180
    ]);
    expect(result).toEqual([-1, 150, 160, 170, -1, -1, 180, 190]);
  });

  it("test 2", function() {
    const result = sortByHeight.sortByHeight([-1, -1, -1, -1, -1]);
    expect(result).toEqual([-1, -1, -1, -1, -1]);
  });

  it("test 3", () => {
    const result = sortByHeight.sortByHeight([4, 2, 9, 11, 2, 16]);
    expect(result).toEqual([2, 2, 4, 9, 11, 16]);
  });
});

describe("Add trees", function() {
  it("test 1", function() {
    expect(sortByHeight.addTrees([1, 2, 3], [0, 2, 5])).toEqual([
      -1,
      1,
      -1,
      2,
      3,
      -1
    ]);
  });
});
