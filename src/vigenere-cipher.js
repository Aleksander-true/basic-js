import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {

  constructor (direct = true) {
    this.isStraight = direct;
    this.ALPHABET_SIZE = 26;
    this.ALPHABET_SHIFT = 'A'.charCodeAt(0);
    this.latinChar = /[A-Z]/;
  }
  
  encrypt(text,key) {
    if (!text || !key) throw "Error";
    let codeIndex = 0;

    text = text.toUpperCase().split('');
    key  = key.toUpperCase().repeat(Math.ceil(text.length/key.length)).slice(0,text.length).split('');

    text = text.map((textChar) => {
      if (this.latinChar.test(textChar)) {
        return this.toChar((this.toCode(textChar) + this.toCode(key[codeIndex++])) % this.ALPHABET_SIZE)
      } else {
        return textChar;
      }
    })

    return this.isStraight ? text.join('') : text.reverse().join('');
  }    

  decrypt(text,key) {
    if (!text || !key) throw "Error";
    let codeIndex = 0;
    text = text.toUpperCase().split('');
    key  = key.toUpperCase().repeat(Math.ceil(text.length/key.length)).slice(0,text.length).split('');
    
    

    text = text.map((textChar) => {
      if (this.latinChar.test(textChar)) {
        return this.toChar((this.toCode(textChar) - this.toCode(key[codeIndex++])  + this.ALPHABET_SIZE ) % this.ALPHABET_SIZE)
      } else {
        return textChar
      }
    })
    return this.isStraight ? text.join('') : text.reverse().join('');
  }
  
  toCode(char) {
    return char.charCodeAt(0) - this.ALPHABET_SHIFT;
  }

  toChar(number) {
    return String.fromCharCode(number + this.ALPHABET_SHIFT) ;
  }

}
