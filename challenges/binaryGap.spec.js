const binaryGap = require("./binaryGap");

describe("Binary gap - Codility lessons - Arrays", () => {
  it("test 1", () => {
    expect(binaryGap.solution(529)).toEqual(4);
  });
  it("test 2", () => {
    expect(binaryGap.solution(32)).toEqual(0);
  });
  it("test 3", () => {
    expect(binaryGap.solution(20)).toEqual(1);
  });
  it("test 4", () => {
    expect(binaryGap.solution(1041)).toEqual(5);
  });
});

describe("Decimal to binary array", () => {
  it("test 1", () => {
    expect(binaryGap.dec2binArray(2)).toEqual([1, 0]);
  });
  it("test 2", () => {
    expect(binaryGap.dec2binArray(529)).toEqual([1, 0, 0, 0, 0, 1, 0, 0, 0, 1]);
  });
});
