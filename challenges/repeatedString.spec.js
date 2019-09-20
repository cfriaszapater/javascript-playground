/* jshint esversion: 8 */

const repeatedString = require("./repeatedString");

describe("Count occurrences of 'a' in inifinitely repeating string up to 'n' character", function() {
  it("should return 7", function() {
    expect(repeatedString.ocurrencesOfAInRepeatingString("aba", 10)).toBe(7);
  });
  it("should return 1 on n lesser than string length", function() {
    expect(repeatedString.ocurrencesOfAInRepeatingString("aba", 2)).toBe(1);
  });
  it("should return 0 on string with no 'a'", function() {
    expect(repeatedString.ocurrencesOfAInRepeatingString("grmblf", 2)).toBe(0);
  });
});

describe("Count occurrences of 'a' in string", function() {
  it("should return 2", function() {
    expect(repeatedString.occurrencesOfAIn("aba")).toBe(2);
  });
});

describe("Count occurrences of 'a' in remainder", function() {
  it("should return 2", function() {
    expect(repeatedString.occurrencesInRemainder("abababa", 3)).toBe(2);
  });
});
