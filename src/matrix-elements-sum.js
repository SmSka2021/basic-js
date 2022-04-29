const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matr) {
  let arrNumber=[]
  let columnCout=matr[0].length
  for(let i=0; i<columnCout; i++){
  for (let j=0; j<matr.length; j++){
  if(matr[j][i]!=0){
  arrNumber.push(matr[j][i])
  }else{
  break
  }
  }
  }  
  let res = arrNumber.reduce((sum, item)=> sum + item, 0)
  return res
}

module.exports = {
  getMatrixElementsSum
};
