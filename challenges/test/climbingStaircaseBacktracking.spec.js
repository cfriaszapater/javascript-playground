/* jshint esversion: 8 */

const describe = require('mocha').describe;
const it = require('mocha').it;
require('chai').should();

const climbingStaircaseBacktracking = require('../climbingStaircaseBacktracking');

describe('Backtracking - Climb stair with 1..k steps each jump - Find all possible solutions', function () {
  it('should be ok given n=0, k=0', function () {
    climbingStaircaseBacktracking.climbingStaircase(0, 0).should.eql([[]]);
  });
  it('should be ok given n=1, k=1', function () {
    climbingStaircaseBacktracking.climbingStaircase(1, 1).should.eql([[1]]);
  });
  it('should be ok given n=2, k=2', function () {
    climbingStaircaseBacktracking.climbingStaircase(2, 2).should.eql([[1, 1], [2]]);
  });
  it('should be ok given low n and k', function () {
    climbingStaircaseBacktracking.climbingStaircase(4, 2).should.eql([[1, 1, 1, 1],
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
      [2, 2]]);
  });
  it('should be ok given medium n and k', function () {
    climbingStaircaseBacktracking.climbingStaircase(7, 3).should.eql([[1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2],
      [1, 1, 1, 1, 2, 1],
      [1, 1, 1, 1, 3],
      [1, 1, 1, 2, 1, 1],
      [1, 1, 1, 2, 2],
      [1, 1, 1, 3, 1],
      [1, 1, 2, 1, 1, 1],
      [1, 1, 2, 1, 2],
      [1, 1, 2, 2, 1],
      [1, 1, 2, 3],
      [1, 1, 3, 1, 1],
      [1, 1, 3, 2],
      [1, 2, 1, 1, 1, 1],
      [1, 2, 1, 1, 2],
      [1, 2, 1, 2, 1],
      [1, 2, 1, 3],
      [1, 2, 2, 1, 1],
      [1, 2, 2, 2],
      [1, 2, 3, 1],
      [1, 3, 1, 1, 1],
      [1, 3, 1, 2],
      [1, 3, 2, 1],
      [1, 3, 3],
      [2, 1, 1, 1, 1, 1],
      [2, 1, 1, 1, 2],
      [2, 1, 1, 2, 1],
      [2, 1, 1, 3],
      [2, 1, 2, 1, 1],
      [2, 1, 2, 2],
      [2, 1, 3, 1],
      [2, 2, 1, 1, 1],
      [2, 2, 1, 2],
      [2, 2, 2, 1],
      [2, 2, 3],
      [2, 3, 1, 1],
      [2, 3, 2],
      [3, 1, 1, 1, 1],
      [3, 1, 1, 2],
      [3, 1, 2, 1],
      [3, 1, 3],
      [3, 2, 1, 1],
      [3, 2, 2],
      [3, 3, 1]]);
  });
});
