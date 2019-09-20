/* jshint esversion: 8 */

const commonCharacterCount = require("./commonCharacterCount");

describe("Given two strings, find the number of common characters between them", function() {
  it("test 1", function() {
    const result = commonCharacterCount.commonCharacterCount("aabcc", "adcaa");
    expect(result).toBe(3);
  });
  it("test 2", function() {
    const result = commonCharacterCount.commonCharacterCount("abca", "xyzbac");
    expect(result).toBe(3);
  });
});
