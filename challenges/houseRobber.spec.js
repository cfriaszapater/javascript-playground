/* jshint esversion: 8 */

const houseRobber = require("./houseRobber");

describe("Dynamic programming - Determine the maximum sum of non-adjacent elements", function() {
  it("should be 0 given empty array", function() {
    expect(houseRobber.houseRobber([])).toBe(0);
  });
  it("should be element given one element", function() {
    expect(houseRobber.houseRobber([0])).toBe(0);
    expect(houseRobber.houseRobber([13])).toBe(13);
  });
  it("should be max element given two elements", function() {
    expect(houseRobber.houseRobber([3, 4])).toBe(4);
    expect(houseRobber.houseRobber([1, 1])).toBe(1);
  });
  it("Should sum two non-adjacent given four elements", function() {
    expect(houseRobber.houseRobber([1, 7, 9, 4])).toBe(11);
  });
});
