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
  
  // TEST CODE
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  assertArraysEqual([1, 2, 3], [1, 2, 3]);