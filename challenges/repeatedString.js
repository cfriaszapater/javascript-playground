/* jshint esversion: 8 */

function ocurrencesOfAInRepeatingString (s, n) {
  if (s.length <= n) {
    var remainderChars = n % s.length;
    return occurrencesOfAIn(s) * Math.floor(n / s.length) + occurrencesInRemainder(s, remainderChars);
  } else {
    return occurrencesInRemainder(s, n);
  }
}

function occurrencesInRemainder (s, remainderChars) {
  return occurrencesOfAIn(s.substring(0, remainderChars));
}

function occurrencesOfAIn (s) {
  var occurrences = s.match(/a/g);
  if (occurrences == null) {
    return 0;
  } else {
    return occurrences.length;
  }
}

exports.ocurrencesOfAInRepeatingString = ocurrencesOfAInRepeatingString;
exports.occurrencesInRemainder = occurrencesInRemainder;
exports.occurrencesOfAIn = occurrencesOfAIn;
