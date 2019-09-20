/* jshint esversion: 8 */

const countValleys = require("./countValleys");

describe("count valleys", function() {
  it("should return 1 valley", function() {
    var numberOfValleys = countValleys.countValleys(8, [
      "U",
      "D",
      "D",
      "D",
      "U",
      "D",
      "U",
      "U"
    ]);
    expect(numberOfValleys).toBe(1);
  });
});
