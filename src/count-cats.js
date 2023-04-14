const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let arrayLength
  let i
  let j
  let count = 0
  for (i = 0; i < matrix.length; i++){
    arrayLength = matrix[i].length;
    for (j = 0; j < arrayLength; j++){
      if (matrix[i][j] === '^^' ){
        count++
      }
    }
  }
  return count
}

module.exports = {
  countCats
};
