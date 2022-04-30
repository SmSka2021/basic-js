const { NotImplementedError } = require('../extensions/index.js');

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
 function reverse(str1){
  let str = "."+str1
  let arr = Array.from(str)
  let newAr = [] 
  for(let i= arr.length-1; i>-1; i--){
  if(arr[i]=== "."){
  let strSlise = arr.splice(i)
  newAr.push(strSlise)
  }
  }
  let res=''
  for(let i = 0; i<newAr.length; i++ ){
  for(let j = 0; j<newAr[i].length; j++ ){
  res += newAr[i][j]
  }
  }
  return res
  }

function getDNSStats(domains ) {
  
  let tempArr =[]
 let map = new Map()
  let value = 1;
  for (let i = 0; i < domains.length; i++) {
    if (!map.has(domains[i])) {
      map.set(domains[i], value);
    } else {
      let currentValue = map.get(domains[i]);
      map.set(domains[i], currentValue + 1);
    }
   
   for(let j = 0; j<domains[i].length; j++){
if(domains[i][j]==="."){
  let s = domains[i].slice(j+1)
  tempArr.push(s)
}
   }
  }
  for(let i = 0; i<tempArr.length; i++){
    if (!map.has(tempArr[i])) {
      map.set(tempArr[i], value);
    } else {
      let currentValue = map.get(tempArr[i]);
      map.set(tempArr[i], currentValue + 1);
    }
  }    
 let arrFromMap =Array.from(map)
 let resObj = {}
 for(let i = 0; i<arrFromMap.length; i++){
  let key = reverse(arrFromMap[i][0])
  let value = arrFromMap[i][1]
  resObj[key]=value
 }

  return resObj;
}
module.exports = {
  getDNSStats
};


