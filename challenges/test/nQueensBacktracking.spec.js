/* jshint esversion: 8 */

const describe = require('mocha').describe;
const it = require('mocha').it;
require('chai').should();

const nQueensBacktracking = require('../nQueensBacktracking');

describe('Backtracking - N-queens problem - Find all possible solutions', function () {
  it('should be ok given n=0', function () {
    nQueensBacktracking.nQueens(0).should.eql([]);
  });
  it('should be ok given n=1', function () {
    nQueensBacktracking.nQueens(1).should.eql([[1]]);
  });
  it('should be ok given n=2', function () {
    nQueensBacktracking.nQueens(2).should.eql([]);
  });
  it('should be ok given n=3', function () {
    nQueensBacktracking.nQueens(3).should.eql([]);
  });
  it('should be ok given low n', function () {
    nQueensBacktracking.nQueens(4).should.eql([[2, 4, 1, 3],
      [3, 1, 4, 2]]);
  });
  it('should be ok given medium n', function () {
    nQueensBacktracking.nQueens(6).should.eql([[2, 4, 6, 1, 3, 5],
      [3, 6, 2, 5, 1, 4],
      [4, 1, 5, 2, 6, 3],
      [5, 3, 1, 6, 4, 2]]);
  });
});

describe('Check if a new position is safe', function () {
  it('should be safe in second column', function () {
    nQueensBacktracking.isSafe([1, 3]).should.be.true;
  });
  it('should not be safe (threatened row) in second column', function () {
    nQueensBacktracking.isSafe([1, 1]).should.be.false;
  });
  it('should not be safe (threatened diagonal up left) in second column', function () {
    nQueensBacktracking.isSafe([1, 2]).should.be.false;
  });
  it('should not be safe (threatened diagonal down left) in second column', function () {
    nQueensBacktracking.isSafe([2, 1]).should.be.false;
  });
  it('should be safe in third column', function () {
    nQueensBacktracking.isSafe([1, 4, 2]).should.be.true;
  });
  it('should not be safe in third column', function () {
    nQueensBacktracking.isSafe([1, 4, 3]).should.be.false;
  });
});

describe('Sort board configurations (matrix) lexicographically', function () {
  it('should sort', function () {
    nQueensBacktracking.sortMatrixLexicographically([[2, 1], [1, 2]]).should.eql([[1, 2], [2, 1]]);
  });
});
