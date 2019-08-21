/* jshint esversion: 8 */

function climbingStairs (n) {
  var results = [];
  results.push(1);
  results.push(2);
  for (let i = 2; i < n; i++) {
    results.push(results[i - 2] + results[i - 1]);
  }
  return results[n - 1];
}

exports.climbingStairs = climbingStairs;
