import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let outs = [];
  let count = 1;
  str.split("").forEach( (item,i,arr) => {
    
    if (item === arr[i+1]) count++
    else if (count == 1) outs.push(item)
    else {
      outs.push(String(count) + item);
      count = 1;
    }
  })
  return outs.join('');
}

console.log(encodeLine('aabbbc'));