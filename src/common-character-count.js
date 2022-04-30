const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let mapArr2 = createMap(s2);
  let counterRes = 0;
  for (let i = 0; i < s1.length; i++) {
    if (mapArr2.has(s1[i])) {
      let curVal = mapArr2.get(s1[i]);
      if (curVal === 0) {
        mapArr2.delete(s1[i]);
      } else {
        mapArr2.set(s1[i], curVal - 1);
        counterRes += 1;
      }
    }
  }
  return counterRes;
}
function createMap(arr) {
  let map = new Map();
  let value = 1;
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], value);
    } else {
      let currentValue = map.get(arr[i]);
      map.set(arr[i], currentValue + 1);
    }
  }
  return map;
}

module.exports = {
  getCommonCharacterCount,
};
