const missingInteger = require("./missingInteger");

describe("Find smallest missing positive integer in array - Counting elements - Codility", () => {
  it("test 1", () => {
    expect(missingInteger.solution([1, 3, 6, 4, 1, 2])).toBe(5);
  });

  it("test 2", () => {
    expect(missingInteger.solution([1, 2, 3])).toBe(4);
  });

  it("test 3", () => {
    expect(missingInteger.solution([-1, -3])).toBe(1);
  });

  it("test 4", () => {
    expect(missingInteger.solution([])).toBe(1);
  });
});
