const permutationMissingElement = require("./permutationMissingElement");

describe("Permutation missing element - Time complexity - Codility", () => {
  it("test 1", () => {
    expect(permutationMissingElement.solution([2, 3, 1, 5])).toBe(4);
  });
  it("test 2", () => {
    expect(permutationMissingElement.solution([])).toBe(1);
  });
  it("test 3", () => {
    expect(permutationMissingElement.solution([1])).toBe(2);
  });
  it("test 4", () => {
    expect(permutationMissingElement.solution([2])).toBe(1);
  });
});
