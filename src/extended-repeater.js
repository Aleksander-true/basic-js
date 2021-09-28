import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str = '', options) {   
  let strAddition = '';
  let strAdditionSeparator = options.additionSeparator || '|';
  let strSeparator = options.separator || '+';
  str = String(str);

  if (options.addition !== undefined) {
    strAddition = String(options.addition);
    if (options.additionRepeatTimes > 0) { 
      strAddition = Array(options.additionRepeatTimes).fill(strAddition).join(strAdditionSeparator);
    }
  } 
  
  if (str) {
    if (options.repeatTimes > 0) { 
      str = Array(options.repeatTimes).fill(str+strAddition).join(strSeparator);
    } else if (strAddition) str = str + strAddition;
  }
  return str;
}
