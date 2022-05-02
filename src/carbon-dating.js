const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
let data = +sampleActivity
if ( data <= 0 ||  data > 6000 || sampleActivity ===' \n\t\r' || Number(sampleActivity) !== data || sampleActivity === " " || Number(sampleActivity) === NaN || isNaN(data) || data != data || !isFinite(data) || (typeof sampleActivity !== "string" || (!sampleActivity))){
  return false
}
let k = 0.693 / HALF_LIFE_PERIOD
let a = MODERN_ACTIVITY / data
let res = Math.log(a) / k
if(res < 0){
  return false
}
return Math.ceil(res)
 
}

module.exports = {
  dateSample
};
dateSample(3)