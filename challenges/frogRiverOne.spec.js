const frogRiverOne = require("./frogRiverOne");

describe("When can the frog jump to the other side of the river? - Counting elements - Codility", () => {
  it("test 1", () => {
    expect(frogRiverOne.solution(5, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(6);
  });
  it("test 2", () => {
    expect(frogRiverOne.solution(1, [])).toBe(-1);
  });
  it("test 3", () => {
    expect(frogRiverOne.solution(2, [1, 1])).toBe(-1);
  });
  it("test 4", () => {
    expect(frogRiverOne.solution(1, [1])).toBe(0);
  });
  it("test 5", () => {
    expect(frogRiverOne.solution(2, [1, 1, 1, 1, 2])).toBe(4);
  });
});
