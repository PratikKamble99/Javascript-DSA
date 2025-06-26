function searchMatrix(matrix, target) {
  const n = matrix.length;
  const m = matrix[0].length;
  let low = 0;
  let high = n * m - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let row = Math.floor(mid / m);
    let col = mid % m;

    if (matrix[row][col] == target) return true;
    else if (matrix[row][col] < target) low = mid + 1;
    else high = high - 1;
  }

  return false;
}

const matrix = [
  [1, 4, 6],
  [7, 8, 10],
  [12, 18, 29],
  [34, 36, 40],
];

console.log(searchMatrix(matrix, 31));
