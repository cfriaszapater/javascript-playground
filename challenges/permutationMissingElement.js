exports.solution = function solution(A) {
  const possibleElements = new Set([]);
  for (let i = 1; i <= A.length + 1; i++) {
    possibleElements.add(i);
  }
  A.forEach(element => {
    possibleElements.delete(element);
  });
  return possibleElements.values().next().value;
};
