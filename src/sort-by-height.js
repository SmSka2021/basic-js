const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
let arrInd= arr.map((el, ind)=> el===-1? el=ind : el = "a")
let arrIndNotNull = arrInd.filter((el)=> el != "a")
let newArr = arr.filter((el)=> el != -1)
let newArrSort = newArr.sort((a, b) => a-b)
for(let i=0; i<arrIndNotNull.length; i++){
newArrSort.splice(arrIndNotNull[i], 0, -1)
}
return newArrSort
}

module.exports = {
  sortByHeight
};
