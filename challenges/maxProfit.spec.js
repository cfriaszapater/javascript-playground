const maxProfit = require("./maxProfit");

describe("MaxProfit - Maximum slice problem - Codility", () => {
  it("test 1", () => {
    expect(maxProfit.solution([13])).toBe(0);
  });

  it("test 2", () => {
    expect(maxProfit.solution([23171, 21011, 21123, 21366, 21013, 21367])).toBe(
      356
    );
  });

  it("test 3", () => {
    expect(maxProfit.solution([4, 3, 2])).toBe(0);
  });

  it("test 4", () => {
    expect(maxProfit.solution([4, 3])).toBe(0);
  });

  it("test 5", () => {
    expect(maxProfit.solution([3, 4])).toBe(1);
  });
});
