/* jshint esversion: 8 */

function houseRobber (array) {
  if (array == null || array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  }

  var results = [];
  results.push(array[0]);
  results.push(Math.max(array[0], array[1]));
  for (let i = 2; i < array.length; i++) {
    results.push(Math.max(results[i - 2] + array[i], results[i - 1]));
  }
  return results[array.length - 1];
}

exports.houseRobber = houseRobber;
