import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  let outs = arr.slice();
  if (!Array.isArray(arr)) throw "'arr' parameter must be an instance of the Array!";
  outs.forEach((item,i,ar) => {
    switch (item) {
      case '--discard-next':
        outs.splice(i,2,null);
        break;
      
      case '--discard-prev':
        if (ar[i-1] === null || i == 0 ) outs.splice(i,1)
        else  outs.splice(i-1,2,null);
        
        break;
      case '--double-next':
        if (i == ar.length-1 ) outs.splice(i,1)
        else  outs.splice(i,1,ar[i+1]);   
        break;
      case '--double-prev':
        if ( i == 0 || ar[i-1] === null ) outs.splice(i,1)  
        else outs.splice(i,1,ar[i-1]); 
        break; 
    }
  })
  return outs.filter(item => item != null );
}
