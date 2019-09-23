const containsDuplicates = require("./containsDuplicates");

describe("Check if array contains duplicates", function() {
  it("test 1", function() {
    const result = containsDuplicates.containsDuplicates([1, 2, 3, 1]);
    expect(result).toBe(true);
  });
});
