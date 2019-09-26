const permutationCheck = require("./permutationCheck");

describe("Permutation check - Counting elements - Codility", () => {
  it("test 1", () => {
    expect(permutationCheck.solution([4, 1, 3, 2])).toBe(1);
  });
  it("test 2", () => {
    expect(permutationCheck.solution([])).toBe(1);
  });
  it("test 3", () => {
    expect(permutationCheck.solution([4, 1, 3])).toBe(0);
  });
  it("test 4", () => {
    expect(permutationCheck.solution([1, 2, 2, 3])).toBe(0);
  });
});
