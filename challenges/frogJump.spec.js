const frogJump = require("./frogJump");

describe("Frog jump - Time complexity - Codility", () => {
  it("test 1", () => {
    expect(frogJump.solution(10, 85, 30)).toBe(3);
  });
});
