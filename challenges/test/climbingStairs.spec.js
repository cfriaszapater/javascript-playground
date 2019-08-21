/* jshint esversion: 8 */

const describe = require('mocha').describe;
const it = require('mocha').it;
require('chai').should();

const climbingStairs = require('../climbingStairs');

describe('Dynamic programming - Find how many different ways to climb stairs with steps of 1 or 2', function () {
  it('Should return 3', function () {
    climbingStairs.climbingStairs(3).should.eq(3);
  });
  it('Should return 5', function () {
    climbingStairs.climbingStairs(4).should.eq(5);
  });
  it('Should return 21', function () {
    climbingStairs.climbingStairs(7).should.eq(21);
  });
  it('Should return 6765', function () {
    climbingStairs.climbingStairs(19).should.eq(6765);
  });
});
