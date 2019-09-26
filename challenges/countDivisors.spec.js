const countDivisors = require("./countDivisors");

describe("Count number of divisors in a range - Prefix sums - Codility", () => {
  it("test 1", () => {
    expect(countDivisors.solution(6, 11, 2)).toBe(3);
  });

  it("test 2", () => {
    expect(countDivisors.solution(0, 11, 2)).toBe(6);
  });

  it("test 3", () => {
    expect(countDivisors.solution(0, 11, 11)).toBe(2);
  });

  it("test 4", () => {
    expect(countDivisors.solution(0, 11, 12)).toBe(1);
  });

  it("test 5", () => {
    expect(countDivisors.solution(1, 11, 12)).toBe(0);
  });

  it("test 6", () => {
    expect(countDivisors.solution(1, 2000000000, 1)).toBe(2000000000);
  });

  it("test 7", () => {
    expect(countDivisors.solution(1, 2000000000, 2)).toBe(1000000000);
  });

  it("test 8", () => {
    expect(countDivisors.solution(0, 0, 11)).toBe(1);
    expect(countDivisors.solution(1, 1, 11)).toBe(0);
    expect(countDivisors.solution(0, 1, 11)).toBe(1);
    expect(countDivisors.solution(0, 1, 1)).toBe(2);
  });

  it("test 9", () => {
    expect(countDivisors.solution(0, 2000000000, 1)).toBe(2000000001);
    expect(countDivisors.solution(0, 2000000000, 2000000000)).toBe(2);
  });
});
