exports.addTwoDigits = function addTwoDigits(n) {
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
};
