/* jshint esversion: 8 */

exports.sockMerchant = function sockMerchant (n, ar) {
  var unpairedFoundSocks = new Set();
  var pairsFound = 0;
  for (let i = 0; i < ar.length && i < n; i++) {
    const sock = ar[i];
    if (unpairedFoundSocks.has(sock)) {
      pairsFound++;
      unpairedFoundSocks.delete(sock);
    } else {
      unpairedFoundSocks.add(sock);
    }
  }
  return pairsFound;
}
;
