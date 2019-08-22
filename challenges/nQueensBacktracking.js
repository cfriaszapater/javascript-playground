/* jshint esversion: 8 */

function nQueens (n) {
  var boardConfigurationSolutions = [];
  if (n > 0) {
    explore(0, []);
  }
  return sortMatrixLexicographically(boardConfigurationSolutions);

  function explore (column, boardConfiguration) {
    if (!isSafe(boardConfiguration)) {
      return false;
    }

    if (isLeaf()) {
      if (isSafe(boardConfiguration)) {
        boardConfigurationSolutions.push(boardConfiguration);
        return true;
      } else {
        return false;
      }
    } else {
      let foundAnySolutionDownThisPath = false;
      for (let row = 1; row <= n; row++) {
        if (explore(column + 1, boardConfiguration.concat(row))) {
          foundAnySolutionDownThisPath = true;
        }
      }
      return foundAnySolutionDownThisPath;
    }

    function isLeaf () {
      return column >= n;
    }
  }
}

// Check if queen in last column of the boardConfiguration threatens / is threatened agains the queens at the left
function isSafe (boardConfiguration) {
  if (boardConfiguration.length <= 1) {
    return true;
  }

  var column = boardConfiguration.length;
  var row = boardConfiguration[column - 1];
  return !(threatenedRowLeft(row, column, boardConfiguration)) &&
    !(threatenedDiagonalUpleft(row, column, boardConfiguration)) &&
    !(threatenedDiagonalDownLeft(row, column, boardConfiguration));
}

function threatenedRowLeft (row, column, boardConfiguration) {
  for (let i = column - 1; i >= 1; i--) {
    const rowInColumnI = boardConfiguration[i - 1];
    if (rowInColumnI === row) {
      return true;
    }
  }
  return false;
}

function threatenedDiagonalUpleft (row, column, boardConfiguration) {
  for (let i = column - 1; i >= 1; i--) {
    const rowInColumnI = boardConfiguration[i - 1];
    let colDiff = column - i;
    if (rowInColumnI === row + colDiff) {
      return true;
    }
  }
  return false;
}

function threatenedDiagonalDownLeft (row, column, boardConfiguration) {
  for (let i = column - 1; i >= 1; i--) {
    const rowInColumnI = boardConfiguration[i - 1];
    let colDiff = column - i;
    if (rowInColumnI === row - colDiff) {
      return true;
    }
  }
  return false;
}

function sortMatrixLexicographically (matrix) {
  return matrix.sort((array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] < array2[i]) {
        return -1;
      } else if (array1[i] > array2[i]) {
        return 1;
      }
      // equal, continue
    }
    // all elements equal
    return 0;
  });
}

exports.nQueens = nQueens;
exports.isSafe = isSafe;
exports.threatenedDiagonalDownLeft = threatenedDiagonalDownLeft;
exports.threatenedDiagonalUpleft = threatenedDiagonalUpleft;
exports.threatenedRowLeft = threatenedRowLeft;
exports.sortMatrixLexicographically = sortMatrixLexicographically;
