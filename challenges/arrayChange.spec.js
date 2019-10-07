const arrayChange = require("./arrayChange");

describe("Steps to get a strictly increasing sequence - Arcade - Codesignal", () => {
  it("test 1", () => {
    expect(arrayChange.arrayChange([1, 1, 1])).toBe(3);
  });

  it("test 2", () => {
    expect(arrayChange.arrayChange([-1000, 0, -2, 0])).toBe(5);
  });

  it("test 3", () => {
    expect(arrayChange.arrayChange([2, 1, 10, 1])).toBe(12);
  });
});
