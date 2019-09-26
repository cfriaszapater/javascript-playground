const maxProductOfThree = require("./maxProductOfThree");

describe("Max product of three in array - Sorting - Codility", () => {
  it("test 1", () => {
    expect(maxProductOfThree.solution([-3, 1, 2, -2, 5, 6])).toBe(60);
  });

  it("test 2", () => {
    expect(maxProductOfThree.solution([-5, 1, 2, -2, 3, 6])).toBe(60);
  });

  it("test 3", () => {
    expect(maxProductOfThree.solution([-5, 1, 2, 2, 3, 6])).toBe(36);
  });

  it("test 4", () => {
    expect(maxProductOfThree.solution([3, 2, 1, 0])).toBe(6);
  });

  it("test 5", () => {
    expect(maxProductOfThree.solution([-3, -2, -1, 0])).toBe(0);
  });

  it("test all negatives 1", () => {
    expect(maxProductOfThree.solution([-3, -2, -1])).toBe(-6);
  });

  it("test all negatives 2", () => {
    expect(maxProductOfThree.solution([-3, -2, -1, -4])).toBe(-6);
  });

  it("test 7", () => {
    expect(maxProductOfThree.solution([3, 1, 2])).toBe(6);
  });

  it("test 8", () => {
    expect(maxProductOfThree.solution([3, 1, -3, -2])).toBe(18);
  });
});

describe("Filter sort", () => {
  it("test 1", () => {
    expect(
      maxProductOfThree.filterSortPositives([-3, 1, 2, -2, 0, 5, 6])
    ).toEqual([6, 5, 2, 1, 0]);
  });

  it("test 2", () => {
    expect(
      maxProductOfThree.filterSortNegatives([-3, 1, 2, -2, 0, 5, 6])
    ).toEqual([-3, -2]);
  });
});
