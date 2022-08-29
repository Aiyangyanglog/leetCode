/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let row = {};
  let col = {};
  let box = {};
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num !== ".") {
        let boxIndex = parseInt(i / 3) * 3 + parseInt(j / 3);
        if (
          row[i + "-" + num] ||
          col[j + "-" + num] ||
          box[boxIndex + "-" + num]
        ) {
          return false;
        } else {
          row[i + "-" + num] = true;
          col[j + "-" + num] = true;
          box[boxIndex + "-" + num] = true;
        }
      }
    }
  }
  return true;
};
