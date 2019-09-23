exports.containsDuplicates = function containsDuplicates(array) {
  const set = new Set([]);
  for (const e of array) {
    if (set.has(e)) {
      return true;
    }
    set.add(e);
  }
  return false;
};
