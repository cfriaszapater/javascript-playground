const traverseTree = require("./traverseTree");

describe("Traverse tree (without recursion) breadth-first search - Depth-First Search & Breadth-First Search - Codesignal interview practice", function() {
  it("test 1", function() {
    const t = {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: {
          value: 3,
          left: null,
          right: null
        }
      },
      right: {
        value: 4,
        left: {
          value: 5,
          left: null,
          right: null
        },
        right: null
      }
    };

    expect(traverseTree.traverseTree(t)).toEqual([1, 2, 4, 3, 5]);
  });

  it("test 2", function() {
    const t = {
      value: 1,
      left: null,
      right: null
    };

    expect(traverseTree.traverseTree(t)).toEqual([1]);
  });

  it("test 3", function() {
    const t = null;

    expect(traverseTree.traverseTree(t)).toEqual([]);
  });
});
