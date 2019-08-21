/* jshint esversion: 8 */

const describe = require('mocha').describe;
const it = require('mocha').it;
require('chai').should();

const jumpingOnClouds = require('../jumpingOnClouds');

describe('Jumping on clouds', function () {
  it('should return 3 jumps', function () {
    var numberOfValleys = jumpingOnClouds.jumpingOnClouds([0, 0, 0, 0, 1, 0]);
    numberOfValleys.should.eq(3);
  });
  it('should return 0 jumps', function () {
    var numberOfValleys = jumpingOnClouds.jumpingOnClouds([0]);
    numberOfValleys.should.eq(0);
  });
  it('should throw error on impossible to win', function () {
    (() => jumpingOnClouds.jumpingOnClouds([0, 1, 1, 0])).should.throw('Impossible to win');
  });
});
