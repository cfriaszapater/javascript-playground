const areSimilar = require("./areSimilar");

describe("Arrays are similar (equal with 1 swap)? - Arcade - Codesignal", () => {
  it("test 1", () => {
    expect(areSimilar.areSimilar([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  it("test 2", () => {
    expect(areSimilar.areSimilar([1, 2, 3], [2, 1, 3])).toBe(true);
  });

  it("test 3", () => {
    expect(areSimilar.areSimilar([1, 2, 2], [2, 1, 1])).toBe(false);
  });
});
