exports.sortByHeight = function sortByHeight(peopleAndTrees) {
  const treeIndexes = treePositions(peopleAndTrees);
  let people = removeTrees(peopleAndTrees);
  people = people.sort((a, b) => a - b);
  return addTrees(people, treeIndexes);
};

function treePositions(peopleAndTrees) {
  const treeIndexes = [];
  for (let i = 0; i < peopleAndTrees.length; i++) {
    if (peopleAndTrees[i] === -1) {
      treeIndexes.push(i);
    }
  }
  return treeIndexes;
}

function removeTrees(peopleAndTrees) {
  return peopleAndTrees.filter(item => item !== -1);
}

function addTrees(people, treeIndexes) {
  let peopleAndTrees = people.slice(0);
  for (let i = 0; i < treeIndexes.length; i++) {
    peopleAndTrees.splice(treeIndexes[i], 0, -1);
  }
  return peopleAndTrees;
}

exports.addTrees = addTrees;
