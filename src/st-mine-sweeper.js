import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (m) {
  let out = [];
  for (let i=0; i<m.length; i++) {
    out.push([]);
    for (let j=0; j<m[i].length; j++) {
      let minen = 0;
      if (m[i-1] && m[i-1][j-1]===true) minen++;
      if (m[i-1] && m[i-1][j]===true) minen++;
      if (m[i-1] && m[i-1][j+1]===true) minen++;
      if (m[i] && m[i][j+1]===true) minen++;
      if (m[i] && m[i][j-1]===true) minen++;
      if (m[i+1] && m[i+1][j+1]===true) minen++;
      if (m[i+1] && m[i+1][j]===true) minen++;
      if (m[i+1] && m[i+1][j-1]===true) minen++;
      out[i].push(minen);
    }
  }
  return out;
}
