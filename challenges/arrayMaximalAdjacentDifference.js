function arrayMaximalAdjacentDifference(inputArray) {
  return inputArray.reduce((maxAbsDiff, currentValue, i, array) => {
    if (i === 0) {
      return 0;
    }

    const max = Math.max(array[i], array[i - 1]);
    const min = Math.min(array[i], array[i - 1]);
    const diff = Math.abs(max - min);
    if (diff > maxAbsDiff) {
      return diff;
    } else {
      return maxAbsDiff;
    }
  }, 0);
}
