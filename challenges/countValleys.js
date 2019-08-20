/* jshint esversion: 8 */

exports.countValleys = function (n, s) {
  var foundValleys = 0;
  var altitude = 0;
  for (let i = 0; i < s.length && i < n; i++) {
    const step = s[i];
    if (step === 'U') {
      altitude++;
      if (altitude === 0) {
        foundValleys++;
      }
    } else {
      altitude--;
    }
  }
  return foundValleys;
};
