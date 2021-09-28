import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  _chain: [],

  getLength() {
    return this._chain.length;
  },

  addLink(value = '') {
    this._chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof position != 'number' || this._chain.length == 0 || position <= 0 || position > this._chain.length) {
      this._chain = []; 
      throw new Error(`You can't remove incorrect link!`);
      };

    this._chain.splice(position-1,1)
    return this;
  },

  reverseChain() {
    this._chain.reverse();
    return this;
  },
  finishChain() {
    let out = this._chain.join('~~');
    this._chain = [];
    return out;
  }
};
