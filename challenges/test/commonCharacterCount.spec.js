/* jshint esversion: 8 */

const commonCharacterCount = require("../commonCharacterCount");

describe("Given two strings, find the number of common characters between them", function() {
  it("Given simple strings Then return common chars", function() {
    const result = commonCharacterCount.commonCharacterCount("aabcc", "adcaa");
    expect(result).toBe(3);
  });
});
