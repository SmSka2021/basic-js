const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 */
 function repeater1(options ) {
 let str =''
 let addition
 if(typeof options.addition === "undefined"){
  addition = ''
 } else{
   addition = '' + options.addition 
 }
 
 let countRepeat =  options.additionRepeatTimes || 1
 let separator = options.additionSeparator || "|"
for(let i= 1; i<countRepeat; i++){
  str += addition +separator
}
str += addition

return str
}

function repeater(str1, options) {
  if(!options){
    return str1
  }
  let str = '' + str1
 let res = ''
 let countRepeat = options.repeatTimes || 1
let separator = options.separator || "+"
let addition = repeater1(options)
for (let i = 1; i<countRepeat; i++){
  res += str + addition + separator
}
res += str + addition
return res

}
; 
module.exports = {
  repeater
};
repeater(repeater('la', { repeatTimes: 3 }))
//, 'la+la+la');