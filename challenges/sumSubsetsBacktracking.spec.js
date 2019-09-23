const sumSubsetsBacktracking = require("./sumSubsetsBacktracking");

describe("Find all possible unique subsets of arr that add up to num", function() {
  it("test 1", function() {
    const result = sumSubsetsBacktracking.sumSubsets([1, 2, 3, 4, 5], 5);
    expect(result).toEqual([[1, 4], [2, 3], [5]]);
  });

  it("test 2", function() {
    const result = sumSubsetsBacktracking.sumSubsets([1, 2, 2, 3, 4, 5], 5);
    expect(result).toEqual([[1, 2, 2], [1, 4], [2, 3], [5]]);
  });

  it("test 3", () => {
    const result = sumSubsetsBacktracking.sumSubsets([], 0);
    expect(result).toEqual([[]]);
  });
});
