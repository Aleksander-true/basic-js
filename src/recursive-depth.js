import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr, currentDepth = 1) {
    let depth = currentDepth;
    for (let item of arr) {
      if (Array.isArray(item)) {
        let temp = currentDepth  + this.calculateDepth(item, currentDepth); 
        if (temp > depth) depth = temp; 
      }
    }
    return depth;
  }
}
