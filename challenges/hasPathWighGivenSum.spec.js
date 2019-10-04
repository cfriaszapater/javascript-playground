const hasPathWithGivenSum = require("./hasPathWithGivenSum");

describe("Has path with given sum - Trees - Codesignal", () => {
  it("test 1", () => {
    const tree = {
      value: 4,
      left: {
        value: 1,
        left: {
          value: -2,
          left: null,
          right: {
            value: 3,
            left: null,
            right: null
          }
        },
        right: null
      },
      right: {
        value: 3,
        left: {
          value: 1,
          left: null,
          right: null
        },
        right: {
          value: 2,
          left: {
            value: -2,
            left: null,
            right: null
          },
          right: {
            value: -3,
            left: null,
            right: null
          }
        }
      }
    };

    expect(hasPathWithGivenSum.hasPathWithGivenSum(tree, 7)).toBe(true);
  });

  it("test 2", () => {
    const tree = {
      value: 4,
      left: {
        value: 1,
        left: {
          value: -2,
          left: null,
          right: {
            value: 3,
            left: null,
            right: null
          }
        },
        right: null
      },
      right: {
        value: 3,
        left: {
          value: 1,
          left: null,
          right: null
        },
        right: {
          value: 2,
          left: {
            value: -4,
            left: null,
            right: null
          },
          right: {
            value: -3,
            left: null,
            right: null
          }
        }
      }
    };

    expect(hasPathWithGivenSum.hasPathWithGivenSum(tree, 7)).toBe(false);
  });

  it("test 3", () => {
    const tree = {
      value: 13,
      left: null,
      right: null
    };

    expect(hasPathWithGivenSum.hasPathWithGivenSum(tree, 7)).toBe(false);
    expect(hasPathWithGivenSum.hasPathWithGivenSum(tree, 13)).toBe(true);
  });

  it("test 5", () => {
    const tree = null;

    expect(hasPathWithGivenSum.hasPathWithGivenSum(tree, 7)).toBe(false);
  });

  it("test 6", () => {
    const tree = {
      value: 5,
      left: {
        value: 7,
        left: null,
        right: null
      },
      right: null
    };

    expect(hasPathWithGivenSum.hasPathWithGivenSum(tree, 12)).toBe(true);
  });

  it("test 7", () => {
    const tree = {
      value: 8,
      left: null,
      right: {
        value: 3,
        left: null,
        right: null
      }
    };

    expect(hasPathWithGivenSum.hasPathWithGivenSum(tree, 8)).toBe(false);
  });
});
