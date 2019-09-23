const sumOfTwo = require("./sumOfTwo");

describe("Find if v can be obtained by summing an element from array A and another one from array B", function() {
  it("test 1", function() {
    const result = sumOfTwo.sumOfTwo([1, 2, 3], [20, 30, 40, 50], 42);
    expect(result).toBe(true);
  });
});
