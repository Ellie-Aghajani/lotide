// to check the equality of two parameters
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
  };
// to compare equality of two arrays
  const eqArrays = function(array1, array2) {
    for( let i = 0; i < array1.length; i++){
        if(array1[i]!== array2[i]){
            return false;
        }
    }
    return true
  }
  // using eqArray() and assertequal(), we get the final comparison result
  const assertArraysEqual = function(array1, array2){
    const result = eqArrays(array1, array2);
    assertEqual(result, true);
  }


const map = function (array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  };
  
  module.exports = map;
  
  const words = ["ground", "control", "to", "major", "tom"];
 
  
  const results1 = map(words, (word) => word[0]);
 
  
  console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]));
  