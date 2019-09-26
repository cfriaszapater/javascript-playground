exports.solution = function solution(A) {
  const n = A.length;
  const occurrencesInRange1toN = new Set([]);
  for (let i = 0; i < A.length; i++) {
    const e = A[i];
    if (e >= 1 && e <= n) {
      occurrencesInRange1toN.add(e);
    } else {
      return 0;
    }
  }
  return occurrencesInRange1toN.size === n ? 1 : 0;
};
