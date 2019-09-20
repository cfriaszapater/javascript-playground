const addBorder = require("./addBorder");

describe("Add border to picture (matrix of strings)", function() {
  it("test 1", () => {
    expect(addBorder.addBorder(["abc", "ded"])).toEqual([
      "*****",
      "*abc*",
      "*ded*",
      "*****"
    ]);
  });
});
