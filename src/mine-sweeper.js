const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matr) {  
  let size = matr[0].length
  let empty = []
  for(let i =0; i<matr.length; i++){
  for(let j=0; j< matr[i].length; j++){
  
      if(matr[i][j] === true){
              matr[i][j] = 1
      }else{
        matr[i][j] = 0
  }
  }
  matr[i].unshift(0)
  matr[i].push(0)
  } 
  for(let a of matr[0]){
  empty.push(0)
  }  
  matr.unshift(empty)
  matr[matr.length] = empty  
  let res1=sumSibildCell(matr)
 let res2= arrSlice(res1, size)
 return res2
}

function sumSibildCell(matr) {
  let ar=[]
 for(let i =1; i<matr.length-1; i++){
 for(let j=1; j< matr[i].length-1; j++){
   let a = matr[i-1][j-1]+matr[i-1][j]+matr[i-1][j+1]+matr[i][j-1]+ matr[i][j+1]+ matr[i+1][j-1]+ matr[i+1][j]+matr[i+1][j+1]
   ar.push(a)
   } 
 }
 return ar
 };

function arrSlice(arr, step){
let res = []
for(i=0; i<arr.length; i+=step ){
let timeRes=arr.slice(i, i+step)
res.push(timeRes)
} 
return res
}



module.exports = {
  minesweeper
};
