const { NotImplementedError } = require('../extensions/index.js');

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
function encodeLine(s) {
  let str =[...s]
  let key = []
  let value = []
  for(let i=0; i<str.length; i++){
  if(str[i]=== value[value.length -1]){
  key[key.length-1] +=1
  }else{
  value.push(str[i])
  key.push(1)
  }
  }
  let res = []
  for(let i=0; i<key.length; i++){
  res.push(key[i])
  res.push(value[i])
  }
    let strRes= res.join('').replace(/[1]/gi,'')
  return strRes
}

module.exports = {
  encodeLine
};
