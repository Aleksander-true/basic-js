import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let regExp = /@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  let domain = email.match(regExp); 
  
  return domain ? domain[0].slice(1) : "";
}

/*
console.log( getEmailDomain('prettyandsimple@example.com')  );
*/