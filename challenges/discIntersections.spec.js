const discIntersections = require("./discIntersections");

describe("Number of disc intersections - Sorting - Codility", () => {
  it("test 1", () => {
    expect(discIntersections.solution([1, 5, 2, 1, 4, 0])).toBe(11);
  });

  it("should return −1 if the number of intersecting pairs exceeds 10,000,000", () => {
    const A = fillWithI(10000);
    expect(discIntersections.solution(A)).toBe(-1);
  });

  it("test 2", () => {
    expect(discIntersections.solution([0, 0, 0, 0, 2147483647, 0])).toBe(5);
  });

  it("test 3", () => {
    expect(discIntersections.solution([1, 1, 1])).toBe(3);
  });

  it("test 4", () => {
    const A = fillWithI(5);
    expect(discIntersections.solution(A)).toBe(10);
  });

  it("test 5", () => {
    expect(discIntersections.solution(fillWith(100, 100))).toBe(4950);
  });

  it("test 6", () => {
    expect(discIntersections.solution([1, 0])).toBe(1);
  });

  it("test 7", () => {
    expect(discIntersections.solution([2, 1, 0])).toBe(3);
  });

  it("test 8", () => {
    expect(discIntersections.solution([2, 1, 0, 4])).toBe(6);
  });
});

function fillWithI(n) {
  const A = new Array(n);
  for (let i = 0; i < A.length; i++) {
    A[i] = i;
  }
  return A;
}

function fillWith(v, n) {
  const A = new Array(n);
  for (let i = 0; i < A.length; i++) {
    A[i] = v;
  }
  return A;
}

describe("internal functions", () => {
  it("discs", () => {
    expect(discIntersections.discs([1, 5, 2, 1, 4, 0])).toEqual([
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
      discIntersections.sortByMaxPoint([
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
      discIntersections.countMaxPoints([
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
      discIntersections.reverse(new Map([[6, 1], [4, 2], [1, 1]]))
    ).toEqual(new Map([[1, 1], [4, 2], [6, 1]]));
  });

  it("calcPrefixSumMaxPoints ", () => {
    expect(
      discIntersections.calcPrefixSumMaxPoints(
        new Map([[8, 1], [6, 1], [5, 1], [4, 2], [1, 1]])
      )
    ).toEqual(
      new discIntersections.MapWithSearch([
        [2, 1],
        [5, 3],
        [6, 4],
        [7, 5],
        [9, 6]
      ])
    );
  });

  it("collisionsWithLower", () => {
    const prefixSumMaxPoints = new discIntersections.MapWithSearch([
      [2, 1],
      [5, 3],
      [6, 4],
      [7, 5],
      [9, 6]
    ]);
    expect(
      discIntersections.collisionsWithLower(
        { minPoint: 0, maxPoint: 8 },
        prefixSumMaxPoints
      )
    ).toBe(5);
    expect(
      discIntersections.collisionsWithLower(
        { minPoint: -4, maxPoint: 6 },
        prefixSumMaxPoints
      )
    ).toBe(4);
    expect(
      discIntersections.collisionsWithLower(
        { minPoint: 5, maxPoint: 5 },
        prefixSumMaxPoints
      )
    ).toBe(0);
    expect(
      discIntersections.collisionsWithLower(
        { minPoint: 0, maxPoint: 4 },
        prefixSumMaxPoints
      )
    ).toBe(1);
    expect(
      discIntersections.collisionsWithLower(
        { minPoint: 2, maxPoint: 4 },
        prefixSumMaxPoints
      )
    ).toBe(0);
    expect(
      discIntersections.collisionsWithLower(
        { minPoint: -1, maxPoint: 1 },
        prefixSumMaxPoints
      )
    ).toBe(0);
  });

  it("collisionsAtThisPoint", () => {
    const maxPointsCount = new Map([[8, 1], [6, 1], [5, 1], [4, 2], [1, 1]]);
    expect(discIntersections.collisionsAtThisPoint(8, maxPointsCount)).toBe(0);
    expect(discIntersections.collisionsAtThisPoint(6, maxPointsCount)).toBe(0);
    expect(discIntersections.collisionsAtThisPoint(5, maxPointsCount)).toBe(0);
    expect(discIntersections.collisionsAtThisPoint(4, maxPointsCount)).toBe(1);
    expect(discIntersections.collisionsAtThisPoint(1, maxPointsCount)).toBe(0);
  });

  it("MapWithSearch.searchNearestLowerKey", () => {
    const map = new discIntersections.MapWithSearch([
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
    const map = new discIntersections.MapWithSearch([[1, 11], [5, 55]]);
    expect(map.searchNearestLowerKey(0)).toBe(0);
    expect(map.searchNearestLowerKey(1)).toBe(1);
    expect(map.searchNearestLowerKey(2)).toBe(1);
    expect(map.searchNearestLowerKey(3)).toBe(1);
    expect(map.searchNearestLowerKey(4)).toBe(1);
    expect(map.searchNearestLowerKey(5)).toBe(5);
    expect(map.searchNearestLowerKey(6)).toBe(5);
  });

  it("MapWithSearch.searchNearestLowerKey 3", () => {
    const map = new discIntersections.MapWithSearch([[3, 11], [5, 55]]);
    expect(map.searchNearestLowerKey(0)).toBe(0);
    expect(map.searchNearestLowerKey(1)).toBe(0);
    expect(map.searchNearestLowerKey(2)).toBe(0);
    expect(map.searchNearestLowerKey(3)).toBe(3);
    expect(map.searchNearestLowerKey(4)).toBe(3);
    expect(map.searchNearestLowerKey(5)).toBe(5);
    expect(map.searchNearestLowerKey(6)).toBe(5);
  });

  it("MapWithSearch.getValueOfNearestLowerKey", () => {
    const map = new discIntersections.MapWithSearch([
      [1, 11],
      [3, 33],
      [5, 55]
    ]);
    expect(map.getValueOfNearestLowerKey(0)).toBe(0);
    expect(map.getValueOfNearestLowerKey(1)).toBe(11);
    expect(map.getValueOfNearestLowerKey(2)).toBe(11);
    expect(map.getValueOfNearestLowerKey(3)).toBe(33);
    expect(map.getValueOfNearestLowerKey(4)).toBe(33);
    expect(map.getValueOfNearestLowerKey(5)).toBe(55);
    expect(map.getValueOfNearestLowerKey(6)).toBe(55);
  });

  it("factorial", () => {
    expect(discIntersections.factorial(3)).toBe(6);
    expect(discIntersections.factorial(2)).toBe(2);
    expect(discIntersections.factorial(1)).toBe(1);
  });
});
