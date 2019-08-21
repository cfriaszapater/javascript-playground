/* jshint esversion: 8 */

const describe = require('mocha').describe;
const it = require('mocha').it;
require('chai').should();

const repeatedString = require('../repeatedString');

describe('Count occurrences of \'a\' in inifinitely repeating string up to \'n\' character', function () {
  it('should return 7', function () {
    repeatedString.ocurrencesOfAInRepeatingString('aba', 10).should.eq(7);
  });
  it('should return 1 on n lesser than string length', function () {
    repeatedString.ocurrencesOfAInRepeatingString('aba', 2).should.eq(1);
  });
  it('should return 0 on string with no \'a\'', function () {
    repeatedString.ocurrencesOfAInRepeatingString('grmblf', 2).should.eq(0);
  });
});

describe('Count occurrences of \'a\' in string', function () {
  it('should return 2', function () {
    repeatedString.occurrencesOfAIn('aba').should.eq(2);
  });
});

describe('Count occurrences of \'a\' in remainder', function () {
  it('should return 2', function () {
    repeatedString.occurrencesInRemainder('abababa', 3).should.eq(2);
  });
});
