exports.addBorder = function addBorder(picture) {
  const matrix = rowsToArray(picture);

  const side = picture[0].length;
  const horizontalBorder = borderRow(side + 2);
  const picWithVerticalBorder = addVerticalBorder(matrix);
  const matrixWithBorder = picWithVerticalBorder;
  matrixWithBorder.unshift(horizontalBorder);
  matrixWithBorder.push(horizontalBorder);

  return rowsToString(matrixWithBorder);
};

function rowsToArray(pic) {
  const matrix = [];
  for (const stringRow of pic) {
    matrix.push(stringRow.split(""));
  }
  return matrix;
}

function rowsToString(matrix) {
  const pic = [];
  for (const row of matrix) {
    pic.push(row.join(""));
  }
  return pic;
}

function borderRow(size) {
  const row = [];
  for (let i = 0; i < size; i++) {
    row.push("*");
  }
  return row;
}

function addVerticalBorder(matrix) {
  for (const row of matrix) {
    row.unshift("*");
    row.push("*");
  }
  return matrix;
}
