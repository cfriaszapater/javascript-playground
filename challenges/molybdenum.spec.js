/* jshint esversion: 8 */

const molybdenum = require("./molybdenum");

describe("Molybdenum: Find possible leaders", function() {
  it("should return 2,3", function() {
    var A = [2, 1, 3, 1, 2, 2, 3];
    var K = 3;
    var M = 5;

    var possibleLeaders = molybdenum.solution(K, M, A);

    expect(possibleLeaders).toEqual([2, 3]);
  });
  it("The returned array should be sorted in ascending order", function() {
    var A = [3, 3, 2, 2, 1, 1];
    var K = 2;
    var M = 5;

    var possibleLeaders = molybdenum.solution(K, M, A);

    expect(possibleLeaders).toEqual([2, 3]);
  });
  it("if there is no number that can become a leader, you should return an empty array", function() {
    var A = [1, 3, 5];
    var K = 1;
    var M = 5;

    var possibleLeaders = molybdenum.solution(K, M, A);

    expect(possibleLeaders).toEqual([]);
  });
  it("if there are multiple ways of choosing a segment to turn some number into a leader, then this particular number should appear in an output array only once", function() {
    var A = [2, 2, 3, 3, 2, 2];
    var K = 2;
    var M = 5;

    var possibleLeaders = molybdenum.solution(K, M, A);

    expect(possibleLeaders).toEqual([2, 3]);
  });
});

describe("Molybdenum: leader of an array", function() {
  it("should return 2", function() {
    var A = [2, 2, 4, 2, 2, 2, 3];
    expect(molybdenum.leader(A)).toBe(2);
  });
  it("should return null", function() {
    var A = [1, 2, 3];
    expect(molybdenum.leader(A)).toBeNull();
  });
});
