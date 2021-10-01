import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  n = String(n);
  for (let i=0; i <= 9; i++) {
    if (n.includes(`${i}`)) { 
      //let lastIndex = n.lastIndexOf(`${i}`)
      //console.log(lastIndex)
      //n = n.slice(lastIndex, lastIndex+1)
      n = n.replace(`${i}`, '');
      break;
    }
  }
  return Number(n);
}

//console.log( deleteDigit(152))