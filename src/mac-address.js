const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(str) {  
  let clone = str
  let strNotNumb =clone.replace(/[0-9A-F]/gi,'')
   let newAr= strNotNumb.split("")
    console.log(newAr)
   if(newAr.length !== 5){
    return false 
     } else{
          for(let i=0; i< newAr.length; i++){
                if(newAr[i] !== "-"){
                 return false
                 } else{
               return true
              } 
          }
  
          }  
        }    
       
   



module.exports = {
  isMAC48Address
};
