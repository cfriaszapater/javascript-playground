exports.solution = function solution(A) {
  const occurrencesInRange1toN = countOccurrencesInRange1toN(A);

  return firstMissingPostiveInteger(occurrencesInRange1toN);
};

function countOccurrencesInRange1toN(A) {
  const n = A.length;
  const occurrencesInRange1toN = arrayWithZeroes(n);
  for (let i = 0; i < n; i++) {
    const element = A[i];
    if (element >= 1 && element <= n) {
      occurrencesInRange1toN[element - 1]++;
    }
  }
  return occurrencesInRange1toN;
}

function arrayWithZeroes(n) {
  const array = Array(n);
  for (let i = 0; i < n; i++) {
    array[i] = 0;
  }
  return array;
}

function firstMissingPostiveInteger(occurrencesInRange1toN) {
  const n = occurrencesInRange1toN.length;
  for (let i = 0; i < n; i++) {
    if (occurrencesInRange1toN[i] === 0) {
      return i + 1;
    }
  }
  return n + 1;
}
