const transpose = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < row; column++) {
      let temp = matrix[row][column];
      matrix[row][column] = matrix[column][row];
      matrix[column][row] = temp;
    }
  }
  return matrix;
};

const reverse = (matrix) => matrix.map((row) => row.reverse());

const rotateMatrixBy90 = (matrix) => {
  return reverse(transpose(matrix));
};

console.log(
  rotateMatrixBy90([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ])
);
