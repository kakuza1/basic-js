const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
let strToString = str
let result = ''
let repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|';
// проверка на существование свойств
if (options != false){
  if (options.repeatTimes != undefined){
    repeatTimes = options.repeatTimes
  }
  if (options.separator != undefined){
    separator = options.separator
  }
  if (options.addition != undefined){
    addition = options.addition
  }
  if (options.additionRepeatTimes != undefined){
    additionRepeatTimes = options.additionRepeatTimes
  }
  if (options.additionSeparator != undefined){
   additionSeparator = options.additionSeparator
  }
}
if (options.addition === null){
  addition = null
}
let second = addition // addition + additionSeparation * additionRepeatTimes
if (additionRepeatTimes <= 1){
  additionSeparator = ''
} else if (additionRepeatTimes > 1){
  for (let i = 1; i < additionRepeatTimes; i++){
    second += additionSeparator + addition // делаю вторую часть строки
  }
}
result = strToString + second // при repeatTimes = 1
if (repeatTimes > 1){
  for ( let i = 1; i < repeatTimes; i++){
    result += separator + strToString + second
  }
}
return result 
}

module.exports = {
  repeater
};
