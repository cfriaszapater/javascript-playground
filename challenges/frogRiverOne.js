exports.solution = function solution(X, A) {
  const occurrencesInRange1toX = new Set([]);
  for (let i = 0; i < A.length; i++) {
    const element = A[i];
    occurrencesInRange1toX.add(element);
    if (occurrencesInRange1toX.size === X) {
      return i;
    }
  }
  return -1;
};
