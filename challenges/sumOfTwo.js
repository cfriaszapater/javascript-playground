exports.sumOfTwo = function sumOfTwo(arrayA, arrayB, v) {
  const bSet = new Set(arrayB);
  return arrayA.some(ai => bSet.has(v - ai));
};
