/* jshint esversion: 8 */

function climbingStaircase (n, k) {
  var paths = [];
  explore(n, []);
  return paths;

  function explore (n, path) {
    if (isLeaf()) {
      if (isSolution()) {
        paths.push(path);
        return true;
      } else {
        return false;
      }
    } else {
      let foundAnyDownThisPath = false;
      for (let i = 1; i <= k; i++) {
        if (explore(n - i, path.concat(i))) {
          foundAnyDownThisPath = true;
        }
      }
      return foundAnyDownThisPath;
    }

    function isSolution () {
      return n === 0;
    }

    function isLeaf () {
      return n <= 0;
    }
  }
}

exports.climbingStaircase = climbingStaircase;
