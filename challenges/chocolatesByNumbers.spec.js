const chocolatesByNumbers = require("./chocolatesByNumbers");

describe("chocolatesByNumbers - Euclidean algorithm - Codility", () => {
  it("test 1", () => {
    expect(chocolatesByNumbers.solution(10, 4)).toBe(5);
  });

  it("test 2", () => {
    expect(chocolatesByNumbers.solution(1, 1)).toBe(1);
  });

  it("test 3", () => {
    expect(chocolatesByNumbers.solution(1, 2)).toBe(1);
  });

  it("test 4", () => {
    expect(chocolatesByNumbers.solution(2, 2)).toBe(1);
  });

  it("test 5", () => {
    expect(chocolatesByNumbers.solution(3, 2)).toBe(3);
  });

  it("test 6", () => {
    expect(chocolatesByNumbers.solution(4, 2)).toBe(2);
  });

  it("test 7", () => {
    expect(chocolatesByNumbers.solution(4, 10)).toBe(2);
  });

  it("test 8", () => {
    expect(chocolatesByNumbers.solution(2, 3)).toBe(2);
  });

  it("test 9", () => {
    expect(chocolatesByNumbers.solution(1520, 120)).toBe(38);
  });
});

describe("minimum common multiple", () => {
  it("mcm 1", () => {
    expect(chocolatesByNumbers.mcm(10, 4)).toBe(20);
  });

  it("mcm 2", () => {
    expect(chocolatesByNumbers.mcm(1520, 120)).toBe(4560);
  });

  it("mcm 3", () => {
    expect(chocolatesByNumbers.mcm(72, 50)).toBe(1800);
  });
});

describe("greatest common divisor", () => {
  it("gcd 1", () => {
    expect(chocolatesByNumbers.gcd(10, 4)).toBe(2);
  });

  it("gcd 2", () => {
    expect(chocolatesByNumbers.gcd(42, 56)).toBe(14);
  });

  it("gcd 3", () => {
    expect(chocolatesByNumbers.gcd(60, 48)).toBe(12);
  });

  it("gcd 4", () => {
    expect(chocolatesByNumbers.gcd(1, 2)).toBe(1);
  });

  it("gcd 5", () => {
    expect(chocolatesByNumbers.gcd(24, 9)).toBe(3);
  });
});
