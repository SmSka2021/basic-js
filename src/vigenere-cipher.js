const { NotImplementedError } = require('../extensions/index.js');

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
class VigenereCipheringMachine {
  constructor(direct = true){
    this.direct = direct
  }
  encrypt(msg1, key1) {
   
    if(!msg1 || !key1){
      throw new Error("Incorrect arguments!");
    }
    if(!this.direct){
      msg1 = msg1.split("").reverse().join("")
    }
let msg = msg1.toLowerCase()
let key = key1.toLowerCase()
    let count = 0;
    let decodMsg = "";
    for (let i = 0; i < msg.length; i++) {
      if (!this.isAlfa(msg[i])) {
        decodMsg += msg[i];
        count += 1;
        continue;
      }
      let keyInd = (i - count) % key.length;
      let item = this.decodChar(msg.charCodeAt(i), key.charCodeAt(keyInd));
      decodMsg += String.fromCharCode(item);
    }
    return decodMsg.toUpperCase();
  }
  isAlfa(char) {
    return char.charCodeAt(0) < 97 + 26 && char.charCodeAt(0) >= 97;
  }
  uniCod(str) {
    let str2 = str.toLowerCase();
    let res = [];
    for (let i = 0; i < str2.length; i++) {
      res.push(str2.charCodeAt(i));
    }
    return res;
  }
  decodChar(ind1, ind2) {
    return ((ind1 + ind2 - 97 * 2) % 26) + 97;
  }
  undecodChar(ind1, ind2) {
    return ((ind1 - ind2 +26) % 26) + 97;
  }

  
  decrypt(msg1, key1) {
    if(!msg1 || !key1){
      throw new Error("Incorrect arguments!");
    }
    if(!this.direct){
      msg1 = msg1.split("").reverse().join("")
    }
    let msg = msg1.toLowerCase()
    let key = key1.toLowerCase()
    let count = 0;
    let decodMsg = "";
    for (let i = 0; i < msg.length; i++) {
      if (!this.isAlfa(msg[i])) {
        decodMsg += msg[i];
        count += 1;
        continue;
      }
      let keyInd = (i - count) % key.length;
      let item = this.undecodChar(msg.charCodeAt(i), key.charCodeAt(keyInd));
      decodMsg += String.fromCharCode(item);
    }
    return decodMsg.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};

console.log(2);
let newCar = new VigenereCipheringMachine();
console.log(newCar.encrypt('Same length key', 'Samelengthkey'));
