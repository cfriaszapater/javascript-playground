/* jshint esversion: 8 */

const describe = require('mocha').describe;
const it = require('mocha').it;
require('chai').should();

const houseRobber = require('../houseRobber');

describe('Dynamic programming - Determine the maximum sum of non-adjacent elements', function () {
  it('should be 0 given empty array', function () {
    houseRobber.houseRobber([]).should.eq(0);
  });
  it('should be element given one element', function () {
    houseRobber.houseRobber([0]).should.eq(0);
    houseRobber.houseRobber([13]).should.eq(13);
  });
  it('should be max element given two elements', function () {
    houseRobber.houseRobber([3, 4]).should.eq(4);
    houseRobber.houseRobber([1, 1]).should.eq(1);
  });
  it('Should sum two non-adjacent given four elements', function () {
    houseRobber.houseRobber([1, 7, 9, 4]).should.eq(11);
  });
});
