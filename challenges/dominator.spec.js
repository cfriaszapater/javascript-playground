const dominator = require("./dominator");

describe("Dominator - Leader - Codility", () => {
  it("test 1", () => {
    expect(
      [0, 2, 4, 6, 7].includes(dominator.solution([2, 4, 3, 2, 3, -1, 3, 3]))
    ).toBe(false);
    expect(
      [0, 2, 4, 6, 7].includes(dominator.solution([3, 4, 3, 2, 3, -1, 3, 3]))
    ).toBe(true);
  });

  it("test 2", () => {
    expect([0].includes(dominator.solution([13]))).toBe(true);
  });

  it("test 3", () => {
    expect(dominator.solution([2, 4])).toBe(-1);
  });

  it("test 4", () => {
    expect(dominator.solution([1, 2, 3])).toBe(-1);
  });

  it("test empty", () => {
    expect(dominator.solution([])).toBe(-1);
  });
});
