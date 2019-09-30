const maxProductOfThree = require("./discIntersections");

describe("Number of disc intersections - Sorting - Codility", () => {
  it("test 1", () => {
    expect(maxProductOfThree.solution([1, 5, 2, 1, 4, 0])).toBe(11);
  });
});

describe("internal functions", () => {
  it("discs", () => {
    expect(maxProductOfThree.discs([1, 5, 2, 1, 4, 0])).toEqual([
      { minPoint: -1, maxPoint: 1 },
      { minPoint: -4, maxPoint: 6 },
      { minPoint: 0, maxPoint: 4 },
      { minPoint: 2, maxPoint: 4 },
      { minPoint: 0, maxPoint: 8 },
      { minPoint: 5, maxPoint: 5 }
    ]);
  });

  it("sortByMaxPoint", () => {
    expect(
      maxProductOfThree.sortByMaxPoint([
        { minPoint: -1, maxPoint: 1 },
        { minPoint: -4, maxPoint: 6 },
        { minPoint: 0, maxPoint: 4 }
      ])
    ).toEqual([
      { minPoint: -4, maxPoint: 6 },
      { minPoint: 0, maxPoint: 4 },
      { minPoint: -1, maxPoint: 1 }
    ]);
  });

  it("countMaxPoints", () => {
    expect(
      maxProductOfThree.countMaxPoints([
        { minPoint: 0, maxPoint: 8 },
        { minPoint: -4, maxPoint: 6 },
        { minPoint: 5, maxPoint: 5 },
        { minPoint: 0, maxPoint: 4 },
        { minPoint: 2, maxPoint: 4 },
        { minPoint: -1, maxPoint: 1 }
      ])
    ).toEqual(new Map([[8, 1], [6, 1], [5, 1], [4, 2], [1, 1]]));
  });

  it("reverse", () => {
    expect(
      maxProductOfThree.reverse(new Map([[6, 1], [4, 2], [1, 1]]))
    ).toEqual(new Map([[1, 1], [4, 2], [6, 1]]));
  });

  it("calcPrefixSumMaxPoints ", () => {
    expect(
      maxProductOfThree.calcPrefixSumMaxPoints(
        new Map([[8, 1], [6, 1], [5, 1], [4, 2], [1, 1]])
      )
    ).toEqual(
      new maxProductOfThree.MapWithSearch([
        [2, 1],
        [5, 3],
        [6, 4],
        [7, 5],
        [9, 6]
      ])
    );
  });

  it("collisionsWithLower", () => {
    const prefixSumMaxPoints = new maxProductOfThree.MapWithSearch([
      [2, 1],
      [5, 3],
      [6, 4],
      [7, 5],
      [9, 6]
    ]);
    expect(
      maxProductOfThree.collisionsWithLower(
        { minPoint: 0, maxPoint: 8 },
        prefixSumMaxPoints
      )
    ).toBe(5);
    expect(
      maxProductOfThree.collisionsWithLower(
        { minPoint: -4, maxPoint: 6 },
        prefixSumMaxPoints
      )
    ).toBe(4);
    expect(
      maxProductOfThree.collisionsWithLower(
        { minPoint: 5, maxPoint: 5 },
        prefixSumMaxPoints
      )
    ).toBe(0);
    expect(
      maxProductOfThree.collisionsWithLower(
        { minPoint: 0, maxPoint: 4 },
        prefixSumMaxPoints
      )
    ).toBe(1);
    expect(
      maxProductOfThree.collisionsWithLower(
        { minPoint: 2, maxPoint: 4 },
        prefixSumMaxPoints
      )
    ).toBe(0);
    expect(
      maxProductOfThree.collisionsWithLower(
        { minPoint: -1, maxPoint: 1 },
        prefixSumMaxPoints
      )
    ).toBe(0);
  });

  it("collisionsAtThisPoint", () => {
    const maxPointsCount = new Map([[8, 1], [6, 1], [5, 1], [4, 2], [1, 1]]);
    expect(maxProductOfThree.collisionsAtThisPoint(8, maxPointsCount)).toBe(0);
    expect(maxProductOfThree.collisionsAtThisPoint(6, maxPointsCount)).toBe(0);
    expect(maxProductOfThree.collisionsAtThisPoint(5, maxPointsCount)).toBe(0);
    expect(maxProductOfThree.collisionsAtThisPoint(4, maxPointsCount)).toBe(1);
    expect(maxProductOfThree.collisionsAtThisPoint(1, maxPointsCount)).toBe(0);
  });

  it("MapWithSearch.searchNearestLowerKey", () => {
    const map = new maxProductOfThree.MapWithSearch([
      [1, 11],
      [3, 33],
      [5, 55]
    ]);
    expect(map.searchNearestLowerKey(0)).toBe(0);
    expect(map.searchNearestLowerKey(1)).toBe(1);
    expect(map.searchNearestLowerKey(2)).toBe(1);
    expect(map.searchNearestLowerKey(3)).toBe(3);
    expect(map.searchNearestLowerKey(4)).toBe(3);
    expect(map.searchNearestLowerKey(5)).toBe(5);
    expect(map.searchNearestLowerKey(6)).toBe(5);
  });

  it("MapWithSearch.searchNearestLowerKey 2", () => {
    const map = new maxProductOfThree.MapWithSearch([[1, 11], [5, 55]]);
    expect(map.searchNearestLowerKey(0)).toBe(0);
    expect(map.searchNearestLowerKey(1)).toBe(1);
    expect(map.searchNearestLowerKey(2)).toBe(1);
    expect(map.searchNearestLowerKey(3)).toBe(1);
    expect(map.searchNearestLowerKey(4)).toBe(1);
    expect(map.searchNearestLowerKey(5)).toBe(5);
    expect(map.searchNearestLowerKey(6)).toBe(5);
  });

  it("MapWithSearch.getValueOfNearestLowerKey", () => {
    const map = new maxProductOfThree.MapWithSearch([
      [1, 11],
      [3, 33],
      [5, 55]
    ]);
    expect(map.getValueOfNearestLowerKey(0)).toBe(0);
    expect(map.getValueOfNearestLowerKey(4)).toBe(33);
    expect(map.getValueOfNearestLowerKey(5)).toBe(55);
    expect(map.getValueOfNearestLowerKey(6)).toBe(55);
  });
});
