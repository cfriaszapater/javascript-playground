exports.areSimilar = function areSimilar(a, b) {
  const diffIndexes = [];
  for (let i = 0; i < a.length && diffIndexes.length <= 2; i++) {
    if (a[i] !== b[i]) {
      diffIndexes.push(i);
    }
  }

  if (diffIndexes.length > 2 || diffIndexes.length === 1) {
    return false;
  } else if (diffIndexes.length === 0) {
    return true;
  } else {
    return (
      a[diffIndexes[0]] === b[diffIndexes[1]] &&
      a[diffIndexes[1]] === b[diffIndexes[0]]
    );
  }
};
