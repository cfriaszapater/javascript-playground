/* jshint esversion: 8 */

const jumpingOnClouds = require("./jumpingOnClouds");

describe("Jumping on clouds", function() {
  it("should return 3 jumps", function() {
    var numberOfValleys = jumpingOnClouds.jumpingOnClouds([0, 0, 0, 0, 1, 0]);
    expect(numberOfValleys).toBe(3);
  });
  it("should return 0 jumps", function() {
    var numberOfValleys = jumpingOnClouds.jumpingOnClouds([0]);
    expect(numberOfValleys).toBe(0);
  });
  it("should throw error on impossible to win", function() {
    expect(() => jumpingOnClouds.jumpingOnClouds([0, 1, 1, 0])).toThrow(
      "Impossible to win"
    );
  });
});
