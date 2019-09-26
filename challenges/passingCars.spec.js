const passingCars = require("./passingCars");

describe("Count passing pairs of cars - Prefix sums - Codility", () => {
  it("test 1", () => {
    expect(passingCars.solution([0, 1, 0, 1, 1])).toBe(5);
    expect(passingCars.solution([1, 0, 0, 0])).toBe(0);
    expect(passingCars.solution([1, 0, 0, 0, 1])).toBe(3);
    expect(passingCars.solution([1, 0, 0, 0, 1, 1])).toBe(6);
  });

  it("test 2", () => {
    expect(passingCars.solution([0])).toBe(0);
    expect(passingCars.solution([1])).toBe(0);
  });

  it("test 3", () => {
    expect(passingCars.solution([1, 0])).toBe(0);
  });

  it("test 4", () => {
    expect(passingCars.solution([0, 1])).toBe(1);
  });

  it("should return −1 if the number of pairs of passing cars exceeds 1,000,000,000", () => {
    const zeroes = initializeArray(100000, 0);
    const ones = initializeArray(100000, 1);
    expect(passingCars.solution(zeroes.concat(ones))).toBe(-1);
  });
});

describe("Suffix sum", () => {
  it("test 1", () => {
    expect(passingCars.calcSuffixSumOnes([0, 1, 1, 0], 1)).toEqual([
      2,
      2,
      1,
      0
    ]);
  });
});

function initializeArray(n, value) {
  const array = Array(n);
  for (let i = 0; i < n; i++) {
    array[i] = value;
  }
  return array;
}
