import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats( domains ) {
  let outObj = {};
  domains.forEach(str => {
    let domain = '';
    str.split('.').reverse().forEach( substr => {
      domain += '.' + substr; 
      if (outObj.hasOwnProperty(domain)) outObj[domain] += 1
      else outObj[domain] = 1;
    })
  })
  return outObj;
}
