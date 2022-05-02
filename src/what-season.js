const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 

function getSeason(date) {
  if(!date){
   return 'Unable to determine the time of year!'
  }
  if(!(date instanceof Date)){
    throw new Error ('Invalid date!')
  }
  if(typeof date ==="string"){
    throw new Error ('Invalid date!')
  }
 
 try {
  date.getTime();
}
  catch{
      throw new Error("Invalid date!");
}
 const seazon=  ["winter", "spring", "summer", "autumn"]
 let strDate = JSON.stringify(date)

//////////////

let mouns = strDate.slice(6,8)

if((+mouns> 0 && +mouns<3) || +mouns ==12){
  return seazon[0]
}
if(+mouns>= 3 && +mouns<6){
  return seazon[1]
}
if(+mouns>= 6 && +mouns<9){
  return seazon[2]
}
if(+mouns>= 9 && +mouns<12){
  return seazon[3]
}


}

module.exports = {
  getSeason
};
/* фейковая дата не проходит!!!
const fakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: 'Date'
};
*/
