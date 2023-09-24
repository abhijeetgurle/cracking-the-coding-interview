// Using extra matrix
// Space Complexity:- O(M * N)
// Time Complexity:- O(M * N)
const zeroMatrix = (matrix) => {
  const res = [...matrix];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        row = i;
        column = j;

        for (let k = 0; k < matrix[row].length; k++) {
          res[row][k] = 0;
        }

        for (let k = 0; k < matrix.length; k++) {
          res[k][column] = 0;
        }
      }
    }
  }

  return res;
};

// Time Complexity:- O(M*N)
// Space Complexity:- O(1)
const zeroMatrixOptimised = (matrix) => {
  let isRow = false;
  let isColumn = false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        if (j === 0) {
          isColumn = true;
        }
        if (i === 0) {
          isRow = true;
        }
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (isRow) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }
  if (isColumn) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
};

console.log(
  zeroMatrix([
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 0],
  ])
);
console.log(
  zeroMatrixOptimised([
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 0],
  ])
);
