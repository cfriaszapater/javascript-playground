const palindromeRearranging = require("./palindromeRearranging");

describe("Given a string, find out if its characters can be rearranged to form a palindrome - Arcade - Codesignal", () => {
  it("test 1", () => {
    expect(palindromeRearranging.palindromeRearranging("aabb")).toBe(true);
  });

  it("test 2", () => {
    expect(
      palindromeRearranging.palindromeRearranging(
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc"
      )
    ).toBe(false);
  });

  it("test 3", () => {
    expect(palindromeRearranging.palindromeRearranging("abbcabb")).toBe(true);
  });

  it("test 4", () => {
    expect(palindromeRearranging.palindromeRearranging("zyyzzzzz")).toBe(true);
  });

  it("test 5", () => {
    expect(palindromeRearranging.palindromeRearranging("a")).toBe(true);
  });

  it("test 6", () => {
    expect(palindromeRearranging.palindromeRearranging("")).toBe(true);
  });

  it("test 7", () => {
    expect(palindromeRearranging.palindromeRearranging("zza")).toBe(true);
  });
});
