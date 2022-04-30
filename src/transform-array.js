const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(ar) {
 
if (!Array.isArray(ar)) {
  throw new Error("'arr' parameter must be an instance of the Array!");
}
let arr = [...ar];
let newArr = [];  

for (let i = 0; i < arr.length; i++) {
if (arr[0] === "--double-prev" || arr[0] === "--discard-prev") {
    arr.splice(0, 1);
  }
if (arr[arr.length -1] === "--discard-next" || arr[arr.length -1] === "--double-next") {
 arr.pop();
  }
if (arr[i] === "--discard-next" && arr[i + 2] === "--double-prev") {
    arr.splice(i, 3);
  }
if (arr[i] === "--discard-next" && arr[i + 2] === "--discard-prev") {
    arr.splice(i, 3);
  } 
    if (arr[i] === "--discard-next") {
    arr.splice(i , 2);
  } 
  
}

for (let i = 0; i < arr.length; i++) {  

if ((arr[i] !== "--discard-next") || (arr[i] !== "--double-next") || (arr[i] !== "--discard-prev") || (arr[i] !== "--double-prev") ) {
    newArr.push(arr[i]);
  }
  
if (arr[i] === "--discard-prev") {
   newArr.pop()
  }
 if (arr[i] === "--double-next" && arr[i+2] !== '--discard-prev' ) {
    newArr.push(arr[i + 1]);
  }
    if (arr[i] === "--double-prev") {
    newArr.push(arr[i - 1]);
  }      

}       
 
for (let i = 0; i < newArr.length; i++) {
  if(newArr[i] === "--discard-next" || newArr[i] === "--discard-prev" || newArr[i] === "--double-next" || newArr[i] === "--double-prev"){
    newArr.splice(i, 1);
  }
    if (typeof newArr[i] === 'undefined'){
      newArr.splice(i, 1);
     }    
  
}
return newArr;
  
}

module.exports = {
  transform,
};
