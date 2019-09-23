const sumInRange = require("./sumInRange");

describe("Sum in range - Prefix sums", function() {
  it("test 1", function() {
    const result = sumInRange.sumInRange([1000], [[0, 0]]);
    expect(result).toBe(1000);
  });

  it("test 2", function() {
    const result = sumInRange.sumInRange(
      [3, 0, -2, 6, -3, 2],
      [[0, 2], [2, 5], [0, 5]]
    );
    expect(result).toBe(10);
  });

  it("test 3", function() {
    const result = sumInRange.sumInRange([-1000], [[0, 0]]);
    expect(result).toBe(999999007);
  });
});

describe("Prefix sum", function() {
  it("test 1", function() {
    const result = sumInRange.prefixSum([1, 3, 5]);
    expect(result).toEqual([0, 1, 4, 9]);
  });
});

describe("Modulo operation", function() {
  it("test 1", function() {
    const result = sumInRange.modulo(5, 3);
    expect(result).toBe(2);
  });
  it("test 2", function() {
    const result = sumInRange.modulo(-5, 3);
    expect(result).toBe(1);
  });

  it("test 3", function() {
    const result = sumInRange.modulo(-1000, 10 ** 9 + 7);
    expect(result).toBe(999999007);
  });
});
