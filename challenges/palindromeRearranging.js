exports.palindromeRearranging = function palindromeRearranging(inputString) {
  const chars = inputString.split("");

  const charsCount = count(chars);

  return (
    charsCount.reduce(
      (accum, currentValue) => (currentValue % 2 != 0 ? accum + 1 : accum),
      0
    ) < 2
  );
};

function count(array) {
  const charOccurrences = new Map();
  for (let i = 0; i < array.length; i++) {
    const char = array[i];
    if (charOccurrences.has(char)) {
      charOccurrences.set(char, charOccurrences.get(char) + 1);
    } else {
      charOccurrences.set(char, 1);
    }
  }
  return [...charOccurrences.values()];
}
