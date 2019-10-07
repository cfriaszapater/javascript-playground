exports.arrayChange = function arrayChange(inputArray) {
  if (!inputArray || inputArray.length === 0) {
    return 0;
  }

  let movesNeeded = 0;
  let requiredVal = inputArray[0] + 1;
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= requiredVal) {
      movesNeeded += requiredVal - inputArray[i];
      requiredVal++;
    } else {
      requiredVal = inputArray[i] + 1;
    }
  }

  return movesNeeded;
};
