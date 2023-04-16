const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
if (!Array.isArray(arr)){
  throw new Error(`'arr' parameter must be an instance of the Array!`)
}
let array = [...arr]
let value 
if (array.every(element => typeof element === 'number')) {
  return arr
}
  for (let i = 0; i< array.length; i++){
    value = array[i]
    if (typeof value === 'string'){
      if (value === '--double-next'){
        if (array [i + 1]){
          array[i] = array[i+1]
        } else {
          array[i] = ''
        }
      }
      if ( value === '--double-prev'){
        if ( array [i-1]){
          array[i] = array[i-1]
        } else {
          array[i] = ''
        }
      }
      if ( value === '--discard-prev'){
        if ( array[i - 1]){
          array[i - 1] = ''
          array[i] = ''
        } else {
          array[i] = ''
        }
      }
      if ( value === '--discard-next'){
        if ( array[i + 1]){
          array[i + 1] = ''
          array[i] = ''
        } else {
          array[i] = ''
        }
      }
    }
  }
  return array.filter(element => element != '')
}

module.exports = {
  transform
};
