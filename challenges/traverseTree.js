/*

Note: Try to solve this task without using recursion, since this is what you'll be asked to do during an interview.

Given a binary tree of integers t, return its node values in the following format:

    The first element should be the value of the tree root;
    The next elements should be the values of the nodes at height 1 (i.e. the root children), ordered from the leftmost to the rightmost one;
    The elements after that should be the values of the nodes at height 2 (i.e. the children of the nodes at height 1) ordered in the same way;
    Etc.

Example

For

t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 4,
        "left": {
            "value": 5,
            "left": null,
            "right": null
        },
        "right": null
    }
}

the output should be
traverseTree(t) = [1, 2, 4, 3, 5].

This t looks like this:

     1
   /   \
  2     4
   \   /
    3 5

Input/Output

    [execution time limit] 4 seconds (js)

    [input] tree.integer t

    Guaranteed constraints:
    0 ≤ tree size ≤ 104.

    [output] array.integer
        An array that contains the values at t's nodes, ordered as described above.

*/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
exports.traverseTree = function traverseTree(t) {
  if (t === null) {
    return [];
  }

  let nodesLeftToRightByLevel = [];
  let currentLevel = [t];
  while (currentLevel.length > 0) {
    let nextLevel = [];
    for (const node of currentLevel) {
      if (node.left) {
        nextLevel.push(node.left);
      }
      if (node.right) {
        nextLevel.push(node.right);
      }
    }
    nodesLeftToRightByLevel = nodesLeftToRightByLevel.concat(currentLevel);
    currentLevel = nextLevel;
  }

  return nodesLeftToRightByLevel
    .filter(element => element.value != null)
    .map(element => element.value);
};
