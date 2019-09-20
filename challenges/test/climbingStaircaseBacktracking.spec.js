/* jshint esversion: 8 */

const climbingStaircaseBacktracking = require("../climbingStaircaseBacktracking");

describe("Backtracking - Climb stair with 1..k steps each jump - Find all possible solutions", function() {
  it("should be ok given n=0, k=0", function() {
    expect(climbingStaircaseBacktracking.climbingStaircase(0, 0)).toEqual([[]]);
  });
  it("should be ok given n=1, k=1", function() {
    expect(climbingStaircaseBacktracking.climbingStaircase(1, 1)).toEqual([
      [1]
    ]);
  });
  it("should be ok given n=2, k=2", function() {
    expect(climbingStaircaseBacktracking.climbingStaircase(2, 2)).toEqual([
      [1, 1],
      [2]
    ]);
  });
  it("should be ok given low n and k", function() {
    expect(climbingStaircaseBacktracking.climbingStaircase(4, 2)).toEqual([
      [1, 1, 1, 1],
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
      [2, 2]
    ]);
  });
  it("should be ok given medium n and k", function() {
    expect(climbingStaircaseBacktracking.climbingStaircase(7, 3)).toEqual([
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2],
      [1, 1, 1, 1, 2, 1],
      [1, 1, 1, 1, 3],
      [1, 1, 1, 2, 1, 1],
      [1, 1, 1, 2, 2],
      [1, 1, 1, 3, 1],
      [1, 1, 2, 1, 1, 1],
      [1, 1, 2, 1, 2],
      [1, 1, 2, 2, 1],
      [1, 1, 2, 3],
      [1, 1, 3, 1, 1],
      [1, 1, 3, 2],
      [1, 2, 1, 1, 1, 1],
      [1, 2, 1, 1, 2],
      [1, 2, 1, 2, 1],
      [1, 2, 1, 3],
      [1, 2, 2, 1, 1],
      [1, 2, 2, 2],
      [1, 2, 3, 1],
      [1, 3, 1, 1, 1],
      [1, 3, 1, 2],
      [1, 3, 2, 1],
      [1, 3, 3],
      [2, 1, 1, 1, 1, 1],
      [2, 1, 1, 1, 2],
      [2, 1, 1, 2, 1],
      [2, 1, 1, 3],
      [2, 1, 2, 1, 1],
      [2, 1, 2, 2],
      [2, 1, 3, 1],
      [2, 2, 1, 1, 1],
      [2, 2, 1, 2],
      [2, 2, 2, 1],
      [2, 2, 3],
      [2, 3, 1, 1],
      [2, 3, 2],
      [3, 1, 1, 1, 1],
      [3, 1, 1, 2],
      [3, 1, 2, 1],
      [3, 1, 3],
      [3, 2, 1, 1],
      [3, 2, 2],
      [3, 3, 1]
    ]);
  });
});
