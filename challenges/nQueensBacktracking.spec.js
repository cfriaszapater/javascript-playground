/* jshint esversion: 8 */

const nQueensBacktracking = require("./nQueensBacktracking");

describe("Backtracking - N-queens problem - Find all possible solutions", function() {
  it("should be ok given n=0", function() {
    expect(nQueensBacktracking.nQueens(0)).toEqual([]);
  });
  it("should be ok given n=1", function() {
    expect(nQueensBacktracking.nQueens(1)).toEqual([[1]]);
  });
  it("should be ok given n=2", function() {
    expect(nQueensBacktracking.nQueens(2)).toEqual([]);
  });
  it("should be ok given n=3", function() {
    expect(nQueensBacktracking.nQueens(3)).toEqual([]);
  });
  it("should be ok given low n", function() {
    expect(nQueensBacktracking.nQueens(4)).toEqual([
      [2, 4, 1, 3],
      [3, 1, 4, 2]
    ]);
  });
  it("should be ok given medium n", function() {
    expect(nQueensBacktracking.nQueens(6)).toEqual([
      [2, 4, 6, 1, 3, 5],
      [3, 6, 2, 5, 1, 4],
      [4, 1, 5, 2, 6, 3],
      [5, 3, 1, 6, 4, 2]
    ]);
  });
});

describe("Check if a new position is safe", function() {
  it("should be safe in second column", function() {
    expect(nQueensBacktracking.isSafe([1, 3])).toBe(true);
  });
  it("should not be safe (threatened row) in second column", function() {
    expect(nQueensBacktracking.isSafe([1, 1])).toBe(false);
  });
  it("should not be safe (threatened diagonal up left) in second column", function() {
    expect(nQueensBacktracking.isSafe([1, 2])).toBe(false);
  });
  it("should not be safe (threatened diagonal down left) in second column", function() {
    expect(nQueensBacktracking.isSafe([2, 1])).toBe(false);
  });
  it("should be safe in third column", function() {
    expect(nQueensBacktracking.isSafe([1, 4, 2])).toBe(true);
  });
  it("should not be safe in third column", function() {
    expect(nQueensBacktracking.isSafe([1, 4, 3])).toBe(false);
  });
});

describe("Sort board configurations (matrix) lexicographically", function() {
  it("should sort", function() {
    expect(
      nQueensBacktracking.sortMatrixLexicographically([[2, 1], [1, 2]])
    ).toEqual([[1, 2], [2, 1]]);
  });
});
