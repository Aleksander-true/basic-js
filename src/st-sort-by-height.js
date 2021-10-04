import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let positions = [];
  let outs = []
  arr.forEach( (item,i) => {
    if (item == -1) positions.push(i)
    else outs.push(item);
  })
  outs.sort( (a,b) => a - b );
  positions.forEach( i => {
    outs.splice(i,0,-1);
  })
  return outs;
}
