const countFactors = require("./countFactors");

describe("countFactors - Prime and composite numbers - Codility", () => {
  it("test 1", () => {
    expect(countFactors.solution(13)).toBe(2);
  });

  it("test 2", () => {
    expect(countFactors.solution(24)).toBe(8);
  });

  it("test 3", () => {
    expect(countFactors.solution(1)).toBe(1);
  });

  it("test 4", () => {
    expect(countFactors.solution(2)).toBe(2);
  });

  it("test 5", () => {
    expect(countFactors.solution(4)).toBe(3);
  });

  it("test 6", () => {
    expect(countFactors.solution(6)).toBe(4);
  });

  it("test 7", () => {
    expect(countFactors.solution(0)).toBe(0);
  });

  it("test 8", () => {
    expect(countFactors.solution(2147483647)).toBe(2);
  });
});
