const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  "res": "",  
  "arr": [],
  getLength() {
    let lengthAr = this.arr.length
    return lengthAr
  },
  addLink( value ) {
    if(typeof value ==="undefined"){
      value = ''
    }
    if(typeof value === "function"){
      value = value.toString()
    }
    let str = "" + value
    this.arr.push(str)
    let strValue = `( ${str} )~~` 
    this.res += strValue       
    return this
    },
  removeLink(position) {
      if(position < 1 || position > this.arr.length || Math.trunc(position) !== position || (typeof position !== "number") || isNaN(position) || !isFinite(position)){
         this.res = ""
         this.arr =[]
        throw new Error ("You can't remove incorrect link!") 
    }
    this.arr.splice(position-1, 1)   
    let strNewRes = ''
   for(let i = 0; i<this.arr.length; i++){
    let strValue = `( ${this.arr[i]} )~~` 
    strNewRes += strValue
   }
   this.res = strNewRes
   return this
  },
  reverseChain() {
   let reversArr = this.arr.reverse()
   this.arr =  reversArr  
   let strNewRes = ''
   for(let i = 0; i<reversArr.length; i++){
    let strValue = `( ${reversArr[i]} )~~` 
    strNewRes += strValue
   }
   this.res = strNewRes
   return this
  },
  finishChain() {
    let indLastElem = this.res.length -2
    this.res = this.res.substring(0, indLastElem)
    let item = this.res
    this.res = ''
    this.arr= []
    length = 0
    return item
  }
};

module.exports = {
  chainMaker
};

