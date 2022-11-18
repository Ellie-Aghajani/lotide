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
const letterPositions = function (sentence) {

    const results = {};
    for (i = 0; i < sentence.length; i++) {
      const letter = sentence[i];
      if (letter !== " ") {
        if (!Array.isArray(results[letter])) {
    
          results[letter] = [i];
        } else {
          results[letter].push(i);
        }
      }
    }
    return results;
  };
  
  module.exports = letterPositions;
  
  console.log(letterPositions("hello"));
  assertArraysEqual(letterPositions("hello").e, [1]);
  assertArraysEqual(letterPositions("hello").l, [2, 3]);