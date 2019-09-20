/* jshint esversion: 8 */

const climbingStairs = require("../climbingStairsDynamicProgramming");

describe("Dynamic programming - Find how many different ways to climb stairs with steps of 1 or 2", function() {
  it("Should return 3", function() {
    expect(climbingStairs.climbingStairs(3)).toBe(3);
  });
  it("Should return 5", function() {
    expect(climbingStairs.climbingStairs(4)).toBe(5);
  });
  it("Should return 21", function() {
    expect(climbingStairs.climbingStairs(7)).toBe(21);
  });
  it("Should return 6765", function() {
    expect(climbingStairs.climbingStairs(19)).toBe(6765);
  });
});
