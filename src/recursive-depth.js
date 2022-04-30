const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if(arr){
      this.calculateDepth(this.calculateDepth(false)) 
    }
    let str = JSON.stringify(arr);    
    let maxCount = 0;
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "[") {
        counter += 1;
        maxCount = counter > maxCount ? counter : maxCount;
      } else if (str[i] === "]") {
        counter -= 1;
      }
    }
    
    return maxCount;
  }
}

module.exports = {
  DepthCalculator,
};
let newInstsns = new DepthCalculator();
console.log(newInstsns.calculateDepth([[4]]));
