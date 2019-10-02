const removeKFromList = require("./removeKFromList");
const arrayFromList = removeKFromList.arrayFromList;
const listFromArray = removeKFromList.listFromArray;

describe("Remove K from list - Linked lists - Codesignal", () => {
  it("test 1", () => {
    expect(
      arrayFromList(
        removeKFromList.removeKFromList(listFromArray([2, 3, 1, 5]), 3)
      )
    ).toEqual([2, 1, 5]);
  });

  it("test 2", () => {
    expect(
      arrayFromList(
        removeKFromList.removeKFromList(listFromArray([3, 1, 5]), 3)
      )
    ).toEqual([1, 5]);
  });

  it("test 3", () => {
    expect(
      arrayFromList(
        removeKFromList.removeKFromList(listFromArray([13, 13]), 13)
      )
    ).toEqual([]);
  });
});

describe("Internal functions - Linked lists - Codesignal", () => {
  it("test from/to list", () => {
    expect(arrayFromList(listFromArray([2, 3, 1, 5]))).toEqual([2, 3, 1, 5]);
  });
});
