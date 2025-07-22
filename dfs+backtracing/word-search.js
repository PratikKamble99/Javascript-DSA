// https://leetcode.com/problems/word-search/

/* 

In this question you have to use DFS + BACKtracking approach


*/

var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      const found = dfs(board, r, c, word, 0);
      if (found) return true;
    }
  }

  return false;

  function dfs(board, r, c, word, wordIndex) {
    // base case
    if (wordIndex >= word.length) return true;

    // Out of matrix/Bound cases
    if (r < 0 || r >= m || c >= n || c < 0) return false;

    // char match with index case
    if (board[r][c] == " " || word[wordIndex] != board[r][c]) return false;

    // visited mark
    const char = board[r][c];
    board[r][c] = "&";

    // word match case
    if (
      dfs(board, r - 1, c, word, wordIndex + 1) ||
      dfs(board, r + 1, c, word, wordIndex + 1) ||
      dfs(board, r, c + 1, word, wordIndex + 1) ||
      dfs(board, r, c - 1, word, wordIndex + 1)
    )
      return true;

    // backtracking case
    board[r][c] = char;
    return false;
  }
};
