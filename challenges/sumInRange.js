exports.sumInRange = function sumInRange(nums, queries) {
  const prefixSumArray = prefixSum(nums);
  const queryResults = [];
  for (const query of queries) {
    queryResults.push(sumRange(prefixSumArray, query[0], query[1]));
  }
  const sumOfQueryResults = queryResults.reduce((a, b) => a + b, 0);
  return modulo(sumOfQueryResults, 10 ** 9 + 7);
};

function sumRange(prefixSumArray, i, j) {
  return prefixSumArray[j + 1] - prefixSumArray[i];
}

function prefixSum(nums) {
  const prefixSumArray = [0];
  for (let i = 0; i < nums.length; i++) {
    prefixSumArray[i + 1] = prefixSumArray[i] + nums[i];
  }
  return prefixSumArray;
}

function modulo(dividend, divisor) {
  return dividend - divisor * Math.floor(dividend / divisor);
}

exports.modulo = modulo;
exports.prefixSum = prefixSum;
