const isLucky = require("./isLucky");

describe("A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half", function() {
  it("test 1", function() {
    const result = isLucky.isLucky(1230);
    expect(result).toBe(true);
  });
  it("test 2", function() {
    const result = isLucky.isLucky(239017);
    expect(result).toBe(false);
  });
});
