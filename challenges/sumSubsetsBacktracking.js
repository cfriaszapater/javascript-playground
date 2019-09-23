exports.sumSubsets = function sumSubsets(arr, num) {
  return dedup(sortMatrixLexicographically(sumRec([], 0)));

  function sumRec(selected, posIni) {
    let subsetResults = [];
    const selectedSum = selected.reduce(reducer, 0);
    if (selectedSum === num) {
      subsetResults.push(selected);
      return subsetResults;
    }

    for (let i = posIni; i < arr.length; i++) {
      if (selectedSum + arr[i] > num) {
        // Backtrack
        break;
      }

      let selectedPlusCurrent = selected.slice(0);
      selectedPlusCurrent.push(arr[i]);
      subsetResults = subsetResults.concat(sumRec(selectedPlusCurrent, i + 1));
    }

    return subsetResults;
  }
};

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function sortMatrixLexicographically(matrix) {
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

const dedup = matrix => matrix.filter(checkIfArrayUniqueInSortedMatrix);

function checkIfArrayUniqueInSortedMatrix(value, index, matrix) {
  return index === 0 || !arrayEquals(matrix[index - 1], value);
}

function arrayEquals(array1, array2) {
  // if the other array is a falsy value, return
  if (!array2) return false;

  // compare lengths - can save a lot of time
  if (array1.length != array2.length) return false;

  for (var i = 0, l = array1.length; i < l; i++) {
    // Check if we have nested arrays
    if (array1[i] instanceof Array && array2[i] instanceof Array) {
      // recurse into the nested arrays
      if (!array1[i].equals(array2[i])) return false;
    } else if (array1[i] != array2[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
}
